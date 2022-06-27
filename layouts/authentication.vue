<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthenticationLayout',
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
  --color-background: #333;
  --color-text: #888;
  --color-base: var(--v-_base-base);
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
  background-color: var(--color-background) !important;
}
</style>
