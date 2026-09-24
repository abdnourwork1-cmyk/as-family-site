import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/nav";
import { DiscordIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
  return (
    <footer className="relative border-t border-as-gold/15 bg-as-black pb-28 pt-16 lg:pb-16">
      <div className="container-as">
        <Reveal
          variant="fade"
          duration={0.6}
          className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left"
        >
          <div className="flex flex-col items-center lg:items-start">
            <div className="as-logo-shell as-logo-shell--footer">
              <Image
                src="/branding/as-family-emblem.png"
                alt="AS FAMILY emblem"
                width={84}
                height={84}
                className="as-logo-image h-20 w-20 object-contain"
                unoptimized
              />
            </div>
            <p className="mt-3 text-sm text-as-muted">
              Gaming. Community. Family.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-as-muted transition-colors duration-300 ease-premium hover:text-as-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-2.5"
          >
            <DiscordIcon className="h-4 w-4" />
            JOIN AS FAMILY
          </a>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-as-gold/10 pt-8 text-center">
          <p className="max-w-2xl text-xs leading-relaxed text-as-muted/80">
            AS FAMILY is an independent gaming community and is not
            affiliated with the publishers or developers of the games
            mentioned on this website.
          </p>
          <p className="text-xs text-as-muted/60">
            &copy; {new Date().getFullYear()} AS FAMILY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
