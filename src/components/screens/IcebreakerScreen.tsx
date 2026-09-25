"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Check, MessageCircle, Info, Clock, ShieldAlert } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { TurnBadge } from "../ui/TurnBadge";
import { FeelingPicker } from "../ui/FeelingPicker";
import { ReflectionQuestions } from "../ui/ReflectionQuestions";
import {
  COLOR_OPTIONS,
  ANIMAL_OPTIONS,
  NATURE_OPTIONS,
  ColorOption,
  AnimalOption,
  NatureOption,
} from "@/data/icebreaker";
import { NATURE_REAL_IMAGES, ANIMAL_REAL_IMAGES } from "@/data/imageAssets";
import { FeelingOption } from "@/data/players";
import { usePeer } from "@/context/PeerContext";

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

// ─── Main Component ──────────────────────────────────────────────────────────
export const IcebreakerScreen: React.FC<IcebreakerScreenProps> = ({
  player1Name,
  player2Name,
  onContinue,
}) => {
  // stage: 1 = colour, 2 = animal, 3 = nature, 4 = summary+reflection
  const [stage, setStage] = useState<1 | 2 | 3 | 4>(1);
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1);

  const [p1, setP1] = useState<PlayerChoice>({ colorFeelings: [], animalFeelings: [], natureFeelings: [] });
  const [p2, setP2] = useState<PlayerChoice>({ colorFeelings: [], animalFeelings: [], natureFeelings: [] });

  const { broadcast, lastMessage, status: peerStatus, myRole } = usePeer();

  // Listen for incoming partner choices over WebRTC
  React.useEffect(() => {
    if (lastMessage && lastMessage.type === "SYNC_ICEBREAKER" && lastMessage.payload) {
      const { p1: syncP1, p2: syncP2, stage: syncStage, activePlayer: syncActivePlayer } = lastMessage.payload;
      if (syncP1) setP1(syncP1);
      if (syncP2) setP2(syncP2);
      if (syncStage) setStage(syncStage);
      if (syncActivePlayer) setActivePlayer(syncActivePlayer);
    }
  }, [lastMessage]);

  const syncState = (newP1: PlayerChoice, newP2: PlayerChoice, newStage: 1 | 2 | 3 | 4, newActivePlayer: 1 | 2) => {
    if (peerStatus === "connected") {
      broadcast({
        type: "SYNC_ICEBREAKER",
        payload: { p1: newP1, p2: newP2, stage: newStage, activePlayer: newActivePlayer },
      });
    }
  };

  const isRemote = peerStatus === "connected";
  const isMyTurn = !isRemote || (myRole === "host" && activePlayer === 1) || (myRole === "guest" && activePlayer === 2);

  const currentName = activePlayer === 1 ? player1Name : player2Name;
  const currentIcon = activePlayer === 1 ? "🌿" : "🌸";
  const current = activePlayer === 1 ? p1 : p2;

  const updateCurrentChoice = (updater: (prev: PlayerChoice) => PlayerChoice) => {
    if (!isMyTurn) return; // Prevent turn stealing
    if (activePlayer === 1) {
      setP1((prev) => {
        const nextP1 = updater(prev);
        syncState(nextP1, p2, stage, activePlayer);
        return nextP1;
      });
    } else {
      setP2((prev) => {
        const nextP2 = updater(prev);
        syncState(p1, nextP2, stage, activePlayer);
        return nextP2;
      });
    }
  };

  const toggleFeeling = (type: "color" | "animal" | "nature", feeling: FeelingOption) => {
    const key = `${type}Feelings` as "colorFeelings" | "animalFeelings" | "natureFeelings";
    updateCurrentChoice((prev) => {
      const list = prev[key] as FeelingOption[];
      const updated = list.includes(feeling)
        ? list.filter((f) => f !== feeling)
        : list.length >= 2
        ? [list[1], feeling]
        : [...list, feeling];
      return { ...prev, [key]: updated };
    });
  };

  const canAdvance = () => {
    if (!isMyTurn) return false;
    if (stage === 1) return !!current.color && current.colorFeelings.length === 2;
    if (stage === 2) return !!current.animal && current.animalFeelings.length === 2;
    if (stage === 3) return !!current.nature && current.natureFeelings.length === 2;
    return false;
  };

  const handleAdvance = () => {
    if (!isMyTurn) return;
    let nextStage = stage;
    let nextActivePlayer = activePlayer;

    if (activePlayer === 1) {
      nextActivePlayer = 2;
    } else {
      if (stage < 3) {
        nextStage = (stage + 1) as 1 | 2 | 3 | 4;
        nextActivePlayer = 1;
      } else {
        nextStage = 4;
      }
    }

    setStage(nextStage);
    setActivePlayer(nextActivePlayer);
    syncState(p1, p2, nextStage, nextActivePlayer);
  };

  const stageLabels = ["Favourite Colour", "Favourite Animal", "Favourite Place in Nature"];

  const pageVariants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 text-center">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gold-100 text-forest-900 border border-gold-300">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          Step 2 · Getting to Know Each Other
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
          Let&apos;s get to know each other
        </h2>
        <p className="text-sm text-forest-700 max-w-md mx-auto">
          {isRemote
            ? "Answer these three questions — turns switch automatically on your screens!"
            : "Answer these three questions together — one person at a time."}
        </p>
      </motion.div>

      {/* Stage Progress Pills */}
      {stage < 4 && (
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                s === stage
                  ? "bg-forest-800 text-cream-50 shadow-md"
                  : s < stage
                  ? "bg-emerald-100 text-forest-800 border border-emerald-300"
                  : "bg-cream-100 text-forest-400 border border-cream-200"
              }`}
            >
              {s}. {stageLabels[s - 1]}
            </div>
          ))}
        </div>
      )}

      {/* Remote Turn Waiting Banner if NOT my turn */}
      {isRemote && stage < 4 && !isMyTurn && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-center justify-center gap-3 shadow-md"
        >
          <Clock className="w-5 h-5 text-amber-600 animate-spin" />
          <span className="text-xs sm:text-sm font-bold">
            Waiting for <strong>{currentName}</strong> to pick their {stageLabels[stage - 1].toLowerCase()} on their device...
          </span>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {/* STAGE 1 — COLOUR */}
        {stage === 1 && (
          <motion.div
            key={`stage1-p${activePlayer}`}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card variant="glass" className="p-6 sm:p-10 space-y-8 text-left relative">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Question 1 of 3</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                    What is your favourite Colour?
                  </h3>
                </div>
                <TurnBadge name={currentName} icon={currentIcon} isMyTurn={isMyTurn} isRemote={isRemote} />
              </div>

              {/* COLOUR CIRCLES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {COLOR_OPTIONS.map((col) => {
                  const isSelected = current.color?.name === col.name;
                  return (
                    <motion.button
                      key={col.name}
                      whileHover={isMyTurn ? { scale: 1.06, y: -3 } : {}}
                      whileTap={isMyTurn ? { scale: 0.94 } : {}}
                      type="button"
                      disabled={!isMyTurn}
                      onClick={() => updateCurrentChoice((prev) => ({ ...prev, color: col }))}
                      className={`relative flex flex-col items-center gap-3 p-4 rounded-2xl transition-all border-2 ${
                        isSelected
                          ? "border-forest-800 bg-white shadow-xl ring-4 ring-gold-300"
                          : "border-transparent bg-white/70 hover:bg-white hover:border-cream-300 shadow-sm"
                      } ${!isMyTurn ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                      <div
                        className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${col.gradientFrom}, ${col.gradientTo})`,
                          boxShadow: isSelected
                            ? `0 0 0 3px white, 0 0 0 5px ${col.border}, 0 8px 20px ${col.gradientFrom}60`
                            : `0 4px 12px ${col.gradientFrom}40`,
                        }}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white stroke-[3]" />
                          </motion.div>
                        )}
                      </div>

                      <div className="text-center">
                        <p className="text-xs font-bold text-forest-900 leading-tight">{col.name}</p>
                        <p className="text-[10px] text-forest-600 mt-0.5">{col.label}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* FEELING PICKER */}
              <AnimatePresence>
                {current.color && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pt-4 border-t border-cream-200"
                  >
                    <FeelingPicker
                      disabled={!isMyTurn}
                      selected={current.colorFeelings}
                      onToggle={(f) => toggleFeeling("color", f)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Advance */}
              <div className="flex justify-end pt-2">
                <Button
                  variant="gold"
                  disabled={!canAdvance()}
                  onClick={handleAdvance}
                  className={!canAdvance() ? "opacity-40 cursor-not-allowed" : ""}
                >
                  <span>
                    {isRemote
                      ? activePlayer === 1
                        ? `Submit My Selection`
                        : "Submit & Continue to Question 2"
                      : activePlayer === 1
                      ? `Save & Pass to ${player2Name}`
                      : "Continue to Question 2"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* STAGE 2 — ANIMAL */}
        {stage === 2 && (
          <motion.div
            key={`stage2-p${activePlayer}`}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card variant="glass" className="p-6 sm:p-10 space-y-8 text-left">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Question 2 of 3</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                    What is your favourite Animal?
                  </h3>
                </div>
                <TurnBadge name={currentName} icon={currentIcon} isMyTurn={isMyTurn} isRemote={isRemote} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ANIMAL_OPTIONS.map((an) => {
                  const isSelected = current.animal?.id === an.id;
                  const realImg = ANIMAL_REAL_IMAGES[an.id];
                  return (
                    <motion.button
                      key={an.id}
                      whileHover={isMyTurn ? { scale: 1.03, y: -2 } : {}}
                      whileTap={isMyTurn ? { scale: 0.97 } : {}}
                      type="button"
                      disabled={!isMyTurn}
                      onClick={() => updateCurrentChoice((prev) => ({ ...prev, animal: an }))}
                      className={`group flex flex-col items-center text-center gap-2 p-3.5 rounded-2xl transition-all border-2 overflow-hidden ${
                        isSelected
                          ? "border-forest-800 bg-white shadow-xl ring-4 ring-gold-300"
                          : "border-cream-200/80 bg-white/80 hover:bg-white hover:border-gold-300 shadow-sm"
                      } ${!isMyTurn ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                      {/* Real Wildlife Photo */}
                      {realImg ? (
                        <div className="relative w-full h-24 rounded-xl overflow-hidden border border-cream-200 shadow-inner bg-cream-100">
                          <Image
                            src={realImg.imageUrl}
                            alt={realImg.alt}
                            fill
                            sizes="(max-width: 640px) 50vw, 200px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <span className="text-4xl">{an.icon}</span>
                      )}
                      <p className="text-xs font-bold text-forest-900 mt-0.5">{an.name}</p>
                      <p className="text-[10px] text-forest-600 leading-tight">{an.description}</p>
                      {an.scriptureSnippet && (
                        <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-gold-100 text-gold-800 border border-gold-200">
                          {an.scriptureSnippet}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {current.animal && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pt-4 border-t border-cream-200"
                  >
                    <FeelingPicker
                      disabled={!isMyTurn}
                      selected={current.animalFeelings}
                      onToggle={(f) => toggleFeeling("animal", f)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-end pt-2">
                <Button
                  variant="gold"
                  disabled={!canAdvance()}
                  onClick={handleAdvance}
                  className={!canAdvance() ? "opacity-40 cursor-not-allowed" : ""}
                >
                  <span>
                    {isRemote
                      ? activePlayer === 1
                        ? `Submit My Selection`
                        : "Submit & Continue to Question 3"
                      : activePlayer === 1
                      ? `Save & Pass to ${player2Name}`
                      : "Continue to Question 3"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* STAGE 3 — NATURE */}
        {stage === 3 && (
          <motion.div
            key={`stage3-p${activePlayer}`}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card variant="glass" className="p-6 sm:p-10 space-y-8 text-left">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Question 3 of 3</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                    What is your favourite Place in Nature?
                  </h3>
                </div>
                <TurnBadge name={currentName} icon={currentIcon} isMyTurn={isMyTurn} isRemote={isRemote} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {NATURE_OPTIONS.map((nat) => {
                  const isSelected = current.nature?.id === nat.id;
                  const realImg = NATURE_REAL_IMAGES[nat.id];
                  return (
                    <motion.button
                      key={nat.id}
                      whileHover={isMyTurn ? { scale: 1.03, y: -2 } : {}}
                      whileTap={isMyTurn ? { scale: 0.97 } : {}}
                      type="button"
                      disabled={!isMyTurn}
                      onClick={() => updateCurrentChoice((prev) => ({ ...prev, nature: nat }))}
                      className={`group relative flex flex-col items-center text-center gap-2 p-3.5 rounded-2xl overflow-hidden transition-all border-2 ${
                        isSelected
                          ? "border-forest-800 bg-white shadow-xl ring-4 ring-gold-300"
                          : "border-cream-200/80 bg-white/80 hover:bg-white hover:border-gold-300 shadow-sm"
                      } ${!isMyTurn ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                      {/* Real Nature Photo */}
                      {realImg ? (
                        <div className="relative w-full h-24 rounded-xl overflow-hidden border border-cream-200 shadow-inner bg-cream-100">
                          <Image
                            src={realImg.imageUrl}
                            alt={realImg.alt}
                            fill
                            sizes="(max-width: 640px) 50vw, 200px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <span className="text-4xl">{nat.icon}</span>
                      )}
                      <p className="text-xs font-bold text-forest-900 mt-0.5">{nat.name}</p>
                      <p className="text-[10px] text-forest-600 leading-tight">{nat.description}</p>
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {current.nature && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pt-4 border-t border-cream-200"
                  >
                    <FeelingPicker
                      disabled={!isMyTurn}
                      selected={current.natureFeelings}
                      onToggle={(f) => toggleFeeling("nature", f)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-end pt-2">
                <Button
                  variant="gold"
                  disabled={!canAdvance()}
                  onClick={handleAdvance}
                  className={!canAdvance() ? "opacity-40 cursor-not-allowed" : ""}
                >
                  <span>
                    {isRemote
                      ? activePlayer === 1
                        ? `Submit My Selection`
                        : "Submit & See Our Answers Together"
                      : activePlayer === 1
                      ? `Save & Pass to ${player2Name}`
                      : "See Our Answers Together"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* STAGE 4 — SUMMARY + REFLECTION */}
        {stage === 4 && (
          <motion.div
            key="stage4"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <Card variant="glass" className="p-6 sm:p-10 space-y-8 text-center">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gold-100 text-forest-900 border border-gold-300">
                  ✨ Beautiful Unique Choices
                </span>
                <h3 className="font-serif text-3xl font-bold text-forest-900">
                  Your Answers, Side by Side
                </h3>
                <p className="text-sm text-forest-700 max-w-md mx-auto">
                  Here is what each of you chose today. Notice what you share — and celebrate what makes you each unique.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {[
                  { choice: p1, name: player1Name, icon: "🌿" },
                  { choice: p2, name: player2Name, icon: "🌸" },
                ].map(({ choice, name, icon }) => (
                  <div
                    key={name}
                    className="p-6 rounded-3xl bg-gradient-to-br from-cream-50 to-white border border-gold-200 shadow-card space-y-4"
                  >
                    <div className="flex items-center gap-2.5 pb-3 border-b border-cream-200">
                      <span className="text-2xl">{icon}</span>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-forest-900">{name}</h4>
                        <span className="text-xs text-forest-600 font-medium">Choices today</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-cream-200">
                      <div
                        className="w-10 h-10 rounded-full flex-shrink-0 shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${choice.color?.gradientFrom ?? "#ccc"}, ${choice.color?.gradientTo ?? "#eee"})`,
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-forest-900 truncate">
                          🎨 {choice.color?.name ?? "—"}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {choice.colorFeelings.map((f) => (
                            <span key={f} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-cream-200">
                      <span className="text-3xl flex-shrink-0">{choice.animal?.icon ?? "—"}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-forest-900 truncate">
                          {choice.animal?.name ?? "—"}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {choice.animalFeelings.map((f) => (
                            <span key={f} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-cream-200">
                      <span className="text-3xl flex-shrink-0">{choice.nature?.icon ?? "—"}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-forest-900 truncate">
                          🌿 {choice.nature?.name ?? "—"}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {choice.natureFeelings.map((f) => (
                            <span key={f} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-forest-800 text-cream-50">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="p-6 rounded-3xl border border-gold-300 shadow-glow max-w-xl mx-auto space-y-2"
                style={{ background: "linear-gradient(135deg, #FEF7DF, #FDFBF7, #FEF7DF)" }}
              >
                <span className="text-3xl">💛</span>
                <p className="font-serif text-xl sm:text-2xl font-bold text-forest-900 italic">
                  &ldquo;Jehovah has created each of us uniquely.&rdquo;
                </p>
                <p className="text-xs text-forest-700">
                  Appreciating your differences is part of appreciating His creativity.
                </p>
              </motion.div>
            </Card>

            <Card variant="parchment" className="p-6 sm:p-10 space-y-8 text-left">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-gold-600" />
                  What Your Choices May Suggest
                </h3>

                <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-gold-50 border border-gold-200 text-xs text-forest-700 font-medium">
                  <Info className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <p>
                    These reflections are simply <strong>conversation starters</strong> — not psychological facts or scientific truths. They are designed to help you learn a little more about each other and enjoy a warm discussion.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-lg text-forest-900 flex items-center gap-2">
                    <span className="text-xl">🎨</span> Favourite Colour
                  </h4>
                  <p className="text-xs text-forest-700 italic bg-cream-100/80 p-3 rounded-xl border border-cream-200">
                    Your favourite colour may reflect how you would like others to perceive you — or the energy you feel most drawn to right now.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: player1Name, icon: "🌿", choice: p1 },
                      { name: player2Name, icon: "🌸", choice: p2 },
                    ].map(({ name, icon, choice }) => (
                      <div key={name} className="p-4 rounded-2xl bg-white border border-cream-200 space-y-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-full shadow-md flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${choice.color?.gradientFrom ?? "#ccc"}, ${choice.color?.gradientTo ?? "#eee"})`,
                            }}
                          />
                          <p className="text-xs font-bold text-forest-900">
                            {icon} {name} — {choice.color?.name}
                          </p>
                        </div>
                        <p className="text-xs text-forest-700 leading-relaxed">
                          {choice.color?.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ReflectionQuestions questions={[
                    "What made you choose this colour?",
                    "Does the description feel true to how you see yourself?",
                    "Did your partner's colour choice surprise you?",
                  ]} />
                </div>

                <div className="border-t border-gold-200" />

                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-lg text-forest-900 flex items-center gap-2">
                    <span className="text-xl">🐾</span> Favourite Animal
                  </h4>
                  <p className="text-xs text-forest-700 italic bg-cream-100/80 p-3 rounded-xl border border-cream-200">
                    Your favourite animal may reflect the qualities you appreciate most in how others relate to you — or qualities you admire and wish to have.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: player1Name, icon: "🌿", choice: p1 },
                      { name: player2Name, icon: "🌸", choice: p2 },
                    ].map(({ name, icon, choice }) => {
                      const animalImg = choice.animal ? ANIMAL_REAL_IMAGES[choice.animal.id] : null;
                      return (
                        <div key={name} className="p-4 rounded-2xl bg-white border border-cream-200 space-y-2">
                          <div className="flex items-center gap-3">
                            {animalImg ? (
                              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cream-200 flex-shrink-0">
                                <Image
                                  src={animalImg.imageUrl}
                                  alt={animalImg.alt}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <span className="text-2xl">{choice.animal?.icon}</span>
                            )}
                            <div>
                              <p className="text-xs font-bold text-forest-900">
                                {icon} {name}
                              </p>
                              <p className="text-xs font-medium text-gold-700">
                                {choice.animal?.name}
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-forest-700 leading-relaxed pt-1">
                            {choice.animal?.reflection}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <ReflectionQuestions questions={[
                    "Does your animal's description match how you like to be treated?",
                    "What do you love most about this creature?",
                    "What does your partner's choice teach you about them?",
                  ]} />
                </div>

                <div className="border-t border-gold-200" />

                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-lg text-forest-900 flex items-center gap-2">
                    <span className="text-xl">🌿</span> Favourite Place in Nature
                  </h4>
                  <p className="text-xs text-forest-700 italic bg-cream-100/80 p-3 rounded-xl border border-cream-200">
                    Your favourite place in nature may reflect how you personally relate to Jehovah&apos;s creation — and how you feel closest to Him.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: player1Name, icon: "🌿", choice: p1 },
                      { name: player2Name, icon: "🌸", choice: p2 },
                    ].map(({ name, icon, choice }) => {
                      const natureImg = choice.nature ? NATURE_REAL_IMAGES[choice.nature.id] : null;
                      return (
                        <div key={name} className="p-4 rounded-2xl bg-white border border-cream-200 space-y-2">
                          <div className="flex items-center gap-3">
                            {natureImg ? (
                              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cream-200 flex-shrink-0">
                                <Image
                                  src={natureImg.imageUrl}
                                  alt={natureImg.alt}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <span className="text-2xl">{choice.nature?.icon}</span>
                            )}
                            <div>
                              <p className="text-xs font-bold text-forest-900">
                                {icon} {name}
                              </p>
                              <p className="text-xs font-medium text-forest-700">
                                {choice.nature?.name}
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-forest-700 leading-relaxed pt-1">
                            {choice.nature?.reflection}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <ReflectionQuestions questions={[
                    "What does Jehovah's creation of this place say about His personality?",
                    "Why does this environment make you feel peaceful or close to Him?",
                    "What does your partner's choice reveal about how they experience Jehovah?",
                  ]} />
                </div>
              </div>

              <div className="pt-6 text-center">
                <Button variant="gold" size="lg" onClick={onContinue} className="shadow-lg">
                  <span>Proceed to Guess the Bible Character</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

