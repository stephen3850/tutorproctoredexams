import React from 'react';
import Link from 'next/link';
import { Award, ArrowRight, ShieldCheck, CheckCircle2, BookOpen, Briefcase, Stethoscope, Laptop, Building2 } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { getCertificationsContent } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Professional Certification Preparation Directory | TPE',
  description:
    'Explore dedicated 1-on-1 coaching for PMP, CAPM, CompTIA Security+, SHRM, Real Estate, AAPC CPC, CCMA, CNA, and CPhT pharmacy technician certification exams.',
  keywords: [
    'professional certification preparation directory',
    'PMP exam prep',
    'CompTIA Security+ tutoring',
    'SHRM certification prep',
    'Real estate license prep',
    'AAPC medical coding prep',
    'CPC exam study guide',
    'CCMA certification prep',
    'CNA exam prep',
    'CPhT pharmacy tech prep',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/certifications`,
  },
  openGraph: {
    title: 'Professional Certification Preparation Directory',
    description: 'Build your knowledge and prepare for PMP, CompTIA, AAPC CPC, CCMA, CNA, and CPhT certifications with 1-on-1 tutoring.',
    url: `${SITE_CONFIG.domain}/certifications`,
    type: 'website',
  },
};

export default function CertificationsDirectoryPage() {
  const certsList = getCertificationsContent();

  return (
    <div className="space-y-12 py-4">
      <PageContainer>
        <Breadcrumb items={[{ label: 'Certifications' }]} />

        {/* 1. HERO BANNER */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 my-6 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs font-bold">
              Professional Certification Directory
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Professional Certification Preparation Directory
            </h1>

            <p className="text-brand-muted/90 text-base sm:text-lg leading-relaxed text-balance">
              Dedicated 1-on-1 coaching, domain-by-domain syllabus breakdowns, situational question walkthroughs, and mock test rationale reviews for recognized credentials across Project Management, IT, Healthcare, HR, and Real Estate.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="md">
                Enquire About Certification Coaching
              </Button>
              <Link
                href="/services/professional-certification-prep"
                className="px-5 py-2.5 rounded-xl border border-white/30 text-white font-bold text-xs hover:bg-white/10 transition-all"
              >
                View Certification Prep Service
              </Link>
            </div>
          </div>
        </div>

        {/* 2. CERTIFICATIONS GRID */}
        <div className="space-y-6 my-10">
          <SectionHeading
            badge="Programs Directory"
            title="Explore Certification Preparation Options"
            subtitle="Click any credential below to review exam specifications, key syllabus domains, and coaching details."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {certsList.map((cert) => (
              <div
                key={cert.slug}
                className="bg-white border border-brand-border rounded-2xl p-6 hover:shadow-card hover:border-brand-blue transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="blue" className="text-[10px]">
                      {cert.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed">
                    {cert.tagline || cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <Link
                    href={`/certifications/${cert.slug}`}
                    className="text-xs font-bold text-brand-blue hover:text-brand-navy transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Preparation Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INDEPENDENT SERVICE DISCLAIMER */}
        <div className="bg-brand-bg border border-brand-border rounded-2xl p-8 my-10 space-y-4 text-center max-w-3xl mx-auto shadow-sm">
          <ShieldCheck className="w-10 h-10 text-brand-blue mx-auto" />
          <h3 className="text-xl font-bold text-brand-navy">
            100% Independent Educational Support &amp; Exam Preparation
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            TUTOR PROCTORED EXAMS is an independent educational provider. All coaching is designed to build true domain competence, scenario question analysis, and study discipline. We are not affiliated with or endorsed by official certification bodies.
          </p>
        </div>
      </PageContainer>
    </div>
  );
}
