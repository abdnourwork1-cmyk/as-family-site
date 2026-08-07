"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/nav";
import { DiscordIcon, MenuIcon, CloseIcon } from "@/components/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
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
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-as-gold-bright"
        >
          <Image
            src="/branding/as-family-emblem.png"
            alt="AS FAMILY emblem"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="font-display text-lg font-bold tracking-[0.15em] text-as-white">
            AS <span className="text-as-gold">FAMILY</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide text-as-muted transition-colors hover:text-as-gold-bright"
              >
                {link.label}
              </Link>
            </li>
          ))}
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
          className="flex h-10 w-10 items-center justify-center rounded-md border border-as-gold/30 text-as-gold-bright lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-as-gold/15 bg-as-black/97 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-as flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-as-white/90 transition-colors hover:bg-as-gold/10 hover:text-as-gold-bright"
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
    </header>
  );
}
