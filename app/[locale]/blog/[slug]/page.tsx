import { notFound, redirect } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { routeLocales, type RouteLocale } from '@/lib/i18n/locales';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return routeLocales.flatMap((locale) => posts.map(({ slug }) => ({ locale, slug })));
}

export default async function LocalizedBlogPostPage({ params }: {
  params: Promise<{ locale: RouteLocale; slug: string }>;
}) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();
  redirect(post.url);
}
