<template>
  <v-layout fill-height>
    <v-container style="margin-top: -80px">
      <home-message id="home" />
      <about-me id="about" />
    </v-container>
  </v-layout>
</template>

<script>
import HomeMessage from '~/components/HomeMessage.vue'
import AboutMe from '~/components/AboutMe.vue'

export default {
  name: 'HomePage',
  components: { HomeMessage, AboutMe }
}
</script>
