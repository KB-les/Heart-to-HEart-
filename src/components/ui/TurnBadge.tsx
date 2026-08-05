"use client";

import React from "react";

interface TurnBadgeProps {
  name: string;
  icon: string;
  isMyTurn?: boolean;
  isRemote?: boolean;
}

export const TurnBadge: React.FC<TurnBadgeProps> = ({
  name,
  icon,
  isMyTurn,
  isRemote,
}) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-forest-800 text-cream-50 font-semibold text-sm shadow-md">
    <span>{icon}</span>
    <span>
      Turn: {name} {isRemote ? (isMyTurn ? " (Your Turn!)" : " (Waiting...)") : ""}
    </span>
  </div>
);