import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { routeLocales, toDictionaryLocale, type RouteLocale } from '@/lib/i18n/locales';
import { getAllTools } from '@/lib/tools';
import { ContentListItem } from '@/components/ui/ContentListItem';

export function generateStaticParams() {
  return routeLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: RouteLocale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dictionaryLocale = toDictionaryLocale(locale);
  return buildMetadata(dictionaryLocale, getDictionary(dictionaryLocale).tools.meta, { path: 'tools' });
}

export default async function LocalizedToolsPage({ params }: { params: Promise<{ locale: RouteLocale }> }) {
  const { locale } = await params;
  const dictionaryLocale = toDictionaryLocale(locale);
  const t = getDictionary(dictionaryLocale);
  const tools = await getAllTools(dictionaryLocale);
  return (
    <>
      <div className="page-bg-fixed bg-green" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding: 'var(--sp12) var(--sp6) var(--sp8)' }}>
          <div className="container">
            <h1 className="section-heading white">{t.tools.heading}</h1>
            <p className="page-intro">{t.tools.description}</p>
            <div className="list-container">
              <ul className="list-items">
                {tools.map((tool) => (
                  <li key={tool.slug} className="list-item">
                    <ContentListItem
                      title={tool.title}
                      description={tool.source ? `${tool.source} · ${tool.description}` : tool.description}
                      icon={tool.icon}
                      iconBg="linear-gradient(135deg,#7CC87A,#5AAD58)"
                      externalUrl={tool.url}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <p className="page-note">{t.tools.note}</p>
          </div>
        </section>
      </div>
    </>
  );
}
