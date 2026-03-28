import { CONFIG } from '../config';

function paletteHexToCss(hex: number): string {
  return `#${hex.toString(16).padStart(6, '0')}`;
}

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
  private chainPopTimer = 0;
  private milestoneTimer = 0;
  private milestoneClassTimer = 0;
  private perfectFlashTimer = 0;

  constructor() {
    this.scoreEl = document.getElementById('score')!;
    this.chainEl = document.getElementById('chain')!;
    this.milestoneEl = document.getElementById('milestone-text')!;
    this.flashEl = document.getElementById('screen-flash')!;
    const d = CONFIG.CHAIN_POP_DURATION;
    this.chainEl.style.transition = `opacity 0.2s ease-out, transform ${d}ms cubic-bezier(0.34, 1.45, 0.64, 1), color ${Math.round(d * 0.9)}ms ease-out`;
  }

  updateScore(score: number): void {
    this.scoreEl.textContent = score.toLocaleString();
  }

  updateChain(chain: number): void {
    this.chainEl.textContent = `×${chain}`;
    this.chainEl.classList.toggle('active', chain > 1);

    const pink = paletteHexToCss(CONFIG.PALETTE.NEON_PINK);
    const flash = paletteHexToCss(CONFIG.PALETTE.UI_TEXT);

    if (chain === 1) {
      window.clearTimeout(this.chainPopTimer);
      this.chainEl.style.transform = '';
      this.chainEl.style.color = '';
    }

    const grew = chain > this.lastChain;
    this.lastChain = chain;

    if (grew && chain > 1) {
      window.clearTimeout(this.chainPopTimer);
      this.chainEl.style.color = flash;
      this.chainEl.style.transform = `scale(${CONFIG.CHAIN_POP_SCALE})`;

      this.chainPopTimer = window.setTimeout(() => {
        this.chainEl.style.transform = 'scale(1)';
        this.chainEl.style.color = pink;
      }, CONFIG.CHAIN_POP_DURATION);
    }
  }

  /**
   * @param isPerfect — ×10: larger "PERFECT" treatment + longer hold (step 28).
   */
  showMilestone(text: string, isPerfect = false): void {
    window.clearTimeout(this.milestoneTimer);
    window.clearTimeout(this.milestoneClassTimer);
    this.milestoneEl.textContent = text;
    this.milestoneEl.classList.toggle('perfect', isPerfect);
    this.milestoneEl.style.opacity = '1';
    const hold = isPerfect
      ? CONFIG.PERFECT_MILESTONE_HOLD_MS
      : 1000;
    this.milestoneTimer = window.setTimeout(() => {
      this.milestoneEl.style.opacity = '0';
      this.milestoneClassTimer = window.setTimeout(() => {
        this.milestoneEl.classList.remove('perfect');
      }, 380);
    }, hold);
  }

  /** Default pink flash (other milestones / juice). */
  flashScreen(): void {
    this.flashEl.classList.remove('perfect-hit');
    this.flashEl.style.opacity = '1';
    window.setTimeout(() => {
      this.flashEl.style.opacity = '0';
    }, CONFIG.SCREEN_FLASH_DURATION);
  }

  /** Stronger, longer tint for ×10 PERFECT. */
  flashScreenPerfect(): void {
    window.clearTimeout(this.perfectFlashTimer);
    this.flashEl.classList.add('perfect-hit');
    this.flashEl.style.opacity = '1';
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        this.flashEl.style.opacity = '0';
      });
    });
    this.perfectFlashTimer = window.setTimeout(() => {
      this.flashEl.classList.remove('perfect-hit');
    }, CONFIG.PERFECT_FLASH_DURATION_MS + 180);
  }

  reset(): void {
    window.clearTimeout(this.chainPopTimer);
    window.clearTimeout(this.milestoneTimer);
    window.clearTimeout(this.milestoneClassTimer);
    window.clearTimeout(this.perfectFlashTimer);
    this.scoreEl.textContent = '0';
    this.chainEl.textContent = '×1';
    this.chainEl.classList.remove('active');
    this.chainEl.style.transform = '';
    this.chainEl.style.color = '';
    this.lastChain = 1;
    this.milestoneEl.classList.remove('perfect');
    this.milestoneEl.style.opacity = '0';
    this.flashEl.classList.remove('perfect-hit');
    this.flashEl.style.opacity = '0';
  }
}
