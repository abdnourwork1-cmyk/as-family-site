"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  type Variants,
} from "framer-motion";

import {
  members,
  type Member,
  type MemberStatus,
} from "@/data/members";

import { SectionHeading } from "@/components/SectionHeading";
import { DiscordIcon } from "@/components/icons";

import {
  EASE,
  VIEWPORT,
  scaleIn,
  staggerContainer,
} from "@/lib/motion";

type DiscordLiveMember = {
  id: string;

  name: string;

  avatar: string;

  status: MemberStatus;
};

type DiscordMembersResponse = {
  success: boolean;

  updatedAt?: string;

  members: DiscordLiveMember[];
};

function defaultAvatarIndex(
  id: string,
) {
  return (
    Math.floor(
      Number(id) / 4194304,
    ) % 6
  );
}

function defaultAvatarUrl(
  id: string,
) {
  return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex(
    id,
  )}.png`;
}

function resolvedAvatarUrl(
  id: string,

  liveAvatar?: string | null,

  fallbackAvatar?: string | null,
) {
  if (
    liveAvatar &&
    liveAvatar.trim() !== ""
  ) {
    return liveAvatar;
  }

  if (
    fallbackAvatar &&
    fallbackAvatar.trim() !== ""
  ) {
    return fallbackAvatar;
  }

  return defaultAvatarUrl(id);
}

const STATUS_COLOR: Record<
  MemberStatus,
  string
> = {
  online: "#3BA55D",

  idle: "#FAA61A",

  dnd: "#ED4245",

  offline: "#747F8D",
};

const STATUS_LABEL: Record<
  MemberStatus,
  string
> = {
  online: "ONLINE",

  idle: "IDLE",

  dnd: "DO NOT DISTURB",

  offline: "OFFLINE",
};

const avatarPop: Variants = {
  hidden: {
    opacity: 0,

    scale: 0.88,
  },

  show: {
    opacity: 1,

    scale: 1,

    transition: {
      duration: 0.5,

      ease: EASE,

      delay: 0.08,
    },
  },
};

function MemberCard({
  member,

  liveMember,
}: {
  member: Member;

  liveMember?: DiscordLiveMember;
}) {
  const status: MemberStatus =
    liveMember?.status ??
    member.status ??
    "offline";

  const displayName =
    liveMember?.name?.trim() ||
    member.name;

  const avatar = resolvedAvatarUrl(
    member.id,

    liveMember?.avatar,

    member.avatar,
  );

  return (
    <motion.li
      variants={scaleIn}
      transition={{
        duration: 0.55,

        ease: EASE,
      }}
      className="w-full"
    >
      <article
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-2xl
          border
          border-as-gold/20
          bg-gradient-to-br
          from-white/[0.035]
          via-as-surface/80
          to-black
          p-7
          text-center
          shadow-[0_18px_50px_-35px_rgba(0,0,0,0.95)]
          transition-all
          duration-500
          ease-premium
          hover:-translate-y-1.5
          hover:border-as-gold/45
          hover:shadow-[0_24px_65px_-34px_rgba(212,175,55,0.28)]
        "
      >
        {/* Top premium highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-8
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-as-gold/70
            to-transparent
            opacity-60
          "
          aria-hidden="true"
        />

        {/* Background atmosphere */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-10
            h-36
            w-36
            -translate-x-1/2
            rounded-full
            bg-as-gold/[0.07]
            blur-[60px]
            transition
            duration-500
            group-hover:bg-as-gold/[0.11]
          "
          aria-hidden="true"
        />

        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            items-center
          "
        >
          {/* Member badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-as-gold/25
              bg-as-gold/[0.05]
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-as-gold-bright
            "
          >
            <DiscordIcon
              className="h-3.5 w-3.5"
            />

            AS FAMILY MEMBER
          </div>

          {/* Avatar */}
          <div
            className="
              relative
              mt-6
              h-28
              w-28
              shrink-0
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -inset-3
                rounded-full
                bg-as-gold/[0.10]
                blur-xl
                transition
                duration-500
                group-hover:bg-as-gold/[0.16]
              "
              aria-hidden="true"
            />

            <motion.div
              variants={avatarPop}
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-full
                bg-as-surface
                ring-2
                ring-as-gold/60
                ring-offset-[3px]
                ring-offset-as-black
                shadow-[0_0_22px_rgba(212,175,55,0.16)]
                transition-all
                duration-300
                ease-premium
                group-hover:scale-[1.035]
                group-hover:ring-as-gold
                group-hover:shadow-[0_0_32px_rgba(212,175,55,0.28)]
                motion-reduce:transition-none
                motion-reduce:group-hover:scale-100
              "
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatar}
                alt={`${displayName} Discord avatar`}
                width={112}
                height={112}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="
                  h-full
                  w-full
                  object-cover
                "
                onError={(e) => {
                  const img =
                    e.currentTarget;

                  if (
                    img.dataset.fallback
                  ) {
                    return;
                  }

                  img.dataset.fallback =
                    "1";

                  img.src =
                    defaultAvatarUrl(
                      member.id,
                    );
                }}
              />
            </motion.div>

            {/* Live Discord status */}
            <span
              className="
                absolute
                bottom-0
                right-0
                h-6
                w-6
                rounded-full
                border-[4px]
                border-as-black
                transition-all
                duration-300
              "
              style={{
                backgroundColor:
                  STATUS_COLOR[status],

                boxShadow:
                  status === "offline"
                    ? "none"
                    : `0 0 14px ${STATUS_COLOR[status]}66`,
              }}
              role="img"
              aria-label={`${status} on Discord`}
            />
          </div>

          {/* Live Discord name */}
          <h3
            className="
              mt-6
              break-words
              font-display
              text-xl
              font-bold
              tracking-wide
              text-as-white
              transition-all
              duration-300
              group-hover:text-as-gold-bright
            "
          >
            {displayName}
          </h3>

          {/* Status */}
          <div
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                transition-all
                duration-300
              "
              style={{
                backgroundColor:
                  STATUS_COLOR[status],

                boxShadow:
                  status === "offline"
                    ? "none"
                    : `0 0 10px ${STATUS_COLOR[status]}66`,
              }}
              aria-hidden="true"
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-as-muted
              "
            >
              {STATUS_LABEL[status]}
            </span>
          </div>

          {/* Decorative bottom line */}
          <div
            className="
              mt-6
              h-px
              w-12
              bg-gradient-to-r
              from-transparent
              via-as-gold/50
              to-transparent
              transition-all
              duration-300
              group-hover:w-20
              group-hover:via-as-gold
            "
            aria-hidden="true"
          />
        </div>
      </article>
    </motion.li>
  );
}

export function Members() {
  const [
    liveMembers,
    setLiveMembers,
  ] = useState<
    Record<
      string,
      DiscordLiveMember
    >
  >({});

  const [
    discordConnected,
    setDiscordConnected,
  ] = useState(false);

  const [
    updatedAt,
    setUpdatedAt,
  ] = useState<string | null>(
    null,
  );

  useEffect(() => {
    let mounted = true;

    async function loadDiscordMembers() {
      try {
        const response = await fetch(
          "/api/discord-members",
          {
            method: "GET",

            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error(
            `Discord members request failed: ${response.status}`,
          );
        }

        const data =
          (await response.json()) as DiscordMembersResponse;

        if (!mounted) {
          return;
        }

        if (!data.success) {
          setDiscordConnected(false);

          return;
        }

        const nextMembers: Record<
          string,
          DiscordLiveMember
        > = {};

        for (
          const member of data.members
        ) {
          nextMembers[member.id] =
            member;
        }

        setLiveMembers(nextMembers);

        setDiscordConnected(true);

        if (data.updatedAt) {
          setUpdatedAt(
            data.updatedAt,
          );
        }
      } catch (error) {
        console.error(
          "[members] Discord live member request failed:",
          error,
        );

        if (mounted) {
          setDiscordConnected(
            false,
          );
        }
      }
    }

    // First load immediately.
    loadDiscordMembers();

    // Refresh Discord data every 30 seconds.
    const interval =
      window.setInterval(
        loadDiscordMembers,
        30_000,
      );

    return () => {
      mounted = false;

      window.clearInterval(
        interval,
      );
    };
  }, []);

  return (
    <section
      id="members"
      className="
        relative
        overflow-hidden
        bg-as-black
        pb-4
        pt-10
        sm:pb-6
        sm:pt-12
      "
    >
      {/* Top section separator */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-as-gold/20
          to-transparent
        "
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-16
          h-[320px]
          w-[760px]
          -translate-x-1/2
          rounded-full
          bg-as-gold/[0.025]
          blur-[120px]
        "
        aria-hidden="true"
      />

      <div
        className="
          container-as
          relative
        "
      >
        <SectionHeading
          eyebrow="The Family"
          title="AS FAMILY MEMBERS"
          description="Meet the people who make the AS FAMILY community."
        />

        {/* Discord API status */}
        <div
          className="
            mt-5
            flex
            justify-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-as-muted
            "
            title={
              updatedAt
                ? `Last Discord sync: ${updatedAt}`
                : undefined
            }
          >
            <span
              className={`
                h-2
                w-2
                rounded-full
                ${
                  discordConnected
                    ? "bg-[#3BA55D] shadow-[0_0_10px_rgba(59,165,93,0.65)]"
                    : "bg-[#747F8D]"
                }
              `}
            />

            {discordConnected
              ? "LIVE DISCORD MEMBERS"
              : "CONNECTING TO DISCORD"}
          </div>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={staggerContainer(
            0.07,
          )}
          className="
            mx-auto
            mt-10
            grid
            max-w-6xl
            list-none
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {members.map(
            (member) => (
              <MemberCard
                key={member.id}
                member={member}
                liveMember={
                  liveMembers[
                    member.id
                  ]
                }
              />
            ),
          )}
        </motion.ul>
      </div>
    </section>
  );
}