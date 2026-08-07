import type { Game } from "@/data/games";
import { gameIcons } from "@/components/icons";

export function GameCard({ game }: { game: Game }) {
  const Icon = gameIcons[game.icon];

  return (
    <div className="glass-card card-hover group flex flex-col p-6 sm:p-7">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-as-gold/30 bg-as-gold/5 text-as-gold-bright transition-colors group-hover:bg-as-gold/15">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold tracking-wide text-as-white">
        {game.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-as-muted">
        {game.description}
      </p>
      <a
        href={game.discordUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-gold mt-6 !py-2.5 !text-xs"
        aria-label={`Find ${game.name} players on the AS FAMILY Discord`}
      >
        FIND PLAYERS
      </a>
    </div>
  );
}
