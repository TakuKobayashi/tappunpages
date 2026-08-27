import { notFound, redirect } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';

export async function generateStaticParams() {
  return (await getAllProjects()).map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = await getProjectBySlug((await params).slug);
  if (!project) notFound();
  redirect(project.url);
}
