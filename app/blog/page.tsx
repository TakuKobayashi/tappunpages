import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { ja as t } from '@/lib/i18n/dictionaries';
import { getAllPosts } from '@/lib/blog';
import { ArticleList } from '@/components/ui/ArticleList';
import { formatPublishedDate } from '@/lib/content-data';

export const metadata: Metadata = buildMetadata('ja', t.blog.meta, {
  path: 'blog',
});

export default async function BlogPage() {
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
              <ArticleList
                articles={posts.map((p) => ({
                  slug: p.slug,
                  title: p.title,
                  description: `${formatPublishedDate(p.publishedAt)}${p.readingTime ? ` · ${p.readingTime}` : ''}`,
                  icon: p.icon,
                  externalUrl: p.externalUrl,
                }))}
                moreLabel="もっと見る"
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
}
