import * as THREE from "three";
import { CONFIG } from "../config";

export type CarId = "starter" | "aeroBeast" | "speedDemon" | "tank" | "phantom";
export type WheelStyleId = "standard" | "gold" | "chrome" | "redStriped";
export type BodyColorId =
  | "white"
  | "ferrariRed"
  | "mclarenPapaya"
  | "mercedesSilver"
  | "redBullNavy"
  | "astonGreen"
  | "alpineBlue"
  | "haasBlackGold";
export type WingColorId = "matchBody" | "carbonBlack" | "neonPink" | "neonBlue";

export interface CarDefinition {
  id: CarId;
  name: string;
  unlockScore: number;
}

export interface CarBuildOptions {
  bodyColor: number;
  wheelColor: number;
  wheelAccent: number;
  wingColor: number;
  helmetColor: number;
}

export const BODY_COLORS: { id: BodyColorId; name: string; hex: number; unlockScore: number }[] = [
  { id: "white", name: "Arctic White", hex: 0xeeeff2, unlockScore: 0 },
  { id: "ferrariRed", name: "Ferrari Red", hex: 0xdc0000, unlockScore: 500 },
  { id: "mclarenPapaya", name: "McLaren Papaya", hex: 0xff8700, unlockScore: 3000 },
  { id: "mercedesSilver", name: "Mercedes Silver", hex: 0xc0c8d0, unlockScore: 15000 },
  { id: "redBullNavy", name: "Red Bull Navy", hex: 0x1e3a5f, unlockScore: 50000 },
  { id: "astonGreen", name: "Aston Martin Green", hex: 0x008f6b, unlockScore: 50000 },
  { id: "alpineBlue", name: "Alpine Blue", hex: 0x0090ff, unlockScore: 50000 },
  { id: "haasBlackGold", name: "Haas Black/Gold", hex: 0x1a1a1e, unlockScore: 50000 },
];

export const WHEEL_STYLES: { id: WheelStyleId; name: string; color: number; accent: number; unlockScore: number }[] = [
  { id: "standard", name: "Standard Black", color: 0x1a1a1e, accent: 0x333338, unlockScore: 0 },
  { id: "gold", name: "Gold Rims", color: 0x1a1a1e, accent: 0xd4a843, unlockScore: 2000 },
  { id: "chrome", name: "Chrome Rims", color: 0x1a1a1e, accent: 0xd1d5db, unlockScore: 7500 },
  { id: "redStriped", name: "Red Striped", color: 0x1a1a1e, accent: 0xdc0000, unlockScore: 30000 },
];

export const WING_COLORS: { id: WingColorId; name: string; hex: number | null; unlockScore: number }[] = [
  { id: "matchBody", name: "Match Body", hex: null, unlockScore: 0 },
  { id: "carbonBlack", name: "Carbon Black", hex: 0x1a1a1e, unlockScore: 7500 },
  { id: "neonPink", name: "Neon Pink", hex: 0xe10600, unlockScore: 15000 },
  { id: "neonBlue", name: "Neon Blue", hex: 0x0090ff, unlockScore: 30000 },
];

/*
 * Real F1 proportions — kept LOW PROFILE so fitCarToDimensions doesn't crush it.
 * The rear wing is the tallest point; keep total height modest so scale factor
 * is dominated by length (3.5 game units), making the car fill the box.
 *
 * Raw build size target: ~4.0w x 1.1h x 5.6l  →  fits into 1.8w x 0.8h x 3.5l
 * The limiting axis will be length (5.6 → 3.5, scale ~0.625).
 * Width: 4.0 * 0.625 = 2.5 > 1.8 → width limits instead → scale ~0.45
 * Height: 1.1 * 0.45 = 0.495 < 0.8 ✓ → headroom, car won't be squished
 *
 * Actual: keep raw width ≤ 3.8 so width doesn't over-constrain.
 */

const CL = 5.6;
const CW = 2.0;

const rubberMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.92, metalness: 0.0 });

function bodyMat(color: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, metalness: 0.4, roughness: 0.35 });
}
function carbonMat(): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color: 0x1c1c22, metalness: 0.15, roughness: 0.85 });
}
function metalMat(color: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, metalness: 0.85, roughness: 0.15 });
}

// ── Thick Pirelli-style wheel with proper proportions ──
function makeWheel(
  radius: number, width: number,
  tireColor: number, rimColor: number,
): THREE.Group {
  const g = new THREE.Group();

  // Thick rubber tire — CylinderGeometry for solid chunky look
  const tireH = width;
  const tire = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, tireH, 24),
    rubberMat.clone(),
  );
  tire.material.color.setHex(tireColor);
  tire.rotation.x = Math.PI / 2;
  g.add(tire);

  // Sidewall taper — slightly smaller inner ring for sidewall profile
  const innerR = radius * 0.78;
  const sidewallOut = new THREE.Mesh(
    new THREE.RingGeometry(innerR, radius, 24),
    rubberMat.clone(),
  );
  sidewallOut.position.z = tireH / 2 + 0.001;
  g.add(sidewallOut);

  const sidewallIn = sidewallOut.clone();
  sidewallIn.position.z = -tireH / 2 - 0.001;
  sidewallIn.rotation.y = Math.PI;
  g.add(sidewallIn);

  // Wheel cover / rim disc (F1 2024 style enclosed wheel cover)
  const rimDisc = new THREE.Mesh(
    new THREE.CylinderGeometry(innerR, innerR, width * 0.85, 20),
    metalMat(rimColor),
  );
  rimDisc.rotation.x = Math.PI / 2;
  g.add(rimDisc);

  // Hub nut (center lock)
  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.14, radius * 0.14, width * 0.92, 6),
    metalMat(0x999999),
  );
  hub.rotation.x = Math.PI / 2;
  g.add(hub);

  // Brake disc glow
  const brake = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.5, radius * 0.5, width * 0.1, 16),
    new THREE.MeshStandardMaterial({ color: 0x332222, emissive: 0x441100, emissiveIntensity: 0.5 }),
  );
  brake.rotation.x = Math.PI / 2;
  g.add(brake);

  return g;
}

// ── Driver helmet ──
function makeHelmet(color: number): THREE.Group {
  const g = new THREE.Group();
  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(0.14, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.65),
    new THREE.MeshStandardMaterial({ color, metalness: 0.5, roughness: 0.3 }),
  );
  g.add(shell);

  const visor = new THREE.Mesh(
    new THREE.SphereGeometry(0.145, 12, 4, -Math.PI * 0.4, Math.PI * 0.8, Math.PI * 0.15, Math.PI * 0.2),
    new THREE.MeshStandardMaterial({ color: 0x111122, metalness: 0.7, roughness: 0.1 }),
  );
  g.add(visor);
  return g;
}

interface Variant {
  noseTaper: number;
  noseDropY: number;
  bodyWidth: number;
  sidePodScale: number;
  sidePodCut: number;
  frontWingSpan: number;
  frontWingElements: number;
  rearWingWidth: number;
  rearWingHeight: number;
  rearWingChord: number;
  engineCoverSlim: number;
  sharkFin: boolean;
  tWing: boolean;
  wheelSizeMul: number;
}

const VARIANTS: Record<CarId, Variant> = {
  starter: {
    noseTaper: 0.5, noseDropY: 0.3, bodyWidth: 0.32,
    sidePodScale: 1.0, sidePodCut: 0.3,
    frontWingSpan: 0.95, frontWingElements: 2,
    rearWingWidth: 0.72, rearWingHeight: 1.0, rearWingChord: 1.0,
    engineCoverSlim: 0.5, sharkFin: false, tWing: false, wheelSizeMul: 1.0,
  },
  aeroBeast: {
    noseTaper: 0.4, noseDropY: 0.4, bodyWidth: 0.30,
    sidePodScale: 1.15, sidePodCut: 0.6,
    frontWingSpan: 1.0, frontWingElements: 3,
    rearWingWidth: 0.80, rearWingHeight: 1.15, rearWingChord: 1.2,
    engineCoverSlim: 0.6, sharkFin: true, tWing: false, wheelSizeMul: 1.0,
  },
  speedDemon: {
    noseTaper: 0.8, noseDropY: 0.2, bodyWidth: 0.28,
    sidePodScale: 0.75, sidePodCut: 0.5,
    frontWingSpan: 0.85, frontWingElements: 2,
    rearWingWidth: 0.65, rearWingHeight: 0.88, rearWingChord: 0.85,
    engineCoverSlim: 0.7, sharkFin: false, tWing: false, wheelSizeMul: 0.95,
  },
  tank: {
    noseTaper: 0.3, noseDropY: 0.25, bodyWidth: 0.36,
    sidePodScale: 1.2, sidePodCut: 0.15,
    frontWingSpan: 0.92, frontWingElements: 2,
    rearWingWidth: 0.76, rearWingHeight: 1.05, rearWingChord: 1.15,
    engineCoverSlim: 0.35, sharkFin: false, tWing: false, wheelSizeMul: 1.1,
  },
  phantom: {
    noseTaper: 0.7, noseDropY: 0.35, bodyWidth: 0.27,
    sidePodScale: 0.8, sidePodCut: 0.7,
    frontWingSpan: 0.88, frontWingElements: 2,
    rearWingWidth: 0.68, rearWingHeight: 1.0, rearWingChord: 0.9,
    engineCoverSlim: 0.65, sharkFin: true, tWing: true, wheelSizeMul: 0.95,
  },
};

function buildF1(carId: CarId, o: CarBuildOptions): THREE.Group {
  const g = new THREE.Group();
  const v = VARIANTS[carId];
  const bm = bodyMat(o.bodyColor);
  const wm = bodyMat(o.wingColor);
  const cm = carbonMat();

  const halfL = CL / 2;
  const floorY = 0.05;
  const bodyBottom = floorY + 0.02;
  const bodyH = 0.30;
  const bodyTop = bodyBottom + bodyH;
  const bodyW = CW * v.bodyWidth;

  // Wheels: 720mm diameter real = 0.36 radius at this scale
  const wheelR = 0.36 * v.wheelSizeMul;
  const fTireW = 0.30;  // front tire 305mm → thick visible
  const rTireW = 0.40;  // rear tire 405mm → chunky
  const wheelBase = CL * 0.64;
  const fAxleZ = wheelBase * 0.42;
  const rAxleZ = -wheelBase * 0.58;
  const trackF = CW * 0.82;
  const trackR = CW * 0.78;

  // ━━ MONOCOQUE ━━
  const monoL = CL * 0.30;
  const mono = new THREE.Mesh(new THREE.BoxGeometry(bodyW, bodyH, monoL), bm);
  mono.position.set(0, bodyBottom + bodyH / 2, CL * 0.06);
  g.add(mono);

  // ━━ NOSE ━━
  const noseStartZ = CL * 0.06 + monoL / 2;
  const noseEndZ = halfL - 0.15;
  const noseL = noseEndZ - noseStartZ;
  const noseTipW = bodyW * (1 - v.noseTaper * 0.7);
  const noseTipH = bodyH * (0.5 - v.noseDropY * 0.3);
  const noseY = bodyBottom + noseTipH / 2 + bodyH * (0.1 - v.noseDropY * 0.15);

  const noseMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, noseL), bm.clone());
  noseMesh.scale.set((bodyW + noseTipW) / 2, (bodyH + noseTipH) / 2, 1);
  noseMesh.position.set(0, (bodyBottom + bodyH / 2 + noseY) / 2, noseStartZ + noseL / 2);
  g.add(noseMesh);

  const tipLen = 0.22;
  const tipCone = new THREE.Mesh(new THREE.ConeGeometry(noseTipW * 0.4, tipLen, 6), bm.clone());
  tipCone.rotation.x = -Math.PI / 2;
  tipCone.position.set(0, noseY, noseEndZ + tipLen / 2);
  g.add(tipCone);

  // ━━ COCKPIT ━━
  const cpZ = CL * 0.12;
  const cpL = CL * 0.09;
  const cpW = bodyW * 0.72;
  const cockpit = new THREE.Mesh(
    new THREE.BoxGeometry(cpW, bodyH * 0.4, cpL),
    new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.95, metalness: 0.05 }),
  );
  cockpit.position.set(0, bodyTop - bodyH * 0.05, cpZ);
  g.add(cockpit);

  // ━━ DRIVER HELMET ━━
  const helmet = makeHelmet(o.helmetColor);
  helmet.position.set(0, bodyTop + 0.06, cpZ + cpL * 0.15);
  helmet.rotation.x = -0.1;
  g.add(helmet);

  // ━━ HALO ━━
  const haloR = cpW * 0.5;
  const haloY = bodyTop + 0.03;
  const haloMat = metalMat(0x505055);

  const haloPillar = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, cpL * 0.6), haloMat);
  haloPillar.position.set(0, haloY + haloR * 0.8, cpZ + cpL * 0.45);
  haloPillar.rotation.x = 0.35;
  g.add(haloPillar);

  const haloRing = new THREE.Mesh(
    new THREE.TorusGeometry(haloR, 0.025, 6, 16, Math.PI * 1.1),
    haloMat.clone(),
  );
  haloRing.rotation.z = Math.PI;
  haloRing.position.set(0, haloY + haloR, cpZ);
  g.add(haloRing);

  for (const s of [-1, 1]) {
    const hp = new THREE.Mesh(new THREE.BoxGeometry(0.03, haloR * 0.8, 0.03), haloMat.clone());
    hp.position.set(s * haloR * 0.9, haloY + haloR * 0.4, cpZ - cpL * 0.15);
    g.add(hp);
  }

  // ━━ AIRBOX ━━
  const airboxW = bodyW * 0.30;
  const airboxH = 0.20;
  const airbox = new THREE.Mesh(new THREE.BoxGeometry(airboxW, airboxH, 0.14), bm.clone());
  airbox.position.set(0, bodyTop + airboxH / 2, cpZ - cpL * 0.5);
  g.add(airbox);

  // ━━ ENGINE COVER ━━
  const engStartZ = CL * 0.06 - monoL / 2;
  const engEndZ = rAxleZ + 0.12;
  const engL = engStartZ - engEndZ;
  const engTipW = bodyW * (1 - v.engineCoverSlim * 0.6);
  const engH = bodyH * 0.72;
  const eng = new THREE.Mesh(
    new THREE.BoxGeometry((bodyW + engTipW) / 2, engH, engL),
    bm.clone(),
  );
  eng.position.set(0, bodyBottom + engH / 2 + bodyH * 0.05, (engStartZ + engEndZ) / 2);
  g.add(eng);

  // ━━ SHARK FIN ━━
  if (v.sharkFin) {
    const finH = bodyH * 0.55;
    const finL = engL * 0.65;
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.012, finH, finL), bm.clone());
    fin.position.set(0, bodyTop + finH / 2, (engStartZ + engEndZ) / 2 + engL * 0.1);
    g.add(fin);
  }

  // ━━ T-WING ━━
  if (v.tWing) {
    const twW = bodyW * 1.2;
    const twY = bodyTop + bodyH * 0.6;
    const tw = new THREE.Mesh(new THREE.BoxGeometry(twW, 0.012, 0.06), wm.clone());
    tw.position.set(0, twY, engEndZ + engL * 0.12);
    g.add(tw);
  }

  // ━━ SIDEPODS ━━
  const podL = CL * 0.28 * v.sidePodScale;
  const podH = bodyH * (0.85 - v.sidePodCut * 0.3);
  const podW = (CW * 0.5 - bodyW / 2) * 0.65 * v.sidePodScale;
  for (const s of [-1, 1]) {
    const pod = new THREE.Mesh(new THREE.BoxGeometry(podW, podH, podL), bm.clone());
    pod.position.set(s * (bodyW / 2 + podW / 2), bodyBottom + podH / 2 + bodyH * 0.08, -CL * 0.02);
    g.add(pod);

    const inletH = podH * 0.45;
    const inletW = podW * 0.7;
    const inlet = new THREE.Mesh(
      new THREE.BoxGeometry(inletW, inletH, 0.03),
      new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.95 }),
    );
    inlet.position.set(s * (bodyW / 2 + podW / 2), bodyBottom + podH * 0.6, -CL * 0.02 + podL / 2);
    g.add(inlet);

    if (v.sidePodCut > 0.3) {
      const cutH = podH * v.sidePodCut * 0.4;
      const cutMesh = new THREE.Mesh(new THREE.BoxGeometry(podW * 0.9, cutH, podL * 0.7), cm.clone());
      cutMesh.position.set(s * (bodyW / 2 + podW / 2), bodyBottom + cutH / 2, -CL * 0.04);
      g.add(cutMesh);
    }

    const bbH = bodyH * 0.4;
    const bbL = CL * 0.06;
    const bb = new THREE.Mesh(new THREE.BoxGeometry(0.015, bbH, bbL), bm.clone());
    bb.position.set(s * (bodyW / 2 + 0.06), bodyBottom + bbH / 2 + 0.02, fAxleZ - CL * 0.08);
    bb.rotation.y = s * 0.15;
    g.add(bb);
  }

  // ━━ FRONT WING — prominent ━━
  const fwSpan = CW * v.frontWingSpan;
  const fwZ = halfL - 0.06;
  const fwY = floorY + 0.015;

  for (let i = 0; i < v.frontWingElements; i++) {
    const flapChord = 0.12 - i * 0.02;
    const flapW = fwSpan * (1 - i * 0.05);
    const flap = new THREE.Mesh(new THREE.BoxGeometry(flapW, 0.015, flapChord), wm.clone());
    flap.position.set(0, fwY + i * 0.028, fwZ - i * 0.045);
    flap.rotation.x = i * 0.1;
    g.add(flap);
  }

  for (const s of [-1, 1]) {
    const epH = 0.10 + v.frontWingElements * 0.025;
    const epL = 0.18 + v.frontWingElements * 0.035;
    const ep = new THREE.Mesh(new THREE.BoxGeometry(0.015, epH, epL), wm.clone());
    ep.position.set(s * fwSpan / 2, fwY + epH / 2 - 0.02, fwZ - epL / 2 + 0.08);
    g.add(ep);
  }

  for (const s of [-1, 1]) {
    const stay = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, noseL * 0.3), bm.clone());
    stay.position.set(s * noseTipW * 0.25, fwY + 0.01, noseStartZ + noseL * 0.6);
    g.add(stay);
  }

  // ━━ REAR WING — BIG and PROMINENT ━━
  const rwSpan = CW * v.rearWingWidth;
  const rwZ = -halfL + 0.25;
  // Taller rear wing — sits well above the engine cover
  const rwBaseY = bodyTop + 0.05;
  const rwTopY = rwBaseY + 0.42 * v.rearWingHeight;
  const rwChord = 0.22 * v.rearWingChord;

  // Main plane — thick and visible
  const rwMain = new THREE.Mesh(new THREE.BoxGeometry(rwSpan, 0.025, rwChord), wm);
  rwMain.position.set(0, rwTopY, rwZ);
  g.add(rwMain);

  // DRS flap
  const rwFlap = new THREE.Mesh(new THREE.BoxGeometry(rwSpan * 0.90, 0.018, rwChord * 0.55), wm.clone());
  rwFlap.position.set(0, rwTopY + 0.04, rwZ + rwChord * 0.12);
  rwFlap.rotation.x = -0.2;
  g.add(rwFlap);

  // Swan-neck supports (tall pillars)
  for (const s of [-1, 1]) {
    const pilH = rwTopY - rwBaseY;
    const pil = new THREE.Mesh(new THREE.BoxGeometry(0.022, pilH, 0.03), wm.clone());
    pil.position.set(s * rwSpan * 0.32, rwBaseY + pilH / 2, rwZ + rwChord * 0.1);
    pil.rotation.z = s * 0.04;
    g.add(pil);
  }

  // End plates — large and visible
  const rwEpH = 0.22 * v.rearWingHeight;
  for (const s of [-1, 1]) {
    const rwEp = new THREE.Mesh(new THREE.BoxGeometry(0.015, rwEpH, rwChord * 1.5), wm.clone());
    rwEp.position.set(s * rwSpan / 2, rwTopY - rwEpH * 0.3, rwZ);
    g.add(rwEp);
  }

  // Beam wing
  const bwY = rwBaseY + (rwTopY - rwBaseY) * 0.28;
  const bw = new THREE.Mesh(new THREE.BoxGeometry(rwSpan * 0.65, 0.012, rwChord * 0.5), wm.clone());
  bw.position.set(0, bwY, rwZ);
  g.add(bw);

  // ━━ DIFFUSER ━━
  const diffW = CW * 0.65;
  const diffH = bodyH * 0.30;
  const diffL = CL * 0.055;
  const diff = new THREE.Mesh(new THREE.BoxGeometry(diffW, diffH, diffL), cm.clone());
  diff.position.set(0, floorY + diffH / 2, rwZ + rwChord / 2 + diffL / 2 + 0.02);
  diff.rotation.x = 0.25;
  g.add(diff);

  // ━━ REAR CRASH STRUCTURE ━━
  const rearTaperW = bodyW * 0.35;
  const rearTaperH = bodyH * 0.4;
  const rearTaperL = CL * 0.07;
  const rearTaper = new THREE.Mesh(new THREE.BoxGeometry(rearTaperW, rearTaperH, rearTaperL), bm.clone());
  rearTaper.position.set(0, bodyBottom + rearTaperH / 2 + bodyH * 0.1, rAxleZ - rearTaperL * 0.3);
  g.add(rearTaper);

  // ━━ RAIN LIGHT ━━
  const rainLight = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.028, 0.02),
    new THREE.MeshStandardMaterial({ color: 0xcc0000, emissive: 0xff2200, emissiveIntensity: 0.8 }),
  );
  rainLight.position.set(0, rwBaseY - 0.02, rwZ + rwChord * 0.6);
  g.add(rainLight);

  // ━━ WHEELS — thick & chunky, rotated so axle runs left-right ━━
  const flW = makeWheel(wheelR, fTireW, o.wheelColor, o.wheelAccent);
  flW.rotation.y = Math.PI / 2;
  flW.position.set(-trackF / 2, wheelR, fAxleZ);
  g.add(flW);

  const frW = makeWheel(wheelR, fTireW, o.wheelColor, o.wheelAccent);
  frW.rotation.y = Math.PI / 2;
  frW.position.set(trackF / 2, wheelR, fAxleZ);
  g.add(frW);

  const rlW = makeWheel(wheelR, rTireW, o.wheelColor, o.wheelAccent);
  rlW.rotation.y = Math.PI / 2;
  rlW.position.set(-trackR / 2, wheelR, rAxleZ);
  g.add(rlW);

  const rrW = makeWheel(wheelR, rTireW, o.wheelColor, o.wheelAccent);
  rrW.rotation.y = Math.PI / 2;
  rrW.position.set(trackR / 2, wheelR, rAxleZ);
  g.add(rrW);

  // ━━ SUSPENSION ARMS ━━
  const suspMat = metalMat(0x444448);
  for (const s of [-1, 1]) {
    const fuArm = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, trackF / 2 - bodyW / 2, 4), suspMat);
    fuArm.rotation.z = Math.PI / 2;
    fuArm.position.set(s * (bodyW / 2 + (trackF / 2 - bodyW / 2) / 2), bodyBottom + bodyH * 0.6, fAxleZ + 0.04);
    g.add(fuArm);

    const flArm = fuArm.clone();
    flArm.position.y = bodyBottom + bodyH * 0.15;
    flArm.position.z = fAxleZ - 0.03;
    g.add(flArm);

    const ruArm = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, trackR / 2 - bodyW / 2 + 0.1, 4), suspMat.clone());
    ruArm.rotation.z = Math.PI / 2;
    ruArm.position.set(s * (bodyW / 2 + (trackR / 2 - bodyW / 2) / 2), bodyBottom + bodyH * 0.5, rAxleZ + 0.04);
    g.add(ruArm);

    const rlArm = ruArm.clone();
    rlArm.position.y = bodyBottom + bodyH * 0.1;
    rlArm.position.z = rAxleZ - 0.03;
    g.add(rlArm);
  }

  return g;
}

export const CAR_DEFINITIONS: CarDefinition[] = [
  { id: "starter", name: "Starter", unlockScore: 0 },
  { id: "aeroBeast", name: "Aero Beast", unlockScore: 1000 },
  { id: "speedDemon", name: "Speed Demon", unlockScore: 5000 },
  { id: "tank", name: "Tank", unlockScore: 10000 },
  { id: "phantom", name: "Phantom", unlockScore: 20000 },
];

function darken(hex: number, factor: number): number {
  const r = Math.round(((hex >> 16) & 0xff) * factor);
  const gr = Math.round(((hex >> 8) & 0xff) * factor);
  const b = Math.round((hex & 0xff) * factor);
  return (r << 16) | (gr << 8) | b;
}

export function buildProceduralCar(
  carId: CarId,
  bodyColorId: BodyColorId,
  wheelStyleId: WheelStyleId,
  wingColorId: WingColorId,
): THREE.Group {
  const bodyDef = BODY_COLORS.find(b => b.id === bodyColorId) ?? BODY_COLORS[0];
  const wheelDef = WHEEL_STYLES.find(w => w.id === wheelStyleId) ?? WHEEL_STYLES[0];
  const wingDef = WING_COLORS.find(w => w.id === wingColorId) ?? WING_COLORS[0];

  const group = buildF1(carId, {
    bodyColor: bodyDef.hex,
    wheelColor: wheelDef.color,
    wheelAccent: wheelDef.accent,
    wingColor: wingDef.hex ?? bodyDef.hex,
    helmetColor: darken(bodyDef.hex, 0.8),
  });

  group.traverse(obj => {
    if (obj instanceof THREE.Mesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  const dims = CONFIG.TAXI_DIMENSIONS;
  group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(group);
  const size = new THREE.Vector3();
  box.getSize(size);
  if (size.x > 1e-4 && size.y > 1e-4 && size.z > 1e-4) {
    const sc = Math.min(dims.width / size.x, dims.height / size.y, dims.length / size.z);
    group.scale.setScalar(sc);
    group.updateMatrixWorld(true);
    const fitted = new THREE.Box3().setFromObject(group);
    const center = new THREE.Vector3();
    fitted.getCenter(center);
    group.position.x -= center.x;
    group.position.z -= center.z;
    group.position.y -= fitted.min.y;
  }

  return group;
}

export function buildRandomTrafficCar(): THREE.Group {
  const carIds: CarId[] = ["starter", "aeroBeast", "speedDemon", "tank", "phantom"];
  const carId = carIds[Math.floor(Math.random() * carIds.length)];
  const bodyColors: BodyColorId[] = ["white", "ferrariRed", "mclarenPapaya", "mercedesSilver", "redBullNavy", "astonGreen", "alpineBlue", "haasBlackGold"];
  const bodyId = bodyColors[Math.floor(Math.random() * bodyColors.length)];
  const wheelStyles: WheelStyleId[] = ["standard", "gold", "chrome", "redStriped"];
  const wheelId = wheelStyles[Math.floor(Math.random() * wheelStyles.length)];
  const wingColors: WingColorId[] = ["matchBody", "carbonBlack", "neonPink", "neonBlue"];
  const wingId = wingColors[Math.floor(Math.random() * wingColors.length)];
  return buildProceduralCar(carId, bodyId, wheelId, wingId);
}
