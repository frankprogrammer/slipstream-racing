import * as THREE from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CONFIG } from '../config';
import type { TrafficPhase } from '../config';
import {
  applyLiveryColors,
  cloneMeshMaterialsUnique,
  fitCarToDimensions,
  loadPlayerCarGltf,
  pickRandomLivery,
} from './playerCarGlb';

export type TrafficCollisionBounds = {
  cx: number;
  cz: number;
  hx: number;
  hz: number;
};

type PoolEntry = {
  group: THREE.Group;
  /** Cloned glTF root (liveries applied here). */
  carRoot: THREE.Object3D;
  active: boolean;
  /** True after player successfully slingshots from this car. */
  slipstreamConsumed: boolean;
  laneIndex: number;
  speedMul: number;
  laneChangeState: 'idle' | 'active' | 'done';
  laneChangeFromLane: number;
  laneChangeToLane: number;
  laneChangeStartMs: number;
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

  private constructor() {
    this.group.name = 'TrafficGroup';
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
    carRoot.traverse(obj => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
      }
    });
    const firstLivery = CONFIG.TRAFFIC_LIVERY_VARIANTS[0]!;
    applyLiveryColors(carRoot, firstLivery);
    g.add(carRoot);

    g.visible = false;
    this.group.add(g);
    return {
      group: g,
      carRoot,
      active: false,
      slipstreamConsumed: false,
      laneIndex: 1,
      speedMul: 1,
      laneChangeState: 'idle',
      laneChangeFromLane: 1,
      laneChangeToLane: 1,
      laneChangeStartMs: 0,
    };
  }

  reset(): void {
    this.spawnAccMs = CONFIG.TRAFFIC_PHASES[0].spawnRate;
    this.spawnsSinceRail = 0;
    this.railPatternIndex = 0;
    this.railStepIndex = 0;
    this.railActive = false;
    for (const p of this.pool) {
      p.active = false;
      p.slipstreamConsumed = false;
      p.group.visible = false;
      p.laneChangeState = 'idle';
      p.laneChangeFromLane = p.laneIndex;
      p.laneChangeToLane = p.laneIndex;
      p.laneChangeStartMs = 0;
    }
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
      if (!this.longFootprintsOverlap(self.group.position.z, hzSelf, o.group.position.z, hzOther)) {
        continue;
      }
      // Another car already merging into this lane — block even before their X reaches it
      // (prevents left + right outer lanes both committing into center at the same Z).
      if (o.laneChangeState === 'active' && o.laneChangeToLane === targetLane) {
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
    fromLane: number
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

  private maybeStartLaneChange(p: PoolEntry, phase: TrafficPhase, elapsedMs: number): void {
    if (p.laneChangeState !== 'idle') return;
    if (!phase.laneChange) return;
    if (phase.lanes.length < 2) {
      p.laneChangeState = 'done';
      return;
    }
    const triggerZ = CONFIG.TAXI_POSITION_Z + CONFIG.VEHICLE_LANE_CHANGE_TRIGGER_AHEAD_Z;
    if (p.group.position.z > triggerZ) return;

    if (Math.random() > CONFIG.VEHICLE_LANE_CHANGE_CHANCE) {
      p.laneChangeState = 'done';
      return;
    }
    const targetLane = this.pickAdjacentLaneForChange(p, phase, p.laneIndex);
    if (targetLane === null) {
      p.laneChangeState = 'done';
      return;
    }

    p.laneChangeState = 'active';
    p.laneChangeFromLane = p.laneIndex;
    p.laneChangeToLane = targetLane;
    p.laneChangeStartMs = elapsedMs;
  }

  private updateLaneChange(p: PoolEntry, elapsedMs: number): void {
    if (p.laneChangeState !== 'active') return;
    const total = Math.max(1, CONFIG.VEHICLE_LANE_CHANGE_TOTAL_MS);
    const signalPortion = THREE.MathUtils.clamp(
      CONFIG.VEHICLE_LANE_CHANGE_SIGNAL_PORTION,
      0.05,
      0.95
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
      p.laneChangeState = 'done';
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

  private resolveRailLaneToPhase(phase: TrafficPhase, desiredLane: number): number {
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
    hzB: number
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
      const act = this.pool.filter(p => p.active);
      for (let i = 0; i < act.length; i++) {
        for (let j = i + 1; j < act.length; j++) {
          const a = act[i]!;
          const b = act[j]!;
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
    const idle = this.pool.find(p => !p.active);
    if (!idle) return;
    const phase = this.getPhase(elapsedMs);
    const lane = this.pickLane(phase, elapsedMs);
    const varianceScale = this.railActive ? CONFIG.FLOW_RAILS_SPEED_VARIANCE_SCALE : 1;
    const variance = 1 + (Math.random() * 2 - 1) * phase.speedVariance * varianceScale;
    idle.laneIndex = lane;
    idle.speedMul = Math.max(0.4, variance);

    applyLiveryColors(idle.carRoot, pickRandomLivery());

    idle.active = true;
    idle.slipstreamConsumed = false;
    idle.group.visible = true;
    idle.laneChangeState = 'idle';
    idle.laneChangeFromLane = lane;
    idle.laneChangeToLane = lane;
    idle.laneChangeStartMs = 0;

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
          (this.railPatternIndex + 1) % Math.max(1, CONFIG.FLOW_RAILS_PATTERNS.length);
        this.spawnsSinceRail = 0;
      }
    } else {
      this.spawnsSinceRail += 1;
    }
  }

  update(deltaSec: number, elapsedMs: number, scrollPerFrame: number): void {
    const phase = this.getPhase(elapsedMs);
    const spawnInterval = this.railActive
      ? phase.spawnRate * CONFIG.FLOW_RAILS_SPAWN_RATE_SCALE
      : phase.spawnRate;
    this.spawnAccMs += deltaSec * 1000;
    while (this.spawnAccMs >= spawnInterval) {
      this.spawnAccMs -= spawnInterval;
      this.trySpawn(elapsedMs);
    }

    const scroll = scrollPerFrame * 60 * deltaSec;

    for (const p of this.pool) {
      if (!p.active) continue;
      const forward =
        CONFIG.VEHICLE_TRAFFIC_FORWARD_SPEED * 60 * deltaSec * p.speedMul;
      const net = scroll - forward;
      p.group.position.z -= Math.max(CONFIG.VEHICLE_TRAFFIC_MIN_APPROACH, net);
      this.maybeStartLaneChange(p, phase, elapsedMs);
      this.updateLaneChange(p, elapsedMs);
      if (p.group.position.z < CONFIG.TAXI_POSITION_Z - this.despawnBehindZ) {
        p.active = false;
        p.group.visible = false;
        p.laneChangeState = 'idle';
      }
    }

    this.separateOverlappingTraffic();
  }

  forEachPoolWindSlot(
    cb: (
      slotIndex: number,
      active: boolean,
      slipstreamAvailable: boolean,
      cx: number,
      cz: number,
      hz: number
    ) => void
  ): void {
    const hz = CONFIG.TAXI_DIMENSIONS.length / 2;
    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]!;
      if (!p.active) {
        cb(i, false, false, 0, 0, 0);
        continue;
      }
      cb(i, true, !p.slipstreamConsumed, p.group.position.x, p.group.position.z, hz);
    }
  }

  markSlipstreamConsumed(target: TrafficCollisionBounds | null): void {
    if (!target) return;
    const p = this.findClosestActiveVehicleXZ(target.cx, target.cz);
    if (p) p.slipstreamConsumed = true;
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
    for (const p of this.pool) {
      if (!p.active || p.slipstreamConsumed) continue;
      out.push({
        cx: p.group.position.x,
        cz: p.group.position.z,
        hx,
        hz,
      });
    }
    return out;
  }

  /** Find the THREE.Group of the traffic car closest to the given XZ position. */
  getHitCarGroup(cx: number, cz: number): THREE.Group | null {
    let best: PoolEntry | null = null;
    let bestSq = Infinity;
    for (const p of this.pool) {
      if (!p.active) continue;
      const dx = p.group.position.x - cx;
      const dz = p.group.position.z - cz;
      const sq = dx * dx + dz * dz;
      if (sq < bestSq) {
        bestSq = sq;
        best = p;
      }
    }
    return best?.group ?? null;
  }

  getAllActiveCollisionBounds(): TrafficCollisionBounds[] {
    const { width, length } = CONFIG.TAXI_DIMENSIONS;
    const hx = width / 2;
    const hz = length / 2;
    const out: TrafficCollisionBounds[] = [];
    for (const p of this.pool) {
      if (!p.active) continue;
      out.push({
        cx: p.group.position.x,
        cz: p.group.position.z,
        hx,
        hz,
      });
    }
    return out;
  }
}
