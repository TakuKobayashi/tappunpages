"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  "MVP Development", "AI Integration", "Mobile App (Android/iOS)",
  "Web App / Full-stack", "Fintech / Crypto", "Game Development",
  "Technical Consulting", "Other",
];

const s: Record<string, React.CSSProperties> = {
  card: {
    background: "rgba(255,255,255,0.92)",
    borderRadius: "var(--r-xl)",
    padding: "var(--sp6)",
    boxShadow: "var(--shadow-md)",
  },
  label: {
    fontSize: "var(--text-xs)",
    fontFamily: "var(--font-mono)",
    color: "var(--text-mid)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    display: "block",
    marginBottom: "var(--sp1)",
  },
  input: {
    width: "100%",
    background: "rgba(90,200,232,0.06)",
    border: "1px solid var(--border-gray)",
    borderRadius: "var(--r-md)",
    padding: "var(--sp2) var(--sp3)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-sm)",
    color: "var(--text-dark)",
    outline: "none",
    transition: "border-color 120ms ease",
  },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp3)" },
  field: { display: "flex", flexDirection: "column" as const, gap: "var(--sp1)" },
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = {
      name:        (form.elements.namedItem("name")        as HTMLInputElement).value,
      email:       (form.elements.namedItem("email")       as HTMLInputElement).value,
      company:     (form.elements.namedItem("company")     as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      message:     (form.elements.namedItem("message")     as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as { error?: string }).error || "送信に失敗しました");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "送信に失敗しました");
    }
  }

  if (status === "success") {
    return (
      <div style={{ ...s.card, textAlign: "center", padding: "var(--sp16)" }}>
        <div style={{ fontSize: "3rem", marginBottom: "var(--sp4)" }}>✅</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", marginBottom: "var(--sp3)", letterSpacing: "0.05em" }}>SENT!</div>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-mid)" }}>
          ご連絡ありがとうございます。<br />24時間以内にご返信いたします。
        </p>
      </div>
    );
  }

  return (
    <div style={s.card}>
      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", marginBottom: "var(--sp5)", letterSpacing: "0.05em", color: "var(--text-dark)" }}>
        SEND MESSAGE
      </h2>
      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "var(--sp4)" }}>
        <div style={s.row}>
          <div style={s.field}>
            <label htmlFor="name" style={s.label}>Name *</label>
            <input id="name" name="name" type="text" required style={s.input} placeholder="Taro Yamada" />
          </div>
          <div style={s.field}>
            <label htmlFor="email" style={s.label}>Email *</label>
            <input id="email" name="email" type="email" required style={s.input} placeholder="you@company.com" />
          </div>
        </div>

        <div style={s.field}>
          <label htmlFor="company" style={s.label}>Company</label>
          <input id="company" name="company" type="text" style={s.input} placeholder="Acme Inc. (optional)" />
        </div>

        <div style={s.field}>
          <label htmlFor="projectType" style={s.label}>Project Type *</label>
          <select id="projectType" name="projectType" required style={{ ...s.input, appearance: "none" as const }} defaultValue="">
            <option value="" disabled>Select project type</option>
            {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div style={s.field}>
          <label htmlFor="message" style={s.label}>Message *</label>
          <textarea
            id="message" name="message" required rows={5}
            style={{ ...s.input, resize: "vertical", lineHeight: 1.6, minHeight: 120 }}
            placeholder="プロジェクトの概要・課題・スケジュール感などを教えてください。"
          />
        </div>

        {status === "error" && (
          <div role="alert" style={{
            fontSize: "var(--text-sm)", color: "#cc0000",
            padding: "var(--sp3)", borderRadius: "var(--r-md)",
            background: "rgba(204,0,0,0.06)", border: "1px solid rgba(204,0,0,0.2)",
            textAlign: "center",
          }}>{errorMsg}</div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-more yellow-btn"
          style={{ width: "100%", fontSize: "var(--text-base)", padding: "var(--sp3)", opacity: status === "loading" ? 0.6 : 1 }}
        >
          {status === "loading" ? "Sending…" : "Send Message ▶"}
        </button>

        <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", textAlign: "center" }}>
          返信は24時間以内。英語・日本語どちらでも対応します。
        </p>
      </form>
    </div>
  );
}
