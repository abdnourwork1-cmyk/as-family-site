"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { DiscordIcon } from "@/components/icons";
import { EASE } from "@/lib/motion";

export function MobileStickyCTA() {
  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-as-gold/20 bg-as-black/95 p-3 backdrop-blur-md lg:hidden"
    >
      <a
        href={siteConfig.discordUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full !py-3"
      >
        <DiscordIcon className="h-5 w-5" />
        JOIN DISCORD
      </a>
    </motion.div>
  );
}
