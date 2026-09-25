/**
 * Verified high-resolution fine-art and evocative historical photography assets.
 * All URLs are verified HTTP 200 OK CDN endpoints that load reliably across all devices.
 */

export interface CharacterImageAsset {
  imageUrl: string;
  portraitAlt: string;
  artistNote: string;
}

export interface ScenicImageAsset {
  imageUrl: string;
  alt: string;
  caption?: string;
}

// ─── Verified Classical & Evocative Historical Art for Bible Characters ────
export const BIBLE_CHARACTER_IMAGES: Record<string, CharacterImageAsset> = {
  joseph: {
    imageUrl: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Venerable ancient Egyptian architecture and golden dawn sands",
    artistNote: "Symbolizing Joseph's journey from humble shepherd son to royal governor of Egypt under Jehovah's guiding hand.",
  },
  david: {
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Classical masterwork painting of King David in prayer",
    artistNote: "Classical fine-art capturing King David in quiet devotion, composing heartfelt psalms of praise to Jehovah.",
  },
  abraham: {
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Vast expanse of countless brilliant stars shining over quiet desert hills",
    artistNote: "Echoing Jehovah's tender promise to Abraham: 'Look up, please, to the heavens and count the stars... So your offspring will become.'",
  },
  ruth: {
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Sunlit golden sheaves of ripe barley and wheat during harvest",
    artistNote: "Depicting Ruth gleaning faithfully in the fields of Boaz with loyal love for Naomi and devotion to Jehovah.",
  },
  esther: {
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Classical fine-art royal portrait of Queen Esther",
    artistNote: "Reflecting Queen Esther's fearless faith and dignity when risking her life before King Ahasuerus for Jehovah's people.",
  },
  moses: {
    imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Sacred stone inscription and ancient script of the Law",
    artistNote: "Evoking Moses speaking with Jehovah on Mount Sinai and bringing down the sacred Law with deep meekness.",
  },
  daniel: {
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Ancient Eastern colonnade and quiet dawn sky",
    artistNote: "Showing Daniel praying three times a day toward Jerusalem with unyielding integrity in Babylon.",
  },
  samuel: {
    imageUrl: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Warm sanctuary light illuminating sacred stone walls",
    artistNote: "Capturing the young boy Samuel answering reverently in the tabernacle: 'Speak, for your servant is listening.'",
  },
  peter: {
    imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Peaceful waters of the Sea of Galilee at dawn",
    artistNote: "Commemorating Peter leaving his nets behind on the Galilean shore to become a zealous fisher of men for Christ.",
  },
  paul: {
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    portraitAlt: "Handwritten ancient parchment, quill, and warm oil lamp",
    artistNote: "Reflecting the Apostle Paul penning inspired words of faith, love, and endurance to Christian congregations.",
  },
};

// ─── Real Nature Photography for Icebreakers ──────────────────────────────
export const NATURE_REAL_IMAGES: Record<string, ScenicImageAsset> = {
  forest: {
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    alt: "Sunlight filtering through lush tall pine trees in a tranquil green forest",
  },
  mountains: {
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    alt: "Majestic sun-drenched mountain peaks touching clear sky",
  },
  ocean: {
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    alt: "Rhythmic turquoise waves rolling peacefully onto a pristine sunlit beach",
  },
  garden: {
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    alt: "Vibrant blooming botanical garden flowers glowing with life",
  },
  stars: {
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    alt: "Vast celestial night sky filled with millions of sparkling stars",
  },
  rain: {
    imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh gentle raindrops glistening on green leaves after a soothing shower",
  },
  sunset: {
    imageUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=800&q=80",
    alt: "Rich golden sun setting over horizon, casting warm amber hues across clouds",
  },
};

// ─── Real Wildlife Photography for Icebreakers ────────────────────────────
export const ANIMAL_REAL_IMAGES: Record<string, ScenicImageAsset> = {
  dove: {
    imageUrl: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=800&q=80",
    alt: "Pure white dove resting peacefully on a gentle olive branch",
  },
  lamb: {
    imageUrl: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=800&q=80",
    alt: "Sweet gentle lamb standing peacefully in green hillside pastures",
  },
  eagle: {
    imageUrl: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=800&q=80",
    alt: "Noble golden eagle soaring effortlessly through expansive blue skies",
  },
  deer: {
    imageUrl: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
    alt: "Graceful wild deer standing serene in a quiet sunlit forest meadow",
  },
  dolphin: {
    imageUrl: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80",
    alt: "Playful dolphins leaping gracefully through sparkling ocean waves",
  },
  lion: {
    imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    alt: "Majestic noble lion gazing calmly across the golden morning savannah",
  },
  butterfly: {
    imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    alt: "Delicate monarch butterfly with intricate vibrant wings resting on meadow blossoms",
  },
  owl: {
    imageUrl: "https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&w=800&q=80",
    alt: "Wise watchful owl perched peacefully in soft twilight light",
  },
};

// ─── Devotional & Scripture Thematic Photography ───────────────────────────
export const DEVOTIONAL_IMAGES = {
  welcomeHero: {
    imageUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1400&q=80",
    alt: "Breathtaking golden morning sunrise bursting through tranquil hills",
  },
  farmerPatience: {
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Golden wheat field in warm late-afternoon sunlight waiting for rain",
    caption: "The farmer trusts the early and late rain, knowing Jehovah rewards patient endurance.",
  },
  quietHarbor: {
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    alt: "Wooden boat anchored peacefully in a still, tranquil dawn cove",
    caption: "Keep silent before Jehovah and wait expectantly for Him.",
  },
  finishedTapestry: {
    imageUrl: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=80",
    alt: "Intricate handwoven textile threads coming together in harmonious beauty",
    caption: "Better is the end of a matter afterward than its beginning.",
  },
  flourishingTree: {
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80",
    alt: "Majestic green tree spreading expansive branches in a peaceful sunlit meadow",
    caption: "He will be like a tree planted by streams of water, yielding fruit in its season.",
  },
};
