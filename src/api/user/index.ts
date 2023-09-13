import { http } from '@/utils/http'

// api枚举
enum Api {
  Login = '/mobile/login',
  Logined = 'mobile/product/doc/refer/switch'
}

/**
 * 登录
 */
export const accountLogin = () => {
  return http.request({
    url: Api.Login,
    method: 'POST'
  })
}

export const accountLoginNoLoading = () => {
  return http.request({
    url: Api.Login,
    method: 'POST',
    showLoading: false
  })
}

/**
 * 测试无授权跳转登录页
 */
export const testLogined = () => {
  return http.request({
    url: Api.Logined
  })
}
