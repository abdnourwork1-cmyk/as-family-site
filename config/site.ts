// Public base URL of the deployed site. Set NEXT_PUBLIC_SITE_URL in the
// hosting environment (e.g. Vercel) to the real domain; falls back to the
// production domain so builds work with no env configuration.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://asfamily.gg"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "AS FAMILY",
  tagline: "Gaming. Community. Family.",
  description:
    "Join AS FAMILY, a gaming Discord community for Free Fire, Among Us, Valorant, Minecraft and more. Find teammates, join events, earn XP and become part of the family.",
  url: siteUrl,
  discordUrl: "https://discord.gg/PTEsKjkh",
  ogImage: "/branding/as-family-emblem.png",
} as const;
