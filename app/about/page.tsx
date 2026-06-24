import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Product Engineer として、プロダクトを前進させることに特化したフルスタックエンジニア。",
};

const TIMELINE = [
  { year: "2024–",      title: "Freelance Product Engineer", org: "Independent",      desc: "海外・スタートアップ向けMVP開発・AI統合・モバイルアプリ。Cloudflare + Next.js + Kotlin/Swift のフルスタックを一人で完結。" },
  { year: "2022–2024",  title: "Senior Android Engineer",    org: "Startup (Tokyo)",  desc: "Kotlin + Jetpack Compose でゼロからアプリ設計・実装。CI/CD・テスト自動化。" },
  { year: "2020–2022",  title: "Full-stack Engineer",        org: "Fintech Company",  desc: "仮想通貨取引所バックエンド開発。高可用性・高セキュリティ金融系システムの設計と実装。" },
  { year: "2018–2020",  title: "Mobile Engineer",            org: "Product Company",  desc: "Android/iOS 両対応プロダクト開発。UX 重視の UI 実装とパフォーマンス最適化。" },
  { year: "2017",       title: "First Hackathon Win 🏆",     org: "Various events",   desc: "複数ハッカソンで受賞。高速プロトタイピングの文化を体得。" },
];

const VALUES = [
  { icon: "⚡", title: "Build Fast",          desc: "完璧を待たずに動くものを作る。最初のコミットまでを最短に。" },
  { icon: "👁", title: "Show Early",           desc: "早い段階でフィードバックを取る。仮説を最速で検証。" },
  { icon: "🔄", title: "Iterate",              desc: "仕様変更を恐れない。変化に強いアーキテクチャ。" },
  { icon: "🌏", title: "Global Ready",         desc: "20カ国以上の旅行経験。非同期・英語でのコミュニケーションが強み。" },
  { icon: "🎮", title: "Builder Mentality",    desc: "ゲームや趣味プロダクトも含め、常に何かを作り続ける。" },
  { icon: "🤝", title: "End-to-end Ownership", desc: "要件定義からデプロイまで、全フェーズに責任を持つ。" },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-bg-fixed bg-blue" aria-hidden="true" />
      <div className="page-wrap">

        {/* ── HERO ─────────────────────────────────── */}
        <section style={{ padding: "var(--sp16) var(--sp6) var(--sp12)" }}>
          <div className="container">
            <h1 className="section-heading yellow" style={{ textAlign: "left", marginBottom: "var(--sp4)" }}>
              お前は誰よ？
            </h1>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 300px",
              gap: "var(--sp10)",
              alignItems: "start",
            }}>
              <div>
                <div style={{
                  background: "rgba(255,255,255,0.88)",
                  borderRadius: "var(--r-xl)",
                  padding: "var(--sp6)",
                  boxShadow: "var(--shadow-md)",
                  lineHeight: 1.85,
                  color: "var(--text-mid)",
                }}>
                  <p style={{ marginBottom: "var(--sp4)" }}>
                    東京・府中在住のフルスタックエンジニア。
                    Android・iOS からバックエンド・インフラまで、プロダクトを一人で0から1にすることが得意です。
                  </p>
                  <p style={{ marginBottom: "var(--sp4)" }}>
                    Fintech（仮想通貨取引所）、AI 統合、ゲーム開発、モバイルアプリ、SaaS プロダクトなど
                    幅広い領域での実装経験を持ち、特に曖昧な要件から素早く動くものを作ることに強みがあります。
                  </p>
                  <p>
                    ハッカソンでの受賞経験を通じて培った「Build fast / Show early / Iterate」の文化を軸に、
                    スタートアップや新規事業に貢献します。
                    20カ国以上の海外旅行経験から生まれたグローバルな視点で、海外案件にも対応します。
                  </p>
                </div>
              </div>

              {/* Profile card */}
              <aside style={{
                background: "rgba(255,255,255,0.9)",
                borderRadius: "var(--r-xl)",
                padding: "var(--sp5)",
                boxShadow: "var(--shadow-md)",
              }}>
                <div style={{
                  width: 72, height: 72,
                  borderRadius: "var(--r-lg)",
                  background: "var(--grad-yellow)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-logo)", fontSize: "1.4rem",
                  border: "2px solid var(--border-gray)",
                  marginBottom: "var(--sp3)",
                }}>tp</div>
                <div style={{ fontWeight: 700, fontSize: "var(--text-lg)", marginBottom: 2 }}>taptappun</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--sky)", marginBottom: "var(--sp3)" }}>Product Engineer</div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--text-mid)", marginBottom: "var(--sp4)" }}>📍 Tokyo, Japan</div>
                <hr style={{ border: "none", borderTop: "1px solid var(--border-gray)", marginBottom: "var(--sp3)" }} />
                {[
                  { icon: "GH", label: "GitHub",    href: "https://github.com/taptappun" },
                  { icon: "𝕏",  label: "@phantomcatworks", href: "https://twitter.com/phantomcatworks" },
                  { icon: "Qi", label: "Qiita",     href: "https://qiita.com/taptappun" },
                  { icon: "in", label: "LinkedIn",  href: "https://linkedin.com/in/taptappun" },
                ].map(s => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: "var(--sp2)",
                    fontSize: "var(--text-sm)", color: "var(--text-mid)",
                    padding: "var(--sp2) var(--sp2)",
                    borderRadius: "var(--r-md)",
                    marginBottom: "var(--sp1)",
                    transition: "background var(--t-fast), color var(--t-fast)",
                    textDecoration: "none",
                  }}>
                    <span style={{ fontFamily: "var(--font-mono)", width: 20, textAlign: "center", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ height: 50, background: "linear-gradient(to bottom right, #5AC8E8 50%, #7CC87A 50%)" }} aria-hidden="true" />

        {/* ── TIMELINE ─────────────────────────────── */}
        <section className="section-band band-green" aria-label="Career timeline">
          <div className="container">
            <h2 className="section-heading white">TIMELINE</h2>
            <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", paddingLeft: "var(--sp8)" }}>
              {/* Line */}
              <div style={{
                position: "absolute", left: "var(--sp3)", top: 8, bottom: 0,
                width: 2, background: "linear-gradient(to bottom, var(--yellow-dark), rgba(255,255,255,0.3))",
              }} aria-hidden="true" />

              {TIMELINE.map((item) => (
                <div key={item.year} style={{ position: "relative", marginBottom: "var(--sp8)" }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: "calc(-1 * var(--sp8) + var(--sp3) - 5px)", top: 6,
                    width: 12, height: 12,
                    background: "var(--yellow-dark)",
                    border: "2px solid var(--white)",
                    borderRadius: "50%",
                    boxShadow: "0 0 6px rgba(255,220,108,0.6)",
                  }} aria-hidden="true" />

                  <div style={{
                    background: "rgba(255,255,255,0.88)",
                    borderRadius: "var(--r-lg)",
                    padding: "var(--sp4) var(--sp5)",
                    boxShadow: "var(--shadow-card)",
                  }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--sky)", marginBottom: "var(--sp1)" }}>{item.year}</div>
                    <div style={{ fontWeight: 700, fontSize: "var(--text-lg)", marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--sp2)" }}>{item.org}</div>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--text-mid)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ height: 50, background: "linear-gradient(to bottom right, #7CC87A 50%, #FFE180 50%)" }} aria-hidden="true" />

        {/* ── VALUES ───────────────────────────────── */}
        <section className="section-band band-yellow" aria-label="Values">
          <div className="container">
            <h2 className="section-heading" style={{ color: "var(--text-dark)" }}>VALUES</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--sp4)",
            }}>
              {VALUES.map(v => (
                <div key={v.title} style={{
                  background: "rgba(255,255,255,0.88)",
                  borderRadius: "var(--r-lg)",
                  padding: "var(--sp5)",
                  boxShadow: "var(--shadow-card)",
                }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "var(--sp3)" }} aria-hidden="true">{v.icon}</div>
                  <div style={{ fontWeight: 700, marginBottom: "var(--sp2)" }}>{v.title}</div>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-mid)", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--black)", padding: "var(--sp16) var(--sp6)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", color: "var(--yellow)", marginBottom: "var(--sp6)", letterSpacing: "0.05em" }}>
            WORK TOGETHER?
          </h2>
          <Link href="/contact" className="btn-more yellow-btn" style={{ fontSize: "var(--text-base)", padding: "var(--sp3) var(--sp8)" }}>
            お問い合わせ ▶
          </Link>
        </section>
      </div>
    </>
  );
}
