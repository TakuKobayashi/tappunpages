import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXContent } from '@/components/ui/MDXContent';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { routeLocales, toDictionaryLocale, type RouteLocale } from '@/lib/i18n/locales';
import { buildMetadata } from '@/components/seo/metadata';

interface Props {
  params: Promise<{ locale: RouteLocale; slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return routeLocales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata(toDictionaryLocale(locale), {
    title: post.title,
    description: post.description,
  });
}

export default async function LocalizedBlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = getDictionary(toDictionaryLocale(locale));
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <div className="page-bg-fixed bg-yellow" aria-hidden="true" />
      <div className="page-wrap">
        <div
          style={{
            maxWidth: 'var(--prose-w)',
            margin: '0 auto',
            padding: 'var(--sp12) var(--sp6)',
          }}
        >
          <nav
            style={{
              display: 'flex',
              gap: 'var(--sp2)',
              fontSize: 'var(--text-sm)',
              marginBottom: 'var(--sp6)',
              color: 'var(--text-dark)',
            }}
          >
            <Link
              href={`/${locale}/blog`}
              style={{ textDecoration: 'underline', color: 'var(--text-dark)' }}
            >
              {t.blog.heading}
            </Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>
          <div className="article-panel">
            <div className="article-close">
              <Link
                href={`/${locale}/blog`}
                style={{
                  color: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--sp2)',
                }}
              >
                ✕ <span>{t.blog.back}</span>
              </Link>
            </div>
            <div className="article-body">
              <div className="article-header">
                <div
                  className="article-thumb"
                  style={{
                    background: 'var(--grad-yellow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.8rem' }}>📝</span>
                </div>
                <div>
                  <div className="article-title">{post.title}</div>
                  <div className="article-desc">{post.description}</div>
                  <div className="article-date">
                    {post.date}
                    {post.readingTime ? ` · ${post.readingTime}` : ''}
                  </div>
                  {post.tags && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'var(--sp1)',
                        marginTop: 'var(--sp2)',
                      }}
                    >
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="article-content">
                <MDXContent source={post.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
