"use client";

import React from "react";
import { motion } from "framer-motion";

interface ClueCardProps {
  number: number;
  text: string;
  index: number;
}

export const ClueCard: React.FC<ClueCardProps> = ({ number, text, index }) => (
  <motion.div
    key={number}
    initial={{ opacity: 0, x: -20, scale: 0.98 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="p-5 rounded-2xl bg-white/90 border border-gold-300/60 shadow-sm flex items-start gap-4"
  >
    <div className="w-8 h-8 rounded-full bg-forest-800 text-gold-300 font-serif font-bold text-sm flex items-center justify-center flex-shrink-0">
      {number}
    </div>
    <div className="space-y-1">
      <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
        Clue #{number}
      </span>
      <p className="font-serif text-base sm:text-lg text-forest-900 leading-relaxed italic">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  </motion.div>
);