import { siteConfig } from "@/config/site";
import { events } from "@/data/events";
import { SectionHeading } from "@/components/SectionHeading";
import { CalendarIcon, DiscordIcon } from "@/components/icons";

export function Events() {
  return (
    <section id="events" className="relative bg-as-dark py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="Stay Active"
          title="COMMUNITY EVENTS"
          description="Examples of the kind of sessions the family organizes together. Exact schedules are announced live inside Discord."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {events.map((event) => (
            <div key={event.name} className="glass-card card-hover flex flex-col gap-4 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-as-gold/30 bg-as-gold/5 text-as-gold-bright">
                <CalendarIcon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold tracking-wide text-as-white">
                {event.name}
              </h3>
              <p className="text-sm leading-relaxed text-as-muted">
                {event.description}
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
            JOIN EVENTS ON DISCORD
          </a>
        </div>
      </div>
    </section>
  );
}
