/**
 * Authentic classical masterwork fine-art historical painting assets for Bible Characters,
 * alongside verified nature and devotional photography.
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

// ─── Classical Masterwork Fine-Art Paintings for Bible Characters ───────────
export const BIBLE_CHARACTER_IMAGES: Record<string, CharacterImageAsset> = {
  joseph: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Diego_Vel%C3%A1zquez_-_Joseph%27s_Tunic_-_WGA24430.jpg/1200px-Diego_Vel%C3%A1zquez_-_Joseph%27s_Tunic_-_WGA24430.jpg",
    portraitAlt: "Classical masterwork painting of Joseph's story and coat by Diego Velázquez",
    artistNote: "Classical masterpiece depicting Joseph's journey from betrayal in Canaan to royal governor of Egypt under Jehovah's guiding hand.",
  },
  david: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Rembrandt_Harmensz._van_Rijn_-_King_David_Playing_the_Harp_-_Google_Art_Project.jpg/1200px-Rembrandt_Harmensz._van_Rijn_-_King_David_Playing_the_Harp_-_Google_Art_Project.jpg",
    portraitAlt: "King David playing the harp in quiet devotion by Rembrandt van Rijn (1666)",
    artistNote: "Rembrandt's famous masterwork capturing King David in quiet prayer, composing heartfelt psalms of praise to Jehovah.",
  },
  abraham: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Rembrandt_-_Sacrifice_of_Isaac_%281635%29.jpg/1200px-Rembrandt_-_Sacrifice_of_Isaac_%281635%29.jpg",
    portraitAlt: "Abraham's unwavering faith in Jehovah by Rembrandt (1635)",
    artistNote: "Historic painting depicting Abraham's complete trust and obedience to Jehovah when tested on Mount Moriah.",
  },
  ruth: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ruth_and_Boaz_%28Julius_Schnorr_von_Carolsfeld%29.jpg/1200px-Ruth_and_Boaz_%28Julius_Schnorr_von_Carolsfeld%29.jpg",
    portraitAlt: "Ruth gleaning faithfully in the barley harvest fields of Boaz",
    artistNote: "19th-century classical art capturing Ruth's loyal love for Naomi and unyielding devotion to Jehovah's worship.",
  },
  esther: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Artemisia_Gentileschi_-_Esther_before_Ahasuerus_-_WGA08581.jpg/1200px-Artemisia_Gentileschi_-_Esther_before_Ahasuerus_-_WGA08581.jpg",
    portraitAlt: "Queen Esther appearing with courage before King Ahasuerus by Artemisia Gentileschi (1630)",
    artistNote: "Famous Baroque masterpiece depicting Queen Esther risking her life with fearless faith to save Jehovah's people.",
  },
  moses: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rembrandt_Harmensz._van_Rijn_079.jpg/1200px-Rembrandt_Harmensz._van_Rijn_079.jpg",
    portraitAlt: "Moses holding the Ten Commandments Tablets by Rembrandt van Rijn (1659)",
    artistNote: "Rembrandt's iconic portrait of Moses bringing Jehovah's sacred Law down from Mount Sinai to Israel.",
  },
  daniel: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Peter_Paul_Rubens_-_Daniel_in_the_Lions%27_Den_-_Google_Art_Project.jpg/1200px-Peter_Paul_Rubens_-_Daniel_in_the_Lions%27_Den_-_Google_Art_Project.jpg",
    portraitAlt: "Daniel praying in the lions' den surrounded by lions by Peter Paul Rubens (1615)",
    artistNote: "Peter Paul Rubens' world-renowned painting depicting Daniel looking to Jehovah in prayer with unshakeable integrity.",
  },
  samuel: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sir_Joshua_Reynolds_-_The_Infant_Samuel_-_Google_Art_Project.jpg/1200px-Sir_Joshua_Reynolds_-_The_Infant_Samuel_-_Google_Art_Project.jpg",
    portraitAlt: "The boy Samuel praying in the sanctuary by Sir Joshua Reynolds (1776)",
    artistNote: "Tate Britain masterwork portraying the young boy Samuel answering reverently in the tabernacle: 'Speak, for your servant is listening.'",
  },
  peter: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/St_Peter_by_Peter_Paul_Rubens.jpg/1200px-St_Peter_by_Peter_Paul_Rubens.jpg",
    portraitAlt: "The Apostle Peter portrait by Peter Paul Rubens (1611)",
    artistNote: "Prado Museum masterpiece depicting the Apostle Peter, warm and zealous fisher of men for Christ.",
  },
  paul: {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Rembrandt_Harmensz._van_Rijn_-_The_Apostle_Paul_-_Google_Art_Project.jpg/1200px-Rembrandt_Harmensz._van_Rijn_-_The_Apostle_Paul_-_Google_Art_Project.jpg",
    portraitAlt: "The Apostle Paul penning the Christian Greek Scriptures by Rembrandt van Rijn (1657)",
    artistNote: "National Gallery of Art portrait depicting Paul in quiet meditation, writing inspired letters of faith and love.",
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
