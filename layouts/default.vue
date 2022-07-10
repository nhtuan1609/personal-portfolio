<template>
  <v-app dark>
    <my-background />

    <app-bar
      :sessions="sessions"
      :drawer="drawer"
      :scroll-to-view="scrollToView"
      :logout="logout"
      @toggleDrawer="toggleDrawer"
    />

    <v-navigation-drawer v-model="drawer" fixed right hide-overlay>
      <v-list nav dense>
        <v-list-item v-for="(session, index) in sessions" :key="index">
          <v-list-item-content>
            <v-btn text @click="() => selectSession(session.id)">{{ session.name }}</v-btn>
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
  </v-app>
</template>

<script>
import SnackBar from '~/components/layouts/SnackBar.vue'
import MyBackground from '~/components/layouts/MyBackground.vue'
import AppBar from '~/components/layouts/AppBar.vue'

export default {
  name: 'DefaultLayout',
  components: { SnackBar, MyBackground, AppBar },
  data() {
    return {
      drawer: false,
      title: 'tuan______ne',
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
          name: 'Education',
          id: 'education'
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
     * scroll to view session by id
     * @param {string} id - session id
     * @return {void}
     */
    scrollToView(id) {
      document.getElementById(id)?.scrollIntoView()
    },
    /**
     * handle select session
     * @param {string} id - session id
     * @return {void}
     */
    selectSession(id) {
      this.scrollToView(id)
      this.drawer = false
    },
    /**
     * handle toggle drawer
     * @return {void}
     */
    toggleDrawer() {
      this.drawer = !this.drawer
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
  --color-button-text: #ccc;
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
</style>

<style lang="scss" scoped>
.v-application {
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;
  font-size: 14px;
  color: var(--color-text) !important;
}

::v-deep .theme--dark.v-btn {
  color: var(--color-button-text);
}
</style>
