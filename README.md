# taptappun.dev — Portfolio

> 海外案件獲得のための「営業装置として機能するポートフォリオサイト」

**Stack**: Next.js 15 (App Router) · TypeScript · CSS Modules · Cloudflare Pages

---

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

`http://localhost:3000` で即起動。

---

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Home (JA)
│   ├── about/page.tsx      # About
│   ├── projects/           # Projects list + detail
│   ├── blog/               # Blog list + detail
│   ├── contact/page.tsx    # Contact (form)
│   ├── en/page.tsx         # English home
│   ├── api/contact/        # Edge API route
│   ├── sitemap.ts          # Auto sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/             # Nav, Footer
│   ├── sections/           # ContactForm
│   └── ui/                 # MDXContent
├── content/
│   ├── projects/*.mdx      # Project articles (MDX CMS)
│   └── blog/*.mdx          # Blog posts (MDX CMS)
├── lib/
│   ├── projects.ts         # Project loader
│   └── blog.ts             # Blog post loader
├── styles/
│   └── globals.css         # Design tokens + reset
├── wrangler.jsonc          # Cloudflare config
└── .env.example
```

---

## Adding Content

### New Project

```bash
# Create file: content/projects/my-project.mdx
```

```mdx
---
title: "Project Title"
description: "Short description"
date: "2024-12-01"
tags: ["Next.js", "AI", "Cloudflare"]
featured: true
github: "https://github.com/taptappun/repo"
demo: "https://demo.example.com"
related: ["other-project-slug"]
---

## Overview
...
```

### New Blog Post

```bash
# Create file: content/blog/my-post.mdx
```

```mdx
---
title: "Post Title"
description: "Short description"
date: "2024-12-01"
tags: ["TypeScript", "Cloudflare"]
---

## Introduction
...
```

SignalForge などの CLI ツールから自動生成する場合は、
この frontmatter 形式に合わせた出力を設定してください。

---

## Environment Variables

```bash
cp .env.example .env.local
```

| Variable              | Required | Description              |
|-----------------------|----------|--------------------------|
| `DISCORD_WEBHOOK_URL` | Optional | Discord 通知先 Webhook    |
| `RESEND_API_KEY`      | Optional | Resend メール API キー    |
| `NOTIFY_EMAIL`        | Optional | 通知先メールアドレス      |

---

## Build

```bash
npm run build   # → ./out/ に静的ファイル生成
```

---

## Deploy to Cloudflare Pages

### Option A: Git 連携（推奨）

1. GitHub に push
2. Cloudflare Dashboard → Pages → Create a project
3. **Build command**: `npm run build`
4. **Build output directory**: `out`
5. **Environment variables** を設定

### Option B: CLI

```bash
npm install -g wrangler
wrangler pages deploy out --project-name taptappun-portfolio
```

### Secrets の設定

```bash
wrangler pages secret put DISCORD_WEBHOOK_URL
wrangler pages secret put RESEND_API_KEY
wrangler pages secret put NOTIFY_EMAIL
```

---

## Design System

デザインは元の Sketch/PDF デザインのトーンを継承しつつ、
Global Product Engineer Portfolio としてアップグレード。

| Token                  | Value          | Usage                     |
|------------------------|----------------|---------------------------|
| `--color-bg`           | `#080c14`      | Page background           |
| `--color-primary`      | `#00e87a`      | Accent / CTA / neon green |
| `--color-text`         | `#e8ecf4`      | Body text                 |
| `--color-text-secondary` | `#7a8399`    | Subdued text              |
| `--font-body`          | Roboto         | Body copy                 |
| `--font-mono`          | Roboto Mono    | Code, labels, badges      |

---

## SEO Checklist

- [x] `<title>` / `<meta description>` per page
- [x] Open Graph tags
- [x] Twitter Card
- [x] JSON-LD (Person schema)
- [x] `/sitemap.xml` (auto-generated)
- [x] `/robots.txt`
- [x] Semantic HTML (`<main>`, `<nav>`, `<article>`, `aria-label`)

---

## i18n

| Route   | Language |
|---------|----------|
| `/`     | 日本語    |
| `/en`   | English  |

全ページの完全翻訳対応は `/en/*` ルートに追加してください。

---

## License

MIT © taptappun
