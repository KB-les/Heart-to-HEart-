"use client";

import React from "react";

interface SectionLabelProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ icon, children }) => (
  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest-700">
    {icon}
    {children}
  </span>
);