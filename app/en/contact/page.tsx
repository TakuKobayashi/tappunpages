import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { en as t } from '@/lib/i18n/dictionaries';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = buildMetadata('en', t.contact.meta);

export default function EnContactPage() {
  const c = t.contact;
  return (
    <>
      <div className="page-bg-fixed bg-blue" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding: 'var(--sp12) var(--sp6)' }}>
          <div className="container">
            <h1 className="section-heading yellow">{c.heading}</h1>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--sp10)',
                alignItems: 'start',
              }}
            >
              <div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.88)',
                    borderRadius: 'var(--r-xl)',
                    padding: 'var(--sp6)',
                    boxShadow: 'var(--shadow-md)',
                    marginBottom: 'var(--sp5)',
                  }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-2xl)',
                      marginBottom: 'var(--sp3)',
                      color: 'var(--text-dark)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {c.subheading}
                  </h2>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-mid)',
                      lineHeight: 1.8,
                      marginBottom: 'var(--sp5)',
                    }}
                  >
                    {c.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--sp3)',
                    }}
                  >
                    {c.info.map((card) => (
                      <div
                        key={card.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--sp3)',
                          padding: 'var(--sp3)',
                          background: 'rgba(90,200,232,0.08)',
                          border: '1px solid rgba(90,200,232,0.25)',
                          borderRadius: 'var(--r-md)',
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 'var(--r-md)',
                            background: 'var(--grad-yellow)',
                            border: '1px solid var(--border-gray)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            flexShrink: 0,
                          }}
                        >
                          {card.icon}
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: 'var(--text-xs)',
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--text-muted)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                            }}
                          >
                            {card.label}
                          </div>
                          <div
                            style={{
                              fontSize: 'var(--text-sm)',
                              fontWeight: 600,
                            }}
                          >
                            {card.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <ContactForm locale="en" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
