import '@/styles/globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { LangDetector } from '@/components/i18n/LangDetector';
import { seoMetadata } from '@/components/seo/metadata';
import { BASE_URL, GITHUB_URL, TWITTER_URL } from '@/components/seo/accounts';

export const metadata = seoMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'taptappun',
              url: BASE_URL,
              sameAs: [TWITTER_URL, GITHUB_URL],
              jobTitle: 'Product Engineer',
            }),
          }}
        />
      </head>
      <body>
        {/* ブラウザ言語自動検出（初回のみリダイレクト） */}
        <LangDetector />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
