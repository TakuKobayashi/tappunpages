import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product Engineer として、プロダクトを前進させることに特化したエンジニア。Fintech・AI・モバイル・ゲーム開発の経験。",
};

const TIMELINE = [
  {
    year: "2024–",
    title: "Freelance Product Engineer",
    org: "Independent",
    desc: "海外案件・スタートアップ向けのMVP開発、AI統合、モバイルアプリ開発を担当。Cloudflare Workers + Next.js + Kotlin/Swift のフルスタック実装を一人で完結。",
  },
  {
    year: "2022–2024",
    title: "Senior Android Engineer",
    org: "Startup (Tokyo)",
    desc: "Kotlin + Jetpack Compose によるゼロからのアプリ設計・実装。CI/CD構築、テスト自動化、パフォーマンスチューニングを担当。",
  },
  {
    year: "2020–2022",
    title: "Full-stack Engineer",
    org: "Fintech Company",
    desc: "仮想通貨取引所のバックエンド開発。高可用性・高セキュリティが要求される金融系システムの設計と実装。",
  },
  {
    year: "2018–2020",
    title: "Mobile Engineer",
    org: "Product Company",
    desc: "Android/iOS 両対応のプロダクト開発。ユーザー体験を重視したUI実装とパフォーマンス最適化。",
  },
  {
    year: "2017",
    title: "First Hackathon Win",
    org: "Various events",
    desc: "複数のハッカソンに参加し、受賞経験を積む。高速プロトタイピングの文化を体得。",
  },
];

const VALUES = [
  {
    icon: "🧱",
    title: "Product-first Thinking",
    desc: "技術のための技術ではなく、ユーザーと事業にとって価値あるものを作る。コードの前に問いを立てる。",
  },
  {
    icon: "🌀",
    title: "Iteration over Perfection",
    desc: "完璧な計画より動くプロトタイプ。フィードバックを早く取り、素早く改善する。",
  },
  {
    icon: "🌐",
    title: "Async-first Collaboration",
    desc: "20カ国以上の旅行経験を通じて培ったグローバル適応力。リモート・非同期コミュニケーションが強み。",
  },
  {
    icon: "⚙️",
    title: "End-to-end Ownership",
    desc: "要件定義からデプロイまで、プロダクトの全フェーズに責任を持つ。依存しない、待たない。",
  },
  {
    icon: "📡",
    title: "Learn in Public",
    desc: "ハッカソン・OSSへの参加、技術ブログの執筆。学びを外に出すことで、思考を整理し、コミュニティに貢献する。",
  },
  {
    icon: "🎮",
    title: "Builder Mentality",
    desc: "ゲームや趣味プロダクトも含め、常に何かを作り続ける。作ることが思考であり、学びである。",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero / Bio */}
      <div className={styles.hero}>
        <div>
          <div className={styles.heroEyebrow}>About me</div>
          <h1 className={styles.heroTitle}>
            I build products,
            <br />
            not just <span>code.</span>
          </h1>
          <div className={styles.heroBio}>
            <p>
              東京・府中在住のフルスタックエンジニア。
              Android・iOS からバックエンド・インフラまで、
              プロダクトを一人で0から1にすることが得意です。
            </p>
            <p>
              Fintech（仮想通貨取引所）、AI統合、ゲーム開発、
              モバイルアプリ、SaaS プロダクトなど幅広い領域での
              実装経験を持ち、特に曖昧な要件から素早く動くものを
              作ることに強みがあります。
            </p>
            <p>
              ハッカソンでの受賞経験を通じて培った
              「Build fast / Show early / Iterate」の文化を軸に、
              スタートアップや新規事業に貢献します。
              20カ国以上の海外旅行経験から生まれたグローバルな視点と、
              非同期コミュニケーション力で、海外案件にも対応します。
            </p>
          </div>
        </div>

        {/* Profile card */}
        <aside className={styles.profileCard} aria-label="Profile">
          <div className={styles.avatarWrap} aria-hidden="true">tp</div>
          <div>
            <div className={styles.profileName}>taptappun</div>
            <div className={styles.profileRole}>Product Engineer</div>
          </div>
          <div className={styles.profileLocation}>📍 Tokyo, Japan</div>
          <div className={styles.profileDivider} />
          <nav className={styles.profileLinks} aria-label="Social links">
            {[
              { icon: "GH", label: "github.com/taptappun", href: "https://github.com/taptappun" },
              { icon: "𝕏", label: "@phantomcatworks", href: "https://twitter.com/phantomcatworks" },
              { icon: "Qi", label: "qiita.com/taptappun", href: "https://qiita.com/taptappun" },
              { icon: "in", label: "LinkedIn", href: "https://linkedin.com/in/taptappun" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.profileLinkIcon}>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>

      {/* Career Timeline */}
      <section className={styles.timelineSection} aria-label="Career timeline">
        <div className={styles.sectionEyebrow}>Career</div>
        <h2 className={styles.sectionTitle}>Timeline</h2>
        <ol className={styles.timeline}>
          {TIMELINE.map((item) => (
            <li key={item.year} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{item.year}</div>
              <div className={styles.timelineTitle}>{item.title}</div>
              <div className={styles.timelineOrg}>{item.org}</div>
              <p className={styles.timelineDesc}>{item.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Values */}
      <section className={styles.valuesSection} aria-label="Values and principles">
        <div className={styles.valuesInner}>
          <div className={styles.sectionEyebrow}>Philosophy</div>
          <h2 className={styles.sectionTitle}>Values</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
