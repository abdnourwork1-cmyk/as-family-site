"use client";

import { tiers } from "@/data/tiers";
import { CrownIcon } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export function LevelTiers() {
  return (
    <section className="relative bg-as-black py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="Progression"
          title="LEVEL TIERS"
          description="Climb the ranks from Recruit to Legend as your activity inside the family grows."
        />

        <StaggerGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7"
        >
          {tiers.map((tier, index) => {
            const intensity = 0.15 + (index / (tiers.length - 1)) * 0.55;
            const isTopTier = index >= tiers.length - 2;
            const glowShadow = isTopTier
              ? `0 0 ${index === tiers.length - 1 ? 32 : 22}px rgba(212,175,55,${
                  index === tiers.length - 1 ? 0.32 : 0.22
                })`
              : "none";

            return (
              <StaggerItem key={tier.name} variant="up" duration={0.5}>
                <div
                  className="card-hover glass-card group flex h-full flex-col items-center gap-3 rounded-xl p-5 text-center transition-shadow duration-300 ease-premium"
                  style={{
                    boxShadow: `inset 0 0 0 1px rgba(212,175,55,${intensity})${
                      glowShadow !== "none" ? `, ${glowShadow}` : ""
                    }`,
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border text-as-gold-bright transition-transform duration-300 ease-premium group-hover:scale-110"
                    style={{ borderColor: `rgba(212,175,55,${intensity + 0.2})` }}
                  >
                    <CrownIcon className="h-6 w-6" />
                  </div>
                  <p className="font-display text-sm font-bold tracking-widest text-as-white">
                    {tier.name}
                  </p>
                  <p className="text-xs font-medium text-as-gold-bright">
                    {tier.level}
                  </p>
                  <p className="text-xs leading-relaxed text-as-muted">
                    {tier.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
