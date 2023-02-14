import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<any> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/tabmain/TabMain.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/AppHome.vue')
      },
      {
        path: '/classify',
        component: () => import('@/views/classify/AppClassify.vue')
      },
      {
        path: '/car',
        component: () => import('@/views/car/AppCar.vue')
      },
      {
        path: '/mine',
        component: () => import('@/views/mine/AppMine.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
