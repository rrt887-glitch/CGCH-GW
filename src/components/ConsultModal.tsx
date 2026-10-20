import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, CheckCircle2, ShieldCheck, X, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import {
  validateCompanyName,
  validateName,
  validatePhone,
  validateIndustry,
} from '../utils/validation';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  isZh: boolean;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({
  isOpen,
  onClose,
  isZh,
}) => {
  const { addNewLead } = useApp();
  const [modalFormState, setModalFormState] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    industry: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validateForm = () => {
    const comp = validateCompanyName(modalFormState.companyName, isZh);
    if (!comp.valid) {
      setErrorMessage(comp.message || '请填写规范真实的企业名称');
      return false;
    }
    const name = validateName(modalFormState.contactPerson, isZh);
    if (!name.valid) {
      setErrorMessage(name.message || '请填写规范真实的联系人姓名');
      return false;
    }
    const phone = validatePhone(modalFormState.phone, isZh);
    if (!phone.valid) {
      setErrorMessage(phone.message || '请输入有效的11位手机号码');
      return false;
    }
    const ind = validateIndustry(modalFormState.industry, isZh);
    if (!ind.valid) {
      setErrorMessage(ind.message || '请填写主营产品/行业品类');
      return false;
    }
    return true;
  };

  const handleModalFormSubmit = async (e: React.FormEvent) => {
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
          companyName: modalFormState.companyName,
          contactPerson: modalFormState.contactPerson,
          phone: modalFormState.phone,
          industry: modalFormState.industry,
          source: '浮动咨询弹窗',
          targetMarket: '全球市场',
          budgetRange: '标准7天获客测试',
          note: '通过右下角浮动咨询弹窗预约',
          hp_field: honeypot,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === false) {
        setErrorMessage(data.error || (isZh ? '提交未通过真实性校验，请填写规范信息' : 'Submission rejected'));
        setIsSubmitting(false);
        return;
      }

      addNewLead({
        companyName: modalFormState.companyName,
        contactPerson: modalFormState.contactPerson,
        phone: modalFormState.phone,
        industry: modalFormState.industry || '未填写',
        source: '浮动咨询弹窗',
        targetMarket: '全球市场',
        budgetRange: '标准7天获客测试',
        note: '通过右下角浮动咨询弹窗预约',
      });

      setIsSubmitting(false);
      setModalSubmitted(true);
      setCooldown(60);
      setModalFormState({
        companyName: '',
        contactPerson: '',
        phone: '',
        industry: '',
      });
    } catch {
      setIsSubmitting(false);
      setModalSubmitted(true);
      setCooldown(60);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto z-10 border border-navy-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-navy-900 text-white p-6 rounded-t-3xl relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
            title="关闭"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>{isZh ? '官方一对一出海顾问' : 'Official Go-Global Consultant'}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {isZh ? '立即咨询出海增长方案' : 'Instant Go-Global Consultation'}
          </h3>
          <p className="text-xs text-navy-200 mt-1">
            {isZh ? '深耕实业出海，3-7天批量获取海外B2B精准客户' : 'Specializing in factory export, 3-7 days rapid lead generation'}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Direct Contact Card */}
          <div className="bg-navy-50 rounded-2xl p-4 border border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-navy-500 font-medium">{isZh ? '电话 / 微信同号' : 'Phone / WeChat'}</div>
                <div className="text-lg font-bold text-navy-900">135 9271 3944</div>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <a
                href="tel:13592713944"
                className="flex-1 sm:flex-initial px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold rounded-lg text-center transition flex items-center justify-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{isZh ? '一键呼叫' : 'Call'}</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy('13592713944')}
                className="flex-1 sm:flex-initial px-3 py-2 bg-white hover:bg-navy-100 text-navy-800 border border-navy-200 text-xs font-medium rounded-lg transition flex items-center justify-center gap-1 cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? (isZh ? '已复制' : 'Copied') : (isZh ? '复制号码' : 'Copy')}</span>
              </button>
            </div>
          </div>

          {/* Booking Form in Modal */}
          {modalSubmitted ? (
            <div className="text-center py-6 space-y-3 bg-green-50/60 rounded-2xl p-6 border border-green-100">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-navy-900">
                {isZh ? '预约咨询已成功提交！' : 'Consultation Booked!'}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                {isZh ? '我们已收到您的出海需求，专属行业顾问将在1个工作日内与您联系，为您定制7天获客测试方案。' : 'Our consultant will contact you within 1 business day.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setModalSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-navy-900 text-white rounded-xl text-sm font-bold hover:bg-navy-800 transition cursor-pointer"
              >
                {isZh ? '完成并关闭' : 'Done & Close'}
              </button>
            </div>
          ) : (
            <div>
              {/* Error Alert */}
              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{errorMessage}</span>
                </div>
              )}

              {/* Bot Honeypot */}
              <input
                type="text"
                name="hp_modal_trap"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden opacity-0 absolute -z-50 pointer-events-none"
                tabIndex={-1}
                autoComplete="off"
              />

              <form className="space-y-3.5" onSubmit={handleModalFormSubmit}>
                <div className="text-sm font-bold text-navy-900 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-navy-700" />
                  <span>{isZh ? '在线留言，专属顾问为您快速定制出海方案' : 'Submit details for a tailored go-global plan'}</span>
                </div>
                <div>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={60}
                    value={modalFormState.companyName}
                    onChange={(e) => setModalFormState({ ...modalFormState, companyName: e.target.value })}
                    placeholder={isZh ? '公司/企业全称 *' : 'Company Name *'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm text-navy-900 focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={20}
                    value={modalFormState.contactPerson}
                    onChange={(e) => setModalFormState({ ...modalFormState, contactPerson: e.target.value })}
                    placeholder={isZh ? '联系人姓名 *' : 'Contact Name *'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm text-navy-900 focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition"
                  />
                  <input
                    type="tel"
                    required
                    minLength={7}
                    maxLength={25}
                    value={modalFormState.phone}
                    onChange={(e) => setModalFormState({ ...modalFormState, phone: e.target.value })}
                    placeholder={isZh ? '手机号 / 微信 *' : 'Phone / WeChat *'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm text-navy-900 focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={50}
                    value={modalFormState.industry}
                    onChange={(e) => setModalFormState({ ...modalFormState, industry: e.target.value })}
                    placeholder={isZh ? '主营行业 / 产品 (例如：数控机床、五金配件、智能家居) *' : 'Industry / Main Products *'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm text-navy-900 focus:ring-2 focus:ring-navy-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || cooldown > 0}
                  className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-extrabold rounded-xl text-base shadow-lg transition cursor-pointer active:scale-[0.99] mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    ? '立即免费获取7天获客测试方案'
                    : 'Get Free 7-Day Testing Plan'}
                </button>
                <p className="text-xs text-slate-500 text-center">
                  {isZh ? '信息严格保密，提交后专属顾问将在1个工作日内与您联系' : 'Confidential. Consultant will reach out within 1 business day.'}
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
