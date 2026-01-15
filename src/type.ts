export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  details: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  year: string;
};

// NEW: Internship type
export type InternshipItem = {
  title: string;
  period: string;
  company: string;
  description: string;
};
