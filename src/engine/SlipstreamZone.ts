import { CONFIG } from '../config';
import type { PlayerTaxi } from './PlayerTaxi';
import type { TrafficCollisionBounds, TrafficSpawner } from './TrafficSpawner';
import { playerInVehicleSlipstream } from './slipstreamOverlap';

/**
 * SlipstreamZone — XZ overlap with a rectangle behind each active vehicle.
 * Meter fills while overlapping. Slingshot fires only after the meter is full **and** you exit the zone.
 */
export class SlipstreamZone {
  private meter = 0;
  private wasInZone = false;
  private lastDraftTarget: TrafficCollisionBounds | null = null;

  get draftMeter(): number {
    return this.meter;
  }

  reset(): void {
    this.meter = 0;
    this.wasInZone = false;
    this.lastDraftTarget = null;
  }

  /**
   * @returns slingshotFired — true the frame you leave the zone with a full meter (release).
   */
  update(
    deltaSec: number,
    scrollPerFrame: number,
    player: PlayerTaxi,
    traffic: TrafficSpawner
  ): {
    inZone: boolean;
    meter: number;
    slingshotFired: boolean;
    meterDisplay: number;
    /** Vehicle drafted when slingshot released (for traffic VFX). */
    slingshotTarget: TrafficCollisionBounds | null;
  } {
    const pb = player.getCollisionBounds();
    const vehicles = traffic.getActiveCollisionBounds();
    const inZone = this.isPlayerInAnySlipstream(pb, vehicles);

    const leftZone = this.wasInZone && !inZone;
    let slingshotFired = false;

    let slingshotTarget: TrafficCollisionBounds | null = null;
    if (leftZone && this.meter >= 1) {
      slingshotFired = true;
      slingshotTarget = this.lastDraftTarget
        ? { ...this.lastDraftTarget }
        : null;
    }

    if (inZone) {
      const v = this.findDraftVehicle(pb, vehicles);
      if (v) {
        this.lastDraftTarget = { cx: v.cx, cz: v.cz, hx: v.hx, hz: v.hz };
      }
      if (this.meter < 1) {
        const speedScale = Math.max(
          0.25,
          scrollPerFrame / CONFIG.BASE_SCROLL_SPEED
        );
        const fill =
          CONFIG.DRAFT_FILL_RATE * 60 * deltaSec * speedScale;
        this.meter += fill;
        if (this.meter > 1) this.meter = 1;
      }
    } else {
      this.meter = 0;
    }

    this.wasInZone = inZone;

    const meterDisplay = slingshotFired
      ? 1
      : inZone
        ? Math.min(1, this.meter)
        : 0;

    return {
      inZone,
      meter: this.meter,
      slingshotFired,
      meterDisplay,
      slingshotTarget,
    };
  }

  private findDraftVehicle(
    pb: { cx: number; cz: number; hx: number; hz: number },
    vehicles: TrafficCollisionBounds[]
  ): TrafficCollisionBounds | null {
    for (const v of vehicles) {
      if (playerInVehicleSlipstream(pb, v)) return v;
    }
    return null;
  }

  private isPlayerInAnySlipstream(
    pb: { cx: number; cz: number; hx: number; hz: number },
    vehicles: TrafficCollisionBounds[]
  ): boolean {
    for (const v of vehicles) {
      if (playerInVehicleSlipstream(pb, v)) return true;
    }
    return false;
  }
}
