"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Users, Compass, Scroll, Heart, BookOpen, Sparkles } from "lucide-react";

interface ProgressTreeProps {
  currentStep: number;
  totalSteps?: number;
  onSelectStep?: (step: number) => void;
}

const TREE_STAGES = [
  { step: 1, label: "Welcome", Icon: Sun },
  { step: 2, label: "Players", Icon: Users },
  { step: 3, label: "Icebreaker", Icon: Compass },
  { step: 4, label: "Bible Game", Icon: Scroll },
  { step: 5, label: "Heart & Action", Icon: Heart },
  { step: 6, label: "Discussion", Icon: BookOpen },
  { step: 7, label: "Spiritual Gems", Icon: Sparkles },
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
        const IconComponent = stage.Icon;

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
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isCurrent
                  ? "bg-forest-800 text-gold-300 shadow-md ring-2 ring-gold-400 ring-offset-1"
                  : isPassed
                  ? "bg-emerald-100 text-forest-800 border border-emerald-300"
                  : "bg-cream-100 text-forest-400/40 border border-cream-200"
              }`}
            >
              <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </motion.div>

            {/* Tooltip on hover */}
            <span className="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap rounded-lg bg-forest-900 px-2.5 py-1 text-[11px] font-medium text-cream-100 shadow-lg z-50">
              {stage.step}. {stage.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
