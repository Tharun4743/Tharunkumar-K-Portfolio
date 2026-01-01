import profileImage from './assets/profile.png';
import profileImageAlt from './assets/profile2.png';

import type {
  Project,
  SkillCategory,
  EducationItem,
  CertificationItem
} from './types';

// PERSONAL INFO FROM RESUME
export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  location: 'Dharapuram, Tamil Nadu, India',
  email: 'tharunkumark42007@gmail.com',
  phone: '+91 8760964830',
  github: 'https://github.com/Tharun4743',
  linkedin: 'https://www.linkedin.com/in/tharunkumark4743/',
  leetcode: 'https://leetcode.com/u/Tharunkumar__K/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tharunkumark4743', // adjust if different
  profileImage,    // hero image
  profileImageAlt, // about section image
  profileSummary:
    'Information Technology undergraduate passionate about innovation and technology, with strong skills in Java, AI, Data Structures, and Web Development. Experienced in AI and IoT projects, problem-solving, and debugging, focused on building scalable real-world solutions.'
};

export const EDUCATION: EducationItem[] = [
  {
    institution: 'VSB Engineering College, Karur',
    degree: 'B.Tech Information Technology',
    period: '2024 – 2028',
    details: [
      'Current Year: 2nd Year with CGPA 8.5/10.',
      'Focusing on software engineering, AI, data structures, and web development.'
    ]
  },
  {
    institution: 'Sindhu Matriculation Higher Secondary School, Dharapuram',
    degree: 'Higher Secondary (State Board, Tamil Nadu)',
    period: '2023 – 2024',
    details: ['Scored 84.66% in Higher Secondary education.']
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'JavaScript']
  },
  {
    name: 'Backend',
    skills: ['Python', 'Node.js']
  },
  {
    name: 'Database',
    skills: ['MySQL']
  },
  {
    name: 'Other',
    skills: ['Java', 'C', 'C++ (Basic)', 'Data Structures & Algorithms']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Introduction to AWS Inferentia and Amazon EC2 Inf1 Instances',
    issuer: 'AWS / Simplilearn (SkillUp)',
    year: '2025'
  },
  {
    name: 'TCS ION Career Edge Young Professional',
    issuer: 'TCS ION',
    year: '2025'
  },
  {
    name: 'Salesforce Administrator Explorer',
    issuer: 'FutureSkills PRIME',
    year: '2025'
  },
  {
    name: 'Python Foundation',
    issuer: 'Infosys Springboard',
    year: '2025'
  },
  {
    name: 'Python Course for Beginners',
    issuer: 'Scaler',
    year: '2025'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'VSBEC Study Material Portal',
    description:
      'A web portal for students to access study materials and notes built using HTML, CSS, and JavaScript, improving ease of access to resources.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://vsbec.unaux.com'
  },
  {
    title: 'Smart Helmet & IoT Safety System',
    description:
      'IoT-based rider safety system featuring helmet detection and alcohol sensing to prevent unsafe riding conditions.',
    tags: ['IoT', 'Embedded Systems', 'Sensors'],
    link: '#' // replace with prototype link when available
  }
];

export const SOFT_SKILLS = [
  'Problem Solving',
  'Communication',
  'Team Leadership',
  'Adaptability',
  'Figma',
  'DSA'
];

export const HOBBIES = ['Photography', 'Video Editing', 'Designing'];

