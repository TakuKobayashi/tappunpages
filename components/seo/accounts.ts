export const BASE_URL = 'https://taptappun.net';

export const GITHUB_URL = 'https://github.com/taptappun';

export const TWITTER_URL = 'https://x.com/taptappun';

export interface SocialLink {
  label: string;
  href?: string;
  icon: string;
}

const icon = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${slug}.svg`;

/** href を入力したサービスだけフッターに表示される。 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: GITHUB_URL, icon: icon('github') },
  { label: 'X', href: TWITTER_URL, icon: icon('x') },
  {
    label: 'LinkedIn',
    href: 'https://jp.linkedin.com/in/%E6%8B%93-%E5%B0%8F%E6%9E%97-710479a4',
    icon: icon('linkedin'),
  },
  { label: 'Qiita', href: 'https://qiita.com/taptappun', icon: icon('qiita') },
  { label: 'Instagram', href: '', icon: icon('instagram') },
  { label: 'Threads', href: '', icon: icon('threads') },
  { label: 'Facebook', href: '', icon: icon('facebook') },
  { label: 'WhatsApp', href: '', icon: icon('whatsapp') },
  { label: 'Bluesky', href: '', icon: icon('bluesky') },
  { label: 'YouTube', href: '', icon: icon('youtube') },
  { label: 'Dev.to', href: '', icon: icon('devdotto') },
  { label: 'Medium', href: '', icon: icon('medium') },
  { label: 'Zenn', href: '', icon: icon('zenn') },
  { label: 'Speaker Deck', href: '', icon: icon('speakerdeck') },
  { label: 'Stack Overflow', href: '', icon: icon('stackoverflow') },
  { label: 'npm', href: '', icon: icon('npm') },
  { label: 'Product Hunt', href: '', icon: icon('producthunt') },
  { label: 'Hugging Face', href: '', icon: icon('huggingface') },
  { label: 'Google Play', href: '', icon: icon('googleplay') },
  { label: 'App Store', href: '', icon: icon('appstore') },
];
