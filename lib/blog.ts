import { readExternalContent, type ExternalContentItem } from './content-data';
import type { Locale } from './i18n/dictionaries';

export type BlogPost = ExternalContentItem;

export async function getAllPosts(locale: Locale = 'ja'): Promise<BlogPost[]> {
  return readExternalContent('articles', locale);
}

export async function getPostBySlug(slug: string, locale: Locale = 'ja'): Promise<BlogPost | null> {
  return (await getAllPosts(locale)).find((post) => post.slug === slug) ?? null;
}
