import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FileCheck,
  Award,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';
import { getStudyResourcesContent } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Study Materials & Revision Resources | TUTOR PROCTORED EXAMS',
  description:
    'High-yield study materials, revision notes, formula sheets, and practice question banks for PMP, CompTIA, AAPC CPC, CCMA, CNA, CPhT, TEAS, and HESI exams.',
  keywords: [
    'study materials directory',
    'revision resources',
    'PMP revision notes',
    'CompTIA practice questions',
    'AAPC coding guides',
    'CNA clinical skill checklists',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/study-resources`,
  },
  openGraph: {
    title: 'Study Materials & Revision Resources Library',
    description: 'Explore high-yield revision summaries, formula sheets, domain flashcards, and practice problem sets.',
    url: `${SITE_CONFIG.domain}/study-resources`,
    type: 'website',
  },
};

export default function StudyResourcesDirectoryPage() {
  const resourcesList = getStudyResourcesContent();

  return (
    <div className="space-y-12 py-4">
      <PageContainer>
        <Breadcrumb items={[{ label: 'Study Resources' }]} />

        {/* 1. HERO BANNER */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 my-6 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs font-bold">
              Study Guides &amp; Revision Materials
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Study Resources &amp; Revision Library
            </h1>

            <p className="text-brand-muted/90 text-base sm:text-lg leading-relaxed text-balance">
              High-yield revision summaries, formula sheets, domain flashcards, and practice problem sets curated for academic subjects and professional certifications.
            </p>
          </div>
        </div>

        {/* 2. RESOURCES GRID */}
        <div className="space-y-6 my-10">
          <SectionHeading
            badge="Library Catalogue"
            title="Explore Revision Materials by Credential"
            subtitle="Select a subject area below to access study guides and formula summaries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {resourcesList.map((res) => (
              <div
                key={res.slug}
                className="bg-white border border-brand-border rounded-2xl p-6 hover:shadow-card hover:border-brand-blue transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="blue" className="text-[10px]">
                      {res.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed">
                    {res.description || res.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <Link
                    href={`/study-resources/${res.slug}`}
                    className="text-xs font-bold text-brand-blue hover:text-brand-navy transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Study Material Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INDEPENDENT DISCLAIMER */}
        <div className="bg-brand-bg border border-brand-border rounded-2xl p-8 my-10 space-y-4 text-center max-w-3xl mx-auto shadow-sm">
          <ShieldCheck className="w-10 h-10 text-brand-blue mx-auto" />
          <h3 className="text-xl font-bold text-brand-navy">
            100% Independent Educational Support &amp; Materials
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            All study materials are original revision resources created for independent student preparation. We are not affiliated with or endorsed by official certification bodies.
          </p>
        </div>
      </PageContainer>
    </div>
  );
}
