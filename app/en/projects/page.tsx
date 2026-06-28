import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { en as t } from '@/lib/i18n/dictionaries';
import { getAllProjects } from '@/lib/projects';
import { ContentListItem } from '@/components/ui/ContentListItem';

export const metadata: Metadata = buildMetadata('en', t.projects.meta);

export default async function EnProjectsPage() {
  const projects = await getAllProjects();
  return (
    <>
      <div className="page-bg-fixed bg-green" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding: 'var(--sp12) var(--sp6) var(--sp8)' }}>
          <div className="container">
            <h1 className="section-heading white">{t.projects.heading}</h1>
            <div className="list-container">
              <ul className="list-items">
                {projects.map((p) => (
                  <li key={p.slug} className="list-item">
                    <ContentListItem
                      title={p.title}
                      description={p.description}
                      icon={p.icon}
                      defaultIcon="🎮"
                      iconBg="linear-gradient(135deg, #a8e4f4 0%, #5ac8e8 100%)"
                      featured={p.featured}
                      featuredLabel={t.projects.featured}
                      externalUrl={p.externalUrl}
                      internalHref={`/en/projects/${p.slug}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
