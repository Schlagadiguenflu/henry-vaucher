<!-- 
  -- Projet: Nnamella client
  -- Auteur : Tim Allemann
  -- Date : 26.09.2020
  -- Description : Barre de navigation de l'application
  -- Fichier : AppNav.vue
  -->

<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      temporary
      right
      dark
      color="primary"
    >
      <v-list nav>
        <v-list-item
          v-for="link in getMenus"
          :key="link.label"
          link
          :to="{ name: link.routeName }"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase">{{
              link.label
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          prepend-icon="mdi-cog"
          :value="false"
          active-class="white--text"
          v-if="this.loggedIn"
        >
          <template v-slot:activator>
            <v-list-item-title class="text-uppercase">
              Configuration
            </v-list-item-title>
          </template>
          <v-list-item
            v-for="configurationLink in configurationLinks"
            :key="configurationLink.label"
            configurationLink
            :to="{ name: configurationLink.routeName }"
          >
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-uppercase white--text">
              {{ configurationLink.label }}
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item @click="toggleTheme">
          <v-list-item-icon>
            <v-icon v-if="this.$vuetify.theme.dark"
              >mdi-toggle-switch-off</v-icon
            >
            <v-icon v-else>mdi-toggle-switch-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase">
              Theme
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container class="mx-auto py-0">
      <v-app-bar app elevate-on-scroll color="primary" dark>
        <v-toolbar-title class="text-uppercase ml-md-5">
          {{ name }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="d-none d-md-flex mr-md-5">
          <v-btn
            v-for="link in getMenus"
            :key="`${link.label}-nav-link`"
            color:white
            text
            rounded
            class="my-2"
            :to="{ name: link.routeName }"
            exact
          >
            {{ link.label }}
          </v-btn>
          <v-menu v-if="this.loggedIn">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                color:white
                text
                rounded
                class="my-2"
              >
                Configuration
              </v-btn>
            </template>
          </v-menu>
        </div>

        <v-app-bar-nav-icon
          @click="drawer = true"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
      </v-app-bar>
    </v-container>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers'
export default {
  data() {
    return {
      name: 'Henri Vaucher',
      drawer: false,
      group: null,
      // folderLoaded means does folder need to be loaded ?
      links: [
        {
          label: 'The painter',
          routeName: 'Home',
          icon: 'mdi-home',
          loggedIn: false
        },
        {
          label: 'Gallery',
          routeName: 'Folders',
          icon: 'mdi-notebook',
          loggedIn: false
        }
      ]
    }
  },
  computed: {
    ...authComputed,
    getMenus: function() {
      let finalLinks
      if (this.loggedIn) {
        finalLinks = this.links
      } else {
        finalLinks = this.links.filter(function(link) {
          return !link.loggedIn
        })
      }
      return finalLinks
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('authentification/authenticate', this.$route.path)
        .then(() => {
          console.log('authenticating a protected url:' + this.$route.path)
          if (!this.$store.state.authentification.user) {
            console.log('error in authentification, see logs for more info')
          }
        })
    },
    logout() {
      this.$store.dispatch('authentification/logout')
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    toggleMenu() {
      this.drawer = true
    }
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
