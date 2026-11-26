import React from 'react';
import { notFound } from 'next/navigation';
import { BookOpen, HelpCircle } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import StudyResourceInquiryForm from '@/components/study-resources/StudyResourceInquiryForm';
import { getStudyResourceBySlug } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const resource = getStudyResourceBySlug(slug);

  const defaultTitle = resource?.metaTitle || (resource
    ? `${resource.title} | Study Resources | TUTOR PROCTORED EXAMS`
    : 'Study Resource | TUTOR PROCTORED EXAMS');
  const defaultDescription = resource?.metaDescription ||
    resource?.tagline || resource?.description || resource?.overview || 'High-yield study materials and revision guides.';
  const defaultCanonical = `${SITE_CONFIG.domain}/study-resources/${slug}`;

  return {
    title: defaultTitle,
    description: defaultDescription,
    keywords: [
      resource?.focusKeyword || resource?.title || 'study materials',
      resource?.category || 'revision resources',
      'study guides',
      'practice question banks',
      'mock exams',
    ],
    alternates: {
      canonical: defaultCanonical,
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: defaultCanonical,
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
    },
  };
}

export default async function StudyResourceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const resource = getStudyResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  // Structured Data JSON-LD (WebPage, BreadcrumbList, FAQPage)
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_CONFIG.domain}/study-resources/${resource.slug}`,
        url: `${SITE_CONFIG.domain}/study-resources/${resource.slug}`,
        name: resource.metaTitle || resource.title,
        description: resource.metaDescription || resource.description || resource.overview,
        publisher: {
          '@type': 'EducationalOrganization',
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
            name: 'Study Resources',
            item: `${SITE_CONFIG.domain}/study-resources`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: resource.title,
            item: `${SITE_CONFIG.domain}/study-resources/${resource.slug}`,
          },
        ],
      },
      ...(resource.faqs && resource.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: resource.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="space-y-10 pt-2 pb-16">
      <JsonLd data={jsonLdData} />

      <PageContainer>
        <Breadcrumb
          items={[
            { label: 'Study Resources', href: '/study-resources' },
            { label: resource.title },
          ]}
        />

        {/* 1. HERO BANNER */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 overflow-hidden my-6 relative">
          <div className="relative z-10 max-w-3xl space-y-4">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs">
              {resource.category} Revision Resource
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {resource.title}
            </h1>

            <p className="text-base sm:text-lg text-brand-muted/90 leading-relaxed text-balance">
              {resource.description || resource.overview}
            </p>
          </div>
        </div>

        {/* 2. OVERVIEW & CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          <div className="lg:col-span-2 bg-white border border-brand-border rounded-2xl p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-navy">Resource Overview</h2>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
              {resource.overview || resource.description}
            </p>

            {(resource.availableMaterials || []).length > 0 && (
              <div className="pt-4 border-t border-brand-border/60 space-y-3">
                <h3 className="text-lg font-bold text-brand-navy">Available Study Materials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {resource.availableMaterials.map((mat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-brand-bg border border-brand-border text-xs sm:text-sm font-semibold text-brand-navy flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-blue shrink-0" />
                      <div>
                        <strong className="text-brand-navy block">{typeof mat === 'string' ? mat : mat.title || mat.name}</strong>
                        {typeof mat === 'object' && mat.description && <p className="text-xs text-brand-muted font-normal mt-0.5">{mat.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* REQUEST FORM CARD */}
          <StudyResourceInquiryForm resourceTitle={resource.title} />
        </div>

        {/* 3. FREQUENTLY ASKED QUESTIONS */}
        {(resource.faqs || []).length > 0 && (
          <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-10">
            <SectionHeading
              badge="Common Questions"
              title={`Frequently Asked Questions About ${resource.title}`}
              subtitle="Clear answers regarding revision notes, practice question sets, and access options."
            />
            <FaqAccordion items={resource.faqs} />
          </div>
        )}
      </PageContainer>
    </div>
  );
}
