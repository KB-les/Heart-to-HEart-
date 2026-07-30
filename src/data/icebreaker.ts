export interface ColorOption {
  name: string;
  hex: string;
  gradientFrom: string;
  gradientTo: string;
  border: string;
  label: string;
}

export const COLOR_OPTIONS: ColorOption[] = [
  {
    name: "Forest Emerald",
    hex: "#2D5A40",
    gradientFrom: "#1E3A2B",
    gradientTo: "#4E8752",
    border: "#4E8752",
    label: "🌿 Deep & Grounding",
  },
  {
    name: "Golden Sunset",
    hex: "#D4AF37",
    gradientFrom: "#D4AF37",
    gradientTo: "#F4D068",
    border: "#B89225",
    label: "☀️ Warm & Radiant",
  },
  {
    name: "Sky Azure",
    hex: "#0284C7",
    gradientFrom: "#0284C7",
    gradientTo: "#7DD3FC",
    border: "#38BDF8",
    label: "🌤️ Open & Free",
  },
  {
    name: "Rose Petal",
    hex: "#E11D48",
    gradientFrom: "#FB7185",
    gradientTo: "#E11D48",
    border: "#F43F5E",
    label: "🌸 Tender & Loving",
  },
  {
    name: "Deep Lavender",
    hex: "#7C3AED",
    gradientFrom: "#A78BFA",
    gradientTo: "#7C3AED",
    border: "#8B5CF6",
    label: "🔮 Calm & Mystical",
  },
  {
    name: "Warm Amber",
    hex: "#D97706",
    gradientFrom: "#FBBF24",
    gradientTo: "#D97706",
    border: "#F59E0B",
    label: "🍂 Cosy & Nurturing",
  },
  {
    name: "Soft Coral",
    hex: "#F97316",
    gradientFrom: "#FB923C",
    gradientTo: "#EA580C",
    border: "#EA580C",
    label: "🪸 Vibrant & Joyful",
  },
  {
    name: "Ocean Teal",
    hex: "#0D9488",
    gradientFrom: "#2DD4BF",
    gradientTo: "#0D9488",
    border: "#14B8A6",
    label: "🌊 Serene & Fresh",
  },
];

export interface AnimalOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  reflection: string;
  scriptureSnippet?: string;
}

export const ANIMAL_OPTIONS: AnimalOption[] = [
  {
    id: "dove",
    name: "Gentle Dove",
    icon: "🕊️",
    description: "Soft, peaceful and faithful companion",
    reflection: "Those who love doves often appreciate gentleness and quiet loyalty in their relationships.",
    scriptureSnippet: "Genesis 8:11",
  },
  {
    id: "lamb",
    name: "Quiet Lamb",
    icon: "🐑",
    description: "Trusting, gentle and calm spirit",
    reflection: "Choosing a lamb may reflect a deep appreciation for tender, patient care and guidance.",
    scriptureSnippet: "Isaiah 40:11",
  },
  {
    id: "eagle",
    name: "Soaring Eagle",
    icon: "🦅",
    description: "Strong, graceful and farsighted",
    reflection: "An eagle lover may enjoy wide perspective — seeing the bigger picture in life and faith.",
    scriptureSnippet: "Isaiah 40:31",
  },
  {
    id: "deer",
    name: "Swift Deer",
    icon: "🦌",
    description: "Agile, graceful and tranquil",
    reflection: "Those who love deer may long for moments of quiet beauty and peaceful surroundings.",
    scriptureSnippet: "Psalm 42:1",
  },
  {
    id: "dolphin",
    name: "Playful Dolphin",
    icon: "🐬",
    description: "Joyful, intelligent and harmonious",
    reflection: "Dolphin lovers often cherish connection, playfulness, and warm friendship.",
  },
  {
    id: "lion",
    name: "Courageous Lion",
    icon: "🦁",
    description: "Noble, confident and protective",
    reflection: "Choosing a lion may reflect a deep sense of courage and desire to protect those you love.",
    scriptureSnippet: "Proverbs 28:1",
  },
  {
    id: "butterfly",
    name: "Radiant Butterfly",
    icon: "🦋",
    description: "Vibrant, delicate and transformed",
    reflection: "Those drawn to butterflies often find beauty in transformation and personal growth.",
  },
  {
    id: "owl",
    name: "Wise Owl",
    icon: "🦉",
    description: "Quiet, observant and serene",
    reflection: "Owl lovers often appreciate wisdom, patience, and thoughtful, unhurried reflection.",
  },
];

export interface NatureOption {
  id: string;
  name: string;
  icon: string;
  bgColor: string;      // solid fallback color for inline style
  bgGradient: string;   // CSS inline gradient string
  description: string;
  reflection: string;
}

export const NATURE_OPTIONS: NatureOption[] = [
  {
    id: "forest",
    name: "Forest",
    icon: "🌲",
    bgColor: "#14532d",
    bgGradient: "linear-gradient(135deg, #14532d, #166534)",
    description: "Tall whispering pines and soft moss beneath your feet",
    reflection: "A love of forests may reflect a desire for shelter, quiet depth, and a personal connection with Jehovah's creation.",
  },
  {
    id: "mountains",
    name: "Mountains",
    icon: "🏔️",
    bgColor: "#334155",
    bgGradient: "linear-gradient(135deg, #334155, #0c4a6e)",
    description: "Majestic peaks reaching into clean crisp air",
    reflection: "Those drawn to mountains may appreciate the feeling of closeness to something greater than themselves.",
  },
  {
    id: "ocean",
    name: "Ocean",
    icon: "🌊",
    bgColor: "#0369a1",
    bgGradient: "linear-gradient(135deg, #0e7490, #0369a1)",
    description: "Rhythmic waves rolling onto warm sunlit shores",
    reflection: "An ocean lover may find peace in vastness and trust — like Jehovah's enduring and boundless care.",
  },
  {
    id: "garden",
    name: "Garden",
    icon: "🌺",
    bgColor: "#be185d",
    bgGradient: "linear-gradient(135deg, #be185d, #15803d)",
    description: "Fragrant blossoms filled with life and vibrant colors",
    reflection: "Those who love gardens often cherish nurturing, beauty in detail, and the joy of growth.",
  },
  {
    id: "stars",
    name: "Stars",
    icon: "✨",
    bgColor: "#1e1b4b",
    bgGradient: "linear-gradient(135deg, #1e1b4b, #4c1d95)",
    description: "A quiet starlit canopy showing Jehovah's vast creation",
    reflection: "A love of stars may reflect awe for the infinite — a heart that meditates on the Creator's greatness.",
  },
  {
    id: "rain",
    name: "Rain",
    icon: "🌧️",
    bgColor: "#1e40af",
    bgGradient: "linear-gradient(135deg, #1e40af, #475569)",
    description: "Gentle falling raindrops bringing fresh life to the earth",
    reflection: "Those comforted by rain may appreciate renewal, quiet solitude, and Jehovah's life-giving provision.",
  },
  {
    id: "sunset",
    name: "Sunset",
    icon: "🌅",
    bgColor: "#b45309",
    bgGradient: "linear-gradient(135deg, #b45309, #be123c)",
    description: "Warm golden rays painted across the evening sky",
    reflection: "Sunset lovers often treasure endings that are beautiful — gratitude, completeness, and warmth.",
  },
];
