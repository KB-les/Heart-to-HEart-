"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "./Button";

interface VerseCardProps {
  reference: string;
  passageText: string;
  translationNotice?: string;
  promptMessage?: string;
  illustrationTitle?: string;
  illustrationIcon?: string;
  illustrationDescription?: string;
}

export const VerseCard: React.FC<VerseCardProps> = ({
  reference,
  passageText,
  translationNotice = "New World Translation",
  promptMessage = "Let's read this passage together.",
  illustrationTitle,
  illustrationIcon,
  illustrationDescription,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-white/90 via-cream-50/80 to-emerald-50/40 backdrop-blur-xl border border-gold-300/40 p-6 sm:p-8 shadow-card text-left space-y-6">
      {/* Top Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-forest-800 text-gold-300 flex items-center justify-center shadow-md">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
              {reference}
            </h3>
            <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gold-100 text-forest-800 border border-gold-300/60">
              📖 {translationNotice}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-100/80 text-forest-800 border border-emerald-200">
            Family Bible Reading
          </span>
        </div>
      </div>

      {/* Optional Illustration Banner */}
      {illustrationTitle && (
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-800/5 border border-emerald-800/10">
          <span className="text-3xl select-none">{illustrationIcon || "🌾"}</span>
          <div>
            <h4 className="font-serif font-bold text-base text-forest-900">
              {illustrationTitle}
            </h4>
            <p className="text-xs sm:text-sm text-forest-700/90 leading-relaxed mt-0.5">
              {illustrationDescription}
            </p>
          </div>
        </div>
      )}

      {/* Reading Prompt Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-gold-100/70 to-cream-100/70 border border-gold-300/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <Sparkles className="w-5 h-5 text-gold-600 flex-shrink-0" />
          <p className="font-medium text-sm sm:text-base text-forest-900">
            {promptMessage}
          </p>
        </div>

        <Button
          variant={isOpen ? "secondary" : "gold"}
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="whitespace-nowrap flex-shrink-0"
        >
          <span>{isOpen ? "Hide Verses" : "View Scripture Text"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {/* Expandable Scripture Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-cream-300 text-forest-900 font-serif text-base sm:text-lg leading-relaxed whitespace-pre-line shadow-inner">
              {passageText}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
