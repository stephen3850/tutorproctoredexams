export const CERTIFICATIONS_DATA = {
  pmp: {
    slug: 'pmp',
    title: 'PMP',
    fullName: 'Project Management Professional',
    category: 'Project Management',
    governingBody: 'Project Management Institute (PMI)',
    officialBodyUrl: 'https://www.pmi.org/certifications/project-management-pmp',
    officialBodyLabel: 'PMI Official PMP Certification Overview',
    accentColor: '#2563EB',
    accentBg: 'bg-[#2563EB]',
    accentLight: 'bg-blue-50 text-[#2563EB]',
    logo: '/logos/pmp.svg',
    tagline: 'The gold standard certification for project managers across all industries worldwide.',
    overview:
      'The Project Management Professional (PMP)® certification validates your capability as a project manager, demonstrating that you have the skills to lead project teams and drive successful project outcomes using predictive, agile, and hybrid methodologies.',
    targetAudience: [
      'Project Managers and Project Leaders aiming to formalize their credentials',
      'Associate Project Managers, PMO Analysts, and Coordinators advancing their careers',
      'Engineering, IT, Healthcare, and Operations professionals managing complex initiatives',
      'Military veterans transitioning into corporate project management roles',
    ],
    materials: [
      { title: 'PMP ECO Domain Study Notes', desc: 'Chapter summaries covering People (33%), Process (41%), and Business Environment (26%).' },
      { title: 'Agile & Hybrid Framework Guide', desc: 'High-yield breakdowns of Scrum, Kanban WIP limits, and servant leadership.' },
      { title: 'Situational Scenario Question Bank', desc: 'Curated scenario practice questions with distractor rationale explanations.' },
      { title: 'Earned Value & Math Formula Sheets', desc: 'Quick formula reference for CPI, SPI, EV, PV, AC, EAC, ETC, and Critical Path.' },
      { title: 'Full-Length Timed Mock Exam Sets', desc: 'Simulated 180-question practice tests matching PMI exam pacing.' },
    ],
    topicsCovered: [
      'Project Management Fundamentals',
      'Project Planning and Delivery',
      'Agile and Hybrid Approaches',
      'Risk and Stakeholder Management',
      'Project Performance',
      'Leadership and Team Management',
      'Exam Preparation Strategies',
    ],
    examFormat: {
      totalQuestions: '180 questions (175 scored, 5 unscored pretest items)',
      duration: '230 minutes (with two 10-minute scheduled breaks)',
      passingScore: 'Criterion-referenced passing score determined by PMI psychometric analysis',
      format: 'Multiple-choice, multiple-response, matching, hotspot, and fill-in-the-blank questions',
      proctoring: 'Delivered via Pearson VUE online proctoring (OnVUE) or at Pearson VUE testing centers',
    },
    faqs: [
      {
        question: "What are the eligibility requirements for the PMP exam?",
        answer: "Candidates with a 4-year degree need 36 months of project leadership experience and 35 hours of project management education. High school graduates need 60 months of experience.",
      },
      {
        question: "What is the structure of the official 2026 PMP exam?",
        answer: "The PMP exam consists of 180 questions (175 scored, 5 pretest) administered over 240 minutes, covering People (33%), Process (41%), and Business Environment (26%).",
      },
      {
        question: "How much of the PMP exam covers agile and hybrid project management?",
        answer: "Approximately 60% of the PMP exam evaluates agile or hybrid project environments alongside traditional predictive waterfall delivery frameworks.",
      },
      {
        question: "How does TUTOR PROCTORED EXAMS assist PMP candidates?",
        answer: "We offer 1-on-1 domain coaching, scenario practice question reviews, EVM math formula sheets, and custom 4 to 12-week study schedules tailored to your test date.",
      },
      {
        question: "Is the 35 hours of project management education required before applying?",
        answer: "Yes. PMI requires completing 35 contact hours of formal project management education prior to submitting your official PMP exam application.",
      },
      {
        question: "How many mock exams should I take before my PMP test date?",
        answer: "We recommend taking 3 to 5 full-length, 180-question timed practice exams under simulated test conditions during the final month of revision.",
      }
    ],
  },

  capm: {
    slug: 'capm',
    title: 'CAPM',
    fullName: 'Certified Associate in Project Management',
    category: 'Project Management',
    governingBody: 'Project Management Institute (PMI)',
    officialBodyUrl: 'https://www.pmi.org/certifications/project-management-pmp',
    officialBodyLabel: 'PMI Official Certification Portal',
    accentColor: '#4F46E5',
    accentBg: 'bg-[#4F46E5]',
    accentLight: 'bg-indigo-50 text-[#4F46E5]',
    logo: '/logos/capm.svg',
    tagline: 'Entry-level PMI project management credential establishing foundational PM and agile skills.',
    overview:
      'The Certified Associate in Project Management (CAPM)® credential awarded by PMI is the premier entry-level certification for project management. It validates understanding of core project management terminology, predictive process groups, agile frameworks, and business analysis principles.',
    targetAudience: [
      'Entry-level Project Coordinators, Junior Project Managers, and PMO Associates',
      'Undergraduate students and recent graduates building project management credentials',
      'Team members wanting to transition into project management roles',
    ],
    materials: [
      { title: 'PM Fundamentals Study Guide', desc: 'Chapter summaries covering PMBOK® 7th Edition concepts and process groups.' },
      { title: 'Agile & Business Analysis Notes', desc: 'Summaries covering Scrum ceremonies, user stories, and requirements gathering.' },
      { title: 'CAPM Diagnostic Practice Questions', desc: '150-question practice test sets matching official PMI CAPM item types.' },
      { title: 'EVM Math & Glossary Reference Sheet', desc: 'Formula reference guide covering basic earned value math and float calculations.' },
    ],
    topicsCovered: [
      'Project Management Fundamentals',
      'Project Planning',
      'Project Scope and Scheduling',
      'Project Resources',
      'Project Risk',
      'Agile Principles',
      'Project Management Terminology',
    ],
    examFormat: {
      totalQuestions: '150 multiple-choice questions',
      duration: '185 minutes',
      passingScore: 'Criterion-referenced passing score set by PMI',
      format: 'Computer-based exam featuring multiple-choice, matching, and scenario questions',
      proctoring: 'Pearson VUE online proctoring (OnVUE) or testing centers',
    },
    faqs: [
      {
        question: "What are the eligibility requirements for the CAPM exam?",
        answer: "Candidates need a high school diploma or global equivalent and 23 hours of formal project management education completed before taking the exam.",
      },
      {
        question: "What is the format of the CAPM examination?",
        answer: "The CAPM exam features 150 multiple-choice questions administered over 185 minutes via Pearson VUE online proctoring or testing centers.",
      },
      {
        question: "What is the difference between the CAPM and PMP certifications?",
        answer: "CAPM is an entry-level credential requiring no prior project management job experience, whereas PMP requires 3 to 5 years of professional project leadership experience.",
      },
      {
        question: "Does the CAPM exam test agile and business analysis concepts?",
        answer: "Yes! The CAPM exam outline includes dedicated domain weightings for agile principles, Scrum ceremonies, and business analysis fundamentals.",
      },
      {
        question: "How long does it take to prepare for the CAPM exam?",
        answer: "Most candidates spend 4 to 8 weeks preparing, allocating approximately 40 to 60 total hours of structured study and practice testing.",
      },
      {
        question: "How does TUTOR PROCTORED EXAMS support CAPM candidates?",
        answer: "We provide 1-on-1 fundamental tutoring, PMBOK concept breakdowns, math formula sheets, and timed practice question walkthroughs.",
      }
    ],
  },

  comptia: {
    slug: 'comptia',
    title: 'CompTIA Certifications',
    fullName: 'CompTIA Security+, A+, Network+',
    category: 'Information Technology',
    governingBody: 'CompTIA',
    officialBodyUrl: 'https://www.comptia.org/',
    officialBodyLabel: 'CompTIA Official Certification Portal',
    accentColor: '#0891B2',
    accentBg: 'bg-[#0891B2]',
    accentLight: 'bg-cyan-50 text-[#0891B2]',
    logo: '/logos/comptia.svg',
    tagline: 'Vendor-neutral IT certifications establishing core cybersecurity, infrastructure, and helpdesk expertise.',
    overview:
      'CompTIA certifications—including Security+, A+, and Network+—are recognized globally as foundational credentials for IT and cybersecurity professionals. They validate hands-on technical skills in networking, system administration, hardware troubleshooting, and threat mitigation.',
    targetAudience: [
      'Entry-level IT Technicians, Helpdesk Analysts, and System Administrators',
      'Cybersecurity Specialists, SOC Analysts, and Information Assurance Officers',
      'Network Technicians and Cloud Engineers expanding their credentials',
    ],
    materials: [
      { title: 'Security+ SY0-701 Domain Notes', desc: 'Summaries covering zero-trust, threats, vulnerabilities, and incident response.' },
      { title: 'Port Number & Protocol Flashcards', desc: 'Quick recall guide for SSH (22), DNS (53), RDP (3389), HTTPS (443), SNMP (161).' },
      { title: 'Performance-Based Question (PBQ) Guide', desc: 'CLI command walkthroughs (ipconfig, ping, netstat) and firewall config scenarios.' },
      { title: 'CompTIA Full-Length Practice Exams', desc: 'Timed practice test simulations with comprehensive answer rationales.' },
    ],
    topicsCovered: [
      'Security+: General Security Concepts, Threats, Vulnerabilities, Ops & GRC',
      'Network+: Networking Fundamentals, Implementations, Ops & Security',
      'A+: Mobile Devices, Hardware, OS, Software Troubleshooting & Security',
      'Technical Concepts & Port Numbers',
      'Hardware & System Diagnostics',
      'Software & CLI Troubleshooting',
      'Exam Preparation Strategies',
    ],
    examFormat: {
      totalQuestions: 'Up to 90 questions per exam (Multiple-choice and PBQs)',
      duration: '90 minutes per exam session',
      passingScore: 'Security+ (750), Network+ (720), A+ (675 for Core 1, 700 for Core 2)',
      format: 'Multiple-choice and Performance-Based Questions (PBQs)',
      proctoring: 'Pearson VUE online proctoring or testing centers',
    },
    faqs: [
      {
        question: "Which CompTIA certification exams do you support?",
        answer: "We provide prep support for CompTIA Security+ (SY0-701), Network+ (N10-008), A+ Core 1 (220-1101), and A+ Core 2 (220-1102).",
      },
      {
        question: "What are Performance-Based Questions (PBQs) on CompTIA exams?",
        answer: "PBQs appear at the start of CompTIA exams and test hands-on CLI configuration, network setup, or firewall rules rather than multiple-choice selection.",
      },
      {
        question: "What core port numbers should I memorize for Security+ and Network+?",
        answer: "Memorize SSH (22), DNS (53), HTTP (80), HTTPS (443), RDP (3389), SNMP (161/162), LDAPS (636), and SMTP (25/587).",
      },
      {
        question: "Is CompTIA Security+ required for government IT roles?",
        answer: "Yes. CompTIA Security+ is one of the most common baseline credentials fulfilling DoD 8140/8570 directive requirements for IAT Level II roles.",
      },
      {
        question: "What score is required to pass CompTIA Security+ SY0-701?",
        answer: "CompTIA Security+ requires a minimum passing score of 750 on a scale of 100 to 900.",
      },
      {
        question: "How does TUTOR PROCTORED EXAMS help CompTIA candidates?",
        answer: "We provide 1-on-1 technical coaching, PBQ command walkthroughs, port memory flashcards, and timed practice exams.",
      }
    ],
  },

  shrm: {
    slug: 'shrm',
    title: 'SHRM-CP / SHRM-SCP',
    fullName: 'Society for Human Resource Management Certifications',
    category: 'Human Resources',
    governingBody: 'SHRM',
    accentColor: '#7C3AED',
    accentBg: 'bg-[#7C3AED]',
    accentLight: 'bg-purple-50 text-[#7C3AED]',
    logo: '/logos/shrm.svg',
    tagline: 'Premier global HR credentials validating strategic leadership, behavioral competencies, and HR expertise.',
    overview:
      'The SHRM-CP (Certified Professional) and SHRM-SCP (Senior Certified Professional) credentials establish global recognition for HR practitioners. They validate behavioral competencies and technical HR knowledge required to lead organizational strategy, employee relations, talent acquisition, and compliance.',
    targetAudience: [
      'HR Specialists, Generalists, and Coordinators advancing to managerial roles (SHRM-CP)',
      'HR Directors, VPs, and Consultants driving organizational strategy (SHRM-SCP)',
    ],
    materials: [
      { title: 'SHRM BASK® Competency Notes', desc: 'Summaries covering Leadership, Ethical Practice, DEI, and Business Acumen.' },
      { title: 'Situational Judgment Item (SJI) Guide', desc: 'Scenario practice questions applying the official "SHRM Mindset".' },
      { title: 'Labor Law & Compliance Quick Reference', desc: 'Quick reference guide covering FMLA, FLSA, ERISA, Title VII, and ADA.' },
      { title: 'SHRM Full-Length Mock Exams', desc: '134-item simulated exams matching official SHRM testing time.' },
    ],
    topicsCovered: [
      'HR Competencies',
      'Workforce Management',
      'Talent Acquisition',
      'Employee Relations',
      'Organizational Effectiveness',
      'HR Strategy',
      'People Management',
    ],
    examFormat: {
      totalQuestions: '134 questions (80 knowledge-based, 54 situational judgment items)',
      duration: '3 hours 40 minutes (220 minutes)',
      passingScore: 'Scaled score of 200 out of 200-500 scale',
      format: 'Computer-based exam featuring Knowledge Items and SJIs',
      proctoring: 'Prometric live online proctoring or test centers',
    },
    faqs: [
      {
        question: "What is the difference between SHRM-CP and SHRM-SCP?",
        answer: "SHRM-CP focuses on operational and tactical HR implementation, whereas SHRM-SCP is for senior executives leading strategic organizational policy.",
      },
      {
        question: "What are Situational Judgment Items (SJIs) on SHRM exams?",
        answer: "SJIs present realistic HR workplace scenarios and require candidates to select the most effective action based on the official SHRM BASK® competency model.",
      },
      {
        question: "What key federal labor laws should I review for the SHRM exam?",
        answer: "Review major federal HR statutes including FMLA, FLSA, ERISA, Title VII of the Civil Rights Act, ADA, OSHA, and COBRA.",
      },
      {
        question: "How many questions are on the SHRM-CP exam and what is the time limit?",
        answer: "The SHRM-CP exam contains 134 questions (80 knowledge items, 54 situational judgment items) administered over 3 hours 40 minutes.",
      },
      {
        question: "What is a passing score on the SHRM certification exam?",
        answer: "SHRM uses a scaled scoring system ranging from 100 to 500, with a passing threshold set at a scaled score of 200.",
      },
      {
        question: "How can TUTOR PROCTORED EXAMS help with SHRM preparation?",
        answer: "We offer 1-on-1 BASK domain tutoring, situational judgment item strategies, labor law quick sheets, and timed practice tests.",
      }
    ],
  },

  'real-estate': {
    slug: 'real-estate',
    title: 'Real Estate License',
    fullName: 'Real Estate Salesperson & Broker Licensing Exam',
    category: 'Real Estate',
    governingBody: 'State Licensing Commissions / PSI / Pearson VUE',
    accentColor: '#059669',
    accentBg: 'bg-[#059669]',
    accentLight: 'bg-emerald-50 text-[#059669]',
    logo: '/logos/real-estate.svg',
    tagline: 'Comprehensive prep for real estate salesperson and broker licensing examinations.',
    overview:
      'The Real Estate Licensing Exam is required to legally practice as a licensed real estate salesperson or broker. The exam tests national real estate principles, land use controls, contracts, financing math, agency law, and specific real estate statutes.',
    targetAudience: [
      'Aspiring Real Estate Agents completing pre-licensing coursework',
      'Salespersons preparing to upgrade to Licensed Real Estate Broker status',
    ],
    materials: [
      { title: 'National Principles Study Guide', desc: 'Notes covering property rights, title transfer, deeds, and agency duties.' },
      { title: 'Real Estate Math Formula Sheet', desc: 'Step-by-step formula guide for commission splits, proration, LTV ratios, and acreage.' },
      { title: 'Contracts & Financing Quick Reference', desc: 'Summaries covering purchase agreements, mortgage types, and Fair Housing laws.' },
      { title: 'National & State Practice Exams', desc: 'Timed practice exams matching PSI and Pearson VUE formats.' },
    ],
    topicsCovered: [
      'Real Estate Principles',
      'Property Ownership',
      'Contracts',
      'Property Law',
      'Real Estate Finance',
      'Transactions',
      'Licensing Examination Preparation',
    ],
    examFormat: {
      totalQuestions: '100-150 multiple-choice items (National & State portions)',
      duration: '3.5 to 4 hours (210-240 minutes)',
      passingScore: '70% to 75% correct score depending on state board',
      format: 'Computer-based exam with National Principles and State Law sections',
      proctoring: 'PSI, Pearson VUE, or AMP proctored test centers and online proctoring',
    },
    faqs: [
      {
        question: 'Does this cover real estate math calculations?',
        answer: 'Yes! We provide step-by-step formula sheets for commission splits, tax proration, and area math.',
      },
    ],
  },

  aapc: {
    slug: 'aapc',
    title: 'AAPC Medical Coding',
    fullName: 'AAPC Medical Coding & Compliance Prep',
    category: 'Healthcare & Coding',
    governingBody: 'AAPC',
    officialBodyUrl: 'https://www.aapc.com/shop2/study-guides/cpc-study-guide.aspx',
    officialBodyLabel: 'AAPC Official CPC Study Guide & Examination Portal',
    accentColor: '#DB2777',
    accentBg: 'bg-[#DB2777]',
    accentLight: 'bg-pink-50 text-[#DB2777]',
    logo: '/logos/aapc.svg',
    tagline: 'Preparation resources for AAPC credentials including CPC, CIC, COC, and CPMA.',
    overview:
      'AAPC is a premier education and credentialing organization for medical coders, billers, auditors, and practice managers. Preparing for an AAPC exam requires deep familiarity with official CPT®, ICD-10-CM, and HCPCS Level II codebooks, guidelines, and reimbursement principles.',
    targetAudience: [
      'Medical Coders and Billing Specialists preparing for national credentialing',
      'Health Information Management (HIM) students and graduates',
    ],
    materials: [
      { title: 'Codebook Tabbing & Highlighting Guide', desc: 'Diagrams for tabbing CPT®, ICD-10-CM, and HCPCS Level II codebooks.' },
      { title: 'Evaluation & Management (E/M) Sheet', desc: 'Medical Decision Making (MDM) complexity charts and E/M guidelines.' },
      { title: 'Operative Report Practice Cases', desc: 'Real surgical notes with step-by-step code assignment explanations.' },
      { title: '100-Question AAPC Mock Exams', desc: 'Simulated 4-hour open-book mock tests with detailed answer rationales.' },
    ],
    topicsCovered: [
      'Medical Coding Fundamentals',
      'ICD-10-CM Coding Guidelines',
      'CPT Procedure Coding',
      'HCPCS Level II Coding',
      'Medical Terminology',
      'Anatomy and Physiology',
      'Coding Guidelines & Compliance',
    ],
    examFormat: {
      totalQuestions: '100 multiple-choice questions',
      duration: '4 hours (240 minutes)',
      passingScore: '70% or higher correct score',
      format: 'Open physical codebook exam testing CPT, ICD-10-CM, and HCPCS',
      proctoring: 'Meazure Learning online proctoring or test centers',
    },
    faqs: [
      {
        question: "What is the difference between AAPC and CPC?",
        answer: "AAPC is the national professional organization that awards medical coding credentials, while CPC (Certified Professional Coder) is a specific credential for outpatient coding.",
      },
      {
        question: "Are codebooks allowed during official AAPC medical coding exams?",
        answer: "Yes! AAPC certification exams are open-book examinations requiring current-year approved physical CPT®, ICD-10-CM, and HCPCS Level II codebooks.",
      },
      {
        question: "What credentials does AAPC offer besides CPC?",
        answer: "AAPC offers specialized credentials including CIC (Inpatient Coding), COC (Outpatient Hospital), CPMA (Auditing), and CPCO (Compliance).",
      },
      {
        question: "How long is the official AAPC CPC exam?",
        answer: "The CPC exam contains 100 multiple-choice questions administered over 4 hours (240 minutes) via online proctoring or test centers.",
      },
      {
        question: "What score is required to pass AAPC coding certification exams?",
        answer: "Candidates must achieve a score of 70% or higher correct to pass AAPC certification exams.",
      },
      {
        question: "How can TUTOR PROCTORED EXAMS help with AAPC exam prep?",
        answer: "We offer 1-on-1 codebook tabbing instruction, E/M guideline walkthroughs, operative report coding practice, and timed mock tests.",
      }
    ],
  },

  cpc: {
    slug: 'cpc',
    title: 'CPC Certified Coder',
    fullName: 'Certified Professional Coder',
    category: 'Healthcare & Coding',
    governingBody: 'AAPC',
    officialBodyUrl: 'https://www.aapc.com/shop2/study-guides/cpc-study-guide.aspx',
    officialBodyLabel: 'AAPC Official CPC Certification Overview',
    accentColor: '#9333EA',
    accentBg: 'bg-[#9333EA]',
    accentLight: 'bg-purple-50 text-[#9333EA]',
    logo: '/logos/cpc.svg',
    tagline: 'The gold standard medical coding certification for physician offices and outpatient clinics.',
    overview:
      'The Certified Professional Coder (CPC)® credential is the standard for medical coding in physician office and outpatient settings. CPC coders read clinical documentation, extract key procedures and diagnoses, and assign accurate CPT®, ICD-10-CM, and HCPCS Level II codes.',
    targetAudience: [
      'Outpatient Medical Coders in physician clinics, surgical centers, and group practices',
      'Medical Billing Specialists expanding into certified coding roles',
    ],
    materials: [
      { title: 'CPT Surgical Body Systems Summary', desc: 'High-yield notes for Integumentary, Musculoskeletal, Digestive, and Urinary.' },
      { title: 'Anatomy & Med Term Reference Guide', desc: 'Anatomical illustrations, prefix/suffix glossaries, and disease definitions.' },
      { title: 'Operative Report Practice Exercises', desc: 'Clinical operative note coding exercises with comprehensive rationales.' },
      { title: 'CPC Timed Practice Exams', desc: '100-item practice exams divided into anatomical body systems and E/M.' },
    ],
    topicsCovered: [
      'CPT Coding (10000 - 60000 Series)',
      'ICD-10-CM Diagnosis Coding',
      'HCPCS Coding & Modifiers',
      'Medical Terminology',
      'Anatomy and Physiology',
      'Coding Compliance',
      'CPC Exam Preparation',
    ],
    examFormat: {
      totalQuestions: '100 multiple-choice questions',
      duration: '4 hours (240 minutes)',
      passingScore: '70% correct score required to pass',
      format: 'Open physical codebook exam divided into anatomical sections and E/M',
      proctoring: 'Meazure Learning live online proctoring or test centers',
    },
    faqs: [
      {
        question: "What setting is the CPC credential designed for?",
        answer: "The CPC credential validates expertise in physician office, group practice, and outpatient clinic coding settings.",
      },
      {
        question: "What is the difference between CPC and CPC-A status?",
        answer: "CPC-A is an Apprentice designation given to new coders until 2 years of verified coding experience or approved education equivalent is submitted to AAPC.",
      },
      {
        question: "What CPT codebook sections are tested on the CPC exam?",
        answer: "The exam covers Surgery (10000-60000 series), Evaluation & Management (99202-99499), Anesthesia, Radiology, Pathology/Lab, and Medicine.",
      },
      {
        question: "How should I tab my codebooks for the CPC exam?",
        answer: "Tab codebooks by major anatomical sections, guidelines, E/M tables, and modifier lists to quickly locate codes during the 4-hour exam.",
      },
      {
        question: "What is the passing score for the CPC examination?",
        answer: "A minimum score of 70% correct is required to pass the CPC exam.",
      },
      {
        question: "How does TUTOR PROCTORED EXAMS support CPC candidates?",
        answer: "We provide 1-on-1 operative report coding drills, E/M table reviews, codebook tabbing strategies, and timed 100-item practice tests.",
      }
    ],
  },

  ccma: {
    slug: 'ccma',
    title: 'CCMA Clinical Assistant',
    fullName: 'Certified Clinical Medical Assistant',
    category: 'Healthcare & Medical Assisting',
    governingBody: 'NHA',
    accentColor: '#0284C7',
    accentBg: 'bg-[#0284C7]',
    accentLight: 'bg-[#0284C7]/10 text-[#0284C7]',
    logo: '/logos/ccma.svg',
    tagline: 'Accredited clinical credential validating medical assistant patient care and administrative skills.',
    overview:
      'The Certified Clinical Medical Assistant (CCMA) credential awarded by NHA validates that healthcare professionals possess the clinical skills, medical terminology knowledge, phlebotomy, EKG, and administrative competence needed in modern ambulatory care settings.',
    targetAudience: [
      'Clinical Medical Assistants working in physician clinics, urgent care, and specialty practices',
      'Medical Assisting students completing diploma or associate degree programs',
    ],
    materials: [
      { title: 'Clinical Patient Care & Vitals Guide', desc: 'Notes covering physical exam assistance, infection control, and pharmacology.' },
      { title: 'Phlebotomy Order of Draw & EKG Cards', desc: 'Color-coded tube order of draw and 12-lead EKG placement flashcards.' },
      { title: 'Basic Science & Anatomy Summary', desc: 'Anatomy and physiology, disease processes, and medical terminology summaries.' },
      { title: '150-Question NHA CCMA Mock Exams', desc: 'Timed full-length mock exams matching NHA test plan weightings.' },
    ],
    topicsCovered: [
      'Clinical Procedures',
      'Patient Care & Vital Signs',
      'Medical Terminology',
      'Anatomy and Physiology',
      'Clinical Administration',
      'Medical Assisting Fundamentals',
    ],
    examFormat: {
      totalQuestions: '150 multiple-choice questions (135 scored, 15 pretest items)',
      duration: '3 hours (180 minutes)',
      passingScore: 'Scaled score of 390 or higher out of 500',
      format: 'Multiple-choice computer-based examination',
      proctoring: 'PSI online proctoring or school testing locations',
    },
    faqs: [
      {
        question: "What organization awards the CCMA credential?",
        answer: "The Certified Clinical Medical Assistant (CCMA) credential is administered and awarded nationally by the National Healthcareer Association (NHA).",
      },
      {
        question: "What is the structure and passing score of the NHA CCMA exam?",
        answer: "The CCMA exam consists of 150 multiple-choice questions (135 scored, 15 pretest) administered over 3 hours, requiring a scaled score of 390 out of 500.",
      },
      {
        question: "What key clinical skills appear on the CCMA exam?",
        answer: "Clinical topics include vital sign measurement, phlebotomy tube order of draw, 12-lead EKG electrode placement, infection control, and pharmacology.",
      },
      {
        question: "What administrative topics are tested on the CCMA exam?",
        answer: "Administrative topics cover patient scheduling, EHR documentation, medical billing fundamentals, HIPAA privacy rules, and triage.",
      },
      {
        question: "How far in advance should I study for the CCMA exam?",
        answer: "We recommend starting 4 to 6 weeks before your scheduled NHA exam date, focusing on phlebotomy, EKG, and clinical care domains.",
      },
      {
        question: "How does TUTOR PROCTORED EXAMS help CCMA candidates?",
        answer: "We offer 1-on-1 tutoring, EKG and phlebotomy flashcards, clinical procedure walkthroughs, and timed NHA-style mock exams.",
      }
    ],
  },

  cna: {
    slug: 'cna',
    title: 'CNA Nursing Assistant',
    fullName: 'Certified Nursing Assistant',
    category: 'Healthcare & Nursing',
    governingBody: 'State Board of Nursing / Prometric / Credentia',
    accentColor: '#16A34A',
    accentBg: 'bg-[#16A34A]',
    accentLight: 'bg-green-50 text-[#16A34A]',
    logo: '/logos/cna.svg',
    tagline: 'Essential healthcare credential validating direct patient care, infection control, and clinical nursing skills.',
    overview:
      'The Certified Nursing Assistant (CNA) exam validates foundational patient care skills, safety protocols, infection control, and basic nursing concepts. Passing the state CNA competency exam is required to earn certification and practice in hospitals and care facilities.',
    targetAudience: [
      'Nursing Assistant students preparing for state competency evaluation exams',
      'Pre-nursing students gaining clinical hours for RN/BSN program admissions',
    ],
    materials: [
      { title: 'CNA Written Knowledge Study Guide', desc: 'Revision notes covering infection control, vital signs, ADLs, and hygiene.' },
      { title: 'Clinical Skills Step-by-Step Checklist', desc: 'Detailed checklists for mandatory clinical skills (hand hygiene, blood pressure, bed bath).' },
      { title: 'Infection Control Flashcards', desc: 'Standard precautions, PPE order, Heimlich maneuver, and patient rights.' },
      { title: 'State Competency Practice Question Banks', desc: 'Timed practice exams matching Prometric and Credentia test formats.' },
    ],
    topicsCovered: [
      'Patient Care & Hygiene',
      'Nursing Fundamentals',
      'Safety and Infection Prevention',
      'Vital Signs Measurement',
      'Patient Communication',
      'Basic Nursing Skills',
    ],
    examFormat: {
      totalQuestions: '60-70 written items + 3-5 clinical skills evaluation',
      duration: '90 minutes written + 30-45 minutes clinical skills evaluation',
      passingScore: 'State-specific passing score (70%-75% written + 100% safety skills)',
      format: 'Computer-based written exam plus live clinical skills demonstration',
      proctoring: 'Prometric, Credentia, or Headmaster state test centers',
    },
    faqs: [
      {
        question: "What are the two parts of the official CNA evaluation exam?",
        answer: "The CNA exam consists of a Written Knowledge Exam (60-70 multiple-choice questions) and a hands-on Clinical Skills Demonstration (3-5 random skills).",
      },
      {
        question: "Do CNA competency evaluation requirements vary by state?",
        answer: "Yes! State boards of nursing set specific clinical training hours and designate test vendors like Prometric, Credentia, or Headmaster.",
      },
      {
        question: "What are mandatory safety skills during the CNA clinical exam?",
        answer: "Mandatory skills include hand hygiene, indirect care/patient privacy, infection control, and proper body mechanics during transfers.",
      },
      {
        question: "What score is required to pass the written CNA exam?",
        answer: "Most states require 70% to 75% correct on the written exam, plus 100% safety compliance on the clinical skills evaluation.",
      },
      {
        question: "How long is the written CNA exam?",
        answer: "The written CNA exam is usually timed for 90 minutes.",
      },
      {
        question: "How does TUTOR PROCTORED EXAMS support CNA candidates?",
        answer: "We provide written exam practice question sets, nursing fundamentals tutoring, and clinical skill step-by-step checklists.",
      }
    ],
  },

  cpht: {
    slug: 'cpht',
    title: 'CPhT Pharmacy Technician',
    fullName: 'Certified Pharmacy Technician',
    category: 'Healthcare & Pharmacy',
    governingBody: 'Pharmacy Technician Certification Board (PTCB)',
    accentColor: '#EA580C',
    accentBg: 'bg-[#EA580C]',
    accentLight: 'bg-orange-50 text-[#EA580C]',
    logo: '/logos/cpht.svg',
    tagline: 'Nationally recognized credential for pharmacy technicians in retail, hospital, and compounding settings.',
    overview:
      'The Certified Pharmacy Technician (CPhT) credential administered by PTCB is the national standard for pharmacy technicians. It validates competence in pharmacy calculations, pharmacology terminology, medication safety, federal drug laws, and compounding principles.',
    targetAudience: [
      'Pharmacy Technician Trainees seeking national PTCB certification',
      'Retail and Hospital Pharmacy staff advancing qualifications',
    ],
    materials: [
      { title: 'Top 200 Drug Brand & Generic Flashcards', desc: 'Brand/generic names, drug classifications, indications, and side effects.' },
      { title: 'Pharmacy Math Formula Sheet', desc: 'Step-by-step formula walkthroughs for dosage math, alligations, and IV drip rates.' },
      { title: 'Federal Pharmacy Law & DEA Guide', desc: 'Controlled Substances Act schedules I-V, DEA forms, and USP <795>/<797> rules.' },
      { title: 'PTCB 90-Question Mock Exam Sets', desc: 'Simulated practice exams matching official PTCB test computer interfaces.' },
    ],
    topicsCovered: [
      'Pharmacy Fundamentals',
      'Medication Safety & Top 200 Drugs',
      'Pharmaceutical Calculations',
      'Pharmacology Basics',
      'Pharmacy Law & DEA Regulations',
      'Prescription Processing',
    ],
    examFormat: {
      totalQuestions: '90 multiple-choice questions (80 scored, 10 unscored pretest items)',
      duration: '1 hour 50 minutes (110 minutes total seat time)',
      passingScore: 'Scaled score of 1400 out of 1000-1600 scale',
      format: 'Computer-based exam featuring multiple-choice items and math calculations',
      proctoring: 'Pearson VUE online proctoring or testing centers',
    },
    faqs: [
      {
        question: "What organization awards the national CPhT credential?",
        answer: "The Certified Pharmacy Technician (CPhT) credential is administered nationally by the Pharmacy Technician Certification Board (PTCB).",
      },
      {
        question: "What is the structure and time limit of the PTCB CPhT exam?",
        answer: "The PTCB exam consists of 90 multiple-choice questions (80 scored, 10 pretest) administered over 1 hour 50 minutes (110 minutes).",
      },
      {
        question: "What pharmacy math calculations appear on the PTCB exam?",
        answer: "Calculations cover daily dosage math, alligation grids, IV flow rates, powder volume conversions, and percentage strength.",
      },
      {
        question: "What federal laws are tested on the PTCB exam?",
        answer: "Review the Controlled Substances Act (Schedules I-V), DEA registration, Durham-Humphrey Amendment, and USP <795>/<797> compounding standards.",
      },
      {
        question: "What score is needed to pass the PTCB CPhT exam?",
        answer: "PTCB uses a scaled score range from 1000 to 1600, with a passing threshold set at a scaled score of 1400.",
      },
      {
        question: "How does TUTOR PROCTORED EXAMS assist CPhT candidates?",
        answer: "We offer 1-on-1 pharmacy math tutoring, top 200 brand/generic flashcard drills, federal law summaries, and timed PTCB mock tests.",
      }
    ],
  },
};
