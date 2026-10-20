import { Language } from '../types';

export interface TranslationDict {
  // Navigation & Brand
  brandName: string;
  brandSub: string;
  slogan: string;
  navHome: string;
  navAbout: string;
  navStrengths: string;
  navTeam: string;
  navCases: string;
  navMode: string;
  navProcess: string;
  navNews: string;
  navContact: string;
  navAdmin: string;
  bookTestBtn: string;
  contactDirectBtn: string;
  phoneLabel: string;
  
  // Hero
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSub: string;
  heroAudience: string;
  heroAudienceDesc: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroPill1: string;
  heroPill2: string;
  heroPill3: string;
  heroPill4: string;

  // Stats
  statEnterprises: string;
  statIndustries: string;
  statCountries: string;
  statRevenue: string;
  statEnterprisesDesc: string;
  statIndustriesDesc: string;
  statCountriesDesc: string;
  statRevenueDesc: string;

  // About
  aboutTag: string;
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  valuesTitle: string;
  valueRule1Title: string;
  valueRule1Desc: string;
  valueRule2Title: string;
  valueRule2Desc: string;
  valueRule3Title: string;
  valueRule3Desc: string;
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  orgTitle: string;
  orgSubtitle: string;

  // Strengths
  strengthsTag: string;
  strengthsTitle: string;
  strength1Title: string;
  strength1Desc: string;
  strength2Title: string;
  strength2Desc: string;
  strength3Title: string;
  strength3Desc: string;
  strength4Title: string;
  strength4Desc: string;
  ecosystemTitle: string;
  ecosystemSubtitle: string;
  ecosystemDesc: string;
  phase0to1: string;
  phase1to10: string;
  phase10toN: string;

  // Team
  teamTag: string;
  teamTitle: string;
  teamSubtitle: string;

  // Cases
  casesTag: string;
  casesTitle: string;
  casesSubtitle: string;
  tabHeavy: string;
  tabHardware: string;
  tabFurniture: string;
  tabFmcg: string;
  chatFeedbackTitle: string;
  chatFeedbackSubtitle: string;
  viewDetails: string;
  realResultsBadge: string;

  // Accompanying Mode
  modeTag: string;
  modeTitle: string;
  modeSubtitle: string;
  stage1Title: string;
  stage1Sub: string;
  stage2Title: string;
  stage2Sub: string;
  stage3Title: string;
  stage3Sub: string;
  stage4Title: string;
  stage4Sub: string;

  // Process
  processTag: string;
  processTitle: string;
  processSubtitle: string;
  step1: string;
  step1Desc: string;
  step2: string;
  step2Desc: string;
  step3: string;
  step3Desc: string;
  step4: string;
  step4Desc: string;
  step5: string;
  step5Desc: string;

  // News
  newsTag: string;
  newsTitle: string;
  newsSubtitle: string;
  readMore: string;

  // Contact
  contactTag: string;
  contactTitle: string;
  contactSubtitle: string;
  headquarters: string;
  headquartersAddr: string;
  foshanBranch: string;
  foshanAddr: string;
  clubHub: string;
  clubHubAddr: string;
  callUs: string;
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formPhone: string;
  formCompany: string;
  formIndustry: string;
  formRevenue: string;
  formSubmit: string;
  formSuccess: string;
  officialWeChat: string;
  videoChannel: string;

  // Calculator
  calculatorTitle: string;
  calculatorSubtitle: string;
  calcRevenueLabel: string;
  calcInquiryLabel: string;
  calcExpectedRevenue: string;
  calcRoi: string;
}

export const translations: Record<Language, TranslationDict> = {
  zh: {
    brandName: '草根出海',
    brandSub: 'CAO GEN CHU HAI',
    slogan: '中国制造迈向全球的专业陪跑伙伴',
    navHome: '首页',
    navAbout: '关于我们',
    navStrengths: '核心优势',
    navTeam: '团队实力',
    navCases: '成功案例',
    navMode: '陪跑模式',
    navProcess: '合作流程',
    navNews: '精彩过往',
    navContact: '联系我们',
    navAdmin: '管理后台',
    bookTestBtn: '预约7天获客测试',
    contactDirectBtn: '立即咨询',
    phoneLabel: '全国服务热线',

    heroBadge: '中国制造迈向全球的专业陪跑伙伴',
    heroTitle: 'AI + 海外全社媒获客 + 高效成交体系 + 轻本地化',
    heroHighlight: '草根陪跑 订单管饱',
    heroSub: '深耕外贸增长赛道，让外贸变简单，助推企业首年海外营收增量3000万+',
    heroAudience: '适用人群：',
    heroAudienceDesc: '想高效签约海外代理商、品牌方的年营业额2000万-4亿实体制造企业',
    heroCtaPrimary: '立即预约7天低成本获客测试',
    heroCtaSecondary: '了解陪跑交付体系',
    heroPill1: '55人自营实战团队',
    heroPill2: '3-7天极速出海外B2B询盘',
    heroPill3: '60+细分行业实战经验',
    heroPill4: '30+海外官方平台深度合作',

    statEnterprises: '1000+',
    statEnterprisesDesc: '累计服务实体企业 (家)',
    statIndustries: '60+',
    statIndustriesDesc: '覆盖制造细分行业 (类)',
    statCountries: '30+',
    statCountriesDesc: '业务遍及全球国家地区 (个)',
    statRevenue: '10亿+',
    statRevenueDesc: '累计为客户创造外贸交易额',

    aboutTag: '01 关于我们 / About Us',
    aboutTitle: '深耕外贸增长陪跑，助推中国制造卖向全球',
    aboutDesc1: '草根出海，深耕外贸增长陪跑赛道，专注服务年营业额2000万-4亿元实业企业。依托AI数字化能力与海外全社媒精准流量，以轻量化2-4人专项小组，3至7天批量获取高质量海外B2B精准客户。',
    aboutDesc2: '实现企业首年海外营收增量3000万。服务行业超60类，2025年累计为合作客户创造十亿级外贸营收，以专业实战力量助推中国制造在全球建立自主销售网络。',
    valuesTitle: '出海团队核心价值观',
    valueRule1Title: '立身准则',
    valueRule1Desc: '正心、正念、正行',
    valueRule2Title: '行事原则',
    valueRule2Desc: '小心承诺，大胆交付，做我所说，说我所做',
    valueRule3Title: '服务态度',
    valueRule3Desc: '以服务为本，直面问题，积极解决，不推诿客户诉求',
    missionTitle: '企业使命',
    missionDesc: '助力实体企业稳拓海外市场、实现长效共赢',
    visionTitle: '企业愿景',
    visionDesc: '致力成为靠谱专业、值得全球企业信赖的出海同行者',
    orgTitle: '严谨务实的组织架构',
    orgSubtitle: '以总经理决策为中枢，三大管理职能保障，六大专业赋能中心协同交付',

    strengthsTag: '02 核心优势 / Core Strengths',
    strengthsTitle: '四大核心护城河 + 航海家全链条生态后盾',
    strength1Title: '自营实战团队',
    strength1Desc: '自有55人全职外贸B2B实战团队，已成熟跑通欧美、中东、亚非拉全区域市场。自营产品线已签约全球100余家区域代理商，沉淀扎实海外落地经验。',
    strength2Title: '全自营交付体系',
    strength2Desc: '所有陪跑导师均来自内部自营外贸体系，绝不聘用外部外包人员，售前、落地、售后全流程服务标准统一，配套方案与运营打法可持续迭代升级。',
    strength3Title: '标准化增长模型',
    strength3Desc: '沉淀60个细分行业出海落地案例，具备打造单年新增3000万海外营收的标准化外贸增长模型；2025年全年累计扶持30家企业实现外贸年增收3000万。',
    strength4Title: '平台深度合作',
    strength4Desc: '与30余家海外官方平台达成深度战略合作，同时出任平台官方认证的专属操盘及落地交付服务商。',
    ecosystemTitle: '航海家生态 — 强大全链条后端支撑',
    ecosystemSubtitle: '航海家俱乐部与草根出海互为股东，扫清出海路上的一切后端障碍',
    ecosystemDesc: '专注承接草根出海核心业务之外的全链条后端服务：跨境物流对接、货运方案优化、供应链配套协调、扩量资金支持等实操性需求，组建20余位实战出海专家专属智囊团。',
    phase0to1: '0-1阶段：解决订单',
    phase1to10: '1-10阶段：解决落地',
    phase10toN: '10-N阶段：解决扩张',

    teamTag: '03 团队实力 / Team Strength',
    teamTitle: '全明星实战派操盘手与导师矩阵',
    teamSubtitle: '主要服务年营业额2000万到4个亿的工厂企业；用2-4个人的小团队，3天就能帮你日稳定拿到100+个海外精准客户，首年冲刺500万-5000万',

    casesTag: '04 成功案例 / Success Cases',
    casesTitle: '四大核心细分赛道实战落地成果',
    casesSubtitle: '覆盖大设备、五金配件、家具建材、快销品等60+细分行业，真实数据沉淀',
    tabHeavy: '大设备赛道',
    tabHardware: '五金配件',
    tabFurniture: '家具建材',
    tabFmcg: '快销品',
    chatFeedbackTitle: '客户真实好评与开单喜报',
    chatFeedbackSubtitle: '真实社群微信对话实录，见证从获客测试到现场开单的全过程',
    viewDetails: '查看详情',
    realResultsBadge: '真实签约',

    modeTag: '05 陪跑模式 / Accompanying Mode',
    modeTitle: '四阶段阶梯式陪跑赋能闭环',
    modeSubtitle: 'AI + 海外社媒获客 + 高效成交SOP + 轻本地化，让外贸变简单，高效签约海外代理商',
    stage1Title: '第一阶段：7天获客测试验证',
    stage1Sub: '7天极速产出海外B2B询盘 · 严控获客成本拒绝无效投入 · 保底客资输出破解零客资难题 · 精准梳理企业海外商业定位 · 老板专属出海企训营实战赋能',
    stage2Title: '第二阶段：深度落地陪跑',
    stage2Sub: '团队现场贴身陪跑落地执行 · 现场持续批量产出精准海外客资 · 全流程动态跟进实时问题纠偏 · 搭建企业自主可持续获客体系 · 陪跑共建企业线上订单成交体系',
    stage3Title: '第三阶段：出海实地赋能，打通终端成交',
    stage3Sub: '带领工厂老板实地出海直面海外终端客户 · 链接海外本土优质资源匹配精准客商 · 线下助理商务洽谈能力推动项目落地成交 · 为企业规划海外本土市场布局',
    stage4Title: '第四阶段：项目共创，打开全球市场',
    stage4Sub: '经过深度磨合达成价值共识 · 注入资金、专业人才、产业资源与海外渠道 · 共建合资或品牌项目携手开拓全球万亿市场',

    processTag: '06 合作流程 / Cooperation Process',
    processTitle: '标准化五步合作流程，透明省心',
    processSubtitle: '从预约沟通到测试验证，全程真实后台可视，确保风险可控与确定性结果',
    step1: '1. 在线预约',
    step1Desc: '专属客服一对一回访，深入了解产品特质与出海目标市场',
    step2: '2. 签订测试合同',
    step2Desc: '签订具有法律约束的测试合同，极低门槛交付启动测试费用',
    step3: '3. 收集资料',
    step3Desc: '行业经理协助企业梳理核心产品优势、卖点提炼与多语言资料收集',
    step4: '4. 正式测试',
    step4Desc: '3-7天极速出测试结果，行业经理邀请企业远程或现场查看真实广告与获客后台',
    step5: '5. 正式合作',
    step5Desc: '测试效果达标验证通过，正式签订深度全流程年度陪跑合作',

    newsTag: '07 精彩过往 / Exciting Past',
    newsTitle: '行业峰会、政企交流与高光时刻',
    newsSubtitle: '受邀出席各大国家级、省级产业峰会、商会分享与商务局研讨会',
    readMore: '阅读报道',

    contactTag: '08 联系我们 / Contact Us',
    contactTitle: '开启您的企业全球化出海新增长',
    contactSubtitle: '草根陪跑，订单管饱。欢迎全国制造企业莅临东莞总部、佛山分部或松山湖交流！',
    headquarters: '东莞总部',
    headquartersAddr: '广东省东莞市南城区科创路中天联科国际信息产业园5栋501室、602室',
    foshanBranch: '佛山分部',
    foshanAddr: '佛山市南海区桂城街道夏南路1号南海新经济广场产业园J栋911-913',
    clubHub: '航海家跨境俱乐部',
    clubHubAddr: '东莞市松山湖科技十路7号联合金融谷跨境电商产业园15栋1楼',
    callUs: '拨打服务热线',
    formTitle: '预约7天出海获客低风险测试',
    formSubtitle: '填写您的企业基础信息，资深出海专家将在15分钟内与您一对一沟通方案',
    formName: '联系人姓名',
    formPhone: '手机号码 / 微信',
    formCompany: '企业名称',
    formIndustry: '主营产品 / 所属行业',
    formRevenue: '企业年营业额',
    formSubmit: '立即提交预约',
    formSuccess: '预约提交成功！我们的专属外贸顾问将尽快与您电话联系。',
    officialWeChat: '官方微信公众号',
    videoChannel: '官方微信视频号',

    calculatorTitle: '出海海外增量营收测算器',
    calculatorSubtitle: '输入当前企业规模，评估通过AI+社媒陪跑可实现的海外增量收益',
    calcRevenueLabel: '企业当前年营业额（万元）',
    calcInquiryLabel: '目标海外市场类型',
    calcExpectedRevenue: '首年预估海外增量营收',
    calcRoi: '预期投入产出比 (ROI)',
  },

  en: {
    brandName: 'CaoGen Global',
    brandSub: 'CAO GEN CHU HAI',
    slogan: 'Professional Accompanying Partner for Made-in-China Going Global',
    navHome: 'Home',
    navAbout: 'About Us',
    navStrengths: 'Core Strengths',
    navTeam: 'Our Team',
    navCases: 'Cases',
    navMode: 'Accompanying Mode',
    navProcess: 'Process',
    navNews: 'Milestones',
    navContact: 'Contact Us',
    navAdmin: 'Admin Console',
    bookTestBtn: 'Book 7-Day Customer Test',
    contactDirectBtn: 'Contact Now',
    phoneLabel: 'Service Hotline',

    heroBadge: 'Professional Partner for Made-in-China Globalization',
    heroTitle: 'AI + Global Social Media Acquisition + High-Efficiency Closing SOP + Light Localization',
    heroHighlight: 'Grassroots Accompanying · Satiated Orders',
    heroSub: 'Dedicated to B2B foreign trade growth, making global expansion simple and delivering $4M+ (¥30M+) annual revenue increments.',
    heroAudience: 'Target Audience:',
    heroAudienceDesc: 'Industrial and manufacturing enterprises ($3M-$60M annual revenue) seeking overseas agents and brand buyers.',
    heroCtaPrimary: 'Book 7-Day Low-Risk Test Now',
    heroCtaSecondary: 'Explore Accompanying System',
    heroPill1: '55-Person In-House B2B Team',
    heroPill2: '3-7 Days Overseas B2B Inquiries',
    heroPill3: '60+ Sub-industry Track Records',
    heroPill4: '30+ Global Official Platforms',

    statEnterprises: '1000+',
    statEnterprisesDesc: 'Manufacturing Enterprises Served',
    statIndustries: '60+',
    statIndustriesDesc: 'Industry Sectors Covered',
    statCountries: '30+',
    statCountriesDesc: 'Countries & Regions Worldwide',
    statRevenue: '$150M+',
    statRevenueDesc: 'Cumulative Foreign Trade Revenue Created',

    aboutTag: '01 About Us',
    aboutTitle: 'Deeply Rooted in B2B Trade Growth, Propelling Chinese Manufacturing to the World',
    aboutDesc1: 'CaoGen Global focuses on the B2B foreign trade growth track, serving real economy enterprises with $3M to $60M in annual turnover. Leveraging AI digital capabilities and overseas omni-social traffic, our lightweight 2-4 person agile squads acquire high-quality B2B buyers within 3 to 7 days.',
    aboutDesc2: 'Empowering clients to achieve ¥30M+ ($4.3M+) in foreign trade increments during the first year. Across 60+ sectors, we generated over $150M cumulative export value for partners by 2025.',
    valuesTitle: 'Our Core Values',
    valueRule1Title: 'Self Discipline',
    valueRule1Desc: 'Righteous Heart, Right Mind, Right Action',
    valueRule2Title: 'Action Principle',
    valueRule2Desc: 'Careful in commitment, bold in delivery; do what we say, say what we do',
    valueRule3Title: 'Service Attitude',
    valueRule3Desc: 'Service-first, confront issues directly, solve proactively without evasion',
    missionTitle: 'Mission',
    missionDesc: 'Empower real manufacturers to steadily expand global markets and win long-term success',
    visionTitle: 'Vision',
    visionDesc: 'To be the most reliable and trusted globalization companion for enterprises worldwide',
    orgTitle: 'Pragmatic Organizational Structure',
    orgSubtitle: 'Led by General Management with 3 supervisory pillars and 6 specialized execution centers',

    strengthsTag: '02 Core Strengths',
    strengthsTitle: 'Four Pillars of Competitive Moat + Voyager Full-Chain Ecosystem',
    strength1Title: 'In-House Battle-Tested Team',
    strength1Desc: '55 full-time in-house B2B foreign trade specialists operating across Europe, Americas, Middle East, Africa, and APAC. Over 100 regional agents signed on proprietary lines.',
    strength2Title: 'Proprietary Delivery System',
    strength2Desc: 'All accompanying mentors stem from internal operations—no third-party contractors. Consistent standards across pre-sales, execution, and post-sales.',
    strength3Title: 'Standardized Growth Model',
    strength3Desc: 'Pre-validated across 60 sub-sectors. Standardized blueprint generating ¥30M+ annual increments, validated by 30+ manufacturers in 2025.',
    strength4Title: 'Deep Platform Partnerships',
    strength4Desc: 'Strategic partnerships with 30+ overseas platforms as certified exclusive execution and delivery service providers.',
    ecosystemTitle: 'Voyager Ecosystem — Full-Chain Backend Shield',
    ecosystemSubtitle: 'Cross-shareholding with Voyager Club to remove every backend barrier in globalization',
    ecosystemDesc: 'Handles cross-border logistics, freight route optimization, supply chain coordination, and expansion financing, supported by 20+ senior export experts.',
    phase0to1: 'Phase 0-1: Secure Inquiries',
    phase1to10: 'Phase 1-10: On-Ground Delivery',
    phase10toN: 'Phase 10-N: Global Scale',

    teamTag: '03 Team Strength',
    teamTitle: 'All-Star Operational Leaders & Practical Mentors',
    teamSubtitle: 'Empowering factory leaders with 2-4 person squads to stably acquire 100+ global inquiries daily within 3 days.',

    casesTag: '04 Success Cases',
    casesTitle: 'Four Core Industrial Tracks & Real Case Studies',
    casesSubtitle: 'Proven execution across Heavy Equipment, Hardware, Building Materials, and FMCG',
    tabHeavy: 'Heavy Equipment',
    tabHardware: 'Hardware Accessories',
    tabFurniture: 'Furniture & Materials',
    tabFmcg: 'FMCG & Smart 3C',
    chatFeedbackTitle: 'Live Client Feedback & Deal Notifications',
    chatFeedbackSubtitle: 'Real WeChat client logs documenting breakthroughs from day 1 to million-dollar contracts',
    viewDetails: 'View Details',
    realResultsBadge: 'Verified Deal',

    modeTag: '05 Accompanying Mode',
    modeTitle: 'Four-Stage Evolutionary Growth Framework',
    modeSubtitle: 'AI + Social Media + High-Efficiency SOP + Light Localization',
    stage1Title: 'Stage 1: 7-Day Acquisition Test',
    stage1Sub: 'Rapid B2B inquiry generation · Strict cost control · Guaranteed lead outputs · Precise market positioning · Executive training bootcamp',
    stage2Title: 'Stage 2: Deep On-Site Accompanying',
    stage2Sub: 'On-site mentor squad · Continuous batch lead production · Real-time troubleshooting · Sustainable in-house customer engine buildout',
    stage3Title: 'Stage 3: Overseas Field Empowerment',
    stage3Sub: 'Taking factory founders overseas to negotiate directly · Connecting local Tier-1 distributors · Commercial closing support',
    stage4Title: 'Stage 4: Co-Creation & Global Expansion',
    stage4Sub: 'Capital injection, talent allocation, industrial supply-chain resources, and joint-venture brand scaling',

    processTag: '06 Cooperation Process',
    processTitle: 'Standardized 5-Step Process with Full Transparency',
    processSubtitle: 'From booking to live ad-dashboard inspection in 3-7 days',
    step1: '1. Online Booking',
    step1Desc: 'Dedicated consultant conducts 1-on-1 discovery and market feasibility',
    step2: '2. Sign Test Contract',
    step2Desc: 'Legally binding low-risk trial agreement with minimal test investment',
    step3: '3. Data & Material Prep',
    step3Desc: 'Industry manager refines core product USPs and multilingual assets',
    step4: '4. Live Testing (3-7 Days)',
    step4Desc: 'Fast test delivery; client inspects live ad platforms and genuine lead flow',
    step5: '5. Long-term Partnership',
    step5Desc: 'Formal annual accompanying agreement upon passing trial benchmarks',

    newsTag: '07 Milestones',
    newsTitle: 'Summits, Strategic Signings & Industry Moments',
    newsSubtitle: 'Invited speeches at national forums, chamber of commerce events, and government summits',
    readMore: 'Read Full Story',

    contactTag: '08 Contact Us',
    contactTitle: 'Ignite Your Enterprise Global Growth',
    contactSubtitle: 'Grassroots accompanying, bountiful orders. Welcome to our Dongguan HQ or branches.',
    headquarters: 'Dongguan HQ',
    headquartersAddr: 'Rooms 501 & 602, Building 5, Zhongtian Lianke Info Industrial Park, Nancheng, Dongguan',
    foshanBranch: 'Foshan Branch',
    foshanAddr: 'J911-913, Nanhai New Economy Plaza Industrial Park, Xi’nan Rd, Guicheng, Nanhai, Foshan',
    clubHub: 'Voyager Cross-Border Club',
    clubHubAddr: '1st Floor, Building 15, United Financial Valley Cross-Border E-Commerce Park, Songshan Lake, Dongguan',
    callUs: 'Call Hotline',
    formTitle: 'Book 7-Day Low-Risk Customer Acquisition Test',
    formSubtitle: 'Fill in your enterprise details; our senior foreign trade expert will contact you within 15 mins',
    formName: 'Full Name',
    formPhone: 'Phone / WhatsApp / WeChat',
    formCompany: 'Company Name',
    formIndustry: 'Main Products / Sector',
    formRevenue: 'Annual Revenue Range',
    formSubmit: 'Submit Request Now',
    formSuccess: 'Booking received successfully! Our consultant will call you shortly.',
    officialWeChat: 'Official WeChat Account',
    videoChannel: 'Official Video Channel',

    calculatorTitle: 'Overseas Revenue Increment Calculator',
    calculatorSubtitle: 'Estimate your projected export growth and ROI through AI + Social Media Accompanying',
    calcRevenueLabel: 'Current Annual Revenue (Million)',
    calcInquiryLabel: 'Target Overseas Markets',
    calcExpectedRevenue: 'Estimated 1st Year Export Increment',
    calcRoi: 'Expected ROI Ratio',
  },

  es: {
    brandName: 'CaoGen Global',
    brandSub: 'CAO GEN CHU HAI',
    slogan: 'Socio Profesional de Acompañamiento para la Globalización Industrial',
    navHome: 'Inicio',
    navAbout: 'Sobre Nosotros',
    navStrengths: 'Fortalezas',
    navTeam: 'Equipo',
    navCases: 'Casos de Éxito',
    navMode: 'Modo Acompañamiento',
    navProcess: 'Proceso',
    navNews: 'Noticias',
    navContact: 'Contacto',
    navAdmin: 'Panel Admin',
    bookTestBtn: 'Prueba de 7 Días',
    contactDirectBtn: 'Consultar Ahora',
    phoneLabel: 'Línea de Atención',

    heroBadge: 'Impulsando la Manufactura China Hacia el Mundo',
    heroTitle: 'IA + Captación en Redes Sociales Globales + Cierre Efectivo + Localización',
    heroHighlight: 'Acompañamiento CaoGen · Pedidos Garantizados',
    heroSub: 'Especialistas en crecimiento de comercio exterior B2B, facilitando más de $4M USD en ingresos adicionales el primer año.',
    heroAudience: 'Dirigido a:',
    heroAudienceDesc: 'Empresas manufactureras de 20M a 400M RMB de facturación anual que buscan distribuidores extranjeros.',
    heroCtaPrimary: 'Reservar Prueba de 7 Días',
    heroCtaSecondary: 'Ver Sistema de Acompañamiento',
    heroPill1: '55 Especialistas B2B Propios',
    heroPill2: 'Consultas B2B en 3-7 Días',
    heroPill3: '60+ Sectores Industriales',
    heroPill4: '30+ Plataformas Oficiales Globales',

    statEnterprises: '1000+',
    statEnterprisesDesc: 'Empresas Manufactureras Atendidas',
    statIndustries: '60+',
    statIndustriesDesc: 'Sectores Industriales Cubiertos',
    statCountries: '30+',
    statCountriesDesc: 'Países y Regiones del Mundo',
    statRevenue: '$150M+',
    statRevenueDesc: 'Ingresos de Exportación Generados',

    aboutTag: '01 Sobre Nosotros',
    aboutTitle: 'Impulsando la Manufactura Hacia el Mercado Global',
    aboutDesc1: 'CaoGen Global se especializa en el crecimiento del comercio exterior B2B con un equipo propio y metodología probada.',
    aboutDesc2: 'Integramos IA y tráfico de redes sociales internacionales para generar compradores B2B en 3 a 7 días.',
    valuesTitle: 'Nuestros Valores',
    valueRule1Title: 'Integridad',
    valueRule1Desc: 'Rectitud de corazón, pensamiento y acción',
    valueRule2Title: 'Principio de Acción',
    valueRule2Desc: 'Prometer con cautela, cumplir con audacia',
    valueRule3Title: 'Actitud de Servicio',
    valueRule3Desc: 'Orientación al cliente y resolución proactiva',
    missionTitle: 'Misión',
    missionDesc: 'Ayudar a empresas reales a expandirse globalmente con éxito duradero',
    visionTitle: 'Visión',
    visionDesc: 'Ser el socio de internacionalización más confiable del mundo',
    orgTitle: 'Estructura Organizacional',
    orgSubtitle: 'Liderazgo claro y 6 centros de ejecución especializada',

    strengthsTag: '02 Fortalezas Clave',
    strengthsTitle: 'Cuatro Pilares + Ecosistema Logístico Voyager',
    strength1Title: 'Equipo Práctico Propio',
    strength1Desc: '55 profesionales a tiempo completo con experiencia en Europa, América, Oriente Medio y Latam.',
    strength2Title: 'Sistema de Entrega Directa',
    strength2Desc: 'Sin subcontratistas externos; estándares unificados de preventa y postventa.',
    strength3Title: 'Modelo de Crecimiento Estandarizado',
    strength3Desc: 'Validado en 60 sectores para generar +30M RMB en exportaciones.',
    strength4Title: 'Alianzas Estratégicas',
    strength4Desc: 'Cooperación oficial con más de 30 plataformas globales.',
    ecosystemTitle: 'Ecosistema Voyager — Soporte Total',
    ecosystemSubtitle: 'Logística internacional, optimización de fletes y financiamiento',
    ecosystemDesc: 'Resolvemos todos los desafíos operativos con más de 20 asesores expertos.',
    phase0to1: 'Fase 0-1: Conseguir Pedidos',
    phase1to10: 'Fase 1-10: Aterrizaje Operativo',
    phase10toN: 'Fase 10-N: Escalamiento Global',

    teamTag: '03 Nuestro Equipo',
    teamTitle: 'Líderes y Mentores con Resultados Reales',
    teamSubtitle: 'Equipos ágiles de 2 a 4 personas generando más de 100 prospectos diarios en 3 días.',

    casesTag: '04 Casos de Éxito',
    casesTitle: 'Cuatro Sectores Industriales Principales',
    casesSubtitle: 'Maquinaria Pesada, Ferretería, Materiales de Construcción y Bienes de Consumo',
    tabHeavy: 'Maquinaria Pesada',
    tabHardware: 'Ferretería y Piezas',
    tabFurniture: 'Muebles y Construcción',
    tabFmcg: 'Consumo y 3C',
    chatFeedbackTitle: 'Testimonios y Cierres Reales',
    chatFeedbackSubtitle: 'Comunicaciones directas y contratos firmados por nuestros clientes',
    viewDetails: 'Ver Detalles',
    realResultsBadge: 'Contrato Verificado',

    modeTag: '05 Modo Acompañamiento',
    modeTitle: 'Metodología en 4 Etapas',
    modeSubtitle: 'IA + Redes Sociales + SOP de Cierre + Localización Ligera',
    stage1Title: 'Etapa 1: Prueba de 7 Días',
    stage1Sub: 'Generación rápida de consultas B2B y control estricto de costes',
    stage2Title: 'Etapa 2: Acompañamiento Presencial',
    stage2Sub: 'Equipo in situ implementando el sistema de captación autónomo',
    stage3Title: 'Etapa 3: Viajes y Negociación en Destino',
    stage3Sub: 'Acompañamiento al extranjero con compradores finales de primer nivel',
    stage4Title: 'Etapa 4: Co-creación y Escala Mundial',
    stage4Sub: 'Inversión conjunta, talento y canales para conquistar el mercado global',

    processTag: '06 Proceso de Trabajo',
    processTitle: '5 Pasos Claros y Transparentes',
    processSubtitle: 'Desde la reserva inicial hasta ver resultados reales en 3 a 7 días',
    step1: '1. Reserva Online',
    step1Desc: 'Contacto 1 a 1 para evaluar mercado y viabilidad',
    step2: '2. Firma de Contrato de Prueba',
    step2Desc: 'Acuerdo de prueba con inversión mínima controlada',
    step3: '3. Recopilación de Materiales',
    step3Desc: 'Preparación de argumentos comerciales y catálogos multilingües',
    step4: '4. Ejecución del Test (3-7 Días)',
    step4Desc: 'Visualización transparente del panel publicitario y prospectos reales',
    step5: '5. Cooperación Anual',
    step5Desc: 'Firma del servicio integral de acompañamiento anual',

    newsTag: '07 Noticias y Eventos',
    newsTitle: 'Cumbres, Firmas Estratégicas y Logros',
    newsSubtitle: 'Presencia en cumbres industriales y acuerdos institucionales de alto nivel',
    readMore: 'Leer Más',

    contactTag: '08 Contacto',
    contactTitle: 'Inicie la Expansión Global de su Empresa',
    contactSubtitle: 'Acompañamiento profesional y pedidos constantes. Visítenos en Dongguan y Foshan.',
    headquarters: 'Sede Dongguan',
    headquartersAddr: 'Edificio 5, Parque Industrial Zhongtian Lianke, Nancheng, Dongguan',
    foshanBranch: 'Sucursal Foshan',
    foshanAddr: 'J911-913, Parque Nanhai New Economy, Guicheng, Nanhai, Foshan',
    clubHub: 'Club Transfronterizo Voyager',
    clubHubAddr: 'Piso 1, Edificio 15, Parque Songshan Lake, Dongguan',
    callUs: 'Llamar a la Línea Directa',
    formTitle: 'Solicitar Prueba de Captación B2B de 7 Días',
    formSubtitle: 'Complete sus datos y un especialista le contactará en 15 minutos',
    formName: 'Nombre Completo',
    formPhone: 'Teléfono / WhatsApp',
    formCompany: 'Nombre de la Empresa',
    formIndustry: 'Sector o Productos Principales',
    formRevenue: 'Rango de Facturación Anual',
    formSubmit: 'Enviar Solicitud',
    formSuccess: '¡Solicitud recibida! Nuestro asesor se pondrá en contacto pronto.',
    officialWeChat: 'Cuenta Oficial WeChat',
    videoChannel: 'Canal de Video Oficial',

    calculatorTitle: 'Calculadora de Incremento de Exportaciones',
    calculatorSubtitle: 'Calcule el retorno esperado con nuestro sistema de acompañamiento',
    calcRevenueLabel: 'Facturación Anual Actual (M)',
    calcInquiryLabel: 'Mercado Internacional Objetivo',
    calcExpectedRevenue: 'Incremento Estimado de Exportación',
    calcRoi: 'Retorno de Inversión (ROI)',
  },

  ar: {
    brandName: 'كاو جين العالمية',
    brandSub: 'CAO GEN CHU HAI',
    slogan: 'الشريك المحترف لمرافقة وتوسيع الصناعات عالمياً',
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navStrengths: 'نقاط القوة',
    navTeam: 'فريقنا',
    navCases: 'قصص النجاح',
    navMode: 'نمط المرافقة',
    navProcess: 'خطوات التعاون',
    navNews: 'الأخبار والفعاليات',
    navContact: 'اتصل بنا',
    navAdmin: 'لوحة التحكم',
    bookTestBtn: 'حجز تجربة 7 أيام',
    contactDirectBtn: 'تواصل معنا',
    phoneLabel: 'الخط الساخن',

    heroBadge: 'الشريك الاحترافي لانطلاق الصناعات عالمياً',
    heroTitle: 'الذكاء الاصطناعي + استقطاب عبر وسائل التواصل + نظام إغلاق الصفقات + التوطين',
    heroHighlight: 'مرافقة كاو جين · تدفق مستمر للطلبات',
    heroSub: 'متخصصون في نمو التجارة الخارجية B2B، وتحقيق زيادة تتجاوز 4 ملايين دولار في الإيرادات خلال العام الأول.',
    heroAudience: 'الفئة المستهدفة:',
    heroAudienceDesc: 'المصانع والشركات ذات الإيرادات السنوية بين 3 و60 مليون دولار الراغبة في توقيع عقود مع وكلاء وموزعين دوليين.',
    heroCtaPrimary: 'احجز اختبار استقطاب العملاء لمدة 7 أيام',
    heroCtaSecondary: 'استكشف نظام المرافقة المتكامل',
    heroPill1: 'فريق عمل مباشر من 55 خبيراً',
    heroPill2: 'استفسارات B2B خلال 3-7 أيام',
    heroPill3: 'خبرة في أكثر من 60 قطاعاً صناعياً',
    heroPill4: 'شراكات مع أكثر من 30 منصة عالمية',

    statEnterprises: '+1000',
    statEnterprisesDesc: 'شركة صناعية تم تقديم الخدمة لها',
    statIndustries: '+60',
    statIndustriesDesc: 'قطاعاً صناعياً تم تغطيته',
    statCountries: '+30',
    statCountriesDesc: 'دولة ومنطقة حول العالم',
    statRevenue: '+150M$',
    statRevenueDesc: 'إجمالي إيرادات الصادرات المحققة',

    aboutTag: '01 من نحن',
    aboutTitle: 'رواد في نمو التجارة الدولية لنقل الصناعة إلى الأسواق العالمية',
    aboutDesc1: 'تركز كاو جين العالمية على مسار نمو التجارة الخارجية B2B، لخدمة الشركات الصناعية الحقيقية عبر فرق متخصصة من 2-4 خبراء باستخدام الذكاء الاصطناعي.',
    aboutDesc2: 'نمكن العملاء من تحقيق قفزات نوعية في التصدير وتوقيع صفقات مستدامة في أوروبا والشرق الأوسط وأمريكا اللاتينية.',
    valuesTitle: 'قيمنا الجوهرية',
    valueRule1Title: 'النزاهة والاستقامة',
    valueRule1Desc: 'نقاء النية، التفكير الصائب، والعمل المستقيم',
    valueRule2Title: 'مبدأ العمل',
    valueRule2Desc: 'الالتزام الدقيق والتسليم الجريء؛ نفعل ما نقول ونقول ما نفعل',
    valueRule3Title: 'روح الخدمة',
    valueRule3Desc: 'خدمة العميل أولاً ومواجهة التحديات وحلها بفاعلية',
    missionTitle: 'مهمتنا',
    missionDesc: 'تمكين المصانع من التوسع العالمي المستدام وتحقيق الربحية المشتركة',
    visionTitle: 'رؤيتنا',
    visionDesc: 'أن نكون الشريك الأكثر موثوقية واحترافية للشركات حول العالم',
    orgTitle: 'الهيكل التنظيمي الفعّال',
    orgSubtitle: 'إدارة عامة حكيمة مع 3 ركائز رقابية و6 مراكز تنفيذية متخصصة',

    strengthsTag: '02 نقاط القوة الرئيسية',
    strengthsTitle: 'أربع ركائز قوة حصرية + منظومة الملاح اللوجستية الكاملة',
    strength1Title: 'فريق عمل ميداني متخصص',
    strength1Desc: '55 خبيراً بدوام كامل مع خبرة واسعة في الأسواق الأوروبية والشرق أوسطية واللاتينية.',
    strength2Title: 'نظام تسليم مباشر وموحد',
    strength2Desc: 'جميع المستشارين من كادرنا الداخلي دون الاعتماد على جهات خارجية لضمان أعلى معايير الجودة.',
    strength3Title: 'نموذج نمو قياسي ومجرب',
    strength3Desc: 'تم اختباره في 60 قطاعاً صناعياً لمضاعفة الإيرادات التصديرية بنجاح.',
    strength4Title: 'شراكات رسمية عميقة',
    strength4Desc: 'تعاون رسمي مع أكثر من 30 منصة تجارية دولية كمشغل معتمد.',
    ecosystemTitle: 'منظومة الملاح (Voyager) — درع الدعم الخلفي الكامل',
    ecosystemSubtitle: 'شراكة متبادلة لحل جميع تحديات الشحن واللوجستيات والتمويل',
    ecosystemDesc: 'نوفر حلول الشحن والجمارك وتسهيلات التمويل عبر أكثر من 20 خبيراً استشارياً.',
    phase0to1: 'المرحلة 0-1: تأمين الطلبات',
    phase1to10: 'المرحلة 1-10: التثبيت على أرض الواقع',
    phase10toN: 'المرحلة 10-N: التوسع الدولي الشامل',

    teamTag: '03 قوة الفريق',
    teamTitle: 'نخبة من كبار الخبراء والممارسين الميدانيين',
    teamSubtitle: 'نساعد الشركات الصغيرة والمتوسطة بفريق مرن للحصول على أكثر من 100 عميل محتمل يومياً خلال 3 أيام.',

    casesTag: '04 قصص النجاح',
    casesTitle: 'أربعة قطاعات صناعية رئيسية بنتائج مثبتة',
    casesSubtitle: 'المعدات الثقيلة، قطع الغيار والأجهزة، مواد البناء والأثاث، والسلع الاستهلاكية السريعة',
    tabHeavy: 'المعدات والآلات الثقيلة',
    tabHardware: 'الأجهزة وقطع الغيار',
    tabFurniture: 'الأثاث ومواد البناء',
    tabFmcg: 'السلع الاستهلاكية والذكية',
    chatFeedbackTitle: 'تقييمات العملاء وإشعارات الصفقات',
    chatFeedbackSubtitle: 'سجلات محادثات حقيقية توثق نجاح العملاء في إغلاق الصفقات الدولية',
    viewDetails: 'عرض التفاصيل',
    realResultsBadge: 'صفقة مؤكدة',

    modeTag: '05 نمط المرافقة والتوجيه',
    modeTitle: 'نموذج النمو المتدرج عبر 4 مراحل',
    modeSubtitle: 'الذكاء الاصطناعي + استقطاب وسائل التواصل + إجراءات الإغلاق + التوطين الخفيف',
    stage1Title: 'المرحلة الأولى: اختبار الاستقطاب خلال 7 أيام',
    stage1Sub: 'إنتاج سريع للاستفسارات مع تحكم صارم بالتكاليف وضمان النتائج وتحديد التموضع التجاري',
    stage2Title: 'المرحلة الثانية: المرافقة الميدانية المعمقة',
    stage2Sub: 'تواجد الفريق الميداني لبناء نظام استقطاب ذاتي ومستدام داخل الشركة',
    stage3Title: 'المرحلة الثالثة: التمكين الميداني بالخارج وإغلاق الصفقات',
    stage3Sub: 'مرافقة أصحاب المصانع دولياً لمقابلة العملاء النهائيين والموزعين الرئيسيين',
    stage4Title: 'المرحلة الرابعة: الابتكار المشترك واقتحام الأسواق العالمية',
    stage4Sub: 'ضخ التمويل والكوادر والموارد الصناعية لتوسيع العلامة التجارية عالمياً',

    processTag: '06 خطوات التعاون',
    processTitle: '5 خطوات واضحة ومضمونة',
    processSubtitle: 'من حجز الموعد إلى رؤية النتائج على لوحة الإعلانات الفعلية خلال 3 إلى 7 أيام',
    step1: '1. الحجز الإلكتروني',
    step1Desc: 'تواصل فردي مع المستشار المختص لدراسة السوق وملاءمة المنتج',
    step2: '2. توقيع عقد الاختبار',
    step2Desc: 'توقيع اتفاقية تجريبية بتكلفة استثمارية منخفضة ومضمونة',
    step3: '3. جمع وتجهيز البيانات',
    step3Desc: 'صياغة نقاط القوة التنافسية وتجهيز المواد التسويقية متعددة اللغات',
    step4: '4. الاختبار الفعلي (3-7 أيام)',
    step4Desc: 'إطلاق الحملات ورؤية الاستفسارات الحقيقية على لوحة التحكم المباشرة',
    step5: '5. الشراكة السنوية',
    step5Desc: 'توقيع عقد المرافقة السنوية الشامل بعد التأكد من جدوى النتائج',

    newsTag: '07 الفعاليات والإنجازات',
    newsTitle: 'مؤتمرات، توقيع اتفاقيات وفعاليات حكومية',
    newsSubtitle: 'مشاركات رسمية في منتديات الصناعة والغرف التجارية والمؤتمرات الدولية',
    readMore: 'اقرأ المزيد',

    contactTag: '08 اتصل بنا',
    contactTitle: 'ابدأ مرحلة جديدة من النمو العالمي لشركتك',
    contactSubtitle: 'مرافقة كاو جين، طلبات وفيرة. نرحب بكم في مقرنا في دونغقوان وفوشان.',
    headquarters: 'المقر الرئيسي في دونغقوان',
    headquartersAddr: 'الغرف 501 و602، مبنى 5، مجمع تشونغتيان ليانكي للمعلومات، نانتشنغ، دونغقوان',
    foshanBranch: 'فرع فوشان',
    foshanAddr: 'J911-913، مجمع نانهاي للاقتصاد الجديد، غويتشينغ، نانهاي، فوشان',
    clubHub: 'نادي الملاح العابر للحدود',
    clubHubAddr: 'الطابق الأول، مبنى 15، مجمع بحيرة سونغشان، دونغقوان',
    callUs: 'اتصل بنا مباشرة',
    formTitle: 'احجز اختبار استقطاب العملاء لمدة 7 أيام',
    formSubtitle: 'أدخل بيانات شركتك وسيقوم خبير التجارة الدولية بالتواصل معك خلال 15 دقيقة',
    formName: 'الاسم الكامل',
    formPhone: 'رقم الهاتف / واتساب',
    formCompany: 'اسم الشركة أو المصنع',
    formIndustry: 'المنتجات الرئيسية / القطاع',
    formRevenue: 'حجم الإيرادات السنوية',
    formSubmit: 'إرسال طلب الحجز',
    formSuccess: 'تم استلام طلبكم بنجاح! سيتواصل معكم مستشارنا قريباً.',
    officialWeChat: 'الحساب الرسمي وي شات',
    videoChannel: 'قناة الفيديو الرسمية',

    calculatorTitle: 'حاسبة الزيادة المتوقعة في عائدات التصدير',
    calculatorSubtitle: 'احسب العائد المتوقع والاستثمار التقديري مع نظام كاو جين',
    calcRevenueLabel: 'الإيرادات السنوية الحالية (مليون)',
    calcInquiryLabel: 'الأسواق الدولية المستهدفة',
    calcExpectedRevenue: 'الزيادة المتوقعة في إيرادات السنة الأولى',
    calcRoi: 'معدل العائد على الاستثمار المتوقع (ROI)',
  },
};
