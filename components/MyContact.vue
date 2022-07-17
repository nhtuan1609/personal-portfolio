<template>
  <session-content v-if="contacts">
    <template #title>CONTACT ME</template>
    <div class="contacts">
      <a v-for="(contact, index) in contacts" :key="index" :href="contact.href" target="_blank">
        <v-btn large min-width="200px" color="var(--color-button)">
          <v-icon small left>{{ contact.icon }}</v-icon>
          {{ contact.name }}
        </v-btn>
      </a>
    </div>
  </session-content>
</template>

<script>
import SessionContent from '~/components/commons/SessionContent.vue'

export default {
  name: 'MyContact',
  components: { SessionContent },
  computed: {
    contacts() {
      return this.$store.getters['profile/getContacts']
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 64px 32px;
  background-color: var(--color-background);
  backdrop-filter: blur(var(--blur-size));
  border-radius: 8px;
  & a {
    text-decoration: none;
  }
}
</style>
