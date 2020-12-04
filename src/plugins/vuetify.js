import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import fr from 'vuetify/es5/locale/fr'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#8a002c',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#ffa007'
      },
      dark: {
        primary: '#8a002c',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#ffa007'
      }
    }
  },
  lang: {
    locales: { fr },
    current: 'fr'
  }
})
