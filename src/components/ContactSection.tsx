import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import {
  validateCompanyName,
  validateName,
  validatePhone,
  validateIndustry,
} from '../utils/validation';

interface ContactSectionProps {
  isZh: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isZh }) => {
  const { addNewLead } = useApp();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const [honeypot, setHoneypot] = useState('');
  const [formState, setFormState] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    industry: '',
  });

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const validateForm = () => {
    const comp = validateCompanyName(formState.companyName, isZh);
    if (!comp.valid) {
      setErrorMessage(comp.message || '请填写规范真实的企业名称');
      return false;
    }
    const name = validateName(formState.contactPerson, isZh);
    if (!name.valid) {
      setErrorMessage(name.message || '请填写规范真实的联系人姓名');
      return false;
    }
    const phone = validatePhone(formState.phone, isZh);
    if (!phone.valid) {
      setErrorMessage(phone.message || '请输入有效的11位手机号码');
      return false;
    }
    const ind = validateIndustry(formState.industry, isZh);
    if (!ind.valid) {
      setErrorMessage(ind.message || '请填写主营产品/行业品类');
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (cooldown > 0) {
      setErrorMessage(isZh ? `提交过于频繁，请等待 ${cooldown} 秒后再试` : `Please wait ${cooldown}s`);
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/notify-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formState.companyName,
          contactPerson: formState.contactPerson,
          phone: formState.phone,
          industry: formState.industry,
          source: '官网预约表单',
          targetMarket: '全球市场',
          budgetRange: '标准7天获客测试',
          note: '官网首页预约表单提交',
          hp_field: honeypot,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === false) {
        setErrorMessage(data.error || (isZh ? '提交未通过真实性校验，请填写规范信息' : 'Submission failed validation'));
        setIsSubmitting(false);
        return;
      }

      addNewLead({
        companyName: formState.companyName,
        contactPerson: formState.contactPerson,
        phone: formState.phone,
        industry: formState.industry || '未填写',
        source: '官网预约表单',
        targetMarket: '全球市场',
        budgetRange: '标准7天获客测试',
        note: '官网首页预约表单提交',
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setCooldown(60);
      setFormState({
        companyName: '',
        contactPerson: '',
        phone: '',
        industry: '',
      });
    } catch {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setCooldown(60);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 hero-gradient relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="reveal-init">
            <p className="text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              {isZh ? '联系我们' : 'Contact Us'}
            </h2>
            <p className="text-amber-300 text-xl sm:text-2xl mb-8 font-extrabold">
              {isZh ? '草根陪跑 · 订单管饱' : 'Cao Gen Accompaniment · Orders Guaranteed'}
            </p>
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-amber-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-200">{isZh ? '咨询电话' : 'Phone'}</div>
                  <a
                    href="tel:13592713944"
                    className="text-2xl sm:text-3xl font-extrabold text-white hover:text-amber-300 transition tracking-wide"
                  >
                    135 9271 3944
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-amber-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-200 mb-2">{isZh ? '办公地址' : 'Addresses'}</div>
                  <ul className="text-base sm:text-lg space-y-2.5 text-slate-100 leading-relaxed">
                    <li>
                      <strong className="text-amber-300 font-bold">{isZh ? '东莞总部：' : 'Dongguan HQ: '}</strong>
                      {isZh
                        ? '南城区科创路中天联科国际信息产业园5栋501室、602室'
                        : 'Building 5, Zhongtian Lianke International Info Park, Nancheng'}
                    </li>
                    <li>
                      <strong className="text-amber-300 font-bold">{isZh ? '佛山分部：' : 'Foshan Branch: '}</strong>
                      {isZh
                        ? '南海区桂城街道夏南路1号南海新经济广场产业园J栋911-913'
                        : 'J911-913, Nanhai New Economy Plaza, Guicheng'}
                    </li>
                    <li>
                      <strong className="text-amber-300 font-bold">{isZh ? '东莞松山湖：' : 'Songshan Lake: '}</strong>
                      {isZh
                        ? '科技十路7号联合金融谷跨境电商产业园15栋1楼（航海家跨境俱乐部）'
                        : '1F, Building 15, United Financial Valley Cross-border Park'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl reveal-init delay-200 border border-navy-100">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-6 tracking-tight">
              {isZh ? '预约免费出海咨询' : 'Book Free Consultation'}
            </h3>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-sm animate-shake">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}

            {/* Invisible Honeypot Trap for bots */}
            <input
              type="text"
              name="hp_website_trap"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden opacity-0 absolute -z-50 pointer-events-none"
              tabIndex={-1}
              autoComplete="off"
            />

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-navy-900">
                  {isZh ? '预约已成功提交！' : 'Booking Submitted Successfully!'}
                </h4>
                <p className="text-base text-slate-600 max-w-sm mx-auto">
                  {isZh
                    ? '我们已收到您的出海需求，专属行业顾问将在1个工作日内与您联系，为您定制7天获客测试方案。'
                    : 'We have received your request. Our go-global consultant will reach out within 1 business day.'}
                </p>
                <button
                  type="button"
                  disabled={cooldown > 0}
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-navy-900 text-white rounded-xl text-base font-bold hover:bg-navy-800 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {cooldown > 0
                    ? isZh
                      ? `已提交（请等待 ${cooldown} 秒）`
                      : `Submitted (Wait ${cooldown}s)`
                    : isZh
                    ? '再提交一份'
                    : 'Submit Another'}
                </button>
              </div>
            ) : (
              <form id="contact-form" className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-base font-bold text-slate-800 mb-1.5">
                    {isZh ? '公司名称 *' : 'Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={60}
                    value={formState.companyName}
                    onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                    className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition text-navy-900 text-base"
                    placeholder={isZh ? '请输入您的制造企业/品牌全称' : 'e.g. Acme Machinery Co., Ltd.'}
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-slate-800 mb-1.5">
                    {isZh ? '联系人 *' : 'Contact Person *'}
                  </label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={20}
                    value={formState.contactPerson}
                    onChange={(e) => setFormState({ ...formState, contactPerson: e.target.value })}
                    className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition text-navy-900 text-base"
                    placeholder={isZh ? '您的姓名 / 职务' : 'Your Name / Title'}
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-slate-800 mb-1.5">
                    {isZh ? '手机号 / 微信 *' : 'Phone / WeChat *'}
                  </label>
                  <input
                    type="tel"
                    required
                    minLength={7}
                    maxLength={25}
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition text-navy-900 text-base"
                    placeholder={isZh ? '请输入11位中国大陆手机号码或国际电话' : '+86 138 0000 0000'}
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-slate-800 mb-1.5">
                    {isZh ? '主营产品 / 行业 *' : 'Main Products / Industry *'}
                  </label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={50}
                    value={formState.industry}
                    onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                    className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition text-navy-900 text-base"
                    placeholder={isZh ? '例如：数控机床、五金模具、智能家居等' : 'e.g. CNC Machinery, Hardware, Smart Home'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || cooldown > 0}
                  className="w-full py-4 bg-navy-900 text-white font-extrabold text-lg rounded-xl hover:bg-navy-800 transition cursor-pointer shadow-lg active:scale-[0.99] mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {cooldown > 0
                    ? isZh
                      ? `已提交，请等待 ${cooldown} 秒后再试`
                      : `Wait ${cooldown}s`
                    : isSubmitting
                    ? isZh
                      ? '提交验证中...'
                      : 'Validating...'
                    : isZh
                    ? '提交预约'
                    : 'Submit'}
                </button>
                <p className="text-sm text-slate-500 text-center mt-2">
                  {isZh ? '提交后专属顾问将在1个工作日内与您联系' : 'Our team will contact you within 1 business day'}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
