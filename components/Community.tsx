import { siteConfig } from "@/config/site";
import { communityChannels } from "@/data/community";
import { SectionHeading } from "@/components/SectionHeading";
import { DiscordIcon } from "@/components/icons";

export function Community() {
  return (
    <section id="community" className="relative bg-as-black py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="Inside The Server"
          title="ONE SERVER, A WHOLE FAMILY"
          description="Here's what's waiting for you the moment you join the AS FAMILY Discord."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {communityChannels.map((channel) => (
            <div
              key={channel.name}
              className="glass-card card-hover p-5"
            >
              <h3 className="font-display text-sm font-bold tracking-wide text-as-gold-bright">
                {channel.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-as-muted">
                {channel.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <DiscordIcon className="h-5 w-5" />
            ENTER THE SERVER
          </a>
        </div>
      </div>
    </section>
  );
}
