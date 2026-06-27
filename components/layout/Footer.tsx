'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath } from '@/lib/i18n/routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import styles from './Footer.module.css';

const SOCIAL = [
  { href: 'https://github.com/taptappun', label: 'GH', title: 'GitHub' },
  {
    href: 'https://twitter.com/phantomcatworks',
    label: '𝕏',
    title: 'X (Twitter)',
  },
  { href: 'https://linkedin.com/in/taptappun', label: 'in', title: 'LinkedIn' },
];

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getDictionary(locale);
  const base = locale === 'en' ? '/en' : '';

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          TAP
          <span className={styles.dot} aria-hidden="true" />
          TAPPUN
        </div>
        <p className={styles.tagline}>{t.footer.tagline}</p>

        <div className={styles.social} aria-label="Social links">
          {SOCIAL.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.title}
              aria-label={s.title}
              className={styles.socialLink}
            >
              {s.label}
            </a>
          ))}
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          <Link href={`${base}/about`} className={styles.link}>
            {t.footer.links.about}
          </Link>
          <Link href={`${base}/projects`} className={styles.link}>
            {t.footer.links.projects}
          </Link>
          <Link href={`${base}/blog`} className={styles.link}>
            {t.footer.links.blog}
          </Link>
          <Link href={`${base}/contact`} className={styles.link}>
            {t.footer.links.contact}
          </Link>
          {/* 言語切り替えリンク */}
          {locale === 'ja' ? (
            <Link href="/en" className={styles.link}>
              English
            </Link>
          ) : (
            <Link href="/" className={styles.link}>
              日本語
            </Link>
          )}
        </nav>

        <p className={styles.copy}>
          © {new Date().getFullYear()} taptappun. {t.footer.copy}
        </p>
      </div>
    </footer>
  );
}
