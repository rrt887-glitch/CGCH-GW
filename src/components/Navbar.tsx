import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isZh: boolean;
  onLangChange: (lang: 'zh' | 'en') => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isScrolled,
  isZh,
  onLangChange,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { href: '#about', zh: '关于我们', en: 'About' },
    { href: '#strengths', zh: '核心优势', en: 'Strengths' },
    { href: '#team', zh: '团队实力', en: 'Team' },
    { href: '#cases', zh: '成功案例', en: 'Cases' },
    { href: '#mode', zh: '陪跑模式', en: 'Mode' },
    { href: '#process', zh: '合作流程', en: 'Process' },
    { href: '#contact', zh: '联系我们', en: 'Contact' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'nav-scrolled py-1 sm:py-1.5' : 'bg-transparent py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
          }`}
        >
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center">
            <img src="/cgch.png" alt="草根出海" className="h-40 md:h-40 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white/85 hover:text-white text-sm font-medium transition hover:-translate-y-0.5 duration-200 py-1"
              >
                {isZh ? item.zh : item.en}
              </a>
            ))}
          </nav>

          {/* Lang + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 text-xs font-medium border border-white/10">
              <button
                type="button"
                onClick={() => onLangChange('zh')}
                id="btn-zh"
                className={`px-2.5 sm:px-3 py-1.5 min-h-[32px] rounded-full transition cursor-pointer touch-manipulation ${
                  isZh ? 'text-white bg-white/20 shadow-sm font-bold' : 'text-white/70 hover:text-white'
                }`}
              >
                中文
              </button>
              <button
                type="button"
                onClick={() => onLangChange('en')}
                id="btn-en"
                className={`px-2.5 sm:px-3 py-1.5 min-h-[32px] rounded-full transition cursor-pointer touch-manipulation ${
                  !isZh ? 'text-white bg-white/20 shadow-sm font-bold' : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center px-4 sm:px-5 py-2.5 min-h-[40px] bg-white text-navy-900 text-sm font-semibold rounded-full hover:bg-navy-50 transition shadow-sm hover:scale-105 active:scale-95 duration-200 cursor-pointer"
            >
              {isZh ? '立即咨询' : 'Contact Us'}
            </a>

            {/* Mobile Menu Toggle Button (minimum 44x44px touch target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-btn"
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white transition cursor-pointer touch-manipulation"
              aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-t border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="px-4 py-4 space-y-1.5 max-w-lg mx-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition min-h-[48px] touch-manipulation"
              >
                <span>{isZh ? item.zh : item.en}</span>
                <span className="text-white/40 text-xs">→</span>
              </a>
            ))}

            <div className="pt-3 pb-1 border-t border-white/10 mt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full min-h-[48px] flex items-center justify-center bg-white text-navy-900 text-base font-bold rounded-xl hover:bg-navy-50 active:scale-[0.98] transition shadow-md touch-manipulation"
              >
                {isZh ? '免费咨询出海方案' : 'Free Consultation'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
