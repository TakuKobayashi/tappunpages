import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "taptappun — Product Engineer",
  description: "Full-stack Product Engineer. MVP開発・AI・Fintech・Rapid Prototyping. Build fast, show early, iterate.",
};

const PROJECTS = [
  { title: "AI VTuber System",        href: "/projects/ai-vtuber",     tags: ["Next.js","AI","VRM"] },
  { title: "Sniper Game (PLATEAU)",   href: "/projects/sniper-game",   tags: ["Unity","WebRTC","Cloudflare"] },
  { title: "Medication App",          href: "/projects/medication-app",tags: ["Android","iOS","OCR"] },
  { title: "AR Timecapsule",          href: "/projects/ar-timecapsule",tags: ["Unity AR","Cloudflare","R2"] },
];

const TOOLS = [
  { title: "SignalForge CLI",  desc: "Git活動から自動SNS投稿生成",     href: "/projects" },
  { title: "RecStudio",        desc: "ブラウザ録画 + Whisper文字起こし", href: "/projects" },
  { title: "demo-video-gen",   desc: "AI駆動のプロモ動画自動生成 CLI",  href: "/projects" },
];

const ARTICLES = [
  { title: "Cloudflare Workers + Hono でゼロコスト API",  desc: "2024-11-15", href: "/blog/cloudflare-workers-hono-zero-cost" },
  { title: "Android × iOS 共通 ActiveRecord パターン",    desc: "2024-10-20", href: "/blog" },
  { title: "MessagePack で通信量を 70% 削減した話",       desc: "2024-09-05", href: "/blog" },
];

const HOW = [
  { n:"01", title:"Build Fast",  desc:"曖昧な要件でも即コードへ。最初のデモまでを最短で。" },
  { n:"02", title:"Show Early",  desc:"早い段階でステークホルダーに見せ、フィードバックを取る。" },
  { n:"03", title:"Iterate",     desc:"仕様変更を恐れない。変化に強い設計と心理的柔軟性。" },
  { n:"04", title:"Ship It",     desc:"動くプロダクトが唯一の指標。デプロイまで一貫して担う。" },
];

export default function HomePage() {
  return (
    <>
      {/* ── FIXED BACKGROUND ───────────────────────── */}
      <div className="page-bg-fixed bg-game" aria-hidden="true" />

      <div className="page-wrap">

        {/* ── HERO SECTION ───────────────────────────── */}
        <section
          aria-label="Hero"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 var(--sp6)",
            paddingTop: "var(--topbar-h)",
            position: "relative",
          }}
        >
          {/* Logo */}
          <h1 style={{
            fontFamily: "var(--font-logo)",
            fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
            letterSpacing: "0.03em",
            color: "var(--white)",
            WebkitTextStroke: "3px var(--black)",
            textShadow: "4px 4px 0 rgba(0,0,0,0.3), -2px -2px 0 rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(6px, 1.5vw, 16px)",
            marginBottom: "var(--sp6)",
          }}>
            TAP
            <span style={{
              width: "clamp(24px, 4vw, 56px)",
              height: "clamp(24px, 4vw, 56px)",
              background: "radial-gradient(circle at 35% 30%, #ff8888 0%, #cc0000 60%, #880000 100%)",
              borderRadius: "50%",
              border: "clamp(2px,0.4vw,4px) solid var(--black)",
              boxShadow: "inset -2px -3px 4px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,200,200,0.3), 0 4px 12px rgba(0,0,0,0.4)",
              display: "inline-block",
              flexShrink: 0,
              position: "relative",
            }}>
              {/* ✕ on ball */}
              <span style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "clamp(10px,2vw,22px)",
                color: "rgba(80,0,0,0.7)",
                fontWeight: 900,
                lineHeight: 1,
              }}>✕</span>
            </span>
            TAPPUN
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(0.9rem, 2.5vw, 1.4rem)",
            color: "var(--white)",
            letterSpacing: "0.08em",
            textShadow: "2px 2px 0 rgba(0,0,0,0.4)",
            marginBottom: "var(--sp4)",
          }}>
            Product Engineer — Build fast. Ship early. Iterate.
          </p>
          <p style={{
            fontSize: "var(--text-base)",
            color: "rgba(255,255,255,0.9)",
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: "var(--sp8)",
          }}>
            フルスタックエンジニア。Android・iOS・Web・Backend を一人で完結。
            MVP開発・AI統合・Fintech・ゲーム開発の経験多数。
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "var(--sp3)", flexWrap: "wrap", justifyContent: "center", marginBottom: "var(--sp12)" }}>
            <Link href="/projects" className="btn-more yellow-btn">制作物を見る ▶</Link>
            <Link href="/contact"  className="btn-more white-btn">お仕事のご相談</Link>
          </div>

          {/* Down arrow */}
          <div style={{ position: "absolute", bottom: "var(--sp8)", left: "50%", transform: "translateX(-50%)" }}>
            <Image
              src="/images/down-arrow.webp"
              alt="Scroll down"
              width={80}
              height={30}
              className="down-arrow-btn"
              unoptimized
            />
          </div>
        </section>

        {/* ── PROJECTS SECTION ───────────────────────── */}
        <section className="section-band band-blue" aria-label="Projects">
          <div className="container">
            <h2 className="section-heading yellow">PROJECTS</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--sp3)", justifyContent: "center", marginBottom: "var(--sp6)" }}>
              {PROJECTS.map(p => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="sq-card"
                  style={{ width: 140, height: 140 }}
                >
                  <div className="sq-thumb" style={{ background: "linear-gradient(135deg, #a8e4f4 0%, #5ac8e8 100%)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "2.5rem" }}>🎮</span>
                  </div>
                  <div className="sq-label">
                    <span>{p.title}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "right" }}>
              <Link href="/projects" className="btn-more white-btn" style={{ fontSize: "var(--text-xs)" }}>もっと見る ▶</Link>
            </div>
          </div>
        </section>

        {/* Diagonal divider blue→green */}
        <div style={{ height: 50, background: "linear-gradient(to bottom right, #5AC8E8 50%, #7CC87A 50%)" }} aria-hidden="true" />

        {/* ── TOOLS SECTION ──────────────────────────── */}
        <section className="section-band band-green" aria-label="Tools">
          <div className="container">
            <h2 className="section-heading white">TOOLS</h2>
            <div className="list-container">
              <ul className="list-items">
                {TOOLS.map(t => (
                  <li key={t.title} className="list-item">
                    <a href={t.href}>
                      <div className="li-thumb" style={{ background: "linear-gradient(135deg, #7CC87A, #5AAD58)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "1.6rem" }}>🛠</span>
                      </div>
                      <div className="li-body">
                        <span className="li-title">{t.title}</span>
                        <span className="li-desc">{t.desc}</span>
                      </div>
                      <div className="li-arrow">▶</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: "right", marginTop: "var(--sp4)" }}>
              <Link href="/projects" className="btn-more white-btn" style={{ fontSize: "var(--text-xs)" }}>もっと見る ▶</Link>
            </div>
          </div>
        </section>

        {/* Diagonal divider green→yellow */}
        <div style={{ height: 50, background: "linear-gradient(to bottom right, #7CC87A 50%, #FFE180 50%)" }} aria-hidden="true" />

        {/* ── ARTICLES SECTION ───────────────────────── */}
        <section className="section-band band-yellow" aria-label="Articles">
          <div className="container">
            <h2 className="section-heading" style={{ color: "var(--text-dark)" }}>ARTICLES</h2>
            <div className="list-container">
              <ul className="list-items">
                {ARTICLES.map(a => (
                  <li key={a.title} className="list-item">
                    <a href={a.href}>
                      <div className="li-thumb" style={{ background: "linear-gradient(135deg, #FFE180, #FFDC6C)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "1.6rem" }}>📝</span>
                      </div>
                      <div className="li-body">
                        <span className="li-title">{a.title}</span>
                        <span className="li-desc">{a.desc}</span>
                      </div>
                      <div className="li-arrow">▶</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: "right", marginTop: "var(--sp4)" }}>
              <Link href="/blog" className="btn-more yellow-btn" style={{ fontSize: "var(--text-xs)" }}>もっと見る ▶</Link>
            </div>
          </div>
        </section>

        {/* Diagonal divider yellow→sky */}
        <div style={{ height: 50, background: "linear-gradient(to bottom right, #FFE180 50%, #A8E4F4 50%)" }} aria-hidden="true" />

        {/* ── HOW I WORK ─────────────────────────────── */}
        <section className="section-band band-teal" aria-label="How I work">
          <div className="container">
            <h2 className="section-heading white">HOW I WORK</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--sp4)",
            }}>
              {HOW.map(h => (
                <div
                  key={h.n}
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderRadius: "var(--r-lg)",
                    padding: "var(--sp5)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-2xl)",
                    color: "var(--sky)",
                    marginBottom: "var(--sp2)",
                  }}>{h.n}</div>
                  <div style={{ fontWeight: 700, fontSize: "var(--text-lg)", marginBottom: "var(--sp2)" }}>{h.title}</div>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-mid)", lineHeight: 1.7 }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section
          aria-label="Contact CTA"
          style={{
            background: "var(--black)",
            padding: "var(--sp20) var(--sp6)",
            textAlign: "center",
          }}
        >
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "var(--yellow)",
            letterSpacing: "0.05em",
            marginBottom: "var(--sp4)",
            textShadow: "2px 2px 0 rgba(0,0,0,0.4)",
          }}>
            LET&apos;S BUILD TOGETHER
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "var(--sp8)", fontSize: "var(--text-base)" }}>
            MVP・プロトタイプ・新規事業、どんな段階でもご相談ください。
          </p>
          <Link href="/contact" className="btn-more yellow-btn" style={{ fontSize: "var(--text-base)", padding: "var(--sp3) var(--sp8)" }}>
            お問い合わせ ▶
          </Link>
        </section>

      </div>
    </>
  );
}
