import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PageContainer from './PageContainer';
import { SITE_CONFIG } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F172A] text-white pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* 100% Fully Visible Map Background Image www.jpg */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/www.jpg')" }}
      ></div>

      {/* Minimal Light Shade Tint for High Contrast Text & 100% Map Visibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/30 to-[#0F172A]/50"></div>

      <PageContainer className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/80">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-md overflow-hidden">
                <img src="/tutor logo.jpg" alt="TUTOR PROCTORED EXAMS Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight drop-shadow-md">
                TUTOR PROCTORED EXAMS
              </span>
            </Link>

            <p className="text-slate-100 text-sm leading-relaxed max-w-sm drop-shadow-sm font-medium">
              An educational support platform delivering ethical 1-on-1 tutoring, examination prep, practice resources, and legitimate proctoring software technical guidance to students and professionals worldwide.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-white font-semibold drop-shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>100% Ethical Academic Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                <span>Serving Students & Professionals Worldwide</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-white font-bold drop-shadow-md">Follow Us:</span>
              <a
                href={process.env.NEXT_PUBLIC_TIKTOK_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-[#000000] hover:bg-[#111111] border border-slate-700/90 hover:border-[#FE2C55] text-white hover:text-[#FE2C55] flex items-center justify-center transition-all shadow-md group"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.04z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Core Services */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 drop-shadow-sm">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-100 font-medium drop-shadow-sm">
              <li>
                <Link href="/services" className="hover:text-blue-300 transition-colors">
                  All Educational Services
                </Link>
              </li>
              <li>
                <Link href="/services/one-on-one-tutoring" className="hover:text-blue-300 transition-colors">
                  1-on-1 Online Tutoring
                </Link>
              </li>
              <li>
                <Link href="/services/academic-exam-preparation" className="hover:text-blue-300 transition-colors">
                  Exam Prep & Coaching
                </Link>
              </li>
              <li>
                <Link href="/services/software-technical-guidance" className="hover:text-blue-300 transition-colors">
                  Software System Guidance
                </Link>
              </li>
              <li>
                <Link href="/services/practice-questions-mock-tests" className="hover:text-blue-300 transition-colors">
                  Practice Questions & Mocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Exam Directories */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 drop-shadow-sm">
              Exam Platforms
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-100 font-medium drop-shadow-sm">
              <li>
                <Link href="/exam-platforms" className="hover:text-blue-300 transition-colors">
                  Platform Directory Hub
                </Link>
              </li>
              <li>
                <Link href="/exam-platforms/respondus-lockdown-browser" className="hover:text-blue-300 transition-colors">
                  Respondus LockDown
                </Link>
              </li>
              <li>
                <Link href="/exam-platforms/examplify" className="hover:text-blue-300 transition-colors">
                  Examplify (ExamSoft)
                </Link>
              </li>
              <li>
                <Link href="/exam-platforms/honorlock" className="hover:text-blue-300 transition-colors">
                  Honorlock & ProctorU
                </Link>
              </li>
              <li>
                <Link href="/exam-platforms/proctorio" className="hover:text-blue-300 transition-colors">
                  Proctorio & Proctortrack
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Certifications & Help */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 drop-shadow-sm">
              Certifications & Help
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-100 font-medium drop-shadow-sm">
              <li>
                <Link href="/certifications" className="hover:text-blue-300 transition-colors">
                  PMP Prep & CompTIA
                </Link>
              </li>
              <li>
                <Link href="/certifications/cpc" className="hover:text-blue-300 transition-colors">
                  AAPC, CPC & CCMA
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-blue-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-blue-300 transition-colors">
                  Academic Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Academic Disclaimer Notice */}
        <div className="py-6 text-xs text-slate-200 font-medium leading-relaxed border-b border-slate-700/80 drop-shadow-sm">
          <p>
            <strong>Educational Disclaimer:</strong> TUTOR PROCTORED EXAMS provides legitimate 1-on-1 tutoring, study resources, test preparation strategies, and general technical compatibility guidance for examination software. We are an independent educational service and are not affiliated with, endorsed by, or sponsored by Respondus, ExamSoft/Examplify, Honorlock, ProctorU/Meazure Learning, Proctorio, Proctortrack, Examity, PSI, ATI, PMI, CompTIA, AAPC, NHA, or any third-party examination or software provider. All product and company names are trademarks™ or registered® trademarks of their respective holders.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-200 font-medium gap-4 drop-shadow-sm">
          <p>© {currentYear} TUTOR PROCTORED EXAMS. All rights reserved. Global Educational Services.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Support
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              Master FAQ
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Integrity Commitment
            </Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
