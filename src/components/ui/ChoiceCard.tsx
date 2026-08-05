"use client";

import React from "react";
import { motion } from "framer-motion";

interface ChoiceCardProps {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  selectedClassName?: string;
}

export const ChoiceCard: React.FC<ChoiceCardProps> = ({
  selected,
  disabled = false,
  onClick,
  children,
  selectedClassName = "",
}) => (
  <motion.button
    whileHover={disabled ? {} : { scale: 1.03, y: -2 }}
    whileTap={disabled ? {} : { scale: 0.97 }}
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={`p-5 rounded-2xl flex flex-col items-center justify-center gap-2 border transition-all ${
      selected
        ? selectedClassName
        : "bg-white/80 hover:bg-white border-cream-300 shadow-sm"
    } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
  >
    {children}
  </motion.button>
);