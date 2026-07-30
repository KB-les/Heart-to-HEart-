"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type SoundEffect =
  | "click"
  | "pageTurn"
  | "reveal"
  | "celebrate"
  | "birds"
  | "wind"
  | "rain"
  | "ocean"
  | "gentleChime";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (effect: SoundEffect) => void;
  ambientSound: SoundEffect | null;
  setAmbientSound: (effect: SoundEffect | null) => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: false,
  toggleMute: () => {},
  playSound: () => {},
  ambientSound: null,
  setAmbientSound: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [ambientSound, setAmbientSound] = useState<SoundEffect | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("h2h_muted");
    if (stored !== null) {
      setIsMuted(stored === "true");
    }
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem("h2h_muted", String(next));
      return next;
    });
  };

  // Synthesized Web Audio API placeholders for peaceful tactile feedback
  const playSound = (effect: SoundEffect) => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (effect === "click") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (effect === "pageTurn") {
        const bufferSize = ctx.sampleRate * 0.1;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 1200;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        whiteNoise.start();
      } else if (effect === "celebrate" || effect === "gentleChime" || effect === "reveal") {
        const notes = effect === "celebrate" ? [523.25, 659.25, 783.99, 1046.5] : [440, 554.37, 659.25];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.value = freq;
          const start = ctx.currentTime + idx * 0.08;
          gain.gain.setValueAtTime(0, start);
          gain.gain.linearRampToValueAtTime(0.08, start + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.5);
        });
      }
    } catch {
      // AudioContext unavailable or blocked by browser autoplay policy
    }
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playSound, ambientSound, setAmbientSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
