import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: { name: 'umi react' },
  routes,
  fastRefresh: {},
});
