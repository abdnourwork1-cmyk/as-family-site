"use client";

import { motion, type Variants } from "framer-motion";
import { members, type MemberStatus } from "@/data/members";
import { SectionHeading } from "@/components/SectionHeading";
import { EASE, VIEWPORT, scaleIn, staggerContainer } from "@/lib/motion";

/**
 * Discord's default avatar index for the new (pomelo) username system:
 * (user_id >> 22) % 6. Snowflakes exceed MAX_SAFE_INTEGER, but the low-bit
 * imprecision from Number() is far below 2^22 and cannot change the result.
 */
function defaultAvatarIndex(id: string) {
  return Math.floor(Number(id) / 4194304) % 6;
}

/** Clean Discord-style placeholder used when a real avatar isn't available. */
function defaultAvatarUrl(id: string) {
  return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex(id)}.png`;
}

/**
 * The member's Discord avatar: their pinned CDN URL when set, otherwise the
 * clean Discord default derived from the User ID. If the pinned image ever
 * 404s (e.g. the member changed avatar), the <img> onError swaps in the
 * default too, so the circle is never empty.
 */
function resolvedAvatarUrl(id: string, override?: string | null) {
  return override ?? defaultAvatarUrl(id);
}

const STATUS_COLOR: Record<MemberStatus, string> = {
  online: "#3ba55d",
  idle: "#faa61a",
  dnd: "#ed4245",
  offline: "#747f8d",
};

const avatarPop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE, delay: 0.1 } },
};

export function Members() {
  return (
    <section id="members" className="relative bg-as-black py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="The Family"
          title="AS FAMILY MEMBERS"
          description="Meet the people who make the community."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={staggerContainer(0.08)}
          className="mx-auto mt-14 grid max-w-5xl list-none grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {members.map((member) => {
            const status: MemberStatus = member.status ?? "offline";
            return (
              <motion.li
                key={member.id}
                variants={scaleIn}
                transition={{ duration: 0.55, ease: EASE }}
                className="w-full max-w-sm"
              >
                <article className="glass-card card-hover group flex h-full flex-col items-center p-8 text-center">
                  <div className="relative h-24 w-24 shrink-0">
                    <motion.div
                      variants={avatarPop}
                      className="h-full w-full overflow-hidden rounded-full bg-as-surface ring-2 ring-as-gold/70 ring-offset-2 ring-offset-as-black shadow-[0_0_18px_rgba(212,175,55,0.18)] transition duration-300 ease-premium group-hover:scale-[1.04] group-hover:shadow-[0_0_26px_rgba(212,175,55,0.3)] group-hover:ring-as-gold motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={resolvedAvatarUrl(member.id, member.avatar)}
                        alt={`${member.name} Discord avatar`}
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (img.dataset.fallback) return;
                          img.dataset.fallback = "1";
                          img.src = defaultAvatarUrl(member.id);
                        }}
                      />
                    </motion.div>
                    <span
                      className="absolute bottom-0.5 right-0.5 h-5 w-5 rounded-full border-[3px] border-as-black"
                      style={{ backgroundColor: STATUS_COLOR[status] }}
                      role="img"
                      aria-label={`${status} on Discord`}
                    />
                  </div>

                  <h3 className="mt-5 break-words font-display text-lg font-bold tracking-wide text-as-white transition-transform duration-300 ease-premium group-hover:-translate-y-0.5">
                    {member.name}
                  </h3>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
