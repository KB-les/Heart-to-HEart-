"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface EndingScreenProps {
  player1Name: string;
  player2Name: string;
  charactersDiscussed?: string[];
  onFinish: () => void;
}

export const EndingScreen: React.FC<EndingScreenProps> = ({
  player1Name,
  player2Name,
  charactersDiscussed = ["Joseph", "David", "Abraham", "Ruth", "Moses", "Daniel", "Paul"],
  onFinish,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 text-center relative overflow-hidden">
      {/* Soft Sunset Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-b from-amber-300/40 via-rose-300/30 to-transparent blur-3xl pointer-events-none"
      />

      {/* Growing Tree Animation Container */}
      <div className="relative flex flex-col items-center justify-center py-6">
        <motion.div
          initial={{ scale: 0.2, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-7xl sm:text-8xl select-none"
        >
          {/* Framer Motion Growing Tree Sequence */}
          <motion.span
            animate={{
              scale: [0.95, 1.05, 0.95],
              rotate: [-2, 2, -2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block drop-shadow-xl"
          >
            🌳
          </motion.span>

          {/* Floating glowing sparkles around tree */}
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2], y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 text-2xl"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2], y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-2 -left-4 text-2xl"
          >
            🌸
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-xs font-semibold text-forest-700 uppercase tracking-widest mt-2"
        >
          Spiritual Growth & Unity
        </motion.p>
      </div>

      {/* Main Closing Card */}
      <Card variant="glass" className="p-8 sm:p-12 space-y-8 relative z-10 text-center">
        {/* Heartfelt Message */}
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gold-100 text-forest-900 border border-gold-300">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            Worship Complete &bull; {player1Name} &amp; {player2Name}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-snug">
            Thank you for spending time in Jehovah&apos;s Word together.
          </h2>

          <p className="text-sm sm:text-base text-forest-700 leading-relaxed font-medium">
            May Jehovah bless your warm discussions and strengthen your unity as you meditate on His qualities throughout the week.
          </p>
        </div>

        {/* Today's Spiritual Gems Summary */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-white/90 via-cream-100 to-amber-50 border border-gold-300/60 shadow-card text-left space-y-5">
          <div className="flex items-center justify-between border-b border-cream-300 pb-3">
            <h3 className="font-serif text-xl font-bold text-forest-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-600" />
              <span>Today&apos;s Spiritual Gems</span>
            </h3>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-forest-800 text-cream-50">
              Summary
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            {/* Theme */}
            <div className="p-4 rounded-2xl bg-white border border-cream-200 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
                Worship Theme
              </span>
              <p className="font-bold text-forest-900 text-base">Patience</p>
              <p className="text-[11px] text-forest-600">Why Does Jehovah Value Patience?</p>
            </div>

            {/* Scriptures Read */}
            <div className="p-4 rounded-2xl bg-white border border-cream-200 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
                Scriptures Read
              </span>
              <p className="font-semibold text-forest-900">James 5:7-11</p>
              <p className="text-[11px] text-forest-700">Psalm 37:7 &bull; Ecclesiastes 7:8</p>
            </div>

            {/* Characters Discussed */}
            <div className="p-4 rounded-2xl bg-white border border-cream-200 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
                Characters Explored
              </span>
              <div className="flex flex-wrap gap-1 pt-1">
                {charactersDiscussed.slice(0, 5).map((char) => (
                  <span
                    key={char}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-forest-800"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Finish / Restart Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gold" size="lg" onClick={onFinish} className="w-full sm:w-auto shadow-md">
            <CheckCircle2 className="w-5 h-5" />
            <span>Finish Worship Session</span>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={onFinish}
            className="w-full sm:w-auto"
          >
            <RotateCcw className="w-4 h-4 text-forest-700" />
            <span>Start Fresh Session</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};
