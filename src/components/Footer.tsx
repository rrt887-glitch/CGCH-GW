import React from 'react';

interface FooterProps {
  isZh: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isZh }) => {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-navy-300 py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href="#home"
            onClick={handleScrollTop}
            className="flex items-center"
          >
            <img src="/cgch.png" alt="草根出海" className="h-40 w-auto object-contain" />
          </a>

          <p className="text-sm text-center text-navy-400">
            {isZh
              ? '© 2025–2026 草根出海. 中国制造迈向全球的专业陪跑伙伴'
              : '© 2025–2026 Cao Gen Chu Hai. Professional companion for Chinese manufacturing going global.'}
          </p>

          <div className="flex items-center gap-4 text-xs text-navy-400">
            <span>粤ICP备2025411606号</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
