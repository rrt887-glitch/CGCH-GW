import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from '../src/App';

interface PageConfig {
  path: string;
  outputPath: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  noindex?: boolean;
  structuredData: any[];
}

const DOMAIN = 'https://www.tkcaogenchuhai.com';

const commonOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '草根出海',
  alternateName: 'Cao Gen Chu Hai',
  url: DOMAIN,
  logo: `${DOMAIN}/cgch.png`,
  description:
    '中国制造迈向全球的专业陪跑伙伴。以AI+海外社媒获客+高效成交SOP+轻本地化模式，为实体制造企业搭建自主出海获客与签约体系。',
  telephone: '+86-135-9271-3944',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+86-135-9271-3944',
      contactType: 'sales',
      areaServed: ['CN', 'Global'],
      availableLanguage: ['Chinese', 'English'],
    },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: '东莞市',
      addressRegion: '广东省',
      streetAddress: '南城区科创路中天联科国际信息产业园5栋501室、602室',
      addressCountry: 'CN',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: '佛山市',
      addressRegion: '广东省',
      streetAddress: '南海区桂城街道夏南路1号南海新经济广场产业园J栋911-913',
      addressCountry: 'CN',
    },
  ],
};

const pages: PageConfig[] = [
  {
    path: '/',
    outputPath: 'dist/index.html',
    title: '草根出海 - 中国制造迈向全球的专业外贸增长陪跑伙伴 | 官方网站',
    description:
      '草根出海专注中国实体制造业出海陪跑，依托AI+海外全社媒获客+外贸成交体系+轻本地化模式，为实体工厂搭建2-4人自主出海团队，7天测试验证，保底输出真实海外B2B询盘与代理商线索。',
    canonical: `${DOMAIN}/`,
    ogTitle: '草根出海 - 中国制造迈向全球的专业陪跑伙伴 (草根陪跑 订单管饱)',
    ogDescription:
      '55人自营实战团队，3-7天极速出海外B2B询盘，覆盖60+细分行业，助力中国制造迈向全球。',
    ogType: 'website',
    structuredData: [
      commonOrganization,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '首页',
            item: `${DOMAIN}/`,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '制造业出海陪跑',
        serviceType: 'B2B外贸出海陪跑赋能',
        provider: {
          '@type': 'Organization',
          name: '草根出海',
        },
        description:
          '帮助实体制造企业搭建2-4人出海团队，7天测试验证，现场驻厂陪跑，签约海外代理商。',
        areaServed: '全球市场',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '海外社媒获客陪跑',
        serviceType: '海外B2B社媒精准获客',
        provider: {
          '@type': 'Organization',
          name: '草根出海',
        },
        description:
          'AI+TikTok/LinkedIn/YouTube海外全社媒矩阵获客，3天快速出真实海外买家询盘。',
        areaServed: '全球市场',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '外贸询盘承接与成交SOP',
        serviceType: '外贸商机承接与谈判转化',
        provider: {
          '@type': 'Organization',
          name: '草根出海',
        },
        description:
          '海外买家全景背调、商务谈判沟通话术库、报价节奏与海外代理商签约转化SOP。',
        areaServed: '全球市场',
      },
    ],
  },
  {
    path: '/services/manufacturing-overseas',
    outputPath: 'dist/services/manufacturing-overseas/index.html',
    title: '制造业出海陪跑服务_实业工厂转型外贸与海外代理商招募 - 草根出海',
    description:
      '专为中国实体制造业与工贸一体企业打造。聚焦“轻本地化模式”，从出海商业定位、2-4人出海团队搭建、7天测试验证，到现场驻点实操与实地赋能，帮助企业低成本、高确定性开拓海外市场，签约优质海外代理商。',
    canonical: `${DOMAIN}/services/manufacturing-overseas`,
    ogTitle: '制造业出海陪跑服务 - 草根出海',
    ogDescription:
      '为年营收2000万-4亿实业工厂量身定制：轻本地化布局、搭建出海专班、现场驻点实操、直面海外采购商。',
    ogType: 'article',
    structuredData: [
      commonOrganization,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '首页',
            item: `${DOMAIN}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '三大核心服务',
            item: `${DOMAIN}/#mode`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '制造业出海陪跑服务',
            item: `${DOMAIN}/services/manufacturing-overseas`,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '制造业出海陪跑服务',
        serviceType: '实体工厂外贸转型与出海团队陪跑',
        provider: {
          '@type': 'Organization',
          name: '草根出海',
        },
        description:
          '专为中国实体制造业与工贸一体企业打造。聚焦“轻本地化模式”，从出海商业定位、2-4人出海团队搭建、7天测试验证，到现场驻点实操与实地赋能，帮助企业低成本、高确定性开拓海外市场，签约优质海外代理商。',
        areaServed: '全球市场',
      },
    ],
  },
  {
    path: '/services/social-media-lead-gen',
    outputPath: 'dist/services/social-media-lead-gen/index.html',
    title: '海外社媒获客陪跑_TikTok与LinkedIn海外B2B精准引流服务 - 草根出海',
    description:
      '草根出海海外社媒获客陪跑服务，依托AI工业内容创作引擎与海外全社媒矩阵（TikTok、LinkedIn、YouTube、Facebook），帮助制造工厂建立自主获客壁垒，3天极速拿客资，单日稳定产出高意向海外采购商线索。',
    canonical: `${DOMAIN}/services/social-media-lead-gen`,
    ogTitle: '海外社媒获客陪跑服务 - 草根出海',
    ogDescription:
      'TikTok+LinkedIn+YouTube矩阵精准获客，AI工业短视频与买家触达，3天极速拿客资，摆脱传统B2B平台高昂年费。',
    ogType: 'article',
    structuredData: [
      commonOrganization,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '首页',
            item: `${DOMAIN}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '三大核心服务',
            item: `${DOMAIN}/#mode`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '海外社媒获客陪跑服务',
            item: `${DOMAIN}/services/social-media-lead-gen`,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '海外社媒获客陪跑服务',
        serviceType: '海外B2B社媒矩阵精准引流',
        provider: {
          '@type': 'Organization',
          name: '草根出海',
        },
        description:
          '依托AI工业内容创作引擎与海外全社媒矩阵（TikTok、LinkedIn、YouTube、Facebook），帮助制造工厂建立自主获客壁垒，3天极速拿客资，单日稳定产出高意向海外采购商线索。',
        areaServed: '全球市场',
      },
    ],
  },
  {
    path: '/services/b2b-inquiry-sop',
    outputPath: 'dist/services/b2b-inquiry-sop/index.html',
    title: '外贸询盘承接与成交SOP_海外买家商务谈判与订单转化闭环 - 草根出海',
    description:
      '草根出海外贸询盘承接与成交SOP服务，深度赋能外贸业务实战。提供海外买家背景背调SOP、标准化多语言沟通谈判话术库、阶梯式报价与样品催单节奏，以及海外分销商/代理商签约全套协议与成交法，手把手带练实操，让每一个高价值询盘转化为真实订单。',
    canonical: `${DOMAIN}/services/b2b-inquiry-sop`,
    ogTitle: '外贸询盘承接与成交SOP - 草根出海',
    ogDescription:
      '全链路外贸买家谈判与成交话术SOP，手把手带练实操，解决报价后无回复、业务员缺乏谈判经验痛点，提升询盘成交率。',
    ogType: 'article',
    structuredData: [
      commonOrganization,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '首页',
            item: `${DOMAIN}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '三大核心服务',
            item: `${DOMAIN}/#mode`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: '外贸询盘承接与成交SOP服务',
            item: `${DOMAIN}/services/b2b-inquiry-sop`,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '外贸询盘承接与成交SOP服务',
        serviceType: '外贸商务谈判与订单转化SOP',
        provider: {
          '@type': 'Organization',
          name: '草根出海',
        },
        description:
          '深度赋能外贸业务实战。提供海外买家背景背调SOP、标准化多语言沟通谈判话术库、阶梯式报价与样品催单节奏，以及海外分销商/代理商签约全套协议与成交法，手把手带练实操，让每一个高价值询盘转化为真实订单。',
        areaServed: '全球市场',
      },
    ],
  },
  {
    path: '/404',
    outputPath: 'dist/404.html',
    title: '404 - 页面未找到 | 草根出海',
    description: '抱歉，您访问的页面不存在或已被移除。请返回草根出海官网首页获取制造业出海陪跑方案。',
    canonical: `${DOMAIN}/404.html`,
    ogTitle: '404 - 页面未找到 | 草根出海',
    ogDescription: '抱歉，您访问的页面不存在或已被移除。',
    ogType: 'website',
    noindex: true,
    structuredData: [commonOrganization],
  },
];

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html does not exist. Please run vite build first.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Extract asset tags (scripts and css links) generated by Vite
  const scriptRegex = /<script type="module" crossorigin src="([^"]+)"><\/script>/g;
  const linkRegex = /<link rel="stylesheet" crossorigin href="([^"]+)">/g;
  const preloadRegex = /<link rel="modulepreload" crossorigin href="([^"]+)">/g;

  const scriptMatches = [...rawTemplate.matchAll(scriptRegex)].map((m) => m[0]);
  const linkMatches = [...rawTemplate.matchAll(linkRegex)].map((m) => m[0]);
  const preloadMatches = [...rawTemplate.matchAll(preloadRegex)].map((m) => m[0]);

  const assetHeadHtml = [
    ...preloadMatches,
    ...linkMatches,
    ...scriptMatches,
  ].join('\n    ');

  for (const page of pages) {
    console.log(`Prerendering route: ${page.path} -> ${page.outputPath}`);

    // Render React App to static HTML string
    const appHtml = ReactDOMServer.renderToString(
      React.createElement(App, { path: page.path })
    );

    // Build JSON-LD structured data script
    const jsonLdHtml = `<script type="application/ld+json">${JSON.stringify(
      page.structuredData
    )}</script>`;

    const robotsMeta = page.noindex
      ? '<meta name="robots" content="noindex, follow" />'
      : '<meta name="robots" content="index, follow" />';

    const htmlContent = `<!doctype html>
<html lang="zh-CN">
  <head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-820GFXDXNF"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-820GFXDXNF');
    </script>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    ${robotsMeta}
    <link rel="canonical" href="${page.canonical}" />
    <link rel="icon" type="image/png" href="/cgch.png" />

    <!-- OpenGraph & Social Metadata -->
    <meta property="og:title" content="${page.ogTitle}" />
    <meta property="og:description" content="${page.ogDescription}" />
    <meta property="og:url" content="${page.canonical}" />
    <meta property="og:type" content="${page.ogType}" />
    <meta property="og:image" content="${DOMAIN}/cgch.png" />
    <meta property="og:site_name" content="草根出海" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.ogTitle}" />
    <meta name="twitter:description" content="${page.ogDescription}" />
    <meta name="twitter:image" content="${DOMAIN}/cgch.png" />

    <!-- DNS prefetch & preconnect for external assets -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

    ${assetHeadHtml}

    ${jsonLdHtml}
  </head>
  <body class="font-sans text-slate-900 antialiased bg-white">
    <div id="root">${appHtml}</div>
  </body>
</html>`;

    const outFilePath = path.resolve(process.cwd(), page.outputPath);
    const outDir = path.dirname(outFilePath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(outFilePath, htmlContent, 'utf-8');
  }

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public/robots.txt'), robotsTxt, 'utf-8');

  // Generate sitemap.xml with strictly existing, indexable, valid pages
  const validPages = pages.filter((p) => !p.noindex);
  const nowStr = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${validPages
  .map((p) => {
    const priority = p.path === '/' ? '1.0' : '0.9';
    const changefreq = p.path === '/' ? 'daily' : 'weekly';
    return `  <url>
    <loc>${p.canonical}</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public/sitemap.xml'), sitemapXml, 'utf-8');

  console.log('Prerender and sitemap generation completed successfully!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
