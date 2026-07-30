"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { JourneyHeader } from "@/components/ui/JourneyHeader";
import { WelcomeScreen } from "@/components/screens/WelcomeScreen";
import { PlayerSetupScreen } from "@/components/screens/PlayerSetupScreen";
import { IcebreakerScreen } from "@/components/screens/IcebreakerScreen";
import { BibleCharacterScreen } from "@/components/screens/BibleCharacterScreen";
import { HeartOrActionScreen } from "@/components/screens/HeartOrActionScreen";
import { MainDiscussionScreen } from "@/components/screens/MainDiscussionScreen";
import { EndingScreen } from "@/components/screens/EndingScreen";
import { DEFAULT_PLAYER_1, DEFAULT_PLAYER_2 } from "@/data/players";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [player1Name, setPlayer1Name] = useState<string>(DEFAULT_PLAYER_1.name);
  const [player2Name, setPlayer2Name] = useState<string>(DEFAULT_PLAYER_2.name);
  const [completedCharacters, setCompletedCharacters] = useState<string[]>([]);

  // Load stored names if available
  useEffect(() => {
    try {
      const storedP1 = localStorage.getItem("h2h_p1");
      const storedP2 = localStorage.getItem("h2h_p2");
      if (storedP1) setPlayer1Name(storedP1);
      if (storedP2) setPlayer2Name(storedP2);
    } catch {
      // localStorage fallback
    }
  }, []);

  const handleUpdatePlayers = (p1: string, p2: string) => {
    setPlayer1Name(p1);
    setPlayer2Name(p2);
    try {
      localStorage.setItem("h2h_p1", p1);
      localStorage.setItem("h2h_p2", p2);
    } catch {
      // localStorage fallback
    }
  };

  const handleCharacterCompleted = (name: string) => {
    if (!completedCharacters.includes(name)) {
      setCompletedCharacters((prev) => [...prev, name]);
    }
  };

  const handleStepSelect = (step: number) => {
    if (step >= 1 && step <= 7) {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Sticky Journey Header shown on active steps */}
      {currentStep > 1 && (
        <JourneyHeader
          currentStep={currentStep}
          player1Name={player1Name}
          player2Name={player2Name}
          onSelectStep={handleStepSelect}
        />
      )}

      {/* Main Screen Transition Canvas */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-4 py-4 sm:py-6">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <WelcomeScreen onStart={() => handleStepSelect(2)} />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <PlayerSetupScreen
                player1Name={player1Name}
                player2Name={player2Name}
                onUpdatePlayers={handleUpdatePlayers}
                onContinue={() => handleStepSelect(3)}
              />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="icebreaker"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <IcebreakerScreen
                player1Name={player1Name}
                player2Name={player2Name}
                onContinue={() => handleStepSelect(4)}
              />
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="character"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <BibleCharacterScreen
                onContinue={() => handleStepSelect(5)}
                onCharacterCompleted={handleCharacterCompleted}
              />
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div
              key="heartoraction"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <HeartOrActionScreen onContinue={() => handleStepSelect(6)} />
            </motion.div>
          )}

          {currentStep === 6 && (
            <motion.div
              key="discussion"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <MainDiscussionScreen onContinue={() => handleStepSelect(7)} />
            </motion.div>
          )}

          {currentStep === 7 && (
            <motion.div
              key="ending"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <EndingScreen
                player1Name={player1Name}
                player2Name={player2Name}
                charactersDiscussed={
                  completedCharacters.length > 0
                    ? completedCharacters
                    : ["Joseph", "David", "Abraham", "Ruth", "Moses", "Daniel", "Paul"]
                }
                onFinish={() => handleStepSelect(1)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
