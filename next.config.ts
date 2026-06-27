import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // SSG: 静的ファイルを out/ に出力 → Cloudflare Workers Assets で配信
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // pnpm workspace の誤検知を防ぐ
  // 上位ディレクトリに別の pnpm-lock.yaml / workspace がある場合に明示指定
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
