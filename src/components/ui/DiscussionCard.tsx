"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";

interface DiscussionCardProps {
  question: string;
  subtext?: string;
  scriptureAnchor?: string;
  reflectionPrompt: string;
  index: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  canPrevious: boolean;
  canNext: boolean;
}

export const DiscussionCard: React.FC<DiscussionCardProps> = ({
  question,
  subtext,
  scriptureAnchor,
  reflectionPrompt,
  index,
  total,
  onPrevious,
  onNext,
  onSelect,
  canPrevious,
  canNext,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.35 }}
    className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gold-100/90 via-white to-cream-100 border-2 border-gold-300 shadow-glow space-y-4"
  >
    <div className="flex items-center justify-between">
      <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
        {scriptureAnchor}
      </span>
      <span className="w-7 h-7 rounded-full bg-forest-800 text-gold-300 font-bold text-xs flex items-center justify-center">
        {index + 1}
      </span>
    </div>

    <h5 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 leading-snug">
      {question}
    </h5>

    {subtext && (
      <p className="text-xs sm:text-sm text-forest-700 italic">
        {subtext}
      </p>
    )}

    <div className="p-4 rounded-2xl bg-white/90 border border-gold-300/60 text-xs sm:text-sm text-forest-900 font-medium leading-relaxed">
      <strong className="text-gold-700">Personal Reflection:</strong>{" "}
      {reflectionPrompt}
    </div>

    {/* Card Navigation */}
    <div className="flex items-center justify-between pt-2">
      <Button
        variant="secondary"
        size="sm"
        disabled={!canPrevious}
        onClick={onPrevious}
      >
        Previous Card
      </Button>

      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-forest-800 w-6" : "bg-cream-300"
            }`}
          />
        ))}
      </div>

      <Button
        variant="gold"
        size="sm"
        disabled={!canNext}
        onClick={onNext}
      >
        Next Card
      </Button>
    </div>
  </motion.div>
);