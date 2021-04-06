
const routes = [
  {
    path: '/',
    component: () => import('layouts/myLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Tabs.vue') }
    ]
  },

  {
    path: '/inicio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
