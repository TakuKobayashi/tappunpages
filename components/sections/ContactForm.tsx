"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/dictionaries";
import { getDictionary } from "@/lib/i18n/dictionaries";

interface Props {
  locale?: Locale;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(90,200,232,0.06)",
  border: "1px solid var(--border-gray)",
  borderRadius: "var(--r-md)",
  padding: "var(--sp2) var(--sp3)",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-sm)",
  color: "var(--text-dark)",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontSize: "var(--text-xs)",
  fontFamily: "var(--font-mono)",
  color: "var(--text-mid)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
};

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--sp1)",
};

export function ContactForm({ locale = "ja" }: Props) {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const t = getDictionary(locale).contact.form;

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
        const err = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(err.error || t.error.default);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : t.error.default);
    }
  }

  if (status === "success") {
    return (
      <div style={{ background:"rgba(255,255,255,0.92)",borderRadius:"var(--r-xl)",padding:"var(--sp6)",boxShadow:"var(--shadow-md)",textAlign:"center" }}>
        <div style={{ fontSize:"3rem",marginBottom:"var(--sp4)" }}>✅</div>
        <div style={{ fontFamily:"var(--font-heading)",fontSize:"var(--text-2xl)",marginBottom:"var(--sp3)",letterSpacing:"0.05em" }}>{t.success.title}</div>
        <p style={{ fontSize:"var(--text-sm)",color:"var(--text-mid)",whiteSpace:"pre-line" }}>{t.success.desc}</p>
      </div>
    );
  }

  return (
    <div style={{ background:"rgba(255,255,255,0.92)",borderRadius:"var(--r-xl)",padding:"var(--sp6)",boxShadow:"var(--shadow-md)" }}>
      <h2 style={{ fontFamily:"var(--font-heading)",fontSize:"var(--text-2xl)",marginBottom:"var(--sp5)",letterSpacing:"0.05em",color:"var(--text-dark)" }}>{t.title}</h2>
      <form onSubmit={handleSubmit} noValidate style={{ display:"flex",flexDirection:"column",gap:"var(--sp4)" }}>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--sp3)" }}>
          <div style={fieldStyle}>
            <label htmlFor="name" style={labelStyle}>Name *</label>
            <input id="name" name="name" type="text" required style={inputStyle} placeholder={t.namePlaceholder} />
          </div>
          <div style={fieldStyle}>
            <label htmlFor="email" style={labelStyle}>Email *</label>
            <input id="email" name="email" type="email" required style={inputStyle} placeholder={t.emailPlaceholder} />
          </div>
        </div>

        <div style={fieldStyle}>
          <label htmlFor="company" style={labelStyle}>Company</label>
          <input id="company" name="company" type="text" style={inputStyle} placeholder={t.companyPlaceholder} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="projectType" style={labelStyle}>Project Type *</label>
          <select id="projectType" name="projectType" required defaultValue="" style={{ ...inputStyle, appearance:"none" as const }}>
            <option value="" disabled>{t.selectPlaceholder}</option>
            {(t.projectTypes as readonly string[]).map((pt) => <option key={pt} value={pt}>{pt}</option>)}
          </select>
        </div>

        <div style={fieldStyle}>
          <label htmlFor="message" style={labelStyle}>Message *</label>
          <textarea id="message" name="message" required rows={5}
            style={{ ...inputStyle, resize:"vertical",lineHeight:1.6,minHeight:120 }}
            placeholder={t.messagePlaceholder}
          />
        </div>

        {status === "error" && (
          <div role="alert" style={{ fontSize:"var(--text-sm)",color:"#cc0000",padding:"var(--sp3)",borderRadius:"var(--r-md)",background:"rgba(204,0,0,0.06)",border:"1px solid rgba(204,0,0,0.2)",textAlign:"center" }}>
            {errorMsg}
          </div>
        )}

        <button type="submit" disabled={status === "loading"} className="btn-more yellow-btn"
          style={{ width:"100%",fontSize:"var(--text-base)",padding:"var(--sp3)",opacity:status==="loading"?0.6:1 }}>
          {status === "loading" ? t.sending : t.submit}
        </button>

        <p style={{ fontSize:"var(--text-xs)",color:"var(--text-muted)",textAlign:"center" }}>{t.footer}</p>
      </form>
    </div>
  );
}
