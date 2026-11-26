import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Laptop,
  HardDrive,
  Cpu,
  ArrowRight,
  Mail,
  MessageCircle,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { getPlatformsContent, getPlatformBySlug } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';
import { getWpPageBySlug, extractWpSeo } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const platform = getPlatformBySlug(slug);

  const defaultTitle = platform?.metaTitle || (platform ? `${platform.title} Setup Guide | TUTOR PROCTORED EXAMS` : 'Exam Platform | TUTOR PROCTORED EXAMS');
  const defaultDescription = platform?.metaDescription || platform?.description || platform?.overview || 'Proctoring software compatibility guidance and requirements.';
  const defaultCanonical = `${SITE_CONFIG.domain}/exam-platforms/${slug}`;

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
      platform?.focusKeyword || platform?.title || 'exam platform',
      'proctoring software guidance',
      'system requirements',
      'software compatibility',
      'online test setup',
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

export default async function PlatformDetailPage({ params }) {
  const resolvedParams = await params;
  const platform = getPlatformBySlug(resolvedParams?.slug);

  if (!platform) {
    notFound();
  }

  // Structured Data JSON-LD (WebPage, BreadcrumbList, FAQPage)
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_CONFIG.domain}/exam-platforms/${platform.slug}`,
        url: `${SITE_CONFIG.domain}/exam-platforms/${platform.slug}`,
        name: platform.metaTitle || `${platform.title} Setup Guide`,
        description: platform.metaDescription || platform.description || platform.overview,
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
            name: 'Exam Platforms',
            item: `${SITE_CONFIG.domain}/exam-platforms`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: platform.title || platform.name,
            item: `${SITE_CONFIG.domain}/exam-platforms/${platform.slug}`,
          },
        ],
      },
      ...(platform.faqs && platform.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: platform.faqs.map((faq) => ({
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
            { label: 'Exam Platforms', href: '/exam-platforms' },
            { label: platform.title || platform.name },
          ]}
        />

        {/* 1. HERO SECTION */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 overflow-hidden my-6 relative">
          <div className="relative z-10 max-w-3xl space-y-4">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs">
              Software Compatibility &amp; System Setup Guidance
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {platform.title || platform.name} Setup &amp; Technical Guidance
            </h1>

            <p className="text-base sm:text-lg text-brand-muted/90 leading-relaxed text-balance">
              {platform.description || platform.overview}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-lg flex items-center gap-2 transition-all inline-flex"
              >
                <span>Request Technical Assistance</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </a>
              <Link
                href="/services/software-technical-guidance"
                className="px-5 py-3 rounded-xl border border-white/30 text-white font-bold text-xs hover:bg-white/10 transition-all"
              >
                View Technical Guidance Service
              </Link>
            </div>
          </div>
        </div>

        {/* 2. OVERVIEW & SYSTEM REQUIREMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          <div className="lg:col-span-2 bg-white border border-brand-border rounded-2xl p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-navy">Software Environment Overview</h2>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
              {platform.overview || platform.description}
            </p>

            {(platform.features || platform.keyFeatures || []).length > 0 && (
              <div className="pt-4 border-t border-brand-border/60 space-y-3">
                <h3 className="text-lg font-bold text-brand-navy">Key Environment Features &amp; Restrictions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(platform.features || platform.keyFeatures).map((feature, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-brand-bg border border-brand-border text-xs sm:text-sm font-semibold text-brand-navy flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SYSTEM REQUIREMENTS CARD */}
          {platform.systemRequirements && (
            <div className="bg-white border border-brand-border rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Laptop className="w-5 h-5 text-brand-blue" />
                System Requirements
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                {platform.systemRequirements.windows && (
                  <div className="py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted block text-xs font-semibold">Windows OS:</span>
                    <span className="font-bold text-brand-navy">{platform.systemRequirements.windows}</span>
                  </div>
                )}
                {platform.systemRequirements.macOS && (
                  <div className="py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted block text-xs font-semibold">macOS:</span>
                    <span className="font-bold text-brand-navy">{platform.systemRequirements.macOS}</span>
                  </div>
                )}
                {platform.systemRequirements.chromebook && (
                  <div className="py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted block text-xs font-semibold">Chromebook:</span>
                    <span className="font-bold text-brand-navy">{platform.systemRequirements.chromebook}</span>
                  </div>
                )}
                {platform.systemRequirements.hardware && (
                  <div className="py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted block text-xs font-semibold">Hardware Needs:</span>
                    <span className="font-bold text-brand-navy">{platform.systemRequirements.hardware}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 3. TROUBLESHOOTING GUIDE */}
        {(platform.troubleshooting || []).length > 0 && (
          <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-10">
            <SectionHeading
              badge="Troubleshooting Help"
              title={`Common ${platform.title || platform.name} Setup Errors &amp; Fixes`}
              subtitle="Step-by-step solutions for frequent pre-exam technical roadblocks."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {platform.troubleshooting.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-brand-border bg-brand-bg space-y-2">
                  <h4 className="font-bold text-rose-700 text-sm">{item.issue}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. FREQUENTLY ASKED QUESTIONS */}
        {(platform.faqs || []).length > 0 && (
          <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-10">
            <SectionHeading
              badge="Frequently Asked Questions"
              title={`Frequently Asked Questions About ${platform.title || platform.name}`}
              subtitle="Clear answers regarding system requirements, camera checks, and test-day preparation."
            />
            <FaqAccordion items={platform.faqs} />
          </div>
        )}

        {/* 5. ETHICAL TECHNICAL GUIDANCE DISCLAIMER & SERVICE CROSS-LINK */}
        <div className="bg-brand-bg border border-brand-border rounded-2xl p-8 my-10 space-y-4 text-center max-w-3xl mx-auto shadow-sm">
          <ShieldCheck className="w-10 h-10 text-brand-blue mx-auto" />
          <h3 className="text-xl font-bold text-brand-navy">
            Independent Educational Guidance &amp; Compatibility Help
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            TUTOR PROCTORED EXAMS is an independent educational support provider. We are not affiliated with, endorsed by, or developers of third-party software vendors. Our technical guidance covers hardware compatibility, webcam/microphone privacy settings, OS updates, and background application readiness prior to test day.
          </p>

          <div className="pt-2">
            <Link
              href="/services/software-technical-guidance"
              className="px-5 py-2.5 bg-brand-blue hover:bg-brand-navy text-white text-xs font-bold rounded-xl inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Explore Software Technical Guidance Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
