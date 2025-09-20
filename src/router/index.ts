import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/sign-in-page.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/layouts/auth-layout.vue'),
    children: [
      {
        path: '/auth/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/dashboard-page.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
