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

                    <div class="subheading text-uppercase pl-1 mb-4">
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
                    <v-btn
                      depressed
                      color="primary"
                      :to="{
                        name: 'Gallery',
                        params: {
                          pageNumber: 1,
                          pageSize: 6
                        }
                      }"
                    >
                      Gallerie virtuelle
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
          <v-col
            cols="12"
            md="4"
            order="2"
            order-md="1"
            class="d-flex align-content-space-around flex-wrap"
          >
            <v-col v-for="(picture, i) in pictures" :key="i">
              <Picture :picture="picture" />
            </v-col>
          </v-col>
          <v-col cols="12" md="8" order="1" order-md="2">
            <v-icon medium class="mr-2">mdi-brush</v-icon>
            <span class="overline font-weight-bold text-h7">Le peintre</span>
            <h1 class="mb-2">Galerie virtuelle Henri Vaucher</h1>
            <p class="text-justify">
              La galerie virtuelle que nous vous proposons vous permettra de
              vous promener au travers de l’œuvre du peintre Henri Vaucher. La
              majorité des œuvres étant restées en main de la famille, se
              transmettant entre descendants, le travail d’Henri Vaucher est
              resté confidentiel. L’Oncle Henri est un personnage, raconté de
              génération en génération. Les Verrières sont un lieu de visite
              incontournable, tout comme le Mont de Buttes et encore le Creux du
              Van. Cependant, au cours du temps, la visibilité de l’œuvre
              d’Henri Vaucher se perd, même au sein de sa famille. C’est pour
              cette raison que nous décidé de réunir les œuvres familiales dans
              une galerie virtuelle. Cette initiative nous permis d’admiré une
              fois de plus, un peintre coloriste talentueux, qui raconte d’une
              manière si singulière les scènes familiales intimes et les
              personnages de l’époque, parfois amis de la famille, qui montre la
              beauté des paysages austères, ouvrant nos yeux sur le bleu des
              ciels du Jura. Il nous invite à visiter le pays de nos ancêtres.
              Ce faisant, nous avons mis en commun pour mieux les partager les
              souvenirs et les récits familiaux.
            </p>
            <p class="text-justify">
              La visite virtuelle des œuvres d’Henri Vaucher trace un chemin
              artistique, humain, temporel et géographique émouvant.
            </p>
            <p class="text-justify">
              Cette galerie a été mise en place par la famille d’Henri Vaucher
              pour le plaisir de partager cette œuvre avec vous. Elle est le
              fruit d’un travail d’amateurs, reconnaissants et fiers de cet
              héritage familial. Si vous avez en votre possession des œuvres que
              vous aimeriez partager virtuellement, prenez contact avec nous
              pour vous joindre à la Galerie Henri Vaucher.
            </p>
            <h1 class="mb-2">Biographie Henri Vaucher (1886-1953)</h1>
            <p class="text-justify">
              Henri Vaucher nait en 1886. Il était le fils d’Elisa et de Cyril
              Vaucher, qui fut instituteur pendant 50 ans aux Verrières
              (Neuchâtel) et maire pendent 2-3 décennies. Henri suit l’école
              primaire et secondaire aux Verrières où ses deux parents
              enseignaient.
            </p>
            <p class="text-justify">
              En 1902 il entre à l’école des beaux-Arts de Genève où il reste 4
              ans. Il y est l’élève du peintre Henri-Eugène Giliard, originaire
              de Fleurier.
            </p>
            <p class="text-justify">
              En 1906, Henri part à Paris pour poursuivre sa formation d’artiste
              peintre. Il se perfectionne à l’Académie de la Palette, où
              enseignent les peintres Charles-Emile Blanche et Charles Cottet.
              On peut voir dans certaines de toiles d’Henri une palette riches
              de tons sombres. Peut-être peut-on y déceler l’influence de son
              maître Cottet, leader des impressionnistes la Bande noire, où les
              tons sombres de Courbet. On croise sur ses toiles les femmes, les
              hommes à haut de forme de Montmartre. Malheureusement peu d’œuvre
              de cette époque nous restent. Il pratique la peinture et la
              céramique à Paris et à la Manufacture de Sèvre. Il y reste
              jusqu’en 1910. Certaines de ses tasses peintes sont encore en
              possession de la famille.
            </p>
            <p class="text-justify">
              À l’aube de ses 30 ans, il sombre dans la maladie. A cette époque,
              on ne disposait d’aucune thérapeutique efficace contre la
              schizophrénie. Dès lors, sa peinture révèle ses tourments et ses
              passions, l’empêchant probablement de poursuivre sa carrière en
              dehors de sa famille, marquant une rupture dans sa progression
              artistique. Il est en effet totalement isolé de tout contact
              artistique qui lui aurait permis de faire évoluer sa peinture. Il
              peint, dessine, croque sans répit sur les supports à sa
              disposition, à l’aquarelle, aux crayons de couleur et au fusain,
              peu d’huiles. Ses outils techniques sont faibles, il trouve son
              inspiration dans sa famille, ses voisins, les paysages du Jura,
              les animaux domestiques des environs. Il nous laisse une multitude
              de regards sur son quotidien, des couleurs surprenantes, un beau
              coup de crayon, toujours décisif, des ambiances, bucoliques,
              naïves ou tourmentées et des ciels d’un bleu dont il avait le
              secret. Les dessins de sa mère sont gracieux et tendres et les
              scènes émouvantes.
            </p>
            <p class="text-justify">
              Il vit dans un petit appartement en compagnie de sa mère qui
              assume la vie quotidienne et aussi les délires parfois violents de
              sa maladie. Sa mère Elisa accompagne son fils jusqu’à ses 96 ans.
              Un jour elle dit à l’un de ses autres fils, Léon médecin à Couvet
              : « je n’en peux plus ». Elle décède 10 jours plus tard.
            </p>
            <p class="text-justify">
              Henri Vaucher décède en 1953, le jour de l’anniversaire de ses 63
              ans, dans la maison ou il vit désormais seul après la mort de ses
              parents.
            </p>
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
  title: 'Henri Vaucher',
  components: {
    Picture
  },
  name: 'Home',
  data() {
    return {
      name: 'Henri Vaucher',
      author: 'Henri Vaucher',
      pictureIds: [53, 45],
      pictures: []
    }
  },
  created() {
    this.pictureIds.forEach(element => {
      store.dispatch('picture/fetchPicture', element).then(response => {
        this.pictures.push(response)
      })
    })
  },
  methods: {}
}
</script>
