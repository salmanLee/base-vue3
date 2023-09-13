import { getUrl, RouteNameType } from './common'

export default class Bridge {
  push(routename: RouteNameType) {
    console.log('Bridge push routename', routename)
    const href = getUrl(routename)
    if (href) location.href = href
    else console.error('Bridge push 路径找不到')
  }
  replace(routename: RouteNameType) {
    console.log('Bridge replace routename', routename)
    const href = getUrl(routename)
    if (href) location.replace(href)
    else console.error('Bridge replace 路径找不到')
  }
}
