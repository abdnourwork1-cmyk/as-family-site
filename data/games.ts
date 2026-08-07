import { siteConfig } from "@/config/site";

export type Game = {
  slug: string;
  name: string;
  description: string;
  icon: "flame" | "mask" | "crosshair" | "cube";
  discordUrl: string;
};

export const games: Game[] = [
  {
    slug: "free-fire",
    name: "FREE FIRE",
    description:
      "Find teammates, build squads and join AS FAMILY players for competitive and casual matches.",
    icon: "flame",
    discordUrl: siteConfig.discordUrl,
  },
  {
    slug: "among-us",
    name: "AMONG US",
    description:
      "Join community lobbies, play with friends and survive the chaos together.",
    icon: "mask",
    discordUrl: siteConfig.discordUrl,
  },
  {
    slug: "valorant",
    name: "VALORANT",
    description:
      "Find teammates, create squads and play competitive matches with AS FAMILY members.",
    icon: "crosshair",
    discordUrl: siteConfig.discordUrl,
  },
  {
    slug: "minecraft",
    name: "MINECRAFT",
    description:
      "Build, explore, survive and create with the AS FAMILY community.",
    icon: "cube",
    discordUrl: siteConfig.discordUrl,
  },
];
