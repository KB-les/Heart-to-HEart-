"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Zap,
  Sparkles,
  Layers,
  BookOpen,
  ArrowRight,
  HelpCircle,
  RotateCcw,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { HEART_OR_ACTION_SCENARIOS, HeartOrActionScenario } from "@/data/heartOrAction";
import { useSound } from "@/context/SoundContext";

interface HeartOrActionScreenProps {
  onContinue: () => void;
  onScenarioCompleted?: (id: string) => void;
}

export const HeartOrActionScreen: React.FC<HeartOrActionScreenProps> = ({
  onContinue,
  onScenarioCompleted,
}) => {
  const { playSound } = useSound();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<"Heart" | "Action" | "Both" | null>(null);

  const scenario: HeartOrActionScenario = HEART_OR_ACTION_SCENARIOS[currentIndex];

  const handleSelectChoice = (choice: "Heart" | "Action" | "Both") => {
    playSound("reveal");
    setSelectedChoice(choice);
    if (onScenarioCompleted) {
      onScenarioCompleted(scenario.id);
    }
  };

  const handleNextScenario = () => {
    playSound("click");
    if (currentIndex < HEART_OR_ACTION_SCENARIOS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedChoice(null);
    } else {
      onContinue();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gold-100 text-forest-900 border border-gold-300">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Step 4 &bull; Heart or Action
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-forest-800 text-cream-50">
            {currentIndex + 1} / {HEART_OR_ACTION_SCENARIOS.length}
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
          Heart, Action, or Both?
        </h2>
        <p className="text-xs sm:text-sm text-forest-700 max-w-md mx-auto">
          Read the scenario together. Does it primarily reflect an inner motive of the Heart, an outward Action, or Both working in harmony?
        </p>
      </motion.div>

      {/* Main Scenario Card */}
      <Card variant="glass" className="p-6 sm:p-10 space-y-8 text-left relative overflow-hidden">
        {/* Category Banner */}
        <div className="flex items-center justify-between border-b border-cream-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
            Scenario #{currentIndex + 1} &bull; {scenario.category}
          </span>
          <span className="text-xs text-forest-500 font-medium">No Right or Wrong Score</span>
        </div>

        {/* Scenario Text Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cream-100/90 to-white border border-cream-300 shadow-soft text-forest-900 font-serif text-xl sm:text-2xl leading-relaxed text-center font-medium italic">
          &ldquo;{scenario.scenario}&rdquo;
        </div>

        {/* 3 Choice Buttons */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-center text-forest-700 uppercase tracking-wider">
            Select your reflection angle to open the discussion:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Heart Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelectChoice("Heart")}
              className={`p-5 rounded-2xl flex flex-col items-center justify-center gap-2 border transition-all ${
                selectedChoice === "Heart"
                  ? "bg-rose-50 border-rose-400 ring-4 ring-rose-300 shadow-md"
                  : "bg-white/80 hover:bg-white border-cream-300 shadow-sm"
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-md">
                <Heart className="w-6 h-6 fill-white" />
              </div>
              <span className="font-serif font-bold text-lg text-forest-900">Heart</span>
              <span className="text-[11px] text-forest-600 text-center">Inner Motive & Love</span>
            </motion.button>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelectChoice("Action")}
              className={`p-5 rounded-2xl flex flex-col items-center justify-center gap-2 border transition-all ${
                selectedChoice === "Action"
                  ? "bg-sky-50 border-sky-400 ring-4 ring-sky-300 shadow-md"
                  : "bg-white/80 hover:bg-white border-cream-300 shadow-sm"
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-skyCustom-500 text-white flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 fill-white" />
              </div>
              <span className="font-serif font-bold text-lg text-forest-900">Action</span>
              <span className="text-[11px] text-forest-600 text-center">Outward Effort & Deed</span>
            </motion.button>

            {/* Both Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelectChoice("Both")}
              className={`p-5 rounded-2xl flex flex-col items-center justify-center gap-2 border transition-all ${
                selectedChoice === "Both"
                  ? "bg-emerald-50 border-emerald-400 ring-4 ring-emerald-300 shadow-md"
                  : "bg-white/80 hover:bg-white border-cream-300 shadow-sm"
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-300 flex items-center justify-center shadow-md">
                <Layers className="w-6 h-6" />
              </div>
              <span className="font-serif font-bold text-lg text-forest-900">Both</span>
              <span className="text-[11px] text-forest-600 text-center">Heart & Deed in Harmony</span>
            </motion.button>
          </div>
        </div>

        {/* REVEALED BIBLE PRINCIPLE & DISCUSSION */}
        <AnimatePresence>
          {selectedChoice && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="pt-6 border-t-2 border-gold-300 space-y-6"
            >
              {/* Selected badge banner */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-gold-100/80 border border-gold-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-700" />
                  <span className="text-xs font-bold text-forest-900">
                    You highlighted: <strong className="underline">{selectedChoice}</strong>
                  </span>
                </div>
                <span className="text-xs text-forest-700">The reward is deep conversation</span>
              </div>

              {/* Bible Principle Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-white to-cream-100 border border-gold-300 shadow-card space-y-3">
                <div className="flex items-center gap-2 text-forest-800 font-serif font-bold text-lg">
                  <BookOpen className="w-5 h-5 text-gold-600" />
                  <span>Bible Principle: {scenario.biblePrinciple.reference}</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-forest-900 leading-relaxed">
                  &ldquo;{scenario.biblePrinciple.text}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-forest-800 leading-relaxed pt-1">
                  {scenario.explanation}
                </p>
              </div>

              {/* Discussion Questions */}
              <div className="p-6 rounded-3xl bg-forest-800 text-cream-50 space-y-4 shadow-lg">
                <h4 className="font-serif font-bold text-lg text-gold-300 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-gold-400" />
                  <span>Discussion Questions for Karabelo & Yolanda</span>
                </h4>

                <div className="space-y-3">
                  {scenario.discussionQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-gold-400 text-forest-950 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-cream-100 font-medium leading-relaxed">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Scenario Button */}
              <div className="flex justify-end pt-2">
                <Button variant="gold" size="lg" onClick={handleNextScenario}>
                  <span>
                    {currentIndex < HEART_OR_ACTION_SCENARIOS.length - 1
                      ? `Next Scenario (${currentIndex + 2}/${HEART_OR_ACTION_SCENARIOS.length})`
                      : "Proceed to Main Discussion"}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};
