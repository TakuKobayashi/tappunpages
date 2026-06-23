import Link from "next/link";
import styles from "./Footer.module.css";

const SOCIAL_LINKS = [
  { href: "https://github.com/taptappun", label: "GH", title: "GitHub" },
  { href: "https://twitter.com/phantomcatworks", label: "𝕏", title: "X (Twitter)" },
  { href: "https://qiita.com/taptappun", label: "Qi", title: "Qiita" },
  { href: "https://linkedin.com/in/taptappun", label: "in", title: "LinkedIn" },
];

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/en", label: "English" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandName}>
            taptappun<span>.dev</span>
          </div>
          <p className={styles.tagline}>
            Product Engineer — Build fast, show early, iterate.
            <br />
            MVP・AI・Fintech・Rapid Prototyping
          </p>
          <div className={styles.social} aria-label="Social links">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                aria-label={s.title}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} taptappun. All rights reserved.
        </span>
        <div className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          Available for new projects
        </div>
      </div>
    </footer>
  );
}
