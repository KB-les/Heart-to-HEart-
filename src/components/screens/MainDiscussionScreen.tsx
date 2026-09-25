"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  CloudRain,
  HeartHandshake,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { VerseCard } from "../ui/VerseCard";
import { DiscussionCard } from "../ui/DiscussionCard";
import { PATIENCE_THEME, DiscussionCard as DiscussionCardType, AdditionalScripture } from "@/data/mainDiscussion";
import { DEVOTIONAL_IMAGES } from "@/data/imageAssets";
import { useSound } from "@/context/SoundContext";

import { usePeer } from "@/context/PeerContext";

interface MainDiscussionScreenProps {
  onContinue: () => void;
  player1Name?: string;
  player2Name?: string;
}

export const MainDiscussionScreen: React.FC<MainDiscussionScreenProps> = ({
  onContinue,
  player1Name = "Player 1",
  player2Name = "Player 2",
}) => {
  const { playSound } = useSound();
  const [activeTab, setActiveTab] = useState<"james" | "psalm" | "ecclesiastes">("james");
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const { broadcast, lastMessage, status: peerStatus } = usePeer();

  const syncState = (tab: "james" | "psalm" | "ecclesiastes", cardIdx: number) => {
    if (peerStatus === "connected") {
      broadcast({
        type: "SYNC_DISCUSSION",
        payload: { activeTab: tab, activeCardIndex: cardIdx },
      });
    }
  };

  React.useEffect(() => {
    if (lastMessage && lastMessage.type === "SYNC_DISCUSSION" && lastMessage.payload) {
      const { activeTab: syncTab, activeCardIndex: syncCardIdx } = lastMessage.payload;
      if (syncTab) setActiveTab(syncTab);
      if (typeof syncCardIdx === "number") setActiveCardIndex(syncCardIdx);
    }
  }, [lastMessage]);

  const theme = PATIENCE_THEME;

  const handleTabChange = (tab: "james" | "psalm" | "ecclesiastes") => {
    playSound("click");
    setActiveTab(tab);
    syncState(tab, activeCardIndex);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-3"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1 rounded-full bg-gold-100 text-forest-900 border border-gold-300">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          Step 5 &bull; Main Spiritual Discussion
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 leading-tight">
          {theme.themeTitle}
        </h2>
        <p className="text-sm sm:text-base text-forest-700 max-w-lg mx-auto italic font-medium">
          &ldquo;{theme.themeSubtitle}&rdquo;
        </p>
      </motion.div>

      {/* Illustrated Farmer Card */}
      <Card variant="glass" className="p-6 sm:p-10 space-y-6 text-left relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-gradient-to-br from-emerald-900/10 via-cream-100 to-amber-100/50 border border-gold-300/60 shadow-soft">
          {/* Real Photography of Golden Wheat Waiting for Rain */}
          <div className="relative w-full sm:w-44 h-36 rounded-2xl overflow-hidden shadow-md border border-gold-400/40 flex-shrink-0 bg-cream-200">
            <Image
              src={DEVOTIONAL_IMAGES.farmerPatience.imageUrl}
              alt={DEVOTIONAL_IMAGES.farmerPatience.alt}
              fill
              sizes="(max-width: 640px) 100vw, 176px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-gold-200 bg-forest-900/80 px-2 py-0.5 rounded-full">
              James 5:7
            </span>
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Theme Illustration
            </span>
            <h3 className="font-serif text-2xl font-bold text-forest-900">
              {theme.farmerIllustration.title}
            </h3>
            <p className="text-xs sm:text-sm text-forest-800 leading-relaxed">
              {theme.farmerIllustration.description}
            </p>
            <p className="text-xs font-semibold text-forest-900 italic pt-1">
              &bull; {theme.farmerIllustration.lesson}
            </p>
          </div>
        </div>

        {/* Navigation Tabs for Scripture Passages */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-b border-cream-200 pb-4">
          <button
            onClick={() => handleTabChange("james")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "james"
                ? "bg-forest-800 text-cream-50 shadow-md ring-2 ring-gold-400"
                : "bg-white/80 text-forest-800 hover:bg-white border border-cream-300"
            }`}
          >
            📖 James 5:7-11 (Main)
          </button>
          <button
            onClick={() => handleTabChange("psalm")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "psalm"
                ? "bg-forest-800 text-cream-50 shadow-md ring-2 ring-gold-400"
                : "bg-white/80 text-forest-800 hover:bg-white border border-cream-300"
            }`}
          >
            ⛵ Psalm 37:7
          </button>
          <button
            onClick={() => handleTabChange("ecclesiastes")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "ecclesiastes"
                ? "bg-forest-800 text-cream-50 shadow-md ring-2 ring-gold-400"
                : "bg-white/80 text-forest-800 hover:bg-white border border-cream-300"
            }`}
          >
            🧵 Ecclesiastes 7:8
          </button>
        </div>

        {/* TAB 1: JAMES 5:7-11 */}
        {activeTab === "james" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Encouraging Verse Card */}
            <VerseCard
              reference={theme.keyPassage.reference}
              passageText={theme.keyPassage.text}
              translationNotice={theme.keyPassage.translationNotice}
              promptMessage={theme.keyPassage.promptMessage}
            />

            {/* 4 Guided Discussion Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-xl text-forest-900 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-gold-600" />
                  <span>Discussion Cards for {player1Name} &amp; {player2Name}</span>
                </h4>
                <span className="text-xs font-semibold text-forest-600">
                  Card {activeCardIndex + 1} of {theme.mainDiscussionCards.length}
                </span>
              </div>

              {/* Active Discussion Card Carousel */}
              <AnimatePresence mode="wait">
                {theme.mainDiscussionCards.map((card, index) => {
                  if (index !== activeCardIndex) return null;
                  return (
                    <DiscussionCard
                      key={card.id}
                      question={card.question}
                      subtext={card.subtext}
                      scriptureAnchor={card.scriptureAnchor}
                      reflectionPrompt={card.reflectionPrompt}
                      index={index}
                      total={theme.mainDiscussionCards.length}
                      canPrevious={activeCardIndex > 0}
                      canNext={activeCardIndex < theme.mainDiscussionCards.length - 1}
                      onPrevious={() => {
                        const next = activeCardIndex - 1;
                        setActiveCardIndex(next);
                        syncState(activeTab, next);
                      }}
                      onNext={() => {
                        const next = activeCardIndex + 1;
                        setActiveCardIndex(next);
                        syncState(activeTab, next);
                      }}
                      onSelect={(i) => {
                        setActiveCardIndex(i);
                        syncState(activeTab, i);
                      }}
                    />
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* TAB 2: PSALM 37:7 */}
        {activeTab === "psalm" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <VerseCard
              reference={theme.additionalScriptures[0].reference}
              passageText={theme.additionalScriptures[0].text}
              illustrationTitle={theme.additionalScriptures[0].illustrationTitle}
              illustrationIcon={theme.additionalScriptures[0].illustrationIcon}
              illustrationDescription={theme.additionalScriptures[0].illustrationDescription}
              illustrationImage={DEVOTIONAL_IMAGES.quietHarbor.imageUrl}
            />

            <div className="p-6 rounded-3xl bg-forest-800 text-cream-50 space-y-4 shadow-lg">
              <h4 className="font-serif font-bold text-lg text-gold-300 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-gold-400" />
                <span>Discussion Points</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-cream-100">
                {theme.additionalScriptures[0].discussionPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-gold-400">&bull;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-gold-100 border border-gold-300 text-forest-900 text-xs sm:text-sm font-medium flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <div>
                <strong>Practical Application:</strong>{" "}
                {theme.additionalScriptures[0].practicalApplication}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: ECCLESIASTES 7:8 */}
        {activeTab === "ecclesiastes" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <VerseCard
              reference={theme.additionalScriptures[1].reference}
              passageText={theme.additionalScriptures[1].text}
              illustrationTitle={theme.additionalScriptures[1].illustrationTitle}
              illustrationIcon={theme.additionalScriptures[1].illustrationIcon}
              illustrationDescription={theme.additionalScriptures[1].illustrationDescription}
              illustrationImage={DEVOTIONAL_IMAGES.finishedTapestry.imageUrl}
            />

            <div className="p-6 rounded-3xl bg-forest-800 text-cream-50 space-y-4 shadow-lg">
              <h4 className="font-serif font-bold text-lg text-gold-300 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-gold-400" />
                <span>Discussion Points</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-cream-100">
                {theme.additionalScriptures[1].discussionPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-gold-400">&bull;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-gold-100 border border-gold-300 text-forest-900 text-xs sm:text-sm font-medium flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <div>
                <strong>Practical Application:</strong>{" "}
                {theme.additionalScriptures[1].practicalApplication}
              </div>
            </div>
          </motion.div>
        )}

        {/* Proceed to Ending Screen */}
        <div className="pt-6 border-t border-cream-200 flex justify-end">
          <Button variant="gold" size="lg" onClick={onContinue}>
            <span>Complete Worship & View Spiritual Gems</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
