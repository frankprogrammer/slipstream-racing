import * as THREE from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { CONFIG } from "../config";
import type { TrafficPhase } from "../config";
import {
  applyLiveryColors,
  cloneMeshMaterialsUnique,
  fitCarToDimensions,
  loadPlayerCarGltf,
  pickRandomLivery,
} from "./playerCarGlb";
import { generateRacerName } from "./racerNameGenerator";
import {
  createTrafficRacerNameSprite,
  updateTrafficRacerNameSprite,
} from "./trafficRacerNameSprite";
import {
  createSlipstreamTimeBonusSprite,
  updateSlipstreamTimeBonusSprite,
  type SlipstreamTimeBonusLabel,
} from "./slipstreamTimeBonusSprite";

export type TrafficCollisionBounds = {
  cx: number;
  cz: number;
  hx: number;
  hz: number;
  /** Pool index — stable while this vehicle uses the slot. */
  slotIndex: number;
};

type PoolEntry = {
  group: THREE.Group;
  /** Cloned glTF root (liveries applied here). */
  carRoot: THREE.Object3D;
  active: boolean;
  /** True after player successfully slingshots from this car. */
  slipstreamConsumed: boolean;
  /** Normal traffic vs. outer-lane pass (2× scroll, fixed travel, no lane change). */
  passKind: "traffic" | "overtake";
  /** Spawn Z for pass cars — used to measure travel before despawn. */
  overtakeOriginZ: number;
  laneIndex: number;
  speedMul: number;
  laneChangeState: "idle" | "active" | "done";
  laneChangeFromLane: number;
  laneChangeToLane: number;
  laneChangeStartMs: number;
  /** Overtake-only; drawn on `nameSprite`. */
  racerName: string;
  nameSprite: THREE.Sprite;
  slipstreamTimeBonusSprite: THREE.Sprite;
};

/**
 * Object-pooled traffic: clones of `playerCar.glb` with random named-material liveries.
 */
export class TrafficSpawner {
  readonly group = new THREE.Group();

  private readonly pool: PoolEntry[] = [];
  private gltfTemplate!: GLTF;
  private spawnAccMs = 0;
  private readonly despawnBehindZ = 25;
  private spawnsSinceRail = 0;
  private railPatternIndex = 0;
  private railStepIndex = 0;
  private railActive = false;
  private overtakeTryAccMs = 0;
  private lastOvertakeSpawnRunMs = -1e12;
  private slipstreamTimeBonusLabel: SlipstreamTimeBonusLabel = "normal";

  private constructor() {
    this.group.name = "TrafficGroup";
  }

  static async create(): Promise<TrafficSpawner> {
    const gltf = await loadPlayerCarGltf();
    const spawner = new TrafficSpawner();
    spawner.gltfTemplate = gltf;
    for (let i = 0; i < CONFIG.VEHICLE_POOL_SIZE; i++) {
      spawner.pool.push(spawner.createVehicle());
    }
    return spawner;
  }

  private createVehicle(): PoolEntry {
    const g = new THREE.Group();
    const carRoot = this.gltfTemplate.scene.clone(true);
    cloneMeshMaterialsUnique(carRoot);
    fitCarToDimensions(carRoot, CONFIG.TAXI_DIMENSIONS, 0);
    carRoot.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
      }
    });
    const firstLivery = CONFIG.TRAFFIC_LIVERY_VARIANTS[0]!;
    applyLiveryColors(carRoot, firstLivery);
    g.add(carRoot);

    const nameSprite = createTrafficRacerNameSprite();
    const { height } = CONFIG.TAXI_DIMENSIONS;
    nameSprite.position.set(0, height + CONFIG.TRAFFIC_RACER_NAME_OFFSET_Y, 0);
    g.add(nameSprite);

    const slipstreamTimeBonusSprite = createSlipstreamTimeBonusSprite();
    // Place label inside each car's slipstream zone: 15% from trailing edge toward the car.
    const rearZ = -CONFIG.TAXI_DIMENSIONS.length / 2;
    const zoneBackZ = rearZ - CONFIG.SLIPSTREAM_ZONE_DEPTH;
    const labelZ = zoneBackZ + CONFIG.SLIPSTREAM_ZONE_DEPTH * 0.15;
    slipstreamTimeBonusSprite.position.set(0, height * 0.72, labelZ);
    g.add(slipstreamTimeBonusSprite);

    g.visible = false;
    this.group.add(g);
    return {
      group: g,
      carRoot,
      active: false,
      slipstreamConsumed: false,
      passKind: "traffic",
      overtakeOriginZ: 0,
      laneIndex: 1,
      speedMul: 1,
      laneChangeState: "idle",
      laneChangeFromLane: 1,
      laneChangeToLane: 1,
      laneChangeStartMs: 0,
      racerName: "",
      nameSprite,
      slipstreamTimeBonusSprite,
    };
  }

  reset(): void {
    this.spawnAccMs = CONFIG.TRAFFIC_PHASES[0].spawnRate;
    this.spawnsSinceRail = 0;
    this.railPatternIndex = 0;
    this.railStepIndex = 0;
    this.railActive = false;
    this.slipstreamTimeBonusLabel = "normal";
    for (const p of this.pool) {
      p.active = false;
      p.slipstreamConsumed = false;
      p.passKind = "traffic";
      p.overtakeOriginZ = 0;
      p.group.visible = false;
      p.group.position.set(0, 0, 0);
      p.group.rotation.set(0, 0, 0);
      p.laneChangeState = "idle";
      p.laneChangeFromLane = p.laneIndex;
      p.laneChangeToLane = p.laneIndex;
      p.laneChangeStartMs = 0;
      p.nameSprite.visible = false;
      p.slipstreamTimeBonusSprite.visible = false;
      updateSlipstreamTimeBonusSprite(p.slipstreamTimeBonusSprite, "normal");
    }
    this.overtakeTryAccMs = 0;
    this.lastOvertakeSpawnRunMs = -1e12;
  }

  private easeInOutCubic(t: number): number {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  private laneHasBlockingTraffic(self: PoolEntry, targetLane: number): boolean {
    const targetX = this.laneIndexToX(targetLane);
    const hzSelf = this.hzFor();
    for (const o of this.pool) {
      if (!o.active || o === self) continue;
      const hzOther = this.hzFor();
      if (
        !this.longFootprintsOverlap(
          self.group.position.z,
          hzSelf,
          o.group.position.z,
          hzOther,
        )
      ) {
        continue;
      }
      // Another car already merging into this lane — block even before their X reaches it
      // (prevents left + right outer lanes both committing into center at the same Z).
      if (o.laneChangeState === "active" && o.laneChangeToLane === targetLane) {
        return true;
      }
      // Use live X so cars mid-lane-change still block entry into that lane corridor.
      if (Math.abs(o.group.position.x - targetX) <= CONFIG.LANE_WIDTH * 0.55) {
        return true;
      }
    }
    return false;
  }

  private pickAdjacentLaneForChange(
    self: PoolEntry,
    phase: TrafficPhase,
    fromLane: number,
  ): number | null {
    const candidates: number[] = [];
    const left = fromLane - 1;
    const right = fromLane + 1;
    if (
      left >= 0 &&
      left < CONFIG.LANE_COUNT &&
      phase.lanes.includes(left) &&
      !this.laneHasBlockingTraffic(self, left)
    ) {
      candidates.push(left);
    }
    if (
      right >= 0 &&
      right < CONFIG.LANE_COUNT &&
      phase.lanes.includes(right) &&
      !this.laneHasBlockingTraffic(self, right)
    ) {
      candidates.push(right);
    }
    if (!candidates.length) return null;
    return candidates[Math.floor(Math.random() * candidates.length)]!;
  }

  private maybeStartLaneChange(
    p: PoolEntry,
    phase: TrafficPhase,
    elapsedMs: number,
  ): void {
    if (p.laneChangeState !== "idle") return;
    if (!phase.laneChange) return;
    if (phase.lanes.length < 2) {
      p.laneChangeState = "done";
      return;
    }
    const triggerZ =
      CONFIG.TAXI_POSITION_Z + CONFIG.VEHICLE_LANE_CHANGE_TRIGGER_AHEAD_Z;
    if (p.group.position.z > triggerZ) return;

    if (Math.random() > CONFIG.VEHICLE_LANE_CHANGE_CHANCE) {
      p.laneChangeState = "done";
      return;
    }
    const targetLane = this.pickAdjacentLaneForChange(p, phase, p.laneIndex);
    if (targetLane === null) {
      p.laneChangeState = "done";
      return;
    }

    p.laneChangeState = "active";
    p.laneChangeFromLane = p.laneIndex;
    p.laneChangeToLane = targetLane;
    p.laneChangeStartMs = elapsedMs;
  }

  private updateLaneChange(p: PoolEntry, elapsedMs: number): void {
    if (p.laneChangeState !== "active") return;
    const total = Math.max(1, CONFIG.VEHICLE_LANE_CHANGE_TOTAL_MS);
    const signalPortion = THREE.MathUtils.clamp(
      CONFIG.VEHICLE_LANE_CHANGE_SIGNAL_PORTION,
      0.05,
      0.95,
    );
    const tRaw = (elapsedMs - p.laneChangeStartMs) / total;
    const t = THREE.MathUtils.clamp(tRaw, 0, 1);
    const fromX = this.laneIndexToX(p.laneChangeFromLane);
    const toX = this.laneIndexToX(p.laneChangeToLane);
    const dir = Math.sign(toX - fromX) || 1;
    const signalOffset =
      CONFIG.LANE_WIDTH * CONFIG.VEHICLE_LANE_CHANGE_SIGNAL_OFFSET_FRAC * dir;

    if (t >= 1) {
      p.group.position.x = toX;
      p.laneIndex = p.laneChangeToLane;
      p.laneChangeState = "done";
      return;
    }

    let x = fromX;
    if (t < signalPortion) {
      const u = this.easeInOutCubic(t / signalPortion);
      x = THREE.MathUtils.lerp(fromX, fromX + signalOffset, u);
    } else {
      const u = this.easeInOutCubic((t - signalPortion) / (1 - signalPortion));
      x = THREE.MathUtils.lerp(fromX + signalOffset, toX, u);
    }
    p.group.position.x = x;
  }

  private getPhase(elapsedMs: number): TrafficPhase {
    const phases = CONFIG.TRAFFIC_PHASES;
    let current = phases[0];
    for (const ph of phases) {
      if (elapsedMs >= ph.startTime) current = ph;
    }
    return current;
  }

  private laneIndexToX(index: number): number {
    return (index - 1) * CONFIG.LANE_WIDTH;
  }

  private startNextRail(): void {
    this.railActive = true;
    this.railStepIndex = 0;
  }

  private getCurrentRailPattern(): readonly number[] {
    const all = CONFIG.FLOW_RAILS_PATTERNS;
    return all[this.railPatternIndex % all.length] ?? [];
  }

  private resolveRailLaneToPhase(
    phase: TrafficPhase,
    desiredLane: number,
  ): number {
    if (phase.lanes.includes(desiredLane)) return desiredLane;
    let best = phase.lanes[0]!;
    let bestDist = Math.abs(best - desiredLane);
    for (const lane of phase.lanes) {
      const d = Math.abs(lane - desiredLane);
      if (d < bestDist) {
        best = lane;
        bestDist = d;
      }
    }
    return best;
  }

  private shouldStartRail(elapsedMs: number, phase: TrafficPhase): boolean {
    if (!CONFIG.FLOW_RAILS_ENABLED) return false;
    if (this.railActive) return false;
    if (CONFIG.FLOW_RAILS_PATTERNS.length === 0) return false;
    if (elapsedMs < CONFIG.FLOW_RAILS_START_MS) return false;
    if (phase.lanes.length < 2) return false;
    return this.spawnsSinceRail >= CONFIG.FLOW_RAILS_GAP_SPAWNS;
  }

  private pickLane(phase: TrafficPhase, elapsedMs: number): number {
    if (this.shouldStartRail(elapsedMs, phase)) {
      this.startNextRail();
    }
    if (this.railActive) {
      const pattern = this.getCurrentRailPattern();
      if (pattern.length > 0) {
        const rawLane = pattern[this.railStepIndex % pattern.length]!;
        return this.resolveRailLaneToPhase(phase, rawLane);
      }
    }
    const lanes = phase.lanes;
    return lanes[Math.floor(Math.random() * lanes.length)]!;
  }

  private hzFor(): number {
    return CONFIG.TAXI_DIMENSIONS.length / 2;
  }

  private zFootprint(cz: number, hz: number): { min: number; max: number } {
    const zd = CONFIG.SLIPSTREAM_ZONE_DEPTH;
    return { min: cz - hz - zd, max: cz + hz };
  }

  private longFootprintsOverlap(
    czA: number,
    hzA: number,
    czB: number,
    hzB: number,
  ): boolean {
    const buf = CONFIG.TRAFFIC_SPAWN_MIN_Z_BUFFER;
    const a = this.zFootprint(czA, hzA);
    const b = this.zFootprint(czB, hzB);
    const separated = a.max + buf <= b.min || b.max + buf <= a.min;
    return !separated;
  }

  private minCenterZAheadOfOther(idle: PoolEntry, other: PoolEntry): number {
    const hzO = this.hzFor();
    const hzI = this.hzFor();
    const oz = other.group.position.z;
    return (
      oz +
      hzO +
      hzI +
      CONFIG.SLIPSTREAM_ZONE_DEPTH +
      CONFIG.TRAFFIC_SPAWN_MIN_Z_BUFFER
    );
  }

  private resolveSpawnZ(lane: number, idle: PoolEntry, z: number): number {
    const hzI = this.hzFor();
    let zz = z;
    for (let iter = 0; iter < 40; iter++) {
      let changed = false;
      for (const o of this.pool) {
        if (!o.active || o === idle) continue;
        if (Math.abs(o.laneIndex - lane) > 1) continue;
        const hzO = this.hzFor();
        const oz = o.group.position.z;
        if (this.longFootprintsOverlap(zz, hzI, oz, hzO)) {
          const need = this.minCenterZAheadOfOther(idle, o);
          if (zz < need) {
            zz = need;
            changed = true;
          }
        }
      }
      if (!changed) break;
    }
    return zz;
  }

  private separateOverlappingTraffic(): void {
    const buf = CONFIG.TRAFFIC_SPAWN_MIN_Z_BUFFER;
    const zd = CONFIG.SLIPSTREAM_ZONE_DEPTH;
    for (let pass = 0; pass < 12; pass++) {
      let changed = false;
      const act = this.pool.filter((p) => p.active);
      for (let i = 0; i < act.length; i++) {
        for (let j = i + 1; j < act.length; j++) {
          const a = act[i]!;
          const b = act[j]!;
          if (a.passKind === "overtake" || b.passKind === "overtake") continue;
          if (Math.abs(a.laneIndex - b.laneIndex) > 1) continue;
          const hzA = this.hzFor();
          const hzB = this.hzFor();
          const za = a.group.position.z;
          const zb = b.group.position.z;
          if (!this.longFootprintsOverlap(za, hzA, zb, hzB)) continue;
          if (za >= zb) {
            a.group.position.z = zb + hzB + hzA + zd + buf;
          } else {
            b.group.position.z = za + hzA + hzB + zd + buf;
          }
          changed = true;
        }
      }
      if (!changed) break;
    }
  }

  private trySpawn(elapsedMs: number): void {
    const idle = this.pool.find((p) => !p.active);
    if (!idle) return;
    const phase = this.getPhase(elapsedMs);
    const lane = this.pickLane(phase, elapsedMs);
    const varianceScale = this.railActive
      ? CONFIG.FLOW_RAILS_SPEED_VARIANCE_SCALE
      : 1;
    const variance =
      1 + (Math.random() * 2 - 1) * phase.speedVariance * varianceScale;
    idle.laneIndex = lane;
    idle.speedMul = Math.max(0.4, variance);

    applyLiveryColors(idle.carRoot, pickRandomLivery());

    idle.active = true;
    idle.slipstreamConsumed = false;
    idle.group.visible = true;
    idle.laneChangeState = "idle";
    idle.laneChangeFromLane = lane;
    idle.laneChangeToLane = lane;
    idle.laneChangeStartMs = 0;
    idle.passKind = "traffic";
    idle.nameSprite.visible = false;
    idle.slipstreamTimeBonusSprite.visible = true;
    updateSlipstreamTimeBonusSprite(
      idle.slipstreamTimeBonusSprite,
      this.slipstreamTimeBonusLabel,
    );
    idle.group.rotation.set(0, 0, 0);

    const jitter = Math.random() * CONFIG.TRAFFIC_SPAWN_AHEAD_Z_JITTER;
    let z = CONFIG.TAXI_POSITION_Z + CONFIG.TRAFFIC_SPAWN_AHEAD_Z + jitter;
    z = this.resolveSpawnZ(lane, idle, z);
    idle.group.position.set(this.laneIndexToX(lane), 0, z);

    if (this.railActive) {
      this.railStepIndex += 1;
      const pattern = this.getCurrentRailPattern();
      if (pattern.length === 0 || this.railStepIndex >= pattern.length) {
        this.railActive = false;
        this.railStepIndex = 0;
        this.railPatternIndex =
          (this.railPatternIndex + 1) %
          Math.max(1, CONFIG.FLOW_RAILS_PATTERNS.length);
        this.spawnsSinceRail = 0;
      }
    } else {
      this.spawnsSinceRail += 1;
    }
  }

  /** Any active car whose X sits in this lane corridor (includes lane-change). */
  private laneHasAnyActiveVehicle(lane: number): boolean {
    const targetX = this.laneIndexToX(lane);
    const half = CONFIG.LANE_WIDTH * 0.55;
    for (const o of this.pool) {
      if (!o.active) continue;
      if (Math.abs(o.group.position.x - targetX) <= half) {
        return true;
      }
    }
    return false;
  }

  private trySpawnOvertakeVehicle(targetLane: number): boolean {
    const idle = this.pool.find((p) => !p.active);
    if (!idle) return false;
    idle.laneIndex = targetLane;
    idle.speedMul = 1;
    idle.passKind = "overtake";
    idle.overtakeOriginZ =
      CONFIG.TAXI_POSITION_Z + CONFIG.OVERTAKE_PASS_START_Z_OFFSET;
    idle.slipstreamConsumed = false;
    idle.laneChangeState = "idle";
    idle.laneChangeFromLane = targetLane;
    idle.laneChangeToLane = targetLane;
    idle.laneChangeStartMs = 0;
    applyLiveryColors(idle.carRoot, pickRandomLivery());
    idle.racerName = generateRacerName();
    updateTrafficRacerNameSprite(idle.nameSprite, idle.racerName);
    idle.nameSprite.visible = true;
    idle.slipstreamTimeBonusSprite.visible = true;
    updateSlipstreamTimeBonusSprite(
      idle.slipstreamTimeBonusSprite,
      this.slipstreamTimeBonusLabel,
    );
    idle.active = true;
    idle.group.visible = true;
    idle.group.rotation.set(0, 0, 0);
    idle.group.position.set(
      this.laneIndexToX(targetLane),
      0,
      idle.overtakeOriginZ,
    );
    return true;
  }

  /**
   * Player on an outer lane + opposite lane visually empty → random pass car at intro Z,
   * net motion uses 2× scroll (same forward term as normal traffic).
   */
  private maybeSpawnOvertakePass(
    elapsedMs: number,
    playerLaneIndex: number,
    deltaSec: number,
    superSlipstreamActive: boolean,
  ): void {
    if (!CONFIG.OVERTAKE_PASS_ENABLED) return;
    if (superSlipstreamActive) return;
    if (playerLaneIndex !== 0 && playerLaneIndex !== 2) return;

    let targetLane: number | null = null;
    if (playerLaneIndex === 2 && !this.laneHasAnyActiveVehicle(0)) {
      targetLane = 0;
    } else if (playerLaneIndex === 0 && !this.laneHasAnyActiveVehicle(2)) {
      targetLane = 2;
    }
    if (targetLane === null) return;

    this.overtakeTryAccMs += deltaSec * 1000;
    while (this.overtakeTryAccMs >= CONFIG.OVERTAKE_PASS_TRY_INTERVAL_MS) {
      this.overtakeTryAccMs -= CONFIG.OVERTAKE_PASS_TRY_INTERVAL_MS;
      if (Math.random() > CONFIG.OVERTAKE_PASS_TRY_CHANCE) continue;
      if (
        elapsedMs - this.lastOvertakeSpawnRunMs <
        CONFIG.OVERTAKE_PASS_COOLDOWN_MS
      ) {
        break;
      }
      if (this.trySpawnOvertakeVehicle(targetLane)) {
        this.lastOvertakeSpawnRunMs = elapsedMs;
      }
      break;
    }
  }

  private releaseVehicle(p: PoolEntry): void {
    p.active = false;
    p.group.visible = false;
    p.group.position.set(0, 0, 0);
    p.group.rotation.set(0, 0, 0);
    p.laneChangeState = "idle";
    p.passKind = "traffic";
    p.overtakeOriginZ = 0;
    p.nameSprite.visible = false;
    p.slipstreamTimeBonusSprite.visible = false;
  }

  private updateSlipstreamTimeBonusLabels(superSlipstreamActive: boolean): void {
    const nextLabel: SlipstreamTimeBonusLabel = superSlipstreamActive
      ? "super"
      : "normal";
    if (this.slipstreamTimeBonusLabel === nextLabel) return;
    this.slipstreamTimeBonusLabel = nextLabel;
    for (const p of this.pool) {
      updateSlipstreamTimeBonusSprite(p.slipstreamTimeBonusSprite, nextLabel);
    }
  }

  update(
    deltaSec: number,
    elapsedMs: number,
    scrollPerFrame: number,
    playerLaneIndex: number | null,
    superSlipstreamActive: boolean,
  ): void {
    this.updateSlipstreamTimeBonusLabels(superSlipstreamActive);

    if (playerLaneIndex !== null) {
      this.maybeSpawnOvertakePass(
        elapsedMs,
        playerLaneIndex,
        deltaSec,
        superSlipstreamActive,
      );
    }

    const phase = this.getPhase(elapsedMs);
    const spawnInterval = this.railActive
      ? phase.spawnRate * CONFIG.FLOW_RAILS_SPAWN_RATE_SCALE
      : phase.spawnRate;
    this.spawnAccMs += deltaSec * 1000;
    while (this.spawnAccMs >= spawnInterval) {
      this.spawnAccMs -= spawnInterval;
      this.trySpawn(elapsedMs);
    }

    const dt = Math.min(deltaSec, CONFIG.TRAFFIC_MAX_PHYSICS_DELTA_SEC);
    const scroll = scrollPerFrame * 60 * dt;

    for (const p of this.pool) {
      if (!p.active) continue;
      const forward =
        CONFIG.VEHICLE_TRAFFIC_FORWARD_SPEED * 60 * dt * p.speedMul;

      if (p.passKind === "overtake") {
        /**
         * Spawn behind the taxi (negative Z). Move **forward** along the road = **+Δz**
         * (opposite sign from normal traffic, which scrolls toward −Z). ~2× player scroll
         * minus the usual traffic forward term. Despawn after fixed +Z travel only.
         */
        const forwardZ = Math.max(
          CONFIG.VEHICLE_TRAFFIC_MIN_APPROACH,
          2 * scroll - forward,
        );
        p.group.position.z += forwardZ;
        if (
          p.group.position.z - p.overtakeOriginZ >=
          CONFIG.OVERTAKE_PASS_TRAVEL_Z
        ) {
          this.releaseVehicle(p);
        }
        continue;
      }

      const net = scroll - forward;
      p.group.position.z -= Math.max(CONFIG.VEHICLE_TRAFFIC_MIN_APPROACH, net);
      this.maybeStartLaneChange(p, phase, elapsedMs);
      this.updateLaneChange(p, elapsedMs);
      if (p.group.position.z < CONFIG.TAXI_POSITION_Z - this.despawnBehindZ) {
        this.releaseVehicle(p);
      }
    }

    this.separateOverlappingTraffic();
  }

  /** All pool slots — for attaching per-slot VFX (e.g. burst anchor) to each car group. */
  forEachPoolCarGroup(
    cb: (slotIndex: number, carGroup: THREE.Group) => void,
  ): void {
    for (let i = 0; i < this.pool.length; i++) {
      cb(i, this.pool[i]!.group);
    }
  }

  /** Active overtake pass cars only — for VFX parented to each car `group`. */
  forEachOvertakeSlot(
    cb: (slotIndex: number, carGroup: THREE.Group) => void,
  ): void {
    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]!;
      if (!p.active || p.passKind !== "overtake") continue;
      cb(i, p.group);
    }
  }

  isOvertakeSlotActive(slotIndex: number): boolean {
    const p = this.pool[slotIndex];
    return !!(p && p.active && p.passKind === "overtake");
  }

  /** Expose each pool slot's active state, position, and speed multiplier for audio / VFX. */
  forEachPoolSlot(
    cb: (
      slotIndex: number,
      active: boolean,
      cx: number,
      cy: number,
      cz: number,
      speedMul: number,
    ) => void,
  ): void {
    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]!;
      if (!p.active) {
        cb(i, false, 0, 0, 0, 0);
        continue;
      }
      cb(
        i,
        true,
        p.group.position.x,
        p.group.position.y,
        p.group.position.z,
        p.speedMul,
      );
    }
  }

  getPoolCarGroup(slotIndex: number): THREE.Group | null {
    const p = this.pool[slotIndex];
    if (!p || !p.active) return null;
    return p.group;
  }

  /** World position of the slipstream “+N sec” label (before consume hides it). */
  getSlipstreamTimeBonusWorldPosition(
    slotIndex: number,
    out: THREE.Vector3,
  ): boolean {
    const p = this.pool[slotIndex];
    if (!p || !p.active) return false;
    p.slipstreamTimeBonusSprite.getWorldPosition(out);
    return true;
  }

  forEachPoolWindSlot(
    cb: (
      slotIndex: number,
      active: boolean,
      slipstreamAvailable: boolean,
      cx: number,
      cz: number,
      hz: number,
    ) => void,
  ): void {
    const hz = CONFIG.TAXI_DIMENSIONS.length / 2;
    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]!;
      if (!p.active) {
        cb(i, false, false, 0, 0, 0);
        continue;
      }
      cb(
        i,
        true,
        !p.slipstreamConsumed,
        p.group.position.x,
        p.group.position.z,
        hz,
      );
    }
  }

  markSlipstreamConsumed(target: TrafficCollisionBounds | null): void {
    if (!target) return;
    const p = this.findClosestActiveVehicleXZ(target.cx, target.cz);
    if (p) {
      p.slipstreamConsumed = true;
      p.slipstreamTimeBonusSprite.visible = false;
    }
  }

  private findClosestActiveVehicleXZ(cx: number, cz: number): PoolEntry | null {
    const maxD = CONFIG.TRAFFIC_HEADLIGHT_MATCH_MAX_DIST;
    const maxSq = maxD * maxD;
    let best: PoolEntry | null = null;
    let bestSq = Infinity;
    for (const p of this.pool) {
      if (!p.active || p.slipstreamConsumed) continue;
      const dx = p.group.position.x - cx;
      const dz = p.group.position.z - cz;
      const sq = dx * dx + dz * dz;
      if (sq < bestSq && sq <= maxSq) {
        bestSq = sq;
        best = p;
      }
    }
    return best;
  }

  getActiveCollisionBounds(): TrafficCollisionBounds[] {
    const { width, length } = CONFIG.TAXI_DIMENSIONS;
    const hx = width / 2;
    const hz = length / 2;
    const out: TrafficCollisionBounds[] = [];
    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]!;
      if (!p.active || p.slipstreamConsumed) continue;
      out.push({
        cx: p.group.position.x,
        cz: p.group.position.z,
        hx,
        hz,
        slotIndex: i,
      });
    }
    return out;
  }

  getAllActiveCollisionBounds(): TrafficCollisionBounds[] {
    const { width, length } = CONFIG.TAXI_DIMENSIONS;
    const hx = width / 2;
    const hz = length / 2;
    const out: TrafficCollisionBounds[] = [];
    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]!;
      if (!p.active) continue;
      out.push({
        cx: p.group.position.x,
        cz: p.group.position.z,
        hx,
        hz,
        slotIndex: i,
      });
    }
    return out;
  }
}
