import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// URLにアクセスしたときに、どのページやコンポーネントを表示するかを決定する仕組み(Router)の設定を行う
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/JinseiClub',
    name: 'JinseiClub',
    component: () => import('../views/JinseiClub.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
