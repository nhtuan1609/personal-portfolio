<template>
  <div class="navigation-drawer">
    <v-navigation-drawer
      class="navigation-drawer__sessions"
      :value="value"
      fixed
      right
      hide-overlay
      @input="handleInput"
    >
      <v-list nav dense>
        <v-list-item v-for="(session, index) in sessions" :key="index">
          <v-list-item-content>
            <v-btn text @click="() => selectSession(session.id)">{{ session.name }}</v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="user.email">
          <v-list-item-content>
            <v-btn text color="red" @click="logout">Logout</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div v-show="value" class="navigation-drawer__modal" @click="$emit('input', false)"></div>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    sessions: {
      type: Array,
      required: true
    }
  },
  computed: {
    user() {
      return this.$store.getters['profile/getUser']
    }
  },
  methods: {
    /**
     * handle input changed
     * @param {boolean} value - drawer state
     * @return {void}
     */
    handleInput(value) {
      this.$emit('input', value)
    },
    /**
     * handle select session
     * @param {string} id - session id
     * @return {void}
     */
    selectSession(id) {
      document.getElementById(id)?.scrollIntoView()
      this.$emit('input', false)
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

<style lang="scss" scoped>
.navigation-drawer {
  &__sessions {
    z-index: 11;
    margin-top: 64px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &__modal {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
