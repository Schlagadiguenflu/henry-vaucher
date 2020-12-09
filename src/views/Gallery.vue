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
  beforeRouteEnter(routeTo, routeFrom, next) {
    loadData(routeTo, routeFrom, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    loadData(routeTo, routeFrom, next)
  },

  components: { Picture },

  data: () => ({ payload: { pageNumber: 0, pageSize: 6 } }),

  computed: {
    ...mapState(['picture'])
  },

  methods: {
    previousPage() {
      let currentPage = this.picture.pagination.CurrentPage
      if (currentPage <= 1) {
        currentPage = this.picture.pagination.TotalPages
      } else {
        currentPage -= 1
      }
      this.payload.pageNumber = currentPage
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
      let currentPage = this.picture.pagination.CurrentPage
      if (currentPage >= this.picture.pagination.TotalPages) {
        currentPage = 1
      } else {
        currentPage += 1
      }
      this.payload.pageNumber = currentPage
      store.dispatch('picture/fetchPictures', this.payload).then(() => {
        this.$router.push({
          name: 'Gallery',
          params: {
            pageNumber: this.payload.pageNumber,
            pageSize: this.payload.pageSize
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
