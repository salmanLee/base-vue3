/**
 * 拼接url
 * @param {*} url
 * @param {*} str
 */
export const appendUrl = (url: string, str: string) =>
  `${url}${url.indexOf('?') > -1 ? '&' : '?'}${str}`
