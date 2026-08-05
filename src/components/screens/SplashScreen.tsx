"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 text-center">
      {/* Sunrise glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-gold-300 via-amber-200 to-skyCustom-100 blur-3xl opacity-50 pointer-events-none"
      />

      {/* Heart emblem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-forest-800 via-forest-700 to-emerald-600 flex items-center justify-center shadow-xl border border-gold-300/40 text-gold-300"
      >
        <Heart className="w-12 h-12 sm:w-16 sm:h-16 fill-gold-400/20 text-gold-300 animate-pulse" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-forest-900 mt-6"
      >
        Heart to Heart
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="font-serif text-lg sm:text-2xl text-forest-700 italic font-medium mt-2"
      >
        Growing closer to Jehovah
      </motion.p>
    </div>
  );
};