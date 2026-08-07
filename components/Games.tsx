import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Games() {
  return (
    <section id="games" className="relative bg-as-black py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="What We Play"
          title="GAMES WE PLAY"
          description="From battle royale to social deduction, tactical shooters to sandbox survival — the family plays it all."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
