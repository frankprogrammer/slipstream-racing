/**
 * Procedural “gamer tag” labels for traffic — one word-ish handle + optional two-digit suffix.
 */

const PREFIXES = [
  "Turbo",
  "Nitro",
  "Neon",
  "Cyber",
  "Ghost",
  "Apex",
  "Shadow",
  "Blitz",
  "Hyper",
  "Ultra",
  "Pro",
  "Mega",
  "Zero",
  "Dark",
  "Ice",
  "Fire",
  "Red",
  "Blue",
] as const;

const SUFFIXES = [
  "Fox",
  "Wolf",
  "Viper",
  "Hawk",
  "Storm",
  "Prime",
  "Rush",
  "Shift",
  "Grip",
  "Line",
  "Ace",
  "Form",
  "King",
  "Lord",
  "Unit",
  "Beam",
  "Drift",
  "Boost",
] as const;

function pick<T extends readonly string[]>(arr: T): T[number] {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

/** e.g. `TurboFox`, `NeonViper42` (two digits ~80% of the time). */
export function generateRacerName(): string {
  const base = `${pick(PREFIXES)}${pick(SUFFIXES)}`;
  if (Math.random() < 0.82) {
    const n = Math.floor(Math.random() * 100);
    return `${base}${String(n).padStart(2, "0")}`;
  }
  return base;
}
