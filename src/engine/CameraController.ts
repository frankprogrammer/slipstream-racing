import * as THREE from 'three';
import { CONFIG, type CameraFovPhase } from '../config';
import type { PlayerTaxi } from './PlayerTaxi';

/**
 * Road-centered chase camera: fixed on lane center (X=0).
 * Height + look-at (pitch) come from CONFIG; only **distance behind the taxi** is refined so the
 * rear bumper lands at CAMERA_FRAMING_BOTTOM_PCT from the screen bottom (NDC).
 */
export class CameraController {
  private readonly camera: THREE.PerspectiveCamera;
  private readonly rearWorld = new THREE.Vector3();
  private readonly rearNdc = new THREE.Vector3();
  /** Distance along -Z behind player (world); larger = camera further back on the road. */
  private followDistance: number = CONFIG.CAMERA_DISTANCE;
  /** Smoothed chase height; driven by `CAMERA_FOV_PHASES` (same timeline as FOV). */
  private currentHeight: number = CONFIG.CAMERA_HEIGHT;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  /**
   * @param runTimeMs — elapsed gameplay time (ms) since the run started.
   */
  update(playerTaxi: PlayerTaxi, runTimeMs: number): void {
    const { fov: targetFov, height: targetHeight } =
      this.cameraTargetsFromPhases(runTimeMs);
    this.camera.fov = THREE.MathUtils.lerp(
      this.camera.fov,
      targetFov,
      CONFIG.CAMERA_FOV_LERP
    );
    this.currentHeight = THREE.MathUtils.lerp(
      this.currentHeight,
      targetHeight,
      CONFIG.CAMERA_FOV_LERP
    );
    this.camera.updateProjectionMatrix();
    this.applyCamera(playerTaxi);
  }

  snap(playerTaxi: PlayerTaxi): void {
    this.followDistance = CONFIG.CAMERA_DISTANCE;
    const { fov, height } = this.cameraTargetsFromPhases(0);
    this.currentHeight = height;
    this.camera.fov = fov;
    this.camera.updateProjectionMatrix();
    this.applyCamera(playerTaxi);
  }

  private phaseHeight(ph: CameraFovPhase): number {
    return ph.height ?? CONFIG.CAMERA_HEIGHT;
  }

  /** One full loop: every hold + every transition (last phase’s transition wraps to index 0). */
  private cameraPhaseCycleMs(phases: readonly CameraFovPhase[]): number {
    let sum = 0;
    for (const ph of phases) {
      sum += Math.max(0, ph.holdMs);
      const tr = 'transitionMs' in ph ? ph.transitionMs : 0;
      sum += Math.max(0, tr ?? 0);
    }
    return sum;
  }

  private cameraTargetsFromPhases(runTimeMs: number): {
    fov: number;
    height: number;
  } {
    const phases = CONFIG.CAMERA_FOV_PHASES as readonly CameraFovPhase[];
    if (!phases || phases.length === 0) {
      return { fov: CONFIG.CAMERA_FOV_BASE, height: CONFIG.CAMERA_HEIGHT };
    }

    const n = phases.length;
    const cycleMs = this.cameraPhaseCycleMs(phases);
    if (cycleMs <= 0) {
      const p = phases[0]!;
      return { fov: p.fov, height: this.phaseHeight(p) };
    }

    let t = Math.max(0, runTimeMs) % cycleMs;

    for (let i = 0; i < n; i++) {
      const ph = phases[i]!;
      const hold = Math.max(0, ph.holdMs);
      const fovA = ph.fov;
      const hA = this.phaseHeight(ph);
      const nextIndex = (i + 1) % n;
      const next = phases[nextIndex]!;
      const transRaw = 'transitionMs' in ph ? ph.transitionMs : 0;
      const trans = Math.max(0, transRaw ?? 0);

      if (t <= hold) return { fov: fovA, height: hA };
      t -= hold;

      if (trans <= 0) continue;
      if (t <= trans) {
        const u = t / trans;
        return {
          fov: THREE.MathUtils.lerp(fovA, next.fov, u),
          height: THREE.MathUtils.lerp(hA, this.phaseHeight(next), u),
        };
      }
      t -= trans;
    }

    const last = phases[n - 1]!;
    return { fov: last.fov, height: this.phaseHeight(last) };
  }

  private applyCamera(playerTaxi: PlayerTaxi): void {
    const playerZ = playerTaxi.group.position.z;
    const lookZ = playerZ + CONFIG.CAMERA_LOOK_AHEAD;
    const h = this.currentHeight;
    const lookY = CONFIG.CAMERA_LOOK_AT_Y;

    playerTaxi.getRearWorldPosition(this.rearWorld);

    const targetNdcY = -1 + 2 * CONFIG.CAMERA_FRAMING_BOTTOM_PCT;
    let dist = this.followDistance;

    const maxIter = 14;
    for (let i = 0; i < maxIter; i++) {
      const zCam = playerZ - dist;
      this.camera.position.set(0, h, zCam);
      this.camera.up.set(0, 1, 0);
      this.camera.lookAt(0, lookY, lookZ);
      this.camera.updateMatrixWorld(true);
      this.rearNdc.copy(this.rearWorld);
      this.rearNdc.project(this.camera);
      const err = targetNdcY - this.rearNdc.y;
      if (Math.abs(err) < 0.008) break;
      dist += err * CONFIG.CAMERA_FRAMING_DISTANCE_GAIN;
      dist = THREE.MathUtils.clamp(dist, 4, 40);
    }

    this.followDistance = dist;
    const zCam = playerZ - dist;
    this.camera.position.set(0, h, zCam);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(0, lookY, lookZ);
  }
}
