import { CONFIG } from "../config";

/**
 * Run score = distance × A + time (seconds) × B + slipstreams × C (all from CONFIG).
 */
export function computeRunScore(
  distanceUnits: number,
  runTimeMs: number,
  slipstreamsActivated: number,
): number {
  const sec = runTimeMs / 1000;
  return Math.floor(
    distanceUnits * CONFIG.GAME_OVER_SCORE_PER_DISTANCE_UNIT +
      sec * CONFIG.GAME_OVER_SCORE_PER_SECOND +
      slipstreamsActivated * CONFIG.GAME_OVER_SCORE_PER_SLIPSTREAM,
  );
}
