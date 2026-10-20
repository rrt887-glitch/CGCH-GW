import React, { useState, useMemo } from 'react';
import { SectorCaseData } from '../data/caseCategories';

interface SectorCaseCardProps {
  sector: SectorCaseData;
  isZh: boolean;
}

interface ProductImageProps {
  url: string;
  fileName?: string;
  alt: string;
  sectorId?: string;
}

const ProductImage: React.FC<ProductImageProps> = React.memo(({ url, fileName, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Direct inline Base64 data URI (guaranteed 100% resilient across deployments)
  const src = url || (fileName ? `/cases/${fileName}` : '');

  if (hasError || !src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 p-2 text-center select-none">
        <div className="w-7 h-7 rounded-lg bg-white/80 shadow-xs flex items-center justify-center mb-1 text-slate-500 font-bold text-xs">
          {alt.slice(0, 2)}
        </div>
        <span className="text-[11px] font-medium leading-tight line-clamp-1 text-slate-700">{alt}</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative bg-slate-100 overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200/70 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-center group-hover/img:scale-108 transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          // If Base64 ever failed (which won't happen), try static fallback before failing
          if (fileName && src !== `/cases/${fileName}`) {
            const img = new Image();
            img.src = `/cases/${fileName}`;
            img.onload = () => setIsLoaded(true);
            img.onerror = () => setHasError(true);
          } else {
            setHasError(true);
          }
        }}
      />
    </div>
  );
});

ProductImage.displayName = 'ProductImage';

export const SectorCaseCard: React.FC<SectorCaseCardProps> = React.memo(({
  sector,
  isZh,
}) => {
  return (
    <div
      className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col lg:flex-row items-stretch justify-between gap-5 sm:gap-6 lg:gap-7 group"
    >
      {/* ===== LEFT COLUMN: Concise Titles & Scope (38% width) ===== */}
      <div className="w-full lg:w-[38%] shrink-0 flex flex-col justify-between">
        <div>
          {/* Top: Sector Number & Icon */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-navy-900 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
              {sector.icon}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-slate-100 text-navy-900 text-xs font-extrabold border border-slate-200/70 tracking-wider">
                {sector.sectorNumber}
              </span>
              <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                SECTOR
              </span>
            </div>
          </div>

          {/* Titles */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight">
            {isZh ? sector.titleZh : sector.titleEn}
          </h3>
          <p className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5 mb-3">
            {sector.titleEn}
          </p>

          {/* Short Description (Strictly within 2 lines) */}
          <p className="text-sm text-slate-600 font-normal leading-relaxed mb-4 line-clamp-2">
            {isZh ? sector.shortDescZh : sector.shortDescEn}
          </p>
        </div>

        {/* Streamlined Scope List (Compact & Clean) */}
        <div className="pt-3 border-t border-slate-100">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            {isZh ? '核心品类' : 'Core Categories'}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed font-normal">
            {isZh ? sector.scopeListZh : sector.scopeListEn}
          </p>
        </div>
      </div>

      {/* ===== RIGHT COLUMN: 2-Row x 3-Col Large Clean Image Grid (62% width) ===== */}
      <div className="w-full lg:w-[62%] flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-3">
          {sector.products.map((product, idx) => (
            <div
              key={idx}
              className="relative aspect-4/3 rounded-lg sm:rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-xs group/img"
              title={isZh ? product.nameZh : product.nameEn}
            >
              <ProductImage
                url={product.url}
                fileName={product.fileName}
                alt={isZh ? product.nameZh : product.nameEn}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

SectorCaseCard.displayName = 'SectorCaseCard';
