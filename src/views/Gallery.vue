<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-container class="max-width">
          <v-pagination
            v-model="currentPage"
            class="my-4"
            :length="picture.pagination.TotalPages"
            @input="inputPage()"
            @previous="previousPage()"
            @next="nextPage()"
            @keyup.right="nextPage()"
          ></v-pagination>
        </v-container>
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
    <v-row justify="center">
      <v-col cols="12">
        <v-container class="max-width">
          <v-pagination
            v-model="currentPage"
            class="my-4"
            :length="picture.pagination.TotalPages"
            @input="inputPage()"
            @previous="previousPage()"
            @next="nextPage()"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from '@/store/index.js'
import { mapState } from 'vuex'
import Picture from '@/components/Picture.vue'

function loadData(routeTo, routeFrom, next) {
  let payload = {
    pageNumber: routeTo.params.pageNumber,
    pageSize: routeTo.params.pageSize
  }
  store.dispatch('picture/fetchPictures', payload).then(() => {
    next()
  })
}

export default {
  name: 'Galerie',
  metaInfo: {
    title: 'Galerie',
    // override the parent template and just use the above title only
    titleTemplate: null,
    meta: [
      {
        name: 'description',
        content: "Visitez la galerie virtuelle d'Henri Vaucher"
      },
      {
        property: 'og:title',
        content: 'Galerie virtuelle'
      },
      { property: 'og:site_name', content: 'Henry Vaucher' },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index,follow' }
    ]
  },

  beforeRouteEnter(routeTo, routeFrom, next) {
    loadData(routeTo, routeFrom, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    loadData(routeTo, routeFrom, next)
  },
  beforeMount() {
    window.addEventListener('keydown', this.handleKeydown, null)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
  },

  components: { Picture },

  data: () => ({ payload: { pageNumber: 0, pageSize: 6 }, currentPage: 1 }),

  computed: {
    ...mapState(['picture'])
  },

  methods: {
    inputPage() {
      this.payload.pageNumber = this.currentPage
      store.dispatch('picture/fetchPictures', this.payload).then(() => {
        this.$router.push({
          name: 'Gallery',
          params: {
            pageNumber: this.payload.pageNumber,
            pageSize: this.payload.pageSize
          }
        })
      })
    },
    previousPage() {
      this.currentPage = this.picture.pagination.CurrentPage
      if (this.currentPage <= 1) {
        this.currentPage = this.picture.pagination.TotalPages
      } else {
        this.currentPage -= 1
      }
      this.payload.pageNumber = this.currentPage
      store.dispatch('picture/fetchPictures', this.payload).then(() => {
        this.$router.push({
          name: 'Gallery',
          params: {
            pageNumber: this.payload.pageNumber,
            pageSize: this.payload.pageSize
          }
        })
      })
    },
    nextPage() {
      this.currentPage = this.picture.pagination.CurrentPage
      if (this.currentPage >= this.picture.pagination.TotalPages) {
        this.currentPage = 1
      } else {
        this.currentPage += 1
      }
      this.payload.pageNumber = this.currentPage
      store.dispatch('picture/fetchPictures', this.payload).then(() => {
        this.$router.push({
          name: 'Gallery',
          params: {
            pageNumber: this.payload.pageNumber,
            pageSize: this.payload.pageSize
          }
        })
      })
    },
    handleKeydown(e) {
      switch (e.keyCode) {
        case 37:
          this.previousPage()
          break
        case 39:
          this.nextPage()
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
