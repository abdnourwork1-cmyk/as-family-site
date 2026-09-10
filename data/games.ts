import { siteConfig } from "@/config/site";

export type Game = {
  slug: string;
  name: string;
  description: string;
  icon: "flame" | "mask" | "crosshair" | "cube";
  /** Cover/banner image shown at the top of the card. Served from /public. */
  image: string;
  /** Accessible description of the cover image. */
  imageAlt: string;
  discordUrl: string;
};

export const games: Game[] = [
  {
    slug: "free-fire",
    name: "FREE FIRE",
    description:
      "Find teammates, build squads and join AS FAMILY players for competitive and casual matches.",
    icon: "flame",
    image: "/games/free-fire.svg",
    imageAlt: "Free Fire battle royale artwork",
    discordUrl: siteConfig.discordUrl,
  },
  {
    slug: "among-us",
    name: "AMONG US",
    description:
      "Join community lobbies, play with friends and survive the chaos together.",
    icon: "mask",
    image: "/games/among-us.svg",
    imageAlt: "Among Us social deduction artwork",
    discordUrl: siteConfig.discordUrl,
  },
  {
    slug: "valorant",
    name: "VALORANT",
    description:
      "Find teammates, create squads and play competitive matches with AS FAMILY members.",
    icon: "crosshair",
    image: "/games/valorant.svg",
    imageAlt: "Valorant tactical shooter artwork",
    discordUrl: siteConfig.discordUrl,
  },
  {
    slug: "minecraft",
    name: "MINECRAFT",
    description:
      "Build, explore, survive and create with the AS FAMILY community.",
    icon: "cube",
    image: "/games/minecraft.svg",
    imageAlt: "Minecraft sandbox survival artwork",
    discordUrl: siteConfig.discordUrl,
  },
];
