"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, switchLocalePath } from "@/lib/i18n/routing";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const locale = getLocaleFromPath(pathname);
  const t = getDictionary(locale);

  // ナビリンクのベースパス（ロケールプレフィックスを除いた絶対パス）
  const base = locale === "en" ? "/en" : "";

  const NAV_LINKS = [
    { href: `${base}/`,         label: t.nav.home },
    { href: `${base}/about`,    label: t.nav.about },
    { href: `${base}/projects`, label: t.nav.projects },
    { href: `${base}/blog`,     label: t.nav.blog },
    { href: `${base}/contact`,  label: t.nav.contact },
  ];

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    const normalized = href.replace(/\/$/, "") || "/";
    const normalizedPath = pathname.replace(/\/$/, "") || "/";
    if (normalized === base || normalized === `${base}/`) {
      return normalizedPath === (base || "/");
    }
    return normalizedPath.startsWith(normalized);
  };

  // 言語切り替えパス
  const toLocale = locale === "ja" ? "en" : "ja";
  const langSwitchPath = switchLocalePath(pathname, toLocale);

  return (
    <>
      <header className="topbar" role="banner">
        {/* White nav */}
        <div className="topbar-nav">
          <Link href={`${base}/`} className="topbar-logo" aria-label="taptappun home">
            TAP<span className="logo-dot" aria-hidden="true" />TAPPUN
          </Link>

          <nav className="topbar-links" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="topbar-right">
            {/* 言語切り替えボタン */}
            <Link
              href={langSwitchPath}
              className="btn-lang"
              aria-label={t.nav.langSwitchLabel}
            >
              {t.nav.langSwitch}
            </Link>
            <button
              className={`btn-menu-toggle${open ? " open" : ""}`}
              onClick={() => setOpen(v => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="menu-line" />
              <span className="menu-line" />
              <span className="menu-line" />
            </button>
          </div>
        </div>

        {/* Black ticker */}
        <div className="topbar-ticker" aria-label="Latest news">
          <span className="ticker-date">
            {new Date().toLocaleDateString(locale === "ja" ? "ja-JP" : "en-US", {
              year: "numeric", month: "2-digit", day: "2-digit",
            })}
          </span>
          <span className="ticker-text">{t.ticker.text}</span>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`topbar-drawer${open ? " open" : ""}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`drawer-link${isActive(l.href) ? " active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
        <Link href={langSwitchPath} className="drawer-link">
          {t.nav.langSwitch} →
        </Link>
      </div>

      <div className="topbar-spacer" aria-hidden="true" />
    </>
  );
}
