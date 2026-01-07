import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '某电子的 Altria 的部落格',
  description: '欢迎来到 Altria 的部落格，分享技术、生活与思考',

  theme: defaultTheme({
    logo: '/logo.svg',

    navbar: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '关于', link: '/get-started.html' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          children: [
            '/posts/README.md',
            '/posts/如何在家打造自己的多媒体影视墙.md',
            '/posts/家用路由器组网指南.md',
          ],
        },
      ],
    },

    // 启用暗色模式
    colorMode: 'auto',
    colorModeSwitch: true,
  }),

  bundler: viteBundler(),
})
