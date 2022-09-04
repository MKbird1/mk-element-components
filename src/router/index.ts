import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/first.vue'),
      },
      {
        path: '/chooseArea',
        component: () => import('../views/useChooseArea.vue'),
      },
      {
        path: '/trend',
        component: () => import('../views/useTrend.vue'),
      },
      {
        path: '/chooseTime',
        component: () => import('../views/useChooseTime.vue'),
      },
      {
        path: '/chooseDate',
        component: () => import('../views/useChooseDate.vue'),
      },
      {
        path: '/notification',
        component: () => import('../views/useNotification.vue'),
      },
      {
        path: '/menu',
        component: () => import('../views/first.vue'),
      },
      {
        path: '/chooseCity',
        component: () => import('../views/useChooseCity.vue'),
      },
      {
        path: '/progress',
        component: () => import('../views/useProgress.vue'),
      },
      {
        path: '/calendar',
        component: () => import('../views/useCalendar.vue'),
      },
      {
        path: '/form',
        component: () => import('../views/useForm.vue'),
      },
      {
        path: '/modalForm',
        component: () => import('../views/useModalForm.vue'),
      },
      {
        path: '/table',
        component: () => import('../views/useTable.vue'),
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
