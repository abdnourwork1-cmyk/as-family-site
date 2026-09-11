/**
 * Server-side reader for Discord's public Server Widget JSON endpoint.
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-json
 *
 * No bot token or secret is required — this is a public, unauthenticated
 * endpoint that only works if the server owner has enabled "Server Widget"
 * in Discord's Server Settings. If it's disabled, or the request fails for
 * any reason, this returns null and callers must render a graceful fallback.
 */

export type DiscordWidgetMember = {
  id: string;
  username: string;
  avatarUrl: string | null;
  status: string | null;
};

export type DiscordWidget = {
  name: string;
  /** Invite URL from the widget, when Discord provides one. */
  instantInvite: string | null;
  /** Real-time count of members visible through the widget. Not the total member count. */
  presenceCount: number;
  /** Small sample of visible online members (already capped). */
  members: DiscordWidgetMember[];
};

const DEFAULT_GUILD_ID = "1327023198323347496";
const GUILD_ID = process.env.DISCORD_GUILD_ID ?? DEFAULT_GUILD_ID;
const WIDGET_URL = `https://discord.com/api/guilds/${GUILD_ID}/widget.json`;
const REVALIDATE_SECONDS = 90;
const MAX_MEMBERS_SHOWN = 6;

function readString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function readMembers(value: unknown): DiscordWidgetMember[] {
  if (!Array.isArray(value)) return [];

  const members: DiscordWidgetMember[] = [];
  for (const entry of value) {
    if (!entry || typeof entry !== "object") continue;
    const record = entry as Record<string, unknown>;
    const username = readString(record.username);
    if (!username) continue;

    members.push({
      id: readString(record.id) ?? username,
      username,
      avatarUrl: readString(record.avatar_url),
      status: readString(record.status),
    });

    if (members.length >= MAX_MEMBERS_SHOWN) break;
  }
  return members;
}

/**
 * Fetches the Discord widget server-side with ISR-style revalidation, so
 * browsers never poll Discord directly. Never throws — returns null on any
 * failure (widget disabled, network error, unexpected shape) and logs the
 * reason server-side only.
 */
export async function getDiscordWidget(): Promise<DiscordWidget | null> {
  try {
    const response = await fetch(WIDGET_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.error(
        `[discord-widget] request failed with status ${response.status} (widget likely disabled for this server)`
      );
      return null;
    }

    const data: unknown = await response.json();
    if (!data || typeof data !== "object") {
      console.error("[discord-widget] unexpected response shape");
      return null;
    }

    const record = data as Record<string, unknown>;
    const presenceCount = record.presence_count;

    return {
      name: readString(record.name) ?? "AS FAMILY",
      instantInvite: readString(record.instant_invite),
      presenceCount: typeof presenceCount === "number" ? presenceCount : 0,
      members: readMembers(record.members),
    };
  } catch (error) {
    console.error("[discord-widget] fetch failed", error);
    return null;
  }
}
