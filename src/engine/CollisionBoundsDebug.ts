import * as THREE from 'three';
import { CONFIG } from '../config';
import type { PlayerTaxi } from './PlayerTaxi';
import type { TrafficCollisionBounds, TrafficSpawner } from './TrafficSpawner';

type BoxDebugSlot = {
  mesh: THREE.LineSegments;
  geometry: THREE.EdgesGeometry;
};

/**
 * Debug-only outlined rectangular prisms for collision AABBs.
 */
export class CollisionBoundsDebug {
  readonly group = new THREE.Group();
  private readonly playerSlot: BoxDebugSlot;
  private readonly trafficSlots: BoxDebugSlot[] = [];
  private readonly playerHy: number;
  private readonly trafficHy: number;

  constructor(maxTraffic: number) {
    this.group.name = 'CollisionBoundsDebug';
    this.group.renderOrder = 10;

    this.playerHy = CONFIG.TAXI_DIMENSIONS.height * 0.5;
    this.trafficHy = CONFIG.TAXI_DIMENSIONS.height * 0.5;

    this.playerSlot = this.createSlot(
      CONFIG.TAXI_DIMENSIONS.width,
      CONFIG.TAXI_DIMENSIONS.height,
      CONFIG.TAXI_DIMENSIONS.length,
      0x00e5ff
    );
    this.group.add(this.playerSlot.mesh);

    for (let i = 0; i < maxTraffic; i++) {
      const slot = this.createSlot(
        CONFIG.TAXI_DIMENSIONS.width,
        CONFIG.TAXI_DIMENSIONS.height,
        CONFIG.TAXI_DIMENSIONS.length,
        0xff6b2d
      );
      slot.mesh.visible = false;
      this.trafficSlots.push(slot);
      this.group.add(slot.mesh);
    }
  }

  dispose(): void {
    this.playerSlot.geometry.dispose();
    this.playerSlot.mesh.material.dispose();
    for (const slot of this.trafficSlots) {
      slot.geometry.dispose();
      slot.mesh.material.dispose();
    }
  }

  update(player: PlayerTaxi, traffic: TrafficSpawner): void {
    const p = player.getCollisionBounds();
    const phz = p.hz * CONFIG.TAXI_COLLISION_Z_HALF_SCALE;
    this.playerSlot.mesh.visible = true;
    this.playerSlot.mesh.position.set(p.cx, this.playerHy, p.cz);
    this.playerSlot.mesh.scale.set(1, 1, phz / p.hz);

    const bounds = traffic.getAllActiveCollisionBounds();
    for (let i = 0; i < this.trafficSlots.length; i++) {
      const slot = this.trafficSlots[i]!;
      const b: TrafficCollisionBounds | undefined = bounds[i];
      if (!b) {
        slot.mesh.visible = false;
        continue;
      }
      slot.mesh.visible = true;
      slot.mesh.position.set(b.cx, this.trafficHy, b.cz);
      slot.mesh.scale.set(1, 1, 1);
    }
  }

  private createSlot(
    width: number,
    height: number,
    length: number,
    color: number
  ): BoxDebugSlot {
    const box = new THREE.BoxGeometry(width, height, length);
    const edges = new THREE.EdgesGeometry(box);
    box.dispose();
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.95,
      depthTest: true,
      depthWrite: false,
      toneMapped: false,
    });
    const mesh = new THREE.LineSegments(edges, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = 10;
    return { mesh, geometry: edges };
  }
}
