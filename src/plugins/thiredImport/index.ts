import Config from './config'

function core(url: string) {
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', url)
  document.getElementsByTagName('head')[0].appendChild(script)
}

// 支付宝小程序内判断方法
const inAlipayEnv = (): boolean => navigator.userAgent.indexOf('AliApp') > -1
// 百度小程序内判断方法
const inBaiduEnv = (): boolean =>
  /swan\//.test(window.navigator.userAgent) || /^webswan-/.test(window.name)
// 微信小程序内 or 微信公众号内
const inWechatEnv = (): boolean => navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1

function setup() {
  if (inAlipayEnv()) {
    console.log('支付宝环境内')
    core(Config.alipay)
  }
  if (inBaiduEnv()) {
    console.log('百度环境内')
    core(Config.baidu)
  }
  if (inWechatEnv()) {
    console.log('微信环境内')
    core(Config.wechat)
  }
}

// 执行代码
setup()
