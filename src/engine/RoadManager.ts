import * as THREE from 'three';
import { CONFIG } from '../config';

/**
 * RoadManager — Infinite road from recycling segments.
 * Each segment: dark asphalt plane + dashed lane markings (gray/white prototype).
 */
export class RoadManager {
  readonly group = new THREE.Group();

  private readonly segments: {
    root: THREE.Group;
    zCenter: number;
  }[] = [];

  private readonly playerZ: number;
  private readonly recycleBehind = 40;

  constructor(playerZ: number) {
    this.playerZ = playerZ;
    this.group.name = 'RoadGroup';
    const roadMat = new THREE.MeshStandardMaterial({
      color: CONFIG.PALETTE.ROAD_DARK,
      roughness: 0.9,
      metalness: 0.05,
    });
    const markingMat = new THREE.MeshBasicMaterial({
      color: CONFIG.PALETTE.LANE_MARKING,
    });

    const N = CONFIG.ROAD_VISIBLE_SEGMENTS;
    const L = CONFIG.ROAD_SEGMENT_LENGTH;
    const halfW = CONFIG.ROAD_WIDTH / 2;

    const firstCenter = playerZ - this.recycleBehind + L * 0.5;
    for (let i = 0; i < N; i++) {
      const root = new THREE.Group();
      const zCenter = firstCenter + i * L;
      root.position.z = zCenter;

      const planeGeo = new THREE.PlaneGeometry(CONFIG.ROAD_WIDTH, L);
      planeGeo.rotateX(-Math.PI / 2);
      const road = new THREE.Mesh(planeGeo, roadMat);
      road.position.y = 0.01;
      root.add(road);

      const dividerXs = [-CONFIG.LANE_WIDTH / 2, CONFIG.LANE_WIDTH / 2];
      const dashLen = 2;
      const gapLen = 2;
      const step = dashLen + gapLen;
      const startZ = -L / 2 + 2;
      for (const x of dividerXs) {
        for (let z = startZ; z < L / 2 - 2; z += step) {
          const dashGeo = new THREE.PlaneGeometry(0.12, dashLen);
          dashGeo.rotateX(-Math.PI / 2);
          const dash = new THREE.Mesh(dashGeo, markingMat);
          dash.position.set(x, 0.02, z + dashLen / 2);
          root.add(dash);
        }
      }

      const edgeGeo = new THREE.BoxGeometry(0.15, 0.08, L);
      const edgeMat = new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 1 });
      const leftEdge = new THREE.Mesh(edgeGeo, edgeMat);
      leftEdge.position.set(-halfW, 0.05, 0);
      root.add(leftEdge);
      const rightEdge = new THREE.Mesh(edgeGeo, edgeMat);
      rightEdge.position.set(halfW, 0.05, 0);
      root.add(rightEdge);

      this.group.add(root);
      this.segments.push({ root, zCenter });
    }
  }

  reset(): void {
    const L = CONFIG.ROAD_SEGMENT_LENGTH;
    const N = CONFIG.ROAD_VISIBLE_SEGMENTS;
    const firstCenter = this.playerZ - this.recycleBehind + L * 0.5;
    for (let i = 0; i < N; i++) {
      const zCenter = firstCenter + i * L;
      this.segments[i].zCenter = zCenter;
      this.segments[i].root.position.z = zCenter;
    }
  }

  /**
   * Scroll road toward -Z (world moves past the player).
   * dz is positive distance to subtract from segment z each frame.
   */
  update(dz: number): void {
    if (dz <= 0) return;
    const L = CONFIG.ROAD_SEGMENT_LENGTH;
    let maxZ = -Infinity;
    for (const s of this.segments) {
      s.zCenter -= dz;
      s.root.position.z = s.zCenter;
      if (s.zCenter > maxZ) maxZ = s.zCenter;
    }
    for (const s of this.segments) {
      if (s.zCenter < this.playerZ - this.recycleBehind) {
        s.zCenter = maxZ + L;
        s.root.position.z = s.zCenter;
        maxZ = s.zCenter;
      }
    }
  }
}
