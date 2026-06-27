import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import { MDXContent } from '@/components/ui/MDXContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProjectBySlug(slug);
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <div className="page-bg-fixed bg-blue" aria-hidden="true" />
      <div className="page-wrap">
        <div
          style={{
            maxWidth: 'var(--prose-w)',
            margin: '0 auto',
            padding: 'var(--sp12) var(--sp6)',
          }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              gap: 'var(--sp2)',
              fontSize: 'var(--text-sm)',
              marginBottom: 'var(--sp6)',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            <Link
              href="/projects"
              style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'underline',
              }}
            >
              Projects
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>{project.title}</span>
          </nav>

          {/* Article panel */}
          <div className="article-panel">
            <div className="article-close">
              <Link
                href="/projects"
                style={{
                  color: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--sp2)',
                }}
              >
                ✕ <span>Back to Projects</span>
              </Link>
            </div>
            <div className="article-body">
              <div className="article-header">
                <div
                  className="article-thumb"
                  style={{
                    background: 'linear-gradient(135deg, #a8e4f4, #5ac8e8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.8rem' }}>🎮</span>
                </div>
                <div>
                  <div className="article-title">{project.title}</div>
                  <div className="article-desc">{project.description}</div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--sp1)',
                      marginTop: 'var(--sp2)',
                    }}
                  >
                    {project.tags.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <div
                      style={{
                        marginTop: 'var(--sp3)',
                        display: 'flex',
                        gap: 'var(--sp2)',
                      }}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-more yellow-btn"
                        style={{ fontSize: 'var(--text-xs)' }}
                      >
                        GitHub →
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-more white-btn"
                          style={{
                            fontSize: 'var(--text-xs)',
                            borderColor: 'var(--border-gray)',
                            color: 'var(--text-dark)',
                          }}
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="article-content">
                <MDXContent source={project.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
