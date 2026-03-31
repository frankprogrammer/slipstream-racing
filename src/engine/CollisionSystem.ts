import { CONFIG } from '../config';
import type { PlayerTaxi } from './PlayerTaxi';
import type { TrafficSpawner } from './TrafficSpawner';

function aabbOverlap2D(
  ax: number,
  az: number,
  ahx: number,
  ahz: number,
  bx: number,
  bz: number,
  bhx: number,
  bhz: number
): boolean {
  return (
    Math.abs(ax - bx) < ahx + bhx &&
    Math.abs(az - bz) < ahz + bhz
  );
}

/**
 * CollisionSystem — XZ AABB overlap between player taxi and active traffic.
 */
export class CollisionSystem {
  check(player: PlayerTaxi, traffic: TrafficSpawner): boolean {
    const p = player.getCollisionBounds();
    const phz = p.hz * CONFIG.TAXI_COLLISION_Z_HALF_SCALE;
    const list = traffic.getAllActiveCollisionBounds();
    for (const t of list) {
      if (aabbOverlap2D(p.cx, p.cz, p.hx, phz, t.cx, t.cz, t.hx, t.hz)) {
        return true;
      }
    }
    return false;
  }
}
