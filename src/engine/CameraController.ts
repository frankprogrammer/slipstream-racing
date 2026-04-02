import * as THREE from 'three';
import { CONFIG } from '../config';
import type { PlayerTaxi } from './PlayerTaxi';

export type CameraRoadAnchor = {
  centerX: number;
  centerZ: number;
  yaw: number;
};

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
  private readonly forward = new THREE.Vector3();
  private readonly lookTarget = new THREE.Vector3();
  /** Distance along -Z behind player (world); larger = camera further back on the road. */
  private followDistance: number = CONFIG.CAMERA_DISTANCE;
  private smoothRoadYaw: number | null = null;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  /**
   * @param scrollPerFrame — current road scroll (same units as `CONFIG.BASE_SCROLL_SPEED`).
   */
  update(
    playerTaxi: PlayerTaxi,
    scrollPerFrame: number,
    roadAnchor: CameraRoadAnchor | null = null,
  ): void {
    const targetFov = this.fovFromScrollSpeed(scrollPerFrame);
    this.camera.fov = THREE.MathUtils.lerp(
      this.camera.fov,
      targetFov,
      CONFIG.CAMERA_FOV_LERP,
    );
    this.camera.updateProjectionMatrix();
    this.applyCamera(playerTaxi, roadAnchor);
  }

  snap(playerTaxi: PlayerTaxi): void {
    this.followDistance = CONFIG.CAMERA_DISTANCE;
    this.smoothRoadYaw = null;
    this.camera.fov = CONFIG.CAMERA_FOV_BASE;
    this.camera.updateProjectionMatrix();
    this.applyCamera(playerTaxi, null);
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

  private applyCamera(playerTaxi: PlayerTaxi, roadAnchor: CameraRoadAnchor | null): void {
    const playerPos = playerTaxi.group.position;
    const anchorX = roadAnchor?.centerX ?? playerPos.x;
    const anchorZ = roadAnchor?.centerZ ?? playerPos.z;
    const h = CONFIG.CAMERA_HEIGHT;
    const lookY = CONFIG.CAMERA_LOOK_AT_Y;
    if (roadAnchor) {
      const targetYaw = roadAnchor.yaw;
      if (this.smoothRoadYaw === null) {
        this.smoothRoadYaw = targetYaw;
      } else {
        this.smoothRoadYaw = THREE.MathUtils.lerp(
          this.smoothRoadYaw,
          targetYaw,
          CONFIG.CAMERA_ROAD_YAW_LERP,
        );
      }
      this.forward.set(Math.sin(this.smoothRoadYaw), 0, Math.cos(this.smoothRoadYaw));
    } else {
      this.smoothRoadYaw = null;
      this.forward.set(0, 0, 1).applyQuaternion(playerTaxi.group.quaternion);
      this.forward.y = 0;
      if (this.forward.lengthSq() < 1e-8) {
        this.forward.set(0, 0, 1);
      } else {
        this.forward.normalize();
      }
    }
    this.lookTarget
      .set(anchorX, lookY, anchorZ)
      .addScaledVector(this.forward, CONFIG.CAMERA_LOOK_AHEAD);
    this.lookTarget.y = lookY;

    playerTaxi.getRearWorldPosition(this.rearWorld);

    const targetNdcY = -1 + 2 * CONFIG.CAMERA_FRAMING_BOTTOM_PCT;
    let dist = this.followDistance;

    const maxIter = 14;
    for (let i = 0; i < maxIter; i++) {
      this.camera.position
        .set(anchorX, h, anchorZ)
        .addScaledVector(this.forward, -dist);
      this.camera.position.y = h;
      this.camera.up.set(0, 1, 0);
      this.camera.lookAt(this.lookTarget);
      this.camera.updateMatrixWorld(true);
      this.rearNdc.copy(this.rearWorld);
      this.rearNdc.project(this.camera);
      const err = targetNdcY - this.rearNdc.y;
      if (Math.abs(err) < 0.008) break;
      dist += err * CONFIG.CAMERA_FRAMING_DISTANCE_GAIN;
      dist = THREE.MathUtils.clamp(dist, 4, 40);
    }

    this.followDistance = dist;
    this.camera.position
      .set(anchorX, h, anchorZ)
      .addScaledVector(this.forward, -dist);
    this.camera.position.y = h;
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(this.lookTarget);
  }
}
