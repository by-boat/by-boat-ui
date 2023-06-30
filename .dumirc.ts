import { defineConfig } from 'dumi';

export default defineConfig({
  // history: {
    // type: 'hash'
  // },
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  base: '/docs-dist',
  publicPath: '/docs-dist/',
  // hash: true,
  outputPath: '/docs-dist/',
  themeConfig: {
    name: 'by-boat-ui',
  },
});
