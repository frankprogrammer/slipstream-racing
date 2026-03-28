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
    const list = traffic.getActiveCollisionBounds();
    for (const t of list) {
      if (aabbOverlap2D(p.cx, p.cz, p.hx, p.hz, t.cx, t.cz, t.hx, t.hz)) {
        return true;
      }
    }
    return false;
  }
}
