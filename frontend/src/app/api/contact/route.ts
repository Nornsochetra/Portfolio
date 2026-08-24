import { NextResponse } from "next/server";
import { PORTFOLIO_CONFIG } from "@/data/portfolio";

/** Generous caps that still stop someone posting a novel through the form. */
const LIMITS = { name: 100, email: 200, message: 5000 };

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  // Missing key is a deploy-configuration problem, not the visitor's fault:
  // report it distinctly so the UI can tell them to email directly instead.
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — cannot send mail");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Hidden field: real people never see it, bots fill everything. Answer 200 so
  // the bot believes it succeeded and doesn't retry down another path.
  if (String(body.company ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "too_long" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Until a real domain is verified with Resend, this shared sender is the
        // only permitted "from" — deliverable, but replies must be routed below.
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [PORTFOLIO_CONFIG.email],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `${name} <${email}> sent a message from your portfolio:\n\n${message}\n`,
      }),
    });

    if (!response.ok) {
      console.error(
        "[contact] Resend rejected the send:",
        response.status,
        await response.text(),
      );
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Network error talking to Resend:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
