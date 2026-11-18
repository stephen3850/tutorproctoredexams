import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight, Home, Search, BookOpen, Cpu, Award } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Page Not Found (404) | TUTOR PROCTORED EXAMS',
  description: 'The requested page could not be found. Explore our educational services, exam platform guides, or certifications.',
};

export default function NotFoundPage() {
  return (
    <PageContainer className="py-16 sm:py-24 space-y-8 text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-brand-lightBlue text-brand-blue flex items-center justify-center mx-auto shadow-sm overflow-hidden">
        <img src="/tutor logo.jpg" alt="TUTOR PROCTORED EXAMS Logo" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-3">
        <Badge variant="blue">Error 404</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
          The page you are looking for may have been moved, renamed, or does not exist. Please explore our site using the links below.
        </p>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button href="/" variant="primary" size="md" icon={Home} iconPosition="left">
          Return to Homepage
        </Button>
        <Button href="/services" variant="outline" size="md" icon={ArrowRight}>
          Explore Services
        </Button>
      </div>

      <div className="pt-8 border-t border-brand-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        <Link
          href="/exam-platforms"
          className="p-4 rounded-xl border border-brand-border bg-white hover:border-brand-blue hover:shadow-subtle transition-all space-y-1 block"
        >
          <div className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-brand-blue" /> Exam Platforms
          </div>
          <p className="text-[11px] text-brand-muted">Respondus, Examplify, Honorlock & ProctorU</p>
        </Link>

        <Link
          href="/certifications"
          className="p-4 rounded-xl border border-brand-border bg-white hover:border-brand-blue hover:shadow-subtle transition-all space-y-1 block"
        >
          <div className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-brand-blue" /> Certifications
          </div>
          <p className="text-[11px] text-brand-muted">PMP, CompTIA, AAPC, CPC & CCMA</p>
        </Link>

        <Link
          href="/contact"
          className="p-4 rounded-xl border border-brand-border bg-white hover:border-brand-blue hover:shadow-subtle transition-all space-y-1 block"
        >
          <div className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-brand-blue" /> Contact Support
          </div>
          <p className="text-[11px] text-brand-muted">Get assistance with your inquiry</p>
        </Link>
      </div>
    </PageContainer>
  );
}
