<!-- 
  -- Projet: Nnamella client
  -- Auteur : Tim Allemann
  -- Date : 16.09.2020
  -- Description : Page d'accueil de l'application
  -- Fichier : Home.vue
  -->

<template>
  <div>
    <Carrousel ref="gallery" />
    <section>
      <v-container>
        <v-row>
          <v-col cols="12">
            <slot />
          </v-col>

          <v-col cols="12">
            <v-card color="grey lighten-1" dark href="#!">
              <v-img
                :src="require(`@/assets/paintings/h-vaucher-50-64cm-1921.jpg`)"
                :maxHeight="600"
                :position="'bottom, bottom'"
                gradient="rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)"
              >
                <v-row class="fill-height pa-3" align="center">
                  <v-col cols="12" md="7" offset-md="5">
                    <h1 class="display-3 font-weight-light">
                      The Art Of Painting
                    </h1>

                    <div class="subheading text-uppercase pl-2 mb-4">
                      A painter and his stories
                    </div>

                    <v-btn
                      depressed
                      light
                      class="mr-2"
                      @click="$vuetify.goTo('#about-me')"
                    >
                      Read more
                    </v-btn>
                    <v-btn depressed color="primary" @click="openGallery()">
                      Gallery
                    </v-btn>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="about-me">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" order="2" order-md="1">
            <v-img :src="require(`@/assets/avatar.jpg`)" :maxHeight="350">
            </v-img>
          </v-col>
          <v-col cols="12" md="8" order="1" order-md="2">
            <v-icon medium class="mr-2">mdi-account-group</v-icon>
            <span class="overline font-weight-bold text-h7">The painter</span>
            <h1 class="mb-2">Who am I ?</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <h1 class="mb-2">What I do</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-img
              :src="require(`@/assets/paintings/h-vaucher-50-64cm-1921.jpg`)"
              :maxHeight="350"
            >
              <v-row class="fill-height text-right ma-0">
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

                  <h3 class="title font-weight-bold mb-2" text-color="white">
                    Titre
                  </h3>

                  <div class="caption">{{ author }}<br />Date</div>
                </v-col>

                <v-col align-self="end">
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    @click.stop=""
                  >
                    <v-icon @click="openGallery()">
                      mdi-magnify-plus-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
          <v-col cols="12" md="4">
            <v-img
              :src="
                require(`@/assets/paintings/hernri-vaucher-les-verrieres-38-61cm.jpg`)
              "
              :maxHeight="350"
            >
              <v-row class="fill-height text-right ma-0">
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

                  <h3 class="title font-weight-bold mb-2">
                    Titre
                  </h3>

                  <div class="caption">{{ author }}<br />Date</div>
                </v-col>

                <v-col align-self="end">
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    @click.stop=""
                  >
                    <v-icon @click="openGallery()">
                      mdi-magnify-plus-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
          <v-col cols="12" md="4">
            <v-img
              :src="require(`@/assets/paintings/h-vaucher-50-64cm-1921.jpg`)"
              :maxHeight="350"
            >
              <v-row class="fill-height text-right ma-0" >
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

                  <h3 class="title font-weight-bold mb-2">
                    Titre
                  </h3>

                  <div class="caption">{{ author }}<br />Date</div>
                </v-col>

                <v-col align-self="end">
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    @click.stop=""
                  >
                    <v-icon @click="openGallery()">
                      mdi-magnify-plus-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import Carrousel from '@/components/Carrousel.vue'
// @ is an alias to /src
export default {
  components: {
    Carrousel
  },
  name: 'Home',
  data() {
    return {
      name: 'Henri Vaucher',
      author: 'Henri Vaucher'
    }
  },
  methods: {
    openGallery() {
      this.$refs.gallery.dialog = true
    }
  }
}
</script>
