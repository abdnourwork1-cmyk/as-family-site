"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
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
  const crestRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 120, damping: 18, mass: 0.5 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 18, mass: 0.5 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canParallax = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canParallax) return;

    const el = crestRef.current;
    if (!el) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const py = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      rawX.set(Math.max(-1, Math.min(1, px)) * 8);
      rawY.set(Math.max(-1, Math.min(1, py)) * 8);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [prefersReducedMotion, rawX, rawY]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-as-black pt-28 pb-20"
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

      <div className="container-as relative grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.14, 0.05)}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.55, ease: EASE }}
            className="section-eyebrow"
          >
            AS FAMILY GAMING COMMUNITY
          </motion.span>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-wide text-as-white sm:text-5xl md:text-6xl">
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
            className="mt-4 font-display text-sm font-semibold tracking-[0.25em] text-as-gold-bright sm:text-base"
          >
            PLAY TOGETHER. RISE TOGETHER.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-as-muted sm:text-lg"
          >
            Join AS FAMILY, connect with players across your favorite games,
            find teammates, join events, earn XP, climb community ranks and
            become part of the family.
          </motion.p>

          <motion.div
            variants={staggerContainer(0.1, 0)}
            className="mt-9 flex flex-col flex-wrap gap-4 sm:flex-row"
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
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start"
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

        <div ref={crestRef} className="relative flex justify-center lg:justify-end">
          <div
            className="absolute h-[85%] w-[85%] rounded-full bg-as-gold/15 blur-[90px] animate-breathe"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            style={{ x: springX, y: springY }}
            className="relative w-full max-w-md"
          >
            <div className="animate-float">
              <Image
                src="/branding/as-family-emblem.png"
                alt="AS FAMILY crest — gold crown and wings emblem"
                width={800}
                height={800}
                priority
                className="relative z-10 w-full drop-shadow-[0_0_60px_rgba(212,175,55,0.35)]"
                sizes="(min-width: 1024px) 40vw, 80vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
