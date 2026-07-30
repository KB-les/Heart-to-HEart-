"use client";

import React from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Heart } from "lucide-react";
import { useSound } from "@/context/SoundContext";
import { ProgressTree } from "./ProgressTree";

interface JourneyHeaderProps {
  currentStep: number;
  player1Name: string;
  player2Name: string;
  onSelectStep?: (step: number) => void;
}

import { usePeer } from "@/context/PeerContext";

export const JourneyHeader: React.FC<JourneyHeaderProps> = ({
  currentStep,
  player1Name,
  player2Name,
  onSelectStep,
}) => {
  const { isMuted, toggleMute, playSound } = useSound();
  const { myRole, status: peerStatus } = usePeer();

  const isRemote = peerStatus === "connected";
  const isHost = !isRemote || myRole === "host";

  const handleMuteClick = () => {
    playSound("click");
    toggleMute();
  };

  const handleStepClick = (step: number) => {
    if (isHost && onSelectStep) {
      onSelectStep(step);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 py-3 bg-cream-50/80 backdrop-blur-md border-b border-cream-200/60 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo & Brand */}
        <div
          onClick={() => handleStepClick(1)}
          className={`flex items-center gap-2.5 ${isHost ? "cursor-pointer group" : "cursor-default"}`}
        >
          <motion.div
            whileHover={isHost ? { scale: 1.1, rotate: 5 } : {}}
            whileTap={isHost ? { scale: 0.95 } : {}}
            className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-forest-800 via-forest-700 to-emerald-600 flex items-center justify-center text-gold-300 shadow-md border border-gold-400/30"
          >
            <Heart className="w-5 h-5 fill-gold-400/30 text-gold-300" />
          </motion.div>
          <div className="hidden xs:block text-left">
            <h1 className="font-serif text-base sm:text-lg font-bold text-forest-900 leading-tight group-hover:text-forest-700 transition-colors">
              Heart to Heart
            </h1>
            <p className="text-[10px] sm:text-xs text-forest-600/80 font-medium">
              Growing closer to Jehovah
            </p>
          </div>
        </div>

        {/* Progress Tree */}
        <div className="flex-1 flex justify-center max-w-md">
          <ProgressTree currentStep={currentStep} onSelectStep={isHost ? handleStepClick : undefined} />
        </div>

        {/* Right Section: Players & Sound Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-800/5 border border-forest-800/10 text-xs font-semibold text-forest-800">
            <span>🌿 {player1Name || "Karabelo"}</span>
            <span className="text-gold-500 font-bold">&</span>
            <span>🌸 {player2Name || "Yolanda"}</span>
            {isRemote && (
              <span className="ml-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-200 text-forest-900 border border-gold-300">
                {myRole === "host" ? "👑 Host" : "👀 Guest"}
              </span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleMuteClick}
            className={`p-2 sm:p-2.5 rounded-full border transition-all duration-200 ${
              isMuted
                ? "bg-stone-100 text-stone-400 border-stone-200"
                : "bg-gold-100 text-forest-800 border-gold-300 shadow-sm"
            }`}
            title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4 text-forest-700" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};
