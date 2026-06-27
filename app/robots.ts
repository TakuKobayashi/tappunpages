import { MetadataRoute } from 'next';
import { BASE_URL } from '../components/seo/accounts';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

export const dynamic = 'force-static';
