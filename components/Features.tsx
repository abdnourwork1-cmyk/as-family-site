"use client";

import type { Feature } from "@/data/features";
import { features } from "@/data/features";
import { featureIcons } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { usePointerGlow } from "@/hooks/usePointerGlow";

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = featureIcons[feature.icon];
  const { onPointerMove } = usePointerGlow<HTMLDivElement>();

  return (
    <div
      onPointerMove={onPointerMove}
      className="pointer-glow glass-card group flex flex-col gap-4 p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-as-gold/45 hover:shadow-gold sm:p-7"
    >
      <Reveal variant="up" duration={0.45}>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-as-gold/30 bg-as-gold/5 text-as-gold-bright transition-all duration-300 ease-premium group-hover:border-as-gold/60 group-hover:bg-as-gold/15 group-hover:text-as-gold-bright group-hover:shadow-[0_0_18px_rgba(212,175,55,0.3)]">
          <Icon className="h-6 w-6" />
        </div>
      </Reveal>
      <Reveal variant="up" delay={0.08} duration={0.45}>
        <h3 className="font-display text-lg font-bold tracking-wide text-as-white">
          {feature.title}
        </h3>
      </Reveal>
      <Reveal variant="up" delay={0.16} duration={0.45}>
        <p className="text-sm leading-relaxed text-as-muted">
          {feature.description}
        </p>
      </Reveal>
    </div>
  );
}

export function Features() {
  return (
    <section className="relative bg-as-dark py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="The Difference"
          title="WHY AS FAMILY?"
          description="A gaming community built around real connection, not just a name on a member list."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
