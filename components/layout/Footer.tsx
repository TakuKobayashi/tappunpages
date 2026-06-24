import Link from "next/link";
import styles from "./Footer.module.css";

const SOCIAL = [
  { href: "https://github.com/taptappun",        label: "GH", title: "GitHub" },
  { href: "https://twitter.com/phantomcatworks", label: "𝕏",  title: "X (Twitter)" },
  { href: "https://linkedin.com/in/taptappun",   label: "in", title: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          TAP
          <span className={styles.dot} aria-hidden="true" />
          TAPPUN
        </div>
        <p className={styles.tagline}>Product Engineer — Build fast. Ship early. Iterate.</p>

        <div className={styles.social} aria-label="Social links">
          {SOCIAL.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.title} aria-label={s.title} className={styles.socialLink}>
              {s.label}
            </a>
          ))}
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          {[
            { href: "/about",    label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/blog",     label: "Blog" },
            { href: "/contact",  label: "Contact" },
            { href: "/en",       label: "English" },
          ].map(l => (
            <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
          ))}
        </nav>

        <p className={styles.copy}>© {new Date().getFullYear()} taptappun. All rights reserved.</p>
      </div>
    </footer>
  );
}
