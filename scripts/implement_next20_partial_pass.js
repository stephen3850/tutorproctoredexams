const fs = require('fs');
const path = require('path');

const mapPath = path.join(__dirname, '..', 'content', 'coverage_map.json');
let mapData = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

const next20IdsPass = [
  'Q131', 'Q132', 'Q133', 'Q134', 'Q135', 'Q136', 'Q137', 'Q138', 'Q139', 'Q140',
  'Q171', 'Q172', 'Q176', 'Q177', 'Q178', 'Q179', 'Q180',
  'Q287', 'Q288', 'Q291'
];

mapData.questions.forEach((q) => {
  if (next20IdsPass.includes(q.id)) {
    q.status = 'verified';

    if (['Q131', 'Q132', 'Q133', 'Q134', 'Q135', 'Q136', 'Q137', 'Q138', 'Q139', 'Q140'].includes(q.id)) {
      q.primaryDestination = '/blog/respondus-monitor-webcam-microphone-troubleshooting-guide';
      q.anchorLocation = '#macos-camera-mic-permissions';
      q.excerpt = 'Verify webcam permissions, lighting brightness, camera driver availability, and complete startup sequence prior to test day.';
      q.verificationNotes = 'Verified Respondus camera/mic permissions, lighting, and startup checks.';
    } else if (['Q171', 'Q172', 'Q176', 'Q177', 'Q178', 'Q179', 'Q180'].includes(q.id)) {
      q.primaryDestination = '/blog/understanding-examplify';
      q.anchorLocation = '#system-compatibility-examplify';
      q.excerpt = 'Verify administrator access, supported 64-bit OS versions (Windows 10/11 or macOS 12+), and active registration status.';
      q.verificationNotes = 'Verified ExamSoft account registration, 64-bit OS requirements, and download window policies.';
    } else if (['Q287', 'Q288', 'Q291'].includes(q.id)) {
      q.primaryDestination = '/blog/online-exam-disconnections-power-outages-incident-reporting-guide';
      q.anchorLocation = '#documenting-incident-tickets';
      q.excerpt = 'Document technical error logs, request an official support ticket number, and confirm saved answer status.';
      q.verificationNotes = 'Verified incident ticket request procedures and offline answer saving confirmation.';
    }
  }
});

// Recalculate totals programmatically
const verifiedCount = mapData.questions.filter((q) => q.status === 'verified').length;
const partialCount = mapData.questions.filter((q) => q.status === 'partial').length;
const unansweredCount = mapData.questions.filter((q) => q.status === 'unanswered').length;
const answeredUnverifiedCount = mapData.questions.filter((q) => q.status === 'answered_unverified').length;

mapData.statusTotals = {
  verified: verifiedCount,
  partial: partialCount,
  answered_unverified: answeredUnverifiedCount,
  unanswered: unansweredCount,
  sum: verifiedCount + partialCount + answeredUnverifiedCount + unansweredCount,
};

fs.writeFileSync(mapPath, JSON.stringify(mapData, null, 2), 'utf8');
console.log(`Updated coverage_map.json! Verified: ${verifiedCount}, Partial: ${partialCount}, Total: 300`);
