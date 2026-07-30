"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Animated Sun / Soft Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200/40 via-gold-300/20 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-skyCustom-300/30 via-emerald-200/20 to-transparent blur-3xl"
      />

      {/* Floating Leaves (3 subtle SVG leaves drifting gently) */}
      {[
        { left: "10%", delay: 0, duration: 18 },
        { left: "45%", delay: 6, duration: 22 },
        { left: "80%", delay: 3, duration: 20 },
      ].map((leaf, idx) => (
        <motion.div
          key={idx}
          initial={{ y: -50, opacity: 0, x: 0, rotate: 0 }}
          animate={{
            y: ["0vh", "105vh"],
            opacity: [0, 0.6, 0.6, 0],
            x: [0, 40, -30, 20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "easeInOut",
          }}
          style={{ left: leaf.left }}
          className="absolute top-0 text-forest-500/20 text-xl"
        >
          🍃
        </motion.div>
      ))}

      {/* Drifting Clouds */}
      <motion.div
        initial={{ x: "-20%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-12 text-6xl opacity-15 select-none"
      >
        ☁️
      </motion.div>
      <motion.div
        initial={{ x: "-30%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear", delay: 20 }}
        className="absolute top-28 text-7xl opacity-10 select-none"
      >
        ☁️
      </motion.div>
    </div>
  );
};
