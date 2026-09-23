import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const receiver = process.env.QUOTE_WEBHOOK_URL;
  if (!receiver) return NextResponse.json({ error: "Online enquiries are not configured. Please call JLJ Roofing." }, { status: 503 });
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== request.nextUrl.host) return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 10000) return NextResponse.json({ error: "Request too large" }, { status: 413 });
    data = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid data");
  } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  if (data.website) return NextResponse.json({ ok: true });
  const clean = (key: string, max: number) => typeof data[key] === "string" ? data[key].trim().slice(0, max) : "";
  const payload = { name: clean("name", 100), phone: clean("phone", 24), suburb: clean("suburb", 100), service: clean("service", 100), details: clean("details", 2000) };
  if (!payload.name || !payload.suburb || !payload.service || !/^\+?[\d\s()\-]{8,24}$/.test(payload.phone)) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  try {
    const url = new URL(receiver);
    if (url.protocol !== "https:") throw new Error("Receiver must use HTTPS");
    const result = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.QUOTE_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.QUOTE_WEBHOOK_SECRET}` } : {}) }, body: JSON.stringify({ ...payload, source: "JLJ Roofing website", submittedAt: new Date().toISOString() }), signal: AbortSignal.timeout(10000), redirect: "error" });
    if (!result.ok) throw new Error("Delivery failed");
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Your request could not be delivered. Please call JLJ Roofing." }, { status: 502 }); }
}
