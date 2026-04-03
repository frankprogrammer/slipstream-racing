import { UnlockManager, type Loadout } from "../engine/UnlockManager";
import {
  CAR_DEFINITIONS,
  BODY_COLORS,
  WHEEL_STYLES,
  WING_COLORS,
  type CarId,
  type BodyColorId,
  type WheelStyleId,
  type WingColorId,
} from "../engine/ProceduralCars";

type Tab = "cars" | "body" | "wheels";

function hexCss(hex: number): string {
  return `#${hex.toString(16).padStart(6, "0")}`;
}

export class MarketScreen {
  private container: HTMLElement;
  private tabBtns: HTMLElement[];
  private grid: HTMLElement;
  private applyBtn: HTMLElement;
  private closeBtn: HTMLElement;
  private highScoreEl: HTMLElement;

  private unlockManager: UnlockManager;
  private currentTab: Tab = "cars";
  private pendingLoadout: Loadout;

  private _onApply: ((loadout: Loadout) => void) | null = null;
  private _onClose: (() => void) | null = null;

  constructor(unlockManager: UnlockManager) {
    this.unlockManager = unlockManager;
    this.pendingLoadout = { ...unlockManager.loadout };

    this.container = document.getElementById("market")!;
    this.grid = document.getElementById("market-grid")!;
    this.applyBtn = document.getElementById("market-apply-btn")!;
    this.closeBtn = document.getElementById("market-close-btn")!;
    this.highScoreEl = document.getElementById("market-highscore")!;

    this.tabBtns = [
      document.getElementById("market-tab-cars")!,
      document.getElementById("market-tab-body")!,
      document.getElementById("market-tab-wheels")!,
    ];

    this.tabBtns[0].addEventListener("click", () => this.switchTab("cars"));
    this.tabBtns[1].addEventListener("click", () => this.switchTab("body"));
    this.tabBtns[2].addEventListener("click", () => this.switchTab("wheels"));

    this.applyBtn.addEventListener("click", () => {
      this.unlockManager.setLoadout(this.pendingLoadout);
      this.hide();
      this._onApply?.(this.pendingLoadout);
    });

    this.closeBtn.addEventListener("click", () => {
      this.hide();
      this._onClose?.();
    });
  }

  onApply(cb: (loadout: Loadout) => void): void { this._onApply = cb; }
  onClose(cb: () => void): void { this._onClose = cb; }

  show(): void {
    this.pendingLoadout = { ...this.unlockManager.loadout };
    this.highScoreEl.textContent = `BEST: ${this.unlockManager.highScore.toLocaleString()} PTS`;
    this.switchTab("cars");
    this.container.classList.add("visible");
  }

  hide(): void { this.container.classList.remove("visible"); }

  get isVisible(): boolean { return this.container.classList.contains("visible"); }

  private switchTab(tab: Tab): void {
    this.currentTab = tab;
    const tabs: Tab[] = ["cars", "body", "wheels"];
    this.tabBtns.forEach((btn, i) => btn.classList.toggle("active", tabs[i] === tab));
    this.renderGrid();
  }

  private renderGrid(): void {
    this.grid.innerHTML = "";

    if (this.currentTab === "cars") {
      for (const car of CAR_DEFINITIONS) {
        const unlocked = this.unlockManager.isCarUnlocked(car.id);
        const selected = this.pendingLoadout.carId === car.id;
        const equipped = this.unlockManager.loadout.carId === car.id;
        this.grid.appendChild(this.buildCard({
          unlocked, selected, equipped,
          name: car.name,
          scoreLine: car.unlockScore === 0 ? "FREE" : `${car.unlockScore.toLocaleString()} PTS`,
          preview: this.carSvgPreview(car.id),
          onClick: unlocked ? () => { this.pendingLoadout.carId = car.id; this.renderGrid(); } : null,
        }));
      }
    } else if (this.currentTab === "body") {
      this.addSectionLabel("BODY COLOR");
      for (const bc of BODY_COLORS) {
        const unlocked = this.unlockManager.isBodyColorUnlocked(bc.id);
        const selected = this.pendingLoadout.bodyColorId === bc.id;
        const equipped = this.unlockManager.loadout.bodyColorId === bc.id;
        this.grid.appendChild(this.buildCard({
          unlocked, selected, equipped,
          name: bc.name,
          scoreLine: bc.unlockScore === 0 ? "FREE" : `${bc.unlockScore.toLocaleString()} PTS`,
          preview: this.colorSwatchPreview(bc.hex),
          onClick: unlocked ? () => { this.pendingLoadout.bodyColorId = bc.id as BodyColorId; this.renderGrid(); } : null,
        }));
      }

      this.addSectionLabel("REAR WING");
      for (const wc of WING_COLORS) {
        const unlocked = this.unlockManager.isWingColorUnlocked(wc.id);
        const selected = this.pendingLoadout.wingColorId === wc.id;
        const equipped = this.unlockManager.loadout.wingColorId === wc.id;
        const displayHex = wc.hex ?? BODY_COLORS.find(b => b.id === this.pendingLoadout.bodyColorId)?.hex ?? 0xeeeff2;
        this.grid.appendChild(this.buildCard({
          unlocked, selected, equipped,
          name: wc.name,
          scoreLine: wc.unlockScore === 0 ? "FREE" : `${wc.unlockScore.toLocaleString()} PTS`,
          preview: this.colorSwatchPreview(displayHex),
          onClick: unlocked ? () => { this.pendingLoadout.wingColorId = wc.id as WingColorId; this.renderGrid(); } : null,
        }));
      }
    } else {
      for (const ws of WHEEL_STYLES) {
        const unlocked = this.unlockManager.isWheelStyleUnlocked(ws.id);
        const selected = this.pendingLoadout.wheelStyleId === ws.id;
        const equipped = this.unlockManager.loadout.wheelStyleId === ws.id;
        this.grid.appendChild(this.buildCard({
          unlocked, selected, equipped,
          name: ws.name,
          scoreLine: ws.unlockScore === 0 ? "FREE" : `${ws.unlockScore.toLocaleString()} PTS`,
          preview: this.wheelPreview(ws.accent),
          onClick: unlocked ? () => { this.pendingLoadout.wheelStyleId = ws.id as WheelStyleId; this.renderGrid(); } : null,
        }));
      }
    }
  }

  private addSectionLabel(text: string): void {
    const el = document.createElement("div");
    el.className = "market-section-label";
    el.textContent = text;
    this.grid.appendChild(el);
  }

  private buildCard(opts: {
    unlocked: boolean;
    selected: boolean;
    equipped: boolean;
    name: string;
    scoreLine: string;
    preview: HTMLElement;
    onClick: (() => void) | null;
  }): HTMLElement {
    const card = document.createElement("div");
    card.className = "market-card";
    if (opts.selected) card.classList.add("selected");
    if (!opts.unlocked) card.classList.add("locked");

    // Preview area
    card.appendChild(opts.preview);

    // Name
    const nameEl = document.createElement("div");
    nameEl.className = "market-card-name";
    nameEl.textContent = opts.name;
    card.appendChild(nameEl);

    // Score requirement - always visible
    const scoreEl = document.createElement("div");
    scoreEl.className = "market-card-score";
    if (!opts.unlocked) {
      scoreEl.classList.add("locked-score");
      scoreEl.textContent = opts.scoreLine;
    } else if (opts.selected) {
      scoreEl.classList.add("selected-score");
      scoreEl.textContent = "SELECTED";
    } else if (opts.equipped) {
      scoreEl.classList.add("equipped-score");
      scoreEl.textContent = "EQUIPPED";
    } else {
      scoreEl.classList.add("unlocked-score");
      scoreEl.textContent = opts.scoreLine;
    }
    card.appendChild(scoreEl);

    if (!opts.unlocked) {
      const lockIcon = document.createElement("div");
      lockIcon.className = "market-lock-icon";
      lockIcon.textContent = "\u{1F512}";
      card.appendChild(lockIcon);
    }

    if (opts.onClick) {
      card.addEventListener("click", opts.onClick);
    }

    return card;
  }

  private carSvgPreview(id: CarId): HTMLElement {
    const wrap = document.createElement("div");
    wrap.className = "market-card-preview";
    wrap.innerHTML = this.getCarSvg(id);
    return wrap;
  }

  private colorSwatchPreview(hex: number): HTMLElement {
    const wrap = document.createElement("div");
    wrap.className = "market-card-preview";
    const swatch = document.createElement("div");
    swatch.className = "market-swatch";
    swatch.style.background = hexCss(hex);
    wrap.appendChild(swatch);
    return wrap;
  }

  private wheelPreview(accent: number): HTMLElement {
    const wrap = document.createElement("div");
    wrap.className = "market-card-preview";
    const swatch = document.createElement("div");
    swatch.className = "market-swatch market-wheel";
    swatch.style.background = `radial-gradient(circle at 40% 40%, ${hexCss(accent)} 30%, #1a1a1e 70%)`;
    wrap.appendChild(swatch);
    return wrap;
  }

  private getCarSvg(id: CarId): string {
    const W = 120;
    const H = 52;
    const base = `viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"`;

    // All SVGs share the same overall size, just different proportional details
    switch (id) {
      case "starter":
        return `<svg ${base}>
          <rect x="25" y="16" width="60" height="14" rx="3" fill="currentColor"/>
          <rect x="18" y="20" width="14" height="8" rx="2" fill="currentColor" opacity="0.8"/>
          <rect x="78" y="18" width="16" height="10" rx="2" fill="currentColor" opacity="0.8"/>
          <rect x="12" y="28" width="30" height="2" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="70" y="10" width="24" height="2" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="84" y="12" width="2" height="18" fill="currentColor" opacity="0.4"/>
          <rect x="94" y="12" width="2" height="18" fill="currentColor" opacity="0.4"/>
          <circle cx="28" cy="36" r="5.5" fill="#2a2a2e"/><circle cx="28" cy="36" r="3" fill="#555"/>
          <circle cx="82" cy="36" r="6.5" fill="#2a2a2e"/><circle cx="82" cy="36" r="3.5" fill="#555"/>
        </svg>`;

      case "aeroBeast":
        return `<svg ${base}>
          <rect x="25" y="18" width="60" height="11" rx="2" fill="currentColor"/>
          <rect x="15" y="20" width="16" height="9" rx="2" fill="currentColor" opacity="0.85"/>
          <rect x="78" y="18" width="18" height="12" rx="2" fill="currentColor" opacity="0.85"/>
          <rect x="8" y="28" width="36" height="2.5" rx="1" fill="currentColor" opacity="0.65"/>
          <rect x="66" y="8" width="30" height="2.5" rx="1" fill="currentColor" opacity="0.65"/>
          <rect x="82" y="10" width="2" height="20" fill="currentColor" opacity="0.45"/>
          <rect x="96" y="10" width="2" height="20" fill="currentColor" opacity="0.45"/>
          <rect x="90" y="16" width="1" height="14" fill="currentColor" opacity="0.3"/>
          <circle cx="28" cy="36" r="5" fill="#2a2a2e"/><circle cx="28" cy="36" r="2.8" fill="#555"/>
          <circle cx="82" cy="36" r="6" fill="#2a2a2e"/><circle cx="82" cy="36" r="3.2" fill="#555"/>
        </svg>`;

      case "speedDemon":
        return `<svg ${base}>
          <rect x="28" y="17" width="56" height="12" rx="2" fill="currentColor"/>
          <polygon points="14,24 28,17 28,29" fill="currentColor" opacity="0.85"/>
          <rect x="78" y="19" width="14" height="9" rx="2" fill="currentColor" opacity="0.8"/>
          <rect x="14" y="28" width="26" height="2" rx="1" fill="currentColor" opacity="0.55"/>
          <rect x="72" y="11" width="20" height="2" rx="1" fill="currentColor" opacity="0.55"/>
          <rect x="82" y="13" width="2" height="16" fill="currentColor" opacity="0.4"/>
          <rect x="92" y="13" width="2" height="16" fill="currentColor" opacity="0.4"/>
          <circle cx="30" cy="36" r="5" fill="#2a2a2e"/><circle cx="30" cy="36" r="2.8" fill="#555"/>
          <circle cx="80" cy="36" r="5.5" fill="#2a2a2e"/><circle cx="80" cy="36" r="3" fill="#555"/>
        </svg>`;

      case "tank":
        return `<svg ${base}>
          <rect x="22" y="14" width="64" height="16" rx="3" fill="currentColor"/>
          <rect x="16" y="18" width="14" height="10" rx="2" fill="currentColor" opacity="0.85"/>
          <rect x="78" y="16" width="18" height="12" rx="2" fill="currentColor" opacity="0.85"/>
          <rect x="10" y="28" width="32" height="2.5" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="68" y="8" width="26" height="2.5" rx="1" fill="currentColor" opacity="0.6"/>
          <rect x="80" y="10" width="2.5" height="20" fill="currentColor" opacity="0.45"/>
          <rect x="94" y="10" width="2.5" height="20" fill="currentColor" opacity="0.45"/>
          <circle cx="26" cy="37" r="6.5" fill="#2a2a2e"/><circle cx="26" cy="37" r="3.5" fill="#555"/>
          <circle cx="82" cy="37" r="7.5" fill="#2a2a2e"/><circle cx="82" cy="37" r="4" fill="#555"/>
        </svg>`;

      case "phantom":
        return `<svg ${base}>
          <rect x="28" y="19" width="56" height="10" rx="5" fill="currentColor"/>
          <polygon points="12,24 28,19 28,29" fill="currentColor" opacity="0.8"/>
          <rect x="78" y="20" width="14" height="8" rx="2" fill="currentColor" opacity="0.75"/>
          <rect x="14" y="28" width="24" height="1.5" rx="1" fill="currentColor" opacity="0.5"/>
          <rect x="74" y="10" width="18" height="1.5" rx="1" fill="currentColor" opacity="0.5"/>
          <rect x="83" y="11" width="1.5" height="18" fill="currentColor" opacity="0.35"/>
          <rect x="72" y="14" width="1" height="12" fill="currentColor" opacity="0.25"/>
          <rect x="60" y="15" width="1" height="5" fill="currentColor" opacity="0.3"/>
          <rect x="55" y="14" width="14" height="1.5" rx="1" fill="currentColor" opacity="0.35"/>
          <circle cx="30" cy="35" r="4.5" fill="#2a2a2e"/><circle cx="30" cy="35" r="2.5" fill="#555"/>
          <circle cx="80" cy="35" r="5.5" fill="#2a2a2e"/><circle cx="80" cy="35" r="3" fill="#555"/>
        </svg>`;

      default:
        return `<svg ${base}><rect x="25" y="16" width="60" height="14" rx="3" fill="currentColor"/></svg>`;
    }
  }
}
