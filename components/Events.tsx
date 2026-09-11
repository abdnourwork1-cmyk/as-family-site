"use client";

import { siteConfig } from "@/config/site";
import { events } from "@/data/events";
import { SectionHeading } from "@/components/SectionHeading";
import { CalendarIcon, DiscordIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export function Events() {
  return (
    <section id="events" className="relative bg-as-dark py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="Stay Active"
          title="COMMUNITY EVENTS"
          description="Examples of the kind of sessions the family organizes together. Exact schedules are announced live inside Discord."
        />

        <StaggerGroup
          stagger={0.08}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {events.map((event) => (
            <StaggerItem key={event.name}>
              <div className="glass-card card-hover group flex flex-col gap-4 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-as-gold/30 bg-as-gold/5 text-as-gold-bright transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]">
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <span
                  className="h-px w-8 origin-left scale-x-100 bg-as-gold/40 transition-all duration-300 ease-premium group-hover:w-14 group-hover:bg-as-gold"
                  aria-hidden="true"
                />
                <h3 className="font-display text-base font-bold tracking-wide text-as-white">
                  {event.name}
                </h3>
                <p className="text-sm leading-relaxed text-as-muted">
                  {event.description}
                </p>
              </div>
            </StaggerItem>
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
            JOIN EVENTS ON DISCORD
          </a>
        </Reveal>
      </div>
    </section>
  );
}
