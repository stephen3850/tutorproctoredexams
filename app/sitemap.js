import { SITE_CONFIG } from '@/lib/utils';
import {
  getBlogsContent,
  getServicesContent,
  getPlatformsContent,
  getCertificationsContent,
  getStudyResourcesContent,
} from '@/lib/contentLoader';
import { getWpPosts, getWpPages } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function sitemap() {
  const rawBaseUrl = SITE_CONFIG.domain || 'https://tutorproctoredexams.com';
  const baseUrl = rawBaseUrl.replace(/\/+$/, '');
  const now = new Date().toISOString();

  // 1. Static Core Landing Pages
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

  // 2. Dynamic Blog Guides (All 38 articles)
  const blogArticles = getBlogsContent();
  const blogRoutes = blogArticles.map((article) => ({
    url: `/blog/${article.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }));

  // 3. Dynamic Services Pages (All 14 services)
  const servicesList = getServicesContent();
  const serviceRoutes = servicesList.map((service) => ({
    url: `/services/${service.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly',
  }));

  // 4. Dynamic Platform Guides (All 9 platforms)
  const platformsList = getPlatformsContent();
  const platformRoutes = platformsList.map((platform) => ({
    url: `/exam-platforms/${platform.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly',
  }));

  // 5. Dynamic Certification Pages (All 10 certifications)
  const certsList = getCertificationsContent();
  const certificationRoutes = certsList.map((cert) => ({
    url: `/certifications/${cert.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly',
  }));

  // 6. Dynamic Study Resource Pages (All 13 study resources)
  const resourcesList = getStudyResourcesContent();
  const studyResourceRoutes = resourcesList.map((resource) => ({
    url: `/study-resources/${resource.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }));

  // 7. Optional WordPress Posts / Pages if configured
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

  // Disallowed path patterns (301 redirects, admin, API)
  const disallowedPrefixes = [
    '/admin',
    '/api',
    '/services/one-to-one-tutoring',
    '/services/professional-certification-preparation',
  ];

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
    if (!route.url && route.url !== '') return;
    if (disallowedPrefixes.some((prefix) => route.url === prefix || route.url.startsWith(`${prefix}/`))) {
      return;
    }
    const fullUrl = `${baseUrl}${route.url}`;
    if (!routeMap.has(fullUrl)) {
      routeMap.set(fullUrl, {
        url: fullUrl,
        lastModified: route.lastModified || now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  });

  return Array.from(routeMap.values());
}
