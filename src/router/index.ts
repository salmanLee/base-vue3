import type { App } from 'vue'
import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import config from './routes'
// import { local, KEYS } from '@/utils/storage'
import { isLegalChannel } from '@/utils/channel'
import { showDialog } from 'vant'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useSystemStore, FontsizeModeEnum } from '@/store/modules/system'

Nprogress.configure({ showSpinner: false })

// 根目录
const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'root',
  redirect: '/home'
}

// 404页面
const notFoundPage: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: '404',
  component: () => import('@/views/common/404Page.vue')
}

const routes = [rootRoute, ...config, notFoundPage]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * 渠道卫兵
 */
function channelGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const toChannel = to?.query?.pathchannel
  const fromChannel = from?.query?.pathchannel
  const _isLegalChannel = function (channel: any) {
    return channel && typeof channel === 'string' && isLegalChannel(channel)
  }
  if (_isLegalChannel(toChannel)) {
    // 目标地址带有渠道参数，通过
    next()
  } else if (_isLegalChannel(fromChannel) && !_isLegalChannel(toChannel)) {
    // 目标地址不带渠道参数，但是上一页面带有渠道参数，重定向到赋予渠道参数的路由
    const query = { pathchannel: fromChannel }
    const newRoute = { ...to, query: { ...to.query, ...query } }
    next(newRoute)
  } else {
    // 当前路由和来源路由都没有渠道参数
    showDialog({
      title: '渠道非法',
      message: '无合法的渠道参数'
    })
  }
}

/**
 * 关怀版卫兵
 */
function fontsizeModeGuard(
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const systemStore = useSystemStore()
  const toFontsizeMode = to?.query?.fontsizeMode
  if (typeof toFontsizeMode === 'string' && toFontsizeMode in FontsizeModeEnum) {
    systemStore.changeFontsizeMode(toFontsizeMode as FontsizeModeEnum)
  }
  next()
}

router.beforeEach((to, from, next) => {
  Nprogress.start()
  console.log('router from ,router to:', from, to)
  channelGuard(to, from, next)
  fontsizeModeGuard(to, from, next)
})

router.afterEach(() => {
  Nprogress.done()
})

/**
 * 路由初始化函数
 * @param app
 */
export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
