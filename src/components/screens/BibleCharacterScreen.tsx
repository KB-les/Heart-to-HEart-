"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Eye,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Calendar,
  Award,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { ClueCard } from "../ui/ClueCard";
import { TimelineMilestone } from "../ui/TimelineMilestone";
import { DiscussionQuestionsList } from "../ui/DiscussionQuestionsList";
import { BIBLE_CHARACTERS, BibleCharacter } from "@/data/bibleCharacters";
import { BIBLE_CHARACTER_IMAGES } from "@/data/imageAssets";
import { useSound } from "@/context/SoundContext";

import { usePeer } from "@/context/PeerContext";

interface BibleCharacterScreenProps {
  onContinue: () => void;
  onCharacterCompleted?: (characterName: string) => void;
}

export const BibleCharacterScreen: React.FC<BibleCharacterScreenProps> = ({
  onContinue,
  onCharacterCompleted,
}) => {
  const { playSound } = useSound();

  const [characterIndex, setCharacterIndex] = useState<number>(0);
  const [revealedClues, setRevealedClues] = useState<number>(1); // starts with clue 1
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [userGuessInput, setUserGuessInput] = useState<string>("");

  const { broadcast, lastMessage, status: peerStatus } = usePeer();

  // Sync state over WebRTC
  const syncState = (idx: number, clues: number, isAns: boolean) => {
    if (peerStatus === "connected") {
      broadcast({
        type: "SYNC_CHARACTER",
        payload: { characterIndex: idx, revealedClues: clues, isAnswerRevealed: isAns },
      });
    }
  };

  // Listen for partner actions
  React.useEffect(() => {
    if (lastMessage && lastMessage.type === "SYNC_CHARACTER" && lastMessage.payload) {
      const { characterIndex: syncIdx, revealedClues: syncClues, isAnswerRevealed: syncAns } = lastMessage.payload;
      if (typeof syncIdx === "number") setCharacterIndex(syncIdx);
      if (typeof syncClues === "number") setRevealedClues(syncClues);
      if (typeof syncAns === "boolean") setIsAnswerRevealed(syncAns);
    }
  }, [lastMessage]);

  const currentCharacter: BibleCharacter = BIBLE_CHARACTERS[characterIndex];

  const handleNextClue = () => {
    playSound("pageTurn");
    if (revealedClues < currentCharacter.clues.length) {
      const nextClues = revealedClues + 1;
      setRevealedClues(nextClues);
      syncState(characterIndex, nextClues, isAnswerRevealed);
    }
  };

  const handleRevealAnswer = () => {
    playSound("celebrate");
    setIsAnswerRevealed(true);
    syncState(characterIndex, revealedClues, true);
    if (onCharacterCompleted) {
      onCharacterCompleted(currentCharacter.name);
    }
  };

  const handleNextCharacter = () => {
    playSound("click");
    if (characterIndex < BIBLE_CHARACTERS.length - 1) {
      const nextIdx = characterIndex + 1;
      setCharacterIndex(nextIdx);
      setRevealedClues(1);
      setIsAnswerRevealed(false);
      setUserGuessInput("");
      syncState(nextIdx, 1, false);
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
            Step 3 &bull; Guess the Bible Character
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-forest-800 text-cream-50">
            {characterIndex + 1} / {BIBLE_CHARACTERS.length}
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
          Who am I?
        </h2>
        <p className="text-xs sm:text-sm text-forest-700 max-w-md mx-auto">
          Read each parchment clue together and discuss who this faithful Bible figure could be!
        </p>
      </motion.div>

      {/* Main Parchment Game Container */}
      <Card variant="parchment" className="p-6 sm:p-10 space-y-8 text-left relative overflow-hidden">
        {/* Character Title / Category hint */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gold-300/40 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl select-none">📜</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Parchment Scroll #{characterIndex + 1}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
                Faithful Servant Clues
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-forest-800 bg-gold-200/60 px-3 py-1.5 rounded-full border border-gold-300">
            <span>Clue {revealedClues} of {currentCharacter.clues.length}</span>
          </div>
        </div>

        {/* CLUES LIST (Appears 1 by 1 on animated parchment cards) */}
        <div className="space-y-4">
          {currentCharacter.clues.slice(0, revealedClues).map((clue, idx) => (
            <ClueCard key={clue.number} number={clue.number} text={clue.text} index={idx} />
          ))}
        </div>

        {/* Action Controls BEFORE Reveal */}
        {!isAnswerRevealed ? (
          <div className="pt-4 border-t border-gold-300/40 space-y-6">
            {/* Optional Guess input for fun */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                value={userGuessInput}
                onChange={(e) => setUserGuessInput(e.target.value)}
                placeholder="Take a guess together... (e.g. Joseph)"
                className="w-full sm:w-auto flex-1 px-4 py-3 rounded-2xl bg-white/90 border border-gold-300 text-forest-900 font-medium focus:outline-none focus:ring-2 focus:ring-forest-700 shadow-inner"
              />

              {revealedClues < currentCharacter.clues.length && (
                <Button variant="secondary" onClick={handleNextClue} className="w-full sm:w-auto">
                  <Eye className="w-4 h-4 text-forest-700" />
                  <span>Reveal Next Clue</span>
                </Button>
              )}

              <Button variant="gold" onClick={handleRevealAnswer} className="w-full sm:w-auto shadow-md">
                <CheckCircle2 className="w-4 h-4" />
                <span>Reveal Answer</span>
              </Button>
            </div>
          </div>
        ) : (
          /* REVEALED ANSWER & DEEP LESSON SECTION */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pt-6 border-t-2 border-gold-400 space-y-8"
          >
            {/* Classical Artwork / Photographic Celebration Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gold-100 via-amber-50 to-emerald-50 border-2 border-gold-400 shadow-glow text-center space-y-4 relative overflow-hidden">
              {/* Fine Art Photographic Framing */}
              {BIBLE_CHARACTER_IMAGES[currentCharacter.id] && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full max-w-sm h-52 sm:h-60 mx-auto rounded-2xl overflow-hidden border-2 border-gold-400/80 shadow-md bg-stone-900"
                >
                  <Image
                    src={BIBLE_CHARACTER_IMAGES[currentCharacter.id].imageUrl}
                    alt={BIBLE_CHARACTER_IMAGES[currentCharacter.id].portraitAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-black/20" />
                  <div className="absolute bottom-2 left-3 right-3 text-left">
                    <p className="text-[11px] text-cream-100 italic leading-snug drop-shadow">
                      {BIBLE_CHARACTER_IMAGES[currentCharacter.id].artistNote}
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
                  Bible Character Answer
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
                  {currentCharacter.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-forest-700">
                  {currentCharacter.title}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-forest-800/90 max-w-xl mx-auto leading-relaxed pt-2">
                {currentCharacter.summary}
              </p>
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-forest-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-600" />
                <span>Life Journey & Milestones</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentCharacter.timeline.map((item, idx) => (
                  <TimelineMilestone key={idx} period={item.period} event={item.event} />
                ))}
              </div>
            </div>

            {/* Key Scriptures & Interesting Fact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Scriptures */}
              <div className="p-5 rounded-2xl bg-white/90 border border-gold-300/50 shadow-sm space-y-3">
                <h4 className="font-serif font-bold text-base text-forest-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-forest-700" />
                  <span>Key Scriptures</span>
                </h4>
                {currentCharacter.keyScriptures.map((sc, i) => (
                  <div key={i} className="text-xs space-y-0.5">
                    <span className="font-bold text-forest-900">{sc.reference}</span>
                    <p className="italic text-forest-700">&ldquo;{sc.snippet}&rdquo;</p>
                  </div>
                ))}
              </div>

              {/* Interesting Fact */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-cream-100 to-gold-50 border border-gold-300/50 shadow-sm space-y-2">
                <h4 className="font-serif font-bold text-base text-forest-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-600" />
                  <span>Interesting Gem</span>
                </h4>
                <p className="text-xs text-forest-800 leading-relaxed">
                  {currentCharacter.interestingFact}
                </p>
              </div>
            </div>

            {/* Discussion Questions */}
            <DiscussionQuestionsList questions={currentCharacter.discussionQuestions} />

            {/* Next Character / Screen Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setRevealedClues(1);
                  setIsAnswerRevealed(false);
                }}
              >
                <RotateCcw className="w-4 h-4" />
                <span>Replay Clues</span>
              </Button>

              <Button variant="gold" size="lg" onClick={handleNextCharacter}>
                <span>
                  {characterIndex < BIBLE_CHARACTERS.length - 1
                    ? `Next Character (${characterIndex + 2}/${BIBLE_CHARACTERS.length})`
                    : "Proceed to Heart or Action"}
                </span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </Card>
    </div>
  );
};
