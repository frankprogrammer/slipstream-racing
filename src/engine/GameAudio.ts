import { CONFIG } from '../config';
import { RacingMusic } from './RacingMusic';

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
  private music: RacingMusic | null = null;
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

  private trafficVoices: {
    osc1: OscillatorNode;
    osc2: OscillatorNode;
    osc3: OscillatorNode;
    filter: BiquadFilterNode;
    gain: GainNode;
    panner: StereoPannerNode;
    baseHz: number;
  }[] = [];

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

  private muted = false;
  private musicMuted = false;

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.master) {
      this.master.gain.value = muted ? 0 : CONFIG.AUDIO_MASTER;
    }
    if (this.bgMusicEl) {
      this.bgMusicEl.muted = muted;
    }
  }

  isMuted(): boolean {
    return this.muted;
  }

  setMusicMuted(muted: boolean): void {
    this.musicMuted = muted;
    if (this.musicBus) {
      this.musicBus.gain.value = muted ? 0 : CONFIG.AUDIO_MUSIC_MASTER;
    }
  }

  isMusicMuted(): boolean {
    return this.musicMuted;
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

    if (CONFIG.AUDIO_TRAFFIC_ENABLED) {
      for (let i = 0; i < CONFIG.AUDIO_TRAFFIC_VOICES; i++) {
        const hz = CONFIG.AUDIO_TRAFFIC_HZ_BASE +
          (Math.random() * 2 - 1) * CONFIG.AUDIO_TRAFFIC_HZ_VARIATION;

        const mixer = ctx.createGain();
        mixer.gain.value = 1;

        const osc1 = ctx.createOscillator();
        osc1.type = 'sawtooth';
        osc1.frequency.value = hz;
        const g1 = ctx.createGain();
        g1.gain.value = 0.75;
        osc1.connect(g1);
        g1.connect(mixer);

        const osc2 = ctx.createOscillator();
        osc2.type = 'square';
        osc2.frequency.value = hz * 2;
        const g2 = ctx.createGain();
        g2.gain.value = 0.45;
        osc2.connect(g2);
        g2.connect(mixer);

        const osc3 = ctx.createOscillator();
        osc3.type = 'sawtooth';
        osc3.frequency.value = hz * 3;
        const g3 = ctx.createGain();
        g3.gain.value = 0.2;
        osc3.connect(g3);
        g3.connect(mixer);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = CONFIG.AUDIO_TRAFFIC_FILTER_HZ;
        filter.Q.value = 1.5;

        const gain = ctx.createGain();
        gain.gain.value = 0;

        const panner = new StereoPannerNode(ctx);

        mixer.connect(filter);
        filter.connect(gain);
        gain.connect(panner);
        panner.connect(out);

        osc1.start(0);
        osc2.start(0);
        osc3.start(0);

        this.trafficVoices.push({ osc1, osc2, osc3, filter, gain, panner, baseHz: hz });
      }
    }

    this.music = new RacingMusic(ctx, this.musicBus);
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
    const base = CONFIG.BASE_SCROLL_SPEED;
    const max = CONFIG.MAX_SCROLL_SPEED;
    const span = Math.max(1e-6, max - base);
    const t = Math.max(
      0,
      Math.min(1, (u.scrollPerFrame - base) / span)
    );

    this.music?.update(delta, u.playing, t);
    if (this.musicBus && !this.musicMuted) {
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

  /** Spatial engine hum for nearby traffic — stereo pan + distance gain + Doppler pitch. */
  updateTrafficEngines(
    delta: number,
    playing: boolean,
    playerX: number,
    playerZ: number,
    carXZ: number[],
  ): void {
    const nVoices = this.trafficVoices.length;
    if (!this.ctx || nVoices === 0) return;

    const active = playing && CONFIG.AUDIO_ENABLED && CONFIG.AUDIO_TRAFFIC_ENABLED;
    const nCars = carXZ.length >> 1;
    const maxDist = CONFIG.AUDIO_TRAFFIC_MAX_DISTANCE;
    const maxGain = CONFIG.AUDIO_TRAFFIC_MAX_GAIN;
    const panRange = CONFIG.AUDIO_TRAFFIC_PAN_RANGE;
    const dopStr = CONFIG.AUDIO_TRAFFIC_DOPPLER_STRENGTH;
    const dopRef = CONFIG.AUDIO_TRAFFIC_DOPPLER_REF_DIST;
    const k = Math.min(1, CONFIG.AUDIO_TRAFFIC_SMOOTH * delta);
    const now = this.ctx.currentTime;

    const sorted: { ci: number; dist: number }[] = [];
    for (let c = 0; c < nCars; c++) {
      const dx = carXZ[c * 2] - playerX;
      const dz = carXZ[c * 2 + 1] - playerZ;
      sorted.push({ ci: c, dist: Math.sqrt(dx * dx + dz * dz) });
    }
    sorted.sort((a, b) => a.dist - b.dist);

    for (let v = 0; v < nVoices; v++) {
      const voice = this.trafficVoices[v];
      const entry = v < sorted.length ? sorted[v] : null;

      let tGain = 0;
      let tPan = 0;
      let tHz = voice.baseHz;

      if (entry && active && entry.dist < maxDist) {
        const ci = entry.ci;
        const dx = carXZ[ci * 2] - playerX;
        const dz = carXZ[ci * 2 + 1] - playerZ;

        const t = Math.max(0, 1 - entry.dist / maxDist);
        tGain = maxGain * (t ** 1.2);
        tPan = Math.max(-1, Math.min(1, dx / panRange));

        const dopplerMul = 1 + dopStr * Math.max(-1, Math.min(1, dz / dopRef));
        tHz = voice.baseHz * dopplerMul;
      }

      voice.gain.gain.value += (tGain - voice.gain.gain.value) * k;
      voice.panner.pan.value += (tPan - voice.panner.pan.value) * k;
      voice.osc1.frequency.setTargetAtTime(tHz, now, 0.05);
      voice.osc2.frequency.setTargetAtTime(tHz * 2, now, 0.05);
      voice.osc3.frequency.setTargetAtTime(tHz * 3, now, 0.05);
    }
  }

  /** Quick ascending blip on every chain multiplier increase. Pitch rises with chain. */
  playChainUp(chain: number): void {
    if (!CONFIG.AUDIO_ENABLED) return;
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const bus = this.sfxBus;
    const t0 = ctx.currentTime;

    const baseHz = 440 + Math.min(chain, 25) * 28;
    const dur = 0.12;

    const o1 = ctx.createOscillator();
    o1.type = 'sine';
    o1.frequency.setValueAtTime(baseHz, t0);
    o1.frequency.exponentialRampToValueAtTime(baseHz * 1.25, t0 + dur * 0.6);
    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(0, t0);
    g1.gain.linearRampToValueAtTime(0.28, t0 + 0.008);
    g1.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o1.connect(g1);
    g1.connect(bus);
    o1.start(t0);
    o1.stop(t0 + dur + 0.02);

    const o2 = ctx.createOscillator();
    o2.type = 'triangle';
    o2.frequency.setValueAtTime(baseHz * 1.5, t0);
    o2.frequency.exponentialRampToValueAtTime(baseHz * 1.8, t0 + dur * 0.6);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0, t0);
    g2.gain.linearRampToValueAtTime(0.14, t0 + 0.008);
    g2.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o2.connect(g2);
    g2.connect(bus);
    o2.start(t0);
    o2.stop(t0 + dur + 0.02);
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

  /** F1 flyby at race start — Doppler engine roar + air displacement. */
  playFlyby(): void {
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const bus = this.sfxBus;
    const t0 = ctx.currentTime;
    const dur = 1.4;
    const peakAt = 0.35;

    // Layer 1: engine fundamental — sawtooth with Doppler pitch sweep
    const eng1 = ctx.createOscillator();
    eng1.type = 'sawtooth';
    eng1.frequency.setValueAtTime(350, t0);
    eng1.frequency.exponentialRampToValueAtTime(220, t0 + peakAt);
    eng1.frequency.exponentialRampToValueAtTime(90, t0 + dur);
    const engFilt = ctx.createBiquadFilter();
    engFilt.type = 'lowpass';
    engFilt.frequency.setValueAtTime(4000, t0);
    engFilt.frequency.setValueAtTime(6000, t0 + peakAt);
    engFilt.frequency.exponentialRampToValueAtTime(1500, t0 + dur);
    engFilt.Q.value = 1.5;
    const engG = ctx.createGain();
    engG.gain.setValueAtTime(0.0001, t0);
    engG.gain.linearRampToValueAtTime(0.35, t0 + peakAt * 0.7);
    engG.gain.setValueAtTime(0.35, t0 + peakAt);
    engG.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    eng1.connect(engFilt); engFilt.connect(engG); engG.connect(bus);
    eng1.start(t0); eng1.stop(t0 + dur + 0.02);

    // Layer 2: 2nd harmonic — adds aggression
    const eng2 = ctx.createOscillator();
    eng2.type = 'square';
    eng2.frequency.setValueAtTime(700, t0);
    eng2.frequency.exponentialRampToValueAtTime(440, t0 + peakAt);
    eng2.frequency.exponentialRampToValueAtTime(180, t0 + dur);
    const eng2Filt = ctx.createBiquadFilter();
    eng2Filt.type = 'bandpass';
    eng2Filt.frequency.value = 1200;
    eng2Filt.Q.value = 2;
    const eng2G = ctx.createGain();
    eng2G.gain.setValueAtTime(0.0001, t0);
    eng2G.gain.linearRampToValueAtTime(0.15, t0 + peakAt * 0.7);
    eng2G.gain.setValueAtTime(0.15, t0 + peakAt);
    eng2G.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    eng2.connect(eng2Filt); eng2Filt.connect(eng2G); eng2G.connect(bus);
    eng2.start(t0); eng2.stop(t0 + dur + 0.02);

    // Layer 3: turbo whine — high pitch sweep
    const whine = ctx.createOscillator();
    whine.type = 'sine';
    whine.frequency.setValueAtTime(5000, t0);
    whine.frequency.exponentialRampToValueAtTime(3000, t0 + peakAt);
    whine.frequency.exponentialRampToValueAtTime(1200, t0 + dur);
    const whineG = ctx.createGain();
    whineG.gain.setValueAtTime(0.0001, t0);
    whineG.gain.linearRampToValueAtTime(0.06, t0 + peakAt * 0.7);
    whineG.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    whine.connect(whineG); whineG.connect(bus);
    whine.start(t0); whine.stop(t0 + dur + 0.02);

    // Layer 4: air displacement — big noise rush
    const airDur = 0.8;
    const airN = Math.floor(ctx.sampleRate * airDur);
    const airBuf = ctx.createBuffer(1, airN, ctx.sampleRate);
    const airD = airBuf.getChannelData(0);
    for (let i = 0; i < airN; i++) {
      const env = Math.sin((i / airN) * Math.PI);
      airD[i] = (Math.random() * 2 - 1) * env;
    }
    const airSrc = ctx.createBufferSource();
    airSrc.buffer = airBuf;
    const airBp = ctx.createBiquadFilter();
    airBp.type = 'bandpass';
    airBp.Q.value = 0.8;
    airBp.frequency.setValueAtTime(3000, t0 + peakAt - 0.15);
    airBp.frequency.exponentialRampToValueAtTime(400, t0 + peakAt + airDur - 0.15);
    const airG = ctx.createGain();
    const airStart = peakAt - 0.15;
    airG.gain.setValueAtTime(0.0001, t0);
    airG.gain.linearRampToValueAtTime(0.3, t0 + airStart + airDur * 0.25);
    airG.gain.exponentialRampToValueAtTime(0.0001, t0 + airStart + airDur);
    airSrc.connect(airBp); airBp.connect(airG); airG.connect(bus);
    airSrc.start(t0 + Math.max(0, airStart));
    airSrc.stop(t0 + airStart + airDur + 0.02);
  }

  playLightRed(): void {
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, t0);
    osc.frequency.setValueAtTime(440, t0 + 0.06);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.35, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.12);
    osc.connect(g);
    g.connect(this.sfxBus);
    osc.start(t0);
    osc.stop(t0 + 0.15);
  }

  playLightGreen(): void {
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, t0);
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1320, t0);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.4, t0);
    g.gain.linearRampToValueAtTime(0.4, t0 + 0.08);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.25);
    osc1.connect(g);
    osc2.connect(g);
    g.connect(this.sfxBus);
    osc1.start(t0);
    osc2.start(t0);
    osc1.stop(t0 + 0.28);
    osc2.stop(t0 + 0.28);
  }

  /** Doppler-like air rush when an overhead structure flies past the camera. */
  playWhoosh(speedT: number): void {
    if (!this.ctx || !this.sfxBus) return;
    const ctx = this.ctx;
    const bus = this.sfxBus;
    const t0 = ctx.currentTime;

    const intensity = 0.7 + speedT * 0.3;
    const dur = 0.35 - speedT * 0.12;

    // Layer 1: air rush — bandpass noise with high→low Doppler sweep
    const nLen = Math.floor(ctx.sampleRate * dur);
    const nBuf = ctx.createBuffer(1, nLen, ctx.sampleRate);
    const nD = nBuf.getChannelData(0);
    for (let i = 0; i < nLen; i++) {
      const env = Math.sin((i / nLen) * Math.PI);
      nD[i] = (Math.random() * 2 - 1) * env;
    }
    const nSrc = ctx.createBufferSource();
    nSrc.buffer = nBuf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 1.2;
    bp.frequency.setValueAtTime(2000 + speedT * 2000, t0);
    bp.frequency.exponentialRampToValueAtTime(300 + speedT * 200, t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(0.4 * intensity, t0 + dur * 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    nSrc.connect(bp); bp.connect(g); g.connect(bus);
    nSrc.start(t0); nSrc.stop(t0 + dur + 0.02);

    // Layer 2: air displacement thud (low sine punch)
    const thud = ctx.createOscillator();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(80, t0);
    thud.frequency.exponentialRampToValueAtTime(35, t0 + 0.08);
    const tg = ctx.createGain();
    tg.gain.setValueAtTime(0.22 * intensity, t0);
    tg.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.1);
    thud.connect(tg); tg.connect(bus);
    thud.start(t0); thud.stop(t0 + 0.12);
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
