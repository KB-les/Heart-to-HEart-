"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { DEVOTIONAL_IMAGES } from "@/data/imageAssets";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 text-center">
      {/* Real Sunrise Visual Element */}
      <div className="relative mb-8 flex flex-col items-center justify-center max-w-lg w-full">
        {/* Soft Warm Vignette Glow */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-200/40 via-gold-200/30 to-emerald-200/30 blur-2xl pointer-events-none" />

        {/* Real Sunrise Photograph with Heirloom Framing */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full h-44 sm:h-52 rounded-3xl overflow-hidden border-2 border-gold-300/70 shadow-card bg-cream-100"
        >
          <Image
            src={DEVOTIONAL_IMAGES.welcomeHero.imageUrl}
            alt={DEVOTIONAL_IMAGES.welcomeHero.alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Subtle gradient overlay to blend into warm cream */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-black/10" />

          {/* Gentle Floating Badge atop the sunrise */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-cream-50 text-xs drop-shadow">
            <span className="font-serif italic font-medium flex items-center gap-1.5 text-gold-200">
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              &ldquo;The path of the righteous is like the morning light...&rdquo;
            </span>
            <span className="text-[10px] text-cream-200 font-sans uppercase tracking-wider">Proverbs 4:18</span>
          </div>
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
        A peaceful, joyful interactive space for two people to enjoy meaningful Bible discussions and fun together.
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
      <footer className="mt-10 text-xs text-forest-700/60 font-medium">
        <span>Designed for meaningful family worship</span>
      </footer>
    </div>
  );
};

