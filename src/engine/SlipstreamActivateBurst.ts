import * as THREE from "three";
import { CONFIG } from "../config";

/**
 * Points from the car rear streaming along local −Z (screen bottom in chase view).
 * Emits for `SLINGSHOT_BURST_DURATION` after a successful slipstream exit (slingshot).
 * `burst()` is an optional initial fill when the window starts.
 */
export class SlipstreamActivateBurst {
  readonly anchor = new THREE.Group();

  private burstWindowActive = false;
  private spawnAcc = 0;

  private readonly positions: Float32Array;
  private readonly velocities: Float32Array;
  private readonly ages: Float32Array;
  private readonly lifetimes: Float32Array;
  private readonly geometry: THREE.BufferGeometry;
  private readonly points: THREE.Points;
  private readonly material: THREE.PointsMaterial;
  private readonly count: number;

  constructor() {
    this.anchor.name = "SlipstreamActivateBurst";
    this.count = CONFIG.SLIPSTREAM_ACTIVATE_BURST_COUNT;
    this.positions = new Float32Array(this.count * 3);
    this.velocities = new Float32Array(this.count * 3);
    this.ages = new Float32Array(this.count);
    this.lifetimes = new Float32Array(this.count);

    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.BufferAttribute(this.positions, 3),
    );
    this.geometry = geom;

    this.material = new THREE.PointsMaterial({
      color: CONFIG.SLIPSTREAM_ACTIVATE_BURST_COLOR,
      size: CONFIG.SLIPSTREAM_ACTIVATE_BURST_POINT_SIZE,
      transparent: true,
      opacity: CONFIG.SLIPSTREAM_ACTIVATE_BURST_OPACITY,
      depthWrite: false,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 8;
    this.anchor.add(this.points);

    this.applyAnchorLocal();
    this.hideAll();
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }

  private applyAnchorLocal(): void {
    const { height, length } = CONFIG.TAXI_DIMENSIONS;
    this.anchor.position.set(
      0,
      height * CONFIG.SLIPSTREAM_ACTIVATE_BURST_EMIT_Y_FRAC,
      -length * 0.5 - CONFIG.SLIPSTREAM_ACTIVATE_BURST_EMIT_Z_INSET,
    );
  }

  private hideAll(): void {
    const n = this.count;
    for (let i = 0; i < n; i++) {
      this.positions[i * 3 + 1] = -400;
      this.ages[i] = 1e9;
    }
    const attr = this.geometry.attributes.position;
    if (attr) attr.needsUpdate = true;
  }

  reset(): void {
    this.burstWindowActive = false;
    this.spawnAcc = 0;
    this.hideAll();
  }

  /** True while post-slingshot burst time remains (same window as `burstRemainMs` in main). */
  setBurstWindowActive(active: boolean): void {
    this.burstWindowActive = active;
    if (!active) this.spawnAcc = 0;
  }

  burst(): void {
    this.applyAnchorLocal();
    const n = this.count;
    for (let i = 0; i < n; i++) {
      this.seedParticle(i);
    }
    const attr = this.geometry.attributes.position;
    if (attr) attr.needsUpdate = true;
  }

  private seedParticle(i: number): void {
    const j = i * 3;
    const sx = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SPREAD_X;
    const sy = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SPREAD_Y;
    const vmin = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SPEED_MIN;
    const vmax = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SPEED_MAX;
    const downY = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SCREEN_DOWN_Y;

    this.positions[j] = (Math.random() - 0.5) * 2 * sx;
    this.positions[j + 1] = (Math.random() - 0.5) * 2 * sy;
    this.positions[j + 2] = (Math.random() - 0.5) * 0.12;

    const speed = vmin + Math.random() * (vmax - vmin);
    const lateral = CONFIG.SLIPSTREAM_ACTIVATE_BURST_LATERAL_SCALE;
    const vx = (Math.random() - 0.5) * 2 * lateral * speed;
    const vz = -speed;
    const vy =
      downY * speed + (Math.random() - 0.5) * CONFIG.SLIPSTREAM_ACTIVATE_BURST_Y_JITTER;

    this.velocities[j] = vx;
    this.velocities[j + 1] = vy;
    this.velocities[j + 2] = vz;

    this.ages[i] = 0;
    this.lifetimes[i] =
      CONFIG.SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN +
      Math.random() *
        (CONFIG.SLIPSTREAM_ACTIVATE_BURST_LIFE_MAX -
          CONFIG.SLIPSTREAM_ACTIVATE_BURST_LIFE_MIN);
  }

  /**
   * Prefer expired slots; if the pool is saturated, recycle the particle closest to its natural
   * end-of-life (highest age/lifetime). Random replacement was cutting young particles short, so
   * longer `SLIPSTREAM_ACTIVATE_BURST_LIFE_*` values had almost no visible effect on trail length.
   */
  private pickSpawnIndex(): number {
    const n = this.count;
    for (let i = 0; i < n; i++) {
      if (this.ages[i] >= this.lifetimes[i]) return i;
    }
    let best = 0;
    let bestRatio = -1;
    for (let i = 0; i < n; i++) {
      const life = this.lifetimes[i];
      const ratio = life > 0 ? this.ages[i] / life : 1;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = i;
      }
    }
    return best;
  }

  update(delta: number): void {
    this.applyAnchorLocal();

    if (this.burstWindowActive) {
      this.spawnAcc +=
        CONFIG.SLIPSTREAM_ACTIVATE_BURST_WINDOW_SPAWN_PER_SEC * delta;
      while (this.spawnAcc >= 1) {
        this.spawnAcc -= 1;
        const i = this.pickSpawnIndex();
        this.seedParticle(i);
      }
    }

    const drag = Math.pow(CONFIG.SLIPSTREAM_ACTIVATE_BURST_DRAG, delta * 60);
    const grav = CONFIG.SLIPSTREAM_ACTIVATE_BURST_GRAVITY;
    const n = this.count;
    const pos = this.positions;
    const vel = this.velocities;
    let any = false;

    for (let i = 0; i < n; i++) {
      if (this.ages[i] >= this.lifetimes[i]) {
        continue;
      }
      any = true;
      this.ages[i] += delta;

      const j = i * 3;
      vel[j] *= drag;
      vel[j + 1] = vel[j + 1] * drag - grav * delta;
      vel[j + 2] *= drag;

      pos[j] += vel[j] * delta;
      pos[j + 1] += vel[j + 1] * delta;
      pos[j + 2] += vel[j + 2] * delta;

      if (this.ages[i] >= this.lifetimes[i]) {
        pos[j + 1] = -400;
      }
    }

    if (any || this.burstWindowActive) {
      const attr = this.geometry.attributes.position;
      if (attr) attr.needsUpdate = true;
    }
  }
}
