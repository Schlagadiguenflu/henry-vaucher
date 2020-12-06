import Vue from 'vue'
import Vuex from 'vuex'
import * as settings from '@/store/modules/settings.js'
import * as notification from '@/store/modules/notification.js'
import * as authentification from '@/store/modules/authentification.js'
import * as format from '@/store/modules/format.js'
import * as picture from '@/store/modules/picture.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    settings,
    notification,
    authentification,
    format,
    picture
  }
})
