import { formatPlayedTimeMs } from "../config";

/**
 * GameOverScreen — HTML/CSS overlay for end-of-run results.
 *
 * Targets existing DOM elements in index.html:
 * - #gameover: container, toggled via .visible class
 * - #final-score: large score number
 * - #new-best: shown only if new high score
 * - #stat-distance, #stat-time, #stat-slipstreams
 * - #retry-btn: tap to restart (MUST be under 1 second to playing)
 *
 * On show: populate stats, check high score, display.
 * On retry: hide overlay, emit restart event.
 */
export type GameOverReason = "crash" | "timeout";

export class GameOverScreen {
  private container: HTMLElement;
  private titleEl: HTMLElement;
  private finalScoreEl: HTMLElement;
  private newBestEl: HTMLElement;
  private distanceEl: HTMLElement;
  private timeEl: HTMLElement;
  private slipstreamsEl: HTMLElement;
  private retryBtn: HTMLElement;
  private _onRetry: (() => void) | null = null;

  constructor() {
    this.container = document.getElementById('gameover')!;
    this.titleEl = document.getElementById('gameover-title')!;
    this.finalScoreEl = document.getElementById('final-score')!;
    this.newBestEl = document.getElementById('new-best')!;
    this.distanceEl = document.getElementById('stat-distance')!;
    this.timeEl = document.getElementById('stat-time')!;
    this.slipstreamsEl = document.getElementById('stat-slipstreams')!;
    this.retryBtn = document.getElementById('retry-btn')!;

    this.retryBtn.addEventListener('click', () => {
      this.hide();
      this._onRetry?.();
    });
  }

  onRetry(cb: () => void): void { this._onRetry = cb; }

  show(
    score: number,
    distance: number,
    runTimeMs: number,
    slipstreamsActivated: number,
    reason: GameOverReason,
  ): void {
    this.titleEl.textContent =
      reason === "timeout" ? "TIME'S UP" : "GAME OVER";
    this.finalScoreEl.textContent = score.toLocaleString();
    this.distanceEl.textContent = `${(distance / 100).toFixed(1)} km`;
    this.timeEl.textContent = formatPlayedTimeMs(runTimeMs);
    this.slipstreamsEl.textContent = String(slipstreamsActivated);

    // Check high score
    const highScore = parseInt(localStorage.getItem('slipstream-highscore') || '0', 10);
    if (score > highScore) {
      localStorage.setItem('slipstream-highscore', score.toString());
      this.newBestEl.style.display = 'block';
    } else {
      this.newBestEl.style.display = 'none';
    }

    this.container.classList.add('visible');
  }

  hide(): void {
    this.container.classList.remove('visible');
  }
}
