import pxtorem from 'postcss-pxtorem';

export default {
  npmClient: 'yarn',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: '@/pages/home' },
    { path: '/login', component: '@/pages/login' },
    { path: '/questions', component: '@/pages/questions' },
    { path: '/products', component: '@/pages/products' },
    {
      path: '*',
      redirect: '/404',
    },
    {
      path: '/404',
      component: '@/pages/404',
    },
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 16, // 根据设计稿设置
      propList: ['*'],
    }),
  ],
  links: [{ rel: 'icon', href: '/favicon.ico' }],
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss', '@umijs/plugins/dist/model'],
  model: {},
  lessLoader: {
    modifyVars: {
      hack: 'true; @import "@/common/css/global.less";',
    },
  },
  // 其他配置选项
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
