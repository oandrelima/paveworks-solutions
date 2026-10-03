import { servicePages, areaPages } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://paveworkssolutions.com';

  const servicesUrls = Object.keys(servicePages).map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const areasUrls = Object.keys(areaPages).map((slug) => ({
    url: `${baseUrl}/areas/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...servicesUrls,
    ...areasUrls,
  ];
}
