import Image from 'next/image';
import Link from 'next/link';

interface ContentListItemProps {
  title: string;
  description: string;
  /** 絵文字 ("🤖") または画像パス ("/images/icon.png") */
  icon?: string;
  /** デフォルトアイコン絵文字（icon が未指定の場合に使用） */
  defaultIcon?: string;
  /** アイコン背景グラデーション CSS 値 */
  iconBg?: string;
  featured?: boolean;
  featuredLabel?: string;
  /** 外部URL (指定あり → target="_blank" で外部リンク) */
  externalUrl?: string;
  /** GitHubリポジトリへの独立した導線。externalUrlと異なる場合は2ボタン表示。 */
  repositoryUrl?: string;
  externalUrlLabel?: string;
  repositoryUrlLabel?: string;
  /** 内部パス (externalUrl なしの場合に使用) */
  internalHref?: string;
}

/**
 * アイコン表示部分
 * - 画像パス（/で始まる or http）→ <Image> で表示
 * - 絵文字または未指定 → 絵文字テキストで表示
 */
function ItemIcon({
  icon,
  defaultIcon = '📄',
  bg = 'linear-gradient(135deg, #a8e4f4, #5ac8e8)',
}: {
  icon?: string;
  defaultIcon?: string;
  bg?: string;
}) {
  const isImagePath = icon && (icon.startsWith('/') || icon.startsWith('http'));

  return (
    <div
      className="li-thumb"
      style={{
        background: isImagePath ? 'transparent' : bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {isImagePath ? (
        <Image
          src={icon!}
          alt=""
          width={60}
          height={60}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          unoptimized
        />
      ) : (
        <span style={{ fontSize: '1.6rem' }} aria-hidden="true">
          {icon ?? defaultIcon}
        </span>
      )}
    </div>
  );
}

/**
 * 一覧用リストアイテム
 * - externalUrl あり → <a target="_blank"> で外部リンク
 * - externalUrl なし → <Link> で内部遷移
 */
export function ContentListItem({
  title,
  description,
  icon,
  defaultIcon,
  iconBg,
  featured,
  featuredLabel = '★',
  externalUrl,
  repositoryUrl,
  externalUrlLabel = 'Web',
  repositoryUrlLabel = 'GitHub',
  internalHref = '#',
}: ContentListItemProps) {
  const inner = (
    <>
      <ItemIcon icon={icon} defaultIcon={defaultIcon} bg={iconBg} />
      <div className="li-body">
        <span className="li-title">
          {featured && (
            <span
              style={{
                fontSize: 'var(--text-xs)',
                background: 'var(--yellow-dark)',
                color: 'var(--text-dark)',
                padding: '1px 5px',
                borderRadius: 'var(--r-sm)',
                marginRight: 'var(--sp2)',
                fontWeight: 700,
              }}
            >
              {featuredLabel}
            </span>
          )}
          {title}
        </span>
        <span className="li-desc">{description}</span>
      </div>
    </>
  );

  if (externalUrl && repositoryUrl && externalUrl !== repositoryUrl) {
    return (
      <div className="li-card">
        {inner}
        <div className="li-actions">
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            {externalUrlLabel} ↗
          </a>
          <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
            {repositoryUrlLabel} ↗
          </a>
        </div>
      </div>
    );
  }

  if (externalUrl) {
    return (
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        {inner}
        <div className="li-arrow">↗</div>
      </a>
    );
  }

  return (
    <Link href={internalHref}>
      {inner}
      <div className="li-arrow">▶</div>
    </Link>
  );
}
