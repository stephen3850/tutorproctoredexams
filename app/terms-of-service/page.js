import React from 'react';
import Link from 'next/link';
import {
  FileText,
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Building2,
  Mail,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Clock,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/utils';

export const metadata = {
  title: 'Terms of Service | TUTOR PROCTORED EXAMS',
  description:
    'Terms of Service governing the use of TUTOR PROCTORED EXAMS website, educational support services, study materials, and academic integrity policies.',
  keywords: [
    'Terms of Service',
    'TUTOR PROCTORED EXAMS terms',
    'educational services agreement',
    'academic integrity policy',
    'student terms and conditions',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  const lastUpdatedDate = 'March 2025';

  const sectionsList = [
    { id: 'section-1', number: '1', title: 'Acceptance of Terms' },
    { id: 'section-2', number: '2', title: 'Scope of Educational Services' },
    { id: 'section-3', number: '3', title: 'Academic Integrity & Prohibited Conduct' },
    { id: 'section-4', number: '4', title: 'Student Responsibilities' },
    { id: 'section-5', number: '5', title: 'Intellectual Property Rights' },
    { id: 'section-6', number: '6', title: 'Third-Party Platforms & Independent Status' },
    { id: 'section-7', number: '7', title: 'Study Materials & Resource Availability' },
    { id: 'section-8', number: '8', title: 'Payments, Pricing & Refunds' },
    { id: 'section-9', number: '9', title: 'Service Availability & Limitations' },
    { id: 'section-10', number: '10', title: 'Privacy & Personal Information' },
    { id: 'section-11', number: '11', title: 'Disclaimer & Limitation of Responsibility' },
    { id: 'section-12', number: '12', title: 'Suspension & Termination' },
    { id: 'section-13', number: '13', title: 'Changes to Terms of Service' },
    { id: 'section-14', number: '14', title: 'Governing Law & Dispute Resolution' },
    { id: 'section-15', number: '15', title: 'Contact Information' },
  ];

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    url: `${SITE_CONFIG.domain}/terms-of-service`,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <div className="space-y-10 pt-2 pb-16">
      <JsonLd data={jsonLdData} />

      <PageContainer className="max-w-4xl">
        <Breadcrumb items={[{ label: 'Terms of Service' }]} />

        {/* 1. HERO SECTION */}
        <div className="relative bg-[#0F172A] text-white rounded-2xl p-8 sm:p-12 overflow-hidden my-6 shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#2563EB] text-white shadow-sm">
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>LEGAL AGREEMENT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Terms of Service
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Terms Governing Educational Services, Platform Usage & Student Responsibilities.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300 font-semibold border-t border-white/20">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#356AE6]" /> Last Updated: {lastUpdatedDate}</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#356AE6]" /> 100% Academic Integrity Standard</span>
            </div>
          </div>
        </div>

        {/* TABLE OF CONTENTS (TOC) CARD */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm my-6">
          <h2 className="text-base font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#2563EB]" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#2563EB]">
            {sectionsList.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="p-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 text-slate-700 hover:text-[#2563EB]"
              >
                <span className="w-5 h-5 rounded bg-blue-100 text-[#2563EB] text-[10px] flex items-center justify-center shrink-0">
                  {sec.number}
                </span>
                <span className="truncate">{sec.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* TERMS CONTENT SECTIONS */}
        <div className="space-y-8 text-slate-700 text-sm leading-relaxed">

          {/* SECTION 1 */}
          <div id="section-1" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">1.</span> Acceptance of Terms
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              By accessing, browsing, inquiring about study materials, or engaging educational services through <strong>TUTOR PROCTORED EXAMS</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;, or &quot;the Platform&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service, our Privacy Policy, and our Academic &amp; Platform Disclaimer.
            </p>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              If you do not agree to these Terms in full, you must discontinue using our website and services immediately.
            </p>
          </div>

          {/* SECTION 2 */}
          <div id="section-2" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">2.</span> Scope of Educational Services
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              TUTOR PROCTORED EXAMS provides legitimate educational support resources designed strictly to assist students and working professionals in independent study, concept mastery, and exam preparation. Our services include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 pt-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> 1-on-1 Virtual Online Tutoring</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Study Strategy & Pacing Coaching</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Professional Certification Preparation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Revision Notes & Topic Summaries</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Practice Question Banks & Mocks</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" /> Software Compatibility Guidance</li>
            </ul>
            <p className="text-slate-600 text-xs leading-relaxed font-medium pt-1">
              All services are delivered for educational enrichment and independent candidate preparation.
            </p>
          </div>

          {/* SECTION 3: ACADEMIC INTEGRITY (CRIMSON HIGHLIGHT) */}
          <div id="section-3" className="bg-[#991B1B] text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl border border-red-500/30 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">3. Academic Integrity & Prohibited Conduct</h2>
            </div>

            <p className="text-rose-100 text-xs sm:text-sm leading-relaxed font-medium">
              We strictly enforce an absolute academic integrity standard. Users agree to utilize our website and educational resources ethically and independently.
            </p>

            <div className="space-y-2 text-xs font-semibold text-rose-100 pt-1">
              <p className="font-bold uppercase tracking-wider text-white">The following activities are strictly prohibited:</p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Impersonation or taking examinations on behalf of another individual.</li>
                <li>Requesting or engaging in unauthorized assistance during live proctored examinations.</li>
                <li>Cheating, plagiarism, or any form of academic dishonesty or misconduct.</li>
                <li>Circumventing examination security controls or proctoring software restrictions.</li>
                <li>Unauthorized access to university, testing vendor, or institution computer systems.</li>
                <li>Misrepresenting qualifications or redistributing proprietary study materials.</li>
              </ul>
            </div>

            <p className="text-rose-100/90 text-xs leading-relaxed font-medium pt-1">
              Any violation of this policy results in immediate termination of services and permanent account suspension without refund.
            </p>
          </div>

          {/* SECTION 4 */}
          <div id="section-4" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">4.</span> Student Responsibilities
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Students and candidates engaging our educational services are responsible for:
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700 list-disc pl-5">
              <li>Providing accurate, truthful contact and course information during inquiries.</li>
              <li>Complying fully with their university&apos;s, college&apos;s, or testing body&apos;s code of academic conduct.</li>
              <li>Adhering to official certification board examination rules (PMI, CompTIA, SHRM, AAPC, NHA, PTCB).</li>
              <li>Ensuring their computer hardware, operating system, and internet connection satisfy testing requirements.</li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div id="section-5" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">5.</span> Intellectual Property Rights
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              All original content, branding, website layout, graphics, text, revision notes, practice question structures, and software logic published on TUTOR PROCTORED EXAMS belong to the Platform and are protected by applicable copyright and trademark laws.
            </p>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              Users are granted a limited, personal, non-transferable license to access study resources for individual preparation. Unauthorized copying, reselling, or public redistribution of our materials is strictly prohibited.
            </p>
          </div>

          {/* SECTION 6 */}
          <div id="section-6" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">6.</span> Third-Party Platforms & Independent Status
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              TUTOR PROCTORED EXAMS is an independent educational prep platform. All third-party examination platforms (Respondus, Examplify, Honorlock, ProctorU, Proctorio, Proctortrack, Examity, PSI, ATI) and certification bodies (PMI, CompTIA, SHRM, AAPC, NHA, PTCB) retain 100% ownership of their respective trademarks and systems.
            </p>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              For complete non-affiliation details, please review our <Link href="/disclaimer" className="text-[#2563EB] underline font-bold">Academic & Platform Disclaimer</Link>.
            </p>
          </div>

          {/* SECTION 7 */}
          <div id="section-7" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">7.</span> Study Materials & Resource Availability
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Availability of specific revision guides, topic summaries, practice question sets, and mock exams may vary depending on candidate background and certification outline updates. Access details, formats, and preparation schedules are communicated directly to the candidate upon sales inquiry.
            </p>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              Study resources are designed to support structured preparation; we do not guarantee specific examination scores or pass outcomes.
            </p>
          </div>

          {/* SECTION 8 */}
          <div id="section-8" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">8.</span> Payments, Pricing & Refunds
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Pricing for customized 1-on-1 tutoring packages and study material access is communicated transparently prior to confirmation. Payment arrangements, delivery formats, and refund parameters are confirmed individually with each candidate upon inquiry.
            </p>
          </div>

          {/* SECTION 9 */}
          <div id="section-9" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">9.</span> Service Availability & Limitations
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              While we strive to maintain 24/7 support availability, service delivery may depend on external factor availability including internet service provider connectivity, third-party software updates, or scheduled platform maintenance.
            </p>
          </div>

          {/* SECTION 10 */}
          <div id="section-10" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">10.</span> Privacy & Personal Information
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Your privacy is fundamental to us. All personal information and inquiries submitted to TUTOR PROCTORED EXAMS are handled securely in accordance with our <Link href="/privacy-policy" className="text-[#2563EB] underline font-bold">Privacy Policy</Link>.
            </p>
          </div>

          {/* SECTION 11 */}
          <div id="section-11" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">11.</span> Disclaimer & Limitation of Responsibility
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Educational materials and tutoring sessions are preparation tools. Certification pass results depend on candidate study dedication, prior background, and independent examination performance. TUTOR PROCTORED EXAMS shall not be liable for indirect or consequential damages arising from examination results.
            </p>
          </div>

          {/* SECTION 12 */}
          <div id="section-12" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">12.</span> Suspension & Termination
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              We reserve the right to suspend or terminate service access for any user who violates our Academic Integrity Policy, engages in fraudulent activity, or attempts unauthorized redistribution of proprietary study resources.
            </p>
          </div>

          {/* SECTION 13 */}
          <div id="section-13" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">13.</span> Changes to Terms of Service
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              We may update these Terms periodically to reflect operational or regulatory changes. The latest revision date will always be displayed at the top of this page. Continued usage of our services constitutes acceptance of updated Terms.
            </p>
          </div>

          {/* SECTION 14 */}
          <div id="section-14" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#2563EB]">14.</span> Governing Law & Dispute Resolution
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable commercial and consumer laws. Any disputes shall first be addressed through direct administrative communication with our support team.
            </p>
          </div>

          {/* SECTION 15: CONTACT INFO (CLEAR VIBRANT GREEN BACKGROUND) */}
          <div id="section-15" className="bg-[#05B851] text-white rounded-2xl p-8 text-center space-y-4 shadow-xl max-w-3xl mx-auto scroll-mt-24">
            <div className="space-y-2 max-w-xl mx-auto">
              <span className="inline-block bg-white/20 text-white border border-white/30 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                15. Contact Information
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Questions Regarding Our Terms of Service?
              </h2>
              <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                If you have questions or require clarification regarding these Terms, our legal stance, or our academic integrity policies, please contact our team.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:info@tutorproctoredexams.com?subject=Terms%20of%20Service%20Inquiry%20-%20TUTOR%20PROCTORED%20EXAMS"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-950 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-950 shrink-0" />
                <span>Email info@tutorproctoredexams.com</span>
              </a>

              <a
                href="https://wa.me/254711882470"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800/80 text-white border-2 border-white/90 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:bg-white hover:text-emerald-950 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-800" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </PageContainer>
    </div>
  );
}
