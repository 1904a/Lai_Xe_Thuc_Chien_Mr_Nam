import { NextResponse } from "next/server";

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json(
      { error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" },
      { status: 500 }
    );
  }

  const res = await fetch(
    `${supabaseUrl}/rest/v1/heartbeat?select=id&limit=1`,
    {
      method: "GET",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorText = await res.text();

    return NextResponse.json(
      {
        error: "Failed to ping Supabase",
        detail: errorText,
      },
      { status: 500 }
    );
  }

  const data = await res.json();

  return NextResponse.json({
    success: true,
    message: "Supabase keep-alive GET success",
    data,
  });
}