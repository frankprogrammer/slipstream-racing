import { CONFIG } from '../config';

/**
 * Step 33 — procedural lo-fi synthwave bed + chain-reactive layers (same AudioContext as SFX).
 * Layers ramp in as chain grows; mutes when not playing. No external files.
 */

function smoothLayer(chain: number, from: number, to: number): number {
  if (chain <= from) return 0;
  if (chain >= to) return 1;
  return (chain - from) / (to - from);
}

export class SynthwaveMusic {
  private readonly ctx: AudioContext;
  private readonly mix: GainNode;

  private layer1Gain: GainNode | null = null;
  private layer2Gain: GainNode | null = null;
  private layer3Gain: GainNode | null = null;
  private layer4Gain: GainNode | null = null;
  private hatGain: GainNode | null = null;

  private kickOsc: OscillatorNode | null = null;
  private kickAmp: GainNode | null = null;

  private curL1 = 0;
  private curL2 = 0;
  private curL3 = 0;
  private curL4 = 0;
  private curMix = 0;

  private kickTimer: number | null = null;
  private hatTimer: number | null = null;
  private hatNoise: AudioBuffer | null = null;
  private playingInternal = false;

  constructor(ctx: AudioContext, musicBus: AudioNode) {
    this.ctx = ctx;
    this.mix = ctx.createGain();
    this.mix.gain.value = 0;
    this.mix.connect(musicBus);
  }

  build(): void {
    const ctx = this.ctx;
    const mix = this.mix;

    const lp = (freq: number, q = 0.7) => {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = freq;
      f.Q.value = q;
      return f;
    };

    // ── Base: warm bass + pad (minor add9 feel) ──
    const bass = ctx.createOscillator();
    bass.type = 'triangle';
    bass.frequency.value = CONFIG.AUDIO_MUSIC_BASS_HZ;
    const bassG = ctx.createGain();
    bassG.gain.value = CONFIG.AUDIO_MUSIC_BASS_GAIN;
    bass.connect(lp(220)).connect(bassG).connect(mix);

    const pad = ctx.createOscillator();
    pad.type = 'sine';
    pad.frequency.value = CONFIG.AUDIO_MUSIC_PAD_ROOT_HZ;
    const pad2 = ctx.createOscillator();
    pad2.type = 'sine';
    pad2.frequency.value = CONFIG.AUDIO_MUSIC_PAD_FIFTH_HZ;
    const padG = ctx.createGain();
    padG.gain.value = CONFIG.AUDIO_MUSIC_PAD_GAIN;
    pad.connect(padG);
    pad2.connect(padG);
    padG.connect(lp(420)).connect(mix);

    // ── Layer 1: wide fifth / shimmer ──
    const sh = ctx.createOscillator();
    sh.type = 'triangle';
    sh.frequency.value = CONFIG.AUDIO_MUSIC_LAYER1_HZ;
    this.layer1Gain = ctx.createGain();
    this.layer1Gain.gain.value = 0;
    sh.connect(lp(680)).connect(this.layer1Gain).connect(mix);

    // ── Layer 2: mid “synth” voice ──
    const mid = ctx.createOscillator();
    mid.type = 'triangle';
    mid.frequency.value = CONFIG.AUDIO_MUSIC_LAYER2_HZ;
    this.layer2Gain = ctx.createGain();
    this.layer2Gain.gain.value = 0;
    mid.connect(lp(900)).connect(this.layer2Gain).connect(mix);

    // ── Layer 3: high sparkle ──
    const hi = ctx.createOscillator();
    hi.type = 'sine';
    hi.frequency.value = CONFIG.AUDIO_MUSIC_LAYER3_HZ;
    this.layer3Gain = ctx.createGain();
    this.layer3Gain.gain.value = 0;
    hi.connect(lp(2800)).connect(this.layer3Gain).connect(mix);

    // ── Layer 4: airy noise bed ──
    const buf = ctx.createBuffer(
      1,
      Math.floor(ctx.sampleRate * 1.5),
      ctx.sampleRate
    );
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const air = ctx.createBufferSource();
    air.buffer = buf;
    air.loop = true;
    const airF = ctx.createBiquadFilter();
    airF.type = 'bandpass';
    airF.frequency.value = CONFIG.AUDIO_MUSIC_LAYER4_BP_HZ;
    airF.Q.value = 0.9;
    this.layer4Gain = ctx.createGain();
    this.layer4Gain.gain.value = 0;
    air.connect(airF).connect(this.layer4Gain).connect(mix);
    air.start(0);

    // ── Soft offbeat hat (noise click) ──
    this.hatGain = ctx.createGain();
    this.hatGain.gain.value = 0;
    this.hatGain.connect(mix);

    // ── Kick: low sine + amplitude envelope ──
    this.kickOsc = ctx.createOscillator();
    this.kickOsc.type = 'sine';
    this.kickOsc.frequency.value = CONFIG.AUDIO_MUSIC_KICK_HZ;
    this.kickAmp = ctx.createGain();
    this.kickAmp.gain.value = 0.0001;
    this.kickOsc.connect(this.kickAmp).connect(mix);

    bass.start(0);
    pad.start(0);
    pad2.start(0);
    sh.start(0);
    mid.start(0);
    hi.start(0);
    this.kickOsc.start(0);

    const bpm = CONFIG.AUDIO_MUSIC_BPM;
    const beatMs = 60000 / bpm;
    const scheduleKick = (): void => {
      if (!this.kickAmp || !this.playingInternal) return;
      const t = this.ctx.currentTime;
      this.kickAmp.gain.cancelScheduledValues(t);
      this.kickAmp.gain.setValueAtTime(CONFIG.AUDIO_MUSIC_KICK_PEAK, t);
      this.kickAmp.gain.exponentialRampToValueAtTime(0.0001, t + 0.085);
    };

    this.kickTimer = window.setInterval(scheduleKick, beatMs);

    const hatN = Math.floor(ctx.sampleRate * 0.04);
    this.hatNoise = ctx.createBuffer(1, hatN, ctx.sampleRate);
    const hatD = this.hatNoise.getChannelData(0);
    for (let i = 0; i < hatN; i++) hatD[i] = (Math.random() * 2 - 1) * (1 - i / hatN);

    const scheduleHat = (): void => {
      if (!this.hatGain || !this.hatNoise || !this.playingInternal) return;
      const t0 = this.ctx.currentTime;
      const src = this.ctx.createBufferSource();
      src.buffer = this.hatNoise;
      const hf = this.ctx.createBiquadFilter();
      hf.type = 'highpass';
      hf.frequency.value = 7000;
      const hg = this.ctx.createGain();
      hg.gain.value = CONFIG.AUDIO_MUSIC_HAT_GAIN;
      src.connect(hf).connect(hg);
      hg.connect(this.hatGain);
      src.start(t0);
      src.stop(t0 + 0.05);
    };

    this.hatTimer = window.setInterval(scheduleHat, beatMs / 2);
    window.setTimeout(() => {
      scheduleKick();
      scheduleHat();
    }, 80);
  }

  update(delta: number, playing: boolean, chain: number): void {
    this.playingInternal = playing;

    const kPlay = Math.min(1, CONFIG.AUDIO_MUSIC_PLAY_FADE_SMOOTH * delta);
    const kLayer = Math.min(1, CONFIG.AUDIO_MUSIC_LAYER_SMOOTH * delta);

    const targetMix = playing ? 1 : 0;
    this.curMix += (targetMix - this.curMix) * kPlay;
    this.mix.gain.value = this.curMix * CONFIG.AUDIO_MUSIC_MIX_INNER;

    const t1 = smoothLayer(chain, 2, 6) * CONFIG.AUDIO_MUSIC_LAYER1_MAX;
    const t2 = smoothLayer(chain, 5, 10) * CONFIG.AUDIO_MUSIC_LAYER2_MAX;
    const t3 = smoothLayer(chain, 10, 15) * CONFIG.AUDIO_MUSIC_LAYER3_MAX;
    const t4 = smoothLayer(chain, 15, 20) * CONFIG.AUDIO_MUSIC_LAYER4_MAX;
    const that = smoothLayer(chain, 4, 12) * CONFIG.AUDIO_MUSIC_HAT_LAYER_MAX;

    this.curL1 += (t1 - this.curL1) * kLayer;
    this.curL2 += (t2 - this.curL2) * kLayer;
    this.curL3 += (t3 - this.curL3) * kLayer;
    this.curL4 += (t4 - this.curL4) * kLayer;

    if (this.layer1Gain)
      this.layer1Gain.gain.value = this.curL1;
    if (this.layer2Gain)
      this.layer2Gain.gain.value = this.curL2;
    if (this.layer3Gain)
      this.layer3Gain.gain.value = this.curL3;
    if (this.layer4Gain)
      this.layer4Gain.gain.value = this.curL4;
    if (this.hatGain)
      this.hatGain.gain.value = that * this.curMix;
  }
}
