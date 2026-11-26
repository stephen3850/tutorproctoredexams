import React from 'react';
import Link from 'next/link';
import { Cpu, ArrowRight, ShieldCheck, CheckCircle2, HardDrive, HelpCircle, Layers, Clock, Sparkles, FileCheck, Globe, ExternalLink } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { getPlatformsContent } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Examination Platforms & Setup Guides Directory | TUTOR PROCTORED EXAMS',
  description:
    'Technical guides, operating system requirements, camera permission checks, and pre-test setup advice for Respondus, Examplify, Honorlock, ProctorU, and ATI.',
  keywords: [
    'examination platforms directory',
    'proctoring software compatibility',
    'Respondus LockDown Browser guide',
    'Examplify system requirements',
    'Honorlock preparation',
    'ProctorU setup check',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/exam-platforms`,
  },
  openGraph: {
    title: 'Examination Platforms & Technical Setup Guides Directory',
    description: 'Technical guides, operating system requirements, and pre-test readiness advice for Respondus, Examplify, Honorlock, ProctorU, and Proctorio.',
    url: `${SITE_CONFIG.domain}/exam-platforms`,
    type: 'website',
  },
};

export default function ExamPlatformsDirectoryPage() {
  const platformList = getPlatformsContent();

  return (
    <div className="space-y-12 py-4">
      <PageContainer>
        <Breadcrumb items={[{ label: 'Exam Platforms' }]} />

        {/* 1. HERO BANNER */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 my-6 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs font-bold">
              Examination Software Directory
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Exam Platform Setup Guides
            </h1>

            <p className="text-brand-muted/90 text-base sm:text-lg leading-relaxed text-balance">
              Explore system compatibility checklists, operating system requirements, camera and microphone privacy settings, and legitimate pre-test setup advice for major university and professional assessment platforms.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="md">
                Request Technical Setup Advice
              </Button>
              <Link
                href="/services/software-technical-guidance"
                className="px-5 py-2.5 rounded-xl border border-white/30 text-white font-bold text-xs hover:bg-white/10 transition-all"
              >
                View Software Technical Guidance Service
              </Link>
            </div>
          </div>
        </div>

        {/* 2. PLATFORMS GRID */}
        <div className="space-y-6 my-10">
          <SectionHeading
            badge="Platforms Directory"
            title="Supported Assessment Environments"
            subtitle="Select an examination platform below to review operating system specifications and pre-test setup guidance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {platformList.map((platform) => (
              <div
                key={platform.slug}
                className="bg-white border border-brand-border rounded-2xl p-6 hover:shadow-card hover:border-brand-blue transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-lightBlue/60 text-brand-blue flex items-center justify-center font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy leading-snug">
                    {platform.title || platform.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed">
                    {platform.description || platform.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <Link
                    href={`/exam-platforms/${platform.slug}`}
                    className="text-xs font-bold text-brand-blue hover:text-brand-navy transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Software Requirements</span>
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
            100% Independent Educational Support &amp; System Advice
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            TUTOR PROCTORED EXAMS is an independent educational service. We are not affiliated with, endorsed by, or developers of third-party software platforms. All technical advice focuses on system requirements, OS permissions, and resolving background process conflicts prior to test day.
          </p>
        </div>
      </PageContainer>
    </div>
  );
}
