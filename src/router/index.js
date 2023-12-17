import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsPage.vue'),
    children: [
      {
        path: '/selector',
        name: 'selector',
        components: {
          filter: () => import('../components/ProductsFilter.vue'),
          default: () => import('../components/ProductsList.vue'),
        },
      },
      {
        path: '/editor',
        name: 'editor',
        component: () => import('../components/ProductsEditor.vue'),
      },
    ],
  },
  {
    path: '/suppliers',
    name: 'suppliers',
    component: () => import('../views/SuppliersPage.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsPage.vue'),
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('../views/ShoppingRules.vue'),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
