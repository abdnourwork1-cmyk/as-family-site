"use client";

import type { Game } from "@/data/games";
import { gameIcons } from "@/components/icons";

const FALLBACK_IMAGE = "/games/fallback.svg";

export function GameCard({ game }: { game: Game }) {
  const Icon = gameIcons[game.icon];

  return (
    <div className="glass-card group flex h-full flex-col overflow-hidden bg-as-surface/70 shadow-[0_2px_12px_-6px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1 hover:border-as-gold/45 hover:shadow-[0_12px_30px_-14px_rgba(0,0,0,0.7)]">
      <div className="relative h-40 w-full overflow-hidden sm:h-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={game.image}
          alt={game.imageAlt}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallback) return;
            img.dataset.fallback = "1";
            img.src = FALLBACK_IMAGE;
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-as-black/70 via-as-black/15 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-as-gold/30 bg-as-gold/5 text-as-gold-bright transition-colors group-hover:bg-as-gold/15">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold tracking-wide text-as-white">
          {game.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-as-muted">
          {game.description}
        </p>
        <a
          href={game.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold mt-5 !py-2.5 !text-xs"
          aria-label={`Find ${game.name} players on the AS FAMILY Discord`}
        >
          FIND PLAYERS
        </a>
      </div>
    </div>
  );
}
