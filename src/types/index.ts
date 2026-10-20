export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  highlight?: boolean;
}

export interface PartnerItem {
  id: string;
  name: string;
  logoText: string;
  category?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tabLabel: string;
  subtitle: string;
  description: string;
  tags: string[];
  capabilities: string[];
  visualType?: string;
  image?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  highlightWord?: string;
  slug: string;
  description: string;
  image?: string;
  metrics?: string;
  features?: string[];
  gradient?: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  badge?: string;
  description: string;
  tags: string[];
  capabilities?: string[];
  icon?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName?: 'sparkles' | 'shield-check' | 'heart-handshake' | 'arrow-up-right';
}

export interface JobItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  mode: string;
  description: string;
  tags: string[];
  applyUrl: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  readTime: string;
  url: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
}

export interface StatItem {
  value: string;
  label: string;
  caption?: string;
}
