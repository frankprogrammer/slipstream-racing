import * as THREE from 'three';
import { CONFIG } from '../config';
import type { PlayerTaxi } from './PlayerTaxi';

/**
 * Short-lived neon streaks behind the taxi on slingshot release.
 * Uses thin boxes + MeshBasicMaterial so they stay visible from the chase camera
 * (horizontal planes were nearly edge-on / buried in the road).
 */
export class SlingshotTrailSystem {
  readonly group = new THREE.Group();

  private readonly streaks: {
    mesh: THREE.Mesh;
    material: THREE.MeshBasicMaterial;
    active: boolean;
    ageMs: number;
  }[] = [];

  private readonly rear = new THREE.Vector3();

  constructor() {
    this.group.name = 'SlingshotTrail';

    const w = CONFIG.SLINGSHOT_TRAIL_WIDTH;
    const h = CONFIG.SLINGSHOT_TRAIL_BOX_HEIGHT;
    const len = CONFIG.SLINGSHOT_TRAIL_LENGTH;
    const geo = new THREE.BoxGeometry(w, h, len);
    geo.translate(0, 0, -len * 0.5);

    const n = CONFIG.SLINGSHOT_TRAIL_STREAK_COUNT;
    const pink = CONFIG.PALETTE.NEON_PINK;
    const blue = CONFIG.PALETTE.NEON_BLUE;

    for (let i = 0; i < n; i++) {
      const m = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? pink : blue,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, m);
      mesh.visible = false;
      mesh.frustumCulled = false;
      mesh.renderOrder = 10;
      this.group.add(mesh);
      this.streaks.push({ mesh, material: m, active: false, ageMs: 0 });
    }
  }

  reset(): void {
    for (const s of this.streaks) {
      s.active = false;
      s.ageMs = 0;
      s.mesh.visible = false;
      s.material.opacity = 0;
    }
  }

  burst(player: PlayerTaxi): void {
    const n = CONFIG.SLINGSHOT_TRAIL_STREAK_COUNT;
    const spread = CONFIG.TAXI_DIMENSIONS.width * 0.42;
    const surfaceY = CONFIG.SLINGSHOT_TRAIL_SURFACE_Y;

    for (let i = 0; i < n; i++) {
      const s = this.streaks[i]!;
      player.getRearWorldPosition(this.rear);

      // Box front (local +Z) sits at rear bumper; geometry extends backward in −Z.
      s.mesh.position.set(
        this.rear.x + (Math.random() - 0.5) * 2 * spread,
        surfaceY,
        this.rear.z + (Math.random() - 0.5) * 0.35
      );
      s.mesh.rotation.set(0, (Math.random() - 0.5) * 0.2, 0);

      s.ageMs = 0;
      s.active = true;
      s.mesh.visible = true;
      s.material.opacity = 0.95;
    }
  }

  update(delta: number, scrollDz: number): void {
    const dur = CONFIG.SLINGSHOT_TRAIL_DURATION_MS;
    const scale = CONFIG.SLINGSHOT_TRAIL_SCROLL_SCALE;

    for (const s of this.streaks) {
      if (!s.active) continue;

      s.ageMs += delta * 1000;
      s.mesh.position.z -= scrollDz * scale;

      const t = Math.min(1, s.ageMs / dur);
      s.material.opacity = Math.max(0, 0.95 * (1 - t));

      if (s.ageMs >= dur) {
        s.active = false;
        s.mesh.visible = false;
        s.material.opacity = 0;
      }
    }
  }
}
