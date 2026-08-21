import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n/dictionaries';
import { BASE_URL } from './accounts';

/**
 * ロケールとページ辞書からメタデータを生成する
 */
export function buildMetadata(
  locale: Locale,
  pageMeta: { title: string; description: string },
  options?: { canonical?: string }
): Metadata {
  const lang = locale === 'ja' ? 'ja_JP' : 'en_US';
  const canonical =
    options?.canonical ?? (locale === 'en' ? `${BASE_URL}/en` : `${BASE_URL}/jp`);

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
        'ja-JP': `${BASE_URL}/jp`,
        en: `${BASE_URL}/en`,
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
