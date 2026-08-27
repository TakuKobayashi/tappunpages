import { readExternalContent, type ExternalContentItem } from './content-data';

export type Project = ExternalContentItem;

export async function getAllProjects(): Promise<Project[]> {
  return readExternalContent('projects');
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return (await getAllProjects()).find((project) => project.slug === slug) ?? null;
}
