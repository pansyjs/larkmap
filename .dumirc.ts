import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['/logo.svg'],
  themeConfig: {
    name: 'LarkMap',
    logo: '/logo.svg',
    socialLinks: {
      github: 'https://github.com/pansyjs/larkmap'
    },
  },
  hash: true,
})
