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

// ─── Screen chapter titles — makes it feel like a storybook ─────────────────
const CHAPTER_LABELS: Record<number, string> = {
  1: "🌅 Welcome",
  2: "🌈 Getting to Know Each Other",
  3: "🌸 Discover Together",
  4: "📜 Faithful Servants",
  5: "💛 Heart or Action",
  6: "📖 Spiritual Discussion",
  7: "🌳 Closing Reflection",
};

// ─── Chapter transition variants ─────────────────────────────────────────────
const variants = {
  initial: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    scale: 0.98,
    filter: "blur(4px)",
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    scale: 0.97,
    filter: "blur(4px)",
  }),
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1); // 1 = forward, -1 = back
  const [player1Name, setPlayer1Name] = useState<string>(DEFAULT_PLAYER_1.name);
  const [player2Name, setPlayer2Name] = useState<string>(DEFAULT_PLAYER_2.name);
  const [completedCharacters, setCompletedCharacters] = useState<string[]>([]);

  useEffect(() => {
    try {
      const p1 = localStorage.getItem("h2h_p1");
      const p2 = localStorage.getItem("h2h_p2");
      if (p1) setPlayer1Name(p1);
      if (p2) setPlayer2Name(p2);
    } catch {}
  }, []);

  const handleUpdatePlayers = (p1: string, p2: string) => {
    setPlayer1Name(p1);
    setPlayer2Name(p2);
    try {
      localStorage.setItem("h2h_p1", p1);
      localStorage.setItem("h2h_p2", p2);
    } catch {}
  };

  const handleCharacterCompleted = (name: string) => {
    setCompletedCharacters((prev) =>
      prev.includes(name) ? prev : [...prev, name]
    );
  };

  const handleStepSelect = (step: number) => {
    if (step < 1 || step > 7) return;
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky header after welcome */}
      {currentStep > 1 && (
        <JourneyHeader
          currentStep={currentStep}
          player1Name={player1Name}
          player2Name={player2Name}
          onSelectStep={handleStepSelect}
        />
      )}

      {/* Chapter label — subtle storybook context */}
      {currentStep > 1 && (
        <motion.div
          key={`chapter-${currentStep}`}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center pt-4 pb-1"
        >
          <span className="text-xs font-semibold text-forest-600/70 tracking-wider uppercase">
            Chapter {currentStep} · {CHAPTER_LABELS[currentStep]}
          </span>
        </motion.div>
      )}

      {/* Main screen canvas */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-4 py-4 sm:py-6">
        <AnimatePresence mode="wait" custom={direction}>
          {currentStep === 1 && (
            <motion.div
              key="welcome"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <WelcomeScreen onStart={() => handleStepSelect(2)} />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="setup"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeartOrActionScreen
                onContinue={() => handleStepSelect(6)}
                player1Name={player1Name}
                player2Name={player2Name}
              />
            </motion.div>
          )}

          {currentStep === 6 && (
            <motion.div
              key="discussion"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <MainDiscussionScreen
                onContinue={() => handleStepSelect(7)}
                player1Name={player1Name}
                player2Name={player2Name}
              />
            </motion.div>
          )}

          {currentStep === 7 && (
            <motion.div
              key="ending"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
