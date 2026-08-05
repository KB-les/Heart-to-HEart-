"use client";

import React from "react";

interface BadgeProps {
  variant?: "gold" | "forest" | "emerald" | "outline";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles = {
  gold: "bg-gold-100 text-forest-900 border border-gold-300",
  forest: "bg-forest-100 text-forest-800 border border-forest-300",
  emerald: "bg-emerald-100 text-forest-800 border border-emerald-300",
  outline: "bg-transparent text-forest-800 border border-forest-700/30",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "gold",
  icon,
  children,
}) => (
  <span
    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${variantStyles[variant]}`}
  >
    {icon}
    {children}
  </span>
);