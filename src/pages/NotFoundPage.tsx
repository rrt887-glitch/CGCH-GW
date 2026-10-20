import React from 'react';
import { Home, Phone, ArrowRight, AlertCircle, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="font-sans text-navy-900 antialiased bg-white min-h-screen flex flex-col justify-between selection:bg-navy-500 selection:text-white">
      {/* Top Simple Header */}
      <header className="bg-navy-950 py-3.5 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center" title="返回草根出海首页">
            <img src="/cgch.png" alt="草根出海" className="h-28 sm:h-32 w-auto object-contain" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm font-medium text-navy-200 hover:text-white transition hidden sm:inline-block"
            >
              返回首页
            </a>
            <a
              href="tel:13592713944"
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold rounded-full text-xs transition"
            >
              电话咨询：135 9271 3944
            </a>
          </div>
        </div>
      </header>

      {/* Main 404 Hero */}
      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-400/10 text-amber-500 mb-2">
            <AlertCircle className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <span className="text-sm font-bold uppercase tracking-widest text-amber-600 block">
              HTTP 404 NOT FOUND
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
              抱歉，您访问的页面不存在
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
              您所请求的网址可能已变更、被移除，或者输入的链接有误。请检查网址或通过下方快捷通道返回。
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="/"
              className="w-full sm:w-auto px-7 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition shadow-lg flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 text-amber-400" />
              <span>返回草根出海首页</span>
            </a>
            <a
              href="/#mode"
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold rounded-xl transition flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-slate-600" />
              <span>查看三大核心服务</span>
            </a>
          </div>

          {/* Direct Services Recommendation */}
          <div className="pt-8 border-t border-slate-200 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
              您可能在寻找以下出海赋能服务：
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="/services/manufacturing-overseas"
                className="p-3.5 rounded-xl border border-slate-200 hover:border-navy-400 hover:bg-navy-50/50 transition group"
              >
                <div className="font-bold text-navy-900 text-sm group-hover:text-navy-700 flex items-center justify-between">
                  <span>制造业出海陪跑</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  工厂外贸转型，2-4人专班驻点
                </p>
              </a>

              <a
                href="/services/social-media-lead-gen"
                className="p-3.5 rounded-xl border border-slate-200 hover:border-navy-400 hover:bg-navy-50/50 transition group"
              >
                <div className="font-bold text-navy-900 text-sm group-hover:text-navy-700 flex items-center justify-between">
                  <span>海外社媒获客陪跑</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  AI+TikTok/LinkedIn，3天极速拿客资
                </p>
              </a>

              <a
                href="/services/b2b-inquiry-sop"
                className="p-3.5 rounded-xl border border-slate-200 hover:border-navy-400 hover:bg-navy-50/50 transition group"
              >
                <div className="font-bold text-navy-900 text-sm group-hover:text-navy-700 flex items-center justify-between">
                  <span>外贸询盘成交SOP</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  海外买家谈判背调与订单转化闭环
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-navy-950 text-navy-400 py-6 px-4 text-center text-xs border-t border-white/10">
        <p>© 2025–2026 草根出海 · 中国制造迈向全球的专业陪跑伙伴 | 咨询专线：135 9271 3944</p>
      </footer>
    </div>
  );
};
