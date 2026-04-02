import { CONFIG } from '../config';
import { SynthwaveMusic } from './SynthwaveMusic';

/**
 * Procedural Web Audio (Step 32): engine + wind loops, draft tone, one-shot slingshot / milestones / crash.
 * Step 33: music bus + chain-reactive synth bed (`SynthwaveMusic`).
 * Unlocks after first pointer (browser autoplay policy). No external files — skin `manifest.audio` can be wired later.
 */
export type GameAudioUpdate = {
  playing: boolean;
  scrollPerFrame: number;
  inDraft: boolean;
  draftMeter: number;
  burstActive: boolean;
  chain: number;
};

export class GameAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private sfxBus: GainNode | null = null;
  private musicBus: GainNode | null = null;
  private music: SynthwaveMusic | null = null;
  private loopsBuilt = false;
  private bgMusicEl: HTMLAudioElement | null = null;
  private bgMusicSource: MediaElementAudioSourceNode | null = null;
  private bgMusicGain: GainNode | null = null;
  private appFocused = true;

  private engineOsc: OscillatorNode | null = null;
  private engineOsc2: OscillatorNode | null = null;
  private engineOsc3: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private engineGain: GainNode | null = null;

  private turboSrc: AudioBufferSourceNode | null = null;
  private turboFilter: BiquadFilterNode | null = null;
  private turboGain: GainNode | null = null;

  private windSrc: AudioBufferSourceNode | null = null;
  private windFilter: BiquadFilterNode | null = null;
  private windGain: GainNode | null = null;

  private draftOsc: OscillatorNode | null = null;
  private draftGain: GainNode | null = null;

  /** Call once from a user gesture so AudioContext can start (autoplay unlock). */
  unlock(): void {
    if (!CONFIG.AUDIO_ENABLED && !CONFIG.AUDIO_BG_MUSIC_ENABLED) return;

    if (CONFIG.AUDIO_BG_MUSIC_ENABLED && !this.bgMusicEl) {
      const el = document.createElement('audio');
      el.src = `${import.meta.env.BASE_URL}${CONFIG.AUDIO_BG_MUSIC_FILE}`;
      el.loop = true;
      el.preload = 'auto';
      el.volume = CONFIG.AUDIO_BG_MUSIC_VOLUME;
      this.bgMusicEl = el;
    }

    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return;

    if (!this.ctx) {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = CONFIG.AUDIO_MASTER;
      this.master.connect(this.ctx.destination);
      this.sfxBus = this.ctx.createGain();
      this.sfxBus.gain.value = 1;
      this.sfxBus.connect(this.master);
      this.musicBus = this.ctx.createGain();
      this.musicBus.gain.value = CONFIG.AUDIO_MUSIC_ENABLED
        ? CONFIG.AUDIO_MUSIC_MASTER
        : 0;
      this.musicBus.connect(this.master);
      this.buildLoops();
    }

    if (this.ctx && this.master && this.bgMusicEl && !this.bgMusicSource) {
      this.bgMusicSource = this.ctx.createMediaElementSource(this.bgMusicEl);
      this.bgMusicGain = this.ctx.createGain();
      this.bgMusicGain.gain.value = CONFIG.AUDIO_BG_MUSIC_ENABLED
        ? CONFIG.AUDIO_BG_MUSIC_VOLUME
        : 0;
      this.bgMusicSource.connect(this.bgMusicGain);
      this.bgMusicGain.connect(this.master);
      // iOS Safari may ignore element.volume; keep media at full and control via GainNode.
      this.bgMusicEl.volume = 1;
      this.bgMusicEl.muted = false;
    }

    this.applyFocusState();
  }

  setAppFocused(focused: boolean): void {
    this.appFocused = focused;
    this.applyFocusState();
  }

  private applyFocusState(): void {
    if (this.ctx) {
      if (this.appFocused) {
        void this.ctx.resume();
      } else {
        void this.ctx.suspend();
      }
    }
    if (this.bgMusicEl) {
      if (this.appFocused && CONFIG.AUDIO_BG_MUSIC_ENABLED) {
        void this.bgMusicEl.play().catch(() => {});
      } else {
        this.bgMusicEl.pause();
      }
    }
  }

  private buildLoops(): void {
    if (!this.ctx || !this.sfxBus || !this.musicBus || this.loopsBuilt) return;
    this.loopsBuilt = true;
    const ctx = this.ctx;
    const out = this.sfxBus;

    // F1 engine: fundamental (sawtooth) + 2nd harmonic (square) + 3rd harmonic (sawtooth)
    const engineMixer = ctx.createGain();
    engineMixer.gain.value = 1;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = CONFIG.AUDIO_ENGINE_FILTER_HZ;
    this.engineFilter.Q.value = 2.5;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    engineMixer.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(out);

    this.engineOsc = ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = CONFIG.AUDIO_ENGINE_HZ_MIN;
    const osc1Gain = ctx.createGain();
    osc1Gain.gain.value = 0.5;
    this.engineOsc.connect(osc1Gain);
    osc1Gain.connect(engineMixer);

    this.engineOsc2 = ctx.createOscillator();
    this.engineOsc2.type = 'square';
    this.engineOsc2.frequency.value = CONFIG.AUDIO_ENGINE_HZ_MIN * 2;
    const osc2Gain = ctx.createGain();
    osc2Gain.gain.value = 0.3;
    this.engineOsc2.connect(osc2Gain);
    osc2Gain.connect(engineMixer);

    this.engineOsc3 = ctx.createOscillator();
    this.engineOsc3.type = 'sawtooth';
    this.engineOsc3.frequency.value = CONFIG.AUDIO_ENGINE_HZ_MIN * 3;
    const osc3Gain = ctx.createGain();
    osc3Gain.gain.value = 0.15;
    this.engineOsc3.connect(osc3Gain);
    osc3Gain.connect(engineMixer);

    // Turbo whine: bandpass-filtered noise that rises with speed
    const turboBuf = this.makeNoiseBuffer(2);
    this.turboSrc = ctx.createBufferSource();
    this.turboSrc.buffer = turboBuf;
    this.turboSrc.loop = true;
    this.turboFilter = ctx.createBiquadFilter();
    this.turboFilter.type = 'bandpass';
    this.turboFilter.frequency.value = 3000;
    this.turboFilter.Q.value = 5;
    this.turboGain = ctx.createGain();
    this.turboGain.gain.value = 0;
    this.turboSrc.connect(this.turboFilter);
    this.turboFilter.connect(this.turboGain);
    this.turboGain.connect(out);

    // Wind noise
    const noiseBuf = this.makeNoiseBuffer(CONFIG.AUDIO_WIND_NOISE_SEC);
    this.windSrc = ctx.createBufferSource();
    this.windSrc.buffer = noiseBuf;
    this.windSrc.loop = true;
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.value = CONFIG.AUDIO_WIND_FILTER_HZ;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    this.windSrc.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(out);

    this.draftOsc = ctx.createOscillator();
    this.draftOsc.type = 'sine';
    this.draftOsc.frequency.value = CONFIG.AUDIO_DRAFT_HZ;
    this.draftGain = ctx.createGain();
    this.draftGain.gain.value = 0;
    this.draftOsc.connect(this.draftGain);
    this.draftGain.connect(out);

    this.engineOsc.start(0);
    this.engineOsc2.start(0);
    this.engineOsc3.start(0);
    this.turboSrc.start(0);
    this.draftOsc.start(0);
    this.windSrc.start(0);

    this.music = new SynthwaveMusic(ctx, this.musicBus);
    this.music.build();
  }

  private makeNoiseBuffer(durationSec: number): AudioBuffer {
    const ctx = this.ctx!;
    const len = Math.max(1, Math.floor(ctx.sampleRate * durationSec));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  update(delta: number, u: GameAudioUpdate): void {
    if (this.bgMusicGain) {
      this.bgMusicGain.gain.value = CONFIG.AUDIO_BG_MUSIC_ENABLED
        ? CONFIG.AUDIO_BG_MUSIC_VOLUME
        : 0;
    }
    if (!CONFIG.AUDIO_ENABLED) {
      if (this.bgMusicEl) {
        if (!this.bgMusicSource) {
          this.bgMusicEl.volume = CONFIG.AUDIO_BG_MUSIC_VOLUME;
          this.bgMusicEl.muted = !CONFIG.AUDIO_BG_MUSIC_ENABLED;
        }
      }
      return;
    }
    if (this.bgMusicEl) {
      if (!this.bgMusicSource) {
        this.bgMusicEl.volume = CONFIG.AUDIO_BG_MUSIC_VOLUME;
        this.bgMusicEl.muted = !CONFIG.AUDIO_BG_MUSIC_ENABLED;
      }
    }
    this.music?.update(delta, u.playing, u.chain);
    if (this.musicBus) {
      this.musicBus.gain.value = CONFIG.AUDIO_MUSIC_ENABLED
        ? CONFIG.AUDIO_MUSIC_MASTER
        : 0;
    }

    if (
      !this.ctx ||
      !this.engineGain ||
      !this.windGain ||
      !this.draftGain ||
      !this.engineOsc
    ) {
      return;
    }

    const base = CONFIG.BASE_SCROLL_SPEED;
    const max = CONFIG.MAX_SCROLL_SPEED;
    const span = Math.max(1e-6, max - base);
    const t = Math.max(
      0,
      Math.min(1, (u.scrollPerFrame - base) / span)
    );

    const now = this.ctx.currentTime;
    if (CONFIG.AUDIO_ENGINE_ENABLED) {
      let hz =
        CONFIG.AUDIO_ENGINE_HZ_MIN +
        t * (CONFIG.AUDIO_ENGINE_HZ_MAX - CONFIG.AUDIO_ENGINE_HZ_MIN);
      if (u.burstActive) hz += CONFIG.AUDIO_ENGINE_BURST_HZ_ADD;
      this.engineOsc.frequency.setTargetAtTime(hz, now, 0.05);
      this.engineOsc2?.frequency.setTargetAtTime(hz * 2, now, 0.05);
      this.engineOsc3?.frequency.setTargetAtTime(hz * 3, now, 0.05);

      if (this.engineFilter) {
        const filterHz = 800 + t * (CONFIG.AUDIO_ENGINE_FILTER_HZ - 800);
        this.engineFilter.frequency.setTargetAtTime(filterHz, now, 0.08);
      }
      if (this.turboFilter && this.turboGain) {
        const turboHz = 2000 + t * 4000;
        this.turboFilter.frequency.setTargetAtTime(turboHz, now, 0.1);
        const targetTurbo = u.playing ? 0.04 + t * 0.08 : 0;
        this.turboGain.gain.value += (targetTurbo - this.turboGain.gain.value) * Math.min(1, 6 * delta);
      }
    }

    const targetEngine =
      u.playing && CONFIG.AUDIO_ENGINE_ENABLED
        ? CONFIG.AUDIO_ENGINE_GAIN *
          (CONFIG.AUDIO_ENGINE_GAIN_MIN_MIX +
            (1 - CONFIG.AUDIO_ENGINE_GAIN_MIN_MIX) * t) *
          (u.burstActive ? CONFIG.AUDIO_ENGINE_BURST_GAIN_MUL : 1)
        : 0;
    const targetWind =
      u.playing
        ? CONFIG.AUDIO_WIND_GAIN *
          (CONFIG.AUDIO_WIND_MIN_MIX +
            (1 - CONFIG.AUDIO_WIND_MIN_MIX) * t)
        : 0;
    const targetDraft =
      u.playing && u.inDraft
        ? CONFIG.AUDIO_DRAFT_GAIN *
          (CONFIG.AUDIO_DRAFT_MIN_MIX +
            (1 - CONFIG.AUDIO_DRAFT_MIN_MIX) * u.draftMeter)
        : 0;

    const k = Math.min(1, CONFIG.AUDIO_LOOP_SMOOTH * delta);
    this.engineGain.gain.value += (targetEngine - this.engineGain.gain.value) * k;
    this.windGain.gain.value += (targetWind - this.windGain.gain.value) * k;
    this.draftGain.gain.value += (targetDraft - this.draftGain.gain.value) * k;
  }

  playSlingshot(): void {
    if (!CONFIG.AUDIO_ENABLED) return;
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    const dur = CONFIG.AUDIO_SLINGSHOT_DURATION;
    const n = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) {
      const fade = 1 - i / n;
      data[i] = (Math.random() * 2 - 1) * fade;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 1.2;
    bp.frequency.setValueAtTime(CONFIG.AUDIO_SLINGSHOT_BP_HZ_START, t0);
    bp.frequency.exponentialRampToValueAtTime(
      CONFIG.AUDIO_SLINGSHOT_BP_HZ_END,
      t0 + dur
    );
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(CONFIG.AUDIO_SLINGSHOT_GAIN, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bp);
    bp.connect(g);
    g.connect(this.sfxBus);
    src.start(t0);
    src.stop(t0 + dur + 0.04);
  }

  playMilestone(chain: number): void {
    if (!CONFIG.AUDIO_ENABLED) return;
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const peak = CONFIG.AUDIO_MILESTONE_GAIN;

    const blip = (freq: number, start: number, len: number): void => {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq;
      const og = ctx.createGain();
      const t = ctx.currentTime + start;
      og.gain.setValueAtTime(0, t);
      og.gain.linearRampToValueAtTime(peak, t + 0.012);
      og.gain.exponentialRampToValueAtTime(0.0001, t + len);
      o.connect(og);
      og.connect(this.sfxBus!);
      o.start(t);
      o.stop(t + len + 0.06);
    };

    if (chain === 5) {
      blip(523.25, 0, 0.2);
    } else if (chain === 10) {
      blip(659.25, 0, 0.22);
      blip(987.77, 0, 0.22);
    } else if (chain === 15) {
      blip(523.25, 0, 0.09);
      blip(659.25, 0.08, 0.09);
      blip(783.99, 0.16, 0.09);
      blip(1046.5, 0.24, 0.14);
    } else if (chain >= 20) {
      blip(587.33, 0, 0.28);
      blip(739.99, 0, 0.28);
      blip(880, 0, 0.28);
      blip(1174.66, 0, 0.3);
    }
  }

  /** Tire skid/slip sound when player switches lanes. */
  playLaneSwitch(): void {
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const bus = this.sfxBus;
    const t0 = ctx.currentTime;

    // Layer 1: main rubber skid (longer bandpassed noise with pitch sweep)
    const skidDur = 0.22;
    const skidN = Math.floor(ctx.sampleRate * skidDur);
    const skidBuf = ctx.createBuffer(1, skidN, ctx.sampleRate);
    const skidData = skidBuf.getChannelData(0);
    for (let i = 0; i < skidN; i++) {
      const env = Math.min(1, i / (skidN * 0.05)) * ((1 - i / skidN) ** 0.8);
      skidData[i] = (Math.random() * 2 - 1) * env;
    }
    const skidSrc = ctx.createBufferSource();
    skidSrc.buffer = skidBuf;
    const skidBp = ctx.createBiquadFilter();
    skidBp.type = 'bandpass';
    skidBp.frequency.setValueAtTime(3200, t0);
    skidBp.frequency.exponentialRampToValueAtTime(1800, t0 + skidDur);
    skidBp.Q.value = 3.0;
    const skidG = ctx.createGain();
    skidG.gain.setValueAtTime(0.28, t0);
    skidG.gain.exponentialRampToValueAtTime(0.0001, t0 + skidDur);
    skidSrc.connect(skidBp); skidBp.connect(skidG); skidG.connect(bus);
    skidSrc.start(t0); skidSrc.stop(t0 + skidDur + 0.02);

    // Layer 2: high-pitched screech oscillator (rubber squeal)
    const sqDur = 0.15;
    const sqOsc = ctx.createOscillator();
    sqOsc.type = 'sawtooth';
    sqOsc.frequency.setValueAtTime(1400 + Math.random() * 400, t0);
    sqOsc.frequency.exponentialRampToValueAtTime(600, t0 + sqDur);
    const sqFilt = ctx.createBiquadFilter();
    sqFilt.type = 'bandpass'; sqFilt.frequency.value = 1200; sqFilt.Q.value = 4;
    const sqG = ctx.createGain();
    sqG.gain.setValueAtTime(0.1, t0);
    sqG.gain.exponentialRampToValueAtTime(0.0001, t0 + sqDur);
    sqOsc.connect(sqFilt); sqFilt.connect(sqG); sqG.connect(bus);
    sqOsc.start(t0); sqOsc.stop(t0 + sqDur + 0.02);

    // Layer 3: weight transfer thud (low-freq punch)
    const thudDur = 0.1;
    const thudOsc = ctx.createOscillator();
    thudOsc.type = 'sine';
    thudOsc.frequency.setValueAtTime(140, t0);
    thudOsc.frequency.exponentialRampToValueAtTime(50, t0 + thudDur);
    const tg = ctx.createGain();
    tg.gain.setValueAtTime(0.2, t0);
    tg.gain.exponentialRampToValueAtTime(0.0001, t0 + thudDur);
    thudOsc.connect(tg); tg.connect(bus);
    thudOsc.start(t0); thudOsc.stop(t0 + thudDur + 0.02);
  }

  playCrash(): void {
    if (!this.ctx || !this.sfxBus) {
      this.unlock();
      if (!this.ctx || !this.sfxBus) return;
    }
    const ctx = this.ctx;
    const bus = this.sfxBus;
    const t0 = ctx.currentTime;

    // Layer 1: heavy sub-bass impact — two stacked sine punches
    const boom1 = ctx.createOscillator();
    boom1.type = 'sine';
    boom1.frequency.setValueAtTime(100, t0);
    boom1.frequency.exponentialRampToValueAtTime(20, t0 + 0.5);
    const bg1 = ctx.createGain();
    bg1.gain.setValueAtTime(0.65, t0);
    bg1.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.5);
    boom1.connect(bg1); bg1.connect(bus);
    boom1.start(t0); boom1.stop(t0 + 0.52);

    const boom2 = ctx.createOscillator();
    boom2.type = 'triangle';
    boom2.frequency.setValueAtTime(55, t0 + 0.02);
    boom2.frequency.exponentialRampToValueAtTime(18, t0 + 0.4);
    const bg2 = ctx.createGain();
    bg2.gain.setValueAtTime(0, t0);
    bg2.gain.linearRampToValueAtTime(0.45, t0 + 0.025);
    bg2.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.4);
    boom2.connect(bg2); bg2.connect(bus);
    boom2.start(t0); boom2.stop(t0 + 0.42);

    // Layer 2: metallic crunch — resonant bandpassed noise
    const crDur = 0.35;
    const crN = Math.floor(ctx.sampleRate * crDur);
    const crBuf = ctx.createBuffer(1, crN, ctx.sampleRate);
    const crD = crBuf.getChannelData(0);
    for (let i = 0; i < crN; i++) {
      const env = (1 - i / crN) ** 0.5;
      crD[i] = (Math.random() * 2 - 1) * env;
    }
    const crSrc = ctx.createBufferSource();
    crSrc.buffer = crBuf;
    const crBp = ctx.createBiquadFilter();
    crBp.type = 'bandpass';
    crBp.frequency.setValueAtTime(2800, t0);
    crBp.frequency.exponentialRampToValueAtTime(600, t0 + crDur);
    crBp.Q.value = 2.2;
    const crG = ctx.createGain();
    crG.gain.setValueAtTime(0.55, t0);
    crG.gain.exponentialRampToValueAtTime(0.0001, t0 + crDur);
    crSrc.connect(crBp); crBp.connect(crG); crG.connect(bus);
    crSrc.start(t0); crSrc.stop(t0 + crDur + 0.02);

    // Layer 3: glass/debris — staggered high-freq particles
    const glDur = 0.6;
    const glN = Math.floor(ctx.sampleRate * glDur);
    const glBuf = ctx.createBuffer(1, glN, ctx.sampleRate);
    const glD = glBuf.getChannelData(0);
    for (let i = 0; i < glN; i++) {
      const env = (1 - i / glN) ** 1.4;
      const crackle = Math.random() > 0.65 ? 1 : 0.2;
      glD[i] = (Math.random() * 2 - 1) * env * crackle;
    }
    const glSrc = ctx.createBufferSource();
    glSrc.buffer = glBuf;
    const glHp = ctx.createBiquadFilter();
    glHp.type = 'highpass'; glHp.frequency.value = 4000; glHp.Q.value = 0.6;
    const glG = ctx.createGain();
    glG.gain.setValueAtTime(0, t0);
    glG.gain.linearRampToValueAtTime(0.32, t0 + 0.03);
    glG.gain.exponentialRampToValueAtTime(0.0001, t0 + glDur);
    glSrc.connect(glHp); glHp.connect(glG); glG.connect(bus);
    glSrc.start(t0); glSrc.stop(t0 + glDur + 0.02);

    // Layer 4: sharp transient snap
    const snDur = 0.04;
    const snN = Math.floor(ctx.sampleRate * snDur);
    const snBuf = ctx.createBuffer(1, snN, ctx.sampleRate);
    const snD = snBuf.getChannelData(0);
    for (let i = 0; i < snN; i++) {
      const env = (1 - i / snN) ** 4;
      snD[i] = Math.sign(Math.random() - 0.5) * env;
    }
    const snSrc = ctx.createBufferSource();
    snSrc.buffer = snBuf;
    const snG = ctx.createGain();
    snG.gain.setValueAtTime(0.7, t0);
    snG.gain.exponentialRampToValueAtTime(0.0001, t0 + snDur);
    snSrc.connect(snG); snG.connect(bus);
    snSrc.start(t0); snSrc.stop(t0 + snDur + 0.02);

    // Layer 5: long tire screech with wobble
    const scDur = 0.55;
    const scOsc = ctx.createOscillator();
    scOsc.type = 'sawtooth';
    scOsc.frequency.setValueAtTime(1100, t0);
    scOsc.frequency.exponentialRampToValueAtTime(350, t0 + scDur);
    const scFilt = ctx.createBiquadFilter();
    scFilt.type = 'bandpass'; scFilt.frequency.value = 800; scFilt.Q.value = 4;
    const scG = ctx.createGain();
    scG.gain.setValueAtTime(0.2, t0);
    scG.gain.exponentialRampToValueAtTime(0.0001, t0 + scDur);
    scOsc.connect(scFilt); scFilt.connect(scG); scG.connect(bus);
    scOsc.start(t0); scOsc.stop(t0 + scDur + 0.02);

    // Layer 6: metal scraping (delayed, gives "two car" feel)
    const spDelay = 0.08;
    const spDur = 0.4;
    const spN = Math.floor(ctx.sampleRate * spDur);
    const spBuf = ctx.createBuffer(1, spN, ctx.sampleRate);
    const spD = spBuf.getChannelData(0);
    for (let i = 0; i < spN; i++) {
      const env = (1 - i / spN) ** 0.8;
      const ring = Math.sin(i / ctx.sampleRate * Math.PI * 2 * 1800);
      spD[i] = (Math.random() * 2 - 1) * env * 0.5 + ring * env * 0.5;
    }
    const spSrc = ctx.createBufferSource();
    spSrc.buffer = spBuf;
    const spBp = ctx.createBiquadFilter();
    spBp.type = 'bandpass'; spBp.frequency.value = 1600; spBp.Q.value = 3;
    const spG = ctx.createGain();
    spG.gain.setValueAtTime(0, t0);
    spG.gain.linearRampToValueAtTime(0.25, t0 + spDelay);
    spG.gain.exponentialRampToValueAtTime(0.0001, t0 + spDelay + spDur);
    spSrc.connect(spBp); spBp.connect(spG); spG.connect(bus);
    spSrc.start(t0); spSrc.stop(t0 + spDelay + spDur + 0.02);
  }
}
