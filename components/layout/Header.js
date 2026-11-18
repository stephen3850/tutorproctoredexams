'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  Users,
  BookOpen,
  FileCheck,
  Award,
  Calendar,
  Cpu,
  HelpCircle,
  Layers,
  Clock,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import PageContainer from './PageContainer';
import { SITE_CONFIG, BLOGS_ENABLED, SERVICES_ENABLED } from '@/lib/utils';

// COMPACT DROPDOWN - 12 SERVICES
const ALL_12_SERVICES = [
  {
    title: '1-on-1 Online Tutoring',
    href: '/services/one-on-one-tutoring',
    icon: Users,
  },
  {
    title: 'Academic Exam Preparation',
    href: '/services/academic-exam-preparation',
    icon: BookOpen,
  },
  {
    title: 'Practice Questions & Mock Tests',
    href: '/services/practice-questions-mock-tests',
    icon: FileCheck,
  },
  {
    title: 'Professional Certification Prep',
    href: '/services/professional-certification-prep',
    icon: Award,
  },
  {
    title: 'Study Planning & Revision Support',
    href: '/services/study-planning-revision-support',
    icon: Calendar,
  },
  {
    title: 'Software Technical Guidance',
    href: '/services/software-technical-guidance',
    icon: Cpu,
  },
  {
    title: 'Online Course/Class Help',
    href: '/services/online-course-help',
    icon: GraduationCap,
  },
  {
    title: 'Online Exam Help',
    href: '/services/online-exam-help',
    icon: HelpCircle,
  },
  {
    title: 'Proctored/Certifications Exam',
    href: '/services/proctored-certification-exams',
    icon: ShieldCheck,
  },
  {
    title: 'GED Exam Preparation',
    href: '/services/ged',
    icon: Layers,
  },
  {
    title: 'HESI A2 Exam Preparation',
    href: '/services/hesi',
    icon: Clock,
  },
  {
    title: 'ATI TEAS Exam Preparation',
    href: '/services/teas',
    icon: Sparkles,
  },
];

// ALL 13 EXAM PLATFORMS & OPTIONS WITH OFFICIAL LOGOS
const ALL_13_PLATFORMS = [
  { name: 'Respondus LockDown Browser', href: '/exam-platforms/respondus-lockdown-browser', logo: '/logos/respondus.svg' },
  { name: 'Examplify (ExamSoft)', href: '/exam-platforms/examplify', logo: '/logos/examplify.svg' },
  { name: 'Honorlock', href: '/exam-platforms/honorlock', logo: '/logos/honorlock.svg' },
  { name: 'ProctorU / Meazure Learning', href: '/exam-platforms/proctoru-meazure-learning', logo: '/logos/proctoru.svg' },
  { name: 'Proctorio', href: '/exam-platforms/proctorio', logo: '/logos/proctorio.svg' },
  { name: 'Proctortrack', href: '/exam-platforms/proctortrack', logo: '/logos/proctortrack.svg' },
  { name: 'Examity', href: '/exam-platforms/examity', logo: '/logos/examity.svg' },
  { name: 'PSI Bridge', href: '/exam-platforms/psi', logo: '/logos/psi.svg' },
  { name: 'ATI Testing (TEAS)', href: '/exam-platforms/ati', logo: '/logos/ati.svg' },
  { name: 'GED Exam Preparation', href: '/services/ged', logo: '/logos/ged.svg' },
  { name: 'HESI A2 Exam Preparation', href: '/services/hesi', logo: '/logos/hesi.svg' },
  { name: 'ATI TEAS Exam Preparation', href: '/services/teas', logo: '/logos/teas.svg' },
  { name: 'Mock Tests & Practice Exams', href: '/services/practice-questions-mock-tests', logo: '/logos/mock.svg' },
];

// ALL 10 CERTIFICATIONS WITH COLORFUL ACCENTS & LOGOS
const ALL_10_CERTIFICATIONS = [
  { name: 'PMP Certification Prep', href: '/certifications/pmp', logo: '/logos/pmp.svg', accent: 'bg-[#2563EB]/10 text-[#2563EB]' },
  { name: 'CAPM Associate in PM', href: '/certifications/capm', logo: '/logos/capm.svg', accent: 'bg-[#4F46E5]/10 text-[#4F46E5]' },
  { name: 'CompTIA (Security+, A+, Net+)', href: '/certifications/comptia', logo: '/logos/comptia.svg', accent: 'bg-[#0891B2]/10 text-[#0891B2]' },
  { name: 'SHRM-CP / SHRM-SCP HR', href: '/certifications/shrm', logo: '/logos/shrm.svg', accent: 'bg-[#7C3AED]/10 text-[#7C3AED]' },
  { name: 'Real Estate License Prep', href: '/certifications/real-estate', logo: '/logos/real-estate.svg', accent: 'bg-[#059669]/10 text-[#059669]' },
  { name: 'AAPC Medical Coding', href: '/certifications/aapc', logo: '/logos/aapc.svg', accent: 'bg-[#DB2777]/10 text-[#DB2777]' },
  { name: 'CPC Certified Coder', href: '/certifications/cpc', logo: '/logos/cpc.svg', accent: 'bg-[#9333EA]/10 text-[#9333EA]' },
  { name: 'CCMA Clinical Assistant', href: '/certifications/ccma', logo: '/logos/ccma.svg', accent: 'bg-[#0284C7]/10 text-[#0284C7]' },
  { name: 'CNA Nursing Assistant', href: '/certifications/cna', logo: '/logos/cna.svg', accent: 'bg-[#16A34A]/10 text-[#16A34A]' },
  { name: 'CPhT Pharmacy Technician', href: '/certifications/cpht', logo: '/logos/cpht.svg', accent: 'bg-[#EA580C]/10 text-[#EA580C]' },
];

// STUDY RESOURCES DROPDOWN - 13 RESOURCES IN TWO LABELED GROUPS WITH LOGOS
const STUDY_RESOURCES_GROUPS = [
  {
    category: 'Certification Study Guides',
    items: [
      { name: 'PMP Certification Prep', href: '/study-resources/pmp', logo: '/logos/pmp.svg' },
      { name: 'CAPM Associate in PM', href: '/study-resources/capm', logo: '/logos/capm.svg' },
      { name: 'CompTIA (Security+, A+, Net+)', href: '/study-resources/comptia', logo: '/logos/comptia.svg' },
      { name: 'SHRM-CP / SHRM-SCP HR', href: '/study-resources/shrm', logo: '/logos/shrm.svg' },
      { name: 'Real Estate License Prep', href: '/study-resources/real-estate', logo: '/logos/real-estate.svg' },
      { name: 'AAPC Medical Coding', href: '/study-resources/aapc', logo: '/logos/aapc.svg' },
      { name: 'CPC Certified Coder', href: '/study-resources/cpc', logo: '/logos/cpc.svg' },
      { name: 'CCMA Clinical Assistant', href: '/study-resources/ccma', logo: '/logos/ccma.svg' },
      { name: 'CNA Nursing Assistant', href: '/study-resources/cna', logo: '/logos/cna.svg' },
      { name: 'CPhT Pharmacy Technician', href: '/study-resources/cpht', logo: '/logos/cpht.svg' },
    ],
  },
  {
    category: 'Learning Resources',
    items: [
      { name: 'Learning Guides & Library', href: '/study-resources/learning-guides-library', logo: '/logos/library.svg' },
      { name: 'Exam Preparation FAQ', href: '/study-resources/exam-preparation-faq', logo: '/logos/faq.svg' },
      { name: 'System Setup Guidance', href: '/study-resources/system-setup-guidance', logo: '/logos/setup.svg' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Automatic Color-Changing Background (Red -> Deep Navy -> Royal Blue -> Dark Green -> Purple -> Repeat)
  const barColors = ['bg-[#DC2626]', 'bg-[#0F172A]', 'bg-[#2563EB]', 'bg-[#047857]', 'bg-[#7C3AED]'];
  const [currentColorIdx, setCurrentColorIdx] = useState(0);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColorIdx((prev) => (prev + 1) % barColors.length);
    }, 4000); // Transitions background color every 4 seconds
    return () => clearInterval(colorInterval);
  }, [barColors.length]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/90 transition-shadow duration-300 shadow-sm">
      {/* Top Announcement Bar (Smooth Color-Cycling Ticker) */}
      <div className={`text-white text-xs py-2 px-4 border-b border-black/10 font-semibold shadow-sm transition-colors duration-1000 ease-in-out ${barColors[currentColorIdx]} overflow-hidden`}>
        <div className="relative w-full overflow-hidden">
          <div className="animate-ticker flex items-center gap-12 whitespace-nowrap">
            {/* Ticker Set 1 */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                <span className="font-bold text-white text-[11px] sm:text-xs">
                  Ethical Educational Support & Proctoring Software Technical Guidance for Students Worldwide
                </span>
              </div>
              <span className="text-white/60">|</span>
              <div className="flex items-center gap-1.5 text-white text-[11px] font-bold">
                <Clock className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </div>
              <span className="text-white/60">|</span>
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-extrabold transition-colors inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-emerald-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white fill-white/20" />
                <span>Contact Our Team</span>
              </a>
              <span className="text-white/60">|</span>
              <Link
                href="/disclaimer"
                className="text-white hover:text-blue-200 transition-colors font-bold"
              >
                Academic Disclaimer
              </Link>
            </div>

            {/* Ticker Set 2 (Duplicate for Seamless Loop) */}
            <div className="flex items-center gap-6 shrink-0" aria-hidden="true">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span className="font-bold text-white text-[11px] sm:text-xs">
                  Ethical Educational Support & Proctoring Software Technical Guidance for Students Worldwide
                </span>
              </div>
              <span className="text-white/60">|</span>
              <div className="flex items-center gap-1.5 text-white text-[11px] font-bold">
                <Clock className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </div>
              <span className="text-white/60">|</span>
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-extrabold transition-colors inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-emerald-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white fill-white/20" />
                <span>Contact Our Team</span>
              </a>
              <span className="text-white/60">|</span>
              <Link
                href="/disclaimer"
                className="text-white hover:text-blue-200 transition-colors font-bold"
              >
                Academic Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="bg-white">
        <PageContainer className="flex items-center justify-between h-16 sm:h-20">

          {/* BRAND LOGO AREA */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
            aria-label="TUTOR PROCTORED EXAMS Home Page"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-white shadow-sm group-hover:bg-[#2563EB] transition-colors duration-200 shrink-0 overflow-hidden">
              <img src="/tutor logo.jpg" alt="TUTOR PROCTORED EXAMS Logo" className="w-full h-full object-cover" />
            </div>

            <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-0.5 shrink-0" />

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-black text-sm sm:text-base lg:text-lg text-[#0F172A] tracking-tight whitespace-nowrap">
                  TUTOR PROCTORED
                </span>
                <span className="font-black text-sm sm:text-base lg:text-lg text-[#2563EB] tracking-tight whitespace-nowrap">
                  EXAMS
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold block leading-none mt-1">
                ACADEMIC & CERTIFICATION SUPPORT
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION ITEMS */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* HOME */}
            <Link
              href="/"
              className={`font-bold text-xs xl:text-sm px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                pathname === '/'
                  ? 'text-[#2563EB] bg-blue-50/80 font-extrabold'
                  : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* ABOUT US DROPDOWN */}
            <div className="relative group">
              <Link
                href="/about"
                className={`font-bold text-xs xl:text-sm px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                  pathname.startsWith('/about')
                    ? 'text-[#2563EB] bg-blue-50/80 font-extrabold'
                    : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#2563EB] font-bold transition-transform duration-200 group-hover:rotate-180 shrink-0" />
              </Link>

              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
                <div className="w-60 bg-white border border-slate-200 rounded-xl p-2 shadow-xl space-y-0.5">
                  <Link href="/about#story" className="block text-xs font-semibold text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                    Our Story & Purpose
                  </Link>
                  <Link href="/about#integrity" className="block text-xs font-semibold text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                    Academic Integrity Pledge
                  </Link>
                  <Link href="/about#values" className="block text-xs font-semibold text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                    Core Values & Mission
                  </Link>
                </div>
              </div>
            </div>

            {/* OUR SERVICES - CONDITIONALLY RENDERED */}
            {SERVICES_ENABLED && (
              <div className="relative group">
                <Link
                  href="/services"
                  className={`font-bold text-xs xl:text-sm px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                    pathname.startsWith('/services')
                      ? 'text-[#2563EB] bg-blue-50/80 font-extrabold'
                      : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50'
                  }`}
                >
                  <span>Our Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#2563EB] font-bold transition-transform duration-200 group-hover:rotate-180 shrink-0" />
                </Link>

                <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="w-[260px] max-h-[360px] overflow-y-auto bg-white border border-slate-200 rounded-xl p-1 shadow-2xl divide-y divide-slate-100/60 scrollbar-none">
                    {ALL_12_SERVICES.map((serv, idx) => {
                      const ServIcon = serv.icon;
                      return (
                        <Link
                          key={idx}
                          href={serv.href}
                          className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-blue-50/90 hover:text-[#2563EB] transition-colors group/item"
                        >
                          <div className="w-4.5 h-4.5 rounded bg-[#2563EB] flex items-center justify-center text-white shrink-0 group-hover/item:scale-105 transition-transform p-1">
                            <ServIcon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-[11px] font-bold text-[#0F172A] group-hover/item:text-[#2563EB] transition-colors whitespace-nowrap leading-none">
                            {serv.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* EXAM PLATFORMS DROPDOWN - ALL 13 ITEMS WITH OFFICIAL LOGOS */}
            <div className="relative group">
              <Link
                href="/exam-platforms"
                className={`font-bold text-xs xl:text-sm px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                  pathname.startsWith('/exam-platforms')
                    ? 'text-[#2563EB] bg-blue-50/80 font-extrabold'
                    : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50'
                }`}
              >
                <span>Exam Platforms</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#2563EB] font-bold transition-transform duration-200 group-hover:rotate-180 shrink-0" />
              </Link>

              <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
                <div className="w-[280px] max-h-[420px] overflow-y-auto bg-white border border-slate-200 rounded-xl p-1 shadow-2xl divide-y divide-slate-100/60 scrollbar-none">
                  {ALL_13_PLATFORMS.map((plat, idx) => (
                    <Link
                      key={idx}
                      href={plat.href}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-blue-50/90 hover:text-[#2563EB] transition-colors group/item"
                    >
                      <div className="w-6 h-6 rounded overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/80">
                        <img
                          src={plat.logo}
                          alt={`${plat.name} logo`}
                          className="w-full h-full object-contain p-0.5"
                        />
                      </div>
                      <span className="text-[11px] font-bold text-[#0F172A] group-hover/item:text-[#2563EB] transition-colors whitespace-nowrap leading-none">
                        {plat.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS DROPDOWN - COLORFUL ACCENTS & LOGOS */}
            <div className="relative group">
              <Link
                href="/certifications"
                className={`font-bold text-xs xl:text-sm px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                  pathname.startsWith('/certifications')
                    ? 'text-[#2563EB] bg-blue-50/80 font-extrabold'
                    : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50'
                }`}
              >
                <span>Certifications</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#2563EB] font-bold transition-transform duration-200 group-hover:rotate-180 shrink-0" />
              </Link>

              <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
                <div className="w-[280px] max-h-[420px] overflow-y-auto bg-white border border-slate-200 rounded-xl p-1.5 shadow-2xl divide-y divide-slate-100/60 scrollbar-none">
                  {ALL_10_CERTIFICATIONS.map((cert, idx) => {
                    const isActiveCert = pathname === cert.href;
                    return (
                      <Link
                        key={idx}
                        href={cert.href}
                        className={`flex items-center gap-2.5 py-1.5 px-2 rounded-md transition-colors group/item ${
                          isActiveCert
                            ? 'bg-blue-50 text-[#2563EB] font-extrabold'
                            : 'hover:bg-blue-50/80 hover:text-[#2563EB]'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/80 ${cert.accent}`}>
                          <img
                            src={cert.logo}
                            alt={`${cert.name} logo`}
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                        <span className="text-[11px] font-bold text-[#0F172A] group-hover/item:text-[#2563EB] transition-colors whitespace-nowrap leading-none">
                          {cert.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STUDY RESOURCES DROPDOWN (13 RESOURCES IN TWO LABELED GROUPS WITH LOGOS) */}
            <div className="relative group">
              <Link
                href="/study-resources"
                className={`font-bold text-xs xl:text-sm px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                  pathname.startsWith('/study-resources')
                    ? 'text-[#2563EB] bg-blue-50/80 font-extrabold'
                    : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50'
                }`}
              >
                <span>Study Resources</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#2563EB] font-bold transition-transform duration-200 group-hover:rotate-180 shrink-0" />
              </Link>

              <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
                <div className="w-[300px] max-h-[440px] overflow-y-auto bg-white border border-slate-200 rounded-xl p-1.5 shadow-2xl space-y-2 scrollbar-none">
                  {STUDY_RESOURCES_GROUPS.map((grp, gIdx) => (
                    <div key={gIdx} className="space-y-0.5">
                      <div className="text-[10px] uppercase font-black tracking-wider text-[#2563EB] px-2 py-1 bg-blue-50/70 rounded">
                        {grp.category}
                      </div>
                      <div className="space-y-0.5">
                        {grp.items.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            className="flex items-center gap-2.5 py-1 px-2 rounded-md hover:bg-blue-50/90 hover:text-[#2563EB] transition-colors group/item"
                          >
                            <div className="w-5 h-5 rounded overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/80">
                              <img
                                src={sub.logo}
                                alt={`${sub.name} logo`}
                                className="w-full h-full object-contain p-0.5"
                              />
                            </div>
                            <span className="text-[11px] font-bold text-[#0F172A] group-hover/item:text-[#2563EB] transition-colors whitespace-nowrap leading-none">
                              {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BLOG - CONDITIONALLY RENDERED */}
            {BLOGS_ENABLED && (
              <Link
                href="/blog"
                className={`font-bold text-xs xl:text-sm px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  pathname.startsWith('/blog')
                    ? 'text-[#2563EB] bg-blue-50/80 font-extrabold'
                    : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50'
                }`}
              >
                Blog
              </Link>
            )}

            {/* FAQ */}
            <Link
              href="/faq"
              className={`font-bold text-xs xl:text-sm px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                pathname === '/faq'
                  ? 'text-[#2563EB] bg-blue-50/80 font-extrabold'
                  : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-50'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* RIGHT ACTION BUTTON: GET STARTED (LINKS TO WHATSAPP) */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 text-white stroke-[2.5]" />
            </a>
          </div>

          {/* MOBILE MENU HAMBURGER TOGGLE */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#0F172A] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#0F172A]" /> : <Menu className="w-6 h-6 text-[#0F172A]" />}
          </button>
        </PageContainer>
      </div>

      {/* MOBILE NAVIGATION DRAWER & COMPACT EXPANDABLE LIST */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl p-6 space-y-4 max-h-[85vh] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            <Link href="/" className="text-sm font-bold py-2.5 px-3 rounded-xl hover:bg-slate-50 text-[#0F172A]">
              Home
            </Link>

            <Link href="/about" className="text-sm font-bold py-2.5 px-3 rounded-xl hover:bg-slate-50 text-[#0F172A]">
              About Us
            </Link>

            {/* MOBILE OUR SERVICES COMPACT EXPANDABLE LIST */}
            {SERVICES_ENABLED && (
              <div className="space-y-1 border-y border-slate-100 py-2">
                <div className="text-xs font-black uppercase tracking-wider text-[#2563EB] px-3 py-1">
                  Our Services (12 Offerings)
                </div>

                <div className="pl-2 space-y-0.5">
                  {ALL_12_SERVICES.map((serv, idx) => (
                    <Link
                      key={idx}
                      href={serv.href}
                      className="block text-xs font-semibold py-2 px-3 rounded-lg text-[#0F172A] hover:bg-blue-50 hover:text-[#2563EB]"
                    >
                      {serv.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* MOBILE EXAM PLATFORMS COMPACT LIST (ALL 13 ITEMS) */}
            <div className="space-y-1 border-b border-slate-100 py-2">
              <div className="text-xs font-black uppercase tracking-wider text-[#2563EB] px-3 py-1">
                Exam Platforms (13 Options)
              </div>

              <div className="pl-2 space-y-0.5">
                {ALL_13_PLATFORMS.map((plat, idx) => (
                  <Link
                    key={idx}
                    href={plat.href}
                    className="block text-xs font-semibold py-2 px-3 rounded-lg text-[#0F172A] hover:bg-blue-50 hover:text-[#2563EB]"
                  >
                    {plat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* MOBILE CERTIFICATIONS COMPACT LIST (ALL 10 ITEMS) */}
            <div className="space-y-1 border-b border-slate-100 py-2">
              <div className="text-xs font-black uppercase tracking-wider text-[#2563EB] px-3 py-1">
                Certifications (10 Credentials)
              </div>

              <div className="pl-2 space-y-0.5">
                {ALL_10_CERTIFICATIONS.map((cert, idx) => (
                  <Link
                    key={idx}
                    href={cert.href}
                    className="block text-xs font-semibold py-2 px-3 rounded-lg text-[#0F172A] hover:bg-blue-50 hover:text-[#2563EB]"
                  >
                    {cert.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* MOBILE STUDY RESOURCES GROUPS */}
            <div className="space-y-1 border-b border-slate-100 py-2">
              <div className="text-xs font-black uppercase tracking-wider text-[#2563EB] px-3 py-1">
                Study Resources
              </div>

              {STUDY_RESOURCES_GROUPS.map((grp, gIdx) => (
                <div key={gIdx} className="pl-2 space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block px-2 pt-1">{grp.category}</span>
                  {grp.items.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className="block text-xs font-semibold py-1.5 px-3 rounded-lg text-[#0F172A] hover:bg-blue-50 hover:text-[#2563EB]"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {BLOGS_ENABLED && (
              <Link href="/blog" className="text-sm font-bold py-2.5 px-3 rounded-xl hover:bg-slate-50 text-[#0F172A]">
                Blog
              </Link>
            )}

            <Link href="/faq" className="text-sm font-bold py-2.5 px-3 rounded-xl hover:bg-slate-50 text-[#0F172A]">
              FAQ
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 px-6 rounded-lg font-bold text-sm shadow-sm text-center flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
