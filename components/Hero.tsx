import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ParticleField } from "@/components/ParticleField";
import { DiscordIcon } from "@/components/icons";

const featureLabels = [
  "Multiple Games",
  "Gaming Community",
  "Events",
  "XP & Levels",
  "Voice Channels",
];

export function Hero() {
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
        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-as-gold/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-as relative grid items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="section-eyebrow">AS FAMILY GAMING COMMUNITY</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-wide text-as-white sm:text-5xl md:text-6xl">
            YOUR GAMING FAMILY
            <br />
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              STARTS HERE
            </span>
          </h1>
          <p className="mt-4 font-display text-sm font-semibold tracking-[0.25em] text-as-gold-bright sm:text-base">
            PLAY TOGETHER. RISE TOGETHER.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-as-muted sm:text-lg">
            Join AS FAMILY, connect with players across your favorite games,
            find teammates, join events, earn XP, climb community ranks and
            become part of the family.
          </p>

          <div className="mt-9 flex flex-col flex-wrap gap-4 sm:flex-row">
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <DiscordIcon className="h-5 w-5" />
              JOIN AS FAMILY
            </a>
            <a href="#games" className="btn-outline-gold">
              EXPLORE GAMES
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {featureLabels.map((label) => (
              <li
                key={label}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-as-muted sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-as-gold" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="absolute h-[85%] w-[85%] rounded-full bg-as-gold/15 blur-[90px] animate-pulse-glow"
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md animate-float">
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
        </div>
      </div>
    </section>
  );
}
