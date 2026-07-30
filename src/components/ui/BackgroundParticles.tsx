"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundParticles: React.FC = () => {
  const leaves = [
    { left: "8%",  delay: 0,  duration: 18 },
    { left: "28%", delay: 5,  duration: 24 },
    { left: "52%", delay: 9,  duration: 20 },
    { left: "72%", delay: 3,  duration: 22 },
    { left: "88%", delay: 14, duration: 19 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* ── Warm ambient sunrise glow (top-left) ── */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.30, 0.50, 0.30] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(244,208,104,0.35) 0%, rgba(212,175,55,0.15) 50%, transparent 75%)" }}
      />

      {/* ── Soft sky glow (top-right) ── */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.20, 0.38, 0.20] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -top-20 -right-32 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(125,211,252,0.30) 0%, rgba(2,132,199,0.10) 50%, transparent 75%)" }}
      />

      {/* ── Forest ground glow (bottom) ── */}
      <motion.div
        animate={{ opacity: [0.15, 0.30, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute -bottom-20 left-1/4 w-[600px] h-[300px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(78,135,82,0.20) 0%, transparent 70%)" }}
      />

      {/* ── Sunray shimmer lines (subtle diagonal) ── */}
      <motion.div
        animate={{ opacity: [0, 0.06, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(105deg, transparent 0%, transparent 8%, rgba(212,175,55,0.04) 9%, transparent 10%)",
        }}
      />

      {/* ── Floating leaves ── */}
      {leaves.map((leaf, idx) => (
        <motion.div
          key={idx}
          initial={{ y: -30, opacity: 0 }}
          animate={{
            y: ["0vh", "105vh"],
            opacity: [0, 0.55, 0.55, 0],
            x: [0, 30, -20, 35],
            rotate: [0, 120, 260, 360],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "linear",
          }}
          style={{ left: leaf.left, position: "absolute", top: 0 }}
          className="text-lg select-none"
        >
          🍃
        </motion.div>
      ))}

      {/* ── Slowly drifting clouds ── */}
      <motion.div
        initial={{ x: "-15%" }}
        animate={{ x: "115%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 text-[80px] opacity-[0.07] select-none"
      >
        ☁️
      </motion.div>
      <motion.div
        initial={{ x: "-20%" }}
        animate={{ x: "115%" }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear", delay: 22 }}
        className="absolute top-24 text-[100px] opacity-[0.05] select-none"
      >
        ☁️
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-15%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear", delay: 10 }}
        className="absolute top-36 text-[60px] opacity-[0.06] select-none"
      >
        ☁️
      </motion.div>
    </div>
  );
};
