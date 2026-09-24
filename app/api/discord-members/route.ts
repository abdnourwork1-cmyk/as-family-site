import { NextResponse } from "next/server";

const BOT_PRESENCE_URL =
  process.env.DISCORD_PRESENCE_API_URL ??
  "http://127.0.0.1:8081/members";

export const dynamic = "force-dynamic";

export async function GET() {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 3000);

  try {
    const response = await fetch(
      BOT_PRESENCE_URL,
      {
        method: "GET",

        signal: controller.signal,

        cache: "no-store",

        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Discord presence API returned ${response.status}`,
      );
    }

    const data = await response.json();

    return NextResponse.json(
      data,
      {
        status: 200,

        headers: {
          "Cache-Control":
            "public, s-maxage=15, stale-while-revalidate=45",
        },
      },
    );
  } catch (error) {
    console.error(
      "[discord-members] failed:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        updatedAt: new Date().toISOString(),
        members: [],
      },
      {
        status: 200,

        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } finally {
    clearTimeout(timeout);
  }
}