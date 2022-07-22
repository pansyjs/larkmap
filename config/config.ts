import path from 'path';
import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'LarkMap',
  alias: {
    '@': path.join(__dirname, '../src')
  },
  outputPath: 'docs-dist',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  hash: true,
  resolve: {
    includes: ['docs']
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/lark-map',
    },
  ]
});
