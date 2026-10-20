import React, { useRef } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  portraitChenHuiyan,
  portraitWuWenlue,
  portraitHeYalin,
  portraitZhouHuakang,
  portraitZhangYing,
  portraitJiangWenhui,
  portraitLiuJian,
  portraitKuangDarui,
} from '../data/mentorImages';

interface TeamSectionProps {
  isZh?: boolean;
  onOpenConsultModal?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  isZh = true,
  onOpenConsultModal,
}) => {
  const teamScrollRef = useRef<HTMLDivElement>(null);
  const hoverVelocityRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const startHoverScroll = () => {
    if (animationFrameIdRef.current !== null) return;

    const step = () => {
      if (hoverVelocityRef.current !== 0 && teamScrollRef.current) {
        teamScrollRef.current.scrollLeft += hoverVelocityRef.current;
        animationFrameIdRef.current = requestAnimationFrame(step);
      } else {
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
        animationFrameIdRef.current = null;
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(step);
  };

  const handleTeamMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = teamScrollRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;
    const ratio = mouseX / width;

    // Trigger hover scroll when pointing at left 32% or right 32%
    const leftThreshold = 0.32;
    const rightThreshold = 0.68;

    if (ratio < leftThreshold) {
      const factor = (leftThreshold - ratio) / leftThreshold;
      hoverVelocityRef.current = -(factor * 12 + 2);
      startHoverScroll();
    } else if (ratio > rightThreshold) {
      const factor = (ratio - rightThreshold) / (1 - rightThreshold);
      hoverVelocityRef.current = (factor * 12 + 2);
      startHoverScroll();
    } else {
      hoverVelocityRef.current = 0;
    }
  };

  const handleTeamMouseLeave = () => {
    hoverVelocityRef.current = 0;
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
  };

  const scrollTeam = (direction: 'left' | 'right') => {
    if (teamScrollRef.current) {
      const scrollAmount = teamScrollRef.current.clientWidth * 0.65;
      teamScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 reveal-init">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            {isZh ? '团队实力 · 实战导师' : 'Team Strength & Mentors'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            {isZh ? (
              '服务年营业额2000万到4亿的工厂企业；用2-4人小团队，3天日稳定拿到100+海外精准客资，首年冲刺500万-5000万；累计助推外贸额10亿+。'
            ) : (
              'Serving factories with 20–400M RMB annual revenue. 2–4 person teams deliver 100+ daily leads in 3 days, targeting 5–50M RMB first-year growth. 1B+ RMB trade volume.'
            )}
          </p>
        </div>

        {/* Carousel Track Wrapper with Semi-Transparent Floating Buttons */}
        <div className="relative group/carousel">
          {/* Left Semi-Transparent Floating Button */}
          <button
            type="button"
            onClick={() => scrollTeam('left')}
            onMouseEnter={() => {
              hoverVelocityRef.current = -8;
              startHoverScroll();
            }}
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label={isZh ? '向左滑动' : 'Scroll Left'}
            title={isZh ? '向左滑动' : 'Scroll Left'}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Semi-Transparent Floating Button */}
          <button
            type="button"
            onClick={() => scrollTeam('right')}
            onMouseEnter={() => {
              hoverVelocityRef.current = 8;
              startHoverScroll();
            }}
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label={isZh ? '向右滑动' : 'Scroll Right'}
            title={isZh ? '向右滑动' : 'Scroll Right'}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Subtle Gradient Edge Shadows */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-slate-900/70 to-transparent z-10 rounded-l-2xl" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-slate-900/70 to-transparent z-10 rounded-r-2xl" />

          {/* Horizontal Hover Scroll Track */}
          <div
            ref={teamScrollRef}
            onMouseMove={handleTeamMouseMove}
            onMouseLeave={handleTeamMouseLeave}
            className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-3 px-3 sm:px-6 cursor-ew-resize select-none touch-pan-x"
          >
            {/* 1. 图1: 陈惠燕 */}
            <div className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-slate-800/90 border border-slate-700/90 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={portraitChenHuiyan}
                    alt={isZh ? '陈惠燕' : 'Chen Huiyan'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Award className="w-3 h-3" />
                    <span>{isZh ? '创始人' : 'Founder'}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {isZh ? '陈惠燕' : 'Chen Huiyan'}
                    </h3>
                    <p className="text-amber-300 font-bold text-xs sm:text-sm mt-0.5">{isZh ? '草根出海创始人' : 'Founder'}</p>
                  </div>
                </div>

                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-blue-300 border border-slate-600/60 font-semibold">
                      {isZh ? '创始人' : 'Founder'}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600/60 font-medium">
                      {isZh ? '战略总架构' : 'Strategy'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {isZh ? '航海家出海服务生态联合创始人 / High Growth海外品牌创始人，操盘数十家传统制造企业成功搭建海外直营渠道。' : 'Co-founder of Navigator ecosystem & High Growth overseas brands.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 pt-2.5 border-t border-slate-700/70 text-[11px] font-medium text-amber-400/95 bg-slate-900/40">
                ★ {isZh ? '领衔出海生态 累计赋能10亿+' : '1B+ Trade Growth'}
              </div>
            </div>

            {/* 2. 图2: 伍文略 */}
            <div className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-slate-800/90 border border-slate-700/90 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={portraitWuWenlue}
                    alt={isZh ? '伍文略' : 'Wu Wenlue'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Award className="w-3 h-3" />
                    <span>{isZh ? '联合创始人' : 'Co-founder'}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {isZh ? '伍文略' : 'Wu Wenlue'}
                    </h3>
                    <p className="text-amber-300 font-bold text-xs sm:text-sm mt-0.5">{isZh ? '联合创始人' : 'Co-founder'}</p>
                  </div>
                </div>

                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-blue-300 border border-slate-600/60 font-semibold">
                      {isZh ? '10亿级大卖' : '1B+ Seller'}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600/60 font-medium">
                      {isZh ? '技术顾问' : 'Tech Advisor'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {isZh ? '10亿级跨境大卖 / 草根出海联合创始人及技术顾问，精通跨境电商全球化供应链与精细化数字运营。' : 'Billion-level cross-border seller & technical advisor.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 pt-2.5 border-t border-slate-700/70 text-[11px] font-medium text-amber-400/95 bg-slate-900/40">
                ★ {isZh ? '主导技术与多渠道获客中台' : 'Global Tech Architecture'}
              </div>
            </div>

            {/* 3. 图3: 何亚林 */}
            <div className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-slate-800/90 border border-slate-700/90 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={portraitHeYalin}
                    alt={isZh ? '何亚林' : 'He Yalin'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Award className="w-3 h-3" />
                    <span>{isZh ? '生态CEO' : 'CEO'}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {isZh ? '何亚林' : 'He Yalin'}
                    </h3>
                    <p className="text-amber-300 font-bold text-xs sm:text-sm mt-0.5">{isZh ? 'HIBOB联合创始人' : 'Co-founder'}</p>
                  </div>
                </div>

                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-blue-300 border border-slate-600/60 font-semibold">
                      {isZh ? '生态CEO' : 'CEO'}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600/60 font-medium">
                      {isZh ? '畅销书作者' : 'Author'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {isZh ? '航海家出海服务生态CEO / 《新出海进化论》作者，擅长中国制造品牌化出海商业模式顶层设计与战略落地。' : 'CEO of Navigator ecosystem / Author of New Go-Global Evolution.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 pt-2.5 border-t border-slate-700/70 text-[11px] font-medium text-amber-400/95 bg-slate-900/40">
                ★ {isZh ? '《新出海进化论》畅销书作者' : 'Top Industry Authority'}
              </div>
            </div>

            {/* 4. 图4: 周华康 */}
            <div className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-slate-800/90 border border-slate-700/90 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={portraitZhouHuakang}
                    alt={isZh ? '周华康' : 'Zhou Huakang'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Award className="w-3 h-3" />
                    <span>{isZh ? '经营导师' : 'Mentor'}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {isZh ? '周华康' : 'Zhou Huakang'}
                    </h3>
                    <p className="text-amber-300 font-bold text-xs sm:text-sm mt-0.5">{isZh ? '实战派外贸经营导师' : 'Trade Mentor'}</p>
                  </div>
                </div>

                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-blue-300 border border-slate-600/60 font-semibold">
                      {isZh ? '经营导师' : 'Mentor'}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600/60 font-medium">
                      {isZh ? '战略定位' : 'Strategy'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {isZh ? '海外市场战略定位专家 / 外贸组织效能搭建专家，辅导40+企业建立高效转化外贸销售团队与考核激励体系。' : 'Overseas market strategy & organizational efficiency expert.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 pt-2.5 border-t border-slate-700/70 text-[11px] font-medium text-amber-400/95 bg-slate-900/40">
                ★ {isZh ? '独创外贸销售漏斗高转化模型' : 'Conversion Funnel Model'}
              </div>
            </div>

            {/* 5. 图5: 张颖 */}
            <div className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-slate-800/90 border border-slate-700/90 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={portraitZhangYing}
                    alt={isZh ? '张颖' : 'Zhang Ying'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Award className="w-3 h-3" />
                    <span>{isZh ? '实战操盘' : 'Lead'}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {isZh ? '张颖' : 'Zhang Ying'}
                    </h3>
                    <p className="text-amber-300 font-bold text-xs sm:text-sm mt-0.5">{isZh ? '四川分公司负责人' : 'Branch Head'}</p>
                  </div>
                </div>

                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-blue-300 border border-slate-600/60 font-semibold">
                      {isZh ? '深耕外贸10年' : '10-Yr Trade'}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600/60 font-medium">
                      {isZh ? '区域操盘手' : 'Lead'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {isZh ? '草根出海四川分公司总负责人，深耕外贸实战10年，跨境出海实战专家，东南亚及拉美市场头部大卖操盘手。' : '10-year trade veteran & top seller operator in Southeast Asia & Latin America.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 pt-2.5 border-t border-slate-700/70 text-[11px] font-medium text-amber-400/95 bg-slate-900/40">
                ★ {isZh ? '助西南制造企业快速搭海外网' : 'Regional Trade Lead'}
              </div>
            </div>

            {/* 6. 图6: 蒋文慧 */}
            <div className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-slate-800/90 border border-slate-700/90 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={portraitJiangWenhui}
                    alt={isZh ? '蒋文慧' : 'Jiang Wenhui'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Award className="w-3 h-3" />
                    <span>{isZh ? '交付架构' : 'Delivery'}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {isZh ? '蒋文慧' : 'Jiang Wenhui'}
                    </h3>
                    <p className="text-amber-300 font-bold text-xs sm:text-sm mt-0.5">{isZh ? '交付体系创造者' : 'Delivery Lead'}</p>
                  </div>
                </div>

                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-blue-300 border border-slate-600/60 font-semibold">
                      {isZh ? '亿级操盘手' : '100M+'}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600/60 font-medium">
                      {isZh ? '前百度算法PM' : 'Ex-Baidu'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {isZh ? '草根实战交付体系核心创造者，亿级操盘手，前百度算法PM，擅长海外主流社媒算法拆解与业务成交SOP制定。' : '100M+ operator, former Baidu algorithm PM, social SOP expert.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 pt-2.5 border-t border-slate-700/70 text-[11px] font-medium text-amber-400/95 bg-slate-900/40">
                ★ {isZh ? '独创3-7天极速出询盘SOP' : '3-7 Day Rapid Inquiry SOP'}
              </div>
            </div>

            {/* 7. 图7: 刘剑 */}
            <div className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-slate-800/90 border border-slate-700/90 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={portraitLiuJian}
                    alt={isZh ? '刘剑' : 'Liu Jian'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Award className="w-3 h-3" />
                    <span>{isZh ? 'AI赋能' : 'AI Lead'}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {isZh ? '刘剑' : 'Liu Jian'}
                    </h3>
                    <p className="text-amber-300 font-bold text-xs sm:text-sm mt-0.5">{isZh ? 'AI赋能实战讲师' : 'AI Instructor'}</p>
                  </div>
                </div>

                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-blue-300 border border-slate-600/60 font-semibold">
                      {isZh ? 'AI实战讲师' : 'AI Instructor'}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600/60 font-medium">
                      {isZh ? '辅导1000+厂' : '1000+'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {isZh ? 'AI赋能企业出海实战讲师，辅导1000+制造业企业，深度覆盖60+行业，擅长AI自动化获客与全流程智能降本增效。' : 'Trained 1000+ factories, overseas automation & inquiry specialist.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 pt-2.5 border-t border-slate-700/70 text-[11px] font-medium text-amber-400/95 bg-slate-900/40">
                ★ {isZh ? '线索效率提升8倍 / 成本降60%' : '8x Efficiency / -60% Cost'}
              </div>
            </div>

            {/* 8. 图8: 邝达蕊 */}
            <div className="w-[230px] sm:w-[250px] md:w-[260px] shrink-0 bg-slate-800/90 border border-slate-700/90 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                  <img
                    src={portraitKuangDarui}
                    alt={isZh ? '邝达蕊' : 'Kuang Darui'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md flex items-center gap-1 backdrop-blur-sm">
                    <Award className="w-3 h-3" />
                    <span>{isZh ? '行业实战' : 'Industry'}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {isZh ? '邝达蕊' : 'Kuang Darui'}
                    </h3>
                    <p className="text-amber-300 font-bold text-xs sm:text-sm mt-0.5">{isZh ? '快销/建材专家' : 'Specialist'}</p>
                  </div>
                </div>

                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-blue-300 border border-slate-600/60 font-semibold">
                      {isZh ? '8年外贸经验' : '8-Yr Trade'}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700/80 text-slate-200 border border-slate-600/60 font-medium">
                      {isZh ? '0-1搭建' : '0-1 Build'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {isZh ? '8年一线外贸与海外谈判实战经验，精通海外社媒高转化跟进，帮助数十家家居建材与快销品工厂从0搭建团队。' : '8-year trade specialist, 0-to-1 team builder & social conversion expert.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 pt-2.5 border-t border-slate-700/70 text-[11px] font-medium text-amber-400/95 bg-slate-900/40">
                ★ {isZh ? '建材快销外贸0到1高转化实操' : '0-to-1 Team Closer'}
              </div>
            </div>
          </div>
        </div>

        {/* Footer prompt banner */}
        <div className="mt-8 sm:mt-10 flex items-center justify-between flex-col sm:flex-row gap-4 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 reveal-init">
          <div className="text-slate-300 text-sm sm:text-base text-center sm:text-left">
            <span className="font-bold text-white">{isZh ? '8大导师全流程陪跑保障：' : 'Full Mentorship Guarantee: '}</span>
            {isZh ? '从战略定位、AI工具获客矩阵、商务洽谈SOP到外贸团队搭建，手把手带教交付。' : 'End-to-end guidance from positioning, AI tooling to closing.'}
          </div>
          <button
            type="button"
            onClick={onOpenConsultModal}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition shadow-lg shrink-0 cursor-pointer active:scale-95"
          >
            {isZh ? '预约导师1对1评估' : 'Book 1-on-1 Session'}
          </button>
        </div>
      </div>
    </section>
  );
};
