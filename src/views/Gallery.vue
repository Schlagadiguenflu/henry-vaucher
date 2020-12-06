<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(picture, i) in picture.pictures"
        :key="i"
        cols="12"
        md="4"
        class="d-flex align-content-space-around flex-wrap"
      >
        <Picture :picture="picture" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from '@/store/index.js'
import { mapState } from 'vuex'
import Picture from '@/components/Picture.vue'

function getPictures(routeTo, next) {
  store.dispatch('picture/fetchPictures', true).then(() => {
    next()
  })
}

// Si un filtre existe l'appliquer, permet de ne pas relectionner
// le filtre à chaque chargement de la liste des entreprises
function loadData(routeTo, routeFrom, next) {
  getPictures(routeTo, next)
}

export default {
  components: { Picture },

  data: () => ({}),

  beforeRouteEnter(routeTo, routeFrom, next) {
    loadData(routeTo, routeFrom, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    loadData(routeTo, routeFrom, next)
  },

  computed: {
    ...mapState(['picture'])
  },

  methods: {}
}
</script>

<style lang="scss" scoped></style>
