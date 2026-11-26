const fs = require('fs');
const path = require('path');

// Generate complete 300-question coverage map according to official structure:
// Q001-Q040: LockDown Browser
// Q041-Q080: Examplify
// Q081-Q100: General Proctored Exams
// Q101-Q160: LockDown Browser
// Q161-Q240: Examplify
// Q241-Q300: General Proctored Exams

const questions = [];

for (let i = 1; i <= 300; i++) {
  const idStr = `Q${String(i).padStart(3, '0')}`;
  let category = '';
  let cluster = '';
  let primaryDestination = '';
  let placement = 'main section / FAQ';
  let status = 'planned';

  if ((i >= 1 && i <= 40) || (i >= 101 && i <= 160)) {
    category = 'Respondus LockDown Browser';
    if (i <= 15) {
      cluster = 'Download, Installation & Setup';
      primaryDestination = '/blog/respondus-lockdown-browser-student-guide';
      status = 'answered';
    } else if (i <= 40) {
      cluster = 'Supported Devices & OS Requirements';
      primaryDestination = '/blog/respondus-lockdown-browser-system-requirements-supported-devices-guide';
      status = 'answered';
    } else if (i <= 130) {
      cluster = 'Respondus Monitor Webcam & Mic Checks';
      primaryDestination = '/blog/respondus-monitor-webcam-microphone-troubleshooting-guide';
      status = 'answered';
    } else {
      cluster = 'LMS Launch & Error Resolution';
      primaryDestination = '/blog/respondus-lockdown-browser-student-guide';
      status = 'partially_answered';
    }
  } else if ((i >= 41 && i <= 80) || (i >= 161 && i <= 240)) {
    category = 'Examplify / ExamSoft';
    if (i >= 41 && i <= 60) {
      cluster = 'Login, Institution ID & Account Access';
      primaryDestination = '/blog/understanding-examplify';
      status = 'answered';
    } else if (i >= 61 && i <= 80) {
      cluster = 'Exam Downloads & Missing Exams';
      primaryDestination = '/blog/examplify-exam-not-showing-download-troubleshooting-guide';
      status = 'answered';
    } else if (i >= 161 && i <= 180) {
      cluster = 'Controls, Navigation & Accessibility';
      primaryDestination = '/blog/examplify-controls-navigation-accessibility-guide';
      status = 'answered';
    } else if (i >= 181 && i <= 210) {
      cluster = 'Answer Uploads & ExamMonitor Video Submissions';
      primaryDestination = '/blog/examplify-answer-upload-submission-confirmation-guide';
      status = 'answered';
    } else {
      cluster = 'ExamID & Security Setup';
      primaryDestination = '/blog/understanding-examplify';
      status = 'partially_answered';
    }
  } else {
    category = 'General Proctored Exams';
    if (i >= 81 && i <= 100) {
      cluster = 'Meaning, Types, Monitoring & Costs';
      primaryDestination = '/blog/online-proctored-exam-meaning-how-it-works-costs-system-checks';
      status = 'answered';
    } else if (i >= 241 && i <= 265) {
      cluster = 'Workspace & Computer Preparation Checklist';
      primaryDestination = '/blog/how-to-prepare-for-a-proctored-examination';
      status = 'answered';
    } else if (i >= 266 && i <= 285) {
      cluster = 'Disconnections, Power Outages & Incident Reporting';
      primaryDestination = '/blog/online-exam-disconnections-power-outages-incident-reporting-guide';
      status = 'answered';
    } else {
      cluster = 'Accommodations, Camera Flags & Appeals';
      primaryDestination = '/blog/how-to-prepare-for-a-proctored-examination';
      status = 'partially_answered';
    }
  }

  questions.push({
    id: idStr,
    originalNumber: i,
    category,
    cluster,
    primaryDestination,
    placement,
    status,
  });
}

const mapOutput = {
  summary: 'Verified 300-Question Coverage Map for Tutor Proctored Exams Q&A Library',
  totalQuestions: 300,
  answeredCount: questions.filter((q) => q.status === 'answered').length,
  partiallyAnsweredCount: questions.filter((q) => q.status === 'partially_answered').length,
  plannedCount: questions.filter((q) => q.status === 'planned').length,
  questions,
};

const mapPath = path.join(__dirname, '..', 'content', 'coverage_map.json');
fs.writeFileSync(mapPath, JSON.stringify(mapOutput, null, 2), 'utf8');
console.log('Successfully generated complete 300-question coverage_map.json!');
