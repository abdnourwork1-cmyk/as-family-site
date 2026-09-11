import { getDiscordInviteStats } from "@/lib/discord";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DiscordIcon } from "@/components/icons";

const CARD_HOVER =
  "transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-as-gold/40 hover:shadow-[0_10px_30px_-12px_rgba(212,175,55,0.25)]";

export async function DiscordLive() {
  const stats = await getDiscordInviteStats();

  return (
    <section className="relative overflow-hidden bg-as-dark py-24 sm:py-28">
      <div
        className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-as-gold/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-as relative">
        <SectionHeading
          eyebrow="Live Community"
          title="JOIN THE AS FAMILY DISCORD"
          description="Find your squad, join voice channels, play together and become part of the family."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Identity card — who we are + the CTA */}
          <Reveal variant="up" duration={0.6} className="h-full">
            <div
              className={`glass-card ${CARD_HOVER} flex h-full flex-col justify-between p-7 sm:p-8`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-as-gold/40 bg-as-gold/10 text-as-gold-bright">
                  <DiscordIcon className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-as-white">
                    {stats?.guildName ?? siteConfig.name}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-as-muted">
                    Join the community on Discord
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-8 w-full"
              >
                <DiscordIcon className="h-5 w-5" />
                JOIN DISCORD
              </a>
            </div>
          </Reveal>

          {/* Live stats card — real invite data, or a balanced fallback */}
          <Reveal variant="up" delay={0.1} duration={0.6} className="h-full">
            {stats ? (
              <div
                className={`gold-border-glow glass-card ${CARD_HOVER} flex h-full flex-col p-7 sm:p-8`}
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-400">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Live
                </span>

                <div className="mt-6">
                  <p className="font-display text-6xl font-extrabold leading-none tracking-tight bg-gold-gradient bg-clip-text text-transparent sm:text-7xl">
                    {stats.presenceCount}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-as-muted">
                    Online Now
                  </p>
                </div>

                <div className="mt-auto flex items-baseline gap-2 border-t border-as-gold/15 pt-6">
                  <span className="font-display text-2xl font-bold text-as-white">
                    {stats.memberCount}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-as-muted">
                    Members
                  </span>
                </div>
              </div>
            ) : (
              <div
                className={`glass-card ${CARD_HOVER} flex h-full flex-col items-center justify-center gap-3 p-7 text-center sm:p-8`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-as-gold/30 bg-as-gold/5 text-as-gold-bright">
                  <DiscordIcon className="h-7 w-7" />
                </div>
                <p className="font-display text-base font-bold text-as-white">
                  Live stats are on their way
                </p>
                <p className="max-w-xs text-sm leading-relaxed text-as-muted">
                  Real-time online activity will appear here once the
                  community&apos;s live status is available.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
