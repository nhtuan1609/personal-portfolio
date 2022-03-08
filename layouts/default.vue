<template>
  <v-app dark>
    <v-app-bar fixed app height="60">
      <h2 style="cursor: pointer" @click="$router.push('/')">{{ title }}</h2>
      <v-spacer />
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn v-for="(session, index) in sessions" :key="index" text :to="session.path">{{ session.name }}</v-btn>
      </template>
      <v-app-bar-nav-icon v-else @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item v-for="(session, index) in sessions" :key="index">
          <v-list-item-content>
            <v-btn text :to="session.path">{{ session.name }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app height="40">
      <span>&copy; {{ new Date().getFullYear() }} NGUYEN HOANG TUAN</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      title: 'Personal Portfolio',
      sessions: [
        {
          name: 'Home',
          path: '#home'
        },
        {
          name: 'About',
          path: '#about'
        },
        {
          name: 'Skills',
          path: '#skills'
        },
        {
          name: 'Experience',
          path: '#experience'
        },
        {
          name: 'Projects',
          path: '#projects'
        },
        {
          name: 'Contact',
          path: '#contact'
        }
      ]
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
<style lang="scss">
:root {
  --height-application-header: 60px;
  --height-application-footer: 40px;

  --color-background: #333;
  --color-text: #888;
}
</style>

<style lang="scss" scoped>
.v-application {
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;
  font-size: 14px;
  color: var(--color-text) !important;
  background-color: var(--color-background) !important;
}
</style>
