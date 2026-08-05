"use client";

import React from "react";

interface StatusPillProps {
  status: "connected" | "waiting" | "error" | "info";
  children: React.ReactNode;
}

const statusStyles = {
  connected: "bg-emerald-100 text-forest-800 border border-emerald-300",
  waiting: "bg-amber-50 text-amber-950 border border-amber-300",
  error: "bg-rose-50 text-rose-700 border border-rose-300",
  info: "bg-gold-100 text-forest-900 border border-gold-300",
};

export const StatusPill: React.FC<StatusPillProps> = ({ status, children }) => (
  <span
    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[status]}`}
  >
    {children}
  </span>
);