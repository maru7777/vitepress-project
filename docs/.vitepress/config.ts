import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Doc',
  description: 'A VitePress site',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'My VitePress Site',
      description: 'A VitePress site',
    },
    zh: {
      label: '中文',
      lang: 'zh',
      title: '我的 VitePress 站点',
      description: '一个 VitePress 站点',
    },
  },
  themeConfig: {
    // outline: false,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate'
                }
              }
            }
          },
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有找到结果',
                resetButtonTitle: '重置搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    locales: {
      root: {
        nav: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Text Generation', link: '/text-generation/' },
          { text: 'Image Generation', link: '/image-generation/' }
        ],
      },
      zh: {
        nav: [
          { text: '简介', link: '/zh/introduction' },
          { text: '文本生成', link: '/zh/text-generation/' },
          { text: '图像生成', link: '/zh/image-generation/' }
        ],
      }
    },
    sidebar: {
      '/': [
        {
          text: 'Guide',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/introduction' },
          ],
        },
        {
          text: 'Text Generation',
          collapsed: true,
          items: [
            {
              text: 'OpenAI',
              items: [
                { text: 'GPT-4', link: '/text-generation/openai/gpt4' }
              ]
            },
            {
              text: 'Anthropic',
              items: [
                { text: 'Claude 3.7', link: '/text-generation/anthropic/claude37' }
              ]
            }
          ]
        },
        {
          text: 'Image Generation',
          collapsed: true,
          items: [
            {
              text: 'Alibaba',
              items: [
                { text: 'Wanx', link: '/image-generation/alibaba/wanx' }
              ]
            },
            {
              text: 'Tencent',
              items: [
                { text: 'Hunyuan', link: '/image-generation/tencent/hunyuan' }
              ]
            }
          ]
        }
      ],
      '/zh/': [
        {
          text: '指南',
          collapsed: true,
          items: [
            { text: '简介', link: '/zh/introduction' },
          ],
        },
        {
          text: '文本生成',
          collapsed: true,
          items: [
            {
              text: 'OpenAI',
              items: [
                { text: 'GPT-4', link: '/zh/text-generation/openai/gpt4' }
              ]
            },
            {
              text: 'Anthropic',
              items: [
                { text: 'Claude 3.7', link: '/zh/text-generation/anthropic/claude37' }
              ]
            }
          ]
        },
        {
          text: '图像生成',
          collapsed: true,
          items: [
            {
              text: '阿里',
              items: [
                { text: 'Wanx', link: '/zh/image-generation/alibaba/wanx' }
              ]
            },
            {
              text: '腾讯',
              items: [
                { text: 'Hunyuan', link: '/zh/image-generation/tencent/hunyuan' }
              ]
            }
          ]
        }
      ],
    },
    localeLinks: {
      text: 'Language',
      items: [
        { text: 'English', link: '/' },
        { text: '中文', link: '/zh/' },
      ],
    }, 
  },
  // 添加自定义 CSS 隐藏左上角标题
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],
})
