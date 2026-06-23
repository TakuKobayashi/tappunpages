import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Product Engineering・AI・Mobile開発に関する技術ブログ。",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.eyebrow}>Writing</div>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.desc}>
          Product Engineering・AI・Mobile開発の知見を発信。
          SignalForge などの CLI ツールから自動生成される記事も流し込み予定。
        </p>
      </header>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>✍️</span>
          <p className={styles.emptyText}>Coming soon — 記事を準備中です。</p>
        </div>
      ) : (
        <div className={styles.list}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.postCard}
            >
              <div className={styles.postMeta}>
                <time className={styles.postDate} dateTime={post.date}>
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
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDesc}>{post.description}</p>
              <div className={styles.postTags}>
                {post.tags?.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
