'use client';

import React, { useState } from 'react';
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
  MessageCircle,
  Send,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { getCertificationsContent, getCertificationBySlug } from '@/lib/contentLoader';
import { SITE_CONFIG } from '@/lib/utils';

export default function CertificationDetailPage({ params }) {
  const slug = params?.slug;
  const cert = getCertificationBySlug(slug);

  if (!cert) {
    notFound();
  }

  // Related certifications excluding current
  const relatedCerts = getCertificationsContent()
    .filter((c) => c.slug !== cert.slug)
    .slice(0, 3);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    targetExamDate: '',
    notes: '',
  });

  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: `${cert.title} Certification Preparation`,
          subject: `Certification Preparation Inquiry – ${cert.title}`,
          message: `Target Exam Date: ${formData.notes || 'Not specified'}. ${formData.notes}`,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setFormStatus({ loading: false, success: true, error: '' });
        setFormData({ fullName: '', email: '', phone: '', targetExamDate: '', notes: '' });
      } else {
        setFormStatus({ loading: false, success: false, error: json.error || 'Failed to submit inquiry.' });
      }
    } catch (err) {
      setFormStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  // Structured Data JSON-LD
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOccupationalCredential',
        name: cert.title,
        description: cert.description || cert.overview,
        credentialCategory: cert.category,
      },
      {
        '@type': 'FAQPage',
        mainEntity: (cert.faqs || []).map((faq) => ({
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
              <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs">
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

            {(cert.keyDomains || []).length > 0 && (
              <div className="pt-4 border-t border-brand-border/60 space-y-3">
                <h3 className="text-lg font-bold text-brand-navy">Key Examination Domains & Syllabus Focus</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cert.keyDomains.map((domain, idx) => (
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
                {cert.examFormat.questionCount && (
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Questions:</span>
                    <span className="font-bold text-brand-navy">{cert.examFormat.questionCount}</span>
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
                {cert.examFormat.testFormat && (
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Format:</span>
                    <span className="font-bold text-brand-navy text-right">{cert.examFormat.testFormat}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 3. COACHING INCLUDES */}
        {(cert.coachingIncludes || []).length > 0 && (
          <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-8">
            <SectionHeading
              badge="Preparation Features"
              title={`What Our ${cert.title} Coaching Includes`}
              subtitle="Comprehensive 1-on-1 tutoring, study planning, and mock test rationale reviews."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {cert.coachingIncludes.map((inc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-brand-bg border border-brand-border flex items-start gap-3 text-xs sm:text-sm font-medium text-brand-text">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ENQUIRY FORM */}
        <div id="enquiry-form" className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 my-10 max-w-3xl mx-auto shadow-md space-y-6">
          <SectionHeading
            badge="Get Started"
            title={`Enquire About ${cert.title} Preparation`}
            subtitle="Fill out the form below to speak with an educational specialist regarding study plans and schedules."
          />

          {formStatus.success ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-950">Inquiry Received!</h3>
              <p className="text-xs sm:text-sm text-emerald-800">
                Thank you. An educational advisor will contact you within 1 business day regarding your {cert.title} preparation goals.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-brand-navy mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-bold text-brand-navy mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-brand-navy mb-1">Phone / WhatsApp (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block font-bold text-brand-navy mb-1">Target Exam Date (Optional)</label>
                  <input
                    type="text"
                    name="targetExamDate"
                    value={formData.targetExamDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="e.g. Next month, June 2025"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-brand-navy mb-1">Learning Goals & Background *</label>
                <textarea
                  name="notes"
                  required
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="Tell us about your current preparation status, preferred study times, or specific topics needing attention."
                />
              </div>

              {formStatus.error && (
                <p className="text-xs text-rose-600 font-bold">{formStatus.error}</p>
              )}

              <button
                type="submit"
                disabled={formStatus.loading}
                className="w-full py-3 px-6 bg-brand-blue hover:bg-brand-navy text-white rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {formStatus.loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Preparation Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

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
