import fetch from '@/utils/fetch';
import { signature } from '@/utils/signature';
import sha1 from 'js-sha1';
const jsonType = {
  'Content-Type': 'application/json; charset=UTF-8',
};
// 获取用户信息
export function login(data: any) {
  return fetch({
    url: '/qzd-bff-operation/qzd/v1/account/login',
    method: 'post',
    headers: {
      signature: sha1([data.account, data.password, data.time].sort().join('')),
      ...jsonType,
    },
    data,
  });
}

// 登出
export function logout(data: any) {
  return fetch({
    url: '/qzd-bff-operation/qzd/v1/account/logout',
    method: 'post',
    headers: jsonType,
    data,
  });
}

// 获取用户信息
export function getUserInfo() {
  return fetch({
    url: '/qzd-bff-operation/qzd/v1/account/index',
    method: 'post',
    headers: jsonType,
  });
}
