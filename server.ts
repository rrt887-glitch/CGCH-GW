import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_WEBHOOK_URL = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=9e0d3242-dc35-4edb-b3d1-6b72fc1df053';

// Rate limit & anti-spam store
interface RateLimitRecord {
  count: number;
  lastTime: number;
}
const ipRateLimitMap = new Map<string, RateLimitRecord>();

function isMonotonous(str: string): boolean {
  if (!str || str.length < 2) return true;
  return str.split('').every((c) => c === str[0]);
}

const JUNK_KEYWORDS = [
  'test', 'testing', 'asdf', 'qwer', '1234', '12345', '123456', '12345678',
  'admin', 'null', 'undefined', '111', '222', '333', '888', 'aaa', 'bbb',
  '测试', '测试公司', '测试人', '测试行业', '无', '啊啊啊'
];

function isJunkString(str: string): boolean {
  if (!str) return true;
  const clean = str.trim().toLowerCase();
  if (clean.length < 2) return true;
  if (isMonotonous(clean)) return true;
  if (JUNK_KEYWORDS.includes(clean)) return true;
  return false;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Webhook notification endpoint with strict rate-limiting and anti-spam validation
  app.post(['/api/notify-lead', '/api/lead'], async (req, res) => {
    try {
      const clientIp =
        (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
        req.socket.remoteAddress ||
        'unknown';

      const nowMs = Date.now();
      const record = ipRateLimitMap.get(clientIp) || { count: 0, lastTime: nowMs };

      // Anti-Spam 1: Throttle max 5 submissions per 5 minutes per IP
      if (nowMs - record.lastTime < 5 * 60 * 1000) {
        if (record.count >= 5) {
          return res.status(429).json({
            success: false,
            error: '提交过于频繁，请稍候 5 分钟后再试或直接拨打官方电话咨询。',
          });
        }
        record.count += 1;
      } else {
        record.count = 1;
        record.lastTime = nowMs;
      }
      ipRateLimitMap.set(clientIp, record);

      const {
        companyName,
        contactPerson,
        phone,
        industry,
        source = '企业官网预约表单',
        targetMarket = '全球市场',
        budgetRange,
        note = '暂无附加备注',
        submittedAt,
        hp_field,
      } = req.body || {};

      // Anti-Spam 2: Bot Honeypot check
      if (hp_field) {
        console.warn(`[AntiSpam] Bot detected via honeypot from IP: ${clientIp}`);
        return res.json({ success: true, message: '提交成功' });
      }

      // Anti-Spam 3: Data Quality & Phone Validation
      const cleanPhone = (phone || '').toString().trim().replace(/[\s\-_()]/g, '');
      const cnMobileRegex = /^1[3-9]\d{9}$/;
      const intlPhoneRegex = /^(\+?\d{1,4})?[1-9]\d{6,14}$/;

      if (
        !cleanPhone ||
        cleanPhone.length < 7 ||
        isMonotonous(cleanPhone) ||
        (!cnMobileRegex.test(cleanPhone) && !intlPhoneRegex.test(cleanPhone))
      ) {
        return res.status(400).json({
          success: false,
          error: '手机号码格式不合规，请输入有效的11位中国大陆手机号码或国际电话。',
        });
      }

      if (isJunkString(companyName) || isJunkString(contactPerson) || isJunkString(industry)) {
        return res.status(400).json({
          success: false,
          error: '请填写规范真实的企业名称、联系人姓名和主营产品，拒绝无意义测试字符。',
        });
      }

      const webhookUrl = process.env.WECHAT_WORK_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
      const now = new Date();
      const timeStr =
        submittedAt ||
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

      // Build WeChat Work markdown format message
      const markdownContent = [
        `### 🔔 草根出海官网 · 收到新的客户咨询预约`,
        `> **企业名称**：<font color="comment">${companyName || '未填写'}</font>`,
        `> **联系人员**：${contactPerson || '未填写'}`,
        `> **联系电话**：<font color="info">${phone || '未填写'}</font>`,
        `> **主营行业**：${industry || '未填写'}`,
        `> **来源页面**：<font color="warning">${source}</font>`,
        targetMarket ? `> **目标市场**：${targetMarket}` : '',
        budgetRange ? `> **意向模式**：${budgetRange}` : '',
        `> **咨询备注**：${note}`,
        `> **提交时间**：${timeStr}`,
        ``,
        `> 🎯 **提示**：线索已自动同步入库，请专属外贸顾问及时跟进！`,
      ]
        .filter(Boolean)
        .join('\n');

      const payload = {
        msgtype: 'markdown',
        markdown: {
          content: markdownContent,
        },
      };

      // Call WeChat Work webhook API
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await webhookResponse.json().catch(() => ({}));

      console.log(`[Webhook] Sent to WeChat Work:`, {
        companyName,
        contactPerson,
        phone,
        response: responseData,
      });

      return res.json({
        success: true,
        message: '企业微信通知发送成功',
        wechatResult: responseData,
      });
    } catch (error) {
      console.error('[Webhook] Failed to send WeChat Work notification:', error);
      return res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : '发送企业微信通知失败',
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      service: 'cgch-website',
      webhookConfigured: Boolean(process.env.WECHAT_WORK_WEBHOOK_URL || DEFAULT_WEBHOOK_URL),
    });
  });

  // Valid public navigation routes
  const VALID_ROUTES = new Set([
    '/',
    '/index.html',
    '/services/manufacturing-overseas',
    '/services/social-media-lead-gen',
    '/services/b2b-inquiry-sop',
    '/robots.txt',
    '/sitemap.xml',
  ]);

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    // In dev mode: if navigating to an unrecognized page, return HTTP 404 status
    app.use(async (req, res, next) => {
      const cleanPath = req.path.replace(/\/+$/, '') || '/';
      const isAssetOrInternal =
        req.path.includes('.') ||
        req.path.startsWith('/@') ||
        req.path.startsWith('/src/') ||
        req.path.startsWith('/node_modules/') ||
        req.path.startsWith('/api/');

      if (!isAssetOrInternal && !VALID_ROUTES.has(cleanPath)) {
        res.status(404);
        const notFoundDist = path.resolve(process.cwd(), 'dist/404.html');
        if (fs.existsSync(notFoundDist)) {
          return res.sendFile(notFoundDist);
        }
        try {
          const indexHtml = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
          const transformed = await vite.transformIndexHtml(req.url, indexHtml);
          return res.send(transformed);
        } catch (e) {
          return next(e);
        }
      }
      next();
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    const notFoundHtml = path.join(distPath, '404.html');

    app.use(express.static(distPath, { extensions: ['html'] }));

    app.get('*', (req, res) => {
      const cleanPath = req.path.replace(/\/+$/, '') || '/';

      if (cleanPath === '/' || cleanPath === '/index.html') {
        return res.sendFile(path.join(distPath, 'index.html'));
      }
      if (cleanPath === '/services/manufacturing-overseas') {
        return res.sendFile(path.join(distPath, 'services/manufacturing-overseas/index.html'));
      }
      if (cleanPath === '/services/social-media-lead-gen') {
        return res.sendFile(path.join(distPath, 'services/social-media-lead-gen/index.html'));
      }
      if (cleanPath === '/services/b2b-inquiry-sop') {
        return res.sendFile(path.join(distPath, 'services/b2b-inquiry-sop/index.html'));
      }

      // Check if file exists in dist
      const potentialFile = path.join(distPath, req.path);
      if (fs.existsSync(potentialFile) && fs.statSync(potentialFile).isFile()) {
        return res.sendFile(potentialFile);
      }

      // Non-existent route: return HTTP 404 with 404.html
      res.status(404);
      if (fs.existsSync(notFoundHtml)) {
        return res.sendFile(notFoundHtml);
      }
      return res.send('404 Not Found');
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[Server] Fatal startup error:', err);
});
