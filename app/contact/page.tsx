import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "MVP開発・新規事業・AI統合など、プロジェクトのご相談はこちらから。",
};

const INFO_CARDS = [
  {
    icon: "📍",
    label: "Location",
    value: "Tokyo, Japan (Remote OK)",
  },
  {
    icon: "⏱",
    label: "Response Time",
    value: "Within 24 hours",
  },
  {
    icon: "🌐",
    label: "Languages",
    value: "Japanese / English",
  },
  {
    icon: "✅",
    label: "Status",
    value: "Available for new projects",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        {/* Left col */}
        <div className={styles.leftCol}>
          <div className={styles.eyebrow}>Get in touch</div>
          <h1 className={styles.title}>
            Let&apos;s build
            <br />
            something <span>great.</span>
          </h1>
          <p className={styles.desc}>
            MVP開発・プロトタイピング・AI統合・モバイルアプリ開発など、
            どんなフェーズのプロジェクトでもお気軽にご相談ください。
            アイデアを動くプロダクトに変えます。
          </p>
          <div className={styles.infoCards}>
            {INFO_CARDS.map((card) => (
              <div key={card.label} className={styles.infoCard}>
                <div className={styles.infoIcon} aria-hidden="true">
                  {card.icon}
                </div>
                <div>
                  <div className={styles.infoLabel}>{card.label}</div>
                  <div className={styles.infoValue}>{card.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right col — form */}
        <ContactForm />
      </div>
    </main>
  );
}
