import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXContent } from "@/components/ui/MDXContent";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>{post.title}</span>
        </nav>

        <header className={styles.header}>
          <div className={styles.meta}>
            <time className={styles.date} dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.readingTime && (
              <span className={styles.readTime}>{post.readingTime}</span>
            )}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.description}</p>
          {post.tags && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </header>

        <article className={styles.content}>
          <MDXContent source={post.content} />
        </article>

        <div className={styles.backWrap}>
          <Link href="/blog" className={styles.backLink}>← All Posts</Link>
        </div>
      </div>
    </main>
  );
}
