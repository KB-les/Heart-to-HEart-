"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "glass" | "parchment" | "cream" | "gold";
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = "glass",
  children,
  className = "",
  ...props
}) => {
  const variantStyles = {
    glass:
      "bg-white/80 backdrop-blur-xl border border-white/60 shadow-card text-forest-900",
    parchment:
      "bg-gradient-to-br from-[#FAF6EE] to-[#F3ECE0] border border-gold-300/40 shadow-card text-forest-900",
    cream:
      "bg-cream-100/90 border border-cream-200 shadow-soft text-forest-900",
    gold:
      "bg-gradient-to-br from-gold-100/80 via-white/90 to-gold-50/90 border border-gold-300/50 shadow-glow text-forest-900",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
