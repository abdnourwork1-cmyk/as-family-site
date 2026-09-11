import { siteConfig } from "@/config/site";
import { ParticleField } from "@/components/ParticleField";
import { DiscordIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";

export function DiscordCTA() {
  return (
    <section className="relative overflow-hidden bg-as-black py-24 sm:py-28">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <ParticleField />

      <div className="container-as relative">
        <Reveal
          variant="scale"
          duration={0.8}
          className="gold-border-glow glass-card mx-auto flex max-w-3xl flex-col items-center rounded-2xl px-6 py-14 text-center sm:px-14"
        >
          <div
            className="absolute -top-16 h-40 w-40 rounded-full bg-as-gold/20 blur-[80px] animate-breathe"
            aria-hidden="true"
          />
          <span className="section-eyebrow">Your Move</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-as-white sm:text-4xl md:text-5xl">
            READY TO JOIN THE FAMILY?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-as-muted sm:text-lg">
            Your next squad, teammate or gaming friend could already be
            inside AS FAMILY.
          </p>
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-9 !px-9 !py-4 !text-base"
          >
            <DiscordIcon className="h-5 w-5" />
            JOIN AS FAMILY NOW
          </a>
        </Reveal>
      </div>
    </section>
  );
}
