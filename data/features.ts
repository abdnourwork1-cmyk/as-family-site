export type Feature = {
  title: string;
  description: string;
  icon: "users" | "mic" | "calendar" | "trophy" | "shield" | "heart";
};

export const features: Feature[] = [
  {
    title: "FIND TEAMMATES",
    description: "Stop playing alone. Find members who enjoy the same games.",
    icon: "users",
  },
  {
    title: "VOICE CHANNELS",
    description:
      "Join voice rooms, coordinate with your squad and chill with the community.",
    icon: "mic",
  },
  {
    title: "COMMUNITY EVENTS",
    description:
      "Join community nights, challenges and organized gaming sessions.",
    icon: "calendar",
  },
  {
    title: "XP & LEVELS",
    description:
      "Earn XP through activity and climb the AS FAMILY community levels.",
    icon: "trophy",
  },
  {
    title: "ROLES & RECOGNITION",
    description:
      "Unlock roles and community recognition as you become more active.",
    icon: "shield",
  },
  {
    title: "MAKE FRIENDS",
    description:
      "AS FAMILY is about gaming, but also about creating a real community.",
    icon: "heart",
  },
];
