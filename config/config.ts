import path from 'path';
import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'LarkMap',
  alias: {
    '@': path.join(__dirname, '../src')
  },
  themeConfig: {
    carrier: 'LarkMap',
  },
  extraBabelIncludes: ['@pansy/dumi-theme-pansy'],
  outputPath: 'docs-dist',
  logo: '/logo.svg',
  favicon: '/logo.svg',
  hash: true,
  resolve: {
    includes: ['docs']
  },
  navs: [
    null,
    {
      title: 'L7',
      path: 'https://l7.antv.vision/zh/docs/api/l7',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/larkmap',
    },
  ]
});
