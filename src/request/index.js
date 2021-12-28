import axios from 'axios';
import { ElLoading, ElMessage } from 'element-plus';
import store from 'store';
import router from '../router';
import config from '../config';

const http = axios.create({
  baseURL: config.baseUrl,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json;' },
});

let loading;
let timeout;
let msg;
let cfg;
let isRoot; // 特殊接口需要配置是否要拿返回的最外层数据
const delay = 200;

http.interceptors.request.use(
  config => {
    console.log(config);
    cfg = config;
    isRoot = config.headers.isRoot;
    const token = store.get('token');
    const userInfo = store.get('userInfo');
    const sid = store.get('sid');
    if (token && config.url !== 'login') {
      config.headers.token = token;
    }

    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    timeout = setTimeout(() => {
      loading = ElLoading.service({
        fullscreen: true,
        text: '请求中...',
      });
    }, delay);

    delete config.headers.isRoot;

    // config.headers['ZPHPSID'] = sid.value;
    // if (userInfo) {
    //   config.headers['ZPHPUID'] = userInfo.userId;
    // }
    // config.headers['ZPHPPID'] = '1620879139';
    // config.headers['ZPHPURL'] = '';

    return config;
  },
  err => Promise.reject(err),
);

http.interceptors.response.use(
  response => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    if (loading) {
      loading.close();
    }

    let ret = response.data;
    if (ret instanceof Blob) {
      return ret;
    }
    if (response.data.status != 200) {
      ElMessage({
        message: ret.msg,
        type: 'error',
      });
      try {
        ret.fail = true;
      } catch (error) {}

      return ret;
    }

    if (isRoot) {
      return ret;
    } else {
      return ret.data;
    }
  },
  err => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    if (loading) {
      loading.close();
    }

    if (err.message.includes('timeout')) {
      ElMessage({
        message: '请求超时, 请检查网络',
        type: 'error',
      });
      return {
        fail: true,
      };
    }
    // if (err.response.status === 403) {
    //   if (!msg) {
    //     msg = ElMessage({
    //       // message: '登录失效，请重新登录',
    //       message: err.response.data.msg,
    //       type: 'error',
    //     });
    //   }
    //   return router.push('/login');
    // }

    // if (err.response.status !== 200) {
    //   // console.log(err.response);
    //   ElMessage({
    //     message: err.response.data.msg,
    //     type: 'error',
    //   });
    //   return Promise.reject(err.response);
    //   return Promise.reject(err.response.data.msg);
    // }
    return Promise.reject(err);
  },
);

export default http;
