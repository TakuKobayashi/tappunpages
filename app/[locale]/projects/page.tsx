import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { routeLocales, toDictionaryLocale, type RouteLocale } from '@/lib/i18n/locales';
import { getAllProjects } from '@/lib/projects';
import { ContentListItem } from '@/components/ui/ContentListItem';

export function generateStaticParams() { return routeLocales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: RouteLocale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dictionaryLocale = toDictionaryLocale(locale);
  return buildMetadata(dictionaryLocale, getDictionary(dictionaryLocale).projects.meta, { path: 'projects' });
}

export default async function LocalizedProjectsPage({ params }: { params: Promise<{ locale: RouteLocale }> }) {
  const { locale } = await params;
  const dictionaryLocale = toDictionaryLocale(locale);
  const t = getDictionary(dictionaryLocale);
  const projects = await getAllProjects(dictionaryLocale);
  return (
    <>
      <div className="page-bg-fixed bg-green" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding: 'var(--sp12) var(--sp6) var(--sp8)' }}>
          <div className="container">
            <h1 className="section-heading white">{t.projects.heading}</h1>
            <p className="page-intro">{t.home.projects.description}</p>
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
