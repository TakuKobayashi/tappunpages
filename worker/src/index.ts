/**
 * taptappun.dev — Cloudflare Worker
 *
 * 役割:
 *   1. Next.js SSG の静的ファイル (out/) を Assets として配信
 *   2. /api/* のサーバーサイド処理を Hono で処理
 *
 * 追加の API を作る場合は api/ フォルダに route を追加してください。
 */

import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import contact from "./api/contact";

// Env bindings (wrangler.jsonc で定義)
export interface Env {
  ASSETS: Fetcher;
  DISCORD_WEBHOOK_URL?: string;
  RESEND_API_KEY?: string;
  NOTIFY_EMAIL?: string;
}

const app = new Hono<{ Bindings: Env }>();

// ── Middleware ──────────────────────────────────────────────
app.use("*", logger());
app.use(
  "/api/*",
  cors({
    origin: ["https://taptappun.dev", "http://localhost:3000"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  })
);

// ── API Routes ──────────────────────────────────────────────
app.route("/api", contact);

// ── Static Assets fallthrough ───────────────────────────────
// /api/* 以外はすべて Next.js の静的ファイルとして配信
app.all("*", async (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
