import { CONFIG } from '../config';

/**
 * HUD — HTML/CSS overlay: milestone copy + screen flash only.
 * Score and chain render on the taxi (`TaxiWorldHud`).
 */
export class HUD {
  private milestoneEl: HTMLElement;
  private flashEl: HTMLElement;
  private milestoneTimer = 0;
  private milestoneClassTimer = 0;
  private perfectFlashTimer = 0;

  constructor() {
    this.milestoneEl = document.getElementById('milestone-text')!;
    this.flashEl = document.getElementById('screen-flash')!;
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
    window.clearTimeout(this.milestoneTimer);
    window.clearTimeout(this.milestoneClassTimer);
    window.clearTimeout(this.perfectFlashTimer);
    this.milestoneEl.classList.remove('perfect');
    this.milestoneEl.style.opacity = '0';
    this.flashEl.classList.remove('perfect-hit');
    this.flashEl.style.opacity = '0';
  }
}
