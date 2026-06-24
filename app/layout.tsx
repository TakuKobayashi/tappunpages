import type { Metadata } from "next";
import "@/styles/globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://taptappun.dev"),
  title: { default: "taptappun — Product Engineer", template: "%s | taptappun" },
  description: "Full-stack Product Engineer. MVP開発・AI・Fintech・Rapid Prototyping. Build fast, show early, iterate.",
  keywords: ["Product Engineer","Full-stack","Android","iOS","Kotlin","Swift","TypeScript","Cloudflare","MVP","Fintech","AI","Japan"],
  authors: [{ name: "taptappun" }],
  openGraph: {
    type: "website", locale: "ja_JP", url: "https://taptappun.dev",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "taptappun",
              url: "https://taptappun.dev",
              sameAs: ["https://twitter.com/phantomcatworks","https://github.com/taptappun"],
              jobTitle: "Product Engineer",
            }),
          }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
