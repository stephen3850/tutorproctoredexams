export const STUDY_RESOURCES_DATA = {
  pmp: {
    slug: 'pmp',
    title: 'PMP Certification Prep Study Materials',
    shortTitle: 'PMP Certification Prep',
    category: 'Project Management',
    governingBody: 'Project Management Institute (PMI)',
    officialBodyUrl: 'https://www.pmi.org/certifications/project-management-pmp',
    officialBodyLabel: 'PMI Official PMP Certification Overview',
    tagline: 'High-yield PMP revision notes, ECO domain summaries, situational practice questions, and mock exam walkthroughs.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Our PMP Certification Prep study materials are specifically curated to help project management candidates master the official PMI 2026 Examination Content Outline (ECO). Covering People (33%), Process (41%), and Business Environment (26%), these revision resources combine predictive PMBOK® principles with agile and hybrid project delivery frameworks.',
    availableMaterials: [
      {
        title: 'ECO Domain Revision Notes',
        description: 'Concise summary notes covering People, Process, and Business Environment pillars aligned with current PMI ECO standards.',
      },
      {
        title: 'Agile & Hybrid Framework Summaries',
        description: 'High-yield breakdowns of Scrum ceremonies, Kanban WIP limits, velocity metrics, and servant leadership concepts.',
      },
      {
        title: 'Situational Practice Question Bank',
        description: 'Curated scenario-based practice questions with detailed rationale breakdowns for correct and distractor options.',
      },
      {
        title: 'Earned Value & Math Formula Sheets',
        description: 'Quick reference sheets for EVM formulas (CPI, SPI, EV, PV, AC, EAC, ETC, VAC) and critical path method (CPM).',
      },
      {
        title: 'Full-Length Timed Mock Exam Sets',
        description: 'Simulated 180-question mock exams matching the actual PMI exam interface, timer constraints, and question distribution.',
      },
      {
        title: 'PM Mindset & Exam Strategy Guide',
        description: 'Proven strategies for answering complex situational questions from a PMI leadership perspective.',
      },
    ],
    topicsCovered: [
      'Project Management Fundamentals & Governance',
      'People Domain: Leading Teams, Conflict Resolution & Negotiation',
      'Process Domain: Scope, Schedule, Budget, Risk & Procurement',
      'Business Environment: Compliance, Value Delivery & Organizational Change',
      'Agile & Hybrid Methodologies (Scrum, Kanban, XP)',
      'Earned Value Management (EVM) & Critical Path Method',
      'PMI Exam Strategy & Situational Question Breakdown',
    ],
    faqs: [
      {
        question: 'How do I obtain access to PMP study materials?',
        answer: 'You can request PMP study materials by filling out the inquiry form on this page or contacting our sales team directly via WhatsApp.',
      },
      {
        question: 'Do the PMP revision notes cover the Agile Practice Guide?',
        answer: 'Yes! Over 50% of our PMP study materials focus explicitly on agile and hybrid project management frameworks.',
      },
    ],
  },

  capm: {
    slug: 'capm',
    title: 'CAPM Associate in PM Study Materials',
    shortTitle: 'CAPM Associate in PM',
    category: 'Project Management',
    governingBody: 'Project Management Institute (PMI)',
    officialBodyUrl: 'https://www.pmi.org/certifications/project-management-pmp',
    officialBodyLabel: 'PMI Official Certification Portal',
    tagline: 'Foundational project management study guides, PMBOK summaries, agile basics, and EVM formula sheets.',
    heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Our CAPM Study Materials provide an entry-level revision framework designed for aspiring project coordinators and junior PMs. The materials unpack core PM terminology, predictive process groups, agile manifesto principles, and business analysis frameworks required for the PMI CAPM exam.',
    availableMaterials: [
      {
        title: 'PM Fundamentals Study Guide',
        description: 'Comprehensive chapter summaries covering PMBOK® 7th Edition concepts, process groups, and project lifecycles.',
      },
      {
        title: 'Agile & Business Analysis Quick Notes',
        description: 'Focused summaries covering Scrum roles, sprint artifacts, user stories, requirements gathering, and traceability matrices.',
      },
      {
        title: 'CAPM Diagnostic Practice Question Bank',
        description: '150-question practice test sets matching official PMI CAPM item types and difficulty level.',
      },
      {
        title: 'EVM Calculation & Glossary Reference Sheet',
        description: 'Formula reference guide covering basic earned value math, float calculations, and PMBOK terminology definitions.',
      },
    ],
    topicsCovered: [
      'Project Management Fundamentals & Organizational Structures',
      'Predictive Plan-Based Methodologies & Scope Management',
      'Schedule Network Diagrams & Cost Management Basics',
      'Agile Frameworks, Scrum Ceremonies & Kanban Principles',
      'Business Analysis Roles, Requirements & Value Delivery',
      'Project Risk, Stakeholder & Quality Management',
    ],
    faqs: [
      {
        question: 'What is included in the CAPM study package?',
        answer: 'The package includes PMBOK summaries, agile quick notes, EVM math formula sheets, and practice question sets.',
      },
    ],
  },

  comptia: {
    slug: 'comptia',
    title: 'CompTIA Certification Study Materials',
    shortTitle: 'CompTIA (Security+, A+, Net+)',
    category: 'Information Technology',
    governingBody: 'CompTIA',
    officialBodyUrl: 'https://www.comptia.org/',
    officialBodyLabel: 'CompTIA Official Certification Portal',
    tagline: 'Comprehensive revision guides, port number flashcards, PBQ walkthroughs, and practice exams for Security+, A+, and Network+.',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    overview:
      'CompTIA study materials deliver high-yield technical summaries, protocol port reference guides, and hands-on Performance-Based Question (PBQ) guides for Security+ (SY0-701), A+ (220-1101/1102), and Network+ (N10-008). Built for IT technicians, helpdesk analysts, and cybersecurity candidates.',
    availableMaterials: [
      {
        title: 'Security+ SY0-701 High-Yield Notes',
        description: 'Complete domain summaries covering cryptography, zero-trust, threats, vulnerabilities, and incident response.',
      },
      {
        title: 'Network+ & A+ Port Number Flashcards',
        description: 'Quick recall guide for essential protocols (SSH 22, DNS 53, RDP 3389, HTTPS 443, SNMP 161/162).',
      },
      {
        title: 'Performance-Based Question (PBQ) Walkthroughs',
        description: 'Interactive CLI command guides (ipconfig, ping, netstat, nmap) and firewall configuration scenarios.',
      },
      {
        title: 'Full-Length CompTIA Mock Exam Sets',
        description: 'Timed 90-question practice test simulations with comprehensive answer rationales.',
      },
    ],
    topicsCovered: [
      'Security+ Domains: General Security Concepts, Threats, Ops & GRC',
      'Network+ Domains: Networking Fundamentals, Implementations, Ops & Security',
      'A+ Core 1 & Core 2: Mobile Devices, Hardware, OS, Software Troubleshooting & Security',
      'Essential Protocol Ports, CLI Diagnostics & Firewall Configurations',
      'DoD 8140/8570 Baseline Compliance Concepts',
    ],
    faqs: [
      {
        question: 'Which CompTIA exams do these materials cover?',
        answer: 'Our materials cover CompTIA Security+, Network+, A+ Core 1, and A+ Core 2 certification exams.',
      },
    ],
  },

  shrm: {
    slug: 'shrm',
    title: 'SHRM-CP / SHRM-SCP Study Materials',
    shortTitle: 'SHRM-CP / SHRM-SCP HR',
    category: 'Human Resources',
    governingBody: 'Society for Human Resource Management (SHRM)',
    tagline: 'SHRM BASK® competency notes, Situational Judgment Item (SJI) guides, and HR law compliance sheets.',
    heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Prepare for the SHRM-CP and SHRM-SCP examinations with structured study materials aligned with the SHRM Body of Applied Skills and Knowledge (SHRM BASK®). Includes behavioral competency reviews, labor law compliance guides, and Situational Judgment Item (SJI) scenario practice sets.',
    availableMaterials: [
      {
        title: 'SHRM BASK® Competency Study Notes',
        description: 'Summaries covering Leadership, Ethical Practice, DEI, Business Acumen, and Relationship Management.',
      },
      {
        title: 'Situational Judgment Item (SJI) Practice Scenarios',
        description: 'Scenario-based practice questions with rationales applying the official "SHRM Mindset".',
      },
      {
        title: 'Federal Labor Law & Compliance Quick Reference',
        description: 'Quick reference guide covering FMLA, FLSA, ERISA, Title VII, EEOC, OSHA, and ADA compliance rules.',
      },
      {
        title: 'Timed Full-Length SHRM Mock Exams',
        description: '134-item simulated exams matching official SHRM testing time and item distributions.',
      },
    ],
    topicsCovered: [
      'Behavioral Competencies: Leadership, Interpersonal & Business Acumen',
      'HR Expertise: Talent Acquisition, Engagement, L&D, Total Rewards',
      'HR Expertise: Structure of HR, Org Effectiveness, Workforce Management',
      'Workplace & Global HR Compliance, Labor Laws & Risk Management',
      'Situational Judgment Strategy & SHRM BASK® Framework',
    ],
    faqs: [
      {
        question: 'Do these materials cover both SHRM-CP and SHRM-SCP?',
        answer: 'Yes! The study materials cover foundational BASK competencies for SHRM-CP as well as strategic leadership items for SHRM-SCP.',
      },
    ],
  },

  'real-estate': {
    slug: 'real-estate',
    title: 'Real Estate Licensing Exam Study Materials',
    shortTitle: 'Real Estate License Prep',
    category: 'Real Estate',
    governingBody: 'State Real Estate Licensing Commissions / PSI / Pearson VUE',
    tagline: 'National real estate principles notes, real estate math formula guides, agency law reviews, and state practice exams.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Prepare thoroughly for your real estate salesperson or broker licensing exam with comprehensive study resources. Covering National Real Estate Principles, Property Ownership, Agency Law, Real Estate Finance, Contracts, and Real Estate Math formulas.',
    availableMaterials: [
      {
        title: 'National Real Estate Principles Study Guide',
        description: 'Comprehensive notes covering property rights, title transfer, deeds, leases, and agency fiduciary duties.',
      },
      {
        title: 'Real Estate Math Calculation Formula Sheet',
        description: 'Step-by-step formula guide for commission splits, proration, LTV ratios, amortization, and acreage square footage.',
      },
      {
        title: 'Contracts, Disclosure & Finance Quick Reference',
        description: 'Summaries covering purchase agreements, mortgage types, trust deeds, appraisal methods, and Fair Housing laws.',
      },
      {
        title: 'National & State Portion Practice Question Banks',
        description: 'Timed practice exams simulating PSI and Pearson VUE real estate licensing exam formats.',
      },
    ],
    topicsCovered: [
      'Property Ownership, Encumbrances & Land Description Methods',
      'Law of Agency, Fiduciary Duties & Fair Housing Regulations',
      'Real Estate Contracts, Leases & Option Agreements',
      'Real Estate Finance, Mortgages & Appraisal Methods',
      'Real Estate Math Calculations (Commission, Tax Proration, LTV)',
      'State Licensing Statutes & Escrow Management Rules',
    ],
    faqs: [
      {
        question: 'Do these study materials include real estate math walkthroughs?',
        answer: 'Yes! We provide detailed formula sheets and step-by-step math walkthroughs for commission, proration, and area calculations.',
      },
    ],
  },

  aapc: {
    slug: 'aapc',
    title: 'AAPC Medical Coding Study Materials',
    shortTitle: 'AAPC Medical Coding',
    category: 'Healthcare & Coding',
    governingBody: 'American Academy of Professional Coders (AAPC)',
    tagline: 'Codebook tabbing guides, CPT/ICD-10/HCPCS revision notes, operative report walkthroughs, and CPC mock exams.',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Prepare for AAPC medical coding examinations (CPC, CIC, COC) with specialized revision materials. Includes codebook tabbing diagrams, Evaluation and Management (E/M) decision tables, CPT modifier guides, and operative report coding practice sets.',
    availableMaterials: [
      {
        title: 'Official Codebook Tabbing & Highlighting Guide',
        description: 'Diagrams and instructions for tabbing CPT®, ICD-10-CM, and HCPCS Level II codebooks for rapid exam lookup.',
      },
      {
        title: 'Evaluation & Management (E/M) Guidelines Reference Sheet',
        description: 'Medical Decision Making (MDM) complexity charts, time-based coding rules, and 2023 E/M guideline updates.',
      },
      {
        title: 'Operative Report Practice Case Studies',
        description: 'Real clinical surgical notes with step-by-step code assignment explanations and modifier rationales.',
      },
      {
        title: '100-Question Timed AAPC Mock Exam Sets',
        description: 'Simulated 4-hour open-book mock tests with detailed answer rationales for every question.',
      },
    ],
    topicsCovered: [
      'ICD-10-CM Official Coding Guidelines & Disease Sequencing',
      'CPT Procedure Coding (10000-60000 Surgery, Radiology, Lab, Medicine)',
      'Evaluation & Management (E/M) & Anesthesia Guidelines',
      'HCPCS Level II Supplies, Injectables & NCCI Edits',
      'CPT Modifiers (-25, -59, -50, -57) & Compliance Guidelines',
    ],
    faqs: [
      {
        question: 'Are codebook tabbing instructions included?',
        answer: 'Yes! We provide complete tabbing diagrams and color-coded section placement recommendations for official AMA codebooks.',
      },
    ],
  },

  cpc: {
    slug: 'cpc',
    title: 'Certified Professional Coder (CPC) Study Materials',
    shortTitle: 'CPC Certified Coder',
    category: 'Healthcare & Coding',
    governingBody: 'AAPC',
    tagline: 'CPC exam domain notes, operative report coding walkthroughs, anatomy reference sheets, and timed practice tests.',
    heroImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    overview:
      'The CPC® Study Package delivers high-impact revision guides tailored for physician office and outpatient medical coders. Focuses on surgical body systems, E/M complexity, anatomy/medical terminology, and speed-coding strategies.',
    availableMaterials: [
      {
        title: 'CPT Surgical Body Systems Coding Summary',
        description: 'High-yield notes for Integumentary, Musculoskeletal, Respiratory, Cardiovascular, Digestive, and Urinary coding.',
      },
      {
        title: 'Anatomy & Medical Terminology Reference Guide',
        description: 'Anatomical illustrations, prefix/suffix glossaries, and disease process definitions tested on the CPC exam.',
      },
      {
        title: 'Operative Report Practice Exercises',
        description: 'Clinical operative note coding exercises with comprehensive rationale breakdowns.',
      },
      {
        title: 'CPC Timed Diagnostic Practice Exams',
        description: '100-item practice exams divided into anatomical sections, E/M, Anesthesia, and Compliance.',
      },
    ],
    topicsCovered: [
      'CPT Surgical Series (10000 - 60000) & Body Systems',
      'Evaluation & Management (E/M) & Medical Decision Making',
      'Anesthesia, Radiology, Pathology & Laboratory Coding',
      'Anatomy, Medical Terminology & OIG/HIPAA Compliance',
      'Rapid Codebook Lookup & Elimination Strategies',
    ],
    faqs: [
      {
        question: 'How do I request CPC study notes?',
        answer: 'Use the inquiry form on this page or message our team on WhatsApp for pricing and access options.',
      },
    ],
  },

  ccma: {
    slug: 'ccma',
    title: 'Certified Clinical Medical Assistant (CCMA) Study Materials',
    shortTitle: 'CCMA Clinical Assistant',
    category: 'Healthcare & Medical Assisting',
    governingBody: 'National Healthcareer Association (NHA)',
    tagline: 'NHA CCMA study guides, clinical patient care notes, EKG/phlebotomy flashcards, and practice exam banks.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Prepare for the NHA CCMA certification exam with structured revision resources. Covering Clinical Patient Care (56%), Diagnostics & Phlebotomy (20%), Basic Science (10%), and Administrative Responsibilities (14%).',
    availableMaterials: [
      {
        title: 'Clinical Patient Care & Vital Signs Study Guide',
        description: 'Notes covering physical exam assistance, infection control (CDC/OSHA), pharmacology, and dosage math.',
      },
      {
        title: 'Phlebotomy Order of Draw & EKG Flashcards',
        description: 'Color-coded tube order of draw, additive reference, and 12-lead EKG placement & cardiac rhythm flashcards.',
      },
      {
        title: 'Medical Assisting Basic Science Summary',
        description: 'Anatomy and physiology, disease processes, medical terminology, and nutrition summaries.',
      },
      {
        title: '150-Question NHA CCMA Practice Exam Sets',
        description: 'Timed full-length mock exams with answer rationales matching NHA test plan weightings.',
      },
    ],
    topicsCovered: [
      'Clinical Patient Care, Vital Signs & Infection Control',
      'Phlebotomy Techniques, Specimen Handling & Order of Draw',
      '12-Lead EKG Placement, Cardiac Rhythms & Artifacts',
      'Pharmacology Math, Dosage Calculations & Administration',
      'EHR Documentation, HIPAA & Administrative Duties',
    ],
    faqs: [
      {
        question: 'Does this cover both clinical and administrative NHA topics?',
        answer: 'Yes! The materials cover all 4 official NHA CCMA test plan domains including clinical procedures, phlebotomy, EKG, and administrative duties.',
      },
    ],
  },

  cna: {
    slug: 'cna',
    title: 'Certified Nursing Assistant (CNA) Study Materials',
    shortTitle: 'CNA Nursing Assistant',
    category: 'Healthcare & Nursing',
    governingBody: 'State Board of Nursing / Prometric / Credentia',
    tagline: 'State CNA competency study guides, written knowledge notes, and clinical skills step-by-step checklists.',
    heroImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Prepare for your state CNA competency evaluation with complete study resources. Covering Physical Care Skills (40%), Infection Control & Safety (30%), and Resident Rights & Communication (30%), alongside step-by-step clinical skill checklists.',
    availableMaterials: [
      {
        title: 'CNA Written Knowledge Exam Study Guide',
        description: 'Revision notes covering infection control, vital sign normal ranges, ADLs, hygiene, and patient mobility.',
      },
      {
        title: 'Clinical Skills Step-by-Step Evaluation Checklist',
        description: 'Detailed checklists for mandatory clinical skills (hand hygiene, blood pressure, bed bath, transfer belt).',
      },
      {
        title: 'Infection Control & Patient Rights Flashcards',
        description: 'Standard precautions, PPE order, Heimlich maneuver, HIPAA, and abuse prevention flashcards.',
      },
      {
        title: 'State Competency Practice Question Banks',
        description: 'Timed practice exams matching Prometric, Credentia, and Headmaster written test formats.',
      },
    ],
    topicsCovered: [
      'Activities of Daily Living (ADLs), Hygiene, Nutrition & Mobility',
      'Infection Control, Hand Hygiene & Standard Precautions',
      'Vital Signs Measurement & Normal Range Reference',
      'Resident Rights, HIPAA & Communication Strategies',
      'Mandatory Clinical Skills Step-by-Step Execution',
    ],
    faqs: [
      {
        question: 'Does this cover both the written exam and clinical skills test?',
        answer: 'Yes! Materials include written exam practice question banks and step-by-step clinical skill checklists.',
      },
    ],
  },

  cpht: {
    slug: 'cpht',
    title: 'Certified Pharmacy Technician (CPhT) Study Materials',
    shortTitle: 'CPhT Pharmacy Technician',
    category: 'Healthcare & Pharmacy',
    governingBody: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'Top 200 drug flashcards, pharmacy math formula sheets, DEA law summaries, and PTCB mock exams.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Prepare for the PTCB CPhT certification exam with targeted study resources. Covering Medications & Pharmacology (40%), Patient Safety & Quality Assurance (26.25%), Order Entry & Pharmacy Math (21.25%), and Federal Pharmacy Law (12.5%).',
    availableMaterials: [
      {
        title: 'Top 200 Drug Brand & Generic Flashcard Set',
        description: 'Brand/generic names, drug classifications, indications, and side effect reference guides.',
      },
      {
        title: 'Pharmacy Math Calculation Formula Sheet',
        description: 'Step-by-step formula walkthroughs for dosage math, alligations, IV flow rates, and percentage strength.',
      },
      {
        title: 'Federal Pharmacy Law & DEA Controlled Substances Guide',
        description: 'Controlled Substances Act schedules I-V, DEA Form 222/224 rules, FDA recalls, and USP <795>/<797> rules.',
      },
      {
        title: 'PTCB 90-Question Timed Mock Exam Sets',
        description: 'Simulated practice exams matching official PTCB test computer interfaces and math calculation items.',
      },
    ],
    topicsCovered: [
      'Top 200 Drug Brand/Generic Names, Classes & Indications',
      'Pharmacy Math: Dosage Calculations, Alligations & IV Drip Rates',
      'Controlled Substances Act, DEA Regulations & Federal Drug Law',
      'Sterile & Non-Sterile Compounding (USP <795> & <797>)',
      'Medication Safety, ISMP High-Alert Drugs & Error Prevention',
    ],
    faqs: [
      {
        question: 'What pharmacy math topics are included in the formula sheet?',
        answer: 'The formula sheet covers dosage math, alligations, IV drip rates, powder volume, and percentage strength calculations.',
      },
    ],
  },

  'learning-guides-library': {
    slug: 'learning-guides-library',
    title: 'Learning Guides & Educational Resource Library',
    shortTitle: 'Learning Guides & Library',
    category: 'Educational Library',
    governingBody: 'TUTOR PROCTORED EXAMS',
    tagline: 'Comprehensive academic revision guides, study templates, time-blocking schedules, and concept outlines.',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Our Learning Guides & Educational Resource Library delivers structured revision guides, time-blocking study planners, active recall flashcard systems, and academic concept outlines designed for college students and certification candidates.',
    availableMaterials: [
      {
        title: 'Time-Blocked Weekly Study Planners',
        description: 'Customizable daily study templates integrating active recall and spaced repetition schedules.',
      },
      {
        title: 'Academic Exam Preparation Checklists',
        description: 'Comprehensive 4-week, 2-week, and 48-hour exam day preparation checklists.',
      },
      {
        title: 'Active Recall & Flashcard System Guides',
        description: 'Instructions on building high-yield flashcard decks and Feynman learning technique routines.',
      },
    ],
    topicsCovered: [
      'Active Recall & Spaced Repetition Study Methodologies',
      'Time-Blocking & Weekly Study Schedule Optimization',
      'Exam Anxiety Reduction & Test-Taking Pacing Strategies',
      'Academic Note-Taking & Concept Synthesis Frameworks',
    ],
    faqs: [
      {
        question: 'Are these learning guides suitable for university courses?',
        answer: 'Yes! Our study planners and revision guides apply across all undergraduate STEM, business, and healthcare courses.',
      },
    ],
  },

  'exam-preparation-faq': {
    slug: 'exam-preparation-faq',
    title: 'Exam Preparation & Technical Support FAQ',
    shortTitle: 'Exam Preparation FAQ',
    category: 'Student Support',
    governingBody: 'TUTOR PROCTORED EXAMS',
    tagline: 'Frequently asked questions regarding study resources, tutoring options, and technical assistance.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Find clear answers regarding study materials access, 1-on-1 tutoring options, proctoring software technical guidance, and sales inquiry procedures.',
    availableMaterials: [
      {
        title: 'Study Materials Inquiry Guide',
        description: 'Step-by-step guidance on requesting revision notes, practice question sets, and mock exams.',
      },
      {
        title: 'Proctoring Software Setup FAQ',
        description: 'Answers covering system requirements and camera/browser pre-checks for Respondus, Examplify, and ProctorU.',
      },
    ],
    topicsCovered: [
      'Study Materials Availability, Pricing & Access Procedure',
      '1-on-1 Tutoring Session Formats & Custom Schedule Setup',
      'Proctoring Software System Requirements & OS Compatibility',
    ],
    faqs: [
      {
        question: 'How do I contact sales to inquire about study materials?',
        answer: 'Fill out the inquiry form on any resource page or click "Chat on WhatsApp" to connect with our team directly.',
      },
    ],
  },

  'system-setup-guidance': {
    slug: 'system-setup-guidance',
    title: 'System Setup & Proctoring Technical Guidance',
    shortTitle: 'System Setup Guidance',
    category: 'System Readiness',
    tagline: 'Technical setup guides, OS compatibility checks, and background application conflict resolution.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Proactive technical guidance to verify your computer, operating system, webcam, microphone, and internet connection satisfy official requirements for platforms like Respondus, Examplify, Honorlock, ProctorU, and Proctorio.',
    availableMaterials: [
      {
        title: 'Proctoring Software Diagnostic Checklist',
        description: 'Hardware, webcam, microphone, and OS compatibility verification checklist.',
      },
      {
        title: 'Background Application Conflict Guide',
        description: 'Step-by-step instructions for identifying and terminating background process conflicts in Task Manager / Activity Monitor.',
      },
    ],
    topicsCovered: [
      'Windows 11/10 & macOS Compatibility Standards',
      'Webcam, Microphone & OS Privacy Permission Setup',
      'Background Application Conflict Resolution (Zoom, Teams, Spotify)',
      'Pre-Exam Dry Run Diagnostic Checklist',
    ],
    faqs: [
      {
        question: 'Does this service assist with proctoring browser setup?',
        answer: 'Yes! We provide legitimate technical system checks so your computer is 100% test-day ready.',
      },
    ],
  },
};
