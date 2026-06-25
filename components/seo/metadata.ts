import type { Metadata } from "next";
import { baseUrl } from "./accounts";

export const seoMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "taptappun — Product Engineer", template: "%s | taptappun" },
  description: "Full-stack Product Engineer. MVP開発・AI・Fintech・Rapid Prototyping. Build fast, show early, iterate.",
  keywords: ["Product Engineer","Full-stack","Android","iOS","Kotlin","Swift","TypeScript","Cloudflare","MVP","Fintech","AI","Japan"],
  authors: [{ name: "taptappun" }],
  openGraph: {
    type: "website", locale: "ja_JP", url: baseUrl,
    title: "taptappun — Product Engineer",
    description: "Full-stack Product Engineer. MVP開発・AI・Fintech・Rapid Prototyping.",
    siteName: "taptappun.dev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "taptappun — Product Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "taptappun — Product Engineer",
    description: "Full-stack Product Engineer. MVP開発・AI・Fintech・Rapid Prototyping.",
    creator: "@phantomcatworks",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
}