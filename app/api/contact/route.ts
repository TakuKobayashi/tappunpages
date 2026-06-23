import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Validate required fields
    if (!body.name || !body.email || !body.projectType || !body.message) {
      return NextResponse.json(
        { error: "必須フィールドが不足しています" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません" },
        { status: 400 }
      );
    }

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const resendApiKey      = process.env.RESEND_API_KEY;
    const notifyEmail       = process.env.NOTIFY_EMAIL ?? "hello@taptappun.dev";

    const timestamp = new Date().toISOString();

    // --- Discord Webhook ---
    if (discordWebhookUrl) {
      const discordPayload = {
        embeds: [
          {
            title: "📬 New Contact Form Submission",
            color: 0x00e87a,
            fields: [
              { name: "Name",         value: body.name,                    inline: true },
              { name: "Email",        value: body.email,                   inline: true },
              { name: "Company",      value: body.company || "—",          inline: true },
              { name: "Project Type", value: body.projectType,             inline: false },
              { name: "Message",      value: body.message.slice(0, 1000),  inline: false },
            ],
            timestamp,
            footer: { text: "taptappun.dev contact form" },
          },
        ],
      };
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      });
    }

    // --- Resend email ---
    if (resendApiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "contact@taptappun.dev",
          to: [notifyEmail],
          reply_to: body.email,
          subject: `[Contact] ${body.projectType} — ${body.name}`,
          text: [
            `Name:         ${body.name}`,
            `Email:        ${body.email}`,
            `Company:      ${body.company ?? "—"}`,
            `Project Type: ${body.projectType}`,
            ``,
            `Message:`,
            body.message,
            ``,
            `Sent at: ${timestamp}`,
          ].join("\n"),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact API]", err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
