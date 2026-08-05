"use client";

import React from "react";
import { HelpCircle } from "lucide-react";

interface DiscussionQuestionsListProps {
  title?: string;
  questions: string[];
}

export const DiscussionQuestionsList: React.FC<DiscussionQuestionsListProps> = ({
  title = "Family Worship Discussion Prompts",
  questions,
}) => (
  <div className="p-6 rounded-3xl bg-forest-800 text-cream-50 space-y-4 shadow-lg">
    <h4 className="font-serif font-bold text-lg text-gold-300 flex items-center gap-2">
      <HelpCircle className="w-5 h-5 text-gold-400" />
      <span>{title}</span>
    </h4>

    <div className="space-y-3">
      {questions.map((q, i) => (
        <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
          <span className="w-5 h-5 rounded-full bg-gold-400 text-forest-950 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
            {i + 1}
          </span>
          <p className="text-cream-100 font-medium leading-relaxed">{q}</p>
        </div>
      ))}
    </div>
  </div>
);