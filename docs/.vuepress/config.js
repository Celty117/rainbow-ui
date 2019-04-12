module.exports = {
  base: '/rainbow-ui/',
  title: 'Rainbow UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '欢迎 Star', link: 'https://github.com/Celty117/rainbow-ui' },
      { text: 'Github', link: 'https://github.com/Celty117' },
    ],
    sidebar: [
      {
        title: '介绍',
        children: [
          '/introduce/',
        ]
      },
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
        ]
      },

    ]
  }
} 