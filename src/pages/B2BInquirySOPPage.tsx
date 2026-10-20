import React from 'react';
import { ServicePageLayout, ServiceDetail } from './ServicePageLayout';

const serviceData: ServiceDetail = {
  slug: 'b2b-inquiry-sop',
  badge: '解决“有线索不会跟、报价后无回复”终极痛点',
  title: '外贸询盘承接与成交SOP服务',
  description:
    '深度赋能外贸业务实战。提供海外买家背景背调SOP、标准化多语言沟通谈判话术库、阶梯式报价与样品催单节奏，以及海外分销商/代理商签约全套协议与成交法，手把手带练实操，让每一个高价值询盘转化为真实订单。',
  highlights: [
    '实战专家复盘每一封关键邮件与报价',
    '海外买家10分钟全景背景调查SOP',
    '海外代理商阶梯返点与排他签约机制',
  ],
  painPointsTitle: '为什么拿到询盘却迟迟签不下单？',
  painPoints: [
    {
      title: '1. 拿到询盘盲目报价，价格一报客户直接“失联”',
      desc: '没有搞清楚买家的真实采购诉求、目标市场零售价与替换意愿，直接把底牌亮出。客户把价格当做压原供应商的筹码，再无下文。',
    },
    {
      title: '2. 缺乏海外客户背调能力，分不清“大鱼”还是“小虾”',
      desc: '业务员不知道去哪里查对方的公司注册信息、进出口报关历史、海外本地实体店与独立站，把大量精力浪费在低价值询盘上，错过真正的大买家。',
    },
    {
      title: '3. 英语沟通生硬机械，不懂大客户商务心理',
      desc: '只会“Dear Sir, please check our quotation”，不会从质量管控、交期保障、技术图纸认证与备件支持等维度击穿买家痛点，缺乏商业说服力。',
    },
    {
      title: '4. 不懂海外代理商招募与长约谈判',
      desc: '遇到想做区域独家代理的大客户，不知如何设定年采购额考核、首单定金比例与市场推广支持，导致不敢签或签了无法履约。',
    },
  ],
  solutionsTitle: '草根出海外贸成交SOP：五大实操工具箱',
  solutions: [
    {
      iconName: '1',
      title: '工具一：10分钟海外买家全景背调SOP',
      desc: '标准化背调作业指导书，通过全球海关提单数据、企业注册库与社媒足迹，10分钟摸清买家公司性质（工厂/批发商/零售商）、历史采购量、核心决策人姓名与邮箱。',
    },
    {
      iconName: '2',
      title: '工具二：标准化阶梯谈判话术库（含AI智能辅助）',
      desc: '首封高回复破冰信、痛点摸底提问清单、阶梯报价拆解表（EXW/FOB/CIF）、打消客户质量疑虑的验厂视频交付模板与样品催促跟进话术。',
    },
    {
      iconName: '3',
      title: '工具三：7天高频跟进与防失联机制',
      desc: '多触点交替跟进节拍表（WhatsApp语音/留信、LinkedIn商务互动、邮件干货资料推送），让买家在关键采购决策期始终感受到您的专业与重视。',
    },
    {
      iconName: '4',
      title: '工具四：海外代理商分级签约与风险防范体系',
      desc: '经过法务与实操检验的双语《海外区域总代理协议》、《保密协议》、《样品确认书》，制定科学合理的阶梯销量返点与排他约束，保护实业工厂长期利益。',
    },
  ],
  formServiceTitle: '外贸询盘承接与成交SOP',
};

const otherServices = [
  {
    slug: 'manufacturing-overseas',
    title: '制造业出海陪跑',
    desc: '工贸一体企业转型，2-4人团队搭建，现场驻点与海外代理商直签',
  },
  {
    slug: 'social-media-lead-gen',
    title: '海外社媒获客陪跑',
    desc: 'AI+TikTok/LinkedIn全社媒矩阵，3天极速拿海外精准客资',
  },
];

export const B2BInquirySOPPage: React.FC = () => {
  return <ServicePageLayout service={serviceData} otherServices={otherServices} />;
};
