import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Games() {
  return (
    <section
      id="games"
      className="relative scroll-mt-24 bg-as-black pb-24 pt-28 sm:pb-28 sm:pt-32"
    >
      <div className="container-as">
        <SectionHeading
          eyebrow="What We Play"
          title="GAMES WE PLAY"
          description="From battle royale to social deduction, tactical shooters to sandbox survival — the family plays it all."
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
