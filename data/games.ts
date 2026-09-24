import { siteConfig } from "@/config/site";

export type Game = {
  slug: string;
  name: string;
  description: string;

  icon:
    | "flame"
    | "mask"
    | "crosshair"
    | "cube"
    | "gta5"
    | "football"
    | "roblox";

  /** Real cover/banner image served from /public/games */
  image: string;

  /** Accessible description of the cover image */
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
    image: "/games/free-fire.webp",
    imageAlt: "Free Fire battle royale gameplay artwork",
    discordUrl: siteConfig.discordUrl,
  },

  {
    slug: "among-us",
    name: "AMONG US",
    description:
      "Join community lobbies, play with friends and survive the chaos together.",
    icon: "mask",
    image: "/games/among-us.webp",
    imageAlt: "Among Us social deduction gameplay artwork",
    discordUrl: siteConfig.discordUrl,
  },

  {
    slug: "valorant",
    name: "VALORANT",
    description:
      "Find teammates, create squads and play competitive matches with AS FAMILY members.",
    icon: "crosshair",
    image: "/games/valorant.webp",
    imageAlt: "Valorant tactical shooter gameplay artwork",
    discordUrl: siteConfig.discordUrl,
  },

  {
    slug: "minecraft",
    name: "MINECRAFT",
    description:
      "Build, explore, survive and create with the AS FAMILY community.",
    icon: "cube",
    image: "/games/minecraft.webp",
    imageAlt: "Minecraft survival and building gameplay artwork",
    discordUrl: siteConfig.discordUrl,
  },

  {
    slug: "gta-5",
    name: "GTA 5",
    description:
      "Explore Los Santos, complete missions, cruise with friends and play together with the AS FAMILY community.",
    icon: "gta5",
    image: "/games/gta-5.webp",
    imageAlt: "GTA 5 Los Santos gameplay artwork",
    discordUrl: siteConfig.discordUrl,
  },

  {
    slug: "fortnite",
    name: "FORTNITE",
    description:
      "Drop into Battle Royale, build squads and compete with AS FAMILY players.",
    icon: "crosshair",
    image: "/games/fortnite.webp",
    imageAlt: "Fortnite Battle Royale gameplay artwork",
    discordUrl: siteConfig.discordUrl,
  },

  {
    slug: "pes-mobile",
    name: "PES MOBILE",
    description:
      "Play football matches, challenge friends and connect with AS FAMILY mobile football players.",
    icon: "football",
    image: "/games/pes-mobile.webp",
    imageAlt: "PES Mobile football gameplay artwork",
    discordUrl: siteConfig.discordUrl,
  },

  {
    slug: "roblox",
    name: "ROBLOX",
    description:
      "Discover experiences, explore worlds and play together with the AS FAMILY community.",
    icon: "roblox",
    image: "/games/roblox.webp",
    imageAlt: "Roblox gameplay artwork",
    discordUrl: siteConfig.discordUrl,
  },
];