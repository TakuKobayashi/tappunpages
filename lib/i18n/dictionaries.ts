export type Locale = 'ja' | 'en';

export const locales: Locale[] = ['ja', 'en'];
export const defaultLocale: Locale = 'ja';

export interface Dictionary {
  locale: Locale;
  nav: {
    home: string;
    about: string;
    projects: string;
    tools: string;
    blog: string;
    contact: string;
    langSwitch: string;
    langSwitchLabel: string;
  };
  ticker: { text: string };
  footer: {
    tagline: string;
    copy: string;
    socialLinks: string;
    links: { about: string; projects: string; tools: string; blog: string; contact: string };
  };
  home: {
    meta: { title: string; description: string };
    tagline: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    projects: { heading: string; description: string; more: string };
    tools: {
      heading: string;
      description: string;
      more: string;
      items: { title: string; desc: string }[];
    };
    articles: {
      heading: string;
      more: string;
      items: { title: string; desc: string }[];
    };
    how: {
      heading: string;
      items: { n: string; title: string; desc: string }[];
    };
    cta: { heading: string; desc: string; btn: string };
    stats: { value: string; label: string }[];
    a11y: { hero: string; scrollDown: string; projects: string; tools: string; articles: string; how: string; contact: string; socialLinks: string };
  };
  about: {
    meta: { title: string; description: string };
    heading: string;
    bio: string[];
    role: string;
    timeline: {
      heading: string;
      items: { year: string; title: string; org: string; desc: string }[];
    };
    values: {
      heading: string;
      items: { icon: string; title: string; desc: string }[];
    };
    cta: { heading: string; btn: string };
    a11y: { timeline: string; values: string };
    socialHeading: string;
  };
  projects: {
    meta: { title: string; description: string };
    heading: string;
    featured: string;
    back: string;
  };
  tools: {
    meta: { title: string; description: string };
    heading: string;
    description: string;
    note: string;
    items: Record<string, { kind: string; description: string }>;
  };
  blog: {
    meta: { title: string; description: string };
    heading: string;
    empty: string;
    back: string;
  };
  contact: {
    meta: { title: string; description: string };
    heading: string;
    subheading: string;
    desc: string;
    info: { icon: string; label: string; value: string }[];
    form: {
      title: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
      projectTypes: readonly string[];
      selectPlaceholder: string;
      submit: string;
      sending: string;
      footer: string;
      success: { title: string; desc: string };
      error: { default: string };
    };
  };
  notFound: { code: string; title: string; desc: string; btn: string };
}

export const ja = {
  locale: 'ja' as Locale,

  // --- Nav ---
  nav: {
    home: 'ホーム',
    about: 'お前は誰よ？',
    projects: '制作物',
    tools: 'ツール・実験',
    blog: '記事',
    contact: 'Contact',
    langSwitch: 'EN',
    langSwitchLabel: 'Switch to English',
  },

  // --- Ticker ---
  ticker: {
    text: '新規プロジェクト受付中 — MVP・AI・Fintech・Mobile 開発のご相談はお気軽に',
  },

  // --- Footer ---
  footer: {
    tagline: 'Product Engineer — Build fast. Ship early. Iterate.',
    copy: 'All rights reserved.',
    socialLinks: '主要なSNSプロフィール',
    links: {
      about: 'About',
      projects: 'Projects',
      tools: 'Tools & Labs',
      blog: 'Blog',
      contact: 'Contact',
    },
  },

  // --- Home ---
  home: {
    meta: {
      title: 'taptappun — Product Engineer',
      description:
        'フルスタック Product Engineer。MVP開発・AI・Fintech・Rapid Prototyping。Build fast, show early, iterate.',
    },
    tagline: 'Product Engineer — Build fast. Ship early. Iterate.',
    description:
      'フルスタックエンジニア。Android・iOS・Web・Backend を一人で完結。MVP開発・AI統合・Fintech・ゲーム開発の経験多数。',
    ctaProjects: '制作物を見る ▶',
    ctaContact: 'お仕事のご相談',
    projects: {
      heading: 'PROJECTS',
      description: '仕事やコミュニティの中で、課題解決やプロダクトづくりに取り組んだ実績です。',
      more: 'もっと見る ▶',
    },
    tools: {
      heading: 'TOOLS & LABS',
      description: '日々の「こんなものがあったら便利」から生まれたツールと、技術を試すための個人制作・実験です。',
      more: 'ツール・実験をすべて見る ▶',
      items: [
        { title: 'fullstack-media-converter', desc: '画像・音声・動画をブラウザから手軽に変換' },
      ],
    },
    articles: {
      heading: 'ARTICLES',
      more: 'もっと見る ▶',
      items: [
        {
          title: 'Cloudflare Workers + Hono でゼロコスト API',
          desc: '2024-11-15',
        },
        {
          title: 'Android × iOS 共通 ActiveRecord パターン',
          desc: '2024-10-20',
        },
        { title: 'MessagePack で通信量を 70% 削減した話', desc: '2024-09-05' },
      ],
    },
    how: {
      heading: 'HOW I WORK',
      items: [
        {
          n: '01',
          title: 'Build Fast',
          desc: '曖昧な要件でも即コードへ。最初のデモまでを最短で。',
        },
        {
          n: '02',
          title: 'Show Early',
          desc: '早い段階でステークホルダーに見せ、フィードバックを取る。',
        },
        {
          n: '03',
          title: 'Iterate',
          desc: '仕様変更を恐れない。変化に強い設計と心理的柔軟性。',
        },
        {
          n: '04',
          title: 'Ship It',
          desc: '動くプロダクトが唯一の指標。デプロイまで一貫して担う。',
        },
      ],
    },
    cta: {
      heading: "LET'S BUILD TOGETHER",
      desc: 'MVP・プロトタイプ・新規事業、どんな段階でもご相談ください。',
      btn: 'お問い合わせ ▶',
    },
    stats: [
      { value: '20+', label: '訪問国数' },
      { value: '#1', label: 'ハッカソン受賞' },
      { value: '5+', label: '年の開発経験' },
    ],
    a11y: { hero: 'メインビジュアル', scrollDown: '下へスクロール', projects: '制作実績', tools: 'ツールと実験', articles: '記事', how: '仕事の進め方', contact: 'お問い合わせ', socialLinks: '主要なSNSプロフィール' },
  },

  // --- About ---
  about: {
    meta: {
      title: 'About',
      description:
        '要件整理から設計・実装・リリースまで一貫して担い、アイデアを使われるプロダクトへ変えるProduct Engineer。',
    },
    heading: 'ABOUT ME',
    bio: [
      'アイデアや課題を、実際に使えるプロダクトへ落とし込むProduct Engineerです。Android・iOS、Web、バックエンド、インフラを横断し、曖昧な構想を整理するところから設計・実装・リリースまで一貫して担います。',
      'Fintech、AI、ゲーム、モバイルアプリ、SaaSなどの開発を経験してきました。新規プロダクトの立ち上げだけでなく、既存プロダクトの改善にも対応し、目的・期間・運用条件に合った技術と実装範囲を選びます。',
      '完成まで閉じず、早い段階で動くものを共有することを大切にしています。フィードバックをもとに優先順位を見直し、必要な品質を保ちながら、ユーザーと事業にとって価値のある形へ改善を重ねます。',
    ],
    role: 'Full-stack Product Engineer',
    timeline: {
      heading: 'TIMELINE',
      items: [
        {
          year: '2024–',
          title: 'Freelance Product Engineer',
          org: 'Independent',
          desc: 'MVP開発、AI機能の組み込み、モバイルアプリ開発を支援。要件整理からCloudflare・Next.js・Kotlin・Swiftによる実装とリリースまで一貫して担当。',
        },
        {
          year: '2022–2024',
          title: 'Senior Android Engineer',
          org: 'Startup',
          desc: 'Kotlin・Jetpack Composeによるアプリの設計と実装を担当。継続的に届けられる開発基盤として、CI/CDとテスト自動化も整備。',
        },
        {
          year: '2020–2022',
          title: 'Full-stack Engineer',
          org: 'Fintech Company',
          desc: '暗号資産取引所のバックエンドを開発。可用性とセキュリティが求められる金融システムの設計・実装に従事。',
        },
        {
          year: '2018–2020',
          title: 'Mobile Engineer',
          org: 'Product Company',
          desc: 'Android・iOS両方のプロダクト開発を担当。使いやすさを重視したUI実装とパフォーマンス改善に取り組む。',
        },
        {
          year: '2017',
          title: 'Hackathon Awards 🏆',
          org: 'Various events',
          desc: '複数のハッカソンで受賞。限られた時間で課題を定め、チームで動くプロトタイプを届ける経験を重ねる。',
        },
      ],
    },
    values: {
      heading: 'VALUES',
      items: [
        {
          icon: '◎',
          title: 'Product First',
          desc: '技術から考えるのではなく、ユーザーの課題とプロダクトの目的から実装を決める。',
        },
        {
          icon: '👁',
          title: 'Show Early',
          desc: '早い段階で動くものを共有し、認識のずれや仮説を小さなコストで検証する。',
        },
        {
          icon: '🔄',
          title: 'Adapt by Design',
          desc: '変更を前提に、必要十分な品質と拡張性のバランスを取って設計する。',
        },
        {
          icon: '🤝',
          title: 'End-to-end Ownership',
          desc: '要件整理からリリース後の改善まで、プロダクトが届くところまで責任を持つ。',
        },
      ],
    },
    cta: { heading: 'WORK TOGETHER?', btn: 'お問い合わせ ▶' },
    a11y: { timeline: '経歴', values: '大切にしていること' },
    socialHeading: 'PROFILES',
  },

  // --- Projects ---
  projects: {
    meta: {
      title: 'Projects',
      description:
        'Full-stack Product Engineer として開発したプロジェクト一覧。',
    },
    heading: 'PROJECTS',
    featured: '★',
    back: '制作物一覧へ',
  },

  tools: {
    meta: { title: 'Tools & Labs', description: '便利ツールや、新しい技術を試すために作った個人制作・実験の一覧。' },
    heading: 'TOOLS & LABS',
    description: '日々の小さな不便を解消するツールと、気になった技術を実際に触って確かめるための個人制作・実験をまとめています。仕事やコミュニティでの実績は Projects で紹介しています。',
    note: '小さなプロトタイプも含め、随時追加していきます。',
    items: {
      'fullstack-media-converter': {
        kind: '便利ツール',
        description: '画像・音声・動画などのメディアを、ブラウザから手軽に変換できるフルスタックツール。',
      },
    },
  },

  // --- Blog ---
  blog: {
    meta: {
      title: 'Blog',
      description: 'Product Engineering・AI・Mobile 開発の技術ブログ。',
    },
    heading: 'ARTICLES',
    empty: 'Coming soon — 記事を準備中です。',
    back: '記事一覧へ',
  },

  // --- Contact ---
  contact: {
    meta: {
      title: 'Contact',
      description: 'MVP開発・新規事業・AI統合などのご相談はこちらから。',
    },
    heading: 'CONTACT',
    subheading: "LET'S WORK TOGETHER",
    desc: 'MVP 開発・プロトタイピング・AI 統合・モバイルアプリ開発など、どんなフェーズのプロジェクトでもお気軽にご相談ください。アイデアを動くプロダクトに変えます。',
    info: [
      { icon: '📍', label: 'Location', value: 'Tokyo, Japan (Remote OK)' },
      { icon: '⏱', label: 'Response', value: '24時間以内にご返信' },
      { icon: '🌐', label: 'Languages', value: '日本語 / English' },
      { icon: '✅', label: 'Status', value: '新規案件受付中' },
    ],
    form: {
      title: 'SEND MESSAGE',
      namePlaceholder: 'Taro Yamada',
      emailPlaceholder: 'you@company.com',
      companyPlaceholder: 'Acme Inc. (optional)',
      messagePlaceholder:
        'プロジェクトの概要・課題・スケジュール感などを教えてください。',
      projectTypes: [
        'MVP Development',
        'AI Integration',
        'Mobile App (Android/iOS)',
        'Web App / Full-stack',
        'Fintech / Crypto',
        'Game Development',
        'Technical Consulting',
        'Other',
      ],
      selectPlaceholder: 'Select project type',
      submit: 'Send Message ▶',
      sending: 'Sending…',
      footer: '返信は24時間以内。英語・日本語どちらでも対応します。',
      success: {
        title: 'SENT!',
        desc: 'ご連絡ありがとうございます。\n24時間以内にご返信いたします。',
      },
      error: { default: '送信に失敗しました' },
    },
  },

  // --- Not Found ---
  notFound: {
    code: '404',
    title: 'PAGE NOT FOUND',
    desc: 'このページは存在しないか、移動された可能性があります。',
    btn: '← ホームへ戻る',
  },
};

export const en: Dictionary = {
  locale: 'en' as Locale,

  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    tools: 'Tools & Labs',
    blog: 'Blog',
    contact: 'Contact',
    langSwitch: 'JA',
    langSwitchLabel: '日本語に切り替え',
  },

  ticker: {
    text: 'Available for new projects — MVP · AI · Fintech · Mobile development inquiries welcome',
  },

  footer: {
    tagline: 'Product Engineer — Build fast. Ship early. Iterate.',
    copy: 'All rights reserved.',
    socialLinks: 'Featured social profiles',
    links: {
      about: 'About',
      projects: 'Projects',
      tools: 'Tools & Labs',
      blog: 'Blog',
      contact: 'Contact',
    },
  },

  home: {
    meta: {
      title: 'taptappun — Product Engineer',
      description:
        'Full-stack Product Engineer based in Tokyo. MVP development, AI, Fintech, mobile apps, rapid prototyping.',
    },
    tagline: 'Product Engineer — Build fast. Ship early. Iterate.',
    description:
      'Full-stack engineer with a product mindset, based in Tokyo. Android · iOS · Web · Backend — solo. MVP to production.',
    ctaProjects: 'View Projects ▶',
    ctaContact: "Let's Work Together",
    projects: {
      heading: 'PROJECTS',
      description: 'Work delivered with teams, clients, and communities to solve real product challenges.',
      more: 'See all ▶',
    },
    tools: {
      heading: 'TOOLS & LABS',
      description: 'Personal utilities and experiments built to solve everyday friction or explore new technology.',
      more: 'Explore all tools & labs ▶',
      items: [
        {
          title: 'fullstack-media-converter',
          desc: 'Convert images, audio, and video from your browser',
        },
      ],
    },
    articles: {
      heading: 'ARTICLES',
      more: 'See all ▶',
      items: [
        {
          title: 'Zero-cost API with Cloudflare Workers + Hono',
          desc: '2024-11-15',
        },
        {
          title: 'Shared ActiveRecord pattern for Android × iOS',
          desc: '2024-10-20',
        },
        {
          title: 'How I cut traffic by 70% with MessagePack',
          desc: '2024-09-05',
        },
      ],
    },
    how: {
      heading: 'HOW I WORK',
      items: [
        {
          n: '01',
          title: 'Build Fast',
          desc: 'Turn ambiguous requirements into running code immediately.',
        },
        {
          n: '02',
          title: 'Show Early',
          desc: 'Put working demos in front of stakeholders fast.',
        },
        {
          n: '03',
          title: 'Iterate',
          desc: "Spec changes aren't problems. Architecture that welcomes change.",
        },
        {
          n: '04',
          title: 'Ship It',
          desc: 'Working software is the only metric. Owned end-to-end.',
        },
      ],
    },
    cta: {
      heading: "LET'S BUILD TOGETHER",
      desc: "MVP, prototype, greenfield — any stage. I'll take your idea from zero to deployed.",
      btn: 'Get in touch ▶',
    },
    stats: [
      { value: '20+', label: 'Countries visited' },
      { value: '#1', label: 'Hackathon wins' },
      { value: '5+', label: 'Years building' },
    ],
    a11y: { hero: 'Hero', scrollDown: 'Scroll down', projects: 'Projects', tools: 'Tools and experiments', articles: 'Articles', how: 'How I work', contact: 'Contact', socialLinks: 'Featured social profiles' },
  },

  about: {
    meta: {
      title: 'About',
      description:
        'A Product Engineer who turns ideas into useful products, owning the work from requirements and design through implementation and release.',
    },
    heading: 'ABOUT ME',
    bio: [
      'I turn ideas and problems into products people can use. Working across Android, iOS, web, backend, and infrastructure, I can take an ambiguous concept from clarification and design through implementation and release.',
      'My experience spans fintech, AI, games, mobile apps, and SaaS. I work on both new products and existing ones, choosing technology and scope around the product goal, timeline, and operational needs.',
      'I prefer to share working software early instead of keeping progress hidden until it feels complete. Feedback informs the next priority, helping the product improve while maintaining the quality its users and business require.',
    ],
    role: 'Full-stack Product Engineer',
    timeline: {
      heading: 'TIMELINE',
      items: [
        {
          year: '2024–',
          title: 'Freelance Product Engineer',
          org: 'Independent',
          desc: 'Deliver MVPs, AI-enabled features, and mobile apps. Own the work from requirements through implementation and release with Cloudflare, Next.js, Kotlin, and Swift.',
        },
        {
          year: '2022–2024',
          title: 'Senior Android Engineer',
          org: 'Startup',
          desc: 'Designed and built apps with Kotlin and Jetpack Compose, while improving delivery through CI/CD and automated testing.',
        },
        {
          year: '2020–2022',
          title: 'Full-stack Engineer',
          org: 'Fintech Company',
          desc: 'Built backend services for a crypto exchange, working on financial systems where availability and security were essential.',
        },
        {
          year: '2018–2020',
          title: 'Mobile Engineer',
          org: 'Product Company',
          desc: 'Developed products for Android and iOS, focusing on usable interfaces and application performance.',
        },
        {
          year: '2017',
          title: 'Hackathon Awards 🏆',
          org: 'Various events',
          desc: 'Earned awards at multiple hackathons by defining problems and delivering working prototypes with a team under tight constraints.',
        },
      ],
    },
    values: {
      heading: 'VALUES',
      items: [
        {
          icon: '◎',
          title: 'Product First',
          desc: 'Start with the user problem and product goal, then choose the technology and implementation.',
        },
        {
          icon: '👁',
          title: 'Show Early',
          desc: 'Share working software early to test assumptions and uncover misalignment while changes are still inexpensive.',
        },
        {
          icon: '🔄',
          title: 'Adapt by Design',
          desc: 'Design for change while balancing maintainability, delivery speed, and the quality the product actually needs.',
        },
        {
          icon: '🤝',
          title: 'End-to-end Ownership',
          desc: 'Stay accountable from clarifying requirements through release and the improvements that follow.',
        },
      ],
    },
    cta: { heading: 'WORK TOGETHER?', btn: 'Get in touch ▶' },
    a11y: { timeline: 'Career timeline', values: 'Values' },
    socialHeading: 'PROFILES',
  },

  projects: {
    meta: {
      title: 'Projects',
      description: 'Projects built as a full-stack Product Engineer.',
    },
    heading: 'PROJECTS',
    featured: '★',
    back: 'Back to Projects',
  },

  tools: {
    meta: { title: 'Tools & Labs', description: 'Personal utilities and experimental builds for exploring new technology.' },
    heading: 'TOOLS & LABS',
    description: 'A collection of personal utilities that solve small everyday problems and experiments built to learn by making. For client, team, and community work, see Projects.',
    note: 'More small prototypes and experiments will be added over time.',
    items: {
      'fullstack-media-converter': {
        kind: 'Utility',
        description: 'A full-stack utility for converting images, audio, video, and other media from the browser.',
      },
    },
  },

  blog: {
    meta: {
      title: 'Blog',
      description:
        'Technical blog on Product Engineering, AI, and Mobile development.',
    },
    heading: 'ARTICLES',
    empty: 'Coming soon — articles are being prepared.',
    back: 'Back to Articles',
  },

  contact: {
    meta: {
      title: 'Contact',
      description:
        'Inquiries for MVP development, new ventures, AI integration and more.',
    },
    heading: 'CONTACT',
    subheading: "LET'S WORK TOGETHER",
    desc: "MVP development, prototyping, AI integration, mobile apps — inquire at any stage. I'll turn your idea into a working product.",
    info: [
      { icon: '📍', label: 'Location', value: 'Tokyo, Japan (Remote OK)' },
      { icon: '⏱', label: 'Response', value: 'Within 24 hours' },
      { icon: '🌐', label: 'Languages', value: 'Japanese / English' },
      { icon: '✅', label: 'Status', value: 'Available for new projects' },
    ],
    form: {
      title: 'SEND MESSAGE',
      namePlaceholder: 'Taro Yamada',
      emailPlaceholder: 'you@company.com',
      companyPlaceholder: 'Acme Inc. (optional)',
      messagePlaceholder:
        'Tell me about your project — overview, challenges, timeline, etc.',
      projectTypes: [
        'MVP Development',
        'AI Integration',
        'Mobile App (Android/iOS)',
        'Web App / Full-stack',
        'Fintech / Crypto',
        'Game Development',
        'Technical Consulting',
        'Other',
      ],
      selectPlaceholder: 'Select project type',
      submit: 'Send Message ▶',
      sending: 'Sending…',
      footer: 'Response within 24 hours. Japanese or English, both welcome.',
      success: {
        title: 'SENT!',
        desc: "Thank you for reaching out.\nI'll get back to you within 24 hours.",
      },
      error: { default: 'Failed to send message' },
    },
  },

  notFound: {
    code: '404',
    title: 'PAGE NOT FOUND',
    desc: "This page doesn't exist or may have moved.",
    btn: '← Back to Home',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { ja, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
