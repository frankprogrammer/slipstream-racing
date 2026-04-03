/**
 * GameOverScreen — HTML/CSS overlay for end-of-run results.
 *
 * Targets existing DOM elements in index.html:
 * - #gameover: container, toggled via .visible class
 * - #final-score: large score number
 * - #new-best: shown only if new high score
 * - #stat-chain: best chain this run
 * - #stat-distance: distance traveled
 * - #retry-btn: tap to restart
 * - #market-btn: opens the market overlay
 */
import type { UnlockManager } from "../engine/UnlockManager";

export class GameOverScreen {
  private container: HTMLElement;
  private finalScoreEl: HTMLElement;
  private newBestEl: HTMLElement;
  private chainEl: HTMLElement;
  private distanceEl: HTMLElement;
  private retryBtn: HTMLElement;
  private marketBtn: HTMLElement;
  private _onRetry: (() => void) | null = null;
  private _onMarket: (() => void) | null = null;

  constructor() {
    this.container = document.getElementById('gameover')!;
    this.finalScoreEl = document.getElementById('final-score')!;
    this.newBestEl = document.getElementById('new-best')!;
    this.chainEl = document.getElementById('stat-chain')!;
    this.distanceEl = document.getElementById('stat-distance')!;
    this.retryBtn = document.getElementById('retry-btn')!;
    this.marketBtn = document.getElementById('market-btn')!;

    this.retryBtn.addEventListener('click', () => {
      this.hide();
      this._onRetry?.();
    });

    this.marketBtn.addEventListener('click', () => {
      this.hide();
      this._onMarket?.();
    });
  }

  onRetry(cb: () => void): void { this._onRetry = cb; }
  onMarket(cb: () => void): void { this._onMarket = cb; }

  show(score: number, bestChain: number, distance: number, unlockManager: UnlockManager): void {
    this.finalScoreEl.textContent = score.toLocaleString();
    this.chainEl.textContent = `×${bestChain}`;
    this.distanceEl.textContent = `${(distance / 100).toFixed(1)}km`;

    const isNewBest = unlockManager.updateHighScore(score);
    this.newBestEl.style.display = isNewBest ? 'block' : 'none';

    this.container.classList.add('visible');
  }

  hide(): void {
    this.container.classList.remove('visible');
  }
}
