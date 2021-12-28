import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
// import store from './store';
import storage from 'store';
import plugin from './plugins';
import config from './config';
import axios from './request';
import mixin from './mixin';
import mitt from 'mitt';
import './scss/global.scss';
import './scss/element.scss';

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

app.use(ElementPlus).use(router).use(plugin).mount('#app');
