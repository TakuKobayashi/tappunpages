import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { en as t } from '@/lib/i18n/dictionaries';
import { getAllPosts } from '@/lib/blog';
import { ContentListItem } from '@/components/ui/ContentListItem';

export const metadata: Metadata = buildMetadata('en', t.blog.meta);

export default async function EnBlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <div className="page-bg-fixed bg-yellow" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding: 'var(--sp12) var(--sp6)' }}>
          <div className="container">
            <h1
              className="section-heading"
              style={{ color: 'var(--text-dark)' }}
            >
              {t.blog.heading}
            </h1>
            {posts.length === 0 ? (
              <div
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  borderRadius: 'var(--r-xl)',
                  padding: 'var(--sp16)',
                  textAlign: 'center',
                  border: '2px dashed var(--border-gray)',
                }}
              >
                <span
                  style={{
                    fontSize: '2rem',
                    display: 'block',
                    marginBottom: 'var(--sp4)',
                  }}
                >
                  ✍️
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {t.blog.empty}
                </p>
              </div>
            ) : (
              <div className="list-container">
                <ul className="list-items">
                  {posts.map((p) => (
                    <li key={p.slug} className="list-item">
                      <ContentListItem
                        title={p.title}
                        description={`${p.date}${p.readingTime ? ` · ${p.readingTime}` : ''}`}
                        icon={p.icon}
                        defaultIcon="📝"
                        iconBg="linear-gradient(135deg, #FFE180, #FFDC6C)"
                        externalUrl={p.externalUrl}
                        internalHref={`/en/blog/${p.slug}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
