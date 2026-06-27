/**
 * /api/contact
 *
 * コンタクトフォームの送信を受け取り、
 * Discord Webhook と Resend メールに通知する。
 *
 * POST /api/contact
 *   { name, email, company?, projectType, message }
 */

import { Hono } from 'hono';
import type { Env } from '../index';

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}

const contact = new Hono<{ Bindings: Env }>();

contact.post('/contact', async (c) => {
  let body: ContactPayload;

  try {
    body = await c.req.json<ContactPayload>();
  } catch {
    return c.json({ error: 'リクエストの形式が正しくありません' }, 400);
  }

  // ── Validation ────────────────────────────────────────────
  if (!body.name || !body.email || !body.projectType || !body.message) {
    return c.json({ error: '必須フィールドが不足しています' }, 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return c.json({ error: 'メールアドレスの形式が正しくありません' }, 400);
  }

  const {
    DISCORD_WEBHOOK_URL: discordWebhookUrl,
    RESEND_API_KEY: resendApiKey,
    NOTIFY_EMAIL: notifyEmail = 'hello@taptappun.dev',
  } = c.env;

  const timestamp = new Date().toISOString();
  const errors: string[] = [];

  // ── Discord Webhook ───────────────────────────────────────
  if (discordWebhookUrl) {
    try {
      const res = await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [
            {
              title: '📬 New Contact Form Submission',
              color: 0xffe180, // yellow from design
              fields: [
                { name: 'Name', value: body.name, inline: true },
                { name: 'Email', value: body.email, inline: true },
                { name: 'Company', value: body.company || '—', inline: true },
                {
                  name: 'Project Type',
                  value: body.projectType,
                  inline: false,
                },
                {
                  name: 'Message',
                  value: body.message.slice(0, 1000),
                  inline: false,
                },
              ],
              timestamp,
              footer: { text: 'taptappun.dev contact form' },
            },
          ],
        }),
      });
      if (!res.ok) errors.push(`Discord: ${res.status}`);
    } catch (e) {
      errors.push(`Discord: ${String(e)}`);
    }
  }

  // ── Resend Email ──────────────────────────────────────────
  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'contact@taptappun.dev',
          to: [notifyEmail],
          reply_to: body.email,
          subject: `[Contact] ${body.projectType} — ${body.name}`,
          text: [
            `Name:         ${body.name}`,
            `Email:        ${body.email}`,
            `Company:      ${body.company ?? '—'}`,
            `Project Type: ${body.projectType}`,
            '',
            'Message:',
            body.message,
            '',
            `Sent at: ${timestamp}`,
          ].join('\n'),
        }),
      });
      if (!res.ok) errors.push(`Resend: ${res.status}`);
    } catch (e) {
      errors.push(`Resend: ${String(e)}`);
    }
  }

  // 通知先が未設定でも 200 を返す（開発時）
  if (errors.length > 0) {
    console.error('[contact] notification errors:', errors);
  }

  return c.json({ ok: true });
});

export default contact;
