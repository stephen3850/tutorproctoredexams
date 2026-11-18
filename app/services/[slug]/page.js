import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Users,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  Calendar,
  Cpu,
  FileCheck,
  Sparkles,
  Layers,
  Compass,
  ArrowLeft,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { getServicesContent, getServiceBySlug } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';
import { getWpPageBySlug, extractWpSeo } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const service = getServiceBySlug(slug);

  const defaultTitle = service ? `${service.title} | Educational Services | TUTOR PROCTORED EXAMS` : 'Service | TUTOR PROCTORED EXAMS';
  const defaultDescription = service?.tagline || service?.overview || 'Educational support services and 1-on-1 tutoring.';
  const defaultCanonical = `${SITE_CONFIG.domain}/services/${slug}`;

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
      service?.title || 'educational support',
      service?.category || 'academic support',
      'educational support services',
      'academic tutoring',
      'exam preparation',
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

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams?.slug);

  if (!service) {
    notFound();
  }

  // Related services excluding current
  const relatedServices = getServicesContent()
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // Structured Data JSON-LD
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.category,
        description: service.overview,
        provider: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: (service.faqs || []).map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
            name: 'Our Services',
            item: `${SITE_CONFIG.domain}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `${SITE_CONFIG.domain}/services/${service.slug}`,
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
            { label: 'Our Services', href: '/services' },
            { label: service.title },
          ]}
        />

        {/* 1. HERO SECTION */}
        <div className="relative bg-brand-navy text-white rounded-2xl p-8 sm:p-12 overflow-hidden my-6">
          <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: `url('${service.heroImage}')` }}></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs">
              {service.category}
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-brand-muted/90 leading-relaxed text-balance">
              {service.tagline || service.overview}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-lg flex items-center gap-2 transition-all inline-flex"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. OVERVIEW & SUITABILITY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          <div className="lg:col-span-2 bg-white border border-brand-border rounded-2xl p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-navy">Service Overview</h2>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
              {service.overview}
            </p>

            {(service.relatedPlatformsOrCerts || []).length > 0 && (
              <div className="pt-4 border-t border-brand-border/60">
                <h3 className="text-lg font-bold text-brand-navy mb-3">Relevant Platforms & Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {service.relatedPlatformsOrCerts.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-brand-bg text-brand-navy text-xs font-semibold border border-brand-border">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {(service.suitableFor || []).length > 0 && (
            <div className="bg-white border border-brand-border rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-blue" />
                Who This Service Is Suitable For
              </h3>
              <ul className="space-y-3">
                {service.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 3. WHAT IT INCLUDES & BENEFITS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
          {(service.whatItIncludes || []).length > 0 && (
            <div className="bg-white border border-brand-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-blue" />
                What This Service Includes
              </h3>
              <ul className="space-y-3">
                {service.whatItIncludes.map((inc, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-brand-bg border border-brand-border flex items-start gap-3 text-xs sm:text-sm text-brand-text font-medium leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-brand-lightBlue text-brand-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(service.benefits || []).length > 0 && (
            <div className="bg-white border border-brand-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-blue" />
                Key Student Benefits
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((ben, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-brand-bg border border-brand-border flex items-start gap-3 text-xs sm:text-sm text-brand-text font-medium leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-brand-lightBlue text-brand-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ★
                    </div>
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 4. HOW THE SERVICE WORKS (4 STEPS) */}
        {(service.howItWorks || []).length > 0 && (
          <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-10">
            <SectionHeading
              badge="Process Workflow"
              title={`How ${service.title} Works`}
              subtitle="A clear, four-step framework designed to achieve measurable learning results."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {service.howItWorks.map((step, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-brand-border bg-brand-bg space-y-3">
                  <div className="text-2xl font-extrabold text-brand-blue/40 font-mono">{step.step}</div>
                  <h4 className="font-bold text-brand-navy text-base">{step.name}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. FREQUENTLY ASKED QUESTIONS */}
        {(service.faqs || []).length > 0 && (
          <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-10">
            <SectionHeading
              badge="Common Questions"
              title={`Frequently Asked Questions About ${service.title}`}
              subtitle="Clear answers regarding session formats, subject coverage, and study planning."
            />
            <FaqAccordion items={service.faqs} />
          </div>
        )}

        {/* 6. RELATED SERVICES NAVIGATION */}
        <div className="space-y-6 my-12">
          <h3 className="text-xl font-bold text-brand-navy">Explore Other Educational Support Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-5 bg-white border border-brand-border rounded-xl hover:border-brand-blue hover:shadow-card transition-all"
              >
                <span className="text-xs text-brand-muted block mb-1">{rel.category}</span>
                <h4 className="font-bold text-brand-navy group-hover:text-brand-blue transition-colors flex items-center justify-between">
                  <span>{rel.title}</span>
                  <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* 7. CONVERSION CTA */}
        <div className="bg-[#05B851] text-white rounded-2xl p-6 sm:p-8 space-y-4 text-center shadow-xl max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-3xl font-black text-white">
            Ready to Begin Your {service.title} Journey?
          </h2>
          <p className="text-white/95 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Connect with our educational team to discuss your course syllabus, upcoming exams, or target professional certification.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-950 px-6 py-3 rounded-xl font-extrabold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all inline-flex hover:bg-emerald-50"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-emerald-950 stroke-[2.5]" />
            </a>
            <Button href="/services" variant="outline" size="md" className="border-white/40 text-white hover:bg-white/10">
              View All Services
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
