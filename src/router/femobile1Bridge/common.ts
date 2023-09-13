import routes from './config'
import { CHANNEL } from '@/utils/channel'

export type RouteNameType = (typeof routes)[number]['name']

export function getUrl(routename: RouteNameType) {
  const path = routes.find((item) => item.name === routename)?.['path']
  if (path) return withHost(path)
  return null
}

export function withHost(path: string) {
  const test = 'https://www.baidu.com'
  const prod = 'https://www.baidu.com'
  // const test = 'localhost:xxxx' // 如果需要测试跳本地起的femobile1可以这么加
  const host = import.meta.env.MODE === 'production' ? prod : test
  // const host = import.meta.env.MODE === 'development' ? prod : test // 外网测试用代码
  return `${host}/${CHANNEL}${path}`
}
