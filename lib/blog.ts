import { readExternalContent, type ExternalContentItem } from './content-data';

export type BlogPost = ExternalContentItem;

export async function getAllPosts(): Promise<BlogPost[]> {
  return readExternalContent('articles');
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return (await getAllPosts()).find((post) => post.slug === slug) ?? null;
}
