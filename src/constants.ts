import { Project, Certification, SkillCategory } from './types';

// Profile image added so the app has a valid src for the portrait.
// If you prefer a local image, add the file to src/assets/profile.jpg and replace the URL with an import.

export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  email: 'tharunkumark42007@gmail.com',
  phone: '+91 8760964830',
  location: 'Dharapuram, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/tharunkumark4743/',
  github: 'https://github.com/Tharun4743',
  leetcode: 'https://leetcode.com/u/Tharunkumar_K/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tharunkumark42007',
  // Professional-looking Unsplash portrait used as a reliable fallback.
  profileImage: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop&crop=faces&sat=-20',
  profileSummary:
    'Information Technology undergraduate passionate about innovation and technology, with strong skills in Java, AI, Data Structures, and Web Development. Experienced in AI and IoT projects, problem-solving, and debugging, and motivated to build scalable real-world solutions while contributing to meaningful product development.'
};

export const EDUCATION = [
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

export const CERTIFICATIONS: Certification[] = [
  { title: 'Python Foundation', issuer: 'Infosys Springboard' }
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