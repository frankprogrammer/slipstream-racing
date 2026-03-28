import { CONFIG } from '../config';

/**
 * Score: distance ticks (every DISTANCE_SCORE_INTERVAL units) × chain multiplier,
 * plus slipstream bonus per slingshot.
 */
export class ScoreManager {
  private score = 0;
  private distanceAcc = 0;

  get currentScore(): number {
    return Math.floor(this.score);
  }

  reset(): void {
    this.score = 0;
    this.distanceAcc = 0;
  }

  addDistance(distanceDelta: number, chainMultiplier: number): void {
    this.distanceAcc += distanceDelta;
    while (this.distanceAcc >= CONFIG.DISTANCE_SCORE_INTERVAL) {
      this.distanceAcc -= CONFIG.DISTANCE_SCORE_INTERVAL;
      this.score += CONFIG.DISTANCE_SCORE_RATE * chainMultiplier;
    }
  }

  addSlingshotBonus(chainAfterIncrement: number): void {
    this.score += CONFIG.CHAIN_SCORE_BASE * chainAfterIncrement;
  }
}
