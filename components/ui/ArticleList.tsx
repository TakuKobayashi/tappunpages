'use client';

import { useState } from 'react';
import { ContentListItem } from './ContentListItem';

const PAGE_SIZE = 12;

export interface ArticleListEntry {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  externalUrl: string;
}

export function ArticleList({
  articles,
  moreLabel,
}: {
  articles: ArticleListEntry[];
  moreLabel: string;
}) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <>
      <div className="list-container">
        <ul className="list-items">
          {visibleArticles.map((article) => (
            <li key={article.slug} className="list-item">
              <ContentListItem
                title={article.title}
                description={article.description}
                icon={article.icon}
                defaultIcon="📝"
                iconBg="linear-gradient(135deg, #FFE180, #FFDC6C)"
                externalUrl={article.externalUrl}
              />
            </li>
          ))}
        </ul>
      </div>
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: 'var(--sp6)' }}>
          <button
            type="button"
            className="btn-more yellow-btn"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + PAGE_SIZE, articles.length)
              )
            }
            aria-label={`${moreLabel} (${visibleArticles.length}/${articles.length})`}
          >
            {moreLabel} ({visibleArticles.length}/{articles.length})
          </button>
        </div>
      )}
    </>
  );
}
