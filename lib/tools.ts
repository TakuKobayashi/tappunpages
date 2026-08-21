export interface Tool {
  slug: string;
  title: string;
  description: { ja: string; en: string };
  kind: { ja: string; en: string };
  icon: string;
  url: string;
}

export const tools: Tool[] = [
  {
    slug: 'fullstack-media-converter',
    title: 'fullstack-media-converter',
    description: {
      ja: '画像・音声・動画などのメディアを、ブラウザから手軽に変換できるフルスタックツール。',
      en: 'A full-stack utility for converting images, audio, video, and other media from the browser.',
    },
    kind: { ja: '便利ツール', en: 'Utility' },
    icon: '🎞️',
    url: 'https://github.com/taptappun/fullstack-media-converter',
  },
];
