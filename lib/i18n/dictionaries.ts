export type Locale = "ja" | "en";

export const locales: Locale[] = ["ja", "en"];
export const defaultLocale: Locale = "ja";

export interface Dictionary {
  locale: Locale;
  nav: { home: string; about: string; projects: string; blog: string; contact: string; langSwitch: string; langSwitchLabel: string; };
  ticker: { text: string; };
  footer: { tagline: string; copy: string; links: { about: string; projects: string; blog: string; contact: string; }; };
  home: {
    meta: { title: string; description: string; };
    tagline: string; description: string; ctaProjects: string; ctaContact: string;
    projects: { heading: string; more: string; };
    tools: { heading: string; more: string; items: { title: string; desc: string; }[]; };
    articles: { heading: string; more: string; items: { title: string; desc: string; }[]; };
    how: { heading: string; items: { n: string; title: string; desc: string; }[]; };
    cta: { heading: string; desc: string; btn: string; };
    stats: { value: string; label: string; }[];
  };
  about: {
    meta: { title: string; description: string; };
    heading: string; bio: string[]; role: string; location: string;
    timeline: { heading: string; items: { year: string; title: string; org: string; desc: string; }[]; };
    values: { heading: string; items: { icon: string; title: string; desc: string; }[]; };
    cta: { heading: string; btn: string; };
  };
  projects: { meta: { title: string; description: string; }; heading: string; featured: string; };
  blog: { meta: { title: string; description: string; }; heading: string; empty: string; };
  contact: {
    meta: { title: string; description: string; };
    heading: string; subheading: string; desc: string;
    info: { icon: string; label: string; value: string; }[];
    form: {
      title: string; namePlaceholder: string; emailPlaceholder: string;
      companyPlaceholder: string; messagePlaceholder: string;
      projectTypes: readonly string[]; selectPlaceholder: string;
      submit: string; sending: string; footer: string;
      success: { title: string; desc: string; };
      error: { default: string; };
    };
  };
  notFound: { code: string; title: string; desc: string; btn: string; };
}

export const ja = {
  locale: "ja" as Locale,

  // --- Nav ---
  nav: {
    home:     "ホーム",
    about:    "お前は誰よ？",
    projects: "制作物",
    blog:     "記事",
    contact:  "Contact",
    langSwitch: "EN",
    langSwitchLabel: "Switch to English",
  },

  // --- Ticker ---
  ticker: {
    text: "新規プロジェクト受付中 — MVP・AI・Fintech・Mobile 開発のご相談はお気軽に",
  },

  // --- Footer ---
  footer: {
    tagline: "Product Engineer — Build fast. Ship early. Iterate.",
    copy: "All rights reserved.",
    links: {
      about:    "About",
      projects: "Projects",
      blog:     "Blog",
      contact:  "Contact",
    },
  },

  // --- Home ---
  home: {
    meta: {
      title: "taptappun — Product Engineer",
      description: "フルスタック Product Engineer。MVP開発・AI・Fintech・Rapid Prototyping。Build fast, show early, iterate.",
    },
    tagline: "Product Engineer — Build fast. Ship early. Iterate.",
    description: "フルスタックエンジニア。Android・iOS・Web・Backend を一人で完結。MVP開発・AI統合・Fintech・ゲーム開発の経験多数。",
    ctaProjects: "制作物を見る ▶",
    ctaContact:  "お仕事のご相談",
    projects: {
      heading: "PROJECTS",
      more: "もっと見る ▶",
    },
    tools: {
      heading: "TOOLS",
      more: "もっと見る ▶",
      items: [
        { title: "SignalForge CLI",  desc: "Git活動から自動SNS投稿生成" },
        { title: "RecStudio",        desc: "ブラウザ録画 + Whisper文字起こし" },
        { title: "demo-video-gen",   desc: "AI駆動のプロモ動画自動生成 CLI" },
      ],
    },
    articles: {
      heading: "ARTICLES",
      more: "もっと見る ▶",
      items: [
        { title: "Cloudflare Workers + Hono でゼロコスト API",  desc: "2024-11-15" },
        { title: "Android × iOS 共通 ActiveRecord パターン",    desc: "2024-10-20" },
        { title: "MessagePack で通信量を 70% 削減した話",       desc: "2024-09-05" },
      ],
    },
    how: {
      heading: "HOW I WORK",
      items: [
        { n: "01", title: "Build Fast",  desc: "曖昧な要件でも即コードへ。最初のデモまでを最短で。" },
        { n: "02", title: "Show Early",  desc: "早い段階でステークホルダーに見せ、フィードバックを取る。" },
        { n: "03", title: "Iterate",     desc: "仕様変更を恐れない。変化に強い設計と心理的柔軟性。" },
        { n: "04", title: "Ship It",     desc: "動くプロダクトが唯一の指標。デプロイまで一貫して担う。" },
      ],
    },
    cta: {
      heading: "LET'S BUILD TOGETHER",
      desc: "MVP・プロトタイプ・新規事業、どんな段階でもご相談ください。",
      btn: "お問い合わせ ▶",
    },
    stats: [
      { value: "20+", label: "訪問国数" },
      { value: "#1",  label: "ハッカソン受賞" },
      { value: "5+",  label: "年の開発経験" },
    ],
  },

  // --- About ---
  about: {
    meta: {
      title: "About",
      description: "Product Engineer として、プロダクトを前進させることに特化したフルスタックエンジニア。",
    },
    heading: "お前は誰よ？",
    bio: [
      "東京・府中在住のフルスタックエンジニア。Android・iOS からバックエンド・インフラまで、プロダクトを一人で0から1にすることが得意です。",
      "Fintech（仮想通貨取引所）、AI 統合、ゲーム開発、モバイルアプリ、SaaS プロダクトなど幅広い領域での実装経験を持ち、特に曖昧な要件から素早く動くものを作ることに強みがあります。",
      "ハッカソンでの受賞経験を通じて培った「Build fast / Show early / Iterate」の文化を軸に、スタートアップや新規事業に貢献します。20カ国以上の海外旅行経験から生まれたグローバルな視点で、海外案件にも対応します。",
    ],
    role:     "Product Engineer",
    location: "📍 Tokyo, Japan",
    timeline: {
      heading: "TIMELINE",
      items: [
        { year: "2024–",     title: "Freelance Product Engineer", org: "Independent",     desc: "海外・スタートアップ向けMVP開発・AI統合・モバイルアプリ。Cloudflare + Next.js + Kotlin/Swift のフルスタックを一人で完結。" },
        { year: "2022–2024", title: "Senior Android Engineer",    org: "Startup (Tokyo)", desc: "Kotlin + Jetpack Compose でゼロからアプリ設計・実装。CI/CD・テスト自動化。" },
        { year: "2020–2022", title: "Full-stack Engineer",        org: "Fintech Company", desc: "仮想通貨取引所バックエンド開発。高可用性・高セキュリティ金融系システムの設計と実装。" },
        { year: "2018–2020", title: "Mobile Engineer",            org: "Product Company", desc: "Android/iOS 両対応プロダクト開発。UX 重視の UI 実装とパフォーマンス最適化。" },
        { year: "2017",      title: "First Hackathon Win 🏆",     org: "Various events",  desc: "複数ハッカソンで受賞。高速プロトタイピングの文化を体得。" },
      ],
    },
    values: {
      heading: "VALUES",
      items: [
        { icon: "⚡", title: "Build Fast",           desc: "完璧を待たずに動くものを作る。最初のコミットまでを最短に。" },
        { icon: "👁", title: "Show Early",            desc: "早い段階でフィードバックを取る。仮説を最速で検証。" },
        { icon: "🔄", title: "Iterate",               desc: "仕様変更を恐れない。変化に強いアーキテクチャ。" },
        { icon: "🌏", title: "Global Ready",          desc: "20カ国以上の旅行経験。非同期・英語でのコミュニケーションが強み。" },
        { icon: "🎮", title: "Builder Mentality",     desc: "ゲームや趣味プロダクトも含め、常に何かを作り続ける。" },
        { icon: "🤝", title: "End-to-end Ownership",  desc: "要件定義からデプロイまで、全フェーズに責任を持つ。" },
      ],
    },
    cta: { heading: "WORK TOGETHER?", btn: "お問い合わせ ▶" },
  },

  // --- Projects ---
  projects: {
    meta: {
      title: "Projects",
      description: "Full-stack Product Engineer として開発したプロジェクト一覧。",
    },
    heading: "PROJECTS",
    featured: "★",
  },

  // --- Blog ---
  blog: {
    meta: {
      title: "Blog",
      description: "Product Engineering・AI・Mobile 開発の技術ブログ。",
    },
    heading: "ARTICLES",
    empty:   "Coming soon — 記事を準備中です。",
  },

  // --- Contact ---
  contact: {
    meta: {
      title: "Contact",
      description: "MVP開発・新規事業・AI統合などのご相談はこちらから。",
    },
    heading: "CONTACT",
    subheading: "LET'S WORK TOGETHER",
    desc: "MVP 開発・プロトタイピング・AI 統合・モバイルアプリ開発など、どんなフェーズのプロジェクトでもお気軽にご相談ください。アイデアを動くプロダクトに変えます。",
    info: [
      { icon: "📍", label: "Location",  value: "Tokyo, Japan (Remote OK)" },
      { icon: "⏱",  label: "Response",  value: "24時間以内にご返信" },
      { icon: "🌐", label: "Languages", value: "日本語 / English" },
      { icon: "✅", label: "Status",    value: "新規案件受付中" },
    ],
    form: {
      title:          "SEND MESSAGE",
      namePlaceholder:    "Taro Yamada",
      emailPlaceholder:   "you@company.com",
      companyPlaceholder: "Acme Inc. (optional)",
      messagePlaceholder: "プロジェクトの概要・課題・スケジュール感などを教えてください。",
      projectTypes: ["MVP Development","AI Integration","Mobile App (Android/iOS)","Web App / Full-stack","Fintech / Crypto","Game Development","Technical Consulting","Other"],
      selectPlaceholder: "Select project type",
      submit:   "Send Message ▶",
      sending:  "Sending…",
      footer:   "返信は24時間以内。英語・日本語どちらでも対応します。",
      success:  { title: "SENT!", desc: "ご連絡ありがとうございます。\n24時間以内にご返信いたします。" },
      error:    { default: "送信に失敗しました" },
    },
  },

  // --- Not Found ---
  notFound: {
    code:  "404",
    title: "PAGE NOT FOUND",
    desc:  "このページは存在しないか、移動された可能性があります。",
    btn:   "← ホームへ戻る",
  },
}

export const en: Dictionary = {
  locale: "en" as Locale,

  nav: {
    home:     "Home",
    about:    "About",
    projects: "Projects",
    blog:     "Blog",
    contact:  "Contact",
    langSwitch: "JA",
    langSwitchLabel: "日本語に切り替え",
  },

  ticker: {
    text: "Available for new projects — MVP · AI · Fintech · Mobile development inquiries welcome",
  },

  footer: {
    tagline: "Product Engineer — Build fast. Ship early. Iterate.",
    copy: "All rights reserved.",
    links: {
      about:    "About",
      projects: "Projects",
      blog:     "Blog",
      contact:  "Contact",
    },
  },

  home: {
    meta: {
      title: "taptappun — Product Engineer",
      description: "Full-stack Product Engineer based in Tokyo. MVP development, AI, Fintech, mobile apps, rapid prototyping.",
    },
    tagline: "Product Engineer — Build fast. Ship early. Iterate.",
    description: "Full-stack engineer with a product mindset, based in Tokyo. Android · iOS · Web · Backend — solo. MVP to production.",
    ctaProjects: "View Projects ▶",
    ctaContact:  "Let's Work Together",
    projects: {
      heading: "PROJECTS",
      more: "See all ▶",
    },
    tools: {
      heading: "TOOLS",
      more: "See all ▶",
      items: [
        { title: "SignalForge CLI",  desc: "Git activity → auto-generated bilingual social posts" },
        { title: "RecStudio",        desc: "Browser screen recording + Whisper transcription" },
        { title: "demo-video-gen",   desc: "AI-driven promo video generation CLI" },
      ],
    },
    articles: {
      heading: "ARTICLES",
      more: "See all ▶",
      items: [
        { title: "Zero-cost API with Cloudflare Workers + Hono", desc: "2024-11-15" },
        { title: "Shared ActiveRecord pattern for Android × iOS", desc: "2024-10-20" },
        { title: "How I cut traffic by 70% with MessagePack",    desc: "2024-09-05" },
      ],
    },
    how: {
      heading: "HOW I WORK",
      items: [
        { n: "01", title: "Build Fast",  desc: "Turn ambiguous requirements into running code immediately." },
        { n: "02", title: "Show Early",  desc: "Put working demos in front of stakeholders fast." },
        { n: "03", title: "Iterate",     desc: "Spec changes aren't problems. Architecture that welcomes change." },
        { n: "04", title: "Ship It",     desc: "Working software is the only metric. Owned end-to-end." },
      ],
    },
    cta: {
      heading: "LET'S BUILD TOGETHER",
      desc: "MVP, prototype, greenfield — any stage. I'll take your idea from zero to deployed.",
      btn: "Get in touch ▶",
    },
    stats: [
      { value: "20+", label: "Countries visited" },
      { value: "#1",  label: "Hackathon wins" },
      { value: "5+",  label: "Years building" },
    ],
  },

  about: {
    meta: {
      title: "About",
      description: "Full-stack Product Engineer specializing in turning ambiguous requirements into shipped products.",
    },
    heading: "Who am I?",
    bio: [
      "Full-stack engineer based in Fuchu, Tokyo. I specialize in taking products from 0 to 1 solo — from Android/iOS through backend and infra.",
      "I have hands-on experience across Fintech (crypto exchange), AI integration, game development, mobile apps, and SaaS — with a particular strength in rapidly turning vague requirements into working software.",
      "Through multiple hackathon wins I've internalized a 'Build fast / Show early / Iterate' culture. With 20+ countries of travel experience I'm comfortable working globally with async communication in English.",
    ],
    role:     "Product Engineer",
    location: "📍 Tokyo, Japan",
    timeline: {
      heading: "TIMELINE",
      items: [
        { year: "2024–",     title: "Freelance Product Engineer", org: "Independent",     desc: "MVP development, AI integration, mobile apps for overseas startups. Full-stack with Cloudflare + Next.js + Kotlin/Swift — solo." },
        { year: "2022–2024", title: "Senior Android Engineer",    org: "Startup (Tokyo)", desc: "Designed and built apps from scratch with Kotlin + Jetpack Compose. CI/CD and test automation." },
        { year: "2020–2022", title: "Full-stack Engineer",        org: "Fintech Company", desc: "Backend development for a crypto exchange. Designed high-availability, security-critical financial systems." },
        { year: "2018–2020", title: "Mobile Engineer",            org: "Product Company", desc: "Dual Android/iOS product development. UX-focused UI implementation and performance tuning." },
        { year: "2017",      title: "First Hackathon Win 🏆",     org: "Various events",  desc: "Multiple hackathon awards. Internalized rapid prototyping culture." },
      ],
    },
    values: {
      heading: "VALUES",
      items: [
        { icon: "⚡", title: "Build Fast",           desc: "Ship something working before perfecting. Minimize time to first commit." },
        { icon: "👁", title: "Show Early",            desc: "Get feedback fast. Validate hypotheses at maximum speed." },
        { icon: "🔄", title: "Iterate",               desc: "Spec changes aren't problems. Architecture that welcomes change." },
        { icon: "🌏", title: "Global Ready",          desc: "20+ countries of travel. Strong async communication in English." },
        { icon: "🎮", title: "Builder Mentality",     desc: "Always building something — games, tools, experiments." },
        { icon: "🤝", title: "End-to-end Ownership",  desc: "Responsible for every phase: requirements → deploy." },
      ],
    },
    cta: { heading: "WORK TOGETHER?", btn: "Get in touch ▶" },
  },

  projects: {
    meta: {
      title: "Projects",
      description: "Projects built as a full-stack Product Engineer.",
    },
    heading: "PROJECTS",
    featured: "★",
  },

  blog: {
    meta: {
      title: "Blog",
      description: "Technical blog on Product Engineering, AI, and Mobile development.",
    },
    heading: "ARTICLES",
    empty:   "Coming soon — articles are being prepared.",
  },

  contact: {
    meta: {
      title: "Contact",
      description: "Inquiries for MVP development, new ventures, AI integration and more.",
    },
    heading: "CONTACT",
    subheading: "LET'S WORK TOGETHER",
    desc: "MVP development, prototyping, AI integration, mobile apps — inquire at any stage. I'll turn your idea into a working product.",
    info: [
      { icon: "📍", label: "Location",  value: "Tokyo, Japan (Remote OK)" },
      { icon: "⏱",  label: "Response",  value: "Within 24 hours" },
      { icon: "🌐", label: "Languages", value: "Japanese / English" },
      { icon: "✅", label: "Status",    value: "Available for new projects" },
    ],
    form: {
      title:              "SEND MESSAGE",
      namePlaceholder:    "Taro Yamada",
      emailPlaceholder:   "you@company.com",
      companyPlaceholder: "Acme Inc. (optional)",
      messagePlaceholder: "Tell me about your project — overview, challenges, timeline, etc.",
      projectTypes: ["MVP Development","AI Integration","Mobile App (Android/iOS)","Web App / Full-stack","Fintech / Crypto","Game Development","Technical Consulting","Other"],
      selectPlaceholder: "Select project type",
      submit:   "Send Message ▶",
      sending:  "Sending…",
      footer:   "Response within 24 hours. Japanese or English, both welcome.",
      success:  { title: "SENT!", desc: "Thank you for reaching out.\nI'll get back to you within 24 hours." },
      error:    { default: "Failed to send message" },
    },
  },

  notFound: {
    code:  "404",
    title: "PAGE NOT FOUND",
    desc:  "This page doesn't exist or may have moved.",
    btn:   "← Back to Home",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { ja, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
