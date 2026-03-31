import * as THREE from "three";
import { CONFIG } from "../config";

/**
 * On successful slipstream release: a burst of points from the car rear,
 * streaming along local −Z (screen bottom in chase view).
 */
export class SlipstreamActivateBurst {
  readonly anchor = new THREE.Group();

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
    this.hideAll();
  }

  burst(): void {
    this.applyAnchorLocal();
    const n = this.count;
    const sx = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SPREAD_X;
    const sy = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SPREAD_Y;
    const vmin = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SPEED_MIN;
    const vmax = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SPEED_MAX;
    const downY = CONFIG.SLIPSTREAM_ACTIVATE_BURST_SCREEN_DOWN_Y;

    for (let i = 0; i < n; i++) {
      const j = i * 3;
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
    const attr = this.geometry.attributes.position;
    if (attr) attr.needsUpdate = true;
  }

  update(delta: number): void {
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

    if (any) {
      const attr = this.geometry.attributes.position;
      if (attr) attr.needsUpdate = true;
    }
  }
}
