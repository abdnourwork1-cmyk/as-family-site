/**
 * Server-side reader for Discord's public Invite endpoint.
 * https://discord.com/developers/docs/resources/invite#get-invite
 *
 * No bot token or secret is required — this is a public, unauthenticated
 * endpoint keyed off the server's invite code. It replaces the old Guild
 * Widget JSON endpoint, which requires "Server Widget" to be enabled in
 * Discord and was disabled for this server. The invite endpoint works for
 * any server with an active invite and returns approximate member/online
 * counts via `with_counts=true`.
 *
 * If the request fails for any reason (invite expired/invalid, network
 * error, unexpected shape), this returns null and callers must render a
 * graceful fallback — the join flow itself never depends on this data.
 */

export type DiscordInviteStats = {
  guildName: string;
  /** Discord's approximate total member count for the server. */
  memberCount: number;
  /** Discord's approximate count of members currently online. */
  presenceCount: number;
};

const DEFAULT_INVITE_CODE = "HqEZEtxs";
const INVITE_CODE = process.env.DISCORD_INVITE_CODE ?? DEFAULT_INVITE_CODE;
const INVITE_URL = `https://discord.com/api/v10/invites/${INVITE_CODE}?with_counts=true`;
const REVALIDATE_SECONDS = 90;

function readString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function readNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

/**
 * Fetches approximate member/online counts for the AS FAMILY Discord server
 * from its invite, with ISR-style revalidation so browsers never poll
 * Discord directly. Never throws — returns null on any failure and logs the
 * reason server-side only. Expected/handled failures (expired invite, etc.)
 * are logged as warnings, not errors, since they're already recovered from.
 */
export async function getDiscordInviteStats(): Promise<DiscordInviteStats | null> {
  try {
    const response = await fetch(INVITE_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.warn(
        `[discord-invite] request failed with status ${response.status} (invite may be expired or invalid)`
      );
      return null;
    }

    const data: unknown = await response.json();
    if (!data || typeof data !== "object") {
      console.warn("[discord-invite] unexpected response shape");
      return null;
    }

    const record = data as Record<string, unknown>;
    const memberCount = readNumber(record.approximate_member_count);
    const presenceCount = readNumber(record.approximate_presence_count);

    // Both counts require `with_counts=true` to be present at all — if
    // Discord ever omits them, there's nothing real to show.
    if (memberCount === null || presenceCount === null) {
      console.warn("[discord-invite] response missing approximate counts");
      return null;
    }

    const guild = record.guild;
    const guildName =
      guild && typeof guild === "object"
        ? readString((guild as Record<string, unknown>).name)
        : null;

    return {
      guildName: guildName ?? "AS FAMILY",
      memberCount,
      presenceCount,
    };
  } catch (error) {
    console.error("[discord-invite] fetch failed", error);
    return null;
  }
}
