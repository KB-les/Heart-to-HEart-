"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useSound } from "@/context/SoundContext";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  soundEffect?: "click" | "pageTurn" | "celebrate";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  soundEffect = "click",
  className = "",
  onClick,
  disabled = false,
  ...props
}) => {
  const { playSound } = useSound();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    playSound(soundEffect);
    if (onClick) onClick(e);
  };

  const base =
    "inline-flex items-center justify-center font-medium rounded-2xl transition-colors duration-200 focus:outline-none select-none";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-forest-800 to-forest-700 hover:from-forest-900 hover:to-forest-800 text-cream-50 shadow-md hover:shadow-xl shadow-forest-900/10 border border-forest-600/30",
    secondary:
      "bg-white/90 backdrop-blur-md hover:bg-white text-forest-900 border border-cream-300 shadow-sm hover:shadow-md",
    gold:
      "bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-500 hover:via-gold-600 hover:to-amber-600 text-forest-950 font-semibold shadow-md hover:shadow-xl shadow-gold-500/25 border border-gold-300",
    outline:
      "bg-transparent hover:bg-forest-800/5 text-forest-800 border-2 border-forest-700/30 hover:border-forest-700",
    ghost: "bg-transparent hover:bg-forest-800/5 text-forest-800",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-8 py-4 text-base sm:text-lg font-semibold gap-3 rounded-3xl",
  };

  return (
    <motion.button
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.03,
              y: -2,
              boxShadow:
                variant === "gold"
                  ? "0 16px 30px -8px rgba(212,175,55,0.45)"
                  : variant === "primary"
                  ? "0 16px 30px -8px rgba(30,58,43,0.30)"
                  : "0 10px 20px -5px rgba(0,0,0,0.1)",
            }
      }
      whileTap={disabled ? {} : { scale: 0.96, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={handleClick}
      disabled={disabled}
      className={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
