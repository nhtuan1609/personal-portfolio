<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn text>Personal Portfolio</v-btn>
      <v-spacer />
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Skills</v-btn>
      <v-btn text>Experience</v-btn>
      <v-btn text>Projects</v-btn>
      <v-btn text>Contact</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} NGUYEN HOANG TUAN</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
