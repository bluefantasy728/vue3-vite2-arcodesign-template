// MODE是在package.json里脚本定义的 --mode 的值
const MODE = import.meta.env.MODE || 'prod';

const configs = {
  dev: {
    // baseUrl: 'https://uat.zeropartner.com/',
    baseUrl: 'https://serviceapp.sunny-sh.com/agency_order_uat/',
    baseUrl: 'http://localhost:3888',
  },
  uat: {
    baseUrl: 'https://serviceapp.sunny-sh.com/agency_order_uat/',
  },
  prod: {
    baseUrl: 'https://serviceapp.sunny-sh.com/agency_order_uat/',
  },
};

const config = configs[MODE];

export default config;
