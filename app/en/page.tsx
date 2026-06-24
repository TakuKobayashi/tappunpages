import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "taptappun — Product Engineer",
  description: "Full-stack Product Engineer based in Tokyo. MVP development, AI, Fintech, mobile apps, rapid prototyping.",
  alternates: { canonical: "https://taptappun.dev/en" },
};

const PROJECTS = [
  { title: "AI VTuber System",       href: "/projects/ai-vtuber",     tags: ["Next.js","AI","VRM"] },
  { title: "Sniper Game (PLATEAU)",  href: "/projects/sniper-game",   tags: ["Unity","WebRTC","Cloudflare"] },
  { title: "Medication App",         href: "/projects/medication-app",tags: ["Android","iOS","OCR"] },
  { title: "AR Timecapsule",         href: "/projects/ar-timecapsule",tags: ["Unity AR","Cloudflare","R2"] },
];

const TOOLS = [
  { title: "SignalForge CLI",  desc: "Git activity → auto-generated bilingual social posts", href: "/projects" },
  { title: "RecStudio",        desc: "Browser screen recording + Whisper transcription",       href: "/projects" },
  { title: "demo-video-gen",   desc: "AI-driven promo video generation CLI",                   href: "/projects" },
];

const HOW = [
  { n:"01", title:"Build Fast",  desc:"Turn ambiguous requirements into running code immediately." },
  { n:"02", title:"Show Early",  desc:"Put working demos in front of stakeholders fast." },
  { n:"03", title:"Iterate",     desc:"Spec changes aren't problems. Architecture that welcomes change." },
  { n:"04", title:"Ship It",     desc:"Working software is the only metric. Owned end-to-end." },
];

export default function EnglishHomePage() {
  return (
    <>
      <div className="page-bg-fixed bg-game" aria-hidden="true" />
      <div className="page-wrap">

        {/* ── HERO ─────────────────────────────────────── */}
        <section aria-label="Hero" style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center",
          padding: "0 var(--sp6)",
          paddingTop: "var(--topbar-h)",
          position: "relative",
        }}>
          <h1 style={{
            fontFamily: "var(--font-logo)",
            fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
            letterSpacing: "0.03em",
            color: "var(--white)",
            WebkitTextStroke: "3px var(--black)",
            textShadow: "4px 4px 0 rgba(0,0,0,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "clamp(6px, 1.5vw, 16px)",
            marginBottom: "var(--sp6)",
          }}>
            TAP
            <span style={{
              width: "clamp(24px,4vw,56px)", height: "clamp(24px,4vw,56px)",
              background: "radial-gradient(circle at 35% 30%, #ff8888 0%, #cc0000 60%, #880000 100%)",
              borderRadius: "50%", border: "clamp(2px,0.4vw,4px) solid var(--black)",
              boxShadow: "inset -2px -3px 4px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,200,200,0.3), 0 4px 12px rgba(0,0,0,0.4)",
              display: "inline-block", flexShrink: 0, position: "relative",
            }}>
              <span style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"clamp(10px,2vw,22px)",color:"rgba(80,0,0,0.7)",fontWeight:900,lineHeight:1 }}>✕</span>
            </span>
            TAPPUN
          </h1>

          <p style={{ fontFamily:"var(--font-heading)",fontSize:"clamp(0.9rem,2.5vw,1.4rem)",color:"var(--white)",letterSpacing:"0.08em",textShadow:"2px 2px 0 rgba(0,0,0,0.4)",marginBottom:"var(--sp4)" }}>
            Product Engineer — Build fast. Ship early. Iterate.
          </p>
          <p style={{ fontSize:"var(--text-base)",color:"rgba(255,255,255,0.9)",textShadow:"1px 1px 3px rgba(0,0,0,0.5)",maxWidth:480,lineHeight:1.7,marginBottom:"var(--sp8)" }}>
            Full-stack engineer with a product mindset, based in Tokyo.
            Android · iOS · Web · Backend — solo. MVP to production.
          </p>

          <div style={{ display:"flex",gap:"var(--sp3)",flexWrap:"wrap",justifyContent:"center",marginBottom:"var(--sp12)" }}>
            <Link href="/projects" className="btn-more yellow-btn">View Projects ▶</Link>
            <Link href="/contact"  className="btn-more white-btn">Let&apos;s Work Together</Link>
          </div>

          {/* Stats */}
          <div style={{ display:"flex",gap:"var(--sp6)",flexWrap:"wrap",justifyContent:"center" }}>
            {[["20+","Countries visited"],["#1","Hackathon wins"],["5+","Years building"]].map(([v,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"var(--font-heading)",fontSize:"var(--text-3xl)",color:"var(--yellow)",textShadow:"2px 2px 0 rgba(0,0,0,0.4)",letterSpacing:"0.05em" }}>{v}</div>
                <div style={{ fontSize:"var(--text-xs)",color:"rgba(255,255,255,0.8)",textShadow:"1px 1px 2px rgba(0,0,0,0.4)",textTransform:"uppercase",letterSpacing:"0.1em" }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────── */}
        <section className="section-band band-blue" aria-label="Projects">
          <div className="container">
            <h2 className="section-heading yellow">PROJECTS</h2>
            <div style={{ display:"flex",flexWrap:"wrap",gap:"var(--sp3)",justifyContent:"center",marginBottom:"var(--sp6)" }}>
              {PROJECTS.map(p => (
                <Link key={p.title} href={p.href} className="sq-card" style={{ width:140, height:140 }}>
                  <div className="sq-thumb" style={{ background:"linear-gradient(135deg, #a8e4f4 0%, #5ac8e8 100%)",flex:1,display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <span style={{ fontSize:"2.5rem" }}>🎮</span>
                  </div>
                  <div className="sq-label"><span>{p.title}</span></div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign:"right" }}>
              <Link href="/projects" className="btn-more white-btn" style={{ fontSize:"var(--text-xs)" }}>See all ▶</Link>
            </div>
          </div>
        </section>

        <div style={{ height:50,background:"linear-gradient(to bottom right, #5AC8E8 50%, #7CC87A 50%)" }} aria-hidden="true" />

        {/* ── TOOLS ────────────────────────────────────── */}
        <section className="section-band band-green" aria-label="Tools">
          <div className="container">
            <h2 className="section-heading white">TOOLS</h2>
            <div className="list-container">
              <ul className="list-items">
                {TOOLS.map(t => (
                  <li key={t.title} className="list-item">
                    <a href={t.href}>
                      <div className="li-thumb" style={{ background:"linear-gradient(135deg, #7CC87A, #5AAD58)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                        <span style={{ fontSize:"1.6rem" }}>🛠</span>
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
          </div>
        </section>

        <div style={{ height:50,background:"linear-gradient(to bottom right, #7CC87A 50%, #FFE180 50%)" }} aria-hidden="true" />

        {/* ── HOW I WORK ───────────────────────────────── */}
        <section className="section-band band-yellow" aria-label="How I work">
          <div className="container">
            <h2 className="section-heading" style={{ color:"var(--text-dark)" }}>HOW I WORK</h2>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"var(--sp4)" }}>
              {HOW.map(h => (
                <div key={h.n} style={{ background:"rgba(255,255,255,0.85)",borderRadius:"var(--r-lg)",padding:"var(--sp5)",boxShadow:"var(--shadow-card)" }}>
                  <div style={{ fontFamily:"var(--font-heading)",fontSize:"var(--text-2xl)",color:"var(--sky)",marginBottom:"var(--sp2)" }}>{h.n}</div>
                  <div style={{ fontWeight:700,fontSize:"var(--text-lg)",marginBottom:"var(--sp2)" }}>{h.title}</div>
                  <p style={{ fontSize:"var(--text-sm)",color:"var(--text-mid)",lineHeight:1.7 }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section style={{ background:"var(--black)",padding:"var(--sp20) var(--sp6)",textAlign:"center" }}>
          <h2 style={{ fontFamily:"var(--font-heading)",fontSize:"clamp(1.8rem,4vw,3rem)",color:"var(--yellow)",letterSpacing:"0.05em",marginBottom:"var(--sp4)",textShadow:"2px 2px 0 rgba(0,0,0,0.4)" }}>
            LET&apos;S BUILD TOGETHER
          </h2>
          <p style={{ color:"rgba(255,255,255,0.7)",marginBottom:"var(--sp8)",fontSize:"var(--text-base)" }}>
            MVP, prototype, greenfield — any stage. I&apos;ll take your idea from zero to deployed.
          </p>
          <Link href="/contact" className="btn-more yellow-btn" style={{ fontSize:"var(--text-base)",padding:"var(--sp3) var(--sp8)" }}>
            Get in touch ▶
          </Link>
        </section>

      </div>
    </>
  );
}
