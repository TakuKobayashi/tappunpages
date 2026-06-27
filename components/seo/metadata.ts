import type { Metadata } from 'next';
import type { Locale, Dictionary } from '@/lib/i18n/dictionaries';
import { baseUrl } from './accounts';

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
    options?.canonical ?? (locale === 'en' ? `${baseUrl}/en` : baseUrl);

  return {
    metadataBase: new URL(baseUrl),
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
      images: [
        { url: '/og-image.png', width: 1200, height: 630, alt: pageMeta.title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: '@taptappun',
      images: ['/og-image.png'],
    },
    alternates: {
      canonical,
      languages: {
        'ja-JP': baseUrl,
        en: `${baseUrl}/en`,
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
