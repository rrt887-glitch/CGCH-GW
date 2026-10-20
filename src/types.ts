export type Language = 'zh' | 'en' | 'es' | 'ar';

export interface StatItem {
  number: string;
  unit: string;
  label: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  tags: string[];
  avatar: string;
  bio: string[];
  achievements: string[];
  featured?: boolean;
}

export type CaseCategory = 'heavy' | 'hardware' | 'furniture' | 'fmcg';

export interface CaseItem {
  id: string;
  category: CaseCategory;
  name: string;
  nameEn: string;
  subSector: string;
  image: string;
  keyResult: string;
  inquiryIncrease: string;
  region: string;
  dealCycle: string;
  description: string;
  tags: string[];
}

export interface WeChatFeedback {
  id: string;
  clientName: string;
  industry: string;
  highlight: string;
  date: string;
  amount: string;
  messages: Array<{
    sender: 'client' | 'mentor' | 'system';
    text: string;
    time?: string;
    isKeyDeal?: boolean;
  }>;
}

export interface NewsEvent {
  id: string;
  title: string;
  titleEn: string;
  category: 'summit' | 'signing' | 'government' | 'sharing';
  date: string;
  image: string;
  location: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface Lead {
  id: string;
  createdAt: string;
  companyName: string;
  contactName?: string;
  contactPerson?: string;
  phone: string;
  email?: string;
  industry: string;
  annualRevenue?: string;
  budgetRange?: string;
  targetMarket?: string | string[];
  note?: string;
  notes?: string;
  status: 'new' | 'contacted' | 'testing' | 'signed' | 'closed';
  source: string;
  followUpHistory: Array<{
    date: string;
    staff: string;
    note: string;
  }>;
}

export interface SEOConfig {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
  robotsTxt: string;
  structuredDataJson: string;
}

export interface VisitorAnalytics {
  pv: number;
  uv: number;
  avgDurationSec: number;
  bounceRate: number;
  conversionRate: number;
  trafficSources: Array<{ source: string; count: number; percentage: number }>;
  regionDistribution: Array<{ region: string; count: number; percentage: number }>;
  pageRankings: Array<{ path: string; name: string; views: number; timeSec: number }>;
  dailyTrends: Array<{ date: string; pv: number; uv: number; leads: number }>;
}

export interface RealtimeEvent {
  id: string;
  timestamp: string;
  type: 'page_view' | 'click_consult' | 'lead_submit' | 'download_case' | 'lang_switch';
  description: string;
  location: string;
  ipMasked: string;
}
