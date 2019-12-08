import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
<<<<<<< HEAD
import Register from '../views/Register.vue'
=======
import Dashboard from '../views/Dashboard.vue'
>>>>>>> a27e93e202954bd88e975e5c616af77930efd15b

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
<<<<<<< HEAD
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
=======
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
>>>>>>> a27e93e202954bd88e975e5c616af77930efd15b
  }
  // {
  //  path: '/about',
  //  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
