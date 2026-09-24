import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/StaggerGroup";

export function Games() {
  return (
    <section
      id="games"
      className="relative scroll-mt-24 overflow-hidden bg-as-black pb-10 pt-10 sm:pb-12 sm:pt-14 lg:pt-16"
    >
      {/* Subtle separator between Hero and Games */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-as-gold/30 to-transparent"
        aria-hidden="true"
      />

      {/* Soft premium gold atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[680px] -translate-x-1/2 rounded-full bg-as-gold/[0.035] blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-as relative">
        <SectionHeading
          eyebrow="What We Play"
          title="GAMES WE PLAY"
          description="From battle royale to social deduction, tactical shooters to sandbox survival — the family plays it all."
        />

        <StaggerGroup
          stagger={0.1}
          className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {games.map((game) => (
            <StaggerItem key={game.slug} className="h-full">
              <GameCard game={game} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}