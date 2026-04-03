import * as THREE from 'three';
import { CONFIG } from '../config';
import type { PlayerTaxi } from './PlayerTaxi';

/**
 * Road-centered chase camera: fixed on lane center (X=0).
 * Height + look-at (pitch) come from CONFIG; only **distance behind the taxi** is refined so the
 * rear bumper lands at CAMERA_FRAMING_BOTTOM_PCT from the screen bottom (NDC).
 * FOV interpolates between CAMERA_FOV_BASE and CAMERA_FOV_MAX as scroll speed goes from
 * BASE_SCROLL_SPEED to MAX_SCROLL_SPEED.
 */
export class CameraController {
  private readonly camera: THREE.PerspectiveCamera;
  private readonly rearWorld = new THREE.Vector3();
  private readonly rearNdc = new THREE.Vector3();
  /** Distance along -Z behind player (world); larger = camera further back on the road. */
  private followDistance: number = CONFIG.CAMERA_DISTANCE;
  /** Remaining slipstream shake time (ms); amplitude scales linearly to 0. */
  private shakeRemainMs = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  /**
   * @param scrollPerFrame — current road scroll (same units as `CONFIG.BASE_SCROLL_SPEED`).
   */
  update(
    playerTaxi: PlayerTaxi,
    scrollPerFrame: number,
    deltaSec: number,
  ): void {
    const targetFov = this.fovFromScrollSpeed(scrollPerFrame);
    this.camera.fov = THREE.MathUtils.lerp(
      this.camera.fov,
      targetFov,
      CONFIG.CAMERA_FOV_LERP,
    );
    this.camera.updateProjectionMatrix();
    this.applyCamera(playerTaxi);
    this.applyShake(deltaSec);
  }

  /** Call when a slipstream slingshot succeeds (full meter + exit zone). */
  triggerSlipstreamShake(): void {
    this.shakeRemainMs = CONFIG.SLIPSTREAM_CAMERA_SHAKE_MS;
  }

  snap(playerTaxi: PlayerTaxi): void {
    this.shakeRemainMs = 0;
    this.followDistance = CONFIG.CAMERA_DISTANCE;
    this.camera.fov = CONFIG.CAMERA_FOV_BASE;
    this.camera.updateProjectionMatrix();
    this.applyCamera(playerTaxi);
  }

  private fovFromScrollSpeed(scrollPerFrame: number): number {
    const lo = CONFIG.BASE_SCROLL_SPEED;
    const hi = CONFIG.MAX_SCROLL_SPEED;
    const s = THREE.MathUtils.clamp(scrollPerFrame, lo, hi);
    const t = hi > lo ? (s - lo) / (hi - lo) : 0;
    return THREE.MathUtils.lerp(
      CONFIG.CAMERA_FOV_BASE,
      CONFIG.CAMERA_FOV_MAX,
      t,
    );
  }

  private applyCamera(playerTaxi: PlayerTaxi): void {
    const playerZ = playerTaxi.group.position.z;
    const lookZ = playerZ + CONFIG.CAMERA_LOOK_AHEAD;
    const h = CONFIG.CAMERA_HEIGHT;
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

  private applyShake(deltaSec: number): void {
    if (this.shakeRemainMs <= 0) return;
    const duration = CONFIG.SLIPSTREAM_CAMERA_SHAKE_MS;
    const u = this.shakeRemainMs / duration;
    const amp = CONFIG.CAMERA_SHAKE_INTENSITY * u;
    this.camera.position.x += (Math.random() - 0.5) * 2 * amp;
    this.camera.position.y += (Math.random() - 0.5) * 2 * amp;
    this.camera.position.z += (Math.random() - 0.5) * 2 * amp;
    this.shakeRemainMs -= deltaSec * 1000;
    if (this.shakeRemainMs < 0) this.shakeRemainMs = 0;
  }
}
