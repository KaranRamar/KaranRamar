export interface Skill {
  name: string;
  category: 'programming' | 'web-development' | 'hardware-iot' | 'soft-skills';
  iconName: string;
  proficiency: number; // 0 to 100
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  keyFeatures: string[];
  challengesSolved?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  score: string;
  details: string[];
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}
