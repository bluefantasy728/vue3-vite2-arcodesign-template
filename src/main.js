import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import router from './router';
import storage from 'store';
import piniaPlugin from './plugins/pinia';
import config from './config';
import axios from './request';
import mixin from './mixin';
import mitt from 'mitt';
import './scss/global.scss';
import '@arco-design/web-vue/dist/arco.less';

const app = createApp(App);
mixin(app);

app.config.globalProperties = {
  ...app.config.globalProperties,
  $config: config,
  $axios: axios,
  $storage: storage,
  $emitter: mitt(),
};
// app.config.globalProperties.$config = config;
// app.config.globalProperties.$axios = axios;
// app.config.globalProperties.$storage = storage;

// 自动注册全局组件
// const components = import.meta.globEager('./components/**/*.vue');
// // console.log(components);
// Object.keys(components).forEach(c => {
//   const component = components[c]?.default;
//   app.component(component.name, component);
// });
app.use(ArcoVue, {
  componentPrefix: 'a',
});

app.use(router).use(piniaPlugin).mount('#app');
