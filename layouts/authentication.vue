<template>
  <v-app dark>
    <my-background />
    <v-main>
      <Nuxt />
    </v-main>
    <snack-bar />
  </v-app>
</template>

<script>
import SnackBar from '~/components/layouts/SnackBar.vue'
import MyBackground from '~/components/layouts/MyBackground.vue'

export default {
  name: 'AuthenticationLayout',
  components: { SnackBar, MyBackground },
  data() {
    return {
      title: 'Personal Portfolio'
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
  --blur-size: 2px;
  --color-background: rgba(0, 0, 0, 0.3);
  --color-button: rgba(125, 125, 125, 0.2);
  --color-scrollbar-thumb: #888;
  --color-white: var(--v-_white-base);
  --color-error: var(--v-error-base);
  --color-error-background: var(--v-error-lighten5);
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

.theme--dark:deep(.v-btn) {
  color: var(--color-text);
}
</style>
