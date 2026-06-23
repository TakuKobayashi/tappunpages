import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "taptappun — Product Engineer",
  description:
    "Full-stack Product Engineer based in Tokyo. Specializing in MVP development, AI integration, Fintech, mobile apps, and rapid prototyping.",
  alternates: { canonical: "https://taptappun.dev/en" },
};

const EXPERTISE = [
  {
    icon: "⚡",
    title: "Rapid Prototyping",
    desc: "From vague requirements to working code. Fastest possible time to first commit, first demo, first feedback.",
  },
  {
    icon: "📱",
    title: "Mobile × Full-stack",
    desc: "Android/iOS through backend and infra — solo. Monorepo architecture, clean separation, everything connected.",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "LLM, voice, vision — embedded into products to multiply value. Not demos. Shipping features.",
  },
  {
    icon: "💳",
    title: "Fintech",
    desc: "Crypto exchange, payment flows, security-critical systems. Real production fintech experience.",
  },
  {
    icon: "🏆",
    title: "Hackathon Winner",
    desc: "Multiple hackathon wins. High-pressure rapid delivery is a competitive advantage, not a stressor.",
  },
  {
    icon: "🌏",
    title: "Global Ready",
    desc: "Traveled 20+ countries. Strong async communication. English/Japanese. Remote-first mindset.",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "AI VTuber Voice System",
    desc: "Real-time AI character with voice dialogue. Next.js + VOICEVOX + VRM/VRMA rendering.",
    tags: ["Next.js", "AI", "WebRTC", "VRM"],
    href: "/projects/ai-vtuber",
  },
  {
    title: "Multiplayer Sniper Game",
    desc: "Real-time PvP game using PLATEAU 3D city data. Unity + Next.js + PartyKit/WebRTC.",
    tags: ["Unity", "WebRTC", "PLATEAU", "Cloudflare"],
    href: "/projects/sniper-game",
  },
  {
    title: "Medication Management App",
    desc: "OCR + QR-based medication tracking. Full-stack Android/iOS dual-platform implementation.",
    tags: ["Android", "iOS", "OCR", "SQLite"],
    href: "/projects/medication-app",
  },
  {
    title: "AR Timecapsule Platform",
    desc: "Location-based AR messaging platform. Cloudflare Workers + Unity AR Foundation.",
    tags: ["Unity AR", "Cloudflare", "Geohash", "R2"],
    href: "/projects/ar-timecapsule",
  },
];

const HOW_I_WORK = [
  {
    num: "01",
    title: "Build Fast",
    desc: "Don't wait for perfect specs. Turn hypotheses into running code immediately.",
  },
  {
    num: "02",
    title: "Show Early",
    desc: "Put something in front of stakeholders fast. Compress the feedback loop.",
  },
  {
    num: "03",
    title: "Iterate",
    desc: "Spec changes aren't problems. Architecture that welcomes change, mindset that embraces it.",
  },
  {
    num: "04",
    title: "Ship It",
    desc: "Working software is the only metric. Owned end-to-end: design → deploy.",
  },
];

const TECH_STACK = [
  { category: "Mobile", items: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Android SDK"] },
  { category: "Frontend", items: ["Next.js", "TypeScript", "React", "Angular", "CSS Modules"] },
  { category: "Backend", items: ["Cloudflare Workers", "Hono", "Drizzle ORM", "Node.js", "Rust"] },
  { category: "Infra / DB", items: ["Cloudflare D1", "KV", "R2", "Durable Objects", "SQLite"] },
  { category: "AI / ML", items: ["OpenAI", "Gemini", "Groq", "Whisper", "VOICEVOX"] },
  { category: "Game / XR", items: ["Unity", "AR Foundation", "PLATEAU", "WebRTC", "LiveKit"] },
];

export default function EnglishHomePage() {
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
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>Available for new projects</span>
            </div>
            <h1 className={styles.heroHeadline}>
              <span className={styles.highlight}>Product</span>{" "}Engineer
              <span className={styles.sub}>Build fast. Ship early. Iterate.</span>
            </h1>
            <p className={styles.heroDesc}>
              Full-stack engineer with a strong product mindset, based in Tokyo.
              I turn ambiguous requirements into working products — solo.
              Android · iOS · Web · Backend. MVP to production.
            </p>
            <div className={styles.heroActions}>
              <Link href="/projects" className={styles.btnPrimary}>View Projects →</Link>
              <Link href="/contact" className={styles.btnSecondary}>Let&apos;s Work Together</Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>20<span>+</span></span>
                <span className={styles.statLabel}>Countries visited</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}><span>#</span>1</span>
                <span className={styles.statLabel}>Hackathon wins</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>5<span>+</span></span>
                <span className={styles.statLabel}>Years building</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}><span>∞</span></span>
                <span className={styles.statLabel}>Iteration cycles</span>
              </div>
            </div>
          </div>
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
                <div className={styles.termOut}>Product Engineer, Tokyo</div>
                <br />
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>❯</span>
                  <span className={styles.termCmd}>cat strengths.txt</span>
                </div>
                <div className={styles.termOut}>Android, iOS, Web, Backend</div>
                <div className={styles.termOut}>AI, Fintech, Game Dev</div>
                <div className={styles.termOut}>MVP, Rapid Prototyping</div>
                <br />
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>❯</span>
                  <span className={styles.termCmd}>npm run build:product</span>
                </div>
                <div className={styles.termSuccess}>✓ Compiled successfully</div>
                <div className={styles.termSuccess}>✓ Ready to ship</div>
                <br />
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>❯</span>
                  <span className={styles.termCmd}><span className={styles.termCursor} /></span>
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
              Everything a product needs to go from idea to users — owned solo.
            </p>
          </div>
          <div className={styles.expertiseGrid}>
            {EXPERTISE.map((item) => (
              <div key={item.title} className={styles.expertiseCard}>
                <span className={styles.expertiseIcon} aria-hidden="true">{item.icon}</span>
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
              <Link key={project.title} href={project.href} className={styles.projectCard}>
                <div className={styles.projectCardHeader}>
                  <h3 className={styles.projectCardTitle}>{project.title}</h3>
                  <span className={styles.projectCardArrow} aria-hidden="true">↗</span>
                </div>
                <p className={styles.projectCardDesc}>{project.desc}</p>
                <div className={styles.projectCardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <Link href="/projects" className={styles.viewAllLink}>All projects →</Link>
        </div>
      </section>

      {/* ── HOW I WORK ────────────────────────────────── */}
      <section className={`${styles.section} ${styles.howIWork}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Philosophy</span>
            <h2 className={styles.sectionTitle}>How I Work</h2>
            <p className={styles.sectionDesc}>
              Shipping beats perfecting. Feedback beats assumptions. Ownership beats delegation.
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
                <span className={styles.techCategoryLabel}>{cat.category}</span>
                <div className={styles.techList}>
                  {cat.items.map((item) => (
                    <span key={item} className={styles.techItem}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerGlow} aria-hidden="true" />
        <div className={styles.ctaBannerInner}>
          <h2 className={styles.ctaBannerTitle}>
            Let&apos;s build something<br /><em>that ships.</em>
          </h2>
          <p className={styles.ctaBannerDesc}>
            MVP, prototype, greenfield product — any stage, any size.
            I&apos;ll take your idea from zero to deployed.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnPrimary}>Start a project →</Link>
            <Link href="/about" className={styles.btnSecondary}>Learn more about me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
