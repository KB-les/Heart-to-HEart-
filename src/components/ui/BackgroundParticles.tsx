"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Warm ambient sunrise glow (top-left) */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(244,208,104,0.30) 0%, rgba(212,175,55,0.12) 50%, transparent 75%)" }}
      />

      {/* Soft sky glow (top-right) */}
      <motion.div
        animate={{ scale: [1, 1.10, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -top-20 -right-32 w-[450px] h-[450px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(125,211,252,0.25) 0%, rgba(2,132,199,0.08) 50%, transparent 75%)" }}
      />

      {/* Forest ground glow (bottom) */}
      <motion.div
        animate={{ opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute -bottom-20 left-1/4 w-[650px] h-[320px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(78,135,82,0.18) 0%, transparent 70%)" }}
      />

      {/* Sunray shimmer lines */}
      <motion.div
        animate={{ opacity: [0, 0.05, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(105deg, transparent 0%, transparent 8%, rgba(212,175,55,0.03) 9%, transparent 10%)",
        }}
      />
    </div>
  );
};
