import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n/dictionaries';
import { BASE_URL } from './accounts';

/**
 * ロケールとページ辞書からメタデータを生成する
 */
export function buildMetadata(
  locale: Locale,
  pageMeta: { title: string; description: string },
  options?: { canonical?: string; path?: string }
): Metadata {
  const lang = locale === 'ja' ? 'ja_JP' : 'en_US';
  const routeLocale = locale === 'ja' ? 'jp' : 'en';
  const pagePath = options?.path ? `/${options.path.replace(/^\/+|\/+$/g, '')}` : '';
  const canonical =
    options?.canonical ?? `${BASE_URL}/${routeLocale}${pagePath}`;
  const jaUrl = `${BASE_URL}/jp${pagePath}`;
  const enUrl = `${BASE_URL}/en${pagePath}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: pageMeta.title,
      template: `%s | taptappun`,
    },
    description: pageMeta.description,
    keywords: [
      'Product Engineer',
      'Full-stack',
      'Android',
      'iOS',
      'Kotlin',
      'Swift',
      'TypeScript',
      'Cloudflare',
      'MVP',
      'Fintech',
      'AI',
      'Japan',
    ],
    authors: [{ name: 'taptappun' }],
    openGraph: {
      type: 'website',
      locale: lang,
      alternateLocale: locale === 'ja' ? ['en_US'] : ['ja_JP'],
      url: canonical,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: 'taptappun.dev',
      images: [{ url: '/images/bg-game.webp', alt: pageMeta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: '@taptappun',
      images: ['/images/bg-game.webp'],
    },
    alternates: {
      canonical,
      languages: {
        'ja-JP': jaUrl,
        en: enUrl,
        'x-default': jaUrl,
      },
    },
    robots: { index: true, follow: true },
  };
}

// ルートレイアウト用デフォルトメタデータ（JA）
export const seoMetadata: Metadata = buildMetadata('ja', {
  title: 'taptappun — Product Engineer',
  description:
    'フルスタック Product Engineer。MVP開発・AI・Fintech・Rapid Prototyping。Build fast, show early, iterate.',
});
