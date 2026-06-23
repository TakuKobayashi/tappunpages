"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Pixel-art cat logo mark (4x4 grid)
const LOGO_GRID = [
  false, true,  true,  false,
  true,  true,  true,  true,
  true,  false, false, true,
  false, true,  true,  false,
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="taptappun home">
            <div className={styles.logoMark} aria-hidden="true">
              {LOGO_GRID.map((on, i) => (
                <div
                  key={i}
                  className={`${styles.logoDot} ${on ? "" : styles.off}`}
                />
              ))}
            </div>
            <span className={styles.logoText}>
              taptappun<span>.</span>dev
            </span>
          </Link>

          {/* Desktop links */}
          <div className={styles.links} role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${
                  (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                    ? styles.active
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className={styles.right}>
            <Link href="/en" className={styles.langToggle} aria-label="Switch to English">
              EN
            </Link>
            <Link href="/contact" className={styles.ctaBtn}>
              Hire me
            </Link>
            <button
              className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.open : ""}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.drawerLink} ${
              (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                ? styles.active
                : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/en" className={styles.drawerLink}>
          English Version →
        </Link>
      </div>
    </>
  );
}
