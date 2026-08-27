import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  routeLocales,
  toDictionaryLocale,
  type RouteLocale,
} from '@/lib/i18n/locales';
import { getAllPosts } from '@/lib/blog';
import { ArticleList } from '@/components/ui/ArticleList';
import { formatPublishedDate } from '@/lib/content-data';

export function generateStaticParams() {
  return routeLocales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: RouteLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionaryLocale = toDictionaryLocale(locale);
  return buildMetadata(
    dictionaryLocale,
    getDictionary(dictionaryLocale).blog.meta,
    { path: 'blog' }
  );
}

export default async function LocalizedBlogPage({
  params,
}: {
  params: Promise<{ locale: RouteLocale }>;
}) {
  const { locale } = await params;
  const dictionaryLocale = toDictionaryLocale(locale);
  const t = getDictionary(dictionaryLocale);
  const posts = await getAllPosts(dictionaryLocale);
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
                  description: `${formatPublishedDate(p.publishedAt, locale === 'jp' ? 'ja-JP' : 'en-US')}${p.readingTime ? ` · ${p.readingTime}` : ''}`,
                  icon: p.icon,
                  externalUrl: p.externalUrl,
                }))}
                moreLabel={locale === 'jp' ? 'もっと見る' : 'Show more'}
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
}
