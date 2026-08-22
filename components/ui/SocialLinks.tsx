import { SOCIAL_LINKS } from '@/components/seo/accounts';
import styles from './SocialLinks.module.css';

interface Props {
  featuredOnly?: boolean;
  showLabels?: boolean;
  ariaLabel: string;
  variant?: 'default' | 'profile' | 'card';
}

export function SocialLinks({
  featuredOnly = false,
  showLabels = false,
  ariaLabel,
  variant = 'default',
}: Props) {
  const links = SOCIAL_LINKS.filter(
    (social) => social.href && (!featuredOnly || social.featured)
  );

  return (
    <div
      className={`${styles.list} ${variant === 'profile' ? styles.profile : ''} ${variant === 'card' ? styles.card : ''}`}
      aria-label={ariaLabel}
    >
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          className={styles.link}
        >
          <img src={social.icon} alt="" width="21" height="21" className={styles.icon} />
          {showLabels && <span>{social.label}</span>}
        </a>
      ))}
    </div>
  );
}
