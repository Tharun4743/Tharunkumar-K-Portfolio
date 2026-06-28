import { Project, CertificationItem, SkillCategory } from './type';

import profileImg from './assets/profile.png';

export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  profileImage: profileImg,
  email: 'tharunkumark42007@gmail.com',
  phone: '+91 8760964830',
  location: 'Dharapuram, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/tharunkumark4743/',
  github: 'https://github.com/Tharun4743',
  leetcode: 'https://leetcode.com/u/Tharunkumar__K/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tharunkumark4743',
  resume: 'https://drive.google.com/drive/folders/1zdLQ8EoEC8X73fFAJjSJr-Ros_xckIyW',
  profileSummary:
    'Full stack developer passionate about building scalable web applications. Currently interning at Neura Global (a startup), working with React, Node.js, TypeScript, and PostgreSQL. Thrives on learning, collaborating with teams, and solving complex challenges.'
};

export const EDUCATION = [
  {
    institution: 'VSB Engineering College, Karur, Tamil Nadu',
    degree: 'Bachelor of Technology - Information Technology',
    period: '2024 - 2028',
    details: 'Expected Graduation: May 2028 | CGPA: 8.5 / 10'
  },
  {
    institution: 'Sindhu Matriculation Higher Secondary School, Tamil Nadu',
    degree: 'Higher Secondary (12th Grade)',
    period: '2023 - 2024',
    details: 'Score: 84.66%'
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'SQL']
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Vite', 'HTML5', 'CSS3']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'Prisma ORM', 'REST APIs', 'Authentication', 'NextAuth.js']
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'Supabase', 'Neon Serverless', 'MongoDB', 'MySQL']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Render', 'Netlify', 'VS Code', 'Arduino IDE', 'Salesforce', 'Cloudinary']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Infosys Internship Completion Certificate',
    issuer: 'Infosys Springboard',
    year: '2024',
    link: 'https://drive.google.com/file/d/1Q9M6APOGYKO0_jYrKBAO4fAwTFEZJigy/view?usp=drive_link',
    type: 'CERTIFICATE'
  },
  {
    title: 'Tata - GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    year: 'Jun 2025',
    link: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_RxeDd9TgPqW92wdDx_1750820862922_completion_certificate.pdf',
    type: 'CERTIFICATE'
  },
  {
    title: 'Dynamic Programming Camp Participation Certificate',
    issuer: 'AlgoUniversity',
    year: 'May 2026',
    link: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/tharunkumar-k.png',
    type: 'CERTIFICATE'
  },
  {
    title: 'TCS iON Career Edge — Young Professional',
    issuer: 'TCS iON',
    year: '2025',
    link: '#',
    type: 'CERTIFICATE'
  },
  {
    title: 'Responsible AI: Applying AI Principles with Google Cloud',
    issuer: 'Google Cloud',
    year: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/17907581?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Prompt Design in Agent Platform',
    issuer: 'Google',
    year: 'Jun 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/16663518?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    year: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/17907465?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google',
    year: 'Jun 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb',
    type: 'BADGE'
  },
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    year: 'Nov 2025',
    link: 'https://www.credly.com/badges/e0e38f42-909d-46a0-8a23-4cbb658ceb2b/linked_in_profile',
    type: 'BADGE'
  },
  {
    title: 'Salesforce Administrator Explorer',
    issuer: 'Trailhead by Salesforce',
    year: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1IgkTkYQ-dfhashY-7-R6soyY7YQhw4zI/view?usp=drive_link',
    type: 'BADGE'
  },
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'Certification',
    year: '2024',
    link: '#',
    type: 'CERTIFICATE'
  }
];

export const PORTFOLIO_STATS = {
  projectsCount: 8,
  certificationsCount: 15,
  leetcodeCount: 450,
  githubContributions: 200,
  hackathonsCount: 3,
};

export const PROJECTS: Project[] = [
  {
    title: 'Campus Connect — College Placement Cell Platform',
    description:
      'Premium, enterprise-grade placement management platform designed to automate TPO workflows, facilitate seamless recruiter engagement, and help students transition smoothly into their careers.',
    longDescription:
      'A comprehensive college placement cell system connecting students, recruiters, and college Training & Placement Officers (TPOs) in a unified workflow. Built as a secure, full-stack application integrating modern web technologies and real-time web sockets.',
    date: 'June 2026',
    githubLink: 'https://github.com/Tharun4743/CampusConnect',
    link: 'https://campusconnect-yg4h.onrender.com/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'Socket.IO'],
    category: 'fullstack',
    features: [
      'Interactive Document Vault for academic transcripts, resumes, and certificates backed by Cloudinary',
      'Real-Time Application Tracker with a step-by-step visual timeline tracking progress',
      'Profile Verification Pipeline and Invite Management for Training & Placement Officers',
      'Job Drive Creator, Multi-Filter Screening, and Interview Scheduler for HR & Recruiters',
      'Detailed Audit Logs, Moderation Desk, and Database Seeding utilities for Administrators'
    ],
    challenges:
      'Configuring proxy-aware rate limiting and enforcing Same-Origin CSRF Guard for state-modifying requests. Solved by implementing strict custom Helmet policies to selectively bypass headers for secure Google SSO.',
    architecture:
      'Decoupled React SPA frontend and RESTful Express.js API backend, sharing real-time event updates via WebSockets and utilizing Supabase PostgreSQL.',
    myRole: 'Lead Full Stack Developer',
    impact: 'Streamlined placement workflows for 500+ students, reducing manual data entry by 80% and decreasing interview scheduling conflicts to zero.',
    keyLearnings: 'Mastered WebSocket integration for real-time state synchronization and gained deep insights into secure document handling and RBAC (Role-Based Access Control) using Supabase.'
  },
  {
    title: "Techy Tharun's Chatbox — AI Assistant",
    description:
      'A high-performance, premium AI assistant powered by GPT-4o. Featuring a sleek, humanized interface and optimized for extreme speed and near-zero latency streaming.',
    longDescription:
      'A feature-rich conversational interface leveraging OpenAI models to parse uploaded documents, accept voice commands, render formatted markdown content, and maintain low response latency.',
    date: 'Feb 2026 - Apr 2026',
    githubLink: 'https://github.com/Tharun4743/Tharun-s-Chatbox',
    link: 'https://tharunchatbox.onrender.com',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Neon PostgreSQL', 'GPT-4o'],
    category: 'fullstack',
    features: [
      'Extreme Performance with parallelized backend operations for near-zero latency streaming',
      'Humanized UI featuring empathetic authentication flow and sleek glassmorphism design',
      'Advanced Tools supporting file attachments (PDF, Doc, TXT), voice input, and markdown rendering',
      'PWA-ready and optimized for local networks with personalized branding'
    ],
    challenges:
      'Handling response latency and message streaming connections. Solved by parallelizing backend operations and streaming tokens to achieve near-zero latency.',
    architecture:
      'Architected using Next.js 15 App Router and Turbopack, styled with Tailwind CSS and Framer Motion, authenticated via NextAuth.js v5 Beta, and powered by Prisma ORM with Neon Serverless PostgreSQL and OpenRouter (GPT-4o).',
    myRole: 'AI Engineer & Frontend Architect',
    impact: 'Achieved sub-200ms latency on AI streaming responses and created a seamless UX that mimics human-like interaction.',
    keyLearnings: 'Deeply understood the complexities of handling Server-Sent Events (SSE) for AI streaming and optimizing Next.js App Router for extreme performance.'
  },
  {
    title: 'Aura — AI Unified Retrieval Assistant',
    description:
      '100% Offline Multimodal Retrieval-Augmented Generation (RAG) System developed for resource-constrained environments. Features local document processing, multimodal vision indexing, and voice transcription.',
    longDescription:
      'A military-grade, fully air-gapped, sovereign multimodal RAG workstation designed to ingest, process, and query enterprise documents, visual assets, and vocal recordings with 100% on-premises privacy.',
    date: '2026',
    githubLink: 'https://github.com/Tharun4743/SIH25231',
    tags: ['React', 'Spring Boot', 'Java', 'SQLite', 'ChromaDB', 'Ollama', 'Electron'],
    category: 'fullstack',
    features: [
      'Document Processing: Local page-by-page text extraction from PDF and plaintext documents via Apache PDFBox',
      'Multimodal Vision: Visual feature extraction and semantic indexing of local image materials using Hugging Face CLIP',
      'Voice Transcription: Vocal queries transcribed locally via Python speech-to-text translators (Whisper/Vosk)',
      'Grounded Retrieval (RAG): Integrates with local Llama-3 running on Ollama for context-anchored chat generation',
      'Glassmorphic Desktop Wrapper: Compiled as an Electron shell packaging the JRE, Python environment, and Spring Boot server into a one-click executable'
    ],
    challenges:
      'Orchestrating multiple local LLMs and vector databases in a fully air-gapped desktop environment without relying on external APIs. Solved by bundling a local JRE and Python environment into a self-contained Electron installer.',
    architecture:
      'Decoupled React SPA frontend and RESTful Spring Boot Java API backend, sharing real-time event updates via WebSockets, all wrapped in an Electron desktop shell.',
    myRole: 'Core Systems Developer',
    impact: 'Enabled completely air-gapped, privacy-preserving document and vision querying, making it suitable for secure enterprise and military deployment environments.',
    keyLearnings: 'Learned to orchestrate local LLMs and vector databases within an Electron desktop shell and optimized Java Spring Boot for local low-memory environments.'
  },
  {
    title: 'Smart Helmet IoT Safety System',
    description:
      'An intelligent IoT helmet system that proactively prevents accidents by monitoring helmet wear, alcohol levels, and drowsiness — disabling bike ignition on unsafe conditions via RF communication. Smart India Hackathon 2025 Submission.',
    longDescription:
      'An embedded rider safety platform linking sensors on a helmet to a receiver circuit inside a motorcycle ignition system to enforce safe riding practices.',
    date: 'Sep 2025 - Oct 2025',
    githubLink: 'https://github.com/Tharun4743/AGILE-INNOVATORS-smart-helmet-',
    driveLink: 'https://drive.google.com/drive/folders/1kYhyoOx9-Tr4WyOJkmUz7K4PDDpmaHEr?usp=drive_link',
    tags: ['Arduino', 'C', 'RF 433MHz', 'IoT', 'Embedded Systems'],
    category: 'iot',
    features: [
      'Helmet Detection: Ensures rider wears the helmet before starting via IR/Proximity sensor',
      'Alcohol Detection: MQ-3 sensor detects alcohol presence and blocks ignition',
      'Drowsiness Detection: Monitors eye blink patterns and triggers buzzer on drowsiness',
      'Failsafe Mode: Auto-disables ignition if no RF data is received for 5 seconds'
    ],
    challenges:
      'Ensuring reliable real-time communication between the helmet transmitter and bike receiver. Solved by utilizing RF 433MHz to send sensor data every 100ms with a failsafe mode for signal loss.',
    architecture:
      'Dual-unit embedded system utilizing Arduino microcontrollers, RF transmitters/receivers, relays, and an I²C LCD display for real-time status.',
    myRole: 'IoT & Embedded Systems Engineer',
    impact: 'Developed a prototype capable of reacting in under 500ms to dangerous rider states, potentially preventing life-threatening accidents.',
    keyLearnings: 'Navigated hardware constraints to establish reliable RF communication and improved sensor calibration techniques for real-world environmental noise.'
  }
];

export const LEADERSHIP = [
  {
    title: 'Fullstack Development Intern',
    organization: 'Neura Global (Startup)',
    period: 'June 2026 - Present',
    description:
      'Developing and optimizing full-stack features using React, Node.js, and TypeScript. Collaborating with cross-functional teams to build responsive user interfaces and robust backend APIs in a fast-paced startup environment.'
  },
  {
    title: 'Software Development Intern',
    organization: 'Infosys Springboard',
    period: 'Nov 2025 - Jan 2026',
    description:
      'Completed Infosys Springboard 6.0 program. Developed "StarWall: Employee Recognition Dashboard" project. Learned enterprise development practices, debugging techniques, and collaborative coding in a real production environment.'
  }
];

export const ACHIEVEMENTS = [
  {
    title: 'Hackathon Winner',
    organization: 'Code Thugs 2k26',
    year: '2026',
    type: 'ACHIEVEMENT',
    description:
      'Secured 1st place nationally for a Real-Time Collaborative Code Editor with multi-user synchronization and conflict resolution. Recognized for innovative system design. Prize: ₹5,000 cash award.'
  },
  {
    title: 'Smart India Hackathon 2025 — Internal Hackathon Top 50',
    organization: 'SIH 2025',
    year: '2025',
    type: 'RECOGNITION',
    description:
      'Selected in the top 50 out of 300+ submissions during the SIH internal hackathon phase. Led the full-stack development for an IoT-based rider safety system.'
  },
  {
    title: 'India Innovates 2026 — Finals Track',
    organization: 'India Innovates',
    year: '2026',
    type: 'RECOGNITION',
    description:
      'Advanced to the finals track after two rigorous selection rounds. Demonstrated capability to develop production-grade, scalable solutions.'
  },
  {
    title: 'GeeksforGeeks Campus Mantri',
    organization: 'GeeksforGeeks',
    year: '2026',
    type: 'LEADERSHIP',
    description:
      'Served as Student Ambassador from January 2026 to July 2026. Organized tech workshops and events to build a strong coding culture on campus.'
  },
  {
    title: 'Fun Quest Event Coordination',
    organization: 'Symposium Event',
    year: '2026',
    type: 'LEADERSHIP',
    description:
      'Led technical coordination and execution of a non-technical symposium event. Managed 150+ participants across two slots. Achieved 9.8 / 10 average participant feedback rating.'
  }
];
