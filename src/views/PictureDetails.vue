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
      <v-col class="d-flex align-content-center flex-wrap justify-center">
        <v-btn v-if="!picture.diaporama" @click="setDiaporama()">Démarrer le diaporama</v-btn>
        <v-btn v-else @click="setDiaporama()">Arrêter le diaporama</v-btn>
      </v-col>
    </v-row>
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
        <Picture :picture="picture.picture" :height="getHeightScreen()" />
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
  name: 'Peinture',
  metaInfo() {
    return {
      title: `${this.picture.picture.title} - Henri Vaucher`,
      // override the parent template and just use the above title only
      titleTemplate: null,
      meta: [
        {
          name: 'description',
          content: "Visitez la galerie virtuelle d'Henri Vaucher"
        },
        {
          property: 'og:title',
          content: `${this.picture.picture.title} - Henri Vaucher`
        },
        { property: 'og:site_name', content: 'Henry Vaucher' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' }
      ],
      diaporama: false
    }
  },

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
  updated() {
    if (this.picture.diaporama){
      setTimeout(() => { 
        this.nextPicture(this.picture.picture.pictureId)
      }, 5000)
    }   
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
    },
    getHeightScreen(){
      return window.screen.height - 300
    },
    setDiaporama(){
      store.dispatch('picture/setDiaporama', !this.picture.diaporama).then(() => {
        this.nextPicture(this.picture.picture.pictureId)   
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
