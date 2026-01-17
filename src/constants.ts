import { Project, CertificationItem, SkillCategory } from './types';
import profileImg from './assets/profile.png';  // ✅ Your GitHub image imported

export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  email: 'tharunkumark42007@gmail.com',
  phone: '+91 8760964830',
  location: 'Dharapuram, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/tharunkumark4743/',
  github: 'https://github.com/Tharun4743',
  leetcode: 'https://leetcode.com/u/Tharunkumar__K/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tharunkumark42007',
  profileImage: profileImg,  // ✅ Uses your local profile.png
  profileSummary:
    'Information Technology undergraduate passionate about innovation and technology, with strong skills in Java, AI, Data Structures, and Web Development. Experienced in AI and IoT projects, problem-solving, and debugging, and motivated to build scalable real-world solutions while contributing to meaningful product development.'
};

export const EDUCATION: EducationItem[] = [
  {
    institution: 'VSB Engineering College, Karur',
    degree: 'B.E. in Information Technology',
    period: '2022 - Present',
    details: 'Undergraduate program focused on software development and embedded systems.'
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  { name: 'Languages', skills: ['Java', 'TypeScript', 'Python'] },
  { name: 'Web', skills: ['React', 'Tailwind CSS', 'Node.js'] }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { 
    name: 'Python Foundation',  // ✅ Fixed: matches CertificationItem type
    issuer: 'Infosys Springboard',
    year: '2024'  // ✅ Added required year field
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'VSBEC Study Material Portal',
    description: 'A web portal designed for students to access study notes easily.',
    link: 'https://vsbec.unaux.com',
    tags: ['Web', 'Portal']
  }
];

export const SOFT_SKILLS = ['Problem Solving', 'Teamwork'];
export const HOBBIES = ['Coding', 'Photography'];
