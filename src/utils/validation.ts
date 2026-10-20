// Form validation and anti-spam utility for inquiries & lead submissions

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

// Check if a string is composed of monotonous repeated characters (e.g., "111", "aaa", "---")
export function isMonotonousRepeated(str: string): boolean {
  if (!str || str.length < 2) return true;
  const firstChar = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== firstChar) return false;
  }
  return true;
}

// Check common spam keywords or meaningless test strings
const SPAM_BLACK_LIST = [
  'test', 'testing', 'asdf', 'qwer', '1234', '12345', '123456', '12345678', 
  'admin', 'null', 'undefined', 'aaa', 'bbb', 'ccc', '111', '222', '333', '888',
  '测试', '测试公司', '测试人', '测试行业', '打牌', '刷屏', '无'
];

export function isSpamString(str: string): boolean {
  if (!str) return true;
  const clean = str.trim().toLowerCase();
  if (clean.length < 2) return true;
  if (isMonotonousRepeated(clean)) return true;
  if (SPAM_BLACK_LIST.includes(clean)) return true;
  return false;
}

// Validate Chinese mobile or international phone numbers
export function validatePhone(phone: string, isZh = true): ValidationResult {
  const cleanPhone = phone.trim().replace(/[\s\-_()]/g, '');

  if (!cleanPhone) {
    return { valid: false, message: isZh ? '请填写联系电话或微信号' : 'Please enter a phone number or WeChat ID' };
  }

  // Reject obvious junk numbers
  if (isMonotonousRepeated(cleanPhone) || cleanPhone.length < 7) {
    return {
      valid: false,
      message: isZh ? '请输入真实有效的手机号码（11位）或电话' : 'Please enter a valid phone number',
    };
  }

  // Standard China mainland mobile phone format (13x ~ 19x, 11 digits)
  const cnMobileRegex = /^1[3-9]\d{9}$/;
  // International phone with + prefix, or 8-15 digits
  const intlPhoneRegex = /^(\+?\d{1,4})?[1-9]\d{6,14}$/;

  if (!cnMobileRegex.test(cleanPhone) && !intlPhoneRegex.test(cleanPhone)) {
    return {
      valid: false,
      message: isZh ? '手机号码格式不正确，请输入11位中国大陆手机号或国际电话' : 'Invalid phone number format',
    };
  }

  return { valid: true };
}

// Validate Contact Name
export function validateName(name: string, isZh = true): ValidationResult {
  const clean = name.trim();
  if (!clean) {
    return { valid: false, message: isZh ? '请填写联系人姓名/称谓' : 'Please enter contact person name' };
  }

  if (clean.length < 2) {
    return { valid: false, message: isZh ? '姓名长度至少2个字符' : 'Name must be at least 2 characters' };
  }

  if (isSpamString(clean) || /^\d+$/.test(clean)) {
    return { valid: false, message: isZh ? '请填写真实的联系人称呼（不可纯数字或随意测试）' : 'Please enter a valid contact name' };
  }

  return { valid: true };
}

// Validate Company Name
export function validateCompanyName(company: string, isZh = true): ValidationResult {
  const clean = company.trim();
  if (!clean) {
    return { valid: false, message: isZh ? '请填写您的企业/工厂名称' : 'Please enter company/factory name' };
  }

  if (clean.length < 2) {
    return { valid: false, message: isZh ? '企业名称过短，请输入完整名称' : 'Company name is too short' };
  }

  if (isSpamString(clean) || (/^\d+$/.test(clean) && clean.length < 5)) {
    return { valid: false, message: isZh ? '请填写规范真实的企业名称' : 'Please enter a valid company name' };
  }

  return { valid: true };
}

// Validate Industry
export function validateIndustry(industry: string, isZh = true): ValidationResult {
  const clean = industry.trim();
  if (!clean) {
    return { valid: false, message: isZh ? '请填写主营行业或出海产品' : 'Please enter main industry/product' };
  }

  if (clean.length < 2 || isSpamString(clean)) {
    return { valid: false, message: isZh ? '请填写具体的主营行业或产品品类' : 'Please enter a valid industry or product' };
  }

  return { valid: true };
}
