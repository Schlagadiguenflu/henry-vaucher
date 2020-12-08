<!-- 
  -- Projet: Henri Vaucher
  -- Auteur : Tim Allemann
  -- Date : 06.12.2020
  -- Description : Composant pour une peinture
  -- Fichier : EditContact.vue
  -->

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          :lazy-src="require(`@/assets/paintings/giphy.gif`)"
          :src="require(`@/assets/paintings/` + picture.file + `.jpg`)"
          contain
          :maxHeight="height"
          @click.stop="goToPictureDetails()"
        >
        </v-img>
        <v-row class="text-center">
          <v-col cols="12">
            <h3 class="title font-weight-bold mb-2" text-color="white">
              {{ picture.title }}
            </h3>
            <div class="caption mb-2">{{ picture.date }}</div>
            <div class="caption">{{ picture.support }}</div>
            <div class="caption">
              {{ picture.height }} cm x {{ picture.width }} cm
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    picture: {
      type: Object,
      required: true
    },
    height: {
      type: Number,
      default: 350
    }
  },
  data: () => ({}),
  methods: {
    goToPictureDetails() {
      this.$router.push({
        name: 'Picture-Details',
        params: { id: this.picture.pictureId }
      })
    }
  }
}
</script>
