import axios from 'axios';
import { getLocalStorage } from '@/utils/auth';
import { signature } from '@/utils/signature.js';

let service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 180000, // 请求超时时间
  withCredentials: true,
});

service.interceptors.request.use(
  (config: any) => {
    // 发送网络请求时, 在界面的中间位置显示Loading的组件,使用ant-design插件，这里不再赘述
    //请求携带的信息
    if (getLocalStorage('token')) {
      config.headers['accessToken'] = getLocalStorage('token');
      config.headers['signature'] = signature(
        getLocalStorage('token'),
        getLocalStorage('paramSig'),
      );
    }
    return config;
  },
  (err) => {
    //...关闭加载loading的组件，显示消息提示弹窗
    return err;
  },
);

service.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误信息');
      }
    }
    return err;
  },
);

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}

export default service;
