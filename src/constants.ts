import { Project, Certification, SkillCategory } from './types';

// ✅ IMPORT IMAGE CORRECTLY
import profileImg from './assets/profile.png';

export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  profileImage: profile.png // ✅ ADDED (THIS FIXES IMAGE ISSUE)
  email: 'tharunkumark42007@gmail.com',
  phone: '+91 8760964830',
  location: 'Dharapuram, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/tharunkumark4743/',
  github: 'https://github.com/Tharun4743',
  leetcode: 'https://leetcode.com/u/Tharunkumar__K/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tharunkumark42007',
  profileSummary:
    'Information Technology undergraduate passionate about innovation and technology, with strong skills in Java, AI, Data Structures, and Web Development. Experienced in AI and IoT projects, problem-solving, and debugging, and motivated to build scalable real-world solutions while contributing to meaningful product development.'
};

export const EDUCATION = [
  {
    institution: 'VSB Engineering College, Karur',
    degree: 'Bachelor of Technology - Information Technology',
    period: '2024 - 2028',
    details: 'Current Year: 2nd Year | CGPA: 8.5 / 10'
  },
  {
    institution: 'Sindhu Matriculation Higher Secondary School',
    degree: 'Higher Secondary',
    period: '2023 - 2024',
    details: 'Score: 84.66% | Board: State Board of Tamil Nadu'
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  { name: 'Frontend', skills: ['React', 'HTML', 'CSS', 'JavaScript'] },
  { name: 'Backend', skills: ['Python', 'Node.js'] },
  { name: 'Languages', skills: ['Java', 'C', 'C++ (Basic)'] },
  { name: 'Database', skills: ['MySQL'] }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Introduction to AWS Inferentia and Amazon EC2 Inf1 Instances',
    issuer: 'Simplilearn (SkillUp) | AWS'
  },
  {
    title: 'TCS iON Career Edge Young Professional',
    issuer: 'TCS iON (Tata Consultancy Services)'
  },
  {
    title: 'Salesforce Administrator Explorer',
    issuer: 'FutureSkills PRIME'
  },
  {
    title: 'Python Foundation',
    issuer: 'Infosys Springboard'
  },
  {
    title: 'Python Course for Beginners',
    issuer: 'Scaler'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Smart Helmet & IoT Safety System',
    description:
      'IoT-based rider safety system with helmet detection and alcohol sensing capabilities.',
    date: 'Nov 2025 — Jan 2026',
    link: '#',
    tags: ['IoT', 'Embedded Systems', 'Safety']
  },
  {
    title: 'VSBEC Study Material Portal',
    description:
      'A web portal designed for students to access study notes easily.',
    link: 'https://vsbec.unaux.com',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Dev']
  }
];

export const SOFT_SKILLS = [
  'Problem Solving',
  'Communication',
  'Figma',
  'Team Lead',
  'Adaptability'
];

export const HOBBIES = ['Photography', 'Video Editing', 'Designing'];
