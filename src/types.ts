export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'agentic' | 'rag' | 'automation' | 'ml';
  featured: boolean;
  impactMetrics: string[];
  techStack: string[];
  description: string;
  bulletPoints: string[];
  architectureSummary: string;
  imageUrl?: string;
  nodes?: { id: string; name: string; role: string; type: 'input' | 'agent' | 'evaluator' | 'tool' | 'output' }[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  achievements: {
    title: string;
    tech: string[];
    description: string;
    impact: string;
    track?: 'ai' | 'devops';
    subtitle?: string;
    highlights?: string[];
    architectureFlow?: string[];
    productionMetrics?: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Specialized';
    featured?: boolean;
    tag?: string;
  }[];
  architectureHighlights?: {
    pattern: string;
    detail: string;
  }[];
  productionImpact?: string;
  libraries?: string[];
  proficiencyScore?: string;
  bannerUrl?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge?: string;
  highlight?: boolean;
  category?: 'ai' | 'devops' | 'software';
  date?: string;
  credentialId?: string;
  skillsValidated?: string[];
  verificationStatus?: 'Active' | 'Certified';
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
  rating: number;
  content: string;
  tags?: string[];
}

export interface ServiceOfferItem {
  id: string;
  title: string;
  subtitle: string;
  colorTheme: 'mint' | 'purple' | 'amber' | 'pink';
  iconName: string;
  description: string;
  features: string[];
  techTags: string[];
  sampleProject: string;
}
