"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useSound } from "@/context/SoundContext";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  soundEffect?: "click" | "pageTurn" | "celebrate";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  soundEffect = "click",
  className = "",
  onClick,
  ...props
}) => {
  const { playSound } = useSound();

  const handlePointerDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound(soundEffect);
    if (onClick) onClick(e);
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none select-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-forest-800 to-forest-700 hover:from-forest-900 hover:to-forest-800 text-cream-50 shadow-md hover:shadow-lg shadow-forest-900/10 border border-forest-600/30",
    secondary:
      "bg-white/80 backdrop-blur-md hover:bg-white text-forest-900 border border-cream-300 shadow-sm hover:shadow-md",
    gold:
      "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-600 text-forest-950 font-semibold shadow-md hover:shadow-lg shadow-gold-500/20 border border-gold-300",
    outline:
      "bg-transparent hover:bg-forest-800/5 text-forest-800 border-2 border-forest-700/30 hover:border-forest-700",
    ghost: "bg-transparent hover:bg-forest-800/5 text-forest-800",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base sm:text-lg font-semibold gap-3 rounded-3xl",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025, y: -1 }}
      whileTap={{ scale: 0.96 }}
      onClick={handlePointerDown}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
