export type MemberStatus = "online" | "idle" | "dnd" | "offline";

export type Member = {
  /**
   * Discord User ID. Source of truth for resolving the member's Discord
   * profile avatar.
   */
  id: string;
  /** Display name, shown on the card exactly as provided. */
  name: string;
  /**
   * Direct Discord CDN avatar URL for this member
   * (`https://cdn.discordapp.com/avatars/<id>/<hash>.png`).
   *
   * Leave unset (or set to null) for members with no custom avatar — the card
   * then shows Discord's clean default placeholder derived from the User ID.
   * If a member changes their avatar, update the hash here; until then the
   * card falls back to the default placeholder automatically.
   */
  avatar?: string | null;
  /**
   * Presence shown by the status dot. Defaults to "offline" when unknown.
   */
  status?: MemberStatus;
};

const CDN = "https://cdn.discordapp.com/avatars";

/**
 * AS FAMILY members, displayed in this exact order.
 * To add a future member, append another object to this array.
 */
export const members: Member[] = [
  {
    id: "1057641152985178123",
    name: "AS ASMAA",
    avatar: `${CDN}/1057641152985178123/a_cd83cfba2c9b1e536d1aa7327639c3c2.png?size=256`,
  },
  {
    id: "1416106842043580497",
    name: "AS ALONE exe !...",
    avatar: `${CDN}/1416106842043580497/2ff09345a23c8f8510822178e40621e3.png?size=256`,
  },
  {
    id: "1445172949907669174",
    name: "𝕶𝖚𝖟𝖆 𝖑𝖆7𝖒𝖆9",
    avatar: `${CDN}/1445172949907669174/fd254ca20fbe4424e1efbce393f90555.png?size=256`,
  },
  {
    id: "651901933581500416",
    name: "AS YSF",
    avatar: `${CDN}/651901933581500416/f4f760cccaf1ed4f1b32fa0af6e099a8.png?size=256`,
  },
  {
    id: "709186932805992519",
    name: "AS Y",
    avatar: `${CDN}/709186932805992519/e30e4e66b785b67aea6ad7d9275e36cb.png?size=256`,
  },
  {
    id: "1170208773823025226",
    name: "AS lm4obech",
    avatar: `${CDN}/1170208773823025226/399bbf3c9b232fe00a8c64834e139703.png?size=256`,
  },
  {
    id: "785448014499414017",
    name: "AS ZENAB",
    avatar: null,
  },
  {
    id: "1459228778835349514",
    name: "AS Yassine",
    avatar: `${CDN}/1459228778835349514/6cb83c3522dfedf4d00b362db015a2d0.png?size=256`,
  },
  {
    id: "1537920356860559381",
    name: "AS JNX",
    avatar: `${CDN}/1537920356860559381/efeb949b970d2ceaf717c9ca2ffcd3e7.png?size=256`,
  },
];
