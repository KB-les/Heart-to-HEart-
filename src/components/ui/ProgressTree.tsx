"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressTreeProps {
  currentStep: number;
  totalSteps?: number;
  onSelectStep?: (step: number) => void;
}

const TREE_STAGES = [
  { step: 1, label: "Welcome", icon: "🌱" },
  { step: 2, label: "Players", icon: "🌿" },
  { step: 3, label: "Icebreaker", icon: "🌸" },
  { step: 4, label: "Bible Game", icon: "📜" },
  { step: 5, label: "Heart & Action", icon: "💛" },
  { step: 6, label: "Discussion", icon: "📖" },
  { step: 7, label: "Spiritual Gems", icon: "🌳" },
];

export const ProgressTree: React.FC<ProgressTreeProps> = ({
  currentStep,
  onSelectStep,
}) => {
  return (
    <div className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-cream-200 shadow-sm">
      {TREE_STAGES.map((stage) => {
        const isCurrent = stage.step === currentStep;
        const isPassed = stage.step < currentStep;

        return (
          <button
            key={stage.step}
            onClick={() => onSelectStep && onSelectStep(stage.step)}
            title={`${stage.step}. ${stage.label}`}
            className="group relative flex items-center justify-center focus:outline-none"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm transition-all duration-300 ${
                isCurrent
                  ? "bg-forest-700 text-cream-50 shadow-md ring-2 ring-gold-400 ring-offset-1"
                  : isPassed
                  ? "bg-emerald-100 text-forest-800 border border-emerald-300"
                  : "bg-cream-100 text-forest-500/40 border border-cream-200"
              }`}
            >
              {stage.icon}
            </motion.div>

            {/* Tooltip on hover */}
            <span className="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap rounded-lg bg-forest-900 px-2 py-1 text-[11px] font-medium text-cream-100 shadow-lg z-50">
              {stage.step}. {stage.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
