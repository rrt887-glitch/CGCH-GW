import React from 'react';
import { ServicePageLayout, ServiceDetail } from './ServicePageLayout';

const serviceData: ServiceDetail = {
  slug: 'manufacturing-overseas',
  badge: '工贸一体与实体工厂专属出海引擎',
  title: '制造业出海陪跑服务',
  description:
    '专为中国实体制造业与工贸一体企业打造。聚焦“轻本地化模式”，从出海商业定位、2-4人出海团队搭建、7天测试验证，到现场驻点实操与实地赋能，帮助企业低成本、高确定性开拓海外市场，签约优质海外代理商。',
  highlights: [
    '55人全自营落地陪跑团队',
    '7天测试验证客资可行性',
    '保底输出有效海外B2B商机',
  ],
  painPointsTitle: '为什么中国制造必须从“坐等外贸”转向“自主出海”？',
  painPoints: [
    {
      title: '1. 传统展会与传统B2B平台成本高昂，询盘质量断崖式下滑',
      desc: '动辄几十万展位费，外商流量却被中间商截流；传统B2B平台恶性内卷拼价格，工厂毫无品牌议价权。',
    },
    {
      title: '2. 缺乏自主海外销售团队，外贸业务员招不来、留不住、开不了单',
      desc: '传统招聘成本高，业务员不懂工业品底层工艺，不会用AI获客，缺少海外大客户背调和谈判成交SOP。',
    },
    {
      title: '3. 不懂海外本地化招商与商务谈判，不敢签或不会签海外代理商',
      desc: '缺乏海外样板间打造经验，不懂海外合规、财税与代理商约束机制，错失区域市场大蛋糕。',
    },
  ],
  solutionsTitle: '草根出海四阶段落地陪跑全景体系',
  solutions: [
    {
      iconName: '1',
      title: '阶段一：7天获客测试验证',
      desc: '极速产出3-5条高意向海外B2B客资。帮助企业以最小成本快速验证产品在海外目标市场的真实吸引力与询盘转化率。',
    },
    {
      iconName: '2',
      title: '阶段二：深度落地陪跑（搭建2-4人专班）',
      desc: '现场驻点指导，为企业量身搭建2-4人自主出海小团队，实操传授AI内容工业化创作、社媒矩阵分发与询盘成交SOP。',
    },
    {
      iconName: '3',
      title: '阶段三：出海实地赋能（轻本地化）',
      desc: '协助企业开拓海外本地代理商与经销网络，搭建海外样板间与仓储展销中心，实现“前店后厂”自主掌控终端渠道。',
    },
    {
      iconName: '4',
      title: '阶段四：项目共创（合资共赢）',
      desc: '对于高潜优质制造企业，草根出海可通过参股、联营或收益分成模式深度绑定，携手打造成全球细分赛道冠军。',
    },
  ],
  formServiceTitle: '制造业出海陪跑',
};

const otherServices = [
  {
    slug: 'social-media-lead-gen',
    title: '海外社媒获客陪跑',
    desc: 'AI+TikTok/LinkedIn全社媒矩阵，3天极速拿海外精准客资',
  },
  {
    slug: 'b2b-inquiry-sop',
    title: '外贸询盘承接与成交SOP',
    desc: '全链路外贸买家谈判与成交话术SOP，解决有询盘不成交痛点',
  },
];

export const ManufacturingOverseasPage: React.FC = () => {
  return <ServicePageLayout service={serviceData} otherServices={otherServices} />;
};
