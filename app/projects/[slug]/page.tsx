import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { MDXContent } from "@/components/ui/MDXContent";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/projects" className={styles.breadcrumbLink}>
            Projects
          </Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>{project.title}</span>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            {project.featured && (
              <span className={styles.featuredBadge}>Featured</span>
            )}
            {project.date && (
              <span className={styles.dateBadge}>
                {new Date(project.date).getFullYear()}
              </span>
            )}
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.desc}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          {project.github && (
            <div className={styles.headerActions}>
              <a
                href={project.github}
                className={styles.btnGhost}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  className={styles.btnPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
              )}
            </div>
          )}
        </header>

        {/* Content */}
        <article className={styles.content}>
          <MDXContent source={project.content} />
        </article>

        {/* Related */}
        {project.related && project.related.length > 0 && (
          <section className={styles.related}>
            <h2 className={styles.relatedTitle}>Related Projects</h2>
            <div className={styles.relatedGrid}>
              {project.related.map((slug) => (
                <Link
                  key={slug}
                  href={`/projects/${slug}`}
                  className={styles.relatedCard}
                >
                  {slug} →
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className={styles.backWrap}>
          <Link href="/projects" className={styles.backLink}>
            ← All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
