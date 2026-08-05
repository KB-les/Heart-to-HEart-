"use client";

import React from "react";
import { motion } from "framer-motion";
import { FEELING_OPTIONS, FeelingOption } from "@/data/players";

interface FeelingPickerProps {
  selected: FeelingOption[];
  onToggle: (feeling: FeelingOption) => void;
  disabled?: boolean;
}

export const FeelingPicker: React.FC<FeelingPickerProps> = ({
  selected,
  onToggle,
  disabled,
}) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold text-forest-700 uppercase tracking-wider">
        Choose TWO feelings this brings you:
      </p>
      <span
        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
          selected.length === 2
            ? "bg-forest-800 text-cream-50"
            : "bg-cream-200 text-forest-600"
        }`}
      >
        {selected.length} / 2
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {FEELING_OPTIONS.map((feeling) => {
        const isSelected = selected.includes(feeling);
        return (
          <motion.button
            key={feeling}
            whileHover={disabled ? {} : { scale: 1.04 }}
            whileTap={disabled ? {} : { scale: 0.96 }}
            type="button"
            disabled={disabled}
            onClick={() => onToggle(feeling)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
              isSelected
                ? "bg-forest-800 text-cream-50 border-forest-700 shadow-md ring-2 ring-gold-400"
                : "bg-white text-forest-800 border-cream-300 hover:border-forest-400"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {feeling}
          </motion.button>
        );
      })}
    </div>
  </div>
);