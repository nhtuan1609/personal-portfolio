<template>
  <v-layout fill-height>
    <v-container style="margin-top: -80px">
      <home-message id="home" />
    </v-container>
  </v-layout>
</template>

<script>
import HomeMessage from '~/components/HomeMessage.vue'

export default {
  name: 'HomePage',
  components: { HomeMessage }
}
</script>
