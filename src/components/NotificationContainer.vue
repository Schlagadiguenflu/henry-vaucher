<!-- 
  -- Projet: Nnamella client
  -- Auteur : Tim Allemann
  -- Date : 16.09.2020
  -- Description : Conteneur des notifications
  -- Fichier : NotificationContainer.vue
  -->

<template>
  <div class="notification-container">
    <transition-group name="fade" tag="ul" appear>
      <NotificationBar
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </transition-group>
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'

export default {
  components: {
    NotificationBar
  },
  computed: mapState('notification', ['notifications'])
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 60px;
  right: 0;
  padding-right: 40px;
  z-index: 201;
}
</style>
