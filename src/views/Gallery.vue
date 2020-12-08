<template>
  <v-container>
    <v-row>
      <v-col
        cols="6"
        class="d-flex align-content-center flex-wrap justify-center"
      >
        <v-icon x-large @click.stop="previousPage()">mdi-arrow-left</v-icon>
      </v-col>
      <v-col
        cols="6"
        class="d-flex align-content-center flex-wrap justify-center"
      >
        <v-icon x-large @click.stop="nextPage()">mdi-arrow-right</v-icon>
      </v-col>
    </v-row>
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
    <v-row>
      <v-col
        cols="6"
        class="d-flex align-content-center flex-wrap justify-center"
      >
        <v-icon x-large @click.stop="previousPage()">mdi-arrow-left</v-icon>
      </v-col>
      <v-col
        cols="6"
        class="d-flex align-content-center flex-wrap justify-center"
      >
        <v-icon x-large @click.stop="nextPage()">mdi-arrow-right</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from '@/store/index.js'
import { mapState } from 'vuex'
import Picture from '@/components/Picture.vue'

function getPictures(routeTo, next) {
  let payload = { pageNumber: 1, pageSize: 6 }
  store.dispatch('picture/fetchPictures', payload).then(() => {
    next()
  })
}

// Si un filtre existe l'appliquer, permet de ne pas relectionner
// le filtre à chaque chargement de la liste des entreprises
function loadData(routeTo, routeFrom, next) {
  getPictures(routeTo, next)
}

export default {
  props: {
    payload: {
      type: Object,
      required: true
    }
  },

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

  methods: {
    previousPage() {
      let payload = { pageNumber: 0, pageSize: 6 }
      let currentPage = this.picture.pagination.CurrentPage
      if (currentPage <= 1) {
        currentPage = this.picture.pagination.TotalPages
      } else {
        currentPage -= 1
      }
      payload.pageNumber = currentPage
      store.dispatch('picture/fetchPictures', payload).then(() => {})
    },
    nextPage() {
      let payload = { pageNumber: 0, pageSize: 6 }
      let currentPage = this.picture.pagination.CurrentPage
      if (currentPage >= this.picture.pagination.TotalPages) {
        currentPage = 1
      } else {
        currentPage += 1
      }
      payload.pageNumber = currentPage
      store.dispatch('picture/fetchPictures', payload).then(() => {})
    }
  }
}
</script>

<style lang="scss" scoped></style>
