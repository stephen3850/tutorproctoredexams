const fs = require('fs');
const path = require('path');

const today = '2026-11-18';

// 1. Update lib/data/servicesData.js for online-exam-help
const servicesDataPath = path.join(__dirname, '..', 'lib', 'data', 'servicesData.js');
let servicesCode = fs.readFileSync(servicesDataPath, 'utf8');

const updatedOnlineExamHelp = `  'online-exam-help': {
    slug: 'online-exam-help',
    title: 'Online Exam Help & Preparation Services',
    category: 'Online Learning & Exam Services',
    focusKeyword: 'online exam help',
    metaTitle: 'Online Exam Help & Preparation Services | TUTOR PROCTORED EXAMS',
    metaDescription: 'Get expert online exam help before test day. 1-on-1 subject tutoring, practice questions, study planning, and proctoring software technical guidance.',
    tagline: 'Comprehensive study coaching, module breakdowns, formula walkthroughs, and technical readiness for university online exams.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Online Exam Help provides legitimate, pre-exam academic tutoring, structured revision roadmaps, formula walkthroughs, and technical readiness checks for college midterms, final examinations, and standardized assessments. We empower students to master course content, eliminate exam anxiety, and test with complete independent confidence.',
    suitableFor: [
      'University students preparing for high-stakes online midterms, quizzes, or cumulative final exams',
      'Learners struggling with time management, complex problem sets, or scenario-based questions',
      'Students taking proctored exams on Canvas, Blackboard, Respondus, ProctorU, Examplify, or Honorlock',
      'Distance education candidates requiring structured 1-on-1 revision and study schedules',
    ],
    whatItIncludes: [
      '1-on-1 virtual tutoring sessions with qualified academic subject specialists',
      'Syllabus-aligned high-yield concept reviews and problem walkthroughs',
      'Timed mock practice questions with comprehensive answer rationale breakdowns',
      'Pre-exam hardware, webcam, microphone, and proctoring browser setup checks',
    ],
    howItWorks: [
      { step: '01', name: 'Syllabus & Exam Audit', desc: 'We review your course outline, exam scope, and instructor study guide.' },
      { step: '02', name: 'Personalized Study Plan', desc: 'Develop a time-blocked revision roadmap leading to your test date.' },
      { step: '03', name: 'Interactive Tutoring', desc: 'Work through active problem-solving sessions and formula drills.' },
      { step: '04', name: 'Technical Readiness Check', desc: 'Verify webcam permissions, OS updates, and proctoring software compatibility.' },
    ],
    benefits: [
      'Build deep subject comprehension rather than relying on last-minute cramming',
      'Improve question-elimination speed and pacing under timed conditions',
      'Avoid test-day technical lockouts and camera permission errors',
      'Test with total independent capability, peace of mind, and academic integrity',
    ],
    relatedPlatformsOrCerts: ['Respondus LockDown Browser', 'Examplify', 'Honorlock', 'ProctorU', 'Canvas', 'Blackboard'],
    faqs: [
      {
        question: 'What does Online Exam Help include?',
        answer: 'Online Exam Help includes 1-on-1 subject tutoring, study planning, practice question walkthroughs, and pre-exam proctoring software technical checks.',
      },
      {
        question: 'Does Online Exam Help involve taking tests for students or providing live exam answers?',
        answer: 'No. TUTOR PROCTORED EXAMS strictly adheres to academic integrity. We do NOT take exams for students or provide live test answers. All support is 100% legitimate pre-exam tutoring and technical guidance.',
      },
      {
        question: 'How far in advance of my exam should I request online exam help?',
        answer: 'We recommend requesting support 2 to 4 weeks before major midterm or final exams to allow adequate spaced repetition and mock testing.',
      },
      {
        question: 'Which exam platforms and learning management systems do you support?',
        answer: 'We support university courses delivered on Canvas, Blackboard, Brightspace, Moodle, Respondus LockDown Browser, Examplify, Honorlock, and ProctorU.',
      },
      {
        question: 'Can I get help with specific math, science, or healthcare calculations?',
        answer: 'Yes! Tutors provide step-by-step walkthroughs for college algebra, statistics, chemistry, physics, and nursing dosage calculations.',
      },
      {
        question: 'How do I request online exam help for my course?',
        answer: 'Click "Contact Us" or "Submit an Inquiry" to share your course syllabus and test date with an educational advisor within 1 business day.',
      },
    ],
  },`;

// Replace 'online-exam-help' block in servicesData.js
const startHelpIdx = servicesCode.indexOf("'online-exam-help':");
if (startHelpIdx !== -1) {
  const endHelpIdx = servicesCode.indexOf('},', startHelpIdx);
  if (endHelpIdx !== -1) {
    servicesCode = servicesCode.slice(0, startHelpIdx) + updatedOnlineExamHelp + servicesCode.slice(endHelpIdx + 2);
    fs.writeFileSync(servicesDataPath, servicesCode, 'utf8');
    console.log('Updated lib/data/servicesData.js online-exam-help record');
  }
}

// 2. Update content/services.json
const servicesJsonPath = path.join(__dirname, '..', 'content', 'services.json');
let servicesJson = JSON.parse(fs.readFileSync(servicesJsonPath, 'utf8'));

const helpEntry = servicesJson.services.find((s) => s.slug === 'online-exam-help');
if (helpEntry) {
  helpEntry.title = 'Online Exam Help & Preparation Services';
  helpEntry.focusKeyword = 'online exam help';
  helpEntry.metaTitle = 'Online Exam Help & Preparation Services | TUTOR PROCTORED EXAMS';
  helpEntry.metaDescription = 'Get expert online exam help before test day. 1-on-1 subject tutoring, practice questions, study planning, and proctoring software technical guidance.';
  helpEntry.faqs = [
    {
      question: 'What does Online Exam Help include?',
      answer: 'Online Exam Help includes 1-on-1 subject tutoring, study planning, practice question walkthroughs, and pre-exam proctoring software technical checks.',
    },
    {
      question: 'Does Online Exam Help involve taking tests for students or providing live exam answers?',
      answer: 'No. TUTOR PROCTORED EXAMS strictly adheres to academic integrity. We do NOT take exams for students or provide live test answers. All support is 100% legitimate pre-exam tutoring and technical guidance.',
    },
    {
      question: 'How far in advance of my exam should I request online exam help?',
      answer: 'We recommend requesting support 2 to 4 weeks before major midterm or final exams to allow adequate spaced repetition and mock testing.',
    },
    {
      question: 'Which exam platforms and learning management systems do you support?',
      answer: 'We support university courses delivered on Canvas, Blackboard, Brightspace, Moodle, Respondus LockDown Browser, Examplify, Honorlock, and ProctorU.',
    },
    {
      question: 'Can I get help with specific math, science, or healthcare calculations?',
      answer: 'Yes! Tutors provide step-by-step walkthroughs for college algebra, statistics, chemistry, physics, and nursing dosage calculations.',
    },
    {
      question: 'How do I request online exam help for my course?',
      answer: 'Click "Contact Us" or "Submit an Inquiry" to share your course syllabus and test date with an educational advisor within 1 business day.',
    },
  ];

  fs.writeFileSync(servicesJsonPath, JSON.stringify(servicesJson, null, 2), 'utf8');
  console.log('Updated content/services.json online-exam-help record');
}
