"use client";

import { siteConfig } from "@/config/site";
import { communityChannels } from "@/data/community";
import { SectionHeading } from "@/components/SectionHeading";
import { DiscordIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { usePointerGlow } from "@/hooks/usePointerGlow";

function ChannelCard({ channel }: { channel: (typeof communityChannels)[number] }) {
  const { onPointerMove } = usePointerGlow<HTMLDivElement>();

  return (
    <StaggerItem>
      <div
        onPointerMove={onPointerMove}
        className="pointer-glow glass-card card-hover p-5"
      >
        <h3 className="font-display text-sm font-bold tracking-wide text-as-gold-bright">
          {channel.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-as-muted">
          {channel.description}
        </p>
      </div>
    </StaggerItem>
  );
}

export function Community() {
  return (
    <section id="community" className="relative bg-as-black py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="Inside The Server"
          title="ONE SERVER, A WHOLE FAMILY"
          description="Here's what's waiting for you the moment you join the AS FAMILY Discord."
        />

        <StaggerGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {communityChannels.map((channel) => (
            <ChannelCard key={channel.name} channel={channel} />
          ))}
        </StaggerGroup>

        <Reveal variant="fade" delay={0.1} className="mt-14 flex justify-center">
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <DiscordIcon className="h-5 w-5" />
            ENTER THE SERVER
          </a>
        </Reveal>
      </div>
    </section>
  );
}
