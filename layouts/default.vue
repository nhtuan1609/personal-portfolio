<template>
  <v-app dark :class="[{ 'show-scroll-bar': drawer }]">
    <v-app-bar fixed app height="60">
      <h2 style="cursor: pointer" @click="$router.push('/')">{{ title }}</h2>
      <v-spacer />
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn v-for="(session, index) in sessions" :key="index" text @click="scrollToView(session.id)">
          {{ session.name }}
        </v-btn>
        <v-btn v-if="user.email" text color="red" @click="logout">Logout</v-btn>
      </template>
      <v-app-bar-nav-icon v-else @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed right temporary>
      <v-list nav dense>
        <v-list-item v-for="(session, index) in sessions" :key="index">
          <v-list-item-content>
            <v-btn text @click="scrollToView(session.id)">{{ session.name }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>

    <snack-bar />

    <v-footer app height="40">
      <span>&copy; {{ new Date().getFullYear() }} NGUYEN HOANG TUAN</span>
    </v-footer>
  </v-app>
</template>

<script>
import SnackBar from '~/components/layouts/SnackBar.vue'

export default {
  name: 'DefaultLayout',
  components: { SnackBar },
  data() {
    return {
      drawer: false,
      title: 'Personal Portfolio',
      sessions: [
        {
          name: 'Home',
          id: 'home'
        },
        {
          name: 'About',
          id: 'about'
        },
        {
          name: 'Skills',
          id: 'skills'
        },
        {
          name: 'Experience',
          id: 'experience'
        },
        {
          name: 'Projects',
          id: 'projects'
        },
        {
          name: 'Contact',
          id: 'contact'
        }
      ]
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  computed: {
    user() {
      return this.$store.getters['profile/getUser']
    }
  },
  methods: {
    /**
     * scroll to view section by id
     * @param {string} id - section id
     * @return {void}
     */
    scrollToView(id) {
      document.getElementById(id)?.scrollIntoView()
    },
    /**
     * log out account
     * @return {void}
     */
    logout() {
      this.$store.dispatch('profile/logout').then((isSuccess) => {
        if (isSuccess) {
          this.$showSuccessNotification('Log out successfully')
          this.$router.push('#')
        }
      })
    }
  }
}
</script>
<style lang="scss">
:root {
  --height-application-header: 60px;
  --height-application-footer: 40px;

  --color-background: #333;
  --color-background-secondary: #555;
  --color-text: #888;
  --color-text-hover: #aaa;
  --color-border: #555;
  --color-base: var(--v-_base-base);
  --color-scrollbar-thumb: #888;
}

html {
  overflow-y: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--color-base);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-scrollbar-thumb);
    border-radius: 4px;
  }
}

body.modal-open {
  overflow: hidden;
  height: 100vh;
}
</style>

<style lang="scss" scoped>
.v-application {
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;
  font-size: 14px;
  color: var(--color-text) !important;
  background-color: var(--color-background) !important;
  &.show-scroll-bar {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: var(--color-base);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-scrollbar-thumb);
      border-radius: 4px;
    }
  }
}
</style>
