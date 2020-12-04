<template>
  <div>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Gallery</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <div>
            <v-carousel hide-delimiters height="auto">
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                style="width: 100%"
              >
                <v-row class="fill-height text-right ma-0 ">
                  <v-col cols="12">
                    <v-chip
                      label
                      class="mx-0 mb-2 text-uppercase"
                      color="grey darken-3"
                      text-color="white"
                      small
                      @click.stop=""
                    >
                      Landscape
                    </v-chip>

                    <h3 class="title font-weight-bold mb-2 black--text">
                      Titre
                    </h3>

                    <div class="caption black--text">
                      {{ author }}<br />Date
                    </div>
                  </v-col>
                </v-row></v-carousel-item
              >
            </v-carousel>
          </div>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: 'Henri Vaucher',
      dialog: false,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
