import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Award,
  CheckCircle2,
  Users,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import CertificationInquiryForm from '@/components/certifications/CertificationInquiryForm';
import { getCertificationsContent, getCertificationBySlug } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';
import { getWpPageBySlug, extractWpSeo } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const cert = getCertificationBySlug(slug);

  const defaultTitle = cert?.metaTitle || (cert ? `${cert.title} Certification Preparation | TUTOR PROCTORED EXAMS` : 'Certification | TUTOR PROCTORED EXAMS');
  const defaultDescription = cert?.metaDescription || cert?.description || cert?.overview || 'Professional certification preparation and study support.';
  const defaultCanonical = `${SITE_CONFIG.domain}/certifications/${slug}`;

  const wpPage = await getWpPageBySlug(slug);
  const seo = extractWpSeo(wpPage, {
    title: defaultTitle,
    description: defaultDescription,
    canonicalUrl: defaultCanonical,
  });

  return {
    title: seo.title,
    description: seo.description,
    keywords: [
      cert?.focusKeyword || cert?.title || 'certification prep',
      cert?.category || 'professional certifications',
      'certification coaching',
      'exam preparation',
      'practice questions',
    ],
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: seo.canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.description,
    },
  };
}

export default async function CertificationDetailPage({ params }) {
  const resolvedParams = await params;
  const cert = getCertificationBySlug(resolvedParams?.slug);

  if (!cert) {
    notFound();
  }

  // Related certifications excluding current
  const relatedCerts = getCertificationsContent()
    .filter((c) => c.slug !== cert.slug)
    .slice(0, 3);

  // Structured Data JSON-LD (WebPage / Service, BreadcrumbList, FAQPage)
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_CONFIG.domain}/certifications/${cert.slug}`,
        url: `${SITE_CONFIG.domain}/certifications/${cert.slug}`,
        name: cert.metaTitle || `${cert.title} Certification Preparation`,
        description: cert.metaDescription || cert.description || cert.overview,
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
            name: 'Certifications',
            item: `${SITE_CONFIG.domain}/certifications`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: cert.title,
            item: `${SITE_CONFIG.domain}/certifications/${cert.slug}`,
          },
        ],
      },
      ...(cert.faqs && cert.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: cert.faqs.map((faq) => ({
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
            { label: 'Certifications', href: '/certifications' },
            { label: cert.title },
          ]}
        />

        {/* 1. HERO SECTION */}
        <div className="relative bg-brand-navy text-white rounded-2xl p-8 sm:p-12 overflow-hidden my-6">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs font-bold">
                {cert.category}
              </Badge>
              {cert.governingBody && (
                <span className="text-xs text-brand-muted/80 flex items-center gap-1 font-medium">
                  <Building2 className="w-3.5 h-3.5" />
                  {cert.governingBody}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {cert.title} Certification Preparation
            </h1>

            <p className="text-base sm:text-lg text-brand-muted/90 leading-relaxed text-balance">
              {cert.tagline || cert.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry-form"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-lg flex items-center gap-2 transition-all inline-flex"
              >
                <span>Request Preparation Program</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </a>
              <Link
                href="/services/professional-certification-prep"
                className="px-5 py-3 rounded-xl border border-white/30 text-white font-bold text-xs hover:bg-white/10 transition-all"
              >
                View Certification Prep Service
              </Link>
            </div>
          </div>
        </div>

        {/* 2. OVERVIEW & EXAM FORMAT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          <div className="lg:col-span-2 bg-white border border-brand-border rounded-2xl p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-navy">Program Overview</h2>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
              {cert.overview || cert.description}
            </p>

            {(cert.keyDomains || cert.topicsCovered || []).length > 0 && (
              <div className="pt-4 border-t border-brand-border/60 space-y-3">
                <h3 className="text-lg font-bold text-brand-navy">Key Examination Domains &amp; Syllabus Focus</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(cert.keyDomains || cert.topicsCovered).map((domain, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-brand-bg border border-brand-border text-xs sm:text-sm font-semibold text-brand-navy flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0"></div>
                      <span>{domain}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* EXAM FORMAT CARD */}
          {cert.examFormat && (
            <div className="bg-white border border-brand-border rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-blue" />
                Examination Specifications
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                {(cert.examFormat.totalQuestions || cert.examFormat.questionCount) && (
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Questions:</span>
                    <span className="font-bold text-brand-navy">{cert.examFormat.totalQuestions || cert.examFormat.questionCount}</span>
                  </div>
                )}
                {cert.examFormat.duration && (
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Time Limit:</span>
                    <span className="font-bold text-brand-navy">{cert.examFormat.duration}</span>
                  </div>
                )}
                {cert.examFormat.passingScore && (
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Passing Standard:</span>
                    <span className="font-bold text-brand-navy">{cert.examFormat.passingScore}</span>
                  </div>
                )}
                {(cert.examFormat.format || cert.examFormat.testFormat) && (
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Format:</span>
                    <span className="font-bold text-brand-navy text-right">{cert.examFormat.format || cert.examFormat.testFormat}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 3. COACHING INCLUDES */}
        {(cert.coachingIncludes || cert.materials || []).length > 0 && (
          <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-8">
            <SectionHeading
              badge="Preparation Features"
              title={`What Our ${cert.title} Coaching Includes`}
              subtitle="Comprehensive 1-on-1 tutoring, study planning, and mock test rationale reviews."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {(cert.coachingIncludes || cert.materials).map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-brand-bg border border-brand-border flex items-start gap-3 text-xs sm:text-sm font-medium text-brand-text">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy block">{typeof item === 'string' ? item : item.title}</strong>
                    {typeof item === 'object' && item.desc && <p className="text-xs text-brand-muted mt-0.5">{item.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ENQUIRY FORM */}
        <CertificationInquiryForm certTitle={cert.title} />

        {/* 5. FREQUENTLY ASKED QUESTIONS */}
        {(cert.faqs || []).length > 0 && (
          <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-10">
            <SectionHeading
              badge="Common Questions"
              title={`Frequently Asked Questions About ${cert.title}`}
              subtitle="Clear answers regarding exam requirements, study materials, and 1-on-1 coaching."
            />
            <FaqAccordion items={cert.faqs} />
          </div>
        )}

        {/* 6. SERVICE CROSS-LINK BANNER */}
        <div className="bg-brand-bg border border-brand-border rounded-2xl p-8 my-10 space-y-4 text-center max-w-3xl mx-auto shadow-sm">
          <Award className="w-10 h-10 text-brand-blue mx-auto" />
          <h3 className="text-xl font-bold text-brand-navy">
            Looking for 1-on-1 Certification Coaching?
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Our Professional Certification Prep program connects you with certified tutors for domain-by-domain syllabus walkthroughs, scenario question coaching, and customized revision schedules.
          </p>
          <div className="pt-2">
            <Link
              href="/services/professional-certification-prep"
              className="px-5 py-2.5 bg-brand-blue hover:bg-brand-navy text-white text-xs font-bold rounded-xl inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Explore Professional Certification Prep Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
