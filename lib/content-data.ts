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
  date: string;
  order: number;
  icon?: string;
  tags: string[];
  featured: boolean;
  source?: string;
  readingTime?: string;
}

type RawItem = Partial<Omit<ExternalContentItem, 'order' | 'slug' | 'title' | 'description'>> & {
  slug?: string;
  titleKey?: string;
  descriptionKey?: string;
  order?: number;
};

type ItemWithSource = RawItem & { fileName: string; itemIndex: number };

function dateToOrder(date: string): number {
  const value = Number(date.replaceAll('-', ''));
  return Number.isFinite(value) ? value : 0;
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
    for (const field of ['slug', 'titleKey', 'descriptionKey', 'url', 'date'] as const) {
      if (typeof item[field] !== 'string' || item[field].trim() === '') {
        throw new Error(`${label}.${field} must be a non-empty string`);
      }
    }
    const title = translations[item.titleKey!];
    const description = translations[item.descriptionKey!];
    if (!title) throw new Error(`${label}.titleKey "${item.titleKey}" is missing from the ${locale} dictionary`);
    if (!description) throw new Error(`${label}.descriptionKey "${item.descriptionKey}" is missing from the ${locale} dictionary`);
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
      date: item.date!, order: item.order ?? dateToOrder(item.date!), icon: item.icon,
      tags: Array.isArray(item.tags) ? item.tags : [], featured: item.featured ?? false,
      source: item.source,
    };
  });

  return normalized.sort((a, b) => {
    if (a.order !== b.order) return b.order - a.order;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.date.localeCompare(a.date);
  });
}
