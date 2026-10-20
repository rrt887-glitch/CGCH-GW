import React from 'react';

interface ProcessSectionProps {
  isZh: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ isZh }) => {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 reveal-init">
          <p className="text-navy-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            STEP BY STEP
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight mb-3">
            {isZh ? '合作流程' : 'Cooperation Process'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium">
            {isZh ? '清晰标准5步法，高效开启出海增长之旅' : '5 Clear Steps to Launch Your Global Trade Growth'}
          </p>
        </div>

        <div className="relative process-line grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 md:gap-4">
          <div className="bg-white md:bg-transparent p-5 md:p-2 rounded-2xl md:rounded-none shadow-sm md:shadow-none border md:border-none border-navy-100/80 text-center reveal-init delay-100 relative z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mx-auto rounded-full bg-white border-2 border-navy-300 flex items-center justify-center text-navy-900 font-black text-xl sm:text-2xl shadow-md mb-3 sm:mb-4">1</div>
            <h4 className="font-extrabold text-navy-900 text-lg sm:text-xl mb-1.5">{isZh ? '在线预约' : 'Online Booking'}</h4>
            <p className="text-sm sm:text-base text-slate-600 font-medium">{isZh ? '专属客服一对一回访' : 'Dedicated one-on-one callback'}</p>
          </div>
          <div className="bg-white md:bg-transparent p-5 md:p-2 rounded-2xl md:rounded-none shadow-sm md:shadow-none border md:border-none border-navy-100/80 text-center reveal-init delay-200 relative z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mx-auto rounded-full bg-white border-2 border-navy-300 flex items-center justify-center text-navy-900 font-black text-xl sm:text-2xl shadow-md mb-3 sm:mb-4">2</div>
            <h4 className="font-extrabold text-navy-900 text-lg sm:text-xl mb-1.5">{isZh ? '签订测试合同' : 'Test Agreement'}</h4>
            <p className="text-sm sm:text-base text-slate-600 font-medium">{isZh ? '签订合同及交付测试费用' : 'Sign contract & pay test fee'}</p>
          </div>
          <div className="bg-white md:bg-transparent p-5 md:p-2 rounded-2xl md:rounded-none shadow-sm md:shadow-none border md:border-none border-navy-100/80 text-center reveal-init delay-300 relative z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mx-auto rounded-full bg-white border-2 border-navy-300 flex items-center justify-center text-navy-900 font-black text-xl sm:text-2xl shadow-md mb-3 sm:mb-4">3</div>
            <h4 className="font-extrabold text-navy-900 text-lg sm:text-xl mb-1.5">{isZh ? '收集资料' : 'Collect Materials'}</h4>
            <p className="text-sm sm:text-base text-slate-600 font-medium">{isZh ? '行业经理协助梳理企业优势' : 'Industry manager helps organize'}</p>
          </div>
          <div className="bg-white md:bg-transparent p-5 md:p-2 rounded-2xl md:rounded-none shadow-sm md:shadow-none border md:border-none border-navy-100/80 text-center reveal-init delay-400 relative z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mx-auto rounded-full bg-white border-2 border-navy-300 flex items-center justify-center text-navy-900 font-black text-xl sm:text-2xl shadow-md mb-3 sm:mb-4">4</div>
            <h4 className="font-extrabold text-navy-900 text-lg sm:text-xl mb-1.5">{isZh ? '正式测试' : 'Official Test'}</h4>
            <p className="text-sm sm:text-base text-slate-600 font-medium">{isZh ? '3-7天出结果，看真实后台' : 'Results in 3–7 days with real backend'}</p>
          </div>
          <div className="bg-white md:bg-transparent p-5 md:p-2 rounded-2xl md:rounded-none shadow-sm md:shadow-none border md:border-none border-navy-100/80 text-center reveal-init delay-500 relative z-10 sm:col-span-2 md:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mx-auto rounded-full bg-navy-900 text-white flex items-center justify-center font-black text-xl sm:text-2xl shadow-md mb-3 sm:mb-4">5</div>
            <h4 className="font-extrabold text-navy-900 text-lg sm:text-xl mb-1.5">{isZh ? '正式合作' : 'Formal Partnership'}</h4>
            <p className="text-sm sm:text-base text-slate-600 font-medium">{isZh ? '测试通过，正式深入合作' : 'Pass test & start deep cooperation'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
