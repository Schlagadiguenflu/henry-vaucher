import Vue from 'vue'
import VueRouter from 'vue-router'
import Callback from '../views/Callback'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Vérification de connexion de l'utilisateur, utile surtout si l'utilisateur rafraichit la page
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.authentification.user) {
      await store
        .dispatch('authentification/authenticate', to.path)
        .then(() => {})
    }
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
