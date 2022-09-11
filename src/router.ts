import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
})

// Desktop routes
router.addRoute({
  name: 'desktop',
  path: '/desktop',
  alias: ['/'],
  redirect: { name: 'desktop-index' },
  children: [
    // Index
    {
      name: 'desktop-index',
      path: 'index',
      component: () => import('./view/desktop/index.vue'),
    },
  ],
})

// 404
router.addRoute({
  path: '/:fallback(.*)',
  redirect: { name: 'desktop', query: { fallback: '404' } },
})
