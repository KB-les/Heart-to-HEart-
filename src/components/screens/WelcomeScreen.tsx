"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 text-center">
      {/* Animated Sunrise Background Element */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Soft Radiant Sun Rays */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-gold-300 via-amber-200 to-skyCustom-100 blur-3xl opacity-50 pointer-events-none"
        />

        {/* Sunrise Emblem Arc */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-forest-800 via-forest-700 to-emerald-600 flex items-center justify-center shadow-xl border border-gold-300/40 text-gold-300"
        >
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 fill-gold-400/20 text-gold-300 animate-pulse" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-3xl border border-dashed border-gold-300/30 p-1"
          />
        </motion.div>
      </div>

      {/* Main Welcome Hero Card */}
      <Card variant="glass" className="max-w-2xl w-full p-8 sm:p-12 space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full bg-gold-100 text-forest-800 border border-gold-300">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Family Worship Experience
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-forest-900 leading-tight">
            Heart to Heart
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-forest-700 italic max-w-lg mx-auto font-medium">
            &ldquo;Growing closer to Jehovah together.&rdquo;
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm sm:text-base text-forest-800/80 max-w-md mx-auto leading-relaxed"
        >
          A peaceful, joyful interactive space for Karabelo and Yolanda to enjoy meaningful Bible discussions and fun together.
        </motion.p>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-4"
        >
          <Button variant="gold" size="lg" onClick={onStart} className="w-full sm:w-auto shadow-lg">
            <span>Start Worship</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </Card>

      {/* Footer */}
      <footer className="mt-10 text-xs text-forest-700/60 font-medium flex items-center gap-1">
        <span>Built with love for family worship</span>
        <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
      </footer>
    </div>
  );
};
