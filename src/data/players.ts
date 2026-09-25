export interface Player {
  name: string;
  avatar: string;
  favoriteColor?: string;
  colorFeelings?: string[];
  favoriteAnimal?: string;
  animalFeelings?: string[];
  natureFeelings?: string[];
}

export const DEFAULT_PLAYER_1: Player = {
  name: "Partner 1",
  avatar: "1",
};

export const DEFAULT_PLAYER_2: Player = {
  name: "Partner 2",
  avatar: "2",
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
