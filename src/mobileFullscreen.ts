/**
 * Request element fullscreen after a user gesture (required on mobile).
 * No-op if unsupported or denied — iOS Safari often ignores fullscreen on generic elements;
 * “Add to Home Screen” (manifest `display: standalone`) is the reliable iOS fullscreen.
 */
let fullscreenAttempted = false;

export function tryEnterFullscreenOnce(root: HTMLElement): void {
  if (fullscreenAttempted) return;
  fullscreenAttempted = true;

  const el = root as HTMLElement & {
    requestFullscreen?: () => Promise<void> | void;
    webkitRequestFullscreen?: () => void;
  };
  if (typeof el.requestFullscreen === "function") {
    try {
      const p = el.requestFullscreen();
      if (p && typeof (p as Promise<void>).catch === "function") {
        void (p as Promise<void>).catch(() => {});
      }
    } catch {
      /* ignore */
    }
    return;
  }
  if (typeof el.webkitRequestFullscreen === "function") {
    try {
      el.webkitRequestFullscreen();
    } catch {
      /* ignore */
    }
    return;
  }

  const doc = document.documentElement as HTMLElement & {
    requestFullscreen?: () => Promise<void> | void;
    webkitRequestFullscreen?: () => void;
  };
  if (typeof doc.requestFullscreen === "function") {
    try {
      const p = doc.requestFullscreen();
      if (p && typeof (p as Promise<void>).catch === "function") {
        void (p as Promise<void>).catch(() => {});
      }
    } catch {
      /* ignore */
    }
  } else if (typeof doc.webkitRequestFullscreen === "function") {
    try {
      doc.webkitRequestFullscreen();
    } catch {
      /* ignore */
    }
  }
}
