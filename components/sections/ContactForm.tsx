"use client";

import { useState } from "react";
import styles from "@/app/contact/page.module.css";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  "MVP Development",
  "AI Integration",
  "Mobile App (Android/iOS)",
  "Web App / Full-stack",
  "Fintech / Crypto",
  "Game Development",
  "Technical Consulting",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "送信に失敗しました");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "送信に失敗しました");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formCard}>
        <div className={styles.successBox}>
          <div className={styles.successIcon}>✅</div>
          <div className={styles.successTitle}>Message sent!</div>
          <p className={styles.successDesc}>
            ご連絡ありがとうございます。
            24時間以内にご返信いたします。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Send a message</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.formRow}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={styles.input}
              placeholder="Taro Yamada"
              autoComplete="name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className={styles.input}
            placeholder="Acme Inc. (optional)"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="projectType" className={styles.label}>
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className={styles.select}
            defaultValue=""
          >
            <option value="" disabled>
              Select project type
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            className={styles.textarea}
            placeholder="プロジェクトの概要・課題・スケジュール感などを教えてください。"
            rows={5}
          />
        </div>

        {status === "error" && (
          <div className={styles.errorMsg} role="alert">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send Message →"}
        </button>

        <p className={styles.formFooter}>
          返信は24時間以内。英語・日本語どちらでも対応します。
        </p>
      </form>
    </div>
  );
}
