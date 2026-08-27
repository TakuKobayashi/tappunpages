import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { getDictionary, type Locale } from './i18n/dictionaries';

export interface ExternalContentItem {
  slug: string;
  title: string;
  description: string;
  url: string;
  /** Alias retained for list components created before the YAML migration. */
  externalUrl: string;
  publishedAt: string;
  enable: boolean;
  order: number;
  icon?: string;
  tags: string[];
  featured: boolean;
  source?: string;
  readingTime?: string;
}

type RawItem = Partial<Omit<ExternalContentItem, 'order' | 'slug' | 'title' | 'description'>> & {
  slug?: string;
  title?: string;
  description?: string;
  titleKey?: string;
  descriptionKey?: string;
  published_at?: string;
  order?: number;
};

type ItemWithSource = RawItem & { fileName: string; itemIndex: number };

function publishedAtToOrder(publishedAt: string): number {
  return new Date(publishedAt).getTime();
}

export function readExternalContent(directoryName: string, locale: Locale = 'ja'): ExternalContentItem[] {
  const translations = getDictionary(locale).content;
  const directoryPath = path.join(process.cwd(), 'content', directoryName);
  const fileNames = fs.readdirSync(directoryPath).filter((fileName) => /\.ya?ml$/i.test(fileName));
  const items = fileNames.flatMap((fileName): ItemWithSource[] => {
    const filePath = path.join(directoryPath, fileName);
    const document = parse(fs.readFileSync(filePath, 'utf8')) as unknown;
    if (!Array.isArray(document)) {
      throw new Error(`${directoryName}/${fileName}: document must be a top-level list`);
    }
    return document.map((item, itemIndex) => {
      if (!item || typeof item !== 'object' || Array.isArray(item)) {
        throw new Error(`${directoryName}/${fileName}[${itemIndex}]: item must be an object`);
      }
      return { ...(item as RawItem), fileName, itemIndex };
    });
  });

  const slugs = new Set<string>();
  const normalized = items.map((item): ExternalContentItem => {
    const label = `${directoryName}/${item.fileName}[${item.itemIndex}]`;
    for (const field of ['slug', 'url', 'published_at'] as const) {
      if (typeof item[field] !== 'string' || item[field].trim() === '') {
        throw new Error(`${label}.${field} must be a non-empty string`);
      }
    }
    if (typeof item.enable !== 'boolean') {
      throw new Error(`${label}.enable must be a boolean`);
    }
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?(?:Z|[+-]\d{2}:\d{2})$/.test(item.published_at!)) {
      throw new Error(`${label}.published_at must be an ISO 8601 date-time with a timezone`);
    }
    const publishedAtTime = new Date(item.published_at!).getTime();
    if (!Number.isFinite(publishedAtTime)) {
      throw new Error(`${label}.published_at must be a valid date-time`);
    }
    const title = item.titleKey ? translations[item.titleKey] : item.title;
    const description = item.descriptionKey ? translations[item.descriptionKey] : item.description;
    if (!title) {
      throw new Error(`${label} must provide title or a titleKey present in the ${locale} dictionary`);
    }
    if (!description) {
      throw new Error(`${label} must provide description or a descriptionKey present in the ${locale} dictionary`);
    }
    if (slugs.has(item.slug!)) throw new Error(`${label}.slug is duplicated`);
    slugs.add(item.slug!);

    try {
      const url = new URL(item.url!);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    } catch {
      throw new Error(`${label}.url must be an absolute http(s) URL`);
    }

    return {
      slug: item.slug!, title, description, url: item.url!, externalUrl: item.url!,
      publishedAt: item.published_at!, enable: item.enable,
      order: item.order ?? publishedAtToOrder(item.published_at!), icon: item.icon,
      tags: Array.isArray(item.tags) ? item.tags : [], featured: item.featured ?? false,
      source: item.source,
    };
  }).filter((item) => item.enable && new Date(item.publishedAt).getTime() <= Date.now());

  return normalized.sort((a, b) => {
    if (a.order !== b.order) return b.order - a.order;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}

export function formatPublishedDate(publishedAt: string, locale = 'ja-JP'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo',
  }).format(new Date(publishedAt));
}
