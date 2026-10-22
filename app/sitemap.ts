import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { newsData } from '@/data/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.royalcaribbean-shipyard.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/shipyard',
    '/construction-process',
    '/news',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const servicePages = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectPages = projectsData.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const newsPages = newsData.map((n) => ({
    url: `${baseUrl}/news/${n.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...newsPages];
}
