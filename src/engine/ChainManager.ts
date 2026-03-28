import { CONFIG } from '../config';

/**
 * Chain multiplier: increments on each slingshot. Resets to ×1 after CHAIN_TIMEOUT without drafting.
 * Milestones at ×5, ×10, ×15, ×20 (for HUD celebration).
 */
export class ChainManager {
  private _chain = 1;
  private _maxChainThisRun = 1;
  private _lastDraftActivityMs = 0;
  private _milestoneShown = new Set<number>();

  get chain(): number {
    return this._chain;
  }

  get maxChainThisRun(): number {
    return this._maxChainThisRun;
  }

  reset(): void {
    this._chain = 1;
    this._maxChainThisRun = 1;
    this._lastDraftActivityMs = 0;
    this._milestoneShown.clear();
  }

  /** Call each frame — decays chain if idle too long without drafting. */
  tick(nowMs: number, isDrafting: boolean): void {
    if (isDrafting) {
      this._lastDraftActivityMs = nowMs;
      return;
    }
    if (nowMs - this._lastDraftActivityMs > CONFIG.CHAIN_TIMEOUT) {
      this._chain = 1;
    }
  }

  onSlingshot(nowMs: number): number | null {
    this._chain += 1;
    this._lastDraftActivityMs = nowMs;
    if (this._chain > this._maxChainThisRun) {
      this._maxChainThisRun = this._chain;
    }
    if (
      CONFIG.CHAIN_MILESTONES.includes(this._chain) &&
      !this._milestoneShown.has(this._chain)
    ) {
      this._milestoneShown.add(this._chain);
      return this._chain;
    }
    return null;
  }

}
