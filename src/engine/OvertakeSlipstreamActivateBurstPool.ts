import { CONFIG } from "../config";
import type { TrafficSpawner } from "./TrafficSpawner";
import { SlipstreamActivateBurst } from "./SlipstreamActivateBurst";

/**
 * One `SlipstreamActivateBurst` per traffic pool slot (same as player), anchored on each car.
 * While a slot is an active overtake pass, the burst window stays on (continuous spawn) like
 * the player's post-slingshot burst window.
 */
export class OvertakeSlipstreamActivateBurstPool {
  private readonly bursts: SlipstreamActivateBurst[];
  private readonly wasOvertake: boolean[];

  constructor() {
    const n = CONFIG.VEHICLE_POOL_SIZE;
    this.bursts = [];
    this.wasOvertake = new Array<boolean>(n);
    for (let i = 0; i < n; i++) {
      this.bursts.push(new SlipstreamActivateBurst());
      this.wasOvertake[i] = false;
    }
  }

  /** Call once after `TrafficSpawner.create()` — parents each burst anchor to the matching car. */
  attachToTraffic(traffic: TrafficSpawner): void {
    traffic.forEachPoolCarGroup((i, g) => {
      g.add(this.bursts[i]!.anchor);
    });
  }

  reset(): void {
    for (let i = 0; i < this.bursts.length; i++) {
      this.bursts[i]!.reset();
      this.wasOvertake[i] = false;
    }
  }

  update(delta: number, playing: boolean, traffic: TrafficSpawner): void {
    if (!playing) {
      this.reset();
      return;
    }

    for (let i = 0; i < this.bursts.length; i++) {
      const b = this.bursts[i]!;
      const on = traffic.isOvertakeSlotActive(i);
      if (on) {
        if (!this.wasOvertake[i]) {
          b.burst();
        }
        this.wasOvertake[i] = true;
        b.setBurstWindowActive(true);
        b.update(delta);
      } else {
        this.wasOvertake[i] = false;
        b.setBurstWindowActive(false);
        b.reset();
      }
    }
  }
}
