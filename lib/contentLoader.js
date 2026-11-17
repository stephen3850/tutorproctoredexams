import { SERVICES_DATA } from './data/servicesData';
import { CERTIFICATIONS_DATA } from './data/certificationsData';
import { PLATFORMS_DATA } from './data/platformsData';
import { STUDY_RESOURCES_DATA } from './data/studyResourcesData';
import { BLOG_ARTICLES } from './data/blogData';

/**
 * Reads a JSON file safely from the content directory when running on Node.js server
 */
function readContentJson(filename) {
  if (typeof window !== 'undefined') return null;
  try {
    const nodeReq = eval('require');
    const fs = nodeReq('fs');
    const path = nodeReq('path');
    const filePath = path.join(process.cwd(), 'content', filename);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

// ---------------------------------------------------------------------------
// 1. SERVICES CONTENT
// ---------------------------------------------------------------------------
export function getServicesContent() {
  const json = readContentJson('services.json');
  const jsonServices = json?.services || [];

  const merged = {};

  Object.keys(SERVICES_DATA).forEach((slug) => {
    merged[slug] = { ...SERVICES_DATA[slug], published: true, order: 0 };
  });

  jsonServices.forEach((cmsService, index) => {
    const slug = cmsService.slug;
    if (!slug) return;

    if (merged[slug]) {
      merged[slug] = {
        ...merged[slug],
        ...cmsService,
        published: cmsService.published !== false,
        order: cmsService.order ?? index,
      };
    } else {
      merged[slug] = {
        slug,
        title: cmsService.title || 'Untitled Service',
        category: cmsService.category || 'Academic Support',
        tagline: cmsService.tagline || '',
        heroImage: cmsService.heroImage || cmsService.image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        overview: cmsService.overview || '',
        suitableFor: cmsService.suitableFor || [],
        whatItIncludes: cmsService.whatItIncludes || [],
        howItWorks: cmsService.howItWorks || [],
        benefits: cmsService.benefits || [],
        relatedPlatformsOrCerts: cmsService.relatedPlatformsOrCerts || [],
        faqs: cmsService.faqs || [],
        published: cmsService.published !== false,
        order: cmsService.order ?? index,
      };
    }
  });

  const uniqueMap = {};
  Object.values(merged).forEach((service) => {
    const slug = service.slug;
    if (!slug) return;
    if (!uniqueMap[slug]) {
      uniqueMap[slug] = service;
    }
  });

  return Object.values(uniqueMap)
    .filter((s) => s.published !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getServiceBySlug(slug) {
  const services = getServicesContent();
  return services.find((s) => s.slug === slug) || null;
}

// ---------------------------------------------------------------------------
// 2. CERTIFICATIONS CONTENT
// ---------------------------------------------------------------------------
export function getCertificationsContent() {
  const json = readContentJson('certifications.json');
  const jsonCerts = json?.certifications || [];

  const merged = {};

  Object.keys(CERTIFICATIONS_DATA).forEach((slug) => {
    merged[slug] = { ...CERTIFICATIONS_DATA[slug], published: true, order: 0 };
  });

  jsonCerts.forEach((cmsCert, index) => {
    const slug = cmsCert.slug;
    if (!slug) return;

    if (merged[slug]) {
      merged[slug] = {
        ...merged[slug],
        ...cmsCert,
        published: cmsCert.published !== false,
        order: cmsCert.order ?? index,
      };
    } else {
      merged[slug] = {
        slug,
        title: cmsCert.title || 'Untitled Certification',
        category: cmsCert.category || 'General',
        description: cmsCert.description || '',
        logo: cmsCert.logo || cmsCert.image || '/logos/pmp.svg',
        overview: cmsCert.overview || cmsCert.description || '',
        keyDomains: cmsCert.keyDomains || [],
        examFormat: cmsCert.examFormat || {},
        coachingIncludes: cmsCert.coachingIncludes || [],
        faqs: cmsCert.faqs || [],
        published: cmsCert.published !== false,
        order: cmsCert.order ?? index,
      };
    }
  });

  return Object.values(merged)
    .filter((c) => c.published !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getCertificationBySlug(slug) {
  const certs = getCertificationsContent();
  return certs.find((c) => c.slug === slug) || null;
}

// ---------------------------------------------------------------------------
// 3. EXAM PLATFORMS CONTENT
// ---------------------------------------------------------------------------
export function getPlatformsContent() {
  const json = readContentJson('platforms.json');
  const jsonPlatforms = json?.platforms || [];

  const merged = {};

  Object.keys(PLATFORMS_DATA).forEach((slug) => {
    merged[slug] = { ...PLATFORMS_DATA[slug], published: true, order: 0 };
  });

  jsonPlatforms.forEach((cmsPlatform, index) => {
    const slug = cmsPlatform.slug;
    if (!slug) return;

    if (merged[slug]) {
      merged[slug] = {
        ...merged[slug],
        ...cmsPlatform,
        published: cmsPlatform.published !== false,
        order: cmsPlatform.order ?? index,
      };
    } else {
      merged[slug] = {
        slug,
        title: cmsPlatform.title || 'Untitled Platform',
        description: cmsPlatform.description || '',
        logo: cmsPlatform.logo || cmsPlatform.image || '/logos/respondus.svg',
        overview: cmsPlatform.overview || cmsPlatform.description || '',
        systemRequirements: cmsPlatform.systemRequirements || {},
        keyFeatures: cmsPlatform.keyFeatures || [],
        guidanceIncludes: cmsPlatform.guidanceIncludes || [],
        faqs: cmsPlatform.faqs || [],
        published: cmsPlatform.published !== false,
        order: cmsPlatform.order ?? index,
      };
    }
  });

  return Object.values(merged)
    .filter((p) => p.published !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getPlatformBySlug(slug) {
  const platforms = getPlatformsContent();
  return platforms.find((p) => p.slug === slug) || null;
}

// ---------------------------------------------------------------------------
// 4. STUDY RESOURCES CONTENT
// ---------------------------------------------------------------------------
export function getStudyResourcesContent() {
  const json = readContentJson('study-resources.json');
  const jsonResources = json?.resources || [];

  const merged = {};

  Object.keys(STUDY_RESOURCES_DATA).forEach((slug) => {
    merged[slug] = { ...STUDY_RESOURCES_DATA[slug], published: true, order: 0 };
  });

  jsonResources.forEach((cmsRes, index) => {
    const slug = cmsRes.slug;
    if (!slug) return;

    if (merged[slug]) {
      merged[slug] = {
        ...merged[slug],
        ...cmsRes,
        published: cmsRes.published !== false,
        order: cmsRes.order ?? index,
      };
    } else {
      merged[slug] = {
        slug,
        title: cmsRes.title || 'Untitled Study Resource',
        category: cmsRes.category || 'General',
        description: cmsRes.description || '',
        image: cmsRes.image || cmsRes.heroImage || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
        overview: cmsRes.overview || cmsRes.description || '',
        availableMaterials: cmsRes.availableMaterials || [],
        downloadableGuides: cmsRes.downloadableGuides || [],
        faqs: cmsRes.faqs || [],
        published: cmsRes.published !== false,
        order: cmsRes.order ?? index,
      };
    }
  });

  return Object.values(merged)
    .filter((r) => r.published !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getStudyResourceBySlug(slug) {
  const resources = getStudyResourcesContent();
  return resources.find((r) => r.slug === slug) || null;
}

// ---------------------------------------------------------------------------
// 5. BLOG ARTICLES CONTENT
// ---------------------------------------------------------------------------
export function getBlogsContent() {
  const json = readContentJson('blog.json');
  const jsonArticles = json?.articles || [];

  const merged = {};

  Object.keys(BLOG_ARTICLES).forEach((slug) => {
    merged[slug] = { ...BLOG_ARTICLES[slug], published: true, order: 0 };
  });

  jsonArticles.forEach((cmsArticle, index) => {
    const slug = cmsArticle.slug;
    if (!slug) return;

    if (merged[slug]) {
      merged[slug] = {
        ...merged[slug],
        ...cmsArticle,
        published: cmsArticle.published !== false,
        order: cmsArticle.order ?? index,
      };
    } else {
      merged[slug] = {
        slug,
        title: cmsArticle.title || 'Untitled Article',
        category: cmsArticle.category || 'General',
        publishDate: cmsArticle.publishDate || new Date().toISOString().split('T')[0],
        readTime: cmsArticle.readTime || '5 min read',
        author: cmsArticle.author || 'TUTOR PROCTORED EXAMS Academic Editorial Team',
        excerpt: cmsArticle.excerpt || '',
        intro: cmsArticle.intro || '',
        heroImage: cmsArticle.heroImage || cmsArticle.image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
        sections: cmsArticle.sections || [],
        keyTakeaways: cmsArticle.keyTakeaways || [],
        faqs: cmsArticle.faqs || [],
        metaTitle: cmsArticle.metaTitle || '',
        metaDescription: cmsArticle.metaDescription || '',
        published: cmsArticle.published !== false,
        order: cmsArticle.order ?? index,
      };
    }
  });

  return Object.values(merged)
    .filter((b) => b.published !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getBlogBySlug(slug) {
  const blogs = getBlogsContent();
  return blogs.find((b) => b.slug === slug) || null;
}

// ---------------------------------------------------------------------------
// 6. PARTNERSHIPS / LOGOS CONTENT
// ---------------------------------------------------------------------------
export function getPartnershipsContent() {
  const json = readContentJson('partnerships.json');
  if (json?.partners) {
    return json.partners.filter((p) => p.published !== false).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  return [
    { name: 'PMP', logo: '/logos/pmp.svg', url: '/certifications/pmp', published: true, order: 1 },
    { name: 'CompTIA', logo: '/logos/comptia.svg', url: '/certifications/comptia', published: true, order: 2 },
    { name: 'AAPC CPC', logo: '/logos/cpc.svg', url: '/certifications/cpc', published: true, order: 3 },
    { name: 'Respondus LockDown', logo: '/logos/pmp.svg', url: '/exam-platforms/respondus-lockdown-browser', published: true, order: 4 },
    { name: 'Honorlock', logo: '/logos/mock.svg', url: '/exam-platforms/honorlock', published: true, order: 5 },
    { name: 'ATI TEAS', logo: '/logos/teas.svg', url: '/exam-platforms/ati', published: true, order: 6 },
  ];
}

// ---------------------------------------------------------------------------
// 7. SITE SETTINGS, NAVIGATION, PAGES
// ---------------------------------------------------------------------------
export function getSiteSettingsContent() {
  const json = readContentJson('settings.json');
  return json || {
    siteName: 'TUTOR PROCTORED EXAMS',
    siteUrl: 'https://tutorproctoredexams.com',
    defaultMetaTitle: 'TUTOR PROCTORED EXAMS | Ethical Tutoring & Exam Preparation',
    defaultMetaDescription: 'Premier online tutoring, practice exams, professional certification prep, and legitimate proctoring software technical guidance.',
  };
}

export function getNavigationContent() {
  const json = readContentJson('navigation.json');
  return json || {
    topBanner: {
      mainAnnouncement: 'Ethical Educational Support & Proctoring Software Technical Guidance for Students Worldwide',
    },
    navLinks: [
      { label: 'Home', href: '/', enabled: true },
      { label: 'About Us', href: '/about', enabled: true },
      { label: 'Our Services', href: '/services', enabled: true },
      { label: 'Exam Platforms', href: '/exam-platforms', enabled: true },
      { label: 'Certifications', href: '/certifications', enabled: true },
      { label: 'Study Resources', href: '/study-resources', enabled: true },
      { label: 'Blog', href: '/blog', enabled: true },
      { label: 'FAQ', href: '/faq', enabled: true },
    ],
  };
}

export function getPagesContent() {
  const json = readContentJson('pages.json');
  return json?.pages || {};
}
