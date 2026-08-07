import { siteConfig } from "@/config/site";
import { DiscordIcon } from "@/components/icons";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-as-gold/20 bg-as-black/95 p-3 backdrop-blur-md lg:hidden">
      <a
        href={siteConfig.discordUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full !py-3"
      >
        <DiscordIcon className="h-5 w-5" />
        JOIN DISCORD
      </a>
    </div>
  );
}
