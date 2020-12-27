<template>
  <div>
    <v-container>
      <v-row class="text-md-left text-center mt-7">
        <v-col cols="12" lg="4">
          <h1 class="display-3 mb-2">Galerie virtuelle</h1>
          <p class="title font-weight-light text-justify">
            La galerie virtuelle que nous vous proposons vous permettra de vous
            promener au travers de l’œuvre du peintre Henri Vaucher. La majorité
            des œuvres étant restées en main de la famille, se transmettant
            entre descendants, le travail d’Henri Vaucher est resté
            confidentiel. L’oncle Henri est un personnage, raconté de génération
            en génération. Les Verrières, où il a vécu, sont un lieu de visite
            incontournable, tout comme le Mont de Buttes ou encore le Creux du
            Van. Cependant, au cours du temps, la visibilité de l’œuvre d’Henri
            Vaucher se perd, même au sein de sa famille. C’est pour cette raison
            que nous décidé de réunir les œuvres familiales dans une galerie
            virtuelle. Cette initiative nous permis d’admirer une fois de plus,
            un peintre coloriste talentueux, qui raconte d’une manière si
            singulière les scènes familiales intimes et les personnages de
            l’époque, parfois amis de la famille, qui montre la beauté des
            paysages austères, ouvrant nos yeux sur le bleu des ciels du Jura.
            Il nous invite à visiter le pays de nos ancêtres. Ce faisant, nous
            avons mis en commun pour mieux les partager les souvenirs et les
            récits familiaux.
          </p>
          <p class="title font-weight-light text-justify">
            La visite virtuelle des œuvres d’Henri Vaucher trace un chemin
            artistique, humain, temporel et géographique émouvant.
          </p>
          <p class="title font-weight-light text-justify">
            Cette galerie a été mise en place par la famille d’Henri Vaucher
            pour le plaisir de partager cette œuvre avec vous. Elle est le fruit
            d’un travail d’amateurs, reconnaissants et fiers de cet héritage
            familial. Si vous avez en votre possession des œuvres que vous
            aimeriez partager virtuellement, prenez contact avec nous pour vous
            joindre à la Galerie Henri Vaucher.
          </p>
        </v-col>
        <v-col cols="12" lg="3">
          <v-col
            v-for="(picture, i) in picture.pictures"
            :key="i"
            class="d-flex align-content-space-around flex-wrap"
          >
            <Picture :picture="picture" />
          </v-col>
        </v-col>
        <v-col cols="12" lg="5">
          <h1 class="display-3 mb-2">Biographie (1886-1953)</h1>
          <p class="title font-weight-light text-justify">
            Henri Vaucher naît en 1886. Il est le fils d’Elisa et de Cyrille
            Vaucher, qui a été instituteur pendant 50 ans aux Verrières
            (Neuchâtel) et maire pendent 2-3 décennies. Henri suit l’école
            primaire et secondaire aux Verrières où ses deux parents enseignent
            alors.
          </p>
          <p class="title font-weight-light text-justify">
            Dès son plus jeune âge, Henri est un être à part, fuyant le monde
            pour s’adonner à l’art et pliant son chevalet dès que quelqu’un
            apparait.
          </p>
          <p class="title font-weight-light text-justify">
            En 1902 il entre à l’Ecole des Beaux-Arts de Genève où il reste 4
            ans. Il y est l’élève du peintre Henri-Eugène Giliard, originaire de
            Fleurier.
          </p>
          <p class="title font-weight-light text-justify">
            En 1906, Henri part à Paris pour poursuivre sa formation d’artiste
            peintre. Il se perfectionne à l’Académie de la Palette, où
            enseignent les peintres Charles-Emile Blanche et Charles Cottet. On
            peut voir dans certaines des toiles d’Henri une palette riche de
            tons sombres. Peut-être peut-on y déceler l’influence de son maître
            Cottet, à la tête des impressionnistes de la Bande noire, où alors
            les tons sombres de Courbet. On croise sur ses toiles les femmes en
            corsages de dentelle ou en longs manteaux cintrés et les hommes à
            haut de forme de Montmartre. Malheureusement peu d’œuvres de cette
            époque nous restent. Il pratique la peinture et la céramique à Paris
            et à la Manufacture de Sèvre. Il y reste jusqu’en 1910. Certaines de
            ses tasses peintes sont encore en possession de la famille
          </p>
          <p class="title font-weight-light text-justify">
            À l’aube de ses 30 ans, il sombre dans la maladie. A cette époque,
            on ne disposait d’aucune thérapeutique efficace contre la
            schizophrénie. Dès lors, sa peinture révèle tourments et passions,
            l’empêchant probablement de poursuivre sa carrière en dehors de sa
            famille, marquant une rupture dans sa progression artistique. Il est
            en effet totalement isolé de tout contact artistique qui lui aurait
            permis de faire évoluer sa peinture. Il peint, dessine, croque sans
            répit sur les supports à sa disposition, à l’aquarelle, aux crayons
            de couleur et au fusain, peu d’huiles. Ses outils techniques sont
            faibles, il trouve son inspiration dans sa famille, ses voisins, les
            paysages du Jura, les animaux domestiques des environs. Il nous
            laisse une multitude de regards sur son quotidien, des couleurs
            surprenantes, un beau coup de crayon, toujours décisif, des
            ambiances, bucoliques, naïves ou sombres et tourmentées et des ciels
            d’un bleu dont il avait le secret. Les dessins de sa mère sont
            gracieux et tendres et les scènes sont émouvantes.
          </p>
          <p class="title font-weight-light text-justify">
            Il vit modestement dans un petit appartement en compagnie de sa mère
            qui assume la vie quotidienne et aussi les délires parfois violents
            de sa maladie. Sa mère Elisa accompagne son fils jusqu’à ses 96 ans.
            Un jour elle dit à l’un de ses autres fils, Léon médecin à Couvet :
            « je n’en peux plus ». Elle s’éteint 10 jours plus tard.
          </p>
          <p class="title font-weight-light text-justify">
            Henri Vaucher décède en 1953, le jour de l’anniversaire de ses 63
            ans, dans la maison ou il vit désormais seul après la mort de ses
            parents.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import store from '@/store/index.js'
import { mapState } from 'vuex'
import Picture from '@/components/Picture.vue'

function loadData(routeTo, routeFrom, next) {
  store.dispatch('picture/fetchPicturesRandom', 3).then(() => {
    next()
  })
}

export default {
  name: 'A_propos',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'A propos',
    meta: [
      {
        name: 'description',
        content:
          'Henri Vaucher naît en 1886 dans un petit village du Jura neuchâtelois, les Verrières. A 16 ans, il débute une carrière de peintre très prometteuse, d’abord à l’Ecole des Beaux-Arts de Genève, puis à l’Académie de la Palette à Paris. D’une peinture plus académique il se tourne vers un style plus impressionniste. Son coup de crayon décisif et son talent de coloriste se laissent progressivement imprégner par les tourments de sa maladie. Il décède dans le village qui l’a vu naître en 1953.'
      },
      {
        property: 'og:title',
        content: 'A propos - Ses peintures et son histoire'
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

  components: { Picture },

  computed: {
    ...mapState(['picture'])
  }
}
</script>

<style lang="scss" scoped></style>
