export type MemberStatus =
  | "online"
  | "idle"
  | "dnd"
  | "offline";

export type Member = {
  id: string;
  name: string;
  avatar?: string | null;
  status?: MemberStatus;
};

const CDN =
  "https://cdn.discordapp.com/avatars";

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

  {
    id: "1169744317410201622",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "1423653514734866506",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "691994977743405066",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "1400419683319939153",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "1423966684112359564",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "1542991247369568402",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },

  {
    id: "922465225926664213",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "1403407302404608071",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "1374732303015608351",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "804378595912056882",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
  {
    id: "1428345004216025221",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },

  // Latest member
  {
    id: "1486835968203034695",
    name: "AS FAMILY MEMBER",
    avatar: null,
  },
];