import { getDiscordWidget } from "@/lib/discord";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { DiscordIcon } from "@/components/icons";

export async function DiscordLive() {
  const widget = await getDiscordWidget();
  const inviteUrl = widget?.instantInvite || siteConfig.discordUrl;
  const onlineMembers = widget?.members.filter((m) => m.avatarUrl) ?? [];

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

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal variant="left" duration={0.7} className="mx-auto w-full max-w-md">
            <div className="gold-border-glow glass-card relative rounded-2xl p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-as-gold/40 bg-as-gold/10 text-as-gold-bright">
                  <DiscordIcon className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-as-white">
                    {widget?.name ?? siteConfig.name}
                  </p>
                  {widget ? (
                    <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                      <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      LIVE
                    </span>
                  ) : (
                    <span className="mt-1 block text-xs font-medium uppercase tracking-widest text-as-muted">
                      Join the community on Discord
                    </span>
                  )}
                </div>
              </div>

              {widget ? (
                <div className="mt-7 border-t border-as-gold/15 pt-6">
                  <p className="font-display text-4xl font-bold text-as-gold-bright">
                    {widget.presenceCount}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-as-muted">
                    Online Now
                  </p>
                </div>
              ) : null}

              <a
                href={inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-7 w-full"
              >
                <DiscordIcon className="h-5 w-5" />
                JOIN DISCORD
              </a>
            </div>
          </Reveal>

          {onlineMembers.length > 0 ? (
            <Reveal variant="right" duration={0.7} className="flex flex-col gap-4">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-as-muted lg:text-left">
                Players Online
              </p>
              <StaggerGroup
                stagger={0.06}
                className="flex flex-wrap justify-center gap-3 lg:justify-start"
              >
                {onlineMembers.map((member) => (
                  <StaggerItem key={member.id} variant="scale" duration={0.4}>
                    <div className="glass-card flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.avatarUrl ?? undefined}
                        alt=""
                        width={28}
                        height={28}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-7 w-7 rounded-full object-cover"
                      />
                      <span className="max-w-[9rem] truncate text-xs font-medium text-as-white">
                        {member.username}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          ) : (
            <Reveal
              variant="right"
              duration={0.7}
              className="flex flex-col items-center justify-center gap-3 text-center lg:items-start lg:text-left"
            >
              <p className="max-w-sm text-sm leading-relaxed text-as-muted">
                Jump into voice channels, chat and play together — join now
                and see who&apos;s already inside.
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
