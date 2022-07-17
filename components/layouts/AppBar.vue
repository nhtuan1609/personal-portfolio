<template>
  <v-app-bar :class="['app-bar', { 'app-bar-background': !$vuetify.breakpoint.mdAndUp }]" flat fixed app>
    <h1 class="app-bar__signature" @click="$router.push('/')">
      {{ signature }}
    </h1>
    <v-spacer />
    <div v-if="$vuetify.breakpoint.mdAndUp" class="app-bar__sessions">
      <v-btn v-for="(session, index) in sessions" :key="index" text @click="selectSession(session.path)">
        {{ session.name }}
      </v-btn>
      <v-btn v-if="user.email" text color="error" @click="logout">Logout</v-btn>
    </div>
    <v-app-bar-nav-icon v-else @click.stop="$emit('toggleDrawer')"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    sessions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      signature: 'tuan______ne'
    }
  },
  computed: {
    user() {
      return this.$store.getters['profile/getUser']
    }
  },
  methods: {
    /**
     * handle select session
     * @param {string} path - session path
     * @return {void}
     */
    selectSession(path) {
      if (this.$route.path === path) {
        window.scrollTo({ top: 0 })
      } else {
        this.$router.push(path)
      }
    },
    /**
     * log out account
     * @return {void}
     */
    logout() {
      this.$store.dispatch('profile/logout').then((isSuccess) => {
        if (isSuccess) {
          this.$showSuccessNotification('Log out successfully')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-bar {
  top: 12px;
  background-color: transparent !important;

  &__signature {
    font-weight: 300;
    color: var(--text-color);
    cursor: pointer;
    user-select: none;
  }

  &__sessions {
    margin-right: -16px;
    padding: 4px 16px;
    border-radius: 32px 0 0 32px;
    background-color: var(--color-background);
  }
}

.app-bar-background {
  top: 0;
  background-color: var(--color-background-app-bar) !important;
}
</style>
