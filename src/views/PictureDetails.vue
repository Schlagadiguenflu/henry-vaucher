<!-- 
  -- Projet: Henri Vaucher
  -- Auteur : Tim Allemann
  -- Date : 07.12.2020
  -- Description : Page de détails d'une peinture
  -- Fichier : PictureDetails.vue
  -->

<template>
  <v-container>
    <v-row>
      <v-col
        cols="6"
        md="1"
        order="1"
        order-md="1"
        class="d-flex align-content-center flex-wrap justify-center"
      >
        <v-icon x-large @click.stop="previousPicture(picture.picture.pictureId)"
          >mdi-arrow-left</v-icon
        >
      </v-col>
      <v-col
        cols="12"
        md="10"
        order="3"
        order-md="2"
        class="d-flex align-content-center flex-wrap"
      >
        <Picture :picture="picture.picture" :height="650" />
      </v-col>
      <v-col
        cols="6"
        md="1"
        order="2"
        order-md="3"
        class="d-flex align-content-center flex-wrap justify-center"
      >
        <v-icon x-large @click.stop="nextPicture(picture.picture.pictureId)"
          >mdi-arrow-right</v-icon
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from '@/store/index.js'
import { mapState } from 'vuex'
import Picture from '@/components/Picture.vue'

function loadData(routeTo, routeFrom, next) {
  store.dispatch('picture/fetchPicture', routeTo.params.id).then(() => {
    next()
  })
}

export default {
  beforeRouteEnter(routeTo, routeFrom, next) {
    loadData(routeTo, routeFrom, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    loadData(routeTo, routeFrom, next)
  },

  components: {
    Picture
  },
  computed: {
    ...mapState(['picture'])
  },
  methods: {
    previousPicture(id) {
      store.dispatch('picture/fetchPicturePrevious', id).then(response => {
        this.$router.push({
          name: 'Picture-Details',
          params: { id: response.pictureId, picture: response }
        })
      })
    },
    nextPicture(id) {
      store.dispatch('picture/fetchPictureNext', id).then(response => {
        this.$router.push({
          name: 'Picture-Details',
          params: { id: response.pictureId, picture: response }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
