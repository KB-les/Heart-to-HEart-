"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Sparkles, Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface PlayerSetupScreenProps {
  player1Name: string;
  player2Name: string;
  onUpdatePlayers: (name1: string, name2: string) => void;
  onContinue: () => void;
}

export const PlayerSetupScreen: React.FC<PlayerSetupScreenProps> = ({
  player1Name,
  player2Name,
  onUpdatePlayers,
  onContinue,
}) => {
  const [p1, setP1] = useState<string>(player1Name || "Karabelo");
  const [p2, setP2] = useState<string>(player2Name || "Yolanda");
  const [avatar1, setAvatar1] = useState<string>("🌿");
  const [avatar2, setAvatar2] = useState<string>("🌸");

  const avatarChoices = ["🌿", "🌸", "🕊️", "⭐", "🌾", "🌊", "☀️", "🦋"];

  const handleContinue = () => {
    onUpdatePlayers(p1.trim() || "Karabelo", p2.trim() || "Yolanda");
    onContinue();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-forest-100 text-forest-800 border border-forest-300">
          <Users className="w-3.5 h-3.5" />
          Step 1 &bull; Worship Companions
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
          Who is joining today?
        </h2>
        <p className="text-sm text-forest-700 max-w-md mx-auto">
          Welcome! Customize your names to personalize your joint Bible worship session.
        </p>
      </motion.div>

      <Card variant="glass" className="p-6 sm:p-8 space-y-8 text-left">
        {/* Player 1 Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-cream-100/90 to-white/90 border border-cream-300 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700">
              Player 1 (Default: Karabelo)
            </span>
            <span className="text-xs text-forest-500 font-medium">Partner A</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Avatar Selector Dropdown / Row */}
            <div className="relative group">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-2xl flex items-center justify-center shadow-md border border-gold-300">
                {avatar1}
              </div>
            </div>

            <input
              type="text"
              value={p1}
              onChange={(e) => setP1(e.target.value)}
              placeholder="Enter Player 1 Name"
              className="flex-1 px-4 py-3 rounded-2xl bg-white border border-cream-300 text-forest-900 font-medium focus:outline-none focus:ring-2 focus:ring-forest-700/50 shadow-inner text-base"
            />
          </div>

          {/* Quick Avatar Row */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs text-forest-600 font-medium">Icon:</span>
            {avatarChoices.slice(0, 5).map((av) => (
              <button
                key={av}
                type="button"
                onClick={() => setAvatar1(av)}
                className={`p-1.5 rounded-xl text-base transition-transform ${
                  avatar1 === av
                    ? "bg-gold-200 ring-2 ring-forest-700 scale-110"
                    : "hover:bg-cream-200"
                }`}
              >
                {av}
              </button>
            ))}
          </div>
        </div>

        {/* Player 2 Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-cream-100/90 to-white/90 border border-cream-300 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700">
              Player 2 (Default: Yolanda)
            </span>
            <span className="text-xs text-forest-500 font-medium">Partner B</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 text-2xl flex items-center justify-center shadow-md border border-gold-300">
              {avatar2}
            </div>

            <input
              type="text"
              value={p2}
              onChange={(e) => setP2(e.target.value)}
              placeholder="Enter Player 2 Name"
              className="flex-1 px-4 py-3 rounded-2xl bg-white border border-cream-300 text-forest-900 font-medium focus:outline-none focus:ring-2 focus:ring-forest-700/50 shadow-inner text-base"
            />
          </div>

          {/* Quick Avatar Row */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs text-forest-600 font-medium">Icon:</span>
            {avatarChoices.slice(1, 6).map((av) => (
              <button
                key={av}
                type="button"
                onClick={() => setAvatar2(av)}
                className={`p-1.5 rounded-xl text-base transition-transform ${
                  avatar2 === av
                    ? "bg-gold-200 ring-2 ring-forest-700 scale-110"
                    : "hover:bg-cream-200"
                }`}
              >
                {av}
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-2 text-center">
          <Button
            variant="gold"
            size="lg"
            onClick={handleContinue}
            className="w-full sm:w-auto shadow-md"
          >
            <span>Continue to Icebreaker</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
