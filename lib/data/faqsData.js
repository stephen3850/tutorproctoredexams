export const MASTER_FAQS = [
  {
    category: 'General Questions',
    items: [
      {
        question: 'What is TUTOR PROCTORED EXAMS?',
        answer: 'TUTOR PROCTORED EXAMS is a professional educational support brand providing 1-on-1 online tutoring, structured examination preparation, practice question banks, professional certification coaching, and legitimate software technical guidance.',
      },
      {
        question: 'What educational services do you provide?',
        answer: 'We provide six core services: One-to-One Tutoring, Academic Exam Preparation, Practice Questions & Mock Tests, Professional Certification Preparation (PMP, CompTIA, AAPC, CPC, CCMA), Study Planning & Revision Support, and Examination Software Technical Guidance.',
      },
      {
        question: 'Who can access your educational support services?',
        answer: 'Our services are open to university students, adult learners, and working professionals worldwide preparing for undergraduate courses, high-stakes exams, or professional credentials.',
      },
      {
        question: 'How do I get started?',
        answer: 'Visit our Contact page or click "Get Started" to submit a brief inquiry about your course, examination platform, or target certification. An advisor will respond within 1 business day.',
      },
    ],
  },
  {
    category: 'Tutoring and Academic Support',
    items: [
      {
        question: 'Do you offer one-to-one tutoring?',
        answer: 'Yes. We offer personalized 1-on-1 virtual tutoring sessions tailored to your course syllabus, learning pace, and individual knowledge gaps.',
      },
      {
        question: 'Can I receive help understanding difficult subjects?',
        answer: 'Our tutors specialize in breaking down complex concepts across STEM, business, healthcare, nursing, computer science, and humanities subjects.',
      },
      {
        question: 'Can you help me develop a study plan?',
        answer: 'Yes. Our Study Planning service creates time-blocked daily study schedules, integrates active recall and spaced repetition, and helps manage revision pacing.',
      },
      {
        question: 'Do you provide practice questions?',
        answer: 'Yes. We offer curated practice problem sets and timed mock test simulations accompanied by thorough written rationale explanations for every answer.',
      },
    ],
  },
  {
    category: 'Examination Preparation',
    items: [
      {
        question: 'How can I prepare for a proctored examination?',
        answer: 'We help you prepare through structured subject review, practice questions, test-taking time management strategies, and pre-test hardware/room setup checks.',
      },
      {
        question: 'Can you explain examination software requirements?',
        answer: 'Yes. Our Examination Software Technical Guidance reviews operating system compatibility, browser requirements, camera/microphone permissions, and room setup rules for platforms like Respondus, Examplify, Honorlock, ProctorU, and Proctorio.',
      },
      {
        question: 'Can you help me troubleshoot technical compatibility issues?',
        answer: 'We provide legitimate technical advice to resolve background application conflicts, camera permission blocks, and browser launch errors prior to test day.',
      },
    ],
  },
  {
    category: 'Professional Certifications',
    items: [
      {
        question: 'Do you provide PMP preparation guidance?',
        answer: 'Yes. We offer dedicated 1-on-1 coaching covering PMI Examination Content Outline (ECO) domains, PMBOK principles, agile/hybrid methodologies, and situational question strategies.',
      },
      {
        question: 'Can you help with CompTIA certification preparation?',
        answer: 'Yes. We provide study coaching and practice question reviews for CompTIA Security+, A+, and Network+ credentials, including Performance-Based Questions (PBQs) and port memorization.',
      },
      {
        question: 'Do you provide CPC and medical coding study support?',
        answer: 'We offer specialized tutoring for AAPC CPC® candidates covering CPT, ICD-10-CM, and HCPCS Level II codebook tabbing, operative report coding, and E/M guidelines.',
      },
      {
        question: 'Can you help me understand CCMA preparation?',
        answer: 'Yes. We provide study guides and 1-on-1 coaching for the NHA CCMA exam covering clinical procedures, phlebotomy, EKG interpretation, pharmacology, and administrative duties.',
      },
    ],
  },
  {
    category: 'Academic Integrity Policy',
    items: [
      {
        question: 'What is your position on academic integrity?',
        answer: 'TUTOR PROCTORED EXAMS strictly adheres to academic integrity. We do NOT take exams for students, provide impersonation services, or engage in test proxy taking under any circumstances.',
      },
      {
        question: 'Do you complete examinations on behalf of students?',
        answer: 'No. We do not impersonate students, access examinations on their behalf or complete graded assessments for them. Our services focus on legitimate tutoring, preparation and technical guidance that respect academic integrity.',
      },
      {
        question: 'Does your technical guidance bypass proctoring software?',
        answer: 'No. We do NOT bypass, disable, hack, or modify proctoring software. Our technical guidance is 100% legitimate and focused solely on hardware compatibility, privacy settings, and official installation guidelines.',
      },
    ],
  },
  {
    category: 'Contact and Enquiries',
    items: [
      {
        question: 'How can I contact your team?',
        answer: 'You can contact us by filling out the form on our Contact page or sending an email directly to info@tutorproctoredexams.com.',
      },
      {
        question: 'How do I enquire about a service?',
        answer: 'Visit our Contact page, select your service of interest from the dropdown menu, enter a brief description of your learning goals, and click "Submit Inquiry".',
      },
      {
        question: 'What information should I include in my enquiry?',
        answer: 'Including your course or certification title, target exam date (if known), specific topics needing attention, and preferred study schedule helps us respond with tailored information quickly.',
      },
    ],
  },
];

export async function getFaqs() {
  try {
    const res = await fetch('/api/faqs', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data?.success && data?.data) return data.data;
    }
  } catch (e) {
    // fallback to static
  }
  return MASTER_FAQS;
}

