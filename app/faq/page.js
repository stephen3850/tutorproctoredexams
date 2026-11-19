'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Cpu,
  Mail,
  ChevronDown,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { MASTER_FAQS } from '@/lib/data/faqsData';
import { SITE_CONFIG } from '@/lib/utils';

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [categories, setCategories] = useState(() => MASTER_FAQS);

  // Real-time API synchronization with CMS saves
  useEffect(() => {
    fetch('/api/faqs', { cache: 'no-store' })
      .then((res) => res.json())
      .then((resData) => {
        if (resData?.success && resData?.data && Array.isArray(resData.data)) {
          setCategories(resData.data);
        }
      })
      .catch((err) => console.error('[FAQ Live Sync Error]:', err));
  }, []);

  const categoryNames = ['All', ...categories.map((c) => c.category)];

  const displayedCategories =
    activeCategory === 'All'
      ? categories
      : categories.filter((c) => c.category === activeCategory);

  const jsonLdFaqs = categories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: jsonLdFaqs,
  };

  return (
    <div className="space-y-12 py-4">
      <JsonLd data={faqSchema} />

      <PageContainer>
        <Breadcrumb items={[{ label: 'Frequently Asked Questions' }]} />

        {/* 1. HERO SECTION */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 my-6 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <Badge
              variant="blue"
              className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs font-bold"
            >
              FREQUENTLY ASKED QUESTIONS
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-brand-muted/90 text-base sm:text-lg leading-relaxed text-balance">
              Find clear answers to common questions about our 1-on-1 tutoring, examination software technical guidance, study resources, academic integrity commitments, and advisory process.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="md" icon={Mail}>
                Contact Advisory Team
              </Button>
            </div>
          </div>
        </div>

        {/* 2. CATEGORY FILTER BUTTONS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none my-6">
          {categoryNames.map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === catName
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-white border border-brand-border text-brand-navy hover:bg-brand-bg'
              }`}
            >
              {catName}
            </button>
          ))}
        </div>

        {/* 3. FAQS LIST ACCORDION */}
        <div className="space-y-10 my-8">
          {displayedCategories.map((categoryGroup, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm"
            >
              <div className="border-b border-brand-border/80 pb-4">
                <Badge variant="blue" className="mb-2 text-[10px]">
                  {categoryGroup.category}
                </Badge>
                <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                  {categoryGroup.category} Questions
                </h2>
              </div>

              <FaqAccordion items={categoryGroup.items} />
            </div>
          ))}
        </div>

        {/* 4. ACADEMIC INTEGRITY NOTICE */}
        <div className="bg-[#991B1B] text-white rounded-2xl p-8 space-y-4 shadow-xl border border-red-500/30 my-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Our Academic Integrity Commitment
            </h2>
          </div>

          <p className="text-rose-100 text-xs sm:text-sm leading-relaxed font-medium">
            TUTOR PROCTORED EXAMS is committed to ethical education and legitimate learning support. We do NOT offer test proxy services, candidate impersonation, or software cheating workarounds.
          </p>

          <p className="text-rose-100/90 text-xs sm:text-sm leading-relaxed font-medium">
            Our mission is to help students build genuine competence through 1-on-1 tutoring, practice exam walkthroughs, and legitimate technical readiness checks.
          </p>

          <div className="pt-2">
            <Link
              href="/disclaimer"
              className="text-xs font-bold text-white underline underline-offset-4 hover:text-rose-200 inline-flex items-center gap-1 transition-colors"
            >
              <span>Read Full Academic Disclaimer</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* 5. STILL HAVE QUESTIONS CTA */}
        <div className="bg-brand-bg border border-brand-border rounded-2xl p-8 text-center space-y-4 max-w-2xl mx-auto my-10">
          <HelpCircle className="w-10 h-10 text-brand-blue mx-auto" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
            Still Have Questions?
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            If you need assistance regarding your specific course syllabus, exam platform software, or certification prep schedule, our advisors are here to help.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md" icon={ArrowRight}>
              Submit an Advisory Inquiry
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
