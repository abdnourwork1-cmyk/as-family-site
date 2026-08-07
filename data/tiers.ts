export type Tier = {
  name: string;
  level: string;
  description: string;
};

export const tiers: Tier[] = [
  { name: "RECRUIT", level: "Level 1+", description: "Every member starts here. Welcome to the family." },
  { name: "BRONZE", level: "Level 10+", description: "Consistent activity earns your first badge of recognition." },
  { name: "SILVER", level: "Level 20+", description: "A familiar face in the community, known and respected." },
  { name: "GOLD", level: "Level 35+", description: "An active core member trusted across the server." },
  { name: "ELITE", level: "Level 50+", description: "Elite status for the most dedicated AS FAMILY members." },
  { name: "ROYAL", level: "Level 75+", description: "Royal recognition reserved for the community's finest." },
  { name: "LEGEND", level: "Level 100+", description: "Legendary status. The highest honor inside AS FAMILY." },
];
