import { Project, CertificationItem, SkillCategory } from './type';

// ✅ IMPORT IMAGE CORRECTLY
import profileImg from './assets/profile.png';
import profileImg2 from './assets/profile2.png';

export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  profileImage: profileImg, // ✅ FIXED
  profileImage2: profileImg2,
  email: 'tharunkumark42007@gmail.com',
  phone: '+91 8760964830',
  location: 'Dharapuram, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/tharunkumark4743/',
  github: 'https://github.com/Tharun4743',
  leetcode: 'https://leetcode.com/u/Tharunkumar__K/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tharunkumark4743',
  resume: 'https://drive.google.com/file/d/1JTrnKScBdl6biPFtcasHHVVyQZ0qyabW/view?usp=sharing',
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

export const CERTIFICATIONS: CertificationItem[] = [
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

export const LEADERSHIP: any[] = [
  {
    title: 'GeeksforGeeks College Ambassador',
    organization: 'GeeksforGeeks (GFG)',
    period: '2025 – Present',
    description:
      'Representing GeeksforGeeks at my college by organizing technical and non-technical events, promoting coding culture, guiding students in DSA and career preparation, and acting as a bridge between students and the GeeksforGeeks community.'
  }
];

export const ACHIEVEMENTS: any[] = [
  {
    title: 'Winner – Code Thugs Hackathon',
    organization: 'Code Thugs Community',
    year: '2026',
    description:
      'Secured 1st place in the Code Thugs Hackathon by contributing to an innovative full-stack solution developed under strict time constraints. Played a key role in planning, documentation, system flow design, and feature explanation, showcasing teamwork, problem-solving, and real-world application skills.'
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
