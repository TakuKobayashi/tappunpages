import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Product Engineering・AI・Mobile 開発の技術ブログ。',
};

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
              ARTICLES
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
                  Coming soon — 記事を準備中です。
                </p>
              </div>
            ) : (
              <div className="list-container">
                <ul className="list-items">
                  {posts.map((p) => (
                    <li key={p.slug} className="list-item">
                      <Link href={`/blog/${p.slug}`}>
                        <div
                          className="li-thumb"
                          style={{
                            background:
                              'linear-gradient(135deg, #FFE180, #FFDC6C)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <span style={{ fontSize: '1.6rem' }}>📝</span>
                        </div>
                        <div className="li-body">
                          <span className="li-title">{p.title}</span>
                          <span className="li-desc">
                            {p.date}
                            {p.readingTime ? ` · ${p.readingTime}` : ''}
                          </span>
                        </div>
                        <div className="li-arrow">▶</div>
                      </Link>
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
