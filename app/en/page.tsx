import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildMetadata } from '@/components/seo/metadata';
import { en as t } from '@/lib/i18n/dictionaries';

export const metadata: Metadata = buildMetadata('en', t.home.meta, {
  canonical: 'https://taptappun.net/en',
});

const PROJECTS = [
  { title: 'AI VTuber System', href: '/en/projects/ai-vtuber' },
  { title: 'Sniper Game (PLATEAU)', href: '/en/projects/sniper-game' },
  { title: 'Medication App', href: '/en/projects/medication-app' },
  { title: 'AR Timecapsule', href: '/en/projects/ar-timecapsule' },
];

const ARTICLES_HREFS = [
  '/en/blog/cloudflare-workers-hono-zero-cost',
  '/en/blog',
  '/en/blog',
];

export default function EnglishHomePage() {
  const h = t.home;
  return (
    <>
      <div className="page-bg-fixed bg-game" aria-hidden="true" />
      <div className="page-wrap">
        <section
          aria-label="Hero"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 var(--sp6)',
            paddingTop: 'var(--topbar-h)',
            position: 'relative',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-logo)',
              fontSize: 'clamp(2.2rem,8vw,5.5rem)',
              letterSpacing: '0.03em',
              color: 'var(--white)',
              WebkitTextStroke: '3px var(--black)',
              textShadow: '4px 4px 0 rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(6px,1.5vw,16px)',
              marginBottom: 'var(--sp6)',
            }}
          >
            TAP
            <span
              style={{
                width: 'clamp(24px,4vw,56px)',
                height: 'clamp(24px,4vw,56px)',
                background:
                  'radial-gradient(circle at 35% 30%,#ff8888 0%,#cc0000 60%,#880000 100%)',
                borderRadius: '50%',
                border: 'clamp(2px,0.4vw,4px) solid var(--black)',
                boxShadow:
                  'inset -2px -3px 4px rgba(0,0,0,0.4),inset 2px 2px 4px rgba(255,200,200,0.3),0 4px 12px rgba(0,0,0,0.4)',
                display: 'inline-block',
                flexShrink: 0,
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(10px,2vw,22px)',
                  color: 'rgba(80,0,0,0.7)',
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                ✕
              </span>
            </span>
            TAPPUN
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.9rem,2.5vw,1.4rem)',
              color: 'var(--white)',
              letterSpacing: '0.08em',
              textShadow: '2px 2px 0 rgba(0,0,0,0.4)',
              marginBottom: 'var(--sp4)',
            }}
          >
            {h.tagline}
          </p>
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'rgba(255,255,255,0.9)',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
              maxWidth: 480,
              lineHeight: 1.7,
              marginBottom: 'var(--sp8)',
            }}
          >
            {h.description}
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--sp3)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 'var(--sp12)',
            }}
          >
            <Link href="/en/projects" className="btn-more yellow-btn">
              {h.ctaProjects}
            </Link>
            <Link href="/en/contact" className="btn-more white-btn">
              {h.ctaContact}
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 'var(--sp6)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 'var(--sp12)',
            }}
          >
            {h.stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-3xl)',
                    color: 'var(--yellow)',
                    textShadow: '2px 2px 0 rgba(0,0,0,0.4)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'rgba(255,255,255,0.85)',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 'var(--sp8)',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src="/images/down-arrow.webp"
              alt="Scroll down"
              width={80}
              height={30}
              className="down-arrow-btn"
              unoptimized
            />
          </div>
        </section>

        <section className="section-band band-blue" aria-label="Projects">
          <div className="container">
            <h2 className="section-heading yellow">{h.projects.heading}</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--sp3)',
                justifyContent: 'center',
                marginBottom: 'var(--sp6)',
              }}
            >
              {PROJECTS.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="sq-card"
                  style={{ width: 140, height: 140 }}
                >
                  <div
                    className="sq-thumb"
                    style={{
                      background: 'linear-gradient(135deg,#a8e4f4,#5ac8e8)',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: '2.5rem' }}>🎮</span>
                  </div>
                  <div className="sq-label">
                    <span>{p.title}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'right' }}>
              <Link
                href="/en/projects"
                className="btn-more white-btn"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                {h.projects.more}
              </Link>
            </div>
          </div>
        </section>

        <div
          style={{
            height: 50,
            background:
              'linear-gradient(to bottom right,#5AC8E8 50%,#7CC87A 50%)',
          }}
          aria-hidden="true"
        />

        <section className="section-band band-green" aria-label="Tools">
          <div className="container">
            <h2 className="section-heading white">{h.tools.heading}</h2>
            <div className="list-container">
              <ul className="list-items">
                {h.tools.items.map((item) => (
                  <li key={item.title} className="list-item">
                    <a href="/en/projects">
                      <div
                        className="li-thumb"
                        style={{
                          background: 'linear-gradient(135deg,#7CC87A,#5AAD58)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ fontSize: '1.6rem' }}>🛠</span>
                      </div>
                      <div className="li-body">
                        <span className="li-title">{item.title}</span>
                        <span className="li-desc">{item.desc}</span>
                      </div>
                      <div className="li-arrow">▶</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div
          style={{
            height: 50,
            background:
              'linear-gradient(to bottom right,#7CC87A 50%,#FFE180 50%)',
          }}
          aria-hidden="true"
        />

        <section className="section-band band-yellow" aria-label="Articles">
          <div className="container">
            <h2
              className="section-heading"
              style={{ color: 'var(--text-dark)' }}
            >
              {h.articles.heading}
            </h2>
            <div className="list-container">
              <ul className="list-items">
                {h.articles.items.map((a, i) => (
                  <li key={a.title} className="list-item">
                    <a href={ARTICLES_HREFS[i]}>
                      <div
                        className="li-thumb"
                        style={{
                          background: 'linear-gradient(135deg,#FFE180,#FFDC6C)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ fontSize: '1.6rem' }}>📝</span>
                      </div>
                      <div className="li-body">
                        <span className="li-title">{a.title}</span>
                        <span className="li-desc">{a.desc}</span>
                      </div>
                      <div className="li-arrow">▶</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: 'right', marginTop: 'var(--sp4)' }}>
              <Link
                href="/en/blog"
                className="btn-more yellow-btn"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                {h.articles.more}
              </Link>
            </div>
          </div>
        </section>

        <div
          style={{
            height: 50,
            background:
              'linear-gradient(to bottom right,#FFE180 50%,#A8E4F4 50%)',
          }}
          aria-hidden="true"
        />

        <section className="section-band band-teal" aria-label="How I work">
          <div className="container">
            <h2 className="section-heading white">{h.how.heading}</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
                gap: 'var(--sp4)',
              }}
            >
              {h.how.items.map((item) => (
                <div
                  key={item.n}
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    borderRadius: 'var(--r-lg)',
                    padding: 'var(--sp5)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-2xl)',
                      color: 'var(--sky)',
                      marginBottom: 'var(--sp2)',
                    }}
                  >
                    {item.n}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 'var(--text-lg)',
                      marginBottom: 'var(--sp2)',
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-mid)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-cta" aria-label="Contact CTA">
          <h2>{h.cta.heading}</h2>
          <p>{h.cta.desc}</p>
          <Link
            href="/en/contact"
            className="btn-more yellow-btn"
            style={{
              fontSize: 'var(--text-base)',
              padding: 'var(--sp3) var(--sp8)',
            }}
          >
            {h.cta.btn}
          </Link>
        </section>
      </div>
    </>
  );
}
