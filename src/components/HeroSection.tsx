import React from 'react';
import { CountUp } from './CountUp';

const heroBg = '/hero_global_bg.jpg';

interface HeroSectionProps {
  isZh: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isZh }) => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-navy-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt="中国制造 迈向全球"
          className="w-full h-full object-cover object-bottom scale-105"
          referrerPolicy="no-referrer"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/60 to-navy-950/85" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center reveal-init">
          <p className="text-navy-200 text-sm md:text-base tracking-widest uppercase mb-6 font-medium animate-float">
            CAO GEN CHU HAI
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            {isZh ? (
              <>中国制造迈向全球的<br className="hidden sm:block" />专业陪跑伙伴</>
            ) : (
              <>Professional Companion for<br className="hidden sm:block" />Chinese Manufacturing Going Global</>
            )}
          </h1>
          <p className="text-lg md:text-xl text-navy-100 mb-4 font-medium">
            {isZh ? 'AI + 海外全社媒获客 + 高效的成交体系 + 轻本地化' : 'AI + Global Social Media Acquisition + Efficient Closing System + Light Localization'}
          </p>
          <p className="text-navy-200 text-sm md:text-base mb-10 max-w-2xl mx-auto">
            {isZh ? '适用人群：想高效签约海外代理商、品牌方的企业' : 'For enterprises seeking efficient overseas agent & brand partnerships'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 min-h-[48px] bg-white text-navy-900 font-bold text-base rounded-full hover:bg-navy-50 transition shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-200 cursor-pointer touch-manipulation text-center"
            >
              {isZh ? '免费咨询出海方案' : 'Free Consultation'}
            </a>
            <a
              href="#mode"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 min-h-[48px] border border-white/40 text-white font-semibold text-base rounded-full hover:bg-white/10 transition hover:scale-105 active:scale-95 duration-200 cursor-pointer touch-manipulation text-center"
            >
              {isZh ? '了解陪跑模式' : 'See Our Model'}
            </a>
          </div>
        </div>

        {/* Stats bar with CountUp */}
        <div className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 rounded-2xl p-3.5 sm:p-5 backdrop-blur-md border border-white/15 shadow-lg reveal-init delay-100 card-hover">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              <CountUp end={1000} suffix="+" duration={1800} />
            </div>
            <div className="text-navy-200 text-xs sm:text-sm mt-1 font-medium">{isZh ? '服务企业' : 'Clients'}</div>
          </div>
          <div className="text-center bg-white/10 rounded-2xl p-3.5 sm:p-5 backdrop-blur-md border border-white/15 shadow-lg reveal-init delay-200 card-hover">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              <CountUp end={60} suffix="+" duration={1600} />
            </div>
            <div className="text-navy-200 text-xs sm:text-sm mt-1 font-medium">{isZh ? '覆盖行业' : 'Industries'}</div>
          </div>
          <div className="text-center bg-white/10 rounded-2xl p-3.5 sm:p-5 backdrop-blur-md border border-white/15 shadow-lg reveal-init delay-300 card-hover">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              <CountUp end={30} suffix="+" duration={1400} />
            </div>
            <div className="text-navy-200 text-xs sm:text-sm mt-1 font-medium">{isZh ? '国家地区' : 'Countries'}</div>
          </div>
          <div className="text-center bg-white/10 rounded-2xl p-3.5 sm:p-5 backdrop-blur-md border border-white/15 shadow-lg reveal-init delay-400 card-hover">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              <CountUp end={10} suffix={isZh ? '亿+' : 'B+ RMB'} duration={1800} />
            </div>
            <div className="text-navy-200 text-xs sm:text-sm mt-1 font-medium">{isZh ? '外贸交易额' : 'Trade Volume'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
