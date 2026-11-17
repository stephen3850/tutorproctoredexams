import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  List,
  Sparkles,
  HelpCircle,
  Cpu,
  Award,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { getBlogsContent, getBlogBySlug } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';
import { getWpPostBySlug, extractWpSeo } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const article = getBlogBySlug(slug);

  const defaultTitle = article ? `${article.title} | TUTOR PROCTORED EXAMS` : 'Article | TUTOR PROCTORED EXAMS';
  const defaultDescription = article?.excerpt || article?.intro || 'Educational study guide and proctored examination preparation article.';
  const defaultCanonical = `${SITE_CONFIG.domain}/blog/${slug}`;

  const wpPost = await getWpPostBySlug(slug);
  const seo = extractWpSeo(wpPost, {
    title: defaultTitle,
    description: defaultDescription,
    canonicalUrl: defaultCanonical,
  });

  return {
    title: seo.title,
    description: seo.description,
    keywords: [
      article?.category || 'exam preparation',
      'proctored exam guide',
      'study tips',
      'academic integrity',
    ],
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: seo.canonicalUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.description,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const article = getBlogBySlug(resolvedParams?.slug);

  if (!article) {
    notFound();
  }

  const sections = article.contentSections || article.sections || [];

  // Related articles excluding current
  const relatedArticles = getBlogsContent()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Structured Data JSON-LD
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.excerpt || article.intro,
        datePublished: article.publishDate || '2025-01-15',
        dateModified: article.lastUpdated || article.publishDate || '2025-02-01',
        author: {
          '@type': 'Organization',
          name: article.author || SITE_CONFIG.name,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_CONFIG.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_CONFIG.domain}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: `${SITE_CONFIG.domain}/blog/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="space-y-10 pt-2 pb-16">
      <JsonLd data={jsonLdData} />

      <PageContainer>
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: article.title },
          ]}
        />

        {/* 1. ARTICLE HEADER */}
        <div className="max-w-4xl mx-auto space-y-4 my-6">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge variant="blue" className="bg-brand-blue/10 text-brand-blue font-bold px-3 py-1 text-xs">
              {article.category}
            </Badge>
            <span className="text-xs text-brand-muted flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              Published: {article.publishDate}
            </span>
            {article.lastUpdated && (
              <span className="text-xs text-brand-muted flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5" />
                Updated: {article.lastUpdated}
              </span>
            )}
            <span className="text-xs text-brand-muted flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime || '6 min read'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-medium">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-2 pt-2 text-xs text-brand-navy font-bold border-b border-brand-border pb-6">
            <User className="w-4 h-4 text-brand-blue" />
            <span>By {article.author || 'TUTOR PROCTORED EXAMS Academic Editorial Team'}</span>
          </div>
        </div>

        {/* 2. ARTICLE BODY CONTENT */}
        <article className="max-w-4xl mx-auto bg-white border border-brand-border rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm text-brand-navy leading-relaxed">
          {/* Direct Executive Answer / Intro */}
          {article.intro && (
            <div className="p-5 rounded-xl bg-brand-lightBlue/60 border-l-4 border-brand-blue text-sm sm:text-base font-medium text-brand-navy leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-bold text-brand-blue text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Direct Answer Summary</span>
              </div>
              <p>{article.intro}</p>
            </div>
          )}

          {/* Table of Contents */}
          {(article.toc || []).length > 0 && (
            <div className="p-5 rounded-xl bg-brand-bg border border-brand-border space-y-3">
              <div className="flex items-center gap-2 font-bold text-brand-navy text-sm">
                <List className="w-4 h-4 text-brand-blue" />
                <span>In This Guide</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-brand-blue font-semibold">
                {article.toc.map((item, tIdx) => (
                  <li key={tIdx}>
                    <a href={`#${item.id}`} className="hover:underline flex items-center gap-1.5">
                      <span className="text-brand-muted">•</span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Sections */}
          {sections.map((sec, idx) => (
            <div key={idx} id={sec.id || `section-${idx}`} className="space-y-3 pt-2">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy border-b border-brand-border/60 pb-2">
                {sec.title || sec.heading}
              </h2>
              {sec.content && (
                <div
                  className="text-sm sm:text-base text-brand-muted leading-relaxed space-y-3 prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: sec.content }}
                />
              )}
            </div>
          ))}

          {/* Key Summary Takeaways */}
          {(article.keyTakeaways || []).length > 0 && (
            <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border space-y-3">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                Key Summary Takeaways
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-muted font-medium">
                {article.keyTakeaways.map((take, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-brand-blue font-bold">•</span>
                    <span>{take}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Internal Cross-Links */}
          {((article.relatedPlatforms || []).length > 0 || (article.relatedServices || []).length > 0) && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-brand-navy flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                Explore Supporting Services & Platform Guides
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {(article.relatedServices || []).map((srv, sIdx) => (
                  <Link
                    key={sIdx}
                    href="/services"
                    className="px-3 py-1.5 rounded-lg bg-white border border-brand-border text-xs font-bold text-brand-blue hover:border-brand-blue transition-colors inline-flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{srv}</span>
                  </Link>
                ))}
                {(article.relatedPlatforms || []).map((plat, pIdx) => (
                  <Link
                    key={pIdx}
                    href="/exam-platforms"
                    className="px-3 py-1.5 rounded-lg bg-white border border-brand-border text-xs font-bold text-brand-navy hover:text-brand-blue hover:border-brand-blue transition-colors inline-flex items-center gap-1"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{plat}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Frequently Asked Questions */}
          {(article.faqs || []).length > 0 && (
            <div className="space-y-4 pt-6 border-t border-brand-border/60">
              <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-blue" />
                Frequently Asked Questions
              </h3>
              <FaqAccordion items={article.faqs} />
            </div>
          )}
        </article>

        {/* 3. RELATED ARTICLES */}
        <div className="max-w-4xl mx-auto space-y-6 my-12">
          <h3 className="text-2xl font-black text-brand-navy">Related Articles & Revision Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group p-5 bg-white border border-brand-border rounded-xl hover:border-brand-blue hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-sm text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-3 border-t border-brand-border/60 text-xs font-bold text-brand-blue flex items-center justify-between">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
