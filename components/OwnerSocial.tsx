"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePointerGlow } from "@/hooks/usePointerGlow";
import { EASE, fadeUp } from "@/lib/motion";

function CrownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l3.5 3L12 4l5.5 7L21 8l-2 10H5L3 8Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 18h14"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M15.2 3c.4 2.2 1.7 3.6 3.8 4v3.1a8 8 0 0 1-3.8-1.1v5.9a6 6 0 1 1-5.2-5.95v3.15a2.9 2.9 0 1 0 2.1 2.8V3h3.1Z" />
    </svg>
  );
}

function KickIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 4v16M5 12h4l5-8h5l-6 8 6 8h-5l-5-8H5"
      />
    </svg>
  );
}

export function OwnerSocial() {
  const { onPointerMove } = usePointerGlow<HTMLDivElement>();

  return (
    <section
      id="owner"
      className="relative overflow-hidden bg-as-black py-8 sm:py-10"
    >
      {/* Section separator */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-as-gold/30 to-transparent"
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-as-gold/[0.045] blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-as relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div
            onPointerMove={onPointerMove}
            className="
              pointer-glow
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-as-gold/30
              bg-gradient-to-br
              from-as-gold/[0.07]
              via-[#0c0c0c]
              to-black
              p-6
              shadow-[0_26px_80px_-38px_rgba(212,175,55,0.38)]
              transition-all
              duration-500
              hover:border-as-gold/45
              sm:p-8
              lg:p-9
            "
          >
            {/* Top gold line */}
            <div
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-as-gold/80 to-transparent"
              aria-hidden="true"
            />

            {/* AS FAMILY watermark */}
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                top-1/2
                hidden
                h-[340px]
                w-[340px]
                -translate-y-1/2
                opacity-[0.035]
                lg:block
              "
              aria-hidden="true"
            >
              <Image
                src="/branding/as-family-emblem.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Gold corner glow */}
            <div
              className="
                pointer-events-none
                absolute
                -left-28
                -top-28
                h-64
                w-64
                rounded-full
                bg-as-gold/[0.08]
                blur-[90px]
              "
              aria-hidden="true"
            />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
              {/* =====================================================
                  OWNER INFO
              ====================================================== */}

              <div className="flex flex-col items-center gap-7 text-center sm:flex-row sm:text-left">
                {/* Owner image */}
                <motion.div
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="relative shrink-0"
                >
                  <div
                    className="absolute -inset-5 rounded-[34px] bg-as-gold/[0.13] blur-2xl"
                    aria-hidden="true"
                  />

                  <div
                    className="
                      relative
                      rounded-[24px]
                      border
                      border-as-gold/50
                      bg-gradient-to-br
                      from-as-gold/20
                      via-transparent
                      to-as-gold/5
                      p-[3px]
                      shadow-[0_0_38px_rgba(212,175,55,0.16)]
                    "
                  >
                    <Image
                      src="/branding/asmaa-owner.webp"
                      alt="ASMAA - AS FAMILY Owner"
                      width={180}
                      height={180}
                      className="
                        h-28
                        w-28
                        rounded-[20px]
                        object-cover
                        sm:h-32
                        sm:w-32
                        lg:h-36
                        lg:w-36
                      "
                    />
                  </div>
                </motion.div>

                {/* Owner text */}
                <div className="max-w-xl">
                  <div className="flex justify-center sm:justify-start">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-as-gold/30
                        bg-as-gold/[0.06]
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.24em]
                        text-as-gold-bright
                      "
                    >
                      <CrownIcon />
                      OFFICIAL OWNER
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.32em] text-as-gold">
                    AS FAMILY OWNER
                  </p>

                  <h2
                    className="
                      mt-2
                      font-display
                      text-4xl
                      font-bold
                      tracking-wide
                      text-as-white
                      sm:text-5xl
                    "
                  >
                    ASMAA
                  </h2>

                  <p
                    className="
                      mt-2
                      font-display
                      text-xs
                      font-semibold
                      tracking-[0.2em]
                      text-as-gold-bright
                      sm:text-sm
                    "
                  >
                    OWNER & COMMUNITY LEADER
                  </p>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-as-muted sm:text-base">
                    Follow ASMAA and stay connected with the person behind the
                    AS FAMILY community.
                  </p>

                  {/* Brand signature */}
                  <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start">
                    <span className="h-px w-8 bg-as-gold/50" />

                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-as-gold/80 sm:text-xs">
                      Play Together. Rise Together.
                    </span>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  SOCIAL LINKS
              ====================================================== */}

              <div
                className="
                  relative
                  grid
                  w-full
                  gap-3
                  border-t
                  border-as-gold/15
                  pt-7
                  sm:grid-cols-2
                  lg:w-auto
                  lg:min-w-[300px]
                  lg:grid-cols-1
                  lg:border-l
                  lg:border-t-0
                  lg:pl-9
                  lg:pt-0
                "
              >
                {/* TIKTOK */}
                <a
                  href="https://www.tiktok.com/@asmaa.piwpiwa?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/tiktok
                    inline-flex
                    min-h-[58px]
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-[#25F4EE]/35
                    bg-black/45
                    px-6
                    py-4
                    font-display
                    text-sm
                    font-bold
                    tracking-[0.12em]
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#25F4EE]/80
                    hover:bg-white/[0.035]
                    hover:shadow-[0_0_28px_rgba(37,244,238,0.12),0_0_28px_rgba(254,44,85,0.10)]
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#25F4EE]/20
                      bg-gradient-to-br
                      from-[#25F4EE]/10
                      to-[#FE2C55]/10
                      text-white
                      transition-all
                      duration-300
                      group-hover/tiktok:shadow-[0_0_18px_rgba(37,244,238,0.15),0_0_18px_rgba(254,44,85,0.12)]
                    "
                  >
                    <TikTokIcon />
                  </span>

                  FOLLOW ON TIKTOK
                </a>

                {/* KICK */}
                <a
                  href="https://kick.com/asmaapiwpiwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/kick
                    inline-flex
                    min-h-[58px]
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-[#53FC18]/45
                    bg-[#53FC18]/[0.035]
                    px-6
                    py-4
                    font-display
                    text-sm
                    font-bold
                    tracking-[0.12em]
                    text-[#53FC18]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#53FC18]
                    hover:bg-[#53FC18]/10
                    hover:text-[#8AFF5F]
                    hover:shadow-[0_0_32px_rgba(83,252,24,0.18)]
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#53FC18]/20
                      bg-[#53FC18]/10
                      text-[#53FC18]
                      transition-all
                      duration-300
                      group-hover/kick:bg-[#53FC18]/15
                      group-hover/kick:shadow-[0_0_18px_rgba(83,252,24,0.18)]
                    "
                  >
                    <KickIcon />
                  </span>

                  WATCH LIVE ON KICK
                </a>

                <p
                  className="
                    mt-1
                    hidden
                    text-center
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-as-muted/70
                    lg:block
                  "
                >
                  Connect with ASMAA
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}