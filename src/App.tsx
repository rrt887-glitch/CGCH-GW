import React, { useState, useEffect, useRef } from 'react';
import { AppProvider } from './context/AppContext';
import { Phone, ArrowUp } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { TeamSection } from './components/TeamSection';
import { CasesSection } from './components/CasesSection';
import { AboutSection } from './components/AboutSection';
import { StrengthsSection } from './components/StrengthsSection';
import { ModeSection } from './components/ModeSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';
import { Navbar } from './components/Navbar';
import { ManufacturingOverseasPage } from './pages/ManufacturingOverseasPage';
import { SocialMediaLeadGenPage } from './pages/SocialMediaLeadGenPage';
import { B2BInquirySOPPage } from './pages/B2BInquirySOPPage';
import { NotFoundPage } from './pages/NotFoundPage';

const MainLandingPage: React.FC = () => {
  const [lang, setLang] = useState<'zh' | 'en'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return (localStorage.getItem('cgch-lang') as 'zh' | 'en') || 'zh';
    }
    return 'zh';
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Floating Consultation Modal State
  const [isConsultModalOpen, setConsultModalOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? Math.min(Math.max(currentScrollY / docHeight, 0), 1) : 0;

          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${progress})`;
          }

          setIsScrolled(prev => {
            const next = currentScrollY > 40;
            return prev !== next ? next : prev;
          });

          setShowBackToTop(prev => {
            const next = currentScrollY > 400;
            return prev !== next ? next : prev;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver for scroll animations (native, smooth & lightweight)
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    });

    const elementsToReveal = document.querySelectorAll('.reveal-init');
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLangChange = (selectedLang: 'zh' | 'en') => {
    setLang(selectedLang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cgch-lang', selectedLang);
    }
  };

  const isZh = lang === 'zh';

  return (
    <div className={`font-sans text-navy-900 antialiased bg-white selection:bg-navy-500 selection:text-white ${isZh ? 'lang-zh' : 'lang-en'}`}>
      {/* Top Scroll Progress Indicator */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-sky-400 to-navy-500 z-50 origin-left transition-transform duration-75 ease-out pointer-events-none"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* ========== NAVBAR ========== */}
      <Navbar
        isScrolled={isScrolled}
        isZh={isZh}
        onLangChange={handleLangChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* ========== HERO ========== */}
      <HeroSection isZh={isZh} />

      {/* ========== ABOUT ========== */}
      <AboutSection isZh={isZh} />

      {/* ========== STRENGTHS ========== */}
      <StrengthsSection isZh={isZh} />

      {/* ========== TEAM (8 EXPERTS HOVER SCROLL CAROUSEL) ========== */}
      <TeamSection isZh={isZh} onOpenConsultModal={() => setConsultModalOpen(true)} />

      {/* ========== CASES ========== */}
      <CasesSection isZh={isZh} />

      {/* ========== MODE ========== */}
      <ModeSection isZh={isZh} />

      {/* ========== PROCESS ========== */}
      <ProcessSection isZh={isZh} />

      {/* ========== CONTACT ========== */}
      <ContactSection isZh={isZh} />

      {/* ========== FOOTER ========== */}
      <Footer isZh={isZh} />

      {/* Floating Action Controls (Vertically stacked on bottom right to prevent any overlap) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to Top Floating Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full bg-white/95 hover:bg-white text-navy-900 shadow-xl border border-navy-100 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 cursor-pointer backdrop-blur-md animate-in fade-in zoom-in-90"
            title={isZh ? '回到顶部' : 'Back to top'}
            aria-label={isZh ? '回到顶部' : 'Back to top'}
          >
            <ArrowUp className="w-5 h-5 text-navy-800" />
          </button>
        )}

        {/* Floating Consultation Trigger Button */}
        <button
          type="button"
          onClick={() => setConsultModalOpen(true)}
          className="pointer-events-auto flex items-center gap-2 bg-navy-900 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-navy-800 hover:scale-105 active:scale-95 transition-all border border-white/20 cursor-pointer group"
          title={isZh ? '点击咨询' : 'Consult Now'}
          aria-label={isZh ? '点击咨询' : 'Consult Now'}
        >
          <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
            <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            {isZh ? '点击咨询' : 'Consult Now'}
          </span>
        </button>
      </div>

      {/* Consultation Popup Modal */}
      <ConsultModal
        isOpen={isConsultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        isZh={isZh}
      />
    </div>
  );
};

interface AppProps {
  path?: string;
}

export default function App({ path }: AppProps = {}) {
  const currentPath =
    path || (typeof window !== 'undefined' ? window.location.pathname : '/');

  // Strip trailing slashes unless root
  const normalizedPath =
    currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

  const renderContent = () => {
    switch (normalizedPath) {
      case '':
      case '/':
      case '/index.html':
        return <MainLandingPage />;
      case '/services/manufacturing-overseas':
        return <ManufacturingOverseasPage />;
      case '/services/social-media-lead-gen':
        return <SocialMediaLeadGenPage />;
      case '/services/b2b-inquiry-sop':
        return <B2BInquirySOPPage />;
      case '/404':
      case '/404.html':
        return <NotFoundPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return <AppProvider>{renderContent()}</AppProvider>;
}

