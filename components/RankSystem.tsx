"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { TrophyIcon, DiscordIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { usePointerGlow } from "@/hooks/usePointerGlow";
import { EASE, VIEWPORT, fadeRight, staggerContainer } from "@/lib/motion";

const perks = [
  "Chat and participate in the community",
  "Earn XP through eligible activity",
  "Reach new levels as you stay active",
  "Improve your community rank",
  "Unlock exclusive roles",
  "Gain recognition inside AS FAMILY",
];

const XP_PROGRESS = 41; // matches "533 / 1300 XP" example data below

export function RankSystem() {
  const { onPointerMove } = usePointerGlow<HTMLDivElement>();

  return (
    <section id="ranks" className="relative overflow-hidden bg-as-dark py-24 sm:py-28">
      <div
        className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-as-gold/10 blur-[110px] animate-breathe"
        aria-hidden="true"
      />
      <div className="container-as relative">
        <SectionHeading
          eyebrow="Secondary Feature"
          title="LEVEL UP INSIDE AS FAMILY"
          description="Community activity is rewarded. Chat, join events and stay active to earn XP, climb levels and unlock recognition — alongside the games, not instead of them."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal variant="left" duration={0.7} className="mx-auto w-full max-w-md">
            <div
              onPointerMove={onPointerMove}
              className="pointer-glow gold-border-glow glass-card relative rounded-2xl p-7 transition-shadow duration-300 ease-premium hover:shadow-gold sm:p-8"
            >
              <span className="absolute right-4 top-4 rounded-full border border-as-gold/30 bg-as-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-as-muted">
                Example Data
              </span>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-as-gold/40 bg-as-gold/10 text-as-gold-bright">
                  <TrophyIcon className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-as-white">LEVEL 7</p>
                  <p className="text-sm font-medium text-as-muted">RANK #15</p>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-as-muted">
                  <span>533 / 1300 XP</span>
                  <span>Next Level</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-as-black/60 ring-1 ring-as-gold/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${XP_PROGRESS}%` }}
                    viewport={VIEWPORT}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
                    className="h-full rounded-full bg-gold-gradient bg-[length:200%_100%] animate-shine"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-as-gold/15 pt-5">
                <span className="text-sm text-as-muted">Total XP</span>
                <span className="font-display text-lg font-bold text-as-gold-bright">
                  4,133
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              variants={staggerContainer(0.07)}
              className="flex flex-col gap-3"
            >
              {perks.map((perk) => (
                <motion.li
                  key={perk}
                  variants={fadeRight}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-as-gold" />
                  <span className="text-sm leading-relaxed text-as-muted sm:text-base">
                    {perk}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <Reveal variant="up" delay={0.1} className="mt-2 self-start">
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <DiscordIcon className="h-5 w-5" />
                START EARNING XP
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
