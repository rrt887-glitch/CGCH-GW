import React, { createContext, useContext, useEffect, useState } from 'react';
import { initialAnalytics, initialCases, initialLeads, initialNewsEvents, initialSEOConfig, initialTeamMembers, initialWeChatFeedbacks } from '../data/initialData';
import { translations } from '../i18n/translations';
import { CaseItem, Language, Lead, NewsEvent, RealtimeEvent, SEOConfig, TeamMember, VisitorAnalytics, WeChatFeedback } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['zh'];
  
  // Data
  cases: CaseItem[];
  setCases: React.Dispatch<React.SetStateAction<CaseItem[]>>;
  news: NewsEvent[];
  setNews: React.Dispatch<React.SetStateAction<NewsEvent[]>>;
  team: TeamMember[];
  setTeam: React.Dispatch<React.SetStateAction<TeamMember[]>>;
  leads: Lead[];
  setLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
  feedbacks: WeChatFeedback[];
  seoConfig: SEOConfig;
  setSeoConfig: React.Dispatch<React.SetStateAction<SEOConfig>>;
  analytics: VisitorAnalytics;
  realtimeEvents: RealtimeEvent[];
  
  // Interactive Modals
  isBookModalOpen: boolean;
  setIsBookModalOpen: (open: boolean) => void;
  selectedFeedback: WeChatFeedback | null;
  setSelectedFeedback: (feedback: WeChatFeedback | null) => void;
  selectedCase: CaseItem | null;
  setSelectedCase: (c: CaseItem | null) => void;
  
  // Actions
  addNewLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'status' | 'followUpHistory'>) => void;
  updateLeadStatus: (id: string, status: Lead['status'], note?: string) => void;
  logAnalyticsEvent: (type: RealtimeEvent['type'], description: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

function safeGetStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined' || !window.localStorage) {
    return fallback;
  }
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function safeSetStorage(key: string, value: any): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }
  try {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  } catch {
    // Ignore storage errors in private/restricted modes
  }
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined' || !window.localStorage) return 'zh';
    try {
      const saved = localStorage.getItem('cgch_lang');
      return (saved as Language) || 'zh';
    } catch {
      return 'zh';
    }
  });

  const [cases, setCases] = useState<CaseItem[]>(() => {
    return safeGetStorage('cgch_cases', initialCases);
  });

  const [news, setNews] = useState<NewsEvent[]>(() => {
    return safeGetStorage('cgch_news', initialNewsEvents);
  });

  const [team, setTeam] = useState<TeamMember[]>(() => {
    return initialTeamMembers;
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    return safeGetStorage('cgch_leads', initialLeads);
  });

  const [feedbacks] = useState<WeChatFeedback[]>(initialWeChatFeedbacks);

  const [seoConfig, setSeoConfig] = useState<SEOConfig>(initialSEOConfig);

  const [analytics, setAnalytics] = useState<VisitorAnalytics>(() => {
    return safeGetStorage('cgch_analytics', initialAnalytics);
  });

  const [realtimeEvents, setRealtimeEvents] = useState<RealtimeEvent[]>([
    {
      id: 'evt-1',
      timestamp: '刚刚',
      type: 'page_view',
      description: '来自东莞市南城区的制造企业用户访问了首页',
      location: '中国 · 广东东莞',
      ipMasked: '113.108.***.45',
    },
    {
      id: 'evt-2',
      timestamp: '2分钟前',
      type: 'click_consult',
      description: '来自沙特利雅得的海外采购商点击查看了【大设备赛道案例】',
      location: '沙特阿拉伯 · 利雅得',
      ipMasked: '212.138.***.88',
    },
    {
      id: 'evt-3',
      timestamp: '5分钟前',
      type: 'lead_submit',
      description: '【佛山市精密数控机械】成功提交了7天获客测试预约',
      location: '中国 · 广东佛山',
      ipMasked: '120.236.***.19',
    },
  ]);

  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<WeChatFeedback | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    safeSetStorage('cgch_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
    logAnalyticsEvent('lang_switch', `用户切换网站语言为 [${lang.toUpperCase()}]`);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  // Sync state to local storage safely
  useEffect(() => {
    safeSetStorage('cgch_cases', cases);
  }, [cases]);

  useEffect(() => {
    safeSetStorage('cgch_news', news);
  }, [news]);

  useEffect(() => {
    safeSetStorage('cgch_team', team);
  }, [team]);

  useEffect(() => {
    safeSetStorage('cgch_leads', leads);
  }, [leads]);

  useEffect(() => {
    safeSetStorage('cgch_analytics', analytics);
  }, [analytics]);

  const logAnalyticsEvent = (type: RealtimeEvent['type'], description: string) => {
    const newEvt: RealtimeEvent = {
      id: `evt-${Date.now()}`,
      timestamp: '刚刚',
      type,
      description,
      location: '中国 · 广东',
      ipMasked: '119.123.***.' + Math.floor(Math.random() * 200 + 10),
    };
    setRealtimeEvents((prev) => [newEvt, ...prev.slice(0, 19)]);
    setAnalytics((prev) => ({
      ...prev,
      pv: prev.pv + 1,
    }));

    // Forward event to Google Analytics (gtag.js) if loaded
    if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', type, {
        event_category: 'user_action',
        event_label: description,
      });
    }
  };

  const addNewLead = (leadData: Omit<Lead, 'id' | 'createdAt' | 'status' | 'followUpHistory'>) => {
    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newLead: Lead = {
      id: `lead-${Date.now().toString().slice(-4)}`,
      createdAt: timeStr,
      status: 'new',
      followUpHistory: [
        {
          date: timeStr,
          staff: '系统自动入库',
          note: '线索通过企业官网预约表单成功提交，系统已自动分配专属出海顾问',
        },
      ],
      ...leadData,
    };

    setLeads((prev) => [newLead, ...prev]);
    setAnalytics((prev) => ({
      ...prev,
      uv: prev.uv + 1,
      dailyTrends: prev.dailyTrends.map((d, i) =>
        i === prev.dailyTrends.length - 1 ? { ...d, leads: d.leads + 1 } : d
      ),
    }));

    // Trigger WeChat Work Webhook notification via server API
    fetch('/api/notify-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyName: leadData.companyName,
        contactPerson: leadData.contactPerson,
        phone: leadData.phone,
        industry: leadData.industry,
        source: leadData.source,
        targetMarket: leadData.targetMarket,
        budgetRange: leadData.budgetRange,
        note: leadData.note,
        submittedAt: timeStr,
      }),
    }).catch((err) => {
      console.warn('[Webhook] Failed to dispatch WeChat Work notification:', err);
    });

    logAnalyticsEvent('lead_submit', `收到企业 [${leadData.companyName}] 提交的7天获客预约`);
  };

  const updateLeadStatus = (id: string, status: Lead['status'], note?: string) => {
    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id !== id) return lead;
        const updatedHistory = [...lead.followUpHistory];
        if (note) {
          updatedHistory.push({
            date: timeStr,
            staff: '管理员',
            note,
          });
        }
        return {
          ...lead,
          status,
          followUpHistory: updatedHistory,
        };
      })
    );
    showToast(`线索 #${id} 状态已更新为 [${status}]`);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        cases,
        setCases,
        news,
        setNews,
        team,
        setTeam,
        leads,
        setLeads,
        feedbacks,
        seoConfig,
        setSeoConfig,
        analytics,
        realtimeEvents,
        isBookModalOpen,
        setIsBookModalOpen,
        selectedFeedback,
        setSelectedFeedback,
        selectedCase,
        setSelectedCase,
        addNewLead,
        updateLeadStatus,
        logAnalyticsEvent,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
