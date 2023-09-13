import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/test/HomePage.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/test/DetailPage.vue')
  },
  {
    path: '/logined',
    name: 'logined',
    component: () => import('@/views/test/NeedLoginPage.vue')
  }
]

export default routes
