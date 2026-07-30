export interface HeartOrActionScenario {
  id: string;
  category: string;
  scenario: string;
  biblePrinciple: {
    reference: string;
    text: string;
  };
  explanation: string;
  discussionQuestions: string[];
}

export const HEART_OR_ACTION_SCENARIOS: HeartOrActionScenario[] = [
  {
    id: "commenting-praise",
    category: "Motives & Praise",
    scenario: "A brother comments at every meeting because he enjoys receiving praise from others.",
    biblePrinciple: {
      reference: "1 Samuel 16:7",
      text: "For God sees not as man sees, for man sees what appears to the eyes, but Jehovah sees into the heart.",
    },
    explanation: "While commenting at meetings is a commendable action, Jehovah looks closely at the motive in our hearts. True devotion comes from a desire to glorify Jehovah and encourage the congregation.",
    discussionQuestions: [
      "Why are both clean motives (Heart) and active participation (Action) valuable to Jehovah?",
      "How can we examine our own hearts before preparing comments to make sure our motive is love?",
    ],
  },
  {
    id: "offering-apology",
    category: "Peacekeeping",
    scenario: "A sister realizes she spoke harshly during a busy afternoon, so she immediately sends a warm text message apologizing and asking for forgiveness.",
    biblePrinciple: {
      reference: "Matthew 5:23-24",
      text: "First make your peace with your brother, and then come and offer your gift.",
    },
    explanation: "Humble apologies flow from a tender heart that values peace over pride. The action of making peace restores harmony and reflects Jehovah's loving spirit.",
    discussionQuestions: [
      "What makes it feel peaceful when a loved one is quick to apologize?",
      "How does keeping a humble heart make taking action to say 'I'm sorry' much easier?",
    ],
  },
  {
    id: "generous-hospitality",
    category: "Hospitality",
    scenario: "A couple prepares a warm meal for visiting speakers, even though their own week has been very exhausting.",
    biblePrinciple: {
      reference: "Hebrews 13:2",
      text: "Do not forget hospitality, for through it some unknowingly entertained angels.",
    },
    explanation: "Hospitality involves physical effort (Action), but its true warmth comes from a generous, loving heart (Heart). Jehovah deeply appreciates self-sacrificing kindness.",
    discussionQuestions: [
      "What is your favorite memory of showing or receiving warm hospitality?",
      "How does Jehovah refresh us when we use our energy to host and encourage others?",
    ],
  },
  {
    id: "quiet-cleanup",
    category: "Unseen Service",
    scenario: "A brother quietly cleans and wipes down Kingdom Hall seats after a meeting without asking anyone to notice him.",
    biblePrinciple: {
      reference: "Colossians 3:23",
      text: "Whatever you are doing, work at it whole-souled as to Jehovah, and not to men.",
    },
    explanation: "Unseen acts of service reflect a heart that seeks approval from Jehovah alone. When our actions are done whole-souled for God, they bring deep quiet joy.",
    discussionQuestions: [
      "How does knowing Jehovah sees unseen acts of kindness make you feel?",
      "What small unseen things can we do for each other at home that bring joy?",
    ],
  },
  {
    id: "patient-listening",
    category: "Empathy",
    scenario: "A friend is going through a tough day, and another sister sits quietly listening without interrupting or offering quick advice.",
    biblePrinciple: {
      reference: "James 1:19",
      text: "Be quick to listen, slow to speak, slow to become wrathful.",
    },
    explanation: "Active listening is an action powered by an empathetic heart. Restraining our desire to give advice right away creates a safe haven for others to open up.",
    discussionQuestions: [
      "Why is patient listening sometimes more comforting than offering solutions?",
      "How can we practice being 'quick to listen' with each other in our daily routine?",
    ],
  },
  {
    id: "regular-pioneer-routine",
    category: "Zeal & Purpose",
    scenario: "A pioneer stays out in public witnessing in the morning rain because they love helping people learn about God's Kingdom.",
    biblePrinciple: {
      reference: "2 Corinthians 9:7",
      text: "Let each one do just as he has resolved in his heart, not grudgingly or under compulsion, for God loves a cheerful giver.",
    },
    explanation: "Consistency in ministry requires discipline and effort (Action), but perseverance stems from love for Jehovah and love for neighbors (Heart).",
    discussionQuestions: [
      "What helps keep our love for the ministry fresh and joyful even in challenging weather?",
      "How can we encourage each other's spiritual goals in ministry?",
    ],
  },
  {
    id: "forgiving-offense",
    category: "Forgiveness",
    scenario: "Someone makes an insensitive comment at a social gathering, and a brother decides in his mind to let it pass without holding a grudge.",
    biblePrinciple: {
      reference: "Proverbs 19:11",
      text: "The insight of a man certainly slows down his anger, and it is beauty on his part to overlook an offense.",
    },
    explanation: "Overlooking an offense is an internal victory of the heart. It prevents minor misunderstandings from disrupting warm relationships.",
    discussionQuestions: [
      "Why does letting go of minor offenses protect our personal peace?",
      "How does Jehovah's willingness to freely forgive inspire our attitude toward others?",
    ],
  },
  {
    id: "preparing-family-worship",
    category: "Spiritual Food",
    scenario: "Taking time during the week to look up uplifting videos, scriptures, and illustrations to make family worship memorable.",
    biblePrinciple: {
      reference: "Deuteronomy 6:6-7",
      text: "These words that I am commanding you today must be on your heart, and you must instill them in your sons...",
    },
    explanation: "Preparation takes time and thought (Action), but it springs from a warm desire to help those we love draw close to Jehovah (Heart).",
    discussionQuestions: [
      "What makes family worship feel like a joyful highlight of the week?",
      "What creative ideas would you love to try together in future worship sessions?",
    ],
  },
  {
    id: "comforting-depressed",
    category: "Consolation",
    scenario: "Sending a handwritten card with a favorite scripture to a brother or sister who has missed meetings due to illness.",
    biblePrinciple: {
      reference: "1 Thessalonians 5:14",
      text: "Speak consolingly to those who are depressed, support the weak, be patient toward all.",
    },
    explanation: "A simple note is a small action, but the tender thought behind it touches the heart of the receiver and brings comfort.",
    discussionQuestions: [
      "Have you ever received a timely encouraging note when you needed it?",
      "Who can we send a brief note of encouragement to this week?",
    ],
  },
  {
    id: "guarding-the-tongue",
    category: "Speech & Mind",
    scenario: "When a conversation turns into gossip about someone's private choices, a sister gently changes the topic to something positive.",
    biblePrinciple: {
      reference: "Proverbs 4:23",
      text: "Above all the things that you guard, safeguard your heart, for out of it are the sources of life.",
    },
    explanation: "Redirecting a conversation takes tactful action, guided by a clean heart that protects the reputation of brothers and sisters.",
    discussionQuestions: [
      "How does speaking positively about others safeguard the peace of our home?",
      "What are some natural, gentle ways to steer conversations toward encouraging topics?",
    ],
  },
];
