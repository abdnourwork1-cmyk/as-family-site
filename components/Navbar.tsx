"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/nav";
import { DiscordIcon, MenuIcon, CloseIcon } from "@/components/icons";
import { useActiveSection } from "@/hooks/useActiveSection";
import { EASE } from "@/lib/motion";

const SECTION_IDS = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium ${
        scrolled
          ? "border-b border-as-gold/15 bg-as-black/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-as flex h-20 items-center justify-between"
      >
        <Link
          href="#home"
          aria-label="AS FAMILY home"
          className="flex items-center focus-visible:outline-2 focus-visible:outline-as-gold-bright"
        >
          <span className="as-logo-shell as-logo-shell--nav" aria-hidden="true">
            <Image
              src="/branding/as-family-emblem.png"
              alt=""
              width={58}
              height={58}
              className="as-logo-image h-14 w-14 object-contain"
              priority
              unoptimized
            />
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative inline-block py-1 text-sm font-medium tracking-wide transition-colors duration-300 ease-premium ${
                    isActive ? "text-as-gold-bright" : "text-as-muted hover:text-as-gold-bright"
                  }`}
                >
                  {link.label}
                  <span
                    className={`pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-as-gold transition-transform duration-300 ease-premium group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !px-5 !py-2.5 !text-xs"
          >
            <DiscordIcon className="h-4 w-4" />
            JOIN DISCORD
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-as-gold/30 text-as-gold-bright transition-transform duration-200 ease-premium active:scale-95 lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-as-gold/15 bg-as-black/97 backdrop-blur-md transition-[max-height] duration-300 ease-premium lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-as flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-as-white/90 transition-colors duration-200 ease-premium hover:bg-as-gold/10 hover:text-as-gold-bright"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold w-full"
            >
              <DiscordIcon className="h-4 w-4" />
              JOIN DISCORD
            </a>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}
