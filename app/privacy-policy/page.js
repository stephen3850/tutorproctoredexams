import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageCircle,
  FileText,
  AlertTriangle,
  Scale,
  Eye,
  Database,
  Clock,
  UserCheck,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/utils';

export const metadata = {
  title: 'Privacy Policy | TUTOR PROCTORED EXAMS',
  description:
    'Detailed Privacy Policy for TUTOR PROCTORED EXAMS explaining how personal inquiry data, cookies, and website interactions are handled for visitors in the US and worldwide.',
  keywords: [
    'Privacy Policy',
    'TUTOR PROCTORED EXAMS privacy',
    'student data protection',
    'inquiry data privacy',
    'CCPA privacy notice',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const sectionsList = [
    { id: 'scope', number: '1', title: 'Scope and Introduction' },
    { id: 'info-collected', number: '2', title: 'Information You Provide' },
    { id: 'how-used', number: '3', title: 'How Information Is Used' },
    { id: 'cookies-analytics', number: '4', title: 'Cookies and Tracking Technologies' },
    { id: 'third-parties', number: '5', title: 'Third-Party Service Processors' },
    { id: 'data-security', number: '6', title: 'Data Security and Safeguards' },
    { id: 'data-retention', number: '7', title: 'Data Retention Period' },
    { id: 'childrens-privacy', number: '8', title: "Children's Privacy Considerations" },
    { id: 'us-state-rights', number: '9', title: 'US State Privacy Rights (CCPA / VCDPA)' },
    { id: 'contact-privacy', number: '10', title: 'Contacting Us About Privacy' },
  ];

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    url: `${SITE_CONFIG.domain}/privacy-policy`,
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
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

        {/* 1. SKY BLUE HERO SECTION */}
        <div className="relative bg-[#0284C7] text-white rounded-2xl p-8 sm:p-12 overflow-hidden my-6 shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 text-white border border-white/30 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>LEGAL & DATA PROTECTION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-sky-100 leading-relaxed font-medium">
              Effective Date: 2025 | Last Updated: 2025
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-white font-semibold border-t border-white/20">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-white" /> SSL/TLS Encrypted Data Transport</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-white" /> Zero Data Broker Sales</span>
              <span className="flex items-center gap-1.5"><Eye className="w-4 h-4 text-white" /> Transparent Data Handling</span>
            </div>
          </div>
        </div>

        {/* LEGAL REVIEW NOTICE BOX */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed font-medium">
          <strong>Legal Review Notice:</strong> This website policy describes general data practices for TUTOR PROCTORED EXAMS. It is marked for formal review and confirmation by a qualified United States attorney prior to final commercial deployment. Registered entity details: <em>[Legal Operating Entity Name Pending Confirmation]</em>.
        </div>

        {/* TABLE OF CONTENTS (SKY BLUE ACCENT CARD) */}
        <div className="bg-sky-50/80 border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm my-6">
          <h2 className="text-base font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#0284C7]" />
            Document Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#0284C7]">
            {sectionsList.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="p-2 rounded-lg hover:bg-sky-100 transition-colors flex items-center gap-2 text-slate-700 hover:text-[#0284C7]"
              >
                <span className="w-5 h-5 rounded bg-[#0284C7] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {sec.number}
                </span>
                <span className="truncate">{sec.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* PRIVACY CONTENT SECTIONS */}
        <div className="space-y-8 text-slate-700 text-sm leading-relaxed">

          {/* SECTION 1 */}
          <section id="scope" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#0284C7]">1.</span> Scope and Introduction
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              <strong>TUTOR PROCTORED EXAMS</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates this business website serving visitors and learners in the United States and worldwide. This Privacy Policy explains how personal information provided during your visits or inquiry submissions is collected, processed, and protected.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="info-collected" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#0284C7]">2.</span> Information You Provide
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              We collect personal information that you voluntarily submit when filling out an inquiry or consultation form on our website.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-800 pt-1">
              <li className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <Database className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span><strong>Inquiry Form Data:</strong> Full Name, Email Address, Subject/Course Name, Service of Interest, and Message content.</span>
              </li>
              <li className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <Database className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span><strong>Technical Data:</strong> Basic browser parameters, IP address, and functional session preferences required for secure website operation.</span>
              </li>
            </ul>
          </section>

          {/* SECTION 3 (SKY BLUE CARD) */}
          <section id="how-used" className="bg-sky-50 border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#0284C7]">3.</span> How Information Is Used
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              Information submitted through our website is used strictly for legitimate business and educational purposes:
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-800 list-disc pl-5">
              <li>To respond to your inquiries and match you with educational specialists.</li>
              <li>To schedule and deliver requested 1-on-1 tutoring or study planning sessions.</li>
              <li>To maintain website security and prevent spam or unauthorized form submissions.</li>
            </ul>
            <p className="font-extrabold text-[#0284C7] text-xs pt-1">
              We do not sell, rent, or trade visitor email addresses or inquiry details to third-party marketers.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="cookies-analytics" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#0284C7]">4.</span> Cookies and Tracking Technologies
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Our website utilizes essential functional cookies necessary for site navigation, form security, and remembering your cookie consent preferences. We do not inject invasive cross-site advertising trackers or behavioral profiling cookies by default. For detailed information, review our{' '}
              <Link href="/cookie-policy" className="text-[#0284C7] font-bold underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* SECTION 5 */}
          <section id="third-parties" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#0284C7]">5.</span> Third-Party Service Processors
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              We may engage trusted third-party service providers (such as secure cloud hosting and transaction processing systems) strictly to perform infrastructure functions necessary to operate our website. These processors operate under confidential processing obligations.
            </p>
          </section>

          {/* SECTION 6 (SKY BLUE CARD) */}
          <section id="data-security" className="bg-sky-50 border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#0284C7]">6.</span> Data Security and Safeguards
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              We implement industry-standard administrative, physical, and technical controls—including SSL/TLS transport encryption—to protect your submitted information from unauthorized access, loss, or alteration.
            </p>
          </section>

          {/* SECTION 7 */}
          <section id="data-retention" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#0284C7]">7.</span> Data Retention Period
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Contact form inquiries and communication records are retained only as long as necessary to fulfill the requested educational support or maintain active student communication records.
            </p>
          </section>

          {/* SECTION 8 (LIGHT RED / CRIMSON CARD FOR HIGH-IMPORTANCE NOTICE) */}
          <section id="childrens-privacy" className="bg-[#991B1B] text-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl border border-red-500/30 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">8. Children&apos;s Privacy Considerations</h2>
            </div>
            <p className="text-rose-100 text-xs sm:text-sm leading-relaxed font-medium">
              Our website and educational services are directed to college students, adult learners, and working professionals aged 18 and older. We do not knowingly collect personal information from children under 13 without verified parental or legal guardian consent.
            </p>
          </section>

          {/* SECTION 9 (SKY BLUE CARD) */}
          <section id="us-state-rights" className="bg-sky-50 border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <span className="text-[#0284C7]">9.</span> US State Privacy Rights (CCPA / VCDPA)
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              Depending on your state of residence (e.g., California, Virginia, Colorado), you may possess specific statutory rights regarding your personal information, including the right to request access to or deletion of your personal inquiry records. To exercise these choices, contact us at our privacy address below.
            </p>
          </section>

          {/* SECTION 10 (CLEAR VIBRANT GREEN CARD) */}
          <section id="contact-privacy" className="bg-[#05B851] text-white rounded-2xl p-8 text-center space-y-4 shadow-xl max-w-3xl mx-auto scroll-mt-24">
            <div className="space-y-2 max-w-xl mx-auto">
              <span className="inline-block bg-white/20 text-white border border-white/30 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                10. Contacting Us About Privacy
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Privacy Compliance Contact
              </h2>
              <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                If you have questions regarding this Privacy Policy or wish to request data updates, please contact our privacy compliance inbox:
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/15 border border-white/30 text-xs font-mono text-white text-left max-w-md mx-auto space-y-1">
              <p><strong>Entity:</strong> TUTOR PROCTORED EXAMS</p>
              <p><strong>Email:</strong> {SITE_CONFIG.contactEmail}</p>
              <p><strong>Operating Region:</strong> Global / Worldwide (Online Educational Service)</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:info@tutorproctoredexams.com?subject=Privacy%20Policy%20Inquiry%20-%20TUTOR%20PROCTORED%20EXAMS"
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
          </section>

        </div>
      </PageContainer>
    </div>
  );
}
