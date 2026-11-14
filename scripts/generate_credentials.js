const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('================================================================');
console.log('TUTOR PROCTORED EXAMS — PRODUCTION CREDENTIALS HASH GENERATOR');
console.log('================================================================\n');

rl.question('Enter desired Administrator Password: ', (password) => {
  if (!password || password.trim().length < 6) {
    console.error('\nERROR: Password must be at least 6 characters long.');
    rl.close();
    process.exit(1);
  }

  const saltRounds = 12;
  const hash = bcrypt.hashSync(password.trim(), saltRounds);
  const sessionSecret = crypto.randomBytes(32).toString('hex');

  console.log('\n----------------------------------------------------------------');
  console.log('SUCCESS! Copy the variables below to Hostinger Environment Variables:');
  console.log('----------------------------------------------------------------\n');
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  console.log(`SESSION_SECRET=${sessionSecret}`);
  console.log('\n----------------------------------------------------------------');
  console.log('IMPORTANT: Never commit plaintext passwords or hashes to Git!');
  console.log('----------------------------------------------------------------\n');

  rl.close();
});
