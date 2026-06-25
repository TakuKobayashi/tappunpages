import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSG: 静的ファイルを out/ に出力 → Cloudflare Workers Assets で配信
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default nextConfig;
