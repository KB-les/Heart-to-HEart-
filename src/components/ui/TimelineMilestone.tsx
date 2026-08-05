"use client";

import React from "react";

interface TimelineMilestoneProps {
  period: string;
  event: string;
}

export const TimelineMilestone: React.FC<TimelineMilestoneProps> = ({ period, event }) => (
  <div className="p-4 rounded-2xl bg-white/90 border border-gold-300/50 shadow-sm space-y-1">
    <span className="text-[11px] font-bold text-gold-700 uppercase tracking-wider">
      {period}
    </span>
    <p className="text-xs text-forest-900 font-medium leading-normal">
      {event}
    </p>
  </div>
);