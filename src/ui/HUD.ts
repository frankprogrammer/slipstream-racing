import { CONFIG } from '../config';

/**
 * HUD — HTML/CSS overlay on top of Three.js canvas.
 *
 * Targets existing DOM elements in index.html:
 * - #score, #chain, #milestone-text, #screen-flash
 */
export class HUD {
  private scoreEl: HTMLElement;
  private chainEl: HTMLElement;
  private milestoneEl: HTMLElement;
  private flashEl: HTMLElement;
  private lastChain = 1;

  constructor() {
    this.scoreEl = document.getElementById('score')!;
    this.chainEl = document.getElementById('chain')!;
    this.milestoneEl = document.getElementById('milestone-text')!;
    this.flashEl = document.getElementById('screen-flash')!;
  }

  updateScore(score: number): void {
    this.scoreEl.textContent = score.toLocaleString();
  }

  updateChain(chain: number): void {
    this.chainEl.textContent = `×${chain}`;
    this.chainEl.classList.toggle('active', chain > 1);

    const grew = chain > this.lastChain;
    this.lastChain = chain;
    if (grew && chain > 1) {
      this.chainEl.style.transform = `scale(${CONFIG.CHAIN_POP_SCALE})`;
      setTimeout(() => {
        this.chainEl.style.transform = 'scale(1)';
      }, CONFIG.CHAIN_POP_DURATION);
    }
  }

  showMilestone(text: string): void {
    this.milestoneEl.textContent = text;
    this.milestoneEl.style.opacity = '1';
    setTimeout(() => {
      this.milestoneEl.style.opacity = '0';
    }, 1000);
  }

  flashScreen(): void {
    this.flashEl.style.opacity = '1';
    setTimeout(() => {
      this.flashEl.style.opacity = '0';
    }, CONFIG.SCREEN_FLASH_DURATION);
  }

  reset(): void {
    this.scoreEl.textContent = '0';
    this.chainEl.textContent = '×1';
    this.chainEl.classList.remove('active');
    this.lastChain = 1;
  }
}
