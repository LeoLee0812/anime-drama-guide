// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// 站点配置：从 0 开始的 AI 漫剧之旅
// 纯静态输出，部署在 Vercel，自定义域名 manju.saveme505.help
export default defineConfig({
  site: 'https://manju.saveme505.help',
  integrations: [
    starlight({
      title: '从 0 开始的 AI 漫剧之旅',
      description:
        '面向零基础创作者的 AI 漫剧知识库：影视语言扫盲、字节 Seedance 官方提示词语法、风格词库、官方避坑手册与可直接复制的模板。',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      // 页脚覆盖：附带右下角进群二维码
      components: { Footer: './src/components/Footer.astro' },
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/LeoLee0812' },
      ],
      sidebar: [
        {
          label: '开始之前',
          items: [{ label: '这份指南怎么用', slug: 'start-here' }],
        },
        {
          label: '第 1 册 · 影视语言扫盲',
          items: [{ autogenerate: { directory: '01-film-language' } }],
        },
        {
          label: '第 2 册 · 提示词工程',
          items: [{ autogenerate: { directory: '02-prompt-engineering' } }],
        },
        {
          label: '第 3 册 · 风格词库',
          items: [{ autogenerate: { directory: '03-style-library' } }],
        },
        {
          label: '第 4 册 · 官方避坑手册',
          items: [{ autogenerate: { directory: '04-troubleshooting' } }],
        },
        {
          label: '第 5 册 · 模板库',
          items: [{ autogenerate: { directory: '05-templates' } }],
        },
        {
          label: '附录 · 平台与成本',
          items: [{ autogenerate: { directory: '06-platforms' } }],
        },
      ],
    }),
  ],
});
