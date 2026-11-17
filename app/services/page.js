import React from 'react';
import Link from 'next/link';
import {
  Users,
  BookOpen,
  FileCheck,
  Award,
  Calendar,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  HelpCircle,
  Clock,
  Layers,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ContentCard from '@/components/ui/ContentCard';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { getServicesContent } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Our Educational Support Services | TUTOR PROCTORED EXAMS',
  description:
    'Explore 1-on-1 tutoring, academic exam prep, practice tests, certification prep, study planning, technical guidance, online course help, GED, HESI, and TEAS support.',
  keywords: [
    'educational support services',
    'one-on-one tutoring',
    'academic exam preparation',
    'practice questions mock tests',
    'professional certification preparation',
    'study planning revision support',
    'examination software technical guidance',
    'GED prep',
    'HESI A2 tutoring',
    'ATI TEAS prep',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/services`,
  },
};

export default function ServicesHubPage() {
  const serviceList = getServicesContent();

  // Icon map matching service slugs
  const iconMap = {
    'one-on-one-tutoring': Users,
    'academic-exam-preparation': BookOpen,
    'practice-questions-mock-tests': FileCheck,
    'professional-certification-prep': Award,
    'study-planning-revision-support': Calendar,
    'software-technical-guidance': Cpu,
    'online-course-help': GraduationCap,
    'online-exam-help': ShieldCheck,
    'proctored-certification-exams': Award,
    ged: GraduationCap,
    hesi: BookOpen,
    teas: FileCheck,
  };

  return (
    <div className="space-y-12 py-4">
      <PageContainer>
        <Breadcrumb items={[{ label: 'Our Services' }]} />

        {/* 1. HERO BANNER */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 my-6 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs">
              Educational Services Directory
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comprehensive Educational Support Services
            </h1>

            <p className="text-brand-muted/90 text-base sm:text-lg leading-relaxed text-balance">
              Explore our structured learning programs designed for undergraduate students, adult learners, and certification candidates worldwide. From 1-on-1 tutoring to software compatibility guidance, we provide ethical, high-yield academic assistance.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="md">
                Enquire About a Service
              </Button>
              <Button href="/faq" variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
                View Service FAQs
              </Button>
            </div>
          </div>
        </div>

        {/* 2. SERVICES GRID */}
        <div className="space-y-6 my-10">
          <SectionHeading
            badge="Core Offerings"
            title="Choose Your Learning Support Program"
            subtitle="Select a service below to explore syllabus coverage, process workflows, and student benefits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {serviceList.map((service) => {
              const ServiceIcon = iconMap[service.slug] || BookOpen;

              return (
                <div
                  key={service.slug}
                  className="bg-white border border-brand-border rounded-2xl p-6 hover:shadow-card hover:border-brand-blue transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-brand-lightBlue/60 text-brand-blue flex items-center justify-center font-bold">
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                      <Badge variant="gray" className="text-[11px]">
                        {service.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-brand-navy leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed">
                      {service.tagline || service.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-border/60">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-brand-blue hover:text-brand-navy transition-colors inline-flex items-center gap-1"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. ETHICAL COMMITMENT BANNER */}
        <div className="bg-brand-bg border border-brand-border rounded-2xl p-8 my-10 space-y-4 text-center max-w-3xl mx-auto">
          <ShieldCheck className="w-10 h-10 text-brand-blue mx-auto" />
          <h3 className="text-xl font-bold text-brand-navy">
            100% Legitimate Educational Assistance & Guidance
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            All services offered by TUTOR PROCTORED EXAMS strictly comply with university codes of conduct and academic policy. We do not provide test proxy services or bypass software security. Our mission is transparent, student-centered learning.
          </p>
        </div>
      </PageContainer>
    </div>
  );
}
