"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Check, ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import {
  COLOR_OPTIONS,
  ANIMAL_OPTIONS,
  NATURE_OPTIONS,
  ColorOption,
  AnimalOption,
  NatureOption,
} from "@/data/icebreaker";
import { FEELING_OPTIONS, FeelingOption } from "@/data/players";

interface IcebreakerScreenProps {
  player1Name: string;
  player2Name: string;
  onContinue: () => void;
}

interface PlayerChoice {
  color?: ColorOption;
  colorFeelings: FeelingOption[];
  animal?: AnimalOption;
  animalFeelings: FeelingOption[];
  nature?: NatureOption;
  natureFeelings: FeelingOption[];
}

export const IcebreakerScreen: React.FC<IcebreakerScreenProps> = ({
  player1Name,
  player2Name,
  onContinue,
}) => {
  const [activeStage, setActiveStage] = useState<1 | 2 | 3 | 4>(1); // 1: Color, 2: Animal, 3: Nature, 4: Summary
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1); // Turn taker

  const [p1Choice, setP1Choice] = useState<PlayerChoice>({
    colorFeelings: [],
    animalFeelings: [],
    natureFeelings: [],
  });

  const [p2Choice, setP2Choice] = useState<PlayerChoice>({
    colorFeelings: [],
    animalFeelings: [],
    natureFeelings: [],
  });

  const currentPlayerName = activePlayer === 1 ? player1Name : player2Name;
  const currentChoice = activePlayer === 1 ? p1Choice : p2Choice;
  const setCurrentChoice = activePlayer === 1 ? setP1Choice : setP2Choice;

  // Toggle feeling selection (Max 2)
  const toggleFeeling = (type: "color" | "animal" | "nature", feeling: FeelingOption) => {
    const key = `${type}Feelings` as keyof PlayerChoice;
    const currentList = currentChoice[key] as FeelingOption[];

    let updated: FeelingOption[];
    if (currentList.includes(feeling)) {
      updated = currentList.filter((f) => f !== feeling);
    } else {
      if (currentList.length >= 2) {
        updated = [currentList[1], feeling]; // cycle max 2
      } else {
        updated = [...currentList, feeling];
      }
    }

    setCurrentChoice((prev) => ({
      ...prev,
      [key]: updated,
    }));
  };

  // Next turn or next stage
  const handleStageAdvance = () => {
    if (activePlayer === 1) {
      // Switch to Player 2 turn for current question
      setActivePlayer(2);
    } else {
      // Both answered current stage, advance stage
      if (activeStage === 1) {
        setActiveStage(2);
        setActivePlayer(1);
      } else if (activeStage === 2) {
        setActiveStage(3);
        setActivePlayer(1);
      } else if (activeStage === 3) {
        setActiveStage(4);
      }
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
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gold-100 text-forest-900 border border-gold-300">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          Step 2 &bull; Connection Icebreaker
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
          Let&apos;s get to know each other
        </h2>
      </motion.div>

      {/* STAGE 1: COLOUR */}
      <AnimatePresence mode="wait">
        {activeStage === 1 && (
          <Card key="stage1" variant="glass" className="p-6 sm:p-10 space-y-8 text-left">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  Question 1 of 3
                </span>
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  What is your favourite Colour?
                </h3>
              </div>

              {/* Turn indicator */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-forest-800 text-cream-50 font-semibold text-sm shadow-md">
                <span>{activePlayer === 1 ? "🌿" : "🌸"}</span>
                <span>Turn: {currentPlayerName}</span>
              </div>
            </div>

            {/* Colour Circles */}
            <div className="space-y-4">
              <p className="text-xs font-semibold text-forest-700 uppercase tracking-wider">
                Select a shade that speaks to you:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {COLOR_OPTIONS.map((col) => {
                  const isSelected = currentChoice.color?.name === col.name;
                  return (
                    <motion.button
                      key={col.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() =>
                        setCurrentChoice((prev) => ({ ...prev, color: col }))
                      }
                      className={`p-4 rounded-2xl flex flex-col items-center gap-3 transition-all ${
                        isSelected
                          ? "bg-white ring-4 ring-forest-700 shadow-lg scale-105"
                          : "bg-white/60 hover:bg-white/90 border border-cream-300"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full shadow-inner flex items-center justify-center bg-gradient-to-tr ${col.gradient}`}
                      >
                        {isSelected && <Check className="w-6 h-6 text-white stroke-[3]" />}
                      </div>
                      <span className="text-xs font-bold text-forest-900">
                        {col.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Feeling Selection (After choosing colour) */}
            {currentChoice.color && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-3 pt-4 border-t border-cream-200"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-forest-700 uppercase tracking-wider">
                    Choose TWO feelings this colour evokes for you:
                  </p>
                  <span className="text-xs font-bold text-gold-600">
                    {currentChoice.colorFeelings.length} / 2 Selected
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {FEELING_OPTIONS.map((feeling) => {
                    const isSelected = currentChoice.colorFeelings.includes(feeling);
                    return (
                      <button
                        key={feeling}
                        type="button"
                        onClick={() => toggleFeeling("color", feeling)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-forest-800 text-cream-50 shadow-md ring-2 ring-gold-400"
                            : "bg-cream-100 text-forest-800 border border-cream-300 hover:bg-cream-200"
                        }`}
                      >
                        {feeling} {isSelected ? "✓" : ""}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Advance Button */}
            <div className="pt-4 flex justify-end">
              <Button
                variant="gold"
                disabled={!currentChoice.color || currentChoice.colorFeelings.length < 2}
                onClick={handleStageAdvance}
              >
                <span>
                  {activePlayer === 1
                    ? `Save & Pass to ${player2Name}`
                    : "Continue to Question 2"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* STAGE 2: ANIMAL */}
        {activeStage === 2 && (
          <Card key="stage2" variant="glass" className="p-6 sm:p-10 space-y-8 text-left">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  Question 2 of 3
                </span>
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  What is your favourite Animal?
                </h3>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-forest-800 text-cream-50 font-semibold text-sm shadow-md">
                <span>{activePlayer === 1 ? "🌿" : "🌸"}</span>
                <span>Turn: {currentPlayerName}</span>
              </div>
            </div>

            {/* Animal Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ANIMAL_OPTIONS.map((an) => {
                const isSelected = currentChoice.animal?.id === an.id;
                return (
                  <motion.button
                    key={an.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() =>
                      setCurrentChoice((prev) => ({ ...prev, animal: an }))
                    }
                    className={`p-4 rounded-2xl flex flex-col items-center text-center gap-2 transition-all ${
                      isSelected
                        ? "bg-white ring-4 ring-forest-700 shadow-lg scale-105"
                        : "bg-white/60 hover:bg-white/90 border border-cream-300"
                    }`}
                  >
                    <span className="text-4xl">{an.icon}</span>
                    <span className="text-xs font-bold text-forest-900">{an.name}</span>
                    <span className="text-[11px] text-forest-700/80 leading-tight">
                      {an.description}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Feelings */}
            {currentChoice.animal && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-3 pt-4 border-t border-cream-200"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-forest-700 uppercase tracking-wider">
                    Choose TWO feelings this creation inspires in you:
                  </p>
                  <span className="text-xs font-bold text-gold-600">
                    {currentChoice.animalFeelings.length} / 2 Selected
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {FEELING_OPTIONS.map((feeling) => {
                    const isSelected = currentChoice.animalFeelings.includes(feeling);
                    return (
                      <button
                        key={feeling}
                        type="button"
                        onClick={() => toggleFeeling("animal", feeling)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-forest-800 text-cream-50 shadow-md ring-2 ring-gold-400"
                            : "bg-cream-100 text-forest-800 border border-cream-300 hover:bg-cream-200"
                        }`}
                      >
                        {feeling} {isSelected ? "✓" : ""}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            <div className="pt-4 flex justify-end">
              <Button
                variant="gold"
                disabled={!currentChoice.animal || currentChoice.animalFeelings.length < 2}
                onClick={handleStageAdvance}
              >
                <span>
                  {activePlayer === 1
                    ? `Save & Pass to ${player2Name}`
                    : "Continue to Question 3"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* STAGE 3: NATURE */}
        {activeStage === 3 && (
          <Card key="stage3" variant="glass" className="p-6 sm:p-10 space-y-8 text-left">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  Question 3 of 3
                </span>
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  What is your favourite Place in Nature?
                </h3>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-forest-800 text-cream-50 font-semibold text-sm shadow-md">
                <span>{activePlayer === 1 ? "🌿" : "🌸"}</span>
                <span>Turn: {currentPlayerName}</span>
              </div>
            </div>

            {/* Nature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {NATURE_OPTIONS.map((nat) => {
                const isSelected = currentChoice.nature?.id === nat.id;
                return (
                  <motion.button
                    key={nat.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() =>
                      setCurrentChoice((prev) => ({ ...prev, nature: nat }))
                    }
                    className={`p-4 rounded-2xl flex flex-col items-center text-center gap-2 transition-all ${
                      isSelected
                        ? "bg-white ring-4 ring-forest-700 shadow-lg scale-105"
                        : "bg-white/60 hover:bg-white/90 border border-cream-300"
                    }`}
                  >
                    <span className="text-4xl">{nat.icon}</span>
                    <span className="text-xs font-bold text-forest-900">{nat.name}</span>
                    <span className="text-[11px] text-forest-700/80 leading-tight">
                      {nat.description}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Feelings */}
            {currentChoice.nature && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-3 pt-4 border-t border-cream-200"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-forest-700 uppercase tracking-wider">
                    Choose TWO feelings this nature setting brings to your heart:
                  </p>
                  <span className="text-xs font-bold text-gold-600">
                    {currentChoice.natureFeelings.length} / 2 Selected
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {FEELING_OPTIONS.map((feeling) => {
                    const isSelected = currentChoice.natureFeelings.includes(feeling);
                    return (
                      <button
                        key={feeling}
                        type="button"
                        onClick={() => toggleFeeling("nature", feeling)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-forest-800 text-cream-50 shadow-md ring-2 ring-gold-400"
                            : "bg-cream-100 text-forest-800 border border-cream-300 hover:bg-cream-200"
                        }`}
                      >
                        {feeling} {isSelected ? "✓" : ""}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            <div className="pt-4 flex justify-end">
              <Button
                variant="gold"
                disabled={!currentChoice.nature || currentChoice.natureFeelings.length < 2}
                onClick={handleStageAdvance}
              >
                <span>
                  {activePlayer === 1
                    ? `Save & Pass to ${player2Name}`
                    : "See Both Your Creations"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* STAGE 4: BEAUTIFUL DUAL SUMMARY */}
        {activeStage === 4 && (
          <Card key="stage4" variant="glass" className="p-6 sm:p-10 space-y-8 text-center">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gold-100 text-forest-900 border border-gold-300">
                ✨ Creation Reflection
              </span>
              <h3 className="font-serif text-3xl font-bold text-forest-900">
                Beautiful Unique Choices
              </h3>
              <p className="text-sm text-forest-700 max-w-md mx-auto">
                Here are the wonderful colors, creations, and feelings you both treasure today.
              </p>
            </div>

            {/* Side-by-side Player Answers Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {/* Player 1 Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-cream-100 to-white border border-gold-300/40 shadow-card space-y-5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-cream-300">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-forest-900">
                      {player1Name}
                    </h4>
                    <span className="text-xs text-forest-600 font-medium">Preferences</span>
                  </div>
                </div>

                {/* Colour */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-white border border-cream-200">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full shadow-inner bg-gradient-to-tr ${p1Choice.color?.gradient}`}
                    />
                    <span className="text-xs font-bold text-forest-900">
                      {p1Choice.color?.name}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {p1Choice.colorFeelings.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animal */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-white border border-cream-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{p1Choice.animal?.icon}</span>
                    <span className="text-xs font-bold text-forest-900">
                      {p1Choice.animal?.name}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {p1Choice.animalFeelings.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nature */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-white border border-cream-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{p1Choice.nature?.icon}</span>
                    <span className="text-xs font-bold text-forest-900">
                      {p1Choice.nature?.name}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {p1Choice.natureFeelings.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Player 2 Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-cream-100 to-white border border-gold-300/40 shadow-card space-y-5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-cream-300">
                  <span className="text-2xl">🌸</span>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-forest-900">
                      {player2Name}
                    </h4>
                    <span className="text-xs text-forest-600 font-medium">Preferences</span>
                  </div>
                </div>

                {/* Colour */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-white border border-cream-200">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full shadow-inner bg-gradient-to-tr ${p2Choice.color?.gradient}`}
                    />
                    <span className="text-xs font-bold text-forest-900">
                      {p2Choice.color?.name}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {p2Choice.colorFeelings.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animal */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-white border border-cream-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{p2Choice.animal?.icon}</span>
                    <span className="text-xs font-bold text-forest-900">
                      {p2Choice.animal?.name}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {p2Choice.animalFeelings.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nature */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-white border border-cream-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{p2Choice.nature?.icon}</span>
                    <span className="text-xs font-bold text-forest-900">
                      {p2Choice.nature?.name}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {p2Choice.natureFeelings.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ending Affirmation Quote */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-3xl bg-gradient-to-r from-gold-100 via-amber-50 to-gold-100 border border-gold-300 shadow-glow max-w-xl mx-auto space-y-2"
            >
              <Heart className="w-8 h-8 text-gold-600 mx-auto fill-gold-300" />
              <p className="font-serif text-2xl font-bold text-forest-900 italic">
                &ldquo;Jehovah has created each of us uniquely.&rdquo;
              </p>
              <p className="text-xs text-forest-700 font-medium">
                Appreciating our distinct personalities brings warmth to our family worship.
              </p>
            </motion.div>

            {/* Continue Button */}
            <div className="pt-4">
              <Button variant="gold" size="lg" onClick={onContinue}>
                <span>Proceed to Guess the Bible Character</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        )}
      </AnimatePresence>
    </div>
  );
};
