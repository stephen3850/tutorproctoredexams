const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('PROGRAMMATIC COVERAGE MAP & QUESTION ID AUDIT VALIDATION');
console.log('================================================================\n');

const origPath = path.join(__dirname, '..', 'content', 'original_300_questions.json');
const mapPath = path.join(__dirname, '..', 'content', 'coverage_map.json');

const origData = JSON.parse(fs.readFileSync(origPath, 'utf8'));
const mapData = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

// 1. Check total count
if (origData.questions.length !== 300) {
  console.error(`FAIL: original_300_questions.json contains ${origData.questions.length} questions (expected 300).`);
  process.exit(1);
}

if (mapData.questions.length !== 300) {
  console.error(`FAIL: coverage_map.json contains ${mapData.questions.length} questions (expected 300).`);
  process.exit(1);
}

// 2. Check unique IDs
const origIds = new Set(origData.questions.map((q) => q.id));
const mapIds = new Set(mapData.questions.map((q) => q.id));

if (origIds.size !== 300 || mapIds.size !== 300) {
  console.error(`FAIL: Duplicate IDs detected. Original IDs: ${origIds.size}, Map IDs: ${mapIds.size}`);
  process.exit(1);
}

// 3. Compare wording
let wordingMismatches = 0;
for (let i = 0; i < 300; i++) {
  const origQ = origData.questions[i];
  const mapQ = mapData.questions[i];

  if (origQ.id !== mapQ.id || origQ.question !== mapQ.questionText) {
    console.error(`Mismatch at index ${i}: Orig [${origQ.id}: ${origQ.question}] vs Map [${mapQ.id}: ${mapQ.questionText}]`);
    wordingMismatches++;
  }
}

if (wordingMismatches > 0) {
  console.error(`FAIL: ${wordingMismatches} wording mismatches found.`);
  process.exit(1);
}

// 4. Verify allowed statuses & calculate totals
const allowedStatuses = ['verified', 'partial', 'answered_unverified', 'unanswered'];
const totals = {
  verified: 0,
  partial: 0,
  answered_unverified: 0,
  unanswered: 0,
};

mapData.questions.forEach((q) => {
  if (!allowedStatuses.includes(q.status)) {
    console.error(`FAIL: Invalid status "${q.status}" on ${q.id}`);
    process.exit(1);
  }
  totals[q.status]++;
});

const sum = totals.verified + totals.partial + totals.answered_unverified + totals.unanswered;

console.log('PROGRAMMATIC AUDIT STATS:');
console.log(`- Total Unique Original Question IDs: 300 (Q001 - Q300)`);
console.log(`- Verified Status Count: ${totals.verified}`);
console.log(`- Partial Status Count: ${totals.partial}`);
console.log(`- Answered Unverified Status Count: ${totals.answered_unverified}`);
console.log(`- Unanswered Status Count: ${totals.unanswered}`);
console.log(`- Programmatic Status Sum: ${sum} / 300`);

if (sum === 300) {
  console.log('\n================================================================');
  console.log('SUCCESS: ALL 300 QUESTIONS ACCOUNTED FOR WITH 100% MATCHING WORDING!');
  console.log('================================================================');
} else {
  console.error(`FAIL: Status sum (${sum}) does not equal 300.`);
  process.exit(1);
}
