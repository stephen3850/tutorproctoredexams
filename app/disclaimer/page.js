import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  Lock,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageCircle,
  FileText,
  AlertTriangle,
  Scale,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/utils';

export const metadata = {
  title: 'Academic & Platform Disclaimer | TUTOR PROCTORED EXAMS',
  description:
    'Important legal notice regarding third-party trademarks, non-affiliation status, educational software guidance, and academic integrity policies.',
  keywords: [
    'academic disclaimer',
    'platform non-affiliation notice',
    'trademark fair use notice',
    'educational integrity pledge',
    'TUTOR PROCTORED EXAMS legal notice',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  const vendorsList = [
    { name: 'Respondus Inc.', detail: 'LockDown Browser® & Respondus Monitor®' },
    { name: 'ExamSoft Worldwide LLC', detail: 'Examplify®' },
    { name: 'Honorlock Inc.', detail: 'Honorlock Online Proctoring' },
    { name: 'Meazure Learning / ProctorU', detail: 'ProctorU® Live & Automated Proctoring' },
    { name: 'Proctorio Inc.', detail: 'Proctorio® Learning Integrity Platform' },
    { name: 'Verificient Technologies', detail: 'Proctortrack®' },
    { name: 'Examity Inc.', detail: 'Examity® Live & Automated Proctoring' },
    { name: 'PSI Services LLC', detail: 'PSI Bridge® Examination Services' },
    { name: 'Assessment Technologies Institute (ATI)', detail: 'TEAS® Nursing Admissions Exam' },
    { name: 'Project Management Institute (PMI)', detail: 'PMP® & CAPM® Certifications' },
    { name: 'CompTIA Inc.', detail: 'Security+®, Network+®, A+® Certifications' },
    { name: 'AAPC', detail: 'CPC® & Medical Coding Credentials' },
    { name: 'National Healthcareer Association (NHA)', detail: 'CCMA® Certification' },
    { name: 'Pharmacy Technician Certification Board (PTCB)', detail: 'CPhT® Credential' },
  ];

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Academic & Platform Disclaimer',
    url: `${SITE_CONFIG.domain}/disclaimer`,
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
        <Breadcrumb items={[{ label: 'Academic & Platform Disclaimer' }]} />

        {/* 1. HERO SECTION */}
        <div className="relative bg-[#0F172A] text-white rounded-2xl p-8 sm:p-12 overflow-hidden my-6 shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#2563EB] text-white shadow-sm">
              <Scale className="w-3.5 h-3.5 text-white" />
              <span>INDEPENDENT EDUCATIONAL SERVICE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Academic & Platform Disclaimer
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Important Legal Notice Regarding Third-Party Trademarks, Platform Independence & Academic Integrity.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300 font-semibold border-t border-white/20">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#356AE6]" /> Independent Educational Stance</span>
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#356AE6]" /> Trademark Fair Use Notice</span>
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#356AE6]" /> 100% Authentic Learning Standard</span>
            </div>
          </div>
        </div>

        {/* 2. INDEPENDENT SERVICE NOTICE */}
        <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm my-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">Independent Service Declaration</h2>
              <span className="text-xs text-slate-500 font-medium">Educational Support & Preparation Platform</span>
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            <strong>TUTOR PROCTORED EXAMS</strong> operates strictly as an independent educational support, tutoring, and technical preparation service. We provide students and professionals worldwide with legitimate 1-on-1 tutoring, study planning, practice problem walkthroughs, and technical software compatibility guidance.
          </p>
        </div>

        {/* 3. NON-AFFILIATION NOTICE & VENDOR LIST */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm my-8">
          <SectionHeading
            badge="Legal Disclosure"
            title="Non-Affiliation & Independent Status"
            subtitle="TUTOR PROCTORED EXAMS is an independent educational prep service."
          />

          <p className="text-slate-700 text-sm leading-relaxed font-normal">
            TUTOR PROCTORED EXAMS is not affiliated with, endorsed by, sponsored by, or officially associated with any third-party examination platform, proctoring vendor, certification board, university, testing center, or licensing commission mentioned on this website.
          </p>

          {/* Vendors Grid */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">Referenced Testing Organizations & Software Vendors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vendorsList.map((ven, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">{ven.name}</h4>
                    <span className="text-[11px] text-slate-500 font-medium">{ven.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. TRADEMARKS & BRAND OWNERSHIP */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm my-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0F172A] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-extrabold text-[#0F172A]">Trademarks & Brand Ownership</h2>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed">
            All product names, logos, brands, trademarks™, and registered® trademarks mentioned across this website belong to their respective holders.
          </p>

          <p className="text-slate-600 text-xs leading-relaxed font-medium">
            Their reference on this website is solely for identification, descriptive context, and legitimate educational purposes. Use of these names does not imply any co-operation, endorsement, sponsorship, affiliation, or partnership between TUTOR PROCTORED EXAMS and any trademark holder.
          </p>
        </div>

        {/* 5. COMMITMENT TO ACADEMIC HONESTY (LIGHT RED / CRIMSON BACKGROUND) */}
        <div className="bg-[#991B1B] text-white rounded-2xl p-8 space-y-4 shadow-xl my-8 border border-red-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">Commitment to Academic Honesty</h2>
          </div>

          <p className="text-rose-100 text-sm sm:text-base leading-relaxed font-medium">
            All 1-on-1 tutoring, study materials, practice problem walkthroughs, and software technical guidance provided by TUTOR PROCTORED EXAMS are intended strictly to support authentic learning, concept mastery, and independent exam preparation.
          </p>

          <p className="text-rose-100/90 text-xs sm:text-sm leading-relaxed font-medium">
            We strictly forbid any form of academic misconduct. We do not offer proxy test-taking, impersonation, unauthorized exam assistance, cheating tools, or proctoring bypass services. Every learner is 100% responsible for taking and completing their own examinations independently.
          </p>
        </div>

        {/* 6. ADDITIONAL LEGAL SECTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2 shadow-sm">
            <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
              Responsible Use of Resources
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Students and candidates agree to use all study notes, practice questions, and revision guides ethically to enhance personal subject mastery.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2 shadow-sm">
            <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#2563EB]" />
              Student Responsibility
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Every student remains fully responsible for adhering to their university&apos;s, institution&apos;s, or testing body&apos;s code of academic conduct and exam policies.
            </p>
          </div>
        </div>

        {/* 7. CONTACT FOR LEGAL OR TRADEMARK QUESTIONS (CLEAR GREEN BACKGROUND) */}
        <div className="bg-[#05B851] text-white rounded-2xl p-8 text-center space-y-4 shadow-xl max-w-3xl mx-auto my-8">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="inline-block bg-white/20 text-white border border-white/30 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider">
              Legal & Trademark Contact
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Questions Regarding Our Disclaimer or Policies?
            </h2>
            <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
              If you have any questions regarding our disclaimer, trademark notices, or academic integrity policies, please contact our administrative team.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:info@tutorproctoredexams.com?subject=Legal%20or%20Trademark%20Inquiry%20-%20TUTOR%20PROCTORED%20EXAMS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-950 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-emerald-950 shrink-0" />
              <span>Email info@tutorproctoredexams.com</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800/80 text-white border-2 border-white/90 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:bg-white hover:text-emerald-950 transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-800" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>

      </PageContainer>
    </div>
  );
}
