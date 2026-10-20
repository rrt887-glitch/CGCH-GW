import React, { useState } from 'react';
import {
  ChevronRight,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  painPointsTitle: string;
  painPoints: { title: string; desc: string }[];
  solutionsTitle: string;
  solutions: { iconName: string; title: string; desc: string }[];
  formServiceTitle: string;
}

interface ServicePageLayoutProps {
  service: ServiceDetail;
  otherServices: { slug: string; title: string; desc: string }[];
}

export const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ service, otherServices }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    industry: '',
    hp_service_trap: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Client-side honeypot check
    if (formData.hp_service_trap) {
      setSubmitStatus('success');
      return;
    }

    const cleanPhone = formData.phone.trim().replace(/[\s\-_()]/g, '');
    const cnMobileRegex = /^1[3-9]\d{9}$/;
    const intlPhoneRegex = /^(\+?\d{1,4})?[1-9]\d{6,14}$/;

    if (!cleanPhone || (!cnMobileRegex.test(cleanPhone) && !intlPhoneRegex.test(cleanPhone))) {
      setErrorMessage('请输入规范有效的11位中国手机号或国际电话');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/notify-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactPerson: formData.contactPerson,
          phone: formData.phone,
          industry: formData.industry,
          source: `service-${service.slug}`,
          hp_field: formData.hp_service_trap,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          contactPerson: '',
          phone: '',
          industry: '',
          hp_service_trap: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || '提交失败，请直接拨打咨询电话 135 9271 3944');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('网络连接异常，请直接拨打电话：135 9271 3944');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans text-navy-900 antialiased bg-white selection:bg-navy-500 selection:text-white">
      {/* Header */}
      <header
        id="navbar"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 nav-scrolled py-1 sm:py-1.5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between transition-all duration-300 h-14 md:h-16">
            <a href="/" className="flex items-center" title="草根出海官网">
              <img src="/cgch.png" alt="草根出海" className="h-40 md:h-40 w-auto object-contain" />
            </a>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              <div className="relative group">
                <a
                  href="/#mode"
                  className="text-amber-300 hover:text-amber-200 text-sm font-bold transition flex items-center gap-1 py-1 cursor-pointer"
                >
                  <span>三大核心服务</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>
              </div>
              <a href="/#about" className="text-white/85 hover:text-white text-sm font-medium transition hover:-translate-y-0.5 duration-200 py-1">
                关于我们
              </a>
              <a href="/#strengths" className="text-white/85 hover:text-white text-sm font-medium transition hover:-translate-y-0.5 duration-200 py-1">
                核心优势
              </a>
              <a href="/#team" className="text-white/85 hover:text-white text-sm font-medium transition hover:-translate-y-0.5 duration-200 py-1">
                团队实力
              </a>
              <a href="/#cases" className="text-white/85 hover:text-white text-sm font-medium transition hover:-translate-y-0.5 duration-200 py-1">
                成功案例
              </a>
              <a href="/#mode" className="text-white/85 hover:text-white text-sm font-medium transition hover:-translate-y-0.5 duration-200 py-1">
                陪跑模式
              </a>
              <a href="/#process" className="text-white/85 hover:text-white text-sm font-medium transition hover:-translate-y-0.5 duration-200 py-1">
                合作流程
              </a>
              <a href="/#contact" className="text-white/85 hover:text-white text-sm font-medium transition hover:-translate-y-0.5 duration-200 py-1">
                联系我们
              </a>
            </nav>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="#consult-form"
                className="hidden sm:inline-flex items-center px-4 sm:px-5 py-2.5 min-h-[40px] bg-white text-navy-900 text-sm font-semibold rounded-full hover:bg-navy-50 transition shadow-sm hover:scale-105 active:scale-95 duration-200 cursor-pointer"
              >
                立即咨询
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white transition cursor-pointer touch-manipulation"
                aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/98 border-t border-white/10 px-4 py-6 space-y-4">
            <a
              href="/#mode"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-amber-300 font-bold py-2"
            >
              三大核心服务
            </a>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="block text-white/90 py-1.5">
              关于我们
            </a>
            <a href="/#strengths" onClick={() => setMobileMenuOpen(false)} className="block text-white/90 py-1.5">
              核心优势
            </a>
            <a href="/#team" onClick={() => setMobileMenuOpen(false)} className="block text-white/90 py-1.5">
              团队实力
            </a>
            <a href="/#cases" onClick={() => setMobileMenuOpen(false)} className="block text-white/90 py-1.5">
              成功案例
            </a>
            <a href="/#mode" onClick={() => setMobileMenuOpen(false)} className="block text-white/90 py-1.5">
              陪跑模式
            </a>
            <a href="/#process" onClick={() => setMobileMenuOpen(false)} className="block text-white/90 py-1.5">
              合作流程
            </a>
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-white/90 py-1.5">
              联系我们
            </a>
            <div className="pt-2">
              <a
                href="tel:13592713944"
                className="block text-center py-3 bg-amber-400 text-navy-950 font-bold rounded-xl"
              >
                电话咨询：135 9271 3944
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <div className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-navy-300 mb-6" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition">
              首页
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-navy-400" />
            <a href="/#mode" className="hover:text-white transition">
              核心服务
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-navy-400" />
            <span className="text-amber-300 font-semibold" aria-current="page">
              {service.title}
            </span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-navy-100 leading-relaxed mb-8 max-w-3xl">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-navy-200">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-12">
            {/* Section 1: Pain points */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-amber-400 rounded-full inline-block" />
                <span>{service.painPointsTitle}</span>
              </h2>
              <div className="space-y-4">
                {service.painPoints.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-navy-50/60 border border-navy-100">
                    <h3 className="font-bold text-navy-950 text-base mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Solutions */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-navy-700 rounded-full inline-block" />
                <span>{service.solutionsTitle}</span>
              </h2>
              <div className="space-y-4">
                {service.solutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-navy-100 bg-white shadow-sm flex flex-col sm:flex-row items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center flex-shrink-0 font-extrabold text-xl">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Phone Call Callout */}
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-6 sm:p-7 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-amber-400 font-bold text-sm mb-1">官方专家一对一定制咨询</div>
                <div className="text-2xl sm:text-3xl font-black">135 9271 3944</div>
                <div className="text-xs text-slate-300 mt-1">预约专家为您评估7天获客测试可行性与实施排期</div>
              </div>
              <a
                href="tel:13592713944"
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-navy-950 font-extrabold rounded-xl transition text-center shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>立即电话咨询</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sticky Form & Other Services */}
          <div className="lg:col-span-5 sticky top-24" id="consult-form">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-navy-100">
              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>专属顾问 1 对 1 深度对接</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3 tracking-tight">
                立即获取【{service.formServiceTitle}】方案与排期
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                填写您的工厂实业基础与产品品类，专属外贸总监将在 1 个工作日内为您评估 7 天客资测试可行性并提供定制方案。
              </p>

              {submitStatus === 'success' ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">预约方案提交成功！</h4>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    专属出海顾问已收到您的需求，将在 1 个工作日内电话或微信与您取得联系。您也可以直接拨打热线 135 9271 3944 优先对接。
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-2 text-xs font-semibold text-emerald-800 underline cursor-pointer"
                  >
                    重新提交其他产品咨询
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Bot Honeypot */}
                  <input
                    type="text"
                    className="hidden opacity-0 absolute -z-50 pointer-events-none"
                    tabIndex={-1}
                    autoComplete="off"
                    name="hp_service_trap"
                    value={formData.hp_service_trap}
                    onChange={(e) => setFormData({ ...formData, hp_service_trap: e.target.value })}
                  />

                  {submitStatus === 'error' && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1.5">
                      企业 / 工厂名称 *
                    </label>
                    <input
                      type="text"
                      required
                      minLength={2}
                      maxLength={60}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition text-navy-900 text-sm"
                      placeholder="请输入企业全称（如：东莞市XX机械制造有限公司）"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-1.5">
                        联系人姓名 / 称呼 *
                      </label>
                      <input
                        type="text"
                        required
                        minLength={2}
                        maxLength={20}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition text-navy-900 text-sm"
                        placeholder="例如：陈总 / 李经理"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-1.5">
                        手机号码 / 微信 *
                      </label>
                      <input
                        type="tel"
                        required
                        minLength={7}
                        maxLength={25}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition text-navy-900 text-sm"
                        placeholder="11位手机号或微信"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1.5">
                      主营产品 / 行业品类 *
                    </label>
                    <input
                      type="text"
                      required
                      minLength={2}
                      maxLength={50}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition text-navy-900 text-sm"
                      placeholder="例如：数控机床、五金压铸、智能家居、新能源配件等"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-navy-900 text-white font-extrabold text-base rounded-xl hover:bg-navy-800 transition cursor-pointer shadow-lg active:scale-[0.99] mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>正在提交方案需求...</span>
                    ) : (
                      <>
                        <span>立即申请【{service.formServiceTitle}】方案与7天测试</span>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-2 gap-2">
                    <span>信息严格保密，仅用于方案沟通</span>
                    <a href="tel:13592713944" className="text-navy-700 hover:text-navy-900 font-semibold underline">
                      电话直接咨询：135 9271 3944
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Explore other services */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="font-extrabold text-navy-900 text-base mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>探索更多出海赋能服务</span>
              </h4>
              <div className="space-y-3">
                {otherServices.map((item) => (
                  <a
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="block p-3 rounded-xl bg-white hover:bg-navy-50 border border-slate-200 transition group"
                  >
                    <div className="font-bold text-navy-900 text-sm group-hover:text-navy-700 flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy-950 text-navy-300 pt-12 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
            <div className="md:col-span-2 space-y-4">
              <a href="/" className="inline-block" title="草根出海">
                <img src="/cgch.png" alt="草根出海" className="h-40 w-auto object-contain" />
              </a>
              <p className="text-sm text-navy-300 max-w-md leading-relaxed">
                草根出海专注中国实体制造业出海陪跑，依托AI+海外社媒获客+外贸成交体系+轻本地化模式，为实体工厂搭建自主出海团队，7天测试验证，保底输出真实海外B2B商机。
              </p>
              <div className="text-xs text-navy-400 space-y-1">
                <div>东莞总部：东莞市南城区科创路中天联科国际信息产业园5栋501室、602室</div>
                <div>佛山分部：佛山市南海区桂城街道夏南路1号南海新经济广场产业园J栋911-913</div>
                <div>松山湖创新中心：东莞市松山湖高新技术产业开发区科技十路</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold text-white uppercase tracking-wider">三大核心专精服务</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/services/manufacturing-overseas" className="text-navy-300 hover:text-amber-300 transition">
                    制造业出海陪跑
                  </a>
                </li>
                <li>
                  <a href="/services/social-media-lead-gen" className="text-navy-300 hover:text-amber-300 transition">
                    海外社媒获客陪跑
                  </a>
                </li>
                <li>
                  <a href="/services/b2b-inquiry-sop" className="text-navy-300 hover:text-amber-300 transition">
                    外贸询盘承接与成交SOP
                  </a>
                </li>
                <li>
                  <a href="/#mode" className="text-navy-300 hover:text-white transition text-xs">
                    四阶段陪跑模式 →
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold text-white uppercase tracking-wider">官方咨询与服务</div>
              <div className="space-y-2 text-sm text-navy-300">
                <div>
                  <span className="text-xs text-navy-400 block">全国咨询热线（微信同号）:</span>
                  <a href="tel:13592713944" className="text-lg font-bold text-amber-400 hover:text-amber-300 transition">
                    135 9271 3944
                  </a>
                </div>
                <div className="text-xs text-navy-400 pt-1">服务时间：工作日 09:00 - 18:30</div>
                <div className="pt-2">
                  <a
                    href="/#contact"
                    className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold transition"
                  >
                    在线提交出海预约
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-400">
            <p>© 2025–2026 草根出海. 保留所有权利. 中国制造迈向全球的专业陪跑伙伴</p>
            <div className="flex items-center gap-4">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-200 transition"
              >
                粤ICP备2025411606号
              </a>
              <span className="text-navy-700">|</span>
              <span>域名：www.tkcaogenchuhai.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
