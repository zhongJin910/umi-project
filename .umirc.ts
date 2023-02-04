import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: { name: 'umi react', flatMenu: true },
  routes,
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://app-test-lan.qizhidao.com', //添加需要跨域的地址
      pathRewrite: { '^/api': '' }, //会删除掉api1
      changeOrigin: true,
    },
  },
  // dva: {
  //   immer: true, // 是否启用 immer 以方便修改 reducer
  //   hmr: false // 是否启用 dva model 的热更新
  // }
});
