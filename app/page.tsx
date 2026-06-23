import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "taptappun — Product Engineer",
  description:
    "Full-stack Product Engineer specializing in MVP development, AI, Fintech, and Rapid Prototyping. Build fast, show early, iterate.",
};

const EXPERTISE = [
  {
    icon: "⚡",
    title: "Rapid Prototyping",
    desc: "曖昧な要件からでも即座に動くものを作る。仮説を最速でコードに変換。",
  },
  {
    icon: "📱",
    title: "Mobile × Full-stack",
    desc: "Android/iOS からバックエンド・インフラまで一人で完結。モノレポ構成が得意。",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "LLM・音声・画像認識を既存プロダクトに組み込み、価値を急拡大する。",
  },
  {
    icon: "💳",
    title: "Fintech",
    desc: "仮想通貨取引所・決済フロー・セキュリティ要件のある金融系プロダクトの実装経験。",
  },
  {
    icon: "🏆",
    title: "Hackathon Winner",
    desc: "多数のハッカソンに参加・受賞。プレッシャー下での高速開発が武器。",
  },
  {
    icon: "🌏",
    title: "Global Ready",
    desc: "20カ国以上の海外経験。非同期コミュニケーション・英語での開発に対応。",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "AI VTuber Voice System",
    desc: "Next.js + VOICEVOX + VRM/VRMA。リアルタイム音声対話AIキャラクターシステムの設計・実装。",
    tags: ["Next.js", "AI", "WebRTC", "VRM"],
    href: "/projects/ai-vtuber",
  },
  {
    title: "Multiplayer Sniper Game",
    desc: "PLATEAUの3D都市データを使ったリアルタイム対戦ゲーム。Unity + Next.js + PartyKit/WebRTC。",
    tags: ["Unity", "WebRTC", "PLATEAU", "Cloudflare"],
    href: "/projects/sniper-game",
  },
  {
    title: "Medication Management App",
    desc: "OCR + QRコードによる服薬管理アプリ。Android/iOS 両対応のフルスタック実装。",
    tags: ["Android", "iOS", "OCR", "SQLite"],
    href: "/projects/medication-app",
  },
  {
    title: "AR Timecapsule Platform",
    desc: "位置情報 × ARでメッセージを残すプラットフォーム。Cloudflare Workers + Unity AR Foundation。",
    tags: ["Unity AR", "Cloudflare", "Geohash", "R2"],
    href: "/projects/ar-timecapsule",
  },
];

const HOW_I_WORK = [
  {
    num: "01",
    title: "Build Fast",
    desc: "完璧を待たずに動くものを作る。最初のコミットまでの時間を最短に。",
  },
  {
    num: "02",
    title: "Show Early",
    desc: "早い段階でステークホルダーに見せる。フィードバックループを最速で回す。",
  },
  {
    num: "03",
    title: "Iterate",
    desc: "仕様変更を恐れない。変化に強いアーキテクチャと心理的柔軟性。",
  },
  {
    num: "04",
    title: "Ship It",
    desc: "動くプロダクトこそが唯一の指標。デプロイまでを一貫して担う。",
  },
];

const TECH_STACK = [
  {
    category: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Android SDK"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "TypeScript", "React", "Angular", "CSS Modules"],
  },
  {
    category: "Backend",
    items: ["Cloudflare Workers", "Hono", "Drizzle ORM", "Node.js", "Rust"],
  },
  {
    category: "Infra / DB",
    items: ["Cloudflare D1", "KV", "R2", "Durable Objects", "SQLite"],
  },
  {
    category: "AI / ML",
    items: ["OpenAI", "Gemini", "Groq", "Whisper", "VOICEVOX"],
  },
  {
    category: "Game / XR",
    items: ["Unity", "AR Foundation", "PLATEAU", "WebRTC", "LiveKit"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroGlow} />
          <div className={styles.heroGlow2} />
        </div>

        <div className={styles.heroInner}>
          <div>
            {/* Badge */}
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            <h1 className={styles.heroHeadline}>
              <span className={styles.highlight}>Product</span>
              {" "}Engineer
              <span className={styles.sub}>
                Build fast. Ship early. Iterate.
              </span>
            </h1>

            {/* Description */}
            <p className={styles.heroDesc}>
              Full-stack engineer with a product mindset.
              MVP開発からAI・Fintech・ゲームまで、
              曖昧な要件を動くプロダクトに変換します。
              Android / iOS / Web / Backend を一人で完結。
            </p>

            {/* CTA */}
            <div className={styles.heroActions}>
              <Link href="/projects" className={styles.btnPrimary}>
                View Projects →
              </Link>
              <Link href="/contact" className={styles.btnSecondary}>
                Let&apos;s Work Together
              </Link>
            </div>

            {/* Stats */}
            <div className={styles.heroStats} aria-label="Key numbers">
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  20<span>+</span>
                </span>
                <span className={styles.statLabel}>Countries visited</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <span>#</span>1
                </span>
                <span className={styles.statLabel}>Hackathon wins</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  5<span>+</span>
                </span>
                <span className={styles.statLabel}>Years building</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <span>∞</span>
                </span>
                <span className={styles.statLabel}>Iteration cycles</span>
              </div>
            </div>
          </div>

          {/* Terminal visual */}
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.terminal}>
              <div className={styles.terminalBar}>
                <span className={`${styles.termDot} ${styles.red}`} />
                <span className={`${styles.termDot} ${styles.amber}`} />
                <span className={`${styles.termDot} ${styles.green}`} />
                <span className={styles.termTitle}>taptappun@dev</span>
              </div>
              <div className={styles.termBody}>
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>❯</span>
                  <span className={styles.termCmd}>whoami</span>
                </div>
                <div className={styles.termOut}>Product Engineer</div>
                <br />
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>❯</span>
                  <span className={styles.termCmd}>cat skills.txt</span>
                </div>
                <div className={styles.termOut}>Android, iOS, Web, Backend</div>
                <div className={styles.termOut}>AI, Fintech, Game Dev</div>
                <div className={styles.termOut}>MVP, Rapid Prototyping</div>
                <br />
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>❯</span>
                  <span className={styles.termCmd}>
                    npm run build:product
                  </span>
                </div>
                <div className={styles.termSuccess}>
                  ✓ Compiled successfully
                </div>
                <div className={styles.termSuccess}>
                  ✓ Ready to ship
                </div>
                <br />
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>❯</span>
                  <span className={styles.termCmd}>
                    <span className={styles.termCursor} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────── */}
      <section className={`${styles.section} ${styles.expertise}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>What I do</span>
            <h2 className={styles.sectionTitle}>Expertise</h2>
            <p className={styles.sectionDesc}>
              プロダクトを前進させるために必要なことを、
              一人で完結できる技術スタックと思考力。
            </p>
          </div>
          <div className={styles.expertiseGrid}>
            {EXPERTISE.map((item) => (
              <div key={item.title} className={styles.expertiseCard}>
                <span className={styles.expertiseIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className={styles.expertiseCardTitle}>{item.title}</h3>
                <p className={styles.expertiseCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Selected work</span>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {FEATURED_PROJECTS.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className={styles.projectCard}
              >
                <div className={styles.projectCardHeader}>
                  <h3 className={styles.projectCardTitle}>{project.title}</h3>
                  <span className={styles.projectCardArrow} aria-hidden="true">↗</span>
                </div>
                <p className={styles.projectCardDesc}>{project.desc}</p>
                <div className={styles.projectCardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <Link href="/projects" className={styles.viewAllLink}>
            All projects →
          </Link>
        </div>
      </section>

      {/* ── HOW I WORK ────────────────────────────────── */}
      <section className={`${styles.section} ${styles.howIWork}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Philosophy</span>
            <h2 className={styles.sectionTitle}>How I Work</h2>
            <p className={styles.sectionDesc}>
              プロダクト開発における私の思想。
              完璧主義よりも、動くものを早く届けることを優先する。
            </p>
          </div>
          <div className={styles.howGrid}>
            {HOW_I_WORK.map((item) => (
              <div key={item.num} className={styles.howCard}>
                <span className={styles.howNum}>{item.num}</span>
                <h3 className={styles.howTitle}>{item.title}</h3>
                <p className={styles.howDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Skills</span>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
          </div>
          <div className={styles.techCategories}>
            {TECH_STACK.map((cat) => (
              <div key={cat.category} className={styles.techCategory}>
                <span className={styles.techCategoryLabel}>
                  {cat.category}
                </span>
                <div className={styles.techList}>
                  {cat.items.map((item) => (
                    <span key={item} className={styles.techItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerGlow} aria-hidden="true" />
        <div className={styles.ctaBannerInner}>
          <h2 className={styles.ctaBannerTitle}>
            Let&apos;s build something
            <br />
            <em>that ships.</em>
          </h2>
          <p className={styles.ctaBannerDesc}>
            MVP・プロトタイプ・新規事業の立ち上げなど、
            どんな段階でもお気軽にご相談ください。
            アイデアを動くプロダクトに変えます。
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Start a project →
            </Link>
            <Link href="/about" className={styles.btnSecondary}>
              Learn more about me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
