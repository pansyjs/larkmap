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
  headScripts: [
    `
      window._AMapSecurityConfig = {
        securityJsCode: "338ed07e4489885651592bcf04ba47ed",
      };
    `
  ],
  hash: true,
})
