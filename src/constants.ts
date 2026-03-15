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
    title: 'Infosys Virtual Internship 6.0',
    issuer: 'Infosys Springboard',
    link: 'https://drive.google.com/file/d/1Q9M6APOGYKO0_jYrKBAO4fAwTFEZJigy/view?usp=drive_link'
  },
  {
    title: 'Salesforce Administrator Explorer',
    issuer: 'Trailhead',
    link: 'https://drive.google.com/file/d/1IgkTkYQ-dfhashY-7-R6soyY7YQhw4zI/view?usp=drive_link'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Smart Helmet & IoT Safety System',
    description:
      'IoT-based rider safety system with helmet detection and alcohol sensing capabilities.',
    date: 'Nov 2025 — Jan 2026',
    githubLink: 'https://github.com/Tharun4743/AGILE-INNOVATORS-smart-helmet-',
    driveLink: 'https://drive.google.com/drive/folders/1kYhyoOx9-Tr4WyOJkmUz7K4PDDpmaHEr?usp=drive_link',
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
    period: '2026',
    description:
      "As the official face of GeeksforGeeks at my college, I'm on a mission to build a strong coding culture on campus. I organize tech workshops, host events to make learning fun, and act as the direct link between our students and the GFG community to help everyone grow their careers."
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

