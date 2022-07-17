<template>
  <home-message />
</template>

<script>
import HomeMessage from '~/components/HomeMessage.vue'

export default {
  name: 'HomePage',
  components: { HomeMessage },
  created() {
    this.$store.dispatch('profile/setProfileRef')
  }
}
</script>
