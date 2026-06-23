import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack Product Engineer として開発したプロジェクト一覧。AI・Fintech・モバイル・ゲーム開発など。",
};

const ALL_TAGS = [
  "All", "Android", "iOS", "Next.js", "AI", "Fintech", "Unity",
  "Cloudflare", "WebRTC", "AR",
];

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.eyebrow}>Selected work</div>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.desc}>
          MVP・プロトタイプから本番リリースまで。
          速く作り、早く見せ、繰り返す文化で作ったプロダクトたち。
        </p>
      </header>

      {/* Tag filters (static for SSG) */}
      <nav className={styles.filters} aria-label="Filter by tag">
        {ALL_TAGS.map((tag) => (
          <span key={tag} className={`${styles.filterBtn} ${tag === "All" ? styles.active : ""}`}>
            {tag}
          </span>
        ))}
      </nav>

      {/* Grid */}
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
              </div>
              <span className={styles.cardArrow} aria-hidden="true">↗</span>
            </div>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDesc}>{project.description}</p>
            <div className={styles.cardTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
