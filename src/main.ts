import { createApp } from 'vue'
import './style/style.css'
import './style/config.less'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import './plugins/vantCss'
import './plugins/thiredImport'
import VConsole from 'vconsole'

const bootstrap = () => {
  new VConsole()
  const app = createApp(App)
  // 安装路由
  setupRouter(app)
  // 安装store
  setupStore(app)
  app.mount('#app')
}
// 启动初始化
bootstrap()
