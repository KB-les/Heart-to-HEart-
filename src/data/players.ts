export interface Player {
  name: string;
  avatar: string; // Emoji / icon
  favoriteColor?: string;
  colorFeelings?: string[];
  favoriteAnimal?: string;
  animalFeelings?: string[];
  favoriteNature?: string;
  natureFeelings?: string[];
}

export const DEFAULT_PLAYER_1: Player = {
  name: "Karabelo",
  avatar: "🌿",
};

export const DEFAULT_PLAYER_2: Player = {
  name: "Yolanda",
  avatar: "🌸",
};

export const FEELING_OPTIONS = [
  "Peaceful",
  "Joyful",
  "Hopeful",
  "Inspired",
  "Calm",
  "Safe",
  "Loved",
  "Excited",
] as const;

export type FeelingOption = (typeof FEELING_OPTIONS)[number];
