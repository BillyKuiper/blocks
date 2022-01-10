import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Contact.vue')}
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue')}
  },
  {
    path: '/products',
    name: 'Products',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Product.vue')}
  },
  {
    path: '/productsdetail',
    name: 'Product Overview',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue')},
    props: true
  },
  {
    path: '/shoppingcart',
    name: 'Shoppingcart',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ShoppingCart.vue')},
    props: true
  },
  {
    path: '/orderoverview',
    name: 'Order Overview',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/OrderOverview.vue')},
    props: true
  },
  {
    path: '/ordersuccess',
    name: 'Order Success',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/OrderSuccess.vue')},
    props: true
  },
  {
    path: '/myorders',
    name: 'Personal Orders',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MyOrder.vue')},
    props: true
  },
  {
    path: '/changepassword',
    name: 'Change Password',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ChangePassword.vue')},
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
