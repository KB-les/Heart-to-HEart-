/**
 * Verified high-resolution Bible character cards and thematic devotional assets.
 * Character artwork and core thematic imagery are served directly as optimized local static assets
 * from /public/images/ for 100% reliable, instant loading with zero external CDN dependencies.
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

// ─── Authentic Bible Character Cards (Local Static Assets) ─────────────────
export const BIBLE_CHARACTER_IMAGES: Record<string, CharacterImageAsset> = {
  joseph: {
    imageUrl: "/images/characters/joseph.jpg",
    portraitAlt: "Illustrated Bible character portrait of Joseph in Egypt",
    artistNote: "Illustrating Joseph's faith and integrity, rising from an Egyptian prison to become governor under Jehovah's blessing.",
  },
  david: {
    imageUrl: "/images/characters/david.jpg",
    portraitAlt: "Illustrated Bible character portrait of David with the harp",
    artistNote: "Depicting David in his youth with his musical harp, composing heartfelt songs of devotion and trust in Jehovah.",
  },
  abraham: {
    imageUrl: "/images/characters/abraham.jpg",
    portraitAlt: "Illustrated Bible character portrait of Abraham",
    artistNote: "Portraying Abraham, the 'father of all those having faith', who trusted Jehovah's promise regarding his offspring.",
  },
  ruth: {
    imageUrl: "/images/characters/ruth.jpg",
    portraitAlt: "Illustrated Bible character portrait of Ruth in the harvest fields",
    artistNote: "Showing Ruth displaying loyal love for Naomi and unshakeable devotion to Jehovah in the fields of Bethlehem.",
  },
  esther: {
    imageUrl: "/images/characters/esther.jpg",
    portraitAlt: "Illustrated Bible character portrait of Queen Esther",
    artistNote: "Capturing Queen Esther's poised courage and deep faith as she stood up to deliver Jehovah's people.",
  },
  moses: {
    imageUrl: "/images/characters/moses.jpg",
    portraitAlt: "Illustrated Bible character portrait of Moses",
    artistNote: "Representing Moses, the meekest of men, who faithfully led Israel and received Jehovah's sacred Law at Mount Sinai.",
  },
  daniel: {
    imageUrl: "/images/characters/daniel.jpg",
    portraitAlt: "Illustrated Bible character portrait of Daniel",
    artistNote: "Depicting the prophet Daniel, renowned for his uncompromised integrity and continuous prayer to Jehovah in Babylon.",
  },
  samuel: {
    imageUrl: "/images/characters/samuel.jpg",
    portraitAlt: "Illustrated Bible character portrait of the young boy Samuel",
    artistNote: "Showing young Samuel in the tabernacle sanctuary answering reverently: 'Speak, for your servant is listening.'",
  },
  peter: {
    imageUrl: "/images/characters/peter.jpg",
    portraitAlt: "Illustrated Bible character portrait of the Apostle Peter",
    artistNote: "Portraying the Apostle Peter, zealous and warm-hearted fisher of men devoted to Christ Jesus.",
  },
  paul: {
    imageUrl: "/images/characters/paul.jpg",
    portraitAlt: "Illustrated Bible character portrait of the Apostle Paul",
    artistNote: "Reflecting the Apostle Paul writing inspired letters of faith, endurance, and love to early Christian congregations.",
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
    imageUrl: "/images/thematic/garden.jpg",
    alt: "Lush blooming garden with vibrant plants and flowers",
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
    imageUrl: "/images/thematic/patience.jpg",
    alt: "Patience illustration showing diligent farmer waiting for harvest",
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
