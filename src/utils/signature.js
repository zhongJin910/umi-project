import md5 from 'js-md5';

/** 随机生成固定位数或者一定范围内的字符串数字组合
 * @param {Number} min 范围最小值
 * @param {Number} max 范围最大值，当不传递时表示生成指定位数的组合
 * @param {String} charStr指定的字符串中生成组合
 * @returns {String} 返回字符串结果
 * */

export function randomRange(min, max, charStr) {
  let returnStr = '';
  let range = '';
  if (typeof min === 'undefined') min = 6;
  if (typeof max === 'string') charStr = max;
  range =
    max && typeof max === 'number'
      ? Math.round(Math.random() * (max - min)) + min
      : min;
  charStr =
    charStr || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < range; i++) {
    let index = Math.round(Math.random() * (charStr.length - 1));
    returnStr += charStr.substring(index, index + 1);
  }
  return returnStr;
}
/**
 *步骤：
 *  1，用户登录，
 *     得到accessToken（当前登录Token）和paramSig（用户参数签名公钥）
 *  2，请求接口
 *    （1）APP随机生成6位字符串param
 *    （2）paramMd5=MD5加密param
 *    （3）生成加密秘钥：let sig = MD5(paramMd5+accessToken+paramSig)
 *    （4）生成当前接口传输私钥：signature=sig+'.'+param
 * @export
 * @param {String} accessToken
 * @param {String} paramSig
 */
export function signature(accessToken, paramSig) {
  let _signature = '';
  let param = randomRange();
  let paramMd5 = md5(param);
  let sig = md5(paramMd5 + accessToken + paramSig);
  _signature = sig + '.' + param;
  return _signature;
}
