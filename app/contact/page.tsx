import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "MVP開発・新規事業・AI統合などのご相談はこちらから。",
};

const INFO = [
  { icon: "📍", label: "Location",      value: "Tokyo, Japan (Remote OK)" },
  { icon: "⏱",  label: "Response",      value: "24時間以内にご返信" },
  { icon: "🌐", label: "Languages",     value: "日本語 / English" },
  { icon: "✅", label: "Status",        value: "新規案件受付中" },
];

export default function ContactPage() {
  return (
    <>
      <div className="page-bg-fixed bg-blue" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding: "var(--sp12) var(--sp6)" }}>
          <div className="container">
            <h1 className="section-heading yellow">CONTACT</h1>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--sp10)",
              alignItems: "start",
            }}>
              {/* Left */}
              <div>
                <div style={{
                  background: "rgba(255,255,255,0.88)",
                  borderRadius: "var(--r-xl)",
                  padding: "var(--sp6)",
                  boxShadow: "var(--shadow-md)",
                  marginBottom: "var(--sp5)",
                }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", marginBottom: "var(--sp3)", color: "var(--text-dark)", letterSpacing: "0.05em" }}>
                    LET&apos;S WORK TOGETHER
                  </h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "var(--sp5)" }}>
                    MVP 開発・プロトタイピング・AI 統合・モバイルアプリ開発など、
                    どんなフェーズのプロジェクトでもお気軽にご相談ください。
                    アイデアを動くプロダクトに変えます。
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp3)" }}>
                    {INFO.map(card => (
                      <div key={card.label} style={{
                        display: "flex", alignItems: "center", gap: "var(--sp3)",
                        padding: "var(--sp3)",
                        background: "rgba(90,200,232,0.08)",
                        border: "1px solid rgba(90,200,232,0.25)",
                        borderRadius: "var(--r-md)",
                      }}>
                        <div style={{
                          width: 40, height: 40, borderRadius: "var(--r-md)",
                          background: "var(--grad-yellow)",
                          border: "1px solid var(--border-gray)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "1.2rem", flexShrink: 0,
                        }}>{card.icon}</div>
                        <div>
                          <div style={{ fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{card.label}</div>
                          <div style={{ fontSize: "var(--text-sm)", fontWeight: 600 }}>{card.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
