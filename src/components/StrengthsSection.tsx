import React from 'react';

interface StrengthsSectionProps {
  isZh: boolean;
}

export const StrengthsSection: React.FC<StrengthsSectionProps> = ({ isZh }) => {
  return (
    <section id="strengths" className="py-12 sm:py-16 md:py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 reveal-init">
          <p className="text-navy-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight mb-3">
            {isZh ? '核心优势' : 'Core Strengths'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium">
            {isZh ? '四大核心壁垒，构筑稳健出海护城河' : 'Four Core Pillars Empowering Sustainable Global Trade'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-10">
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm card-hover reveal-init delay-100 border border-navy-100/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center text-xl font-black mb-5 shadow-sm">1</div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-navy-900 mb-3 tracking-tight">
                {isZh ? '自营实战团队' : 'In-house Expert Team'}
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {isZh ? (
                  '自有55人全职外贸B2B实战团队，已成熟跑通欧美、中东、亚非拉全域市场。自营产品线已签约全球100余家区域代理商，沉淀扎实海外落地经验。'
                ) : (
                  '55 full-time B2B foreign trade experts with proven experience across Europe, US, Middle East, Asia, Africa & Latin America. Own product lines signed with 100+ regional agents worldwide.'
                )}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm card-hover reveal-init delay-200 border border-navy-100/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center text-xl font-black mb-5 shadow-sm">2</div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-navy-900 mb-3 tracking-tight">
                {isZh ? '全自营交付体系' : 'Full In-house Delivery'}
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {isZh ? (
                  '所有陪跑导师均来自内部自营外贸体系，不聘用外部外包人员，售前、落地、售后全流程服务标准统一，配套方案与运营打法可持续迭代升级。'
                ) : (
                  'All mentors from our internal foreign trade system. No external outsourcing. Unified standards for pre-sales, implementation and after-sales with continuously optimized playbooks.'
                )}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm card-hover reveal-init delay-300 border border-navy-100/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center text-xl font-black mb-5 shadow-sm">3</div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-navy-900 mb-3 tracking-tight">
                {isZh ? '标准化增长模型' : 'Standardized Growth Model'}
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {isZh ? (
                  '沉淀60个细分行业出海落地案例，具备打造单年新增3000万海外营收的标准化外贸增长模型；2025年全年累计扶持30家企业实现外贸年增收3000万。'
                ) : (
                  '60+ industry go-global cases. Proven model for delivering 30 million RMB annual overseas revenue growth. Supported 30 enterprises to achieve this in 2025.'
                )}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm card-hover reveal-init delay-400 border border-navy-100/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center text-xl font-black mb-5 shadow-sm">4</div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-navy-900 mb-3 tracking-tight">
                {isZh ? '平台深度合作' : 'Deep Platform Partnerships'}
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {isZh ? (
                  '与30余家海外官方平台达成深度战略合作，同时出任平台认证的专属操盘及落地交付服务商。'
                ) : (
                  'Strategic partnerships with 30+ overseas official platforms. Certified exclusive operator and delivery service provider for multiple platforms.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Ecosystem */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm reveal-init delay-200 border border-navy-100/80 card-hover">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4 tracking-tight">
            {isZh ? '航海家生态' : 'Navigator Ecosystem'}
          </h3>
          <p className="text-slate-700 leading-relaxed mb-6 max-w-4xl text-base sm:text-lg">
            {isZh ? (
              '航海家俱乐部与草根出海互为股东，专注承接草根出海核心业务之外的全链条后端服务。可为客户解决跨境物流对接、货运方案优化等物流解决方案，同时满足供应链配套协调、扩量资金支持等出海落地的各类实操性需求，作为前端业务的坚实后盾。俱乐部汇聚20余位实战出海专家，组建专属智囊团。'
            ) : (
              'The Navigator Club and Cao Gen Chu Hai are mutual shareholders, focusing on full-chain backend services beyond our core business — cross-border logistics, freight optimization, supply chain coordination, and expansion financing. A dedicated think-tank of 20+ practical go-global experts supports clients end-to-end.'
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-2.5 bg-navy-100 text-navy-900 rounded-full text-sm sm:text-base font-bold hover:bg-navy-200 transition">
              {isZh ? '0-1 解决订单' : '0-1: Orders'}
            </span>
            <span className="px-5 py-2.5 bg-navy-100 text-navy-900 rounded-full text-sm sm:text-base font-bold hover:bg-navy-200 transition">
              {isZh ? '1-10 解决落地' : '1-10: Landing'}
            </span>
            <span className="px-5 py-2.5 bg-navy-100 text-navy-900 rounded-full text-sm sm:text-base font-bold hover:bg-navy-200 transition">
              {isZh ? '10-N 解决扩张' : '10-N: Expansion'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
