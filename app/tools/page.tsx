import type { Metadata } from 'next';
import { buildMetadata } from '@/components/seo/metadata';
import { ja as t } from '@/lib/i18n/dictionaries';
import { getAllTools } from '@/lib/tools';
import { ContentListItem } from '@/components/ui/ContentListItem';

export const metadata: Metadata = buildMetadata('ja', t.tools.meta);

export default async function ToolsPage() {
  const tools = await getAllTools();
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
