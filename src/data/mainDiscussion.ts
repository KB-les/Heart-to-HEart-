export interface DiscussionCard {
  id: string;
  question: string;
  subtext?: string;
  scriptureAnchor?: string;
  reflectionPrompt: string;
}

export interface AdditionalScripture {
  id: string;
  reference: string;
  text: string;
  illustrationTitle: string;
  illustrationIcon: string;
  illustrationDescription: string;
  discussionPoints: string[];
  practicalApplication: string;
}

export interface MainDiscussionTheme {
  themeTitle: string;
  themeSubtitle: string;
  keyPassage: {
    reference: string;
    translationNotice: string;
    text: string;
    promptMessage: string;
  };
  farmerIllustration: {
    title: string;
    icon: string;
    description: string;
    lesson: string;
  };
  mainDiscussionCards: DiscussionCard[];
  additionalScriptures: AdditionalScripture[];
}

export const PATIENCE_THEME: MainDiscussionTheme = {
  themeTitle: "Why Does Jehovah Value Patience?",
  themeSubtitle: "Learning from creation, scriptures, and Jehovah's own quiet endurance.",
  keyPassage: {
    reference: "James 5:7-11",
    translationNotice: "New World Translation (NWT)",
    text: `Be patient then, brothers, until the presence of the Lord. Look! The farmer keeps waiting for the precious fruit of the earth, exercising patience over it until the early rain and the late rain come. You too exercise patience; make your hearts firm, because the presence of the Lord has drawn near.

Do not grumble against one another, brothers, so that you may not be judged. Look! The Judge is standing before the doors. Brothers, take as a pattern of the suffering of evil and the exercising of patience the prophets who spoke in the name of Jehovah. Look! We consider happy those who have persevered. You have heard of the endurance of Job and have seen the outcome Jehovah gave, that Jehovah is very tender in affection and merciful.`,
    promptMessage: "Let's open our Bibles or JW Library app and read this passage together.",
  },
  farmerIllustration: {
    title: "The Farmer Waiting for Rain",
    icon: "🌱🌧️",
    description: "A peaceful farmer plants seed in soft soil. He cannot force the seed to sprout overnight, nor can he pull the rain clouds from the sky. He cares for the soil, watches the sky with hope, and trusts the seasons.",
    lesson: "Patience is not passive waiting; it is active trust while Jehovah brings things to fruitfulness in His time.",
  },
  mainDiscussionCards: [
    {
      id: "farmer-lesson",
      question: "What does the farmer teach us about patience?",
      subtext: "Think about the work done before and during the wait.",
      scriptureAnchor: "James 5:7",
      reflectionPrompt: "Farmers plant seeds and then trust nature's cycle. What spiritual 'seeds' are we waiting on Jehovah to bless in our lives?",
    },
    {
      id: "why-waiting-difficult",
      question: "Why is waiting difficult in today's world?",
      subtext: "Reflect on how modern pace affects our hearts.",
      scriptureAnchor: "James 5:8",
      reflectionPrompt: "In a world where everything is instant, how can we keep our hearts calm and firm when Jehovah's timing is different from ours?",
    },
    {
      id: "jehovah-patience",
      question: "How does Jehovah Himself show patience?",
      subtext: "Consider His patience toward mankind and toward us individually.",
      scriptureAnchor: "James 5:11",
      reflectionPrompt: "Jehovah is 'very tender in affection and merciful.' How has His patience changed your life personally?",
    },
    {
      id: "weekly-imitation",
      question: "What quality from today's discussion would you like to imitate this week?",
      subtext: "Personal application for both of you.",
      scriptureAnchor: "James 5:10",
      reflectionPrompt: "Share one practical area this week (in our relationship, work, or congregation) where we can show extra patience.",
    },
  ],
  additionalScriptures: [
    {
      id: "psalm-37-7",
      reference: "Psalm 37:7",
      text: "Keep silent before Jehovah and wait expectantly for him. Do not show yourself heated up over the man who succeeds in carrying out his schemes.",
      illustrationTitle: "The Quiet Harbour",
      illustrationIcon: "⛵🌅",
      illustrationDescription: "A boat anchored safely in a calm harbor while winds blow far out at sea. Being silent before Jehovah brings calm within.",
      discussionPoints: [
        "What does it mean to 'keep silent before Jehovah' when we feel anxious or eager?",
        "How does waiting expectantly prevent us from feeling frustrated by world events or others?",
      ],
      practicalApplication: "When feeling impatient, take a quiet moment in prayer together, entrusting the situation into Jehovah's hands.",
    },
    {
      id: "ecclesiastes-7-8",
      reference: "Ecclesiastes 7:8",
      text: "Better is the end of a matter afterward than its beginning. Better is one who is patient than one who is haughty in spirit.",
      illustrationTitle: "The Finished Tapestry",
      illustrationIcon: "🧵✨",
      illustrationDescription: "At the start, loose threads look tangled and uncertain. But at the end, a beautiful design is revealed.",
      discussionPoints: [
        "Why is the end of a matter often so much sweeter than the beginning?",
        "How is patience connected to humility, while impatience is connected to pride?",
      ],
      practicalApplication: "Celebrate small spiritual milestones together, remembering that Jehovah is completing a beautiful work in us.",
    },
  ],
};
