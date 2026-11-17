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
  Target,
  Compass,
  Layers,
  ChevronRight,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import ContentCard from '@/components/ui/ContentCard';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import TypewriterHeroHeadline from '@/components/ui/TypewriterHeroHeadline';
import ProcessStepsSequentialReveal from '@/components/ui/ProcessStepsSequentialReveal';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'TUTOR PROCTORED EXAMS | Professional Tutoring & Exam Preparation',
  description:
    'Discover professional tutoring, structured exam preparation, practice resources, professional certification guidance (PMP, CompTIA, AAPC, CPC, CCMA), and legitimate examination software technical support for students and professionals worldwide.',
};

export default function HomePage() {
  // 1. Examination Platforms Data with direct links
  const examPlatforms = [
    {
      name: 'Respondus LockDown Browser',
      category: 'Browser Security',
      description: 'Custom browser environment guidance, system requirements verification, and pre-test setup checklists.',
      href: '/exam-platforms/respondus-lockdown-browser',
    },
    {
      name: 'Examplify',
      category: 'Assessment Software',
      description: 'ExamSoft system preparation, computer requirements checks, and offline exam download troubleshooting.',
      href: '/exam-platforms/examplify',
    },
    {
      name: 'Honorlock',
      category: 'Chrome Extension Proctoring',
      description: 'Chrome extension technical preparation, webcam setup guidelines, and network stability advice.',
      href: '/exam-platforms/honorlock',
    },
    {
      name: 'ProctorU / Meazure Learning',
      category: 'Live & Automated Proctoring',
      description: 'Live technician connection advice, room setup standards, and equipment compatibility reviews.',
      href: '/exam-platforms/proctoru-meazure-learning',
    },
    {
      name: 'Proctorio',
      category: 'Automated Monitoring',
      description: 'Browser permission checks, audio/video testing advice, and system diagnostic preparation.',
      href: '/exam-platforms/proctorio',
    },
    {
      name: 'Proctortrack',
      category: 'Identity Verification',
      description: 'Biometric profile setup requirements, system hardware guidance, and environment scans.',
      href: '/exam-platforms/proctortrack',
    },
    {
      name: 'Examity',
      category: 'Live & Auto Testing',
      description: 'Proctoring level specifications, authentication steps, and system performance checks.',
      href: '/exam-platforms/examity',
    },
    {
      name: 'PSI',
      category: 'Licensing & Certification',
      description: 'PSI Bridge browser requirements, candidate handbook review, and test environment readiness.',
      href: '/exam-platforms/psi',
    },
    {
      name: 'ATI',
      category: 'Nursing Education (TEAS)',
      description: 'ATI TEAS examination format review, subject tutoring, and dry-run equipment guidance.',
      href: '/exam-platforms/ati',
    },
  ];

  // 2. Professional Certifications Data with direct links
  const certifications = [
    {
      name: 'PMP',
      fullName: 'Project Management Professional',
      body: 'PMI',
      description: 'Structured domain coaching across People, Process, and Business Environment pillars with practice questions.',
      href: '/certifications/pmp',
    },
    {
      name: 'CompTIA',
      fullName: 'Security+, A+, Network+',
      body: 'CompTIA',
      description: 'Foundational and intermediate IT infrastructure, cybersecurity, and networking certification preparation.',
      href: '/certifications/comptia',
    },
    {
      name: 'AAPC',
      fullName: 'Medical Coding Prep',
      body: 'AAPC',
      description: 'Comprehensive ICD-10-CM, CPT, and HCPCS coding exam preparation and codebook navigation guides.',
      href: '/certifications/aapc',
    },
    {
      name: 'CPC',
      fullName: 'Certified Professional Coder',
      body: 'AAPC',
      description: 'Specialized preparation for physician practice coding exams, operative reports, and guidelines.',
      href: '/certifications/cpc',
    },
    {
      name: 'CCMA',
      fullName: 'Certified Clinical Medical Assistant',
      body: 'NHA',
      description: 'Clinical procedures, phlebotomy, EKG fundamentals, and medical office management exam preparation.',
      href: '/certifications/ccma',
    },
  ];

  // 3. Core Educational Services
  const coreServices = [
    {
      title: 'One-to-One Tutoring',
      description: 'Direct instruction with qualified subject specialists focused on identifying knowledge gaps and clarifying complex concepts.',
      icon: Users,
      badge: 'Personalized Learning',
      href: '/services/one-to-one-tutoring',
    },
    {
      title: 'Academic Exam Preparation',
      description: 'Structured study plans, key concept reviews, and active recall practice for midterms, finals, and standardized tests.',
      icon: BookOpen,
      badge: 'Exam Readiness',
      href: '/services/academic-exam-preparation',
    },
    {
      title: 'Practice Questions & Mock Tests',
      description: 'Authentic style practice question banks, detailed answer explanations, and timed mock exam walkthroughs.',
      icon: FileCheck,
      badge: 'Practice Resources',
      href: '/services/practice-questions-mock-tests',
    },
    {
      title: 'Professional Certification Prep',
      description: 'Targeted domain review, question strategy, and practice modules for PMP, CompTIA, AAPC, CPC, and CCMA credentials.',
      icon: Award,
      badge: 'Career Credentials',
      href: '/services/professional-certification-preparation',
    },
    {
      title: 'Study Planning & Revision Support',
      description: 'Customized weekly study schedules, spaced repetition roadmaps, and time management coaching for busy students.',
      icon: Calendar,
      badge: 'Structured Study',
      href: '/services/study-planning',
    },
    {
      title: 'Software Technical Guidance',
      description: 'Legitimate guidance on hardware specs, OS updates, camera setup, and software troubleshooting prior to exam day.',
      icon: Cpu,
      badge: 'System Guidance',
      href: '/services/examination-software-technical-guidance',
    },
  ];

  // 4. Why Choose Us Benefits
  const benefits = [
    {
      title: 'Structured Learning Support',
      description: 'Clear, step-by-step preparation frameworks designed to make study time productive and focused.',
      icon: Layers,
    },
    {
      title: 'Personalized Study Guidance',
      description: 'Tailored academic support aligned with your course syllabus, exam platform, or certification goals.',
      icon: Target,
    },
    {
      title: 'Clear Learning Resources',
      description: 'Comprehensive study notes, practice questions, and technical checklists without fluff.',
      icon: BookOpen,
    },
    {
      title: 'Flexible Support Options',
      description: 'Choose between 1-on-1 tutoring sessions, self-paced practice banks, or technical readiness checks.',
      icon: Compass,
    },
    {
      title: 'Professional Educational Approach',
      description: 'Ground in legitimate academic tutoring methods that build long-term understanding and confidence.',
      icon: ShieldCheck,
    },
    {
      title: 'Student-Focused Experience',
      description: 'Dedicated to helping college students and working professionals worldwide reach their educational milestones.',
      icon: Sparkles,
    },
  ];

  // 5. How It Works Steps
  const steps = [
    {
      step: '01',
      title: 'Explore Our Services',
      description: 'Review our directory of subject tutoring, certification prep, and proctoring software technical guides.',
    },
    {
      step: '02',
      title: 'Choose Your Learning Support',
      description: 'Select the specific subject area, certification roadmap, or system compatibility review you require.',
    },
    {
      step: '03',
      title: 'Get a Study Plan',
      description: 'Receive a structured study timeline and practice resources aligned with your target examination date.',
    },
    {
      step: '04',
      title: 'Work Toward Your Goals',
      description: 'Engage with our study materials and tutors to build the knowledge and confidence to test independently.',
    },
  ];

  // 6. Educational Articles & Resources
  const articles = [
    {
      title: 'How to Prepare for a Proctored Examination',
      description: 'Essential checklist covering room setup, identification verification, technical pre-checks, and mental preparation.',
      category: 'Exam Tips',
      slug: 'how-to-prepare-for-a-proctored-examination',
    },
    {
      title: 'Respondus LockDown Browser: Student Preparation Guide',
      description: 'Step-by-step guidance on system requirements, closing background applications, and troubleshooting webcams.',
      category: 'Software Guide',
      slug: 'respondus-lockdown-browser-student-guide',
    },
    {
      title: 'Understanding Professional Certification Exams',
      description: 'How knowledge domains are weighted on national exams and effective strategies for scenario-based questions.',
      category: 'Certifications',
      slug: 'understanding-professional-certification-exams',
    },
    {
      title: 'Effective Study Planning for College Students',
      description: 'Practical time-blocking, active recall, and spaced repetition methods for higher education success.',
      category: 'Study Habits',
      slug: 'effective-study-planning-college-students',
    },
    {
      title: 'How to Prepare for the PMP Certification',
      description: 'In-depth review of PMI exam syllabus changes, predictive vs. agile methodologies, and practice strategies.',
      category: 'PMP Prep',
      slug: 'pmp-certification-preparation-guide',
    },
  ];

  // 7. Master FAQs Data
  const faqs = [
    {
      question: 'What types of tutoring services do you provide?',
      answer:
        'We offer one-to-one online subject tutoring across undergraduate academic subjects, standardized test preparation, and technical guidance for software compatibility. All tutoring is focused on genuine subject understanding and skill development.',
    },
    {
      question: 'How do you support exam preparation?',
      answer:
        'Our exam preparation includes structured study planning, domain content reviews, practice question walkthroughs, and time management strategies to ensure students can take their exams independently and confidently.',
    },
    {
      question: 'What support is available for professional certifications?',
      answer:
        'We offer dedicated study roadmaps, practice questions, and syllabus reviews for high-demand certifications including PMP, CompTIA (Security+, A+, Network+), AAPC Medical Coding, CPC, and CCMA.',
    },
    {
      question: 'What is examination software technical guidance?',
      answer:
        'We provide legitimate technical advice on operating system compatibility, browser permissions, webcam/microphone setup, and resolving common software conflicts for platforms like Respondus, Examplify, Honorlock, and ProctorU before test day.',
    },
    {
      question: 'Do you take examinations for students or offer cheating services?',
      answer:
        'No. TUTOR PROCTORED EXAMS strictly adheres to academic integrity. We do NOT take exams for students, provide impersonation services, or assist in bypassing proctoring software. Our sole purpose is legitimate tutoring, preparation, and technical guidance.',
    },
    {
      question: 'How do I contact your team or get started?',
      answer:
        'You can get started by clicking "Get Started" or "Contact Our Team" to submit an inquiry through our Contact page. An educational specialist will connect with you to discuss your learning goals.',
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-14 pb-10">
      {/* 1. HERO SECTION WITH STUDENTS.JPG BACKGROUND */}
      <section className="relative text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-[#0F172A]">
        {/* Fully Visible Background Image: students .jpg */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-85"
          style={{ backgroundImage: "url('/students.jpg')" }}
        ></div>

        {/* Soft Dark Side Shade For Crisp Text Legibility */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/65 to-transparent"></div>

        <PageContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="blue" className="bg-[#2563EB] text-white border-blue-400 px-3.5 py-1 text-xs shadow-md">
                Global Educational Support &amp; Exam Readiness
              </Badge>

              <TypewriterHeroHeadline text="Prepare with Confidence. Learn with Integrity." />

              <h2 className="text-[#60A5FA] text-xs sm:text-sm lg:text-base font-bold tracking-wide">
                Professional Online Tutoring and Proctored Examination Preparation
              </h2>

              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed max-w-2xl text-balance drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] font-normal">
                Access personalized tutoring, structured examination preparation and practical technical guidance designed to help you develop knowledge, strengthen your skills and approach examinations with confidence. At <strong>TUTOR PROCTORED EXAMS</strong>, we empower students internationally with professional 1-on-1 tutoring, structured examination preparation, comprehensive study guidance, and pre-test technical support. Whether you are preparing for online proctored exams or navigating assessment platforms such as ProctorU, Proctorio, Respondus LockDown Browser, Examplify, or Honorlock, our educational specialists ensure you build the subject mastery and system readiness to achieve your goals independently.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/services" variant="primary" size="lg" icon={ArrowRight} className="bg-[#2563EB] hover:bg-[#1D4ED8] shadow-xl">
                  Explore Our Learning Support
                </Button>
                <Link
                  href="/exam-platforms"
                  className="px-6 py-3 rounded-xl border-2 border-white/90 bg-[#0F172A]/70 text-white font-extrabold text-sm sm:text-base hover:bg-white hover:text-[#0F172A] transition-all backdrop-blur-md shadow-lg text-center flex items-center justify-center gap-2"
                >
                  <span>Explore Exam Platforms</span>
                </Link>
              </div>

              {/* Trust Intro Line */}
              <div className="pt-6 flex items-center gap-3 text-xs sm:text-sm text-white font-semibold border-t border-white/30 drop-shadow-md">
                <ShieldCheck className="w-5 h-5 text-[#356AE6] shrink-0" />
                <span>Global Academic Tutoring • Proctoring Software Guidance • International Student Support</span>
              </div>
            </div>

            {/* Visual Hero Feature Box (Matching Reference Image) */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
                <div className="flex items-center gap-3.5 border-b border-white/15 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center font-black text-sm text-white shadow-inner shrink-0">
                    TPE
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-white leading-tight drop-shadow-sm">
                      Ethical Learning Commitment
                    </h4>
                    <span className="text-xs text-slate-300 font-medium block mt-0.5">
                      Global Educational Support
                    </span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm font-bold text-white">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/50 bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="drop-shadow-sm">1-on-1 Tutoring &amp; Subject Concept Mastery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/50 bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="drop-shadow-sm">Technical Setup for ProctorU, Proctorio &amp; Respondus</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/50 bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="drop-shadow-sm">Study Guidance for Online Proctored Exams</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/50 bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="drop-shadow-sm">Global Support for University &amp; Certification Candidates</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="text-xs font-extrabold text-white underline underline-offset-4 inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors"
                  >
                    <span>Read our integrity pledge</span>
                    <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 2. EXAMINATION PLATFORMS SECTION */}
      <section>
        <PageContainer>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <SectionHeading
              badge="Platform Directory"
              title="EXAM PLATFORMS WE SUPPORT"
              subtitle="Explore preparation resources and guidance for widely used examination and proctoring platforms."
            />
            <Button href="/exam-platforms" variant="outline" size="md" icon={ArrowRight}>
              View Platform Directory
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examPlatforms.map((platform, idx) => (
              <ContentCard
                key={idx}
                title={platform.name}
                description={platform.description}
                badge={platform.category}
                icon={Cpu}
                href={platform.href}
                actionText="Learn More"
              />
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-orange-100/90 border border-orange-300 text-amber-950 text-xs text-center font-medium shadow-sm">
            <p>
              <strong>Disclaimer:</strong> TUTOR PROCTORED EXAMS provides independent technical guidance and study resources. We are not affiliated with or endorsed by any third-party proctoring software vendors.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* 3. PROFESSIONAL CERTIFICATIONS SECTION */}
      <section className="bg-white py-8 sm:py-10 border-y border-brand-border">
        <PageContainer>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <SectionHeading
              badge="Career Advancement"
              title="PREPARE FOR YOUR NEXT PROFESSIONAL MILESTONE"
              subtitle="Specialized domain coaching, exam syllabus breakdowns, and practice question reviews for leading professional credentials."
            />
            <Button href="/certifications" variant="outline" size="md" icon={ArrowRight}>
              All Certifications
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <ContentCard
                key={idx}
                title={`${cert.name} — ${cert.fullName}`}
                description={cert.description}
                badge={cert.body}
                icon={Award}
                href={cert.href}
                actionText="Explore Certification"
              />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 4. OUR SERVICES SECTION */}
      <section>
        <PageContainer>
          <SectionHeading
            badge="What We Offer"
            title="OUR EDUCATIONAL SERVICES"
            subtitle="Professional 1-on-1 tutoring, structured exam preparation, and software technical guidance designed to support independent learning and academic integrity."
            centered
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <ContentCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
                badge={service.badge}
                href={service.href}
                actionText="View service details"
              />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 5. WHY CHOOSE US (Matching Reference Image) */}
      <section className="relative bg-[#05B851] text-white py-12 sm:py-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden shadow-2xl my-8">
        {/* World Map Graphic Background Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "url('/www.jpg')" }}
        ></div>

        <PageContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: World Map Illustration */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-inner flex items-center justify-center">
                <img
                  src="/www.jpg"
                  alt="Global Academic Network Map"
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
            </div>

            {/* Right Column: Text & 3 Key Metrics */}
            <div className="lg:col-span-7 space-y-6 text-white">
              <div className="inline-block border border-white/40 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-md text-xs font-black uppercase tracking-widest text-white">
                WHY CHOOSE US
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Students Worldwide Through Dedicated Academic Support
              </h2>

              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium max-w-2xl">
                Our dedicated team of educational specialists provides reliable 1-on-1 tutoring, study planning, practice question walkthroughs, and technical readiness support to help you achieve your academic goals independently.
              </p>

              {/* 3 Metrics Row */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/20">
                <div className="space-y-1">
                  <div className="w-8 h-1 bg-orange-400 rounded-full mb-2" />
                  <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
                  <div className="text-xs sm:text-sm font-bold text-white/90">Ethical Standard</div>
                </div>

                <div className="space-y-1">
                  <div className="w-8 h-1 bg-orange-400 rounded-full mb-2" />
                  <div className="text-3xl sm:text-4xl font-black text-white">150+</div>
                  <div className="text-xs sm:text-sm font-bold text-white/90">Subject Areas</div>
                </div>

                <div className="space-y-1">
                  <div className="w-8 h-1 bg-orange-400 rounded-full mb-2" />
                  <div className="text-3xl sm:text-4xl font-black text-white">24/7</div>
                  <div className="text-xs sm:text-sm font-bold text-white/90">Study Assistance</div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 6. HOW IT WORKS */}
      <section>
        <PageContainer>
          <SectionHeading
            badge="Simple Process"
            title="HOW IT WORKS"
            subtitle="A straightforward four-step approach to achieving your educational and certification goals."
            centered
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-brand-border shadow-md">
              <img
                src="/how.jpg"
                alt="How TUTOR PROCTORED EXAMS Works"
                className="w-full h-full object-cover"
              />
            </div>

            <ProcessStepsSequentialReveal steps={steps} />
          </div>
        </PageContainer>
      </section>

      {/* 7. 24/7 LEARNING SUPPORT & TECHNICAL PREPARATION SECTION */}
      <section className="my-10">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xl border border-slate-200">
            {/* Left Column: Green Overlay Image with Testimonial (90% Image Visibility) */}
            <div className="lg:col-span-6 relative p-8 sm:p-12 text-white min-h-[380px] flex flex-col justify-between bg-[#05B851] overflow-hidden">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: "url('/students.jpg')" }}
              ></div>
              <div className="absolute inset-0 z-0 bg-[#05B851]/65 mix-blend-multiply"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded bg-white/20 flex items-center justify-center text-white font-serif text-3xl font-black mb-6 shadow-sm">
                  “
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <p className="text-base sm:text-lg font-bold italic leading-relaxed text-white drop-shadow-sm">
                  &quot;The 1-on-1 tutoring sessions and practice question walkthroughs gave me complete confidence for my exam. Their technical guidance also ensured my webcam and software were fully prepped before test day.&quot;
                </p>
                <div>
                  <h4 className="font-extrabold text-white text-base">Michael B.</h4>
                  <span className="text-xs text-emerald-100 font-bold uppercase tracking-wider">Certified Learner</span>
                </div>
              </div>
            </div>

            {/* Right Column: White Box with Heading & Contact Button */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-12 flex flex-col justify-center space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-[1.2]">
                Need Help Preparing For Your Next Exam? We Are Available For Your Assistance 24/7.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our educational specialists are here to help you unlock your academic potential and build true subject mastery. Whether you need 1-on-1 subject tutoring, practice questions, or software technical preparation, we are available 24/7 to support your learning journey.
              </p>

              <div>
                <a
                  href="https://wa.me/254711882470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#05B851] hover:bg-emerald-600 text-white font-extrabold text-sm px-7 py-3.5 inline-flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4 text-white stroke-[3]" />
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 8. FAQ SECTION */}
      <section>
        <PageContainer>
          <SectionHeading
            badge="Got Questions?"
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Clear answers about our tutoring services, certification coaching, software guidance, and ethical standards."
            centered
            className="mb-6"
          />

          <FaqAccordion items={faqs} />
        </PageContainer>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="bg-emerald-700 text-white py-6 sm:py-8 rounded-2xl mx-4 sm:mx-6 lg:mx-8 shadow-xl">
        <PageContainer>
          <div className="max-w-xl mx-auto text-center space-y-3">
            <span className="inline-block bg-emerald-800/80 text-emerald-100 border border-emerald-400/40 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
              Start Your Preparation Today
            </span>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              READY TO TAKE THE NEXT STEP?
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-md mx-auto font-medium">
              Find the educational support and preparation resources that match your goals.
            </p>

            <div className="pt-2 flex items-center justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md hover:bg-emerald-50 transition-all flex items-center gap-2"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-950 stroke-[3]" />
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
