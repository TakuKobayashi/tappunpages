import { readExternalContent, type ExternalContentItem } from './content-data';
import type { Locale } from './i18n/dictionaries';

export type Project = ExternalContentItem;

export async function getAllProjects(locale: Locale = 'ja'): Promise<Project[]> {
  return readExternalContent('projects', locale);
}

export async function getProjectBySlug(slug: string, locale: Locale = 'ja'): Promise<Project | null> {
  return (await getAllProjects(locale)).find((project) => project.slug === slug) ?? null;
}
