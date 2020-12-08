import Vue from 'vue'
import VueRouter from 'vue-router'
import Callback from '../views/Callback'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import PictureDetails from '../views/PictureDetails.vue'
import NotFound from '../views/NotFound.vue'
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
    path: '/gallerie',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/peinture/details/:id',
    name: 'Picture-Details',
    component: PictureDetails,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('picture/fetchPicture', routeTo.params.id)
        .then(picture => {
          if (picture == undefined) {
            next({ name: '404', params: { resource: 'peinture' } })
          }
          routeTo.params.picture = picture
          next()
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            next({ name: '404', params: { resource: 'peinture' } })
          } else {
            next(routeFrom)
          }
        })
    }
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
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
