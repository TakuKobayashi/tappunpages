import { notFound, redirect } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import { routeLocales, type RouteLocale } from '@/lib/i18n/locales';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return routeLocales.flatMap((locale) => projects.map(({ slug }) => ({ locale, slug })));
}

export default async function LocalizedProjectDetailPage({ params }: {
  params: Promise<{ locale: RouteLocale; slug: string }>;
}) {
  const project = await getProjectBySlug((await params).slug);
  if (!project) notFound();
  redirect(project.url);
}
