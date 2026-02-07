export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  date?: string; // Added to match constants
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  details: string; // Changed from string[] to string to match constants
};

export type CertificationItem = {
  title: string; // Changed from name to match constants
  issuer: string;
  year?: string; // Made optional as it's missing in some constants
};

// NEW: Internship type
// NEW: Internship/Leadership type
export type LeadershipItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

// NEW: Achievement type
export type AchievementItem = {
  title: string;
  organization: string;
  year: string;
  description: string;
};
