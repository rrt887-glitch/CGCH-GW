import React from 'react';

interface ModeSectionProps {
  isZh: boolean;
}

export const ModeSection: React.FC<ModeSectionProps> = ({ isZh }) => {
  return (
    <section id="mode" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 reveal-init">
          <p className="text-navy-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            METHODOLOGY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight mb-3">
            {isZh ? '陪跑模式' : 'Accompanying Mode'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            {isZh ? (
              <>AI + 海外社媒获客 + 高效成交SOP + 轻本地化<br className="hidden sm:inline" />让外贸变简单，高效签约海外代理商</>
            ) : (
              <>AI + Global Social Acquisition + Efficient Closing SOP + Light Localization<br className="hidden sm:inline" />Make foreign trade simple and efficiently sign overseas agents</>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <div className="relative bg-navy-900 text-white rounded-3xl p-5 sm:p-7 card-hover reveal-init delay-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-amber-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">{isZh ? '第一阶段' : 'Stage 1'}</div>
              <h3 className="font-extrabold text-xl sm:text-2xl mb-4 tracking-tight text-white">
                {isZh ? '7天获客测试验证' : '7-Day Lead Test'}
              </h3>
              <ul className="space-y-3 text-base text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '7天极速产出海外B2B询盘' : 'Rapid overseas B2B inquiries in 7 days'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '严控获客成本，拒绝无效投入' : 'Strict cost control, no wasted spend'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '保底客资输出，破解零客资难题' : 'Guaranteed lead output'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '精准梳理企业海外商业定位' : 'Precise overseas positioning'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '老板专属出海企业营，实战赋能' : 'Owner-focused training camp'}</span></li>
              </ul>
            </div>
          </div>

          <div className="relative bg-navy-900 text-white rounded-3xl p-5 sm:p-7 card-hover reveal-init delay-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-amber-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">{isZh ? '第二阶段' : 'Stage 2'}</div>
              <h3 className="font-extrabold text-xl sm:text-2xl mb-4 tracking-tight text-white">
                {isZh ? '深度落地陪跑' : 'Deep Landing Support'}
              </h3>
              <ul className="space-y-3 text-base text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '团队现场贴身陪跑落地执行' : 'On-site team accompaniment'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '现场持续批量产出精准海外客资' : 'Continuous precise lead generation'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '全流程动态跟进，实时问题纠偏' : 'Full-process dynamic follow-up'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '搭建企业自主可持续获客体系' : 'Build sustainable in-house system'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '陪跑共建企业线上订单成交体系' : 'Co-build online order closing system'}</span></li>
              </ul>
            </div>
          </div>

          <div className="relative bg-navy-900 text-white rounded-3xl p-5 sm:p-7 card-hover reveal-init delay-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-amber-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">{isZh ? '第三阶段' : 'Stage 3'}</div>
              <h3 className="font-extrabold text-xl sm:text-2xl mb-4 tracking-tight text-white">
                {isZh ? '出海实地赋能' : 'On-site Empowerment'}
              </h3>
              <ul className="space-y-3 text-base text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '带领工厂老板实地出海，直面终端客户' : 'Lead factory owners to meet end customers'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '链接海外本土优质资源，匹配精准客商' : 'Connect local resources & match buyers'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '线下助力商务洽谈，推动项目落地成交' : 'Support negotiations to close deals'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '为企业规划海外本土市场布局' : 'Plan local market layout'}</span></li>
              </ul>
            </div>
          </div>

          <div className="relative bg-navy-900 text-white rounded-3xl p-5 sm:p-7 card-hover reveal-init delay-400 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-amber-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">{isZh ? '第四阶段' : 'Stage 4'}</div>
              <h3 className="font-extrabold text-xl sm:text-2xl mb-4 tracking-tight text-white">
                {isZh ? '项目共创' : 'Project Co-creation'}
              </h3>
              <ul className="space-y-3 text-base text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '深度磨合，达成价值共识' : 'Deep alignment & shared vision'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '注入资金、专业人才、产业资源、海外渠道' : 'Inject capital, talent, industry resources & channels'}</span></li>
                <li className="flex items-start gap-2.5"><span className="text-amber-400 font-bold">•</span><span>{isZh ? '共建项目携手开拓全球市场' : 'Joint projects to expand global markets'}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
