import { notFound, redirect } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  return (await getAllPosts()).map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();
  redirect(post.url);
}
