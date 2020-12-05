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
                      Henri Vaucher
                    </h1>

                    <div class="subheading text-uppercase pl-2 mb-4">
                      Ses peintures et son histoire
                    </div>

                    <v-btn
                      depressed
                      light
                      class="mr-2"
                      @click="$vuetify.goTo('#about-me')"
                    >
                      En savoir plus
                    </v-btn>
                    <v-btn depressed color="primary" @click="openGallery()">
                      Gallerie
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
          <v-col cols="12" md="4" order="2" order-md="1" class="d-flex align-content-space-around flex-wrap">
            <v-img :src="require(`@/assets/avatar.jpg`)" :maxHeight="350">
            </v-img>
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
          <v-col cols="12" md="8" order="1" order-md="2">
            <v-icon medium class="mr-2">mdi-brush</v-icon>
            <span class="overline font-weight-bold text-h7">Le peintre</span>
            <h1 class="mb-2">Galerie Henri Vaucher (1886-1953)</h1>
            <p class="text-justify">
              La galerie virtuelle que nous vous proposons vous permettra de vous promener au travers de l’œuvre du peintre Henri Vaucher. 
La majorité des œuvres étant restées en main de la famille, se transmettant entre descendants, le travail d’Henri Vaucher est resté confidentiel. 
Chez nous, dans la famille, l’Oncle Henri est un personnage, raconté de génération en génération. Les Verrières sont un lieu de visite incontournable, tout comme le Mont de Buttes et encore le Creux du Van.
Cependant, au cours du temps et au gré des héritages, la visibilité de l’œuvre d’Henri Vaucher se perd, même au sein de sa famille. Sur cette constatation nous avons eu l’idée de réunir les œuvres familiales dans une galerie virtuelle.
Cette initiative nous a offert la découverte, redécouverte d’un peintre coloriste talentueux, qui raconte d’une manière si singulière les scènes familiales intimes et les personnages de l’époque, parfois amis de la famille, qui montre la beauté des paysages austères, ouvrant nos yeux sur le bleu des ciels du Jura. Il nous invite à visiter le pays de nos parents, grands-parents, grand-oncle et cousin.

            </p>
            <p class="text-justify">
              Ce faisant, nous avons mis en commun en commun les souvenirs, partagé les récits familiaux et ainsi contribué à leur transmission.
            </p>
            <p class="text-justify">
              La visite virtuelle des œuvres d’Henri Vaucher trace un chemin artistique, humain, temporel et géographique émouvant. 
            </p>
            <p class="text-justify">
              Cette galerie a été mise en place par la famille d’Henri Vaucher pour son plaisir et pour le plaisir de partager cette œuvre avec vous. Elle est le fruit d’un travail d’amateurs, reconnaissants et fiers de cet héritage familial.
Si vous avez en votre possession des œuvres que vous aimeriez partager virtuellement, prenez contact avec nous pour vous joindre à la Galerie Henri Vaucher.

            </p>
            <h1 class="mb-2">Biographie Henri Vaucher (1886-1953)</h1>
            <p class="text-justify">
              Henri Vaucher nait en 1886. Il était le fils d’Elsa et de Cyril Vaucher, qui fut instituteur pendant 50 ans aux Verrières (Neuchâtel). Henri suit l’école primaire et secondaire aux Verrières où ses deux parents enseignaient. 
            </p>
            <p class="text-justify">
En1902 il entre à l’école des beaux-Arts de Genève où il reste 4 ans. Il y est l’élève du peintre Henri-Eugène Giliard, originaire de Fleurier.
            </p>
            <p class="text-justify">
En 1906, Henri part à Paris pour poursuivre sa formation d’artiste peintre. Il se perfectionne à l’Académie de la Palette, où enseignent les peintres Charles-Emile Blanche et Charles Cottet. On peut voir dans certaines de toiles d’Henri une palette riches de tons sombres. Peut-être peut-on y déceler l’influence de son maître Cottet, leader des impressionnistes la Bande noire, où les tons sombres de Courbet. On croise sur ses toiles les femmes, les hommes à haut de forme de Montmartre. Malheureusement peu d’œuvre de cette époque nous restent.
            </p>
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
