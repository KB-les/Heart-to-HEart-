"use client";

import React from "react";

interface ReflectionQuestionsProps {
  questions: string[];
}

export const ReflectionQuestions: React.FC<ReflectionQuestionsProps> = ({ questions }) => (
  <div className="p-4 rounded-2xl bg-forest-800/5 border border-forest-800/10 space-y-2">
    <p className="text-[10px] font-bold uppercase tracking-wider text-gold-700">Conversation starters:</p>
    <ul className="space-y-1.5">
      {questions.map((q, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-forest-800 font-medium">
          <span className="text-gold-500 font-bold mt-0.5">•</span>
          <span>{q}</span>
        </li>
      ))}
    </ul>
  </div>
);