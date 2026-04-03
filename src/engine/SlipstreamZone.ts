import { CONFIG } from '../config';
import type { PlayerTaxi } from './PlayerTaxi';
import type { TrafficCollisionBounds, TrafficSpawner } from './TrafficSpawner';
import { playerInVehicleSlipstream } from './slipstreamOverlap';

/**
 * SlipstreamZone — XZ overlap with a rectangle behind each active vehicle.
 * Meter fills by **traveling** along the slipstream (relative Z motion vs the lead car) until
 * `DRAFT_ACTIVATE_DEPTH_FRACTION * SLIPSTREAM_ZONE_DEPTH` world units. Slingshot fires only after
 * the meter is full **and** you exit the zone.
 */
export class SlipstreamZone {
  private meter = 0;
  private wasInZone = false;
  private lastDraftTarget: TrafficCollisionBounds | null = null;
  /** World units of relative depth accumulated for the current draft target. */
  private draftDepthAccum = 0;
  private lastDraftSlotIndex: number | null = null;
  private lastDraftVehicleCz: number | null = null;

  get draftMeter(): number {
    return this.meter;
  }

  reset(): void {
    this.meter = 0;
    this.wasInZone = false;
    this.lastDraftTarget = null;
    this.draftDepthAccum = 0;
    this.lastDraftSlotIndex = null;
    this.lastDraftVehicleCz = null;
  }

  /**
   * Clears draft travel progress while staying in-zone on the same target slot when possible.
   * Used when the hood bar was off-screen for a while so the visible fill starts from empty.
   */
  resetDraftTravelBaseline(): void {
    this.draftDepthAccum = 0;
    this.meter = 0;
    this.lastDraftVehicleCz = null;
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
    void deltaSec;
    void scrollPerFrame;
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

    const requiredDepth =
      CONFIG.SLIPSTREAM_ZONE_DEPTH * CONFIG.DRAFT_ACTIVATE_DEPTH_FRACTION;

    if (inZone) {
      const v = this.findDraftVehicle(pb, vehicles);
      if (v) {
        this.lastDraftTarget = { ...v };

        const sameCar =
          this.lastDraftSlotIndex !== null &&
          this.lastDraftSlotIndex === v.slotIndex;
        if (!sameCar) {
          this.draftDepthAccum = 0;
          this.lastDraftVehicleCz = null;
        }

        if (this.lastDraftVehicleCz !== null && sameCar) {
          const raw = Math.abs(v.cz - this.lastDraftVehicleCz);
          // Ignore teleports / slot reuse glitches (large jumps in one frame).
          if (raw < 40) {
            this.draftDepthAccum += raw;
          } else {
            this.draftDepthAccum = 0;
          }
        }
        this.lastDraftVehicleCz = v.cz;
        this.lastDraftSlotIndex = v.slotIndex;

        this.meter = Math.min(1, this.draftDepthAccum / requiredDepth);
      }
    } else {
      this.meter = 0;
      this.draftDepthAccum = 0;
      this.lastDraftSlotIndex = null;
      this.lastDraftVehicleCz = null;
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
