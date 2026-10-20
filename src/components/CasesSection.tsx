import React from 'react';
import { SectorCaseCard } from './SectorCaseCard';
import { sectorCasesData } from '../data/caseCategories';

interface CasesSectionProps {
  isZh: boolean;
}

export const CasesSection: React.FC<CasesSectionProps> = ({ isZh }) => {
  return (
    <section id="cases" className="py-12 sm:py-16 md:py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 reveal-init">
          <p className="text-navy-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            TRACK RECORD
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight mb-3">
            {isZh ? '成功案例' : 'Success Cases'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium">
            {isZh ? '覆盖大设备、五金配件、家具建材、快消品等多个赛道' : 'Covering heavy equipment, hardware, furniture & building materials, FMCG and more'}
          </p>
        </div>

        {/* 2 Rows x 2 Columns Spacious Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {sectorCasesData.map((sector) => (
            <SectorCaseCard
              key={sector.id}
              sector={sector}
              isZh={isZh}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
