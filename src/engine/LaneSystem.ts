import { CONFIG } from '../config';

function easeOutBack(t: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
}

/**
 * LaneSystem — 3-lane grid + swipe/keyboard input.
 * Lane centers: -LANE_WIDTH, 0, +LANE_WIDTH for indices 0,1,2.
 */
export class LaneSystem {
  private readonly target: HTMLElement;
  private _laneIndex = 1;
  private _fromLane = 1;
  private _toLane = 1;
  private _switching = false;
  private _switchStartMs = 0;
  /** After slide ends: spring roll back to 0 with easeOutBack overshoot. */
  private _rollSpringing = false;
  private _springStartMs = 0;
  private _springDir: -1 | 1 = 1;
  private _pointerDownX = 0;
  private _pointerDownY = 0;
  private _pointerDownTime = 0;
  private _pointerId: number | null = null;
  private _enabled = true;

  constructor(target: HTMLElement) {
    this.target = target;
    this.bindPointer();
    this.bindKeyboard();
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
    this._toLane = 1;
    this._switching = false;
    this._rollSpringing = false;
  }

  laneIndexToX(index: number): number {
    return (index - 1) * CONFIG.LANE_WIDTH;
  }

  getLaneX(nowMs: number): number {
    if (!this._switching) return this.laneIndexToX(this._laneIndex);
    const raw = Math.min(1, (nowMs - this._switchStartMs) / CONFIG.LANE_SWITCH_DURATION);
    const e = easeOutBack(raw);
    const x0 = this.laneIndexToX(this._fromLane);
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
      const raw = Math.min(1, (nowMs - this._switchStartMs) / CONFIG.LANE_SWITCH_DURATION);
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
      const raw = Math.min(1, (nowMs - this._switchStartMs) / CONFIG.LANE_SWITCH_DURATION);
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

  private tryBeginSwitch(delta: -1 | 1): void {
    if (!this._enabled || this._switching) return;
    const next = this._laneIndex + delta;
    if (next < 0 || next > CONFIG.LANE_COUNT - 1) return;
    this._fromLane = this._laneIndex;
    this._toLane = next;
    this._switching = true;
    this._switchStartMs = performance.now();
  }

  private bindPointer(): void {
    this.target.addEventListener('pointerdown', (e: PointerEvent) => {
      if (!this._enabled || this._pointerId !== null) return;
      this._pointerId = e.pointerId;
      this._pointerDownX = e.clientX;
      this._pointerDownY = e.clientY;
      this._pointerDownTime = performance.now();
      this.target.setPointerCapture(e.pointerId);
    });
    this.target.addEventListener('pointerup', (e: PointerEvent) => {
      if (e.pointerId !== this._pointerId) return;
      this.target.releasePointerCapture(e.pointerId);
      this._pointerId = null;
      const dt = performance.now() - this._pointerDownTime;
      const dx = e.clientX - this._pointerDownX;
      const dy = e.clientY - this._pointerDownY;
      if (dt > CONFIG.SWIPE_MAX_TIME) return;
      if (Math.abs(dx) < CONFIG.SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) this.tryBeginSwitch(-1);
      else this.tryBeginSwitch(1);
    });
    this.target.addEventListener('pointercancel', (e: PointerEvent) => {
      if (e.pointerId !== this._pointerId) return;
      this._pointerId = null;
    });
  }

  private bindKeyboard(): void {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (!this._enabled) return;
      // Desktop: opposite lane delta vs swipe so screen-left/right matches chase view.
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        e.preventDefault();
        this.tryBeginSwitch(1);
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        e.preventDefault();
        this.tryBeginSwitch(-1);
      }
    });
  }
}

const DEG2RAD = Math.PI / 180;
