"use client";

import type { Game } from "@/data/games";
import { gameIcons } from "@/components/icons";
import { usePointerGlow } from "@/hooks/usePointerGlow";

const FALLBACK_IMAGE = "/games/fallback.svg";

export function GameCard({ game }: { game: Game }) {
  const Icon = gameIcons[game.icon];
  const { onPointerMove } = usePointerGlow<HTMLDivElement>();

  return (
    <article
      onPointerMove={onPointerMove}
      className="
        pointer-glow
        group
        relative
        min-h-[350px]
        overflow-hidden
        rounded-2xl
        border
        border-as-gold/20
        bg-as-surface
        shadow-[0_16px_45px_-30px_rgba(0,0,0,0.9)]
        transition-all
        duration-500
        ease-premium
        hover:-translate-y-1.5
        hover:border-as-gold/50
        hover:shadow-[0_24px_70px_-28px_rgba(212,175,55,0.32)]
        sm:min-h-[370px]
      "
    >
      {/* =====================================================
          GAME ARTWORK
      ====================================================== */}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={game.image}
        alt={game.imageAlt}
        width={900}
        height={600}
        loading="lazy"
        decoding="async"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          opacity-[0.88]
          saturate-[1.04]
          transition-all
          duration-700
          ease-out
          group-hover:scale-[1.045]
          group-hover:opacity-100
          group-hover:saturate-[1.08]
          motion-reduce:transition-none
          motion-reduce:group-hover:scale-100
        "
        onError={(e) => {
          const img = e.currentTarget;

          if (img.dataset.fallback) return;

          img.dataset.fallback = "1";
          img.src = FALLBACK_IMAGE;
        }}
      />

      {/* =====================================================
          CINEMATIC OVERLAYS
      ====================================================== */}

      {/* Main vertical overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/65
          to-black/5
        "
        aria-hidden="true"
      />

      {/* Extra lower contrast for title + text */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[78%]
          bg-gradient-to-t
          from-black
          via-black/55
          to-transparent
        "
        aria-hidden="true"
      />

      {/* Subtle side shadow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/20
          via-transparent
          to-black/10
        "
        aria-hidden="true"
      />

      {/* Premium gold atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-24
          h-64
          w-64
          rounded-full
          bg-as-gold/[0.10]
          blur-[85px]
          transition-all
          duration-500
          group-hover:bg-as-gold/[0.17]
        "
        aria-hidden="true"
      />

      {/* Top gold highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-as-gold/60
          to-transparent
          opacity-60
        "
        aria-hidden="true"
      />

      {/* Inner premium border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[15px]
          border
          border-white/[0.025]
        "
        aria-hidden="true"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[350px]
          flex-col
          justify-end
          p-6
          sm:min-h-[370px]
          sm:p-7
        "
      >
        {/* Icon */}

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-as-gold/40
            bg-black/65
            text-as-gold-bright
            shadow-[0_8px_24px_-14px_rgba(0,0,0,0.9)]
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:border-as-gold/70
            group-hover:bg-as-gold/10
            group-hover:shadow-[0_0_24px_rgba(212,175,55,0.22)]
          "
        >
          <Icon className="h-6 w-6" />
        </div>

        {/* Game name */}

        <h3
          className="
            mt-5
            font-display
            text-2xl
            font-bold
            tracking-wide
            text-white
            drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]
            sm:text-[28px]
          "
        >
          {game.name}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            max-w-md
            text-sm
            leading-7
            text-white/70
            drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]
            sm:text-[15px]
          "
        >
          {game.description}
        </p>

        {/* CTA */}

        <div className="mt-6">
          <a
            href={game.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              font-display
              text-xs
              font-bold
              tracking-[0.18em]
              text-as-gold-bright
              transition-all
              duration-300
              hover:text-white
              sm:text-sm
            "
            aria-label={`Find ${game.name} players on the AS FAMILY Discord`}
          >
            FIND PLAYERS

            <span
              className="
                text-base
                transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}