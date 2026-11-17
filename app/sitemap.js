import { SITE_CONFIG } from '@/lib/utils';
import { PLATFORMS_DATA } from '@/lib/data/platformsData';
import { CERTIFICATIONS_DATA } from '@/lib/data/certificationsData';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import { STUDY_RESOURCES_DATA } from '@/lib/data/studyResourcesData';
import { BLOG_ARTICLES } from '@/lib/data/blogData';
import { getWpPosts, getWpPages } from '@/lib/wordpress';

export default async function sitemap() {
  const rawBaseUrl = SITE_CONFIG.domain || 'https://tutorproctoredexams.com';
  const baseUrl = rawBaseUrl.replace(/\/+$/, '');
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/exam-platforms', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/certifications', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/study-resources', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/blog', priority: 0.8, changeFrequency: 'daily' },
    { url: '/faq', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/disclaimer', priority: 0.4, changeFrequency: 'yearly' },
    { url: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const blogRoutes = Object.values(BLOG_ARTICLES || {}).map((article) => ({
    url: `/blog/${article.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }));

  const serviceRoutes = Object.values(SERVICES_DATA || {}).map((service) => ({
    url: `/services/${service.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly',
  }));

  const platformRoutes = Object.values(PLATFORMS_DATA || {}).map((platform) => ({
    url: `/exam-platforms/${platform.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly',
  }));

  const certificationRoutes = Object.values(CERTIFICATIONS_DATA || {}).map((cert) => ({
    url: `/certifications/${cert.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly',
  }));

  const studyResourceRoutes = Object.values(STUDY_RESOURCES_DATA || {}).map((resource) => ({
    url: `/study-resources/${resource.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }));

  // Fetch published WordPress routes if configured
  const wpPosts = await getWpPosts();
  const wpPostRoutes = (wpPosts || []).map((post) => ({
    url: `/blog/${post.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly',
    lastModified: post.modified || now,
  }));

  const wpPages = await getWpPages();
  const wpPageRoutes = (wpPages || []).map((page) => ({
    url: `/${page.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: page.modified || now,
  }));

  // Disallowed path patterns
  const disallowedPrefixes = ['/admin', '/api', '/services/one-to-one-tutoring', '/services/professional-certification-preparation'];

  // Deduplicate and filter out admin/api/redirect routes
  const routeMap = new Map();

  [
    ...staticRoutes,
    ...blogRoutes,
    ...serviceRoutes,
    ...platformRoutes,
    ...certificationRoutes,
    ...studyResourceRoutes,
    ...wpPostRoutes,
    ...wpPageRoutes,
  ].forEach((route) => {
    if (!route.url || disallowedPrefixes.some((prefix) => route.url === prefix || route.url.startsWith(`${prefix}/`))) {
      return;
    }
    routeMap.set(route.url, {
      url: `${baseUrl}${route.url}`,
      lastModified: route.lastModified || now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  });

  return Array.from(routeMap.values());
}
