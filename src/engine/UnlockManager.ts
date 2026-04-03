import {
  type CarId,
  type BodyColorId,
  type WheelStyleId,
  type WingColorId,
  CAR_DEFINITIONS,
  BODY_COLORS,
  WHEEL_STYLES,
  WING_COLORS,
} from "./ProceduralCars";

const STORAGE_LOADOUT = "slipstream-loadout";
const STORAGE_HIGH = "slipstream-highscore";

export interface Loadout {
  carId: CarId;
  bodyColorId: BodyColorId;
  wheelStyleId: WheelStyleId;
  wingColorId: WingColorId;
}

const DEFAULT_LOADOUT: Loadout = {
  carId: "starter",
  bodyColorId: "white",
  wheelStyleId: "standard",
  wingColorId: "matchBody",
};

export class UnlockManager {
  private _highScore = 0;
  private _loadout: Loadout = { ...DEFAULT_LOADOUT };

  constructor() {
    this._highScore = parseInt(localStorage.getItem(STORAGE_HIGH) || "0", 10);
    this.loadLoadout();
  }

  get highScore(): number {
    return this._highScore;
  }

  get loadout(): Readonly<Loadout> {
    return this._loadout;
  }

  updateHighScore(score: number): boolean {
    if (score > this._highScore) {
      this._highScore = score;
      localStorage.setItem(STORAGE_HIGH, score.toString());
      return true;
    }
    return false;
  }

  isCarUnlocked(carId: CarId): boolean {
    const def = CAR_DEFINITIONS.find(c => c.id === carId);
    return def ? this._highScore >= def.unlockScore : false;
  }

  isBodyColorUnlocked(bodyId: BodyColorId): boolean {
    const def = BODY_COLORS.find(b => b.id === bodyId);
    return def ? this._highScore >= def.unlockScore : false;
  }

  isWheelStyleUnlocked(wheelId: WheelStyleId): boolean {
    const def = WHEEL_STYLES.find(w => w.id === wheelId);
    return def ? this._highScore >= def.unlockScore : false;
  }

  isWingColorUnlocked(wingId: WingColorId): boolean {
    const def = WING_COLORS.find(w => w.id === wingId);
    return def ? this._highScore >= def.unlockScore : false;
  }

  getRequiredScore(category: "car" | "body" | "wheel" | "wing", id: string): number {
    if (category === "car") {
      return CAR_DEFINITIONS.find(c => c.id === id)?.unlockScore ?? 0;
    }
    if (category === "body") {
      return BODY_COLORS.find(b => b.id === id)?.unlockScore ?? 0;
    }
    if (category === "wheel") {
      return WHEEL_STYLES.find(w => w.id === id)?.unlockScore ?? 0;
    }
    return WING_COLORS.find(w => w.id === id)?.unlockScore ?? 0;
  }

  setLoadout(partial: Partial<Loadout>): void {
    if (partial.carId && this.isCarUnlocked(partial.carId)) {
      this._loadout.carId = partial.carId;
    }
    if (partial.bodyColorId && this.isBodyColorUnlocked(partial.bodyColorId)) {
      this._loadout.bodyColorId = partial.bodyColorId;
    }
    if (partial.wheelStyleId && this.isWheelStyleUnlocked(partial.wheelStyleId)) {
      this._loadout.wheelStyleId = partial.wheelStyleId;
    }
    if (partial.wingColorId && this.isWingColorUnlocked(partial.wingColorId)) {
      this._loadout.wingColorId = partial.wingColorId;
    }
    this.saveLoadout();
  }

  private loadLoadout(): void {
    try {
      const raw = localStorage.getItem(STORAGE_LOADOUT);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Loadout>;
        if (parsed.carId && this.isCarUnlocked(parsed.carId)) this._loadout.carId = parsed.carId;
        if (parsed.bodyColorId && this.isBodyColorUnlocked(parsed.bodyColorId)) this._loadout.bodyColorId = parsed.bodyColorId;
        if (parsed.wheelStyleId && this.isWheelStyleUnlocked(parsed.wheelStyleId)) this._loadout.wheelStyleId = parsed.wheelStyleId;
        if (parsed.wingColorId && this.isWingColorUnlocked(parsed.wingColorId)) this._loadout.wingColorId = parsed.wingColorId;
      }
    } catch {
      // Corrupt data — use defaults
    }
  }

  private saveLoadout(): void {
    localStorage.setItem(STORAGE_LOADOUT, JSON.stringify(this._loadout));
  }
}
