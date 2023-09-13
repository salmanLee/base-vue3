import axios, { AxiosInstance } from 'axios'
import loading from './loading'
import { appendUrl } from '@/utils/url'
import { showToast } from 'vant'
import { RES_CODE } from './config'
import { SERVER_CHANNEL } from '@/utils/channel'
import type { AxiosRequestConfig } from 'axios'

interface CoreRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean //增加 showLoading 用户可以在 qlRequest.request({}) 的时候传入showLoading 来决定是否展示 Loading 效果
  showErrorToast?: boolean
}

// 默认展示loading
const DEFAULT_SHOW_LOADING = true
// 默认展示报错
const DEFAULT_SHOW_ERROR_TOAST = true

class CoreRequest {
  instance?: AxiosInstance
  loading?: typeof loading
  showLoading?: boolean
  showErrorToast?: boolean
  constructor(config: CoreRequestConfig) {
    this.instance = axios.create(config)
    this.loading = loading
    this.showLoading = config.showLoading ?? DEFAULT_SHOW_LOADING
    this.showErrorToast = config.showErrorToast ?? DEFAULT_SHOW_ERROR_TOAST

    // 全局请求拦截器
    this.instance.interceptors.request.use((config) => {
      if (this.showLoading) {
        this.loading?.open()
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['Request-Source'] = SERVER_CHANNEL
        if (config.url) config.url = appendUrl(config.url, `_time=${Date.now()}`)
      }
      return config
    })
    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        const data = res.data
        switch (data.resCode) {
          case RES_CODE.SUCCESS:
            return data
          default:
            if (this.showErrorToast && data.msg) showToast(data.msg)
        }
      },
      (err) => {
        console.log('err', err)
        this.loading?.close()
        if (err.code === 'ECONNABORTED') {
          showToast('访问超时')
        } else
          switch (err.response?.status) {
            case 429:
              showToast('操作过于频繁')
              break
          }
        return err
      }
    )
  }

  request<T>(config: CoreRequestConfig): Promise<T> {
    return new Promise((reslove, reject) => {
      // 根据配置开关自定义内容
      if (config.showLoading === false) this.showLoading = false
      if (config.showErrorToast === false) this.showErrorToast = false
      this.instance
        ?.request<any, T>(config)
        .then((res) => {
          reslove(res)
          // 恢复默认值,不然下一次请求一直false
          this.resetCustomOptionDefault()
        })
        .catch((err) => {
          // 恢复默认值,不然下一次请求一直false
          this.resetCustomOptionDefault()
          reject(err)
        })
    })
  }

  private resetCustomOptionDefault() {
    this.showLoading = DEFAULT_SHOW_LOADING
    this.showErrorToast = DEFAULT_SHOW_ERROR_TOAST
  }
}

export default CoreRequest
