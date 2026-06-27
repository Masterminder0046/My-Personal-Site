export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  metric?: string;
  keyFeatures?: string[];
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string; // Dynamic icon mapper for Lucide
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  type: 'experience' | 'education' | 'certificate';
  logoText: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  likes: number;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}
