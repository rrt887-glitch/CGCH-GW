import React from 'react';
import { CountUp } from './CountUp';

interface AboutSectionProps {
  isZh: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isZh }) => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white border-b border-navy-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 reveal-init">
          <p className="text-navy-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            ABOUT CAO GEN CHU HAI
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight mb-3">
            {isZh ? '关于我们' : 'About Us'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium">
            {isZh ? '深耕外贸增长陪跑赛道 · 助推中国制造高质出海' : 'Empowering Chinese Manufacturing Enterprises to Expand Globally'}
          </p>
        </div>

        {/* Upper Grid: Story & Complete Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch mb-8 sm:mb-10 md:mb-12">
          {/* Left: Company Story & Key Numbers */}
          <div className="lg:col-span-6 flex flex-col justify-between reveal-init delay-100">
            <div className="bg-navy-50/90 p-5 sm:p-8 md:p-9 rounded-3xl border border-navy-100 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-navy-900 mb-4 tracking-tight leading-snug">
                  {isZh ? '专注实业外贸增长的专业同行者' : 'Your Trusted Partner in Foreign Trade Growth'}
                </h3>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
                  {isZh ? (
                    '草根出海，深耕外贸增长陪跑赛道，服务年营业额2000万-4亿实业企业。依托AI数字化能力与海外全社媒流量，以轻量化2-4人专项小组，3至7天批量获取高质量海外B2B精准客户，实现企业首年海外营收增量3000万。服务行业超60类，2025年累计为合作客户创造十亿级外贸营收，以专业力量助推中国制造卖向全球。'
                  ) : (
                    'Cao Gen Chu Hai specializes in foreign trade growth accompaniment, serving manufacturing enterprises with annual revenue of 20–400 million RMB. Leveraging AI digital capabilities and global social media traffic, our lightweight 2–4 person teams acquire high-quality overseas B2B leads within 3–7 days, driving first-year overseas revenue growth of up to 30 million RMB. Serving 60+ industries and generating over 1 billion RMB in trade volume for clients in 2025.'
                  )}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-navy-200/70">
                <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-sm border border-navy-100 card-hover">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900">
                    <CountUp end={1000} suffix="+" duration={1800} />
                  </div>
                  <div className="text-xs sm:text-base font-medium text-slate-600 mt-1">{isZh ? '服务实体企业' : 'Enterprises Served'}</div>
                </div>
                <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-sm border border-navy-100 card-hover">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900">
                    <CountUp end={10} suffix={isZh ? '亿+' : 'B+ RMB'} duration={1800} />
                  </div>
                  <div className="text-xs sm:text-base font-medium text-slate-600 mt-1">{isZh ? '外贸交易规模' : 'Trade Volume'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Team Photo */}
          <div className="lg:col-span-6 reveal-init delay-200 flex flex-col">
            <div className="w-full h-full min-h-[260px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-md border border-navy-100 flex">
              <img
                src="/TJ.png"
                alt={isZh ? '草根出海 团队照片' : 'Cao Gen Chu Hai Team'}
                className="w-full h-full object-cover object-center rounded-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Lower Grid: Values & Mission */}
        <div className="reveal-init delay-300 bg-navy-900 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/15">
            <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10">
              <div className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5">
                {isZh ? '立身准则' : 'Principles'}
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {isZh ? '正心、正念、正行' : 'Integrity, Right Mindset, Right Action'}
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {isZh ? '坚守商业道德与契约精神，以诚信和端正的从业态度为立身根本。' : 'Upholding integrity and professionalism as our core foundation.'}
              </p>
            </div>
            <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10">
              <div className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5">
                {isZh ? '行事原则' : 'Working Style'}
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {isZh ? '小心承诺，大胆交付' : 'Promise Carefully, Deliver Boldly'}
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {isZh ? '做我所说，说我所做，严谨把控获客指标，以扎实结果兑现每一份承诺。' : 'Rigorous execution and delivering measurable results with full accountability.'}
              </p>
            </div>
            <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10">
              <div className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5">
                {isZh ? '服务态度' : 'Service Attitude'}
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {isZh ? '以服务为本，直面问题' : 'Service-first & Problem Solver'}
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {isZh ? '积极快速响应客户诉求，不推诿不回避，与企业同频攻克出海卡点。' : 'Proactively resolving client export challenges without shifting responsibility.'}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3.5 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10">
              <div className="px-3 py-1 bg-amber-400/20 text-amber-300 font-bold text-xs sm:text-sm rounded-lg uppercase flex-shrink-0">
                {isZh ? '使命' : 'Mission'}
              </div>
              <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                {isZh ? '助力实体企业稳拓海外市场、实现长效共赢' : 'Help manufacturing enterprises steadily expand overseas markets and achieve long-term mutual success'}
              </p>
            </div>
            <div className="flex items-start gap-3.5 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10">
              <div className="px-3 py-1 bg-amber-400/20 text-amber-300 font-bold text-xs sm:text-sm rounded-lg uppercase flex-shrink-0">
                {isZh ? '愿景' : 'Vision'}
              </div>
              <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                {isZh ? '致力成为靠谱专业、值得全球企业信赖的出海同行者' : 'Become a reliable, professional companion trusted by global enterprises'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
