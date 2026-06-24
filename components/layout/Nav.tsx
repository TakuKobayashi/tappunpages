"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",        label: "ホーム" },
  { href: "/about",   label: "お前は誰よ？" },
  { href: "/projects",label: "制作物" },
  { href: "/blog",    label: "記事" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Fixed topbar */}
      <header className="topbar" role="banner">
        {/* White nav */}
        <div className="topbar-nav">
          {/* Logo */}
          <Link href="/" className="topbar-logo" aria-label="taptappun home">
            TAP<span className="logo-dot" aria-hidden="true" />TAPPUN
          </Link>

          {/* Desktop links */}
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

          {/* Right */}
          <div className="topbar-right">
            <Link href="/en" className="btn-lang" aria-label="English version">EN</Link>
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
            {new Date().toLocaleDateString("ja-JP", { year:"numeric", month:"2-digit", day:"2-digit" })}
          </span>
          <span className="ticker-text">
            Available for new projects — MVP・AI・Fintech・Mobile 開発のご相談はお気軽に
          </span>
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
        <Link href="/en" className="drawer-link">English →</Link>
      </div>

      {/* Spacer */}
      <div className="topbar-spacer" aria-hidden="true" />
    </>
  );
}
