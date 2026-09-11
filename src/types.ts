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
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge?: string;
  highlight?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}
