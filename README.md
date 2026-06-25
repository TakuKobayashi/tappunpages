# taptappun.dev — Portfolio

> 海外案件獲得のための「営業装置として機能するポートフォリオサイト」

**Stack**: Next.js 16 (App Router / SSG) · TypeScript · CSS Modules · **Cloudflare Workers Assets** + Hono

---

## アーキテクチャ

```
┌─────────────────────────────────────────────────────────┐
│              Cloudflare Worker (1プロジェクト)            │
│                                                         │
│  リクエスト                                               │
│      │                                                  │
│      ├─ /api/*  ──→  Hono (worker/src/)                 │
│      │               └─ POST /api/contact               │
│      │                    ├─ Discord Webhook             │
│      │                    └─ Resend Email                │
│      │                                                  │
│      └─ それ以外 ──→  Workers Assets (out/)              │
│                       └─ Next.js SSG 静的ファイル         │
└─────────────────────────────────────────────────────────┘
```

- **静的配信**: `next build` → `out/` → Workers Assets (CDN)
- **サーバー処理**: `worker/src/` の Hono ルート
- **プロジェクト数**: 1つ（Cloudflare ダッシュボードも1エントリ）

---

## Quick Start

```bash
# 依存関係インストール
npm install
cd worker && npm install && cd ..

# 開発サーバー (Next.js)
npm run dev

# Worker のローカルテスト (out/ が必要)
npm run build
npm run worker:dev
```

---

## Project Structure

```
portfolio/
├── app/                     # Next.js App Router (SSG)
│   ├── layout.tsx
│   ├── page.tsx             # Home (JA)
│   ├── about/
│   ├── projects/[slug]/
│   ├── blog/[slug]/
│   ├── contact/
│   ├── en/                  # English home
│   ├── sitemap.ts           # 自動生成
│   └── robots.ts
│
├── worker/                  # Cloudflare Worker (Hono)
│   ├── src/
│   │   ├── index.ts         # エントリポイント (Assets + API ルーティング)
│   │   └── api/
│   │       └── contact.ts   # POST /api/contact
│   ├── tsconfig.json
│   └── package.json
│
├── content/
│   ├── projects/*.mdx       # MDX CMS (プロジェクト記事)
│   └── blog/*.mdx           # MDX CMS (ブログ記事)
│
├── public/
│   ├── fonts/               # SuperMario256.ttf, ArcadeClassic.ttf
│   └── images/              # 背景画像 (WebP)
│
├── out/                     # next build の出力 (gitignore推奨)
├── wrangler.jsonc           # Cloudflare Workers 設定
└── next.config.ts
```

---

## 新しい API を追加する場合

`worker/src/api/` にファイルを追加して `index.ts` で mount します。

```ts
// worker/src/api/webhook.ts
import { Hono } from "hono";
import type { Env } from "../index";

const webhook = new Hono<{ Bindings: Env }>();

webhook.post("/webhook", async (c) => {
  // 処理
  return c.json({ ok: true });
});

export default webhook;
```

```ts
// worker/src/index.ts に追加
import webhook from "./api/webhook";
app.route("/api", webhook);   // → POST /api/webhook
```

---

## コンテンツ追加

### プロジェクト

```bash
# content/projects/my-project.mdx を作成
```

```mdx
---
title: "Project Title"
description: "Short description"
date: "2025-01-01"
tags: ["Next.js", "AI"]
featured: true
github: "https://github.com/taptappun/repo"
---

## Overview
...
```

### ブログ記事

```bash
# content/blog/my-post.mdx を作成
```

---

## 環境変数

```bash
cp .env.example .env.local
```

| 変数 | 必須 | 説明 |
|------|------|------|
| `DISCORD_WEBHOOK_URL` | 任意 | Discord 通知 Webhook URL |
| `RESEND_API_KEY` | 任意 | Resend API キー |
| `NOTIFY_EMAIL` | 任意 | 通知先メールアドレス |

---

## デプロイ

### 初回セットアップ

```bash
# 1. Wrangler にログイン
npx wrangler login

# 2. ビルド & デプロイ（Worker + Assets を一括アップロード）
npm run deploy
# → 初回は "Create a new Worker?" と聞かれるので Yes
# → Worker 名: taptappun-portfolio
```

### 通常デプロイ

```bash
npm run deploy
# = next build && wrangler deploy
```

### プレビューデプロイ

```bash
npm run deploy:preview
```

### シークレット環境変数の設定

```bash
npm run cf:secret DISCORD_WEBHOOK_URL
npm run cf:secret RESEND_API_KEY
npm run cf:secret NOTIFY_EMAIL
```

### デプロイログの確認

```bash
npm run cf:tail
```

---

## Cloudflare Dashboard

```
Workers & Pages > taptappun-portfolio
├── Settings > Variables and Secrets  ← 環境変数
├── Settings > Triggers               ← カスタムドメイン
└── Deployments                       ← デプロイ履歴
```

---

## SEO チェックリスト

- [x] `<title>` / `<meta description>` 各ページ設定済み
- [x] Open Graph tags
- [x] Twitter Card
- [x] JSON-LD (Person schema)
- [x] `/sitemap.xml` (自動生成)
- [x] `/robots.txt`
- [x] Semantic HTML (`<main>`, `<nav>`, `<article>`)
- [x] SSG (全ページ静的生成 → CDNエッジから高速配信)

---

## License

MIT © taptappun
