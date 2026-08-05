"use client";

import React from "react";

interface WaitingBannerProps {
  message: string;
  icon?: React.ReactNode;
}

export const WaitingBanner: React.FC<WaitingBannerProps> = ({ message, icon }) => (
  <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-center justify-center gap-3 shadow-md">
    {icon}
    <span className="text-xs sm:text-sm font-bold">{message}</span>
  </div>
);