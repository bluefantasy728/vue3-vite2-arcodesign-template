import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import ViteComponents from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
    ViteComponents(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      component: path.resolve(__dirname, 'src/components'),
      vue: 'vue/dist/vue.esm-bundler.js', // 定义vue的别名，如果使用其他的插件，可能会用到别名
    },
  },
  server: {
    port: 3002,
    open: true,
    // proxy: { // 代理配置
    //   '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/'
    // },
  },
});
