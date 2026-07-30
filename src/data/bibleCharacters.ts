export interface CharacterClue {
  number: number;
  text: string;
}

export interface TimelineMilestone {
  period: string;
  event: string;
}

export interface BibleCharacter {
  id: string;
  name: string;
  title: string;
  avatar: string;
  themeColor: string;
  clues: CharacterClue[];
  summary: string;
  timeline: TimelineMilestone[];
  keyScriptures: { reference: string; snippet: string }[];
  interestingFact: string;
  discussionQuestions: string[];
}

export const BIBLE_CHARACTERS: BibleCharacter[] = [
  {
    id: "joseph",
    name: "Joseph",
    title: "Son of Jacob & Overseer of Egypt",
    avatar: "🌾",
    themeColor: "from-amber-600 to-yellow-700",
    clues: [
      { number: 1, text: "I was given a special, long garment by my loving father, which made my brothers jealous." },
      { number: 2, text: "I was sold by my brothers into slavery and taken far away into Egypt." },
      { number: 3, text: "Jehovah blessed me to interpret dreams for Pharaoh, leading me to become prime minister of Egypt." },
    ],
    summary: "Joseph's life is a masterclass in faith, endurance, and forgiveness. Despite enduring injustice, betrayal, and imprisonment, he recognized Jehovah's guiding hand and saved his family from famine.",
    timeline: [
      { period: "Young Boy in Canaan", event: "Received prophetic dreams of sheaves bowing down." },
      { period: "Slave & Prisoner in Egypt", event: "Remained morally clean with Potiphar's wife & interpreted dreams in prison." },
      { period: "Ruler under Pharaoh", event: "Stored grain for 7 years of famine & reconciled joyfully with his brothers." },
    ],
    keyScriptures: [
      { reference: "Genesis 45:5", snippet: "Do not be distressed... because it was to preserve life that God sent me ahead of you." },
      { reference: "Genesis 50:20", snippet: "You meant to harm me, but God intended it for good to accomplish what is now being done." },
    ],
    interestingFact: "Joseph lived to be 110 years old and insisted that his bones be carried up out of Egypt when Israel eventually left for the Promised Land (Hebrews 11:22).",
    discussionQuestions: [
      "How did Joseph keep a positive, peaceful heart when he was treated unfairly in Egypt?",
      "In what ways can we imitate Joseph's quick willingness to forgive when someone hurts us?",
      "How does Joseph's story build your trust in Jehovah during difficult wait times?",
    ],
  },
  {
    id: "david",
    name: "David",
    title: "Shepherd Boy & King of Israel",
    avatar: "👑",
    themeColor: "from-emerald-700 to-teal-800",
    clues: [
      { number: 1, text: "I spent my youth tending sheep in the hills and playing the harp under the open sky." },
      { number: 2, text: "With just a sling, five smooth stones, and trust in Jehovah, I faced a giant warrior named Goliath." },
      { number: 3, text: "Jehovah called me 'a man agreeable to my heart' and I became the second king of Israel." },
    ],
    summary: "David possessed deep love for Jehovah, expressed through psalms of heartfelt praise. Though he made mistakes, his sincere repentance and humility showed why Jehovah treasured his devotion.",
    timeline: [
      { period: "Shepherd Boy in Bethlehem", event: "Anointed by Samuel & protected his flock from lion and bear." },
      { period: "Fugitive Warrior", event: "Patiently waited on Jehovah while fleeing King Saul in the wilderness." },
      { period: "King of All Israel", event: "Brought the Ark of the Covenant to Jerusalem and arranged for the Temple construction." },
    ],
    keyScriptures: [
      { reference: "1 Samuel 17:45", snippet: "I am coming to you with the name of Jehovah of armies, the God of the battle line of Israel." },
      { reference: "Psalm 23:1", snippet: "Jehovah is my Shepherd. I will lack nothing." },
    ],
    interestingFact: "David wrote over 70 psalms in the Bible! His musical skill on the harp was so comforting that it brought relief to King Saul whenever he felt agitated.",
    discussionQuestions: [
      "What made young David feel so confident when facing giant Goliath?",
      "David wrote many tender psalms about Jehovah. What is your favorite thing about Jehovah's personality?",
      "How does David's response to correction inspire you to stay humble before Jehovah?",
    ],
  },
  {
    id: "abraham",
    name: "Abraham",
    title: "Friend of Jehovah & Father of Faith",
    avatar: "⛺",
    themeColor: "from-amber-700 to-amber-900",
    clues: [
      { number: 1, text: "I left my comfortable home in the prosperous city of Ur to live in tents in an unknown land." },
      { number: 2, text: "Jehovah invited me to look up at the night sky and count the stars to illustrate how vast my offspring would be." },
      { number: 3, text: "When I was 100 years old, Jehovah fulfilled His promise and gave Sarah and me our beloved son, Isaac." },
    ],
    summary: "Abraham is famously known as the 'father of all those having faith' and Jehovah's friend. His complete obedience and willingness to follow divine guidance reshaped Bible history.",
    timeline: [
      { period: "Departure from Ur", event: "Obeyed Jehovah's call to leave comfort and travel to Canaan." },
      { period: "Covenant of Stars", event: "Jehovah promised all nations would be blessed through his seed." },
      { period: "Birth of Isaac", event: "Witnessed Jehovah's miraculous power in his and Sarah's old age." },
    ],
    keyScriptures: [
      { reference: "Genesis 15:6", snippet: "He put faith in Jehovah, and He counted it to him as righteousness." },
      { reference: "James 2:23", snippet: "Abraham put faith in Jehovah... and he came to be called Jehovah's friend." },
    ],
    interestingFact: "Abraham hospitality was legendary! He ran eagerly to welcome three angelic visitors in the heat of the day, offering them a feast of fresh bread and tender calf.",
    discussionQuestions: [
      "Why do you think Jehovah called Abraham His 'friend'?",
      "Abraham lived in tents for decades. How can we cultivate a simple, peaceful lifestyle focused on spiritual goals?",
      "How can we strengthen our faith in Jehovah's promises just like Abraham did?",
    ],
  },
  {
    id: "ruth",
    name: "Ruth",
    title: "Loyal Moabitess & Ancestor of Messiah",
    avatar: "🌾",
    themeColor: "from-amber-500 to-rose-600",
    clues: [
      { number: 1, text: "I chose to leave my homeland of Moab to care for my widowed mother-in-law, Naomi." },
      { number: 2, text: "I said the famous words: 'Your people will be my people, and your God my God.'" },
      { number: 3, text: "I worked humbly gleaning barley in the fields of Boaz and became an ancestor of King David and Jesus." },
    ],
    summary: "Ruth exemplified loyal love (hesed), unselfish devotion, and industrious spirit. Her willingness to embrace Jehovah's worship earned her a precious place in the line of Jesus Christ.",
    timeline: [
      { period: "Decision in Moab", event: "Stuck loyally to Naomi after both their husbands passed away." },
      { period: "Gleaning in Bethlehem", event: "Labored tirelessly in Boaz's fields to provide for Naomi." },
      { period: "Marriage to Boaz", event: "Became mother to Obed, grandfather of King David." },
    ],
    keyScriptures: [
      { reference: "Ruth 1:16", snippet: "Where you go I will go... your people will be my people, and your God my God." },
      { reference: "Ruth 2:12", snippet: "May Jehovah reward the way you act... under whose wings you have come to seek refuge." },
    ],
    interestingFact: "Boaz described Ruth as a 'virtuous woman' (an excellent woman), a phrase used in Proverbs 31, because everyone in Bethlehem noticed her loving kindness!",
    discussionQuestions: [
      "What moves your heart most about Ruth's loyal love for Naomi and Jehovah?",
      "How can we show loyal love in our marriage and friendships today?",
      "Ruth was willing to work humbly and start fresh. How does Jehovah reward our humble efforts?",
    ],
  },
  {
    id: "esther",
    name: "Esther",
    title: "Courageous Queen of Persia",
    avatar: "✨",
    themeColor: "from-purple-700 to-pink-700",
    clues: [
      { number: 1, text: "I was an orphaned Jewish maiden raised by my wise older cousin Mordecai in Shushan." },
      { number: 2, text: "I was chosen to become the Queen of the Persian Empire under King Ahasuerus." },
      { number: 3, text: "I risked my life by approaching the king uninvited to save Jehovah's people from Haman's plot." },
    ],
    summary: "Queen Esther combined remarkable bravery, tact, and deep reliance on prayer. She stepped up for her people 'for a time like this', demonstrating how Jehovah empowers the humble.",
    timeline: [
      { period: "Orphaned in Shushan", event: "Trained in modesty and obedience by Mordecai." },
      { period: "Crowned Queen", event: "Selected by the King while keeping her Jewish heritage private initially." },
      { period: "The Bold Banquet", event: "Fasted for 3 days and courageously exposed the plot to destroy her people." },
    ],
    keyScriptures: [
      { reference: "Esther 4:14", snippet: "Who knows whether it is for a time like this that you have attained to royal status?" },
      { reference: "Esther 4:16", snippet: "Fast on my behalf... And if I must perish, I must perish." },
    ],
    interestingFact: "The book of Esther is unique because it never explicitly mentions the name 'Jehovah', yet His guiding hand and providence shine through every single event!",
    discussionQuestions: [
      "How did Esther show tact and respect when talking to her husband the king?",
      "What gives you courage when you need to stand up for what is right?",
      "How can we pray together before taking on challenging situations in life?",
    ],
  },
  {
    id: "moses",
    name: "Moses",
    title: "Prophet, Lawgiver & Meekest Man",
    avatar: "📜",
    themeColor: "from-sky-700 to-slate-800",
    clues: [
      { number: 1, text: "As a baby, I was placed in a papyrus basket among the reeds of the Nile River to save my life." },
      { number: 2, text: "Jehovah spoke to me from a burning bush that was not consumed by fire in Midian." },
      { number: 3, text: "I led the Israelites out of Egypt, parted the Red Sea, and received the Ten Commandments at Mount Sinai." },
    ],
    summary: "Moses was described as by far the meekest man on earth. He turned down royal Egyptian wealth to suffer treatment with Jehovah's people, leading Israel for 40 years with faith.",
    timeline: [
      { period: "Prince of Egypt", event: "Educated in Pharaoh's palace for 40 years." },
      { period: "Shepherd in Midian", event: "Cultivated deep patience and humility over 40 quiet years." },
      { period: "Leader of Israel", event: "Confronted Pharaoh, divided the Red Sea, and delivered Jehovah's Law." },
    ],
    keyScriptures: [
      { reference: "Numbers 12:3", snippet: "Now the man Moses was by far the meekest of all the men on the face of the earth." },
      { reference: "Hebrews 11:27", snippet: "He continued steadfast as seeing the One who is invisible." },
    ],
    interestingFact: "Moses wrote the first five books of the Bible (the Pentateuch) as well as the book of Job and Psalm 90!",
    discussionQuestions: [
      "Moses spent 40 years as a shepherd developing patience before leading Israel. What does this teach us about preparation?",
      "How did Moses stay strong when seeing 'the One who is invisible'?",
      "Why is meekness such an attractive and peaceful quality in a family?",
    ],
  },
  {
    id: "daniel",
    name: "Daniel",
    title: "Beloved Prophet of Babylon",
    avatar: "🦁",
    themeColor: "from-amber-800 to-stone-800",
    clues: [
      { number: 1, text: "As a young teenager, I was taken captive to Babylon but resolved in my heart not to defile myself with royal dainties." },
      { number: 2, text: "I prayed to Jehovah three times a day toward Jerusalem, even when a royal decree forbade it." },
      { number: 3, text: "Jehovah sent His angel to shut the mouths of lions when I was thrown into their den." },
    ],
    summary: "Daniel's integrity and consistency in prayer made him 'someone very precious' to Jehovah. Throughout successive world powers, he maintained unyielding devotion.",
    timeline: [
      { period: "Youth in Babylon", event: "Chose vegetables and water to remain clean according to God's law." },
      { period: "Statesman & Prophet", event: "Interpreted King Nebuchadnezzar's giant image dream & the handwriting on the wall." },
      { period: "Deliverance in Lion's Den", event: "Saved unharmed under King Darius because of his spotless trust." },
    ],
    keyScriptures: [
      { reference: "Daniel 6:10", snippet: "Three times a day he got down on his knees and prayed and gave praise before his God." },
      { reference: "Daniel 10:19", snippet: "Do not be afraid, O man very precious. May you have peace. Be strong, yes, be strong." },
    ],
    interestingFact: "Daniel served high government offices under two different world empires (Babylonian and Medo-Persian) for over 70 years without ever compromising his faith!",
    discussionQuestions: [
      "What made Daniel's prayer routine so important to him every day?",
      "How can we build a consistent prayer routine together as a family?",
      "How did Daniel maintain kindness and respect even while refusing royal pressures?",
    ],
  },
  {
    id: "samuel",
    name: "Samuel",
    title: "Faithful Boy Priest & Prophet",
    avatar: "🕯️",
    themeColor: "from-amber-600 to-emerald-800",
    clues: [
      { number: 1, text: "My mother Hannah prayed fervently for a child and dedicated me to Jehovah's service at the tabernacle in Shiloh." },
      { number: 2, text: "As a young boy sleeping near the ark, Jehovah called my name three times: 'Samuel! Samuel!'" },
      { number: 3, text: "I served Jehovah faithfully all the days of my life, anointing both Saul and David as kings." },
    ],
    summary: "Samuel grew up serving Jehovah with a clean, receptive heart from early childhood. His life proves that steady, lifelong devotion brings joy and Jehovah's lasting blessing.",
    timeline: [
      { period: "Childhood in Shiloh", event: "Assisted High Priest Eli with tabernacle duties wearing a linen ephod." },
      { period: "Voice in the Night", event: "Responded eagerly: 'Speak, for your servant is listening.'" },
      { period: "Judge & Prophet of Israel", event: "Guided the nation through spiritual renewal for decades." },
    ],
    keyScriptures: [
      { reference: "1 Samuel 3:10", snippet: "Speak, for your servant is listening." },
      { reference: "1 Samuel 12:23", snippet: "It is unthinkable on my part to sin against Jehovah by ceasing to pray in your behalf." },
    ],
    interestingFact: "Every year, Samuel's mother Hannah brought him a new little sleeveless coat that she lovingly sewed herself when visiting Shiloh!",
    discussionQuestions: [
      "What can we learn from Samuel's response: 'Speak, for your servant is listening'?",
      "How can we listen attentively when Jehovah speaks to us through the Bible?",
      "Samuel prayed for the people constantly. How does praying for others fill us with peace?",
    ],
  },
  {
    id: "peter",
    name: "Peter",
    title: "Warmhearted Apostle & Pillar",
    avatar: "⛵",
    themeColor: "from-blue-600 to-cyan-800",
    clues: [
      { number: 1, text: "I was a hardworking fisherman on the Sea of Galilee alongside my brother Andrew." },
      { number: 2, text: "Jesus called me to leave my nets and become a 'fisherman of men'." },
      { number: 3, text: "Though I impetuously stumbled at times, Jesus gave me the 'keys of the Kingdom' and I declared the good news boldly." },
    ],
    summary: "Peter was warm, expressive, and deeply attached to Jesus. His transformation from an impulsive fisherman into a pillar of the early Christian congregation is inspiring.",
    timeline: [
      { period: "Galilean Fisherman", event: "Called by Jesus to leave fishing trade immediately." },
      { period: "Apostle of Christ", event: "Walked briefly on water, confessed Jesus as Messiah, and witnessed Transfiguration." },
      { period: "Pillar of Jerusalem", event: "Preached at Pentecost, opened doors to Gentiles, wrote two encouraging Bible letters." },
    ],
    keyScriptures: [
      { reference: "Matthew 16:16", snippet: "You are the Christ, the Son of the living God." },
      { reference: "1 Peter 5:7", snippet: "Throw all your anxiety on him, because he cares for you." },
    ],
    interestingFact: "Peter wrote 1 Peter 5:7 about throwing anxiety on Jehovah—a tender thought he learned firsthand after Jesus lovingly restored him by the shore of Galilee!",
    discussionQuestions: [
      "What do you love most about Peter's warm and open personality?",
      "How did Jesus show love and understanding when Peter made mistakes?",
      "How does 1 Peter 5:7 encourage you when you feel overwhelmed?",
    ],
  },
  {
    id: "paul",
    name: "Paul",
    title: "Apostle to the Nations",
    avatar: "✉️",
    themeColor: "from-stone-700 to-amber-800",
    clues: [
      { number: 1, text: "I was born in Tarsus, trained strictly as a Pharisee under Gamaliel, and originally opposed Christians." },
      { number: 2, text: "A bright light from heaven blinded me on the road to Damascus where Jesus spoke to me." },
      { number: 3, text: "I completed three extensive missionary journeys across the Mediterranean and authored 14 Bible books." },
    ],
    summary: "Paul's life demonstrates the transforming power of Jehovah's undeserved kindness. He poured his energy into spreading the good news and building up brothers and sisters across cities.",
    timeline: [
      { period: "Pharisee Saul", event: "Zealous scholar transformed after meeting Jesus on Damascus road." },
      { period: "Missionary Journeys", event: "Traveled thousands of miles establishing and strengthening congregations." },
      { period: "Rome Imprisonment", event: "Wrote uplifting letters (Ephesians, Philippians, Colossians) while chained to a guard." },
    ],
    keyScriptures: [
      { reference: "Philippians 4:13", snippet: "For all things I have the strength through him who imparts power to me." },
      { reference: "2 Timothy 4:7", snippet: "I have fought the fine fight, I have run the race to the finish, I have observed the faith." },
    ],
    interestingFact: "Paul supported his full-time ministry by making tents alongside his dear friends Aquila and Priscilla in Corinth!",
    discussionQuestions: [
      "How does Paul's letter in Philippians show joy even when he was under house arrest?",
      "What secret did Paul learn about finding contentment in all circumstances?",
      "How can we encourage each other in spiritual goals just like Paul encouraged early Christians?",
    ],
  },
];
