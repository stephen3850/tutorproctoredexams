'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Lock,
  Loader2,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FaqAccordion from '@/components/ui/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG, trackEvent } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    service: 'One-to-One Tutoring',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    message: '',
  });

  // Letter-by-letter Typewriter Headline Animation
  const fullHeadline = "WE'RE HERE TO HELP YOU MOVE FORWARD";
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting && typedText.length < fullHeadline.length) {
      timer = setTimeout(() => {
        setTypedText(fullHeadline.slice(0, typedText.length + 1));
      }, 65); // 65ms character typing speed
    } else if (!isDeleting && typedText.length === fullHeadline.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3500); // 3.5s visibility pause
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(fullHeadline.slice(0, typedText.length - 1));
      }, 35); // 35ms backspace speed
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, fullHeadline]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: true, success: false, error: null, message: '' });

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please fill in all required fields (Full Name, Email Address, and Message).',
        message: '',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please enter a valid email address.',
        message: '',
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          message: data.message,
        });

        // Analytics: Track Form Submit Success Event
        trackEvent('inquiry_form_submit_success', {
          service: formData.service,
        });

        setFormData({
          fullName: '',
          email: '',
          subject: '',
          service: 'One-to-One Tutoring',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.error || 'Failed to submit inquiry. Please try again.',
          message: '',
        });
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Network error. Please check your internet connection and try again.',
        message: '',
      });
    }
  };

  const contactFaqs = [
    {
      question: 'How can I enquire about tutoring or prep services?',
      answer: 'Simply fill out the inquiry form on this page selecting your service of interest, or send an email to info@tutorproctoredexams.com. Our team will review your goals and respond within 1 business day.',
    },
    {
      question: 'How do I choose the right service for my needs?',
      answer: 'If you are unsure whether you need 1-on-1 tutoring, study planning, or software technical guidance, select "General Enquiry" in the form. Our advisors will review your course or exam details and recommend a tailored package.',
    },
    {
      question: 'Can I ask about specific professional certification prep?',
      answer: 'Yes! We support candidates preparing for PMP, CompTIA (Security+, A+, Network+), AAPC Medical Coding, CPC, and CCMA exams. Mention your target certification in your message.',
    },
    {
      question: 'How will I receive a response to my inquiry?',
      answer: 'An educational specialist will reply directly to the email address provided in your enquiry with detailed information, scheduling options, and session availability.',
    },
    {
      question: 'What information should I include in my enquiry message?',
      answer: 'To help us assist you quickly, please mention your academic subject or certification, upcoming exam date (if known), specific topics needing attention, and preferred study schedule.',
    },
  ];

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE_CONFIG.name}`,
    description: 'Get in touch with TUTOR PROCTORED EXAMS for 1-on-1 tutoring, examination prep, and software guidance.',
    url: `${SITE_CONFIG.domain}/contact`,
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: SITE_CONFIG.name,
      email: SITE_CONFIG.contactEmail,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-10 pb-20">
      <JsonLd data={jsonLdData} />

      <PageContainer>
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        {/* 1. CINEMATIC 3D ANIMATED CONTACT HERO */}
        <div className="perspective-1000 my-6">
          <motion.div
            initial={false}
            animate={{
              scale: [1, 1.03, 1.03, 1, 1],
              z: [0, 25, 25, 0, 0],
              rotateX: [0, 1.2, 1.2, 0, 0],
              rotateY: [0, -1.2, -1.2, 0, 0],
              boxShadow: [
                '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                '0 25px 50px -12px rgba(5, 184, 81, 0.45)',
                '0 25px 50px -12px rgba(5, 184, 81, 0.45)',
                '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              ],
            }}
            transition={{
              duration: 5,
              times: [0, 0.3, 0.4, 0.7, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative bg-[#05B851] text-white rounded-2xl p-6 sm:p-10 overflow-hidden shadow-xl transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Background Texture Overlay */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"
              style={{ backgroundImage: "url('/students.jpg')" }}
            ></div>

            <div className="relative z-10 max-w-3xl space-y-3">
              <span className="inline-block bg-white/20 text-white border border-white/30 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm">
                Get in Touch
              </span>

              {/* Letter-by-letter Typewriter Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight min-h-[3rem] sm:min-h-[4rem] drop-shadow-md">
                <span>{typedText}</span>
                <span className="animate-pulse inline-block border-r-2 border-white ml-0.5 h-[0.9em] align-middle">&nbsp;</span>
              </h1>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium max-w-2xl">
                Have questions about tutoring, examination preparation, or professional certification support? Get in touch with our team.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-white font-semibold">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-white" /> 100% Confidential Inquiry</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-white" /> 24-Hour Response Time</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-white" /> Educational Specialists</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. FORM & CONTACT INFO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-5 bg-brand-navy text-white p-8 rounded-2xl space-y-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30">
                  Direct Details
                </Badge>
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Our educational support team serves college students and working professionals worldwide.
                </p>
              </div>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/20 text-brand-lightBlue flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-muted font-bold block">Inquiry Email</span>
                    <a
                      href={`mailto:${SITE_CONFIG.contactEmail}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-brand-lightBlue transition-colors"
                    >
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-muted font-bold block">WhatsApp Support</span>
                    <a
                      href={SITE_CONFIG.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-emerald-400 hover:underline"
                    >
                      {SITE_CONFIG.whatsappDisplay} (WhatsApp Direct)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/20 text-brand-lightBlue flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-muted font-bold block">Service Location</span>
                    <span className="text-xs text-brand-muted font-medium">Worldwide (Virtual & Online Service Globally)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/20 text-brand-lightBlue flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-muted font-bold block">Operating Hours</span>
                    <span className="text-xs text-brand-muted font-medium">{SITE_CONFIG.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust statement block */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-brand-muted">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <Lock className="w-4 h-4 text-brand-blue" />
                <span>Privacy & Communication Guarantee</span>
              </div>
              <p>
                We respect your privacy. All information submitted is utilized exclusively to respond to your inquiry and match you with educational tutors. View our{' '}
                <Link href="/privacy-policy" className="text-brand-lightBlue hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-brand-border space-y-6 shadow-sm">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-brand-navy">Send Us an Inquiry</h2>
              <p className="text-xs sm:text-sm text-brand-muted">
                Please complete the form below. An educational specialist will review your goals and reach out promptly.
              </p>
            </div>

            {/* Success Message Alert */}
            {status.success && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-2 animate-in fade-in">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Inquiry Submitted Successfully!</span>
                </div>
                <p className="text-xs leading-relaxed">{status.message}</p>
              </div>
            )}

            {/* Error Message Alert */}
            {status.error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-2.5 text-xs sm:text-sm animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Submission Error:</strong> {status.error}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Spam protection honeypot (hidden) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane.doe@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="One-to-One Tutoring">One-to-One Tutoring</option>
                    <option value="Academic Exam Preparation">Academic Exam Preparation</option>
                    <option value="Practice Questions and Mock Tests">Practice Questions and Mock Tests</option>
                    <option value="Professional Certification Preparation">Professional Certification Preparation</option>
                    <option value="Study Planning">Study Planning</option>
                    <option value="Examination Software Technical Guidance">Examination Software Technical Guidance</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Subject / Cert / Software (Optional)
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Respondus, PMP, Biology"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-brand-navy mb-1.5">
                  Message & Learning Goals <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your subject areas, upcoming exam dates, or technical questions..."
                  className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={status.loading}
                >
                  {status.loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending Inquiry...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit Inquiry <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>

              <p className="text-[11px] text-brand-muted text-center pt-2">
                Protected by spam detection. We will never share your personal information.
              </p>
            </form>
          </div>
        </div>

        {/* 3. FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-6 my-16 bg-white border border-brand-border rounded-2xl p-8 sm:p-10 shadow-sm">
          <SectionHeading
            badge="Contact FAQ"
            title="Frequently Asked Questions About Contacting Us"
            subtitle="Clear answers regarding inquiry turnaround times, session scheduling, and service coverage."
            centered
          />
          <FaqAccordion items={contactFaqs} />
        </div>
      </PageContainer>
    </div>
  );
}
