import type { MetadataRoute } from 'next';
import { articles } from '../data/articles';
import { siteUrl } from './site-config';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/artigos`, changeFrequency: 'weekly', priority: 0.8 },
    ...articles.map((article) => ({
      url: `${siteUrl}/artigos/${article.slug}`,
      lastModified: article.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
