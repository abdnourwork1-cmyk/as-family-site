"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ParticleField } from "@/components/ParticleField";
import { DiscordIcon } from "@/components/icons";
import { EASE, fadeUp, staggerContainer } from "@/lib/motion";

const featureLabels = [
  "Multiple Games",
  "Gaming Community",
  "Events",
  "XP & Levels",
  "Voice Channels",
];

const headlineWords = ["YOUR", "GAMING", "FAMILY"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-as-black pb-10 pt-28 lg:min-h-[94svh]"
    >
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <ParticleField />

      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-as-gold/10 blur-[120px] animate-breathe"
        aria-hidden="true"
      />

      <div className="container-as relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.14, 0.05)}
          className="flex flex-col items-center text-center lg:max-w-[680px] lg:items-start lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.55, ease: EASE }}
            className="section-eyebrow"
          >
            AS FAMILY GAMING COMMUNITY
          </motion.span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.03] tracking-[0.025em] text-as-white sm:text-5xl md:text-6xl xl:text-[4rem]">
            <motion.span
              variants={staggerContainer(0.06, 0)}
              className="block overflow-hidden pb-1"
            >
              {headlineWords.map((word) => (
                <motion.span
                  key={word}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="mr-[0.25em] inline-block last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>

            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6, ease: EASE }}
              className="block overflow-hidden bg-gold-gradient bg-clip-text pb-1 text-transparent"
            >
              STARTS HERE
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: EASE }}
            className="mt-5 font-display text-xs font-semibold tracking-[0.3em] text-as-gold-bright sm:text-sm lg:text-[15px]"
          >
            PLAY TOGETHER. RISE TOGETHER.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-6 max-w-[36rem] text-base leading-[1.8] text-as-muted sm:text-[17px]"
          >
            Join AS FAMILY, connect with players across your favorite games,
            find teammates, join events, earn XP, climb community ranks and
            become part of the family.
          </motion.p>

          <motion.div
            variants={staggerContainer(0.1, 0)}
            className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row"
          >
            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.45, ease: EASE }}
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <DiscordIcon className="h-5 w-5" />
              JOIN AS FAMILY
            </motion.a>

            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.45, ease: EASE }}
              href="#games"
              className="btn-outline-gold"
            >
              EXPLORE GAMES
            </motion.a>
          </motion.div>

          <motion.ul
            variants={staggerContainer(0.06, 0.1)}
            className="mt-9 flex max-w-[620px] flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start"
          >
            {featureLabels.map((label) => (
              <motion.li
                key={label}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-as-muted sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-as-gold" />
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative flex justify-center lg:translate-y-3 lg:justify-end lg:pl-6 xl:translate-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.965, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="relative w-full max-w-[440px] xl:max-w-[460px]"
          >
            <div className="as-logo-shell as-logo-shell--hero">
              <Image
                src="/branding/as-family-emblem.png"
                alt="AS FAMILY crest — gold crown and wings emblem"
                width={1254}
                height={1254}
                priority
                unoptimized
                className="as-logo-image relative z-10 w-full"
                sizes="(min-width: 1024px) 40vw, 80vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}