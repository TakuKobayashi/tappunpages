import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { routeLocales, toDictionaryLocale, type RouteLocale } from '@/lib/i18n/locales';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { GITHUB_URL } from '@/components/seo/accounts';

export async function generateMetadata({ params }: { params: Promise<{ locale: RouteLocale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dictionaryLocale = toDictionaryLocale(locale);
  return buildMetadata(dictionaryLocale, getDictionary(dictionaryLocale).about.meta);
}

export function generateStaticParams() {
  return routeLocales.map((locale) => ({ locale }));
}

export default async function LocalizedAboutPage({ params }: { params: Promise<{ locale: RouteLocale }> }) {
  const { locale } = await params;
  const t = getDictionary(toDictionaryLocale(locale));
  const a = t.about;
  return (
    <>
      <div className="page-bg-fixed bg-blue" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding: 'var(--sp12) var(--sp6) var(--sp8)' }}>
          <div className="container">
            <h1
              className="section-heading yellow"
              style={{ textAlign: 'left', marginBottom: 'var(--sp4)' }}
            >
              {a.heading}
            </h1>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 300px',
                gap: 'var(--sp10)',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  borderRadius: 'var(--r-xl)',
                  padding: 'var(--sp6)',
                  boxShadow: 'var(--shadow-md)',
                  lineHeight: 1.85,
                  color: 'var(--text-mid)',
                }}
              >
                {a.bio.map((p, i) => (
                  <p key={i} style={{ marginBottom: 'var(--sp4)' }}>
                    {p}
                  </p>
                ))}
              </div>
              <aside
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: 'var(--r-xl)',
                  padding: 'var(--sp5)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TakuKobayashi on GitHub"
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    display: 'block',
                    overflow: 'hidden',
                    border: '2px solid var(--border-gray)',
                    marginBottom: 'var(--sp3)',
                  }}
                >
                  <img
                    src="/images/github-avatar.webp"
                    alt="taptappun GitHub profile"
                    width="72"
                    height="72"
                    loading="eager"
                    fetchPriority="high"
                    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </a>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 'var(--text-lg)',
                    marginBottom: 2,
                  }}
                >
                  taptappun
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--sky)',
                    marginBottom: 'var(--sp3)',
                  }}
                >
                  {a.role}
                </div>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-mid)',
                    textDecoration: 'none',
                  }}
                >
                  @TakuKobayashi ↗
                </a>
              </aside>
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

        <section
          className="section-band band-green"
          aria-label={a.a11y.timeline}
        >
          <div className="container">
            <h2 className="section-heading white">{a.timeline.heading}</h2>
            <div
              style={{
                maxWidth: 720,
                margin: '0 auto',
                position: 'relative',
                paddingLeft: 'var(--sp8)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 'var(--sp3)',
                  top: 8,
                  bottom: 0,
                  width: 2,
                  background:
                    'linear-gradient(to bottom,var(--yellow-dark),rgba(255,255,255,0.3))',
                }}
                aria-hidden="true"
              />
              {a.timeline.items.map((item) => (
                <div
                  key={item.year}
                  style={{ position: 'relative', marginBottom: 'var(--sp8)' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 'calc(-1 * var(--sp8) + var(--sp3) - 5px)',
                      top: 6,
                      width: 12,
                      height: 12,
                      background: 'var(--yellow-dark)',
                      border: '2px solid var(--white)',
                      borderRadius: '50%',
                      boxShadow: '0 0 6px rgba(255,220,108,0.6)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.88)',
                      borderRadius: 'var(--r-lg)',
                      padding: 'var(--sp4) var(--sp5)',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--sky)',
                        marginBottom: 'var(--sp1)',
                      }}
                    >
                      {item.year}
                    </div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 'var(--text-lg)',
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-muted)',
                        marginBottom: 'var(--sp2)',
                      }}
                    >
                      {item.org}
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
                </div>
              ))}
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

        <section className="section-band band-yellow" aria-label={a.a11y.values}>
          <div className="container">
            <h2
              className="section-heading"
              style={{ color: 'var(--text-dark)' }}
            >
              {a.values.heading}
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
                gap: 'var(--sp4)',
              }}
            >
              {a.values.items.map((v) => (
                <div
                  key={v.title}
                  style={{
                    background: 'rgba(255,255,255,0.88)',
                    borderRadius: 'var(--r-lg)',
                    padding: 'var(--sp5)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{ fontSize: '1.8rem', marginBottom: 'var(--sp3)' }}
                    aria-hidden="true"
                  >
                    {v.icon}
                  </div>
                  <div style={{ fontWeight: 700, marginBottom: 'var(--sp2)' }}>
                    {v.title}
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-mid)',
                      lineHeight: 1.7,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band band-teal">
          <div className="container">
            <h2 className="section-heading white">{a.socialHeading}</h2>
            <SocialLinks showLabels variant="profile" ariaLabel={a.socialHeading} />
          </div>
        </section>

        <section className="section-cta">
          <h2>{a.cta.heading}</h2>
          <p>&nbsp;</p>
          <Link
              href={`/${locale}/contact`}
            className="btn-more yellow-btn"
            style={{
              fontSize: 'var(--text-base)',
              padding: 'var(--sp3) var(--sp8)',
            }}
          >
            {a.cta.btn}
          </Link>
        </section>
      </div>
    </>
  );
}
