import React from 'react';
import { ServicePageLayout, ServiceDetail } from './ServicePageLayout';

const serviceData: ServiceDetail = {
  slug: 'social-media-lead-gen',
  badge: 'AI + TikTok / LinkedIn 海外工业获客矩阵',
  title: '海外社媒获客陪跑服务',
  description:
    '告别传统外贸平台高昂年费与无效竞价。草根出海依托AI工业内容创作引擎与海外全社媒矩阵（TikTok、LinkedIn、YouTube、Facebook），帮助制造工厂建立自主获客壁垒，3天极速拿客资，单日稳定产出高意向海外采购商线索。',
  highlights: [
    'AI自动化生成工业外语短视频',
    '3-7天稳定获取首批采购商询盘',
    '账号与买家私域资产完全归企业所有',
  ],
  painPointsTitle: '传统外贸获客渠道的致命痛点',
  painPoints: [
    {
      title: '1. 传统B2B平台内卷杀价，同行恶意比价严重',
      desc: '花费数十万年费与P4P竞价，来的询盘往往是群发垃圾询价，同行恶意套底价，利润薄如纸。',
    },
    {
      title: '2. 海外主流采购商年轻化，70%以上的决策者在社媒完成初筛',
      desc: '欧美及中东新一代采购总监和工程师习惯通过TikTok、LinkedIn看工厂真实车间与加工能力，传统死板网站毫无吸引力。',
    },
    {
      title: '3. 工厂不会做海外内容，缺乏跨国语言、工业脚本与投流人才',
      desc: '自己摸索几个月播放量寥寥无几，发的内容毫无工业审美，难以打动专业大B买家。',
    },
  ],
  solutionsTitle: '草根出海海外社媒全流程陪跑打法',
  solutions: [
    {
      iconName: '1',
      title: '模块一：海外社媒矩阵搭建与品牌定位',
      desc: '精准规划TikTok企业号、LinkedIn商务主页、YouTube官方展销频道，打造高信赖度“源头工厂硬核实力”形象。',
    },
    {
      iconName: '2',
      title: '模块二：AI工业级内容批量创作引擎',
      desc: '提供50+实体工厂爆款脚本库，运用AI生成多语种专业工业旁白与数字人讲解，极速产出专业制造工艺短视频。',
    },
    {
      iconName: '3',
      title: '模块三：精准买家线索截流与触达体系',
      desc: '通过关键词霸屏、同行视频评论区截流与LinkedIn决策人直接邀约，72小时内与真实海外采购商建立一对一沟通。',
    },
    {
      iconName: '4',
      title: '模块四：企业私有化数字资产沉淀',
      desc: '从账号权限、获客话术、剪辑模板到买家私域CRM全部交付企业，为实体工厂培养出带不走的自主社媒获客铁军。',
    },
  ],
  formServiceTitle: '海外社媒获客陪跑',
};

const otherServices = [
  {
    slug: 'manufacturing-overseas',
    title: '制造业出海陪跑',
    desc: '工贸一体企业转型，2-4人团队搭建，现场驻点与海外代理商直签',
  },
  {
    slug: 'b2b-inquiry-sop',
    title: '外贸询盘承接与成交SOP',
    desc: '全链路外贸买家谈判与成交话术SOP，解决有询盘不成交痛点',
  },
];

export const SocialMediaLeadGenPage: React.FC = () => {
  return <ServicePageLayout service={serviceData} otherServices={otherServices} />;
};
