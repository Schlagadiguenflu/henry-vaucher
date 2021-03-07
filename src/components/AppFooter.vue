<!-- 
  -- Projet: Gestion des stagiaires
  -- Auteur : Tim Allemann
  -- Date : 16.09.2020
  -- Description : Footer de l'application
  -- Fichier : AppFooter.vue
  -->

<template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-col class="lighten-2 py-4 text-left white--text pl-9" cols="12" md="4">
        © {{ new Date().getFullYear() }} — <strong>{{ name }}</strong></v-col
      >
      <v-col class="lighten-2 py-4 text-center white--text" cols="12" md="4">
      </v-col>
      <v-col class="primary py-4 text-right white--text pr-12" cols="12" md="4">
        fait avec <v-icon color="white">mdi-cards-heart</v-icon> par
        <a
          class="white--text"
          href="https://www.linkedin.com/in/tim-allemann-64491b1b2"
          target="_blank"
          >Tim Allemann</a
        >
        pour la famille d'Henri Vaucher.
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      name: 'Henri Vaucher'
    }
  }
}
</script>
