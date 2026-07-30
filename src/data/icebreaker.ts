export interface ColorOption {
  name: string;
  hex: string;
  gradient: string;
  borderHex: string;
}

export const COLOR_OPTIONS: ColorOption[] = [
  { name: "Forest Emerald", hex: "#1E3A2B", gradient: "from-[#1E3A2B] to-[#2D5A40]", borderHex: "#4E8752" },
  { name: "Golden Sunset", hex: "#E5C158", gradient: "from-[#D4AF37] to-[#F4D068]", borderHex: "#B89225" },
  { name: "Sky Azure", hex: "#0284C7", gradient: "from-[#0284C7] to-[#8ECAE6]", borderHex: "#38BDF8" },
  { name: "Rose Petal", hex: "#E11D48", gradient: "from-[#FB7185] to-[#E11D48]", borderHex: "#F43F5E" },
  { name: "Deep Lavender", hex: "#7C3AED", gradient: "from-[#A78BFA] to-[#7C3AED]", borderHex: "#8B5CF6" },
  { name: "Warm Amber", hex: "#D97706", gradient: "from-[#FBBF24] to-[#D97706]", borderHex: "#F59E0B" },
  { name: "Soft Coral", hex: "#F97316", gradient: "from-[#FB923C] to-[#F97316]", borderHex: "#EA580C" },
  { name: "Ocean Teal", hex: "#0D9488", gradient: "from-[#2DD4BF] to-[#0D9488]", borderHex: "#14B8A6" },
];

export interface AnimalOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  scriptureSnippet?: string;
}

export const ANIMAL_OPTIONS: AnimalOption[] = [
  { id: "dove", name: "Gentle Dove", icon: "🕊️", description: "Soft, peaceful and faithful companion", scriptureSnippet: "Genesis 8:11" },
  { id: "lamb", name: "Quiet Lamb", icon: "🐑", description: "Trusting, gentle and calm spirit", scriptureSnippet: "Isaiah 40:11" },
  { id: "eagle", name: "Soaring Eagle", icon: "🦅", description: "Strong, graceful and farsighted", scriptureSnippet: "Isaiah 40:31" },
  { id: "deer", name: "Swift Deer", icon: "🦌", description: "Agile, graceful and tranquil", scriptureSnippet: "Psalm 42:1" },
  { id: "dolphin", name: "Playful Dolphin", icon: "🐬", description: "Joyful, intelligent and harmonious" },
  { id: "lion", name: "Courageous Lion", icon: "🦁", description: "Noble, confident and protective", scriptureSnippet: "Proverbs 28:1" },
  { id: "butterfly", name: "Radiant Butterfly", icon: "🦋", description: "Vibrant, delicate and transformed" },
  { id: "owl", name: "Wise Owl", icon: "🦉", description: "Quiet, observant and serene" },
];

export interface NatureOption {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  description: string;
}

export const NATURE_OPTIONS: NatureOption[] = [
  { id: "forest", name: "Forest", icon: "🌲", gradient: "from-emerald-800 to-green-600", description: "Tall whispering pines and soft moss beneath your feet" },
  { id: "mountains", name: "Mountains", icon: "🏔️", gradient: "from-slate-700 to-sky-800", description: "Majestic peaks reaching into clean crisp air" },
  { id: "ocean", name: "Ocean", icon: "🌊", gradient: "from-cyan-700 to-blue-600", description: "Rhythmic waves rolling onto warm sunlit shores" },
  { id: "garden", name: "Garden", icon: "🌺", gradient: "from-pink-600 to-emerald-600", description: "Fragrant blossoms filled with life and vibrant colors" },
  { id: "stars", name: "Stars", icon: "✨", gradient: "from-indigo-950 to-purple-900", description: "A quiet starlit canopy showing Jehovah's vast creation" },
  { id: "rain", name: "Rain", icon: "🌧️", gradient: "from-blue-800 to-slate-600", description: "Gentle falling raindrops bringing fresh life to the earth" },
  { id: "sunset", name: "Sunset", icon: "🌅", gradient: "from-amber-600 to-rose-700", description: "Warm golden rays painted across the evening sky" },
];
