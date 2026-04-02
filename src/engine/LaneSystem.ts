import { CONFIG } from "../config";

function easeOutBack(t: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
}

/**
 * LaneSystem — 3-lane grid + touch + keyboard.
 * Lane centers: -LANE_WIDTH, 0, +LANE_WIDTH for indices 0,1,2.
 * Touch: each pointerdown is a tap — left of screen center steps one lane toward screen-left,
 * right of center toward screen-right (matches ArrowLeft / ArrowRight). Center dead zone ignores taps.
 * Multiple simultaneous contacts are independent (no single-pointer capture).
 */
export class LaneSystem {
  private readonly target: HTMLElement;
  private _laneIndex = 1;
  private _fromLane = 1;
  private _fromX = 0;
  private _toLane = 1;
  private _switching = false;
  private _switchStartMs = 0;
  /** After slide ends: spring roll back to 0 with easeOutBack overshoot. */
  private _rollSpringing = false;
  private _springStartMs = 0;
  private _springDir: -1 | 1 = 1;
  private _enabled = true;
  private _onSwitchCb: (() => void) | null = null;

  constructor(target: HTMLElement) {
    this.target = target;
    this._fromX = this.laneIndexToX(1);
    this.bindPointer();
    this.bindKeyboard();
  }

  onSwitch(cb: () => void): void {
    this._onSwitchCb = cb;
  }

  set enabled(enabled: boolean) {
    this._enabled = enabled;
  }

  get laneIndex(): number {
    return this._switching ? this._toLane : this._laneIndex;
  }

  reset(): void {
    this._laneIndex = 1;
    this._fromLane = 1;
    this._fromX = this.laneIndexToX(1);
    this._toLane = 1;
    this._switching = false;
    this._rollSpringing = false;
  }

  laneIndexToX(index: number): number {
    return (index - 1) * CONFIG.LANE_WIDTH;
  }

  getLaneX(nowMs: number): number {
    if (!this._switching) return this.laneIndexToX(this._laneIndex);
    const raw = Math.min(
      1,
      (nowMs - this._switchStartMs) / CONFIG.LANE_SWITCH_DURATION,
    );
    const e = easeOutBack(raw);
    const x0 = this._fromX;
    const x1 = this.laneIndexToX(this._toLane);
    if (raw >= 1) {
      this._springDir = this._toLane > this._fromLane ? 1 : -1;
      this._rollSpringing = true;
      this._springStartMs = nowMs;
      this._switching = false;
      this._laneIndex = this._toLane;
    }
    return x0 + (x1 - x0) * e;
  }

  /**
   * Roll about Z: lean into the lane change during slide, then spring back with overshoot.
   */
  getBodyRollRad(nowMs: number): number {
    const amp = DEG2RAD * CONFIG.TAXI_BODY_ROLL;

    if (this._switching) {
      const raw = Math.min(
        1,
        (nowMs - this._switchStartMs) / CONFIG.LANE_SWITCH_DURATION,
      );
      const dir = Math.sign(this._toLane - this._fromLane) || 1;
      return dir * amp * Math.sin(raw * Math.PI * 0.5);
    }

    if (this._rollSpringing) {
      const raw = (nowMs - this._springStartMs) / CONFIG.TAXI_ROLL_DURATION;
      if (raw >= 1) {
        this._rollSpringing = false;
        return 0;
      }
      const t = Math.min(1, raw);
      const e = easeOutBack(t);
      return this._springDir * amp * (1 - e);
    }

    return 0;
  }

  /** Front wheel steer (rad), same envelope as body roll. */
  getWheelSteerRad(nowMs: number): number {
    const amp = DEG2RAD * CONFIG.TAXI_WHEEL_TURN;

    if (this._switching) {
      const raw = Math.min(
        1,
        (nowMs - this._switchStartMs) / CONFIG.LANE_SWITCH_DURATION,
      );
      const dir = Math.sign(this._toLane - this._fromLane) || 1;
      return dir * amp * Math.sin(raw * Math.PI * 0.5);
    }

    if (this._rollSpringing) {
      const raw = (nowMs - this._springStartMs) / CONFIG.TAXI_ROLL_DURATION;
      if (raw >= 1) {
        this._rollSpringing = false;
        return 0;
      }
      const t = Math.min(1, raw);
      const e = easeOutBack(t);
      return this._springDir * amp * (1 - e);
    }

    return 0;
  }

  private laneIndexFromRoadU(u: number): number {
    return Math.max(
      0,
      Math.min(CONFIG.LANE_COUNT - 1, Math.floor(u * CONFIG.LANE_COUNT)),
    );
  }

  /** Map road-local x (same frame as `laneIndexToX`) to lane index. */
  private laneIndexFromRoadX(x: number): number {
    const roadLeft = this.laneIndexToX(0) - CONFIG.LANE_WIDTH * 0.5;
    const roadWidth = CONFIG.LANE_COUNT * CONFIG.LANE_WIDTH;
    const u = (x - roadLeft) / roadWidth;
    return this.laneIndexFromRoadU(u);
  }

  private switchToLane(targetLane: number): void {
    if (!this._enabled) return;
    const clamped = Math.max(0, Math.min(CONFIG.LANE_COUNT - 1, targetLane));
    const now = performance.now();
    const currentX = this.getLaneX(now);
    const fromLane = this.laneIndexFromRoadX(currentX);
    if (clamped === fromLane) return;

    this._laneIndex = fromLane;
    this._fromLane = fromLane;
    this._fromX = currentX;
    this._toLane = clamped;
    this._switching = true;
    this._switchStartMs = now;
    this._rollSpringing = false;
    this._onSwitchCb?.();
  }

  /**
   * Tap left of horizontal center → same as ArrowLeft; right of center → ArrowRight.
   * Ignored in the center strip (`TOUCH_CENTER_DEAD_ZONE_PX`). Each pointer is handled on pointerdown only.
   */
  private onHalfScreenTap(clientX: number): void {
    if (!this._enabled) return;
    const rect = this.target.getBoundingClientRect();
    const cx = rect.left + rect.width * 0.5;
    const d = clientX - cx;
    if (Math.abs(d) <= CONFIG.TOUCH_CENTER_DEAD_ZONE_PX) return;

    const now = performance.now();
    const laneNow = this.laneIndexFromRoadX(this.getLaneX(now));

    if (d < 0) {
      this.switchToLane(laneNow + 1);
    } else {
      this.switchToLane(laneNow - 1);
    }
  }

  private bindPointer(): void {
    this.target.addEventListener("pointerdown", (e: PointerEvent) => {
      if (!this._enabled || e.button === 2) return;
      this.onHalfScreenTap(e.clientX);
    });
  }

  private bindKeyboard(): void {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (!this._enabled) return;
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        e.preventDefault();
        this.switchToLane(
          this.laneIndexFromRoadX(this.getLaneX(performance.now())) + 1,
        );
      } else if (e.code === "ArrowRight" || e.code === "KeyD") {
        e.preventDefault();
        this.switchToLane(
          this.laneIndexFromRoadX(this.getLaneX(performance.now())) - 1,
        );
      }
    });
  }
}

const DEG2RAD = Math.PI / 180;
