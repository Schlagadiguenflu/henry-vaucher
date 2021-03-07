<!-- 
  -- Projet: Nnamella client
  -- Auteur : Tim Allemann
  -- Date : 16.09.2020
  -- Description : Page d'accueil de l'application
  -- Fichier : Home.vue
  -->

<template>
  <div>
    <section>
      <v-row no-gutters>
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :src="require(`@/assets/paintings/h-vaucher-50-64cm-1921.jpg`)"
          :maxHeight="400"
          :position="'bottom, bottom'"
          gradient="rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3'
                    ]"
                    class="font-weight-black"
                  >
                    HENRI VAUCHER
                  </span>

                  <br />

                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-0' : 'display-1'
                    ]"
                    class="font-weight-light"
                  >
                    SES PEINTURES ET SON HISTOIRE
                  </span>
                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#about-me')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="about-me">
      <v-container>
        <v-row class="text-md-left text-center" align="center" justify="center">
          <v-col cols="12" md="6" order="1" order-md="1" class="pa-md-16">
            <h1 class="display-3 mb-2">Galerie virtuelle</h1>
            <p class="title font-weight-light text-justify">
              Cette Galerie virtuelle vous permet de parcourir l’œuvre du
              peintre verrisan Henri Vaucher. La visite des œuvres d’Henri
              Vaucher trace un chemin artistique, humain, temporel et
              géographique émouvant. Les œuvres d’Henri Vaucher étant en main de
              la famille, celle-ci vous convie à partager le talent de leur
              ancêtre.
            </p>
            <v-btn
              depressed
              color="primary"
              class="mr-2"
              :to="{
                name: 'About'
              }"
            >
              En savoir plus
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" order="2" order-md="2">
            <Picture :picture="pictures[0]" v-if="pictures.length > 0" />
          </v-col>
        </v-row>
        <v-row class="text-md-left text-center" align="center" justify="center">
          <v-col cols="12" md="6" order="2" order-md="1">
            <Picture :picture="pictures[1]" v-if="pictures.length > 1" />
          </v-col>
          <v-col cols="12" md="6" class="pa-md-16" order="1" order-md="2">
            <h1 class="display-3 mb-2">Biographie (1886-1953)</h1>
            <p class="title font-weight-light text-justify">
              Henri Vaucher naît en 1886 dans un petit village du Jura
              neuchâtelois, les Verrières. A 16 ans, il débute une carrière de
              peintre très prometteuse, d’abord à l’Ecole des Beaux-Arts de
              Genève, puis à l’Académie de la Palette à Paris. D’une peinture
              plus académique il se tourne vers un style plus impressionniste.
              Son coup de crayon décisif et son talent de coloriste se laissent
              progressivement imprégner par les tourments de sa maladie. Il
              décède dans le village qui l’a vu naître en 1953.
            </p>
            <v-btn
              depressed
              color="primary"
              class="mr-2"
              :to="{
                name: 'About'
              }"
            >
              En savoir plus
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="text-md-left text-center" align="center" justify="center">
          <v-col cols="12" md="6" order="1" order-md="1" class="pa-md-16">
            <h1 class="display-3 mb-2">Contact</h1>
            <p class="title font-weight-light text-justify">
              Vous êtes intéressé à prendre contact ? Vous voudriez contribuer
              d'une façon ou d'une autre aux oeuvres et à l'histoire d'Henri
              Vaucher ?
            </p>
            <v-btn
              depressed
              color="primary"
              class="mr-2"
              href="mailto: tim.allemann@outlook.com?subject=Prise de contact Henry Vaucher"
            >
              Prenez contact par mail !
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" order="2" order-md="2">
            <Picture :picture="pictures[2]" v-if="pictures.length > 2" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import store from '@/store/index.js'
import Picture from '@/components/Picture.vue'

// @ is an alias to /src
export default {
  name: 'Acceuil',
  metaInfo: {
    title: 'Henri Vaucher',
    // override the parent template and just use the above title only
    titleTemplate: null,
    meta: [
      {
        name: 'description',
        content:
          'Cette Galerie virtuelle vous permet de parcourir l’œuvre du peintre verrisan Henri Vaucher. La visite des œuvres d’Henri Vaucher trace un chemin artistique, humain, temporel et géographique émouvant. Les œuvres d’Henri Vaucher étant en main de la famille, celle-ci vous convie à partager le talent de leur ancêtre.'
      },
      {
        property: 'og:title',
        content: 'Henry Vaucher - Ses peintures et son histoire'
      },
      { property: 'og:site_name', content: 'Henry Vaucher' },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index,follow' }
    ]
  },
  components: {
    Picture
  },
  data() {
    return {
      name: 'Henri Vaucher',
      author: 'Henri Vaucher',
      random: 3,
      pictures: []
    }
  },
  created() {
    // Reçoit x peintures aléatoires
    store
      .dispatch('picture/fetchPicturesRandom', this.random)
      .then(response => {
        this.pictures = response
      })
  },
  methods: {}
}
</script>
