export interface Tool {
  slug: string;
  title: string;
  icon: string;
  url: string;
}

export const tools = [
  {
    slug: 'fullstack-media-converter',
    title: 'fullstack-media-converter',
    icon: '🎞️',
    url: 'https://github.com/TakuKobayashi/fullstack-media-converter',
  },
] as const satisfies readonly Tool[];
