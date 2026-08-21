import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { en as t } from '@/lib/i18n/dictionaries';
import { tools } from '@/lib/tools';
import { ContentListItem } from '@/components/ui/ContentListItem';

export const metadata: Metadata = buildMetadata('en', t.tools.meta);

export default function EnToolsPage() {
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
                      description={`${tool.kind.en} — ${tool.description.en}`}
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
