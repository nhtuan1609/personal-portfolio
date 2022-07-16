<template>
  <v-app dark>
    <my-background />
    <app-bar :sessions="sessions" @toggleDrawer="toggleDrawer" />
    <navigation-drawer v-model="drawer" :sessions="sessions" />
    <v-main>
      <v-container style="margin-top: -80px">
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
import NavigationDrawer from '~/components/layouts/NavigationDrawer.vue'

export default {
  name: 'DefaultLayout',
  components: { SnackBar, MyBackground, AppBar, NavigationDrawer },
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
  --height-application-header: 60px;
  --height-application-footer: 40px;

  --color-background: #333;
  --color-background-secondary: #555;
  --color-text: #ccc;
  --color-text-hover: #aaa;
  --color-border: #555;
  --color-base: var(--v-_base-base);
  --color-scrollbar-thumb: #888;
  --color-button-text: #ccc;
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
    background-color: var(--color-background);
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
