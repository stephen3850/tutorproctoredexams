export const PLATFORMS_DATA = {
  'respondus-lockdown-browser': {
    slug: 'respondus-lockdown-browser',
    name: 'Respondus LockDown Browser',
    shortName: 'Respondus',
    category: 'Custom Browser Security',
    tagline: 'Custom web browser that locks down the testing environment within learning management systems.',
    vendor: 'Respondus Inc.',
    overview:
      'Respondus LockDown Browser is a specialized, locked browser designed for taking assessments in learning management systems such as Canvas, Blackboard, Brightspace, and Moodle. When an exam requires LockDown Browser, students are prevented from printing, copying, visiting other websites, or accessing other applications during the test session.',
    features: [
      'Blocks access to web browsers, messaging apps, and screen-sharing software',
      'Disables task switching, right-click menus, and copy-paste shortcuts',
      'Integrates directly with university Canvas, Blackboard, and Moodle courses',
      'Optional Respondus Monitor automated webcam recording and flags',
    ],
    systemRequirements: {
      windows: 'Windows 11 or Windows 10 (version 1607 or higher). Standard desktop edition.',
      macOS: 'macOS 10.15 (Catalina) to macOS 14 (Sonoma) or newer.',
      chromebook: 'ChromeOS with the official Respondus extension enabled by institution administrator.',
      iOS: 'iPadOS 12.0+ (Only if specifically allowed by the instructor/institution).',
      hardware: '1024x768 minimum resolution, 4 GB RAM, 200 MB free storage, functional webcam and microphone for Respondus Monitor.',
    },
    prepConsiderations: [
      'Install the specific version of LockDown Browser provided by your university’s LMS login page.',
      'Close all background software including Discord, Teams, Zoom, Spotify, and antivirus overlays prior to launch.',
      'Verify webcam and microphone permissions in your operating system privacy settings.',
      'Complete a non-graded practice quiz in your course at least 48 hours before your real exam.',
    ],
    troubleshooting: [
      {
        issue: 'Error: "You must close the following applications before starting..."',
        solution: 'Open Task Manager (Windows) or Activity Monitor (macOS) and end processes like Spotify, Teams, Skype, or screen-recording software.',
      },
      {
        issue: 'Webcam check fails or shows a black preview screen',
        solution: 'Check OS privacy permissions under System Settings > Privacy & Security > Camera to ensure LockDown Browser is allowed access.',
      },
      {
        issue: 'Stuck on "Loading Exam" or white screen',
        solution: 'Clear your default web browser cache, restart your router, and relaunch LockDown Browser directly from your LMS quiz page.',
      },
    ],
    faqs: [
      {
        question: 'Can I use a regular Chrome or Safari browser for Respondus exams?',
        answer: 'No. Respondus LockDown Browser is a dedicated application that must be downloaded and launched specifically for locked tests.',
      },
      {
        question: 'Does Respondus LockDown Browser work on Chromebooks?',
        answer: 'Yes, but only if your institution administrator has enabled the Chromebook extension for your course LMS.',
      },
      {
        question: 'How can TUTOR PROCTORED EXAMS help with Respondus exams?',
        answer: 'We provide 1-on-1 subject tutoring, study guides, practice question reviews, and system compatibility verification to help you perform your best independently.',
      },
    ],
  },

  examplify: {
    slug: 'examplify',
    name: 'Examplify',
    shortName: 'ExamSoft',
    category: 'Secure Assessment Software',
    tagline: 'High-security assessment application used in law schools, nursing programs, and professional boards.',
    vendor: 'ExamSoft Worldwide LLC / Turnitin',
    overview:
      'Examplify (developed by ExamSoft) is a secure testing application used extensively across US law schools, medical schools, nursing colleges, and state bar examinations. Examplify delivers exams offline after downloading the secure exam file, blocking access to all background applications, internet browsing, and files during the examination.',
    features: [
      'Offline exam delivery preventing internet dependency during test taking',
      'Complete computer lockdown blocking external software and files',
      'Automated encrypted answer file upload upon exam completion',
      'Integrated spell-checking, essay word counters, and highlight tools',
    ],
    systemRequirements: {
      windows: '64-bit versions of Windows 10 and Windows 11. (ARM processors and Windows S mode not supported).',
      macOS: 'macOS 12 (Monterey), macOS 13 (Ventura), macOS 14 (Sonoma).',
      chromebook: 'Not supported. Examplify requires native Windows or macOS operating systems.',
      iOS: 'iPadOS 15.0+ supported for specific institutional deployments only.',
      hardware: 'Minimum 4 GB RAM (8 GB recommended), 4 GB available hard drive space, 1366x768 screen resolution, working webcam.',
    },
    prepConsiderations: [
      'Download your exam file within the institution-specified download window prior to test day.',
      'Ensure your laptop battery is fully charged and bring an approved AC power adapter.',
      'Verify your ExamSoft Institution ID, Username, and Password well in advance.',
      'Disable automatic operating system updates and antivirus full scans during exam hours.',
    ],
    troubleshooting: [
      {
        issue: 'Unable to download exam file ("Download Limit Exceeded" or error code)',
        solution: 'Contact your institution’s exam administrator or tech desk to request an exam download re-enablement.',
      },
      {
        issue: 'Examplify freezes during launch or password entry',
        solution: 'Restart your laptop, run Examplify as Administrator (Windows), and ensure no virtual machines or remote desktop tools are running.',
      },
      {
        issue: 'Answer upload fails after completing the exam',
        solution: 'Connect your computer to a stable Wi-Fi network or phone hotspot and click "Retry Upload". Your answers remain securely encrypted on your hard drive.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a continuous internet connection during an Examplify test?',
        answer: 'Usually no. Internet is required only to download the exam file before starting and to upload the answer file after finishing.',
      },
      {
        question: 'Can I take an Examplify test on a Chromebook or Surface RT?',
        answer: 'No. Examplify requires standard 64-bit versions of Windows 10/11 or macOS.',
      },
      {
        question: 'How do I prepare effectively for Examplify essay or MBE questions?',
        answer: 'We offer structured subject coaching, practice question breakdown, and study strategies tailored for law and nursing candidates.',
      },
    ],
  },

  honorlock: {
    slug: 'honorlock',
    name: 'Honorlock',
    shortName: 'Honorlock',
    category: 'Chrome Extension Proctoring',
    tagline: 'Cloud-based online proctoring extension for Google Chrome serving higher education.',
    vendor: 'Honorlock Inc.',
    officialWebsiteUrl: 'https://honorlock.com/',
    officialWebsiteLabel: 'Honorlock Official Website (USA)',
    overview:
      'Honorlock is an online proctoring service that operates as a Google Chrome browser extension. It is widely used by US colleges and universities to provide automated and live-triggered proctoring for exams within Canvas, Blackboard, Brightspace, and ulterior assessment systems without requiring software downloads outside Google Chrome.',
    features: [
      'Zero software download required—runs entirely within Google Chrome',
      'AI-assisted audio and webcam monitoring with live proctor intervention',
      'ID verification and 360-degree room environment scans',
      'Multi-device detection technology to protect test integrity',
    ],
    systemRequirements: {
      windows: 'Windows 10 or Windows 11.',
      macOS: 'macOS 10.14 or newer.',
      chromebook: 'ChromeOS 90+ fully supported via Google Chrome browser extension.',
      iOS: 'Not supported for taking exams; Chrome extension required on desktop/laptop/Chromebook.',
      hardware: 'Google Chrome browser (latest version), functional webcam, microphone, stable internet connection (min 1.5 Mbps upload/download).',
    },
    prepConsiderations: [
      'Install the official Honorlock extension from the Chrome Web Store.',
      'Ensure your testing room is quiet, well-lit, and free of extraneous electronics or study aids.',
      'Have a valid government-issued ID or student ID ready for webcam verification.',
      'Clear your desk area and be prepared to perform a room environment scan.',
    ],
    troubleshooting: [
      {
        issue: 'Chrome extension popup fails to load or hangs on "Connecting..."',
        solution: 'Disable third-party ad blockers or privacy extensions in Chrome, clear cache, and ensure Google Chrome is updated.',
      },
      {
        issue: 'Webcam or microphone not detected by Honorlock',
        solution: 'Click the lock icon in the Chrome address bar and ensure Camera and Microphone permissions are set to "Allow".',
      },
      {
        issue: 'Prompted for a password during an exam launch',
        solution: 'You should not enter a password manually. Honorlock automatically inserts the password when launched correctly through your LMS.',
      },
    ],
    faqs: [
      {
        question: 'Does Honorlock work on Safari, Edge, or Firefox?',
        answer: 'No. Honorlock requires the Google Chrome web browser and the official Honorlock Chrome extension.',
      },
      {
        question: 'Can I take an Honorlock exam on a Chromebook?',
        answer: 'Yes! Chromebooks are supported for Honorlock as long as you are using the official Chrome browser with the extension.',
      },
      {
        question: 'How can TUTOR PROCTORED EXAMS help me prepare for Honorlock exams?',
        answer: 'We provide subject tutoring, mock practice tests, time management coaching, and guidance on satisfying room and hardware requirements.',
      },
    ],
  },

  'proctoru-meazure-learning': {
    slug: 'proctoru-meazure-learning',
    name: 'ProctorU / Meazure Learning',
    shortName: 'ProctorU',
    category: 'Live & Automated Online Proctoring',
    tagline: 'Leading online proctoring and assessment platform for universities and certification bodies.',
    vendor: 'Meazure Learning',
    officialWebsiteUrl: 'https://www.proctoru.com/',
    officialWebsiteLabel: 'ProctorU / Meazure Learning Official Portal (USA)',
    overview:
      'ProctorU (by Meazure Learning) provides live human-proctored, record-and-review, and automated testing services for higher education institutions, professional credentialing organizations, and certification programs across the United States.',
    features: [
      'Live human proctor authentication, room checks, and real-time monitoring',
      'Guardian Browser or Chrome extension delivery modes depending on institution',
      '24/7 appointment scheduling and technician support',
      'Secure ID verification and workspace environment scanning',
    ],
    systemRequirements: {
      windows: 'Windows 10 or Windows 11 (64-bit).',
      macOS: 'macOS 10.15 (Catalina) to macOS 14 (Sonoma).',
      chromebook: 'Supported for select automated exams via Chrome extension; not supported for live proctored exams requiring Guardian Browser.',
      iOS: 'Not supported for taking exams.',
      hardware: 'Built-in or external webcam, microphone, speakers (headsets prohibited during test), min 3.0 Mbps download and 1.0 Mbps upload.',
    },
    prepConsiderations: [
      'Run the official ProctorU equipment test at least 24 hours prior to your scheduled session.',
      'Ensure you are in a private, quiet room with a closed door and clear work surface.',
      'Have an unexpired government-issued photo ID (driver’s license, passport) ready.',
      'Download and install the Meazure Learning Guardian Browser if required for your exam.',
    ],
    troubleshooting: [
      {
        issue: 'Technician cannot connect to your screen or video stream',
        solution: 'Temporarily disable firewall or VPN software, grant screen recording permissions under macOS System Preferences, and restart Chrome or Guardian Browser.',
      },
      {
        issue: 'Equipment test fails on RAM or CPU usage',
        solution: 'Close high-memory applications like Chrome tabs, video editors, or cloud sync tools prior to connecting.',
      },
      {
        issue: 'Disconnections during the live session',
        solution: 'Use a wired Ethernet cable instead of Wi-Fi if possible, and reconnect immediately through your ProctorU account dashboard.',
      },
    ],
    faqs: [
      {
        question: 'Are headsets or earbuds allowed during a ProctorU exam?',
        answer: 'Generally no. Most ProctorU exams require open speakers and a microphone so the proctor can hear ambient room sounds.',
      },
      {
        question: 'What is the Guardian Browser?',
        answer: 'The Guardian Browser is Meazure Learning’s secure browser application designed specifically to deliver ProctorU live proctored exams.',
      },
      {
        question: 'How does TUTOR PROCTORED EXAMS support ProctorU test takers?',
        answer: 'We offer comprehensive subject coaching, practice exams, time management, and pre-test equipment review to ensure full readiness.',
      },
    ],
  },

  proctorio: {
    slug: 'proctorio',
    name: 'Proctorio',
    shortName: 'Proctorio',
    category: 'Automated Remote Monitoring',
    tagline: 'Fully automated remote proctoring platform integrated into learning management systems.',
    vendor: 'Proctorio Inc.',
    officialWebsiteUrl: 'https://proctorio.com/',
    officialWebsiteLabel: 'Proctorio Official Automated Proctoring Platform (USA)',
    overview:
      'Proctorio is an automated remote proctoring solution operating as a Google Chrome extension. Integrated into LMS platforms like Canvas, Blackboard, and Moodle, Proctorio monitors video, audio, and screen activity during exams using algorithmic checks without requiring live human proctors.',
    features: [
      'Zero software installation outside the Google Chrome extension',
      'Automated identity verification and facial recognition checks',
      'Flexible proctoring settings configured directly by course instructors',
      'Encrypted video and lockdown recording stored securely in LMS',
    ],
    systemRequirements: {
      windows: 'Windows 10 or Windows 11.',
      macOS: 'macOS 10.13 or higher.',
      chromebook: 'ChromeOS 90+ fully supported.',
      iOS: 'Not supported for taking proctored exams.',
      hardware: 'Google Chrome browser, functioning webcam, microphone, minimum 2 GB RAM, 1 Mbps internet connection.',
    },
    prepConsiderations: [
      'Ensure the Proctorio Chrome extension is active in your browser settings.',
      'Take your test in a well-lit area with light facing your face, not behind you.',
      'Close all extra browser tabs and secondary computer monitors before starting.',
      'Complete the instructor’s practice quiz to test facial detection and microphone levels.',
    ],
    troubleshooting: [
      {
        issue: 'Prompted for an exam access code or password',
        solution: 'Re-install the Proctorio extension, clear Chrome cache, or ensure you are launching the test from inside your official LMS quiz page.',
      },
      {
        issue: '"Webcam not detected" or resolution check fails',
        solution: 'Allow Chrome camera permissions in your operating system settings and close other applications using the webcam.',
      },
      {
        issue: 'Extension uninstalling or crashing repeatedly',
        solution: 'Update Google Chrome to the latest stable release and remove conflicting browser extensions.',
      },
    ],
    faqs: [
      {
        question: 'Is there a live proctor watching me during a Proctorio exam?',
        answer: 'No. Proctorio relies on automated encryption and recording, which is reviewed asynchronously by your course instructor if flagged.',
      },
      {
        question: 'Does Proctorio work on mobile phones or tablets?',
        answer: 'No. Proctorio requires a laptop, desktop, or Chromebook running Google Chrome.',
      },
      {
        question: 'How can TUTOR PROCTORED EXAMS help me with Proctorio exams?',
        answer: 'We help you prepare through structured subject tutoring, practice questions, and technical readiness reviews.',
      },
    ],
  },

  proctortrack: {
    slug: 'proctortrack',
    name: 'Proctortrack',
    shortName: 'Proctortrack',
    category: 'Biometric Verification & Monitoring',
    tagline: 'Automated remote proctoring platform utilizing identity verification and monitoring.',
    vendor: 'Verificient Technologies Inc.',
    officialWebsiteUrl: 'https://www.proctortrack.com/canada/',
    officialWebsiteLabel: 'Proctortrack Canada Official Portal (Canada)',
    overview:
      'Proctortrack is an automated and live remote proctoring platform used by universities, online degree programs, and professional certification boards. It features biometric identity verification (face and ID scan) and continuous monitoring during online testing sessions.',
    features: [
      'Biometric face scanning and ID verification before exam access',
      'Automated background process monitoring and lockouts',
      'Detailed proctoring reports and incident flag logs for instructors',
      'Support for desktop app and browser-based proctoring modes',
    ],
    systemRequirements: {
      windows: 'Windows 10 or Windows 11 (64-bit).',
      macOS: 'macOS 10.15 or newer.',
      chromebook: 'Limited support depending on institutional configuration.',
      iOS: 'Not supported for exam delivery.',
      hardware: 'Working webcam, microphone, 4 GB RAM, 1 Mbps upload/download speed.',
    },
    prepConsiderations: [
      'Complete your initial Proctortrack onboarding profile scan prior to your exam date.',
      'Ensure your government or student ID photo is clear and readable.',
      'Clean your camera lens and test your room lighting to prevent shadow flags.',
      'Download the official Proctortrack desktop client if required by your program.',
    ],
    troubleshooting: [
      {
        issue: 'Onboarding face scan continuously rejected',
        solution: 'Adjust room lighting so light illuminates your face directly, remove hats or dark glasses, and face the camera straight on.',
      },
      {
        issue: 'App flags unauthorized background applications',
        solution: 'Close communication software, cloud synchronization tools, and extra background helpers using your system process manager.',
      },
      {
        issue: 'Download or installation error on macOS',
        solution: 'Open macOS Security & Privacy settings and allow installation of the Proctortrack application.',
      },
    ],
    faqs: [
      {
        question: 'What is Proctortrack Onboarding?',
        answer: 'Onboarding is a baseline scan where Proctortrack approves your face identity and ID before you can take real graded exams.',
      },
      {
        question: 'How does TUTOR PROCTORED EXAMS assist Proctortrack candidates?',
        answer: 'We provide personalized tutoring, practice question reviews, and system preparation to make your testing experience stress-free.',
      },
    ],
  },

  examity: {
    slug: 'examity',
    name: 'Examity',
    shortName: 'Examity',
    category: 'Enterprise Live & Auto Proctoring',
    tagline: 'Comprehensive live, auto, and record-and-review proctoring provider.',
    vendor: 'Examity Inc. / Meazure Learning',
    overview:
      'Examity is a widely adopted remote proctoring platform serving US higher education institutions and certification programs. It provides flexible proctoring security levels ranging from automated identity verification to 1-on-1 live proctoring.',
    features: [
      'Multiple security levels: Automated, Live Authentication, and Live Proctoring',
      'Integration with Canvas, Blackboard, Brightspace, and proprietary platforms',
      'Identity verification via photo ID and security questions',
      '24/7 technical support and session scheduling',
    ],
    systemRequirements: {
      windows: 'Windows 10 or Windows 11.',
      macOS: 'macOS 10.14 or newer.',
      chromebook: 'Supported for automated exams; live proctoring requires Windows or macOS.',
      iOS: 'Not supported.',
      hardware: 'Webcam, built-in or external microphone, 3.0 Mbps download speed, pop-up blockers disabled.',
    },
    prepConsiderations: [
      'Create and complete your Examity user profile and upload your photo ID early.',
      'Schedule your exam time slot well in advance to secure your preferred testing window.',
      'Disable pop-up blockers in Chrome, Firefox, or Edge prior to launching Examity.',
      'Ensure a quiet, distraction-free environment for the duration of the test.',
    ],
    troubleshooting: [
      {
        issue: 'Connect button is grayed out or inactive on dashboard',
        solution: 'Verify that your scheduled exam time has arrived and refresh your browser page.',
      },
      {
        issue: 'Proctor cannot hear or see you during live session',
        solution: 'Test browser permissions for microphone and camera access, or switch to Google Chrome if using another browser.',
      },
      {
        issue: 'Disconnected during exam transition',
        solution: 'Re-log into your Examity portal and click "Rejoin Session" to reconnect with a support technician.',
      },
    ],
    faqs: [
      {
        question: 'Which browsers are supported by Examity?',
        answer: 'Google Chrome and Mozilla Firefox are the recommended browsers for Examity sessions.',
      },
      {
        question: 'How can TUTOR PROCTORED EXAMS support Examity test candidates?',
        answer: 'We provide tailored subject tutoring, practice questions, and equipment setup reviews to help you pass independently.',
      },
    ],
  },

  psi: {
    slug: 'psi',
    name: 'PSI Bridge',
    shortName: 'PSI',
    category: 'Licensing & Certification Delivery',
    tagline: 'Secure exam delivery platform for government, trade, and professional licensing.',
    vendor: 'PSI Services LLC',
    overview:
      'PSI Bridge is a premier secure exam delivery platform used by state licensing boards, trade organizations, government agencies, and global certification providers. It offers both testing center and secure remote online proctored exams.',
    features: [
      'High-stakes licensing and certification test delivery',
      'PSI Bridge secure browser lockdown and environment scanning',
      'Live human proctor authentication and session oversight',
      'Strict adherence to national licensing board regulations',
    ],
    systemRequirements: {
      windows: 'Windows 10 or 11 (64-bit).',
      macOS: 'macOS 11 (Big Sur) or newer.',
      chromebook: 'Not supported for remote proctored PSI licensing exams.',
      iOS: 'Not supported.',
      hardware: 'Minimum 1366x768 resolution, 4 GB RAM, external or internal HD webcam, 5.0 Mbps download and 3.0 Mbps upload.',
    },
    prepConsiderations: [
      'Review your specific licensing board’s Candidate Information Bulletin (CIB).',
      'Run the official PSI compatibility check tool on the computer you plan to use.',
      'Ensure your testing room has a clean door, no wall notes, and no secondary screens.',
      'Have two forms of matching identification ready if required by your board.',
    ],
    troubleshooting: [
      {
        issue: 'PSI Secure Browser download fails or gets blocked by Windows Defender',
        solution: 'Select "Run Anyway" or add an exception in your antivirus software for the official PSI installer.',
      },
      {
        issue: 'Proctor requests second room scan due to lighting',
        solution: 'Ensure overhead lighting is bright and remove any reflective surfaces near your desk.',
      },
      {
        issue: 'System compatibility check fails on network speed',
        solution: 'Disconnect other household devices from Wi-Fi or plug in an Ethernet cable directly.',
      },
    ],
    faqs: [
      {
        question: 'Can I use dual monitors during a PSI remote exam?',
        answer: 'No. Dual monitors are strictly forbidden and must be physically unplugged before the session begins.',
      },
      {
        question: 'How does TUTOR PROCTORED EXAMS help with PSI licensing exams?',
        answer: 'We offer specialized subject review, candidate bulletin strategy, practice question walkthroughs, and technical readiness checks.',
      },
    ],
  },

  ati: {
    slug: 'ati',
    name: 'ATI Testing (TEAS)',
    shortName: 'ATI TEAS',
    category: 'Nursing & Allied Health Assessment',
    tagline: 'Comprehensive assessment and proctoring platform for nursing school entry and TEAS exams.',
    vendor: 'Assessment Technologies Institute (ATI)',
    overview:
      'ATI Testing is the premier assessment platform in US nursing and allied health education. It delivers the Test of Essential Academic Skills (TEAS) for nursing school admissions, as well as semester comprehensive content mastery exams delivered via remote proctoring or institution testing centers.',
    features: [
      'Standardized TEAS exam delivery across Reading, Math, Science, and English',
      'Integration with ATI Proctorio or live institution proctoring',
      'Detailed content mastery reports and diagnostic feedback',
      'Specialized nursing calculation and clinical judgment question formats',
    ],
    systemRequirements: {
      windows: 'Windows 10 or Windows 11.',
      macOS: 'macOS 10.13 or higher.',
      chromebook: 'Supported for TEAS remote exams via official Chrome extension.',
      iOS: 'Not supported for proctored TEAS exams.',
      hardware: 'Google Chrome browser, webcam, microphone, stable internet connection (min 2.0 Mbps).',
    },
    prepConsiderations: [
      'Perform a dry-run system test on your ATI account prior to exam day.',
      'Review ATI TEAS content areas: Reading, Mathematics, Human Anatomy & Physiology, and English Usage.',
      'Have an approved ATI dry-erase whiteboard or scratch paper as permitted by your proctor instructions.',
      'Log into your ATI student portal 30 minutes before your scheduled test time.',
    ],
    troubleshooting: [
      {
        issue: 'Card payment or ATI exam assessment code error',
        solution: 'Verify your institution-provided assessment ID code and ensure billing address matches your card.',
      },
      {
        issue: 'Webcam feed disconnects during TEAS science section',
        solution: 'Do not refresh the browser manually; notify your online proctor via chat or wait for automatic reconnection.',
      },
      {
        issue: 'Stuck on "Waiting for Proctor to Approve"',
        solution: 'Ensure your ID photo and facial scan are clearly visible in the preview window.',
      },
    ],
    faqs: [
      {
        question: 'What subjects are covered on the ATI TEAS exam?',
        answer: 'The TEAS exam covers four core domains: Reading, Mathematics, Science (Anatomy & Physiology, Chemistry, Biology), and English & Language Usage.',
      },
      {
        question: 'How does TUTOR PROCTORED EXAMS help me prepare for the TEAS exam?',
        answer: 'We offer dedicated TEAS 1-on-1 tutoring in Math and Science, practice questions, and technical readiness coaching to help you prepare thoroughly.',
      },
    ],
  },
};
