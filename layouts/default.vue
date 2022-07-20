<template>
  <v-app dark>
    <my-background />
    <app-bar :sessions="sessions" @toggleDrawer="toggleDrawer" />
    <navigation-drawer v-model="drawer" :sessions="sessions" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <snack-bar />
    <loading-page />
  </v-app>
</template>

<script>
import SnackBar from '~/components/layouts/SnackBar.vue'
import MyBackground from '~/components/layouts/MyBackground.vue'
import AppBar from '~/components/layouts/AppBar.vue'
import NavigationDrawer from '~/components/layouts/NavigationDrawer.vue'
import LoadingPage from '~/components/layouts/LoadingPage.vue'

export default {
  name: 'DefaultLayout',
  components: { SnackBar, MyBackground, AppBar, NavigationDrawer, LoadingPage },
  data() {
    return {
      drawer: false,
      title: 'tuan______ne',
      sessions: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Skills',
          path: '/skills'
        },
        {
          name: 'Experience',
          path: '/experience'
        },
        {
          name: 'Education',
          path: '/education'
        },
        {
          name: 'Projects',
          path: '/projects'
        },
        {
          name: 'Contact',
          path: '/contact'
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
  created() {
    this.$store.dispatch('profile/setProfileRef')
  },
  methods: {
    /**
     * handle toggle drawer
     * @return {void}
     */
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>
<style lang="scss">
// global variable
:root {
  --height-application-header: 90px;
  --blur-size: 2px;

  --color-background: rgba(0, 0, 0, 0.3);
  --color-background-light: rgba(125, 125, 125, 0.3);
  --color-background-app-bar: rgba(0, 0, 0, 0.6);
  --color-background-loading: #333;
  --color-button: rgba(125, 125, 125, 0.2);
  --color-text: #ccc;
  --color-text-hover: #aaa;
  --color-border: #555;
  --color-base: var(--v-_base-base);
  --color-scrollbar-thumb: #888;
  --color-bicycle: rgb(255, 255, 255);
}

// thumb scroll
html {
  overflow-y: scroll;
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

// page transition
$t-duration: 600ms;
.page-enter-active,
.page-leave-active {
  transition-duration: $t-duration * 2;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--color-background-loading);
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
    transition-duration: $t-duration;
  }
}
.page-leave {
  &::before {
    transform: scaleX(0);
  }
}
.page-leave-to {
  &::before {
    transform: scale(1);
    transform-origin: left;
  }
}
.page-enter {
  &::before {
    transform: scaleX(1);
  }
}
.page-enter-to {
  &::before {
    transform: scaleX(0);
    transform-origin: right;
  }
}

// loading page transition
.loading-leave-active {
  transition: opacity 0.6s linear;
}
.loading-leave {
  opacity: 1;
}
.loading-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.v-application {
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;
  font-size: 14px;
  color: var(--color-text) !important;
}

.theme--dark:deep(.v-btn) {
  color: var(--color-text);
}
</style>
