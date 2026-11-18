import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  Award,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Lock,
  GraduationCap,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/utils';

export const metadata = {
  title: 'About Us | TUTOR PROCTORED EXAMS',
  description:
    'TUTOR PROCTORED EXAMS is an educational support brand serving students and professionals worldwide with personalized tutoring, exam preparation, and software technical guidance.',
  keywords: [
    'about TUTOR PROCTORED EXAMS',
    'educational support',
    'academic tutoring',
    'exam preparation',
    'academic integrity policy',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/about`,
  },
  openGraph: {
    title: 'About Us | TUTOR PROCTORED EXAMS',
    description:
      'Personalized tutoring, examination preparation and professional learning support to help you reach your goals.',
    url: `${SITE_CONFIG.domain}/about`,
    type: 'article',
  },
};

export default function AboutPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    description: SITE_CONFIG.description,
    knowsAbout: [
      'Academic Tutoring',
      'Exam Preparation',
      'Professional Certifications',
      'Proctoring Software Technical Guidance',
    ],
  };

  const coreValues = [
    {
      title: 'Integrity',
      description: 'We promote honest learning and independent examination performance.',
      icon: ShieldCheck,
    },
    {
      title: 'Personalized Support',
      description: "We adapt our guidance to each learner's needs and goals.",
      icon: HeartHandshake,
    },
    {
      title: 'Quality Education',
      description: 'We provide clear instruction and useful learning resources.',
      icon: Award,
    },
    {
      title: 'Professionalism',
      description: 'We value respect, reliability and effective communication.',
      icon: GraduationCap,
    },
    {
      title: 'Continuous Improvement',
      description: 'We encourage consistent learning and lifelong development.',
      icon: Sparkles,
    },
  ];

  const approachSteps = [
    {
      step: '01',
      title: 'Understand Your Goals',
      description: 'Identify your course, examination or certification objectives.',
    },
    {
      step: '02',
      title: 'Identify Learning Needs',
      description: 'Understand your knowledge gaps and preparation requirements.',
    },
    {
      step: '03',
      title: 'Provide Guidance',
      description: 'Recommend suitable tutoring, study resources and legitimate technical support.',
    },
    {
      step: '04',
      title: 'Build Confidence',
      description: 'Help you prepare effectively and complete your examinations independently.',
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-14 pt-2 pb-16">
      <JsonLd data={jsonLdData} />

      <PageContainer>
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* 1. HERO SECTION WITH CLEARLY VISIBLE HIGH-QUALITY ACADEMIC PHOTOGRAPH */}
        <div className="relative text-white rounded-2xl p-8 sm:p-14 overflow-hidden my-6 bg-[#0F172A]">
          {/* Clearly Visible University Library & Academic Space Background Photograph */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-75"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80')",
            }}
          ></div>

          {/* Subtle Side Overlay For High Text Readability */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent"></div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <Badge
              variant="blue"
              className="bg-[#2563EB] text-white border-blue-400 px-3.5 py-1 text-xs shadow-md font-bold"
            >
              ABOUT US
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              Prepare with Confidence. Learn with Integrity.
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Personalized tutoring, examination preparation and professional learning support to help you reach your goals.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/services" variant="primary" size="lg" icon={ArrowRight} className="bg-[#2563EB] hover:bg-[#1D4ED8] shadow-xl">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* 2. WHO WE ARE (Matching Reference Image) */}
        <div id="story" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm my-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Image Card Column */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg group">
              <img
                src="/students.jpg"
                alt="Students Studying Together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shrink-0 shadow-md overflow-hidden">
                  <img src="/tutor logo.jpg" alt="TUTOR PROCTORED EXAMS Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#0F172A] leading-tight">Academic Excellence</h4>
                  <span className="text-[11px] text-slate-500 font-medium">Global Educational Support</span>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#2563EB] border border-blue-100">
                <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>WHO WE ARE</span>
              </div>

              <p className="text-base sm:text-xl font-bold text-[#0F172A] leading-relaxed">
                <span className="text-[#2563EB] font-black">TUTOR PROCTORED EXAMS</span> provides students and working professionals with structured examination preparation, 1-on-1 subject tutoring, software technical guidance, and comprehensive study planning.
              </p>

              {/* 2x2 Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">Personalized 1-on-1 Tutoring</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">Software System Checks</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">PMP, CompTIA & Exam Prep</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">Independent Student Mastery</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3. OUR MISSION AND VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-white border border-brand-border rounded-2xl p-8 space-y-3 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-lightBlue text-brand-blue flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">Our Mission</h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                To make quality educational guidance and examination preparation accessible, practical and effective for every learner we serve.
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold text-brand-blue flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Accessible • Practical • Effective
            </div>
          </div>

          <div className="bg-white border border-brand-border rounded-2xl p-8 space-y-3 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-lightBlue text-brand-blue flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">Our Vision</h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                To become a trusted global educational support brand, helping learners build knowledge, confidence and achieve their academic and professional goals.
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold text-brand-blue flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Global Educational Trust
            </div>
          </div>
        </div>

        {/* 4. OUR CORE VALUES (5 VALUES) */}
        <div id="values" className="space-y-8 my-10">
          <SectionHeading
            badge="Core Principles"
            title="Our Core Values"
            subtitle="The foundational principles that guide every tutoring session and study resource."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-brand-border rounded-xl p-5 space-y-2 hover:border-brand-blue/40 transition-colors shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-lightBlue text-brand-blue flex items-center justify-center">
                    <ValIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy">{val.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. OUR APPROACH */}
        <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-6 my-10 shadow-sm">
          <SectionHeading
            badge="Process"
            title="How We Support Your Learning"
            subtitle="A clear four-step process to foster genuine subject mastery."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {approachSteps.map((app, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-brand-border bg-brand-bg space-y-2">
                <div className="text-2xl font-extrabold text-brand-blue/40 font-mono">{app.step}</div>
                <h3 className="text-base font-bold text-brand-navy">{app.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5.5 EDITORIAL & ACADEMIC STANDARDS */}
        <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 space-y-4 my-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-lightBlue text-brand-blue flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">Editorial &amp; Academic Expertise</h2>
              <span className="text-xs text-brand-muted font-medium">Subject Specialist Content Review</span>
            </div>
          </div>
          <p className="text-sm text-brand-muted leading-relaxed">
            All educational articles, software technical guides, and study materials published by <strong>TUTOR PROCTORED EXAMS</strong> are prepared and reviewed by qualified subject specialists, credentialed tutors, and technical advisors. We regularly update our technical compatibility guides to reflect official vendor documentation from Respondus Inc., ExamSoft/Turnitin, Honorlock Inc., Meazure Learning, Proctorio, PMI, CompTIA, AAPC, and ATI Testing.
          </p>
        </div>

        {/* 6. OUR COMMITMENT TO ACADEMIC INTEGRITY (LIGHT RED / CRIMSON BACKGROUND) */}
        <div id="integrity" className="bg-[#991B1B] text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl my-10 border border-red-500/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">Our Commitment to Academic Integrity</h2>
          </div>

          <p className="text-rose-100 text-xs sm:text-sm leading-relaxed font-medium">
            We believe in genuine learning and honest achievement. We provide educational guidance, tutoring, practice resources and legitimate technical support.
          </p>

          <p className="text-rose-100/90 text-xs sm:text-sm leading-relaxed font-medium">
            We do not provide proxy examination-taking, impersonation, cheating, unauthorized examination assistance or proctoring bypass services. Every learner is responsible for completing their own examinations.
          </p>

          <div className="pt-2">
            <Link
              href="/disclaimer"
              className="text-xs font-bold text-white underline underline-offset-4 hover:text-rose-200 inline-flex items-center gap-1 transition-colors"
            >
              <span>Read our full integrity commitment</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* 7. FINAL CALL TO ACTION (VIBRANT CLEAR GREEN BACKGROUND) */}
        <div className="bg-[#05B851] text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-xl max-w-2xl mx-auto my-10">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Ready to Take the Next Step?
          </h2>

          <p className="text-xs sm:text-sm text-white/95 max-w-md mx-auto leading-relaxed font-medium">
            Let us help you prepare, strengthen your knowledge and move closer to your goals.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/services" variant="primary" size="md" icon={ArrowRight} className="bg-white text-emerald-950 font-black hover:bg-emerald-50">
              Explore Our Services
            </Button>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border-2 border-white/90 bg-emerald-800/80 text-white font-extrabold text-xs sm:text-sm hover:bg-white hover:text-emerald-950 transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
