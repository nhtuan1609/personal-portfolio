<template>
  <session-content>
    <template #title>CONTACT ME</template>
    <div class="contacts">
      <a v-for="(contact, index) in contacts" :key="index" :href="contact.href" target="_blank">
        <v-btn large min-width="200px" color="rgba(125, 125, 125, 0.2)">
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
      return [
        {
          name: 'Email',
          icon: 'mdi-email',
          href: 'mailto:nhtuan1609@gmail.com'
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          href: 'https://www.facebook.com/nhtuan1609'
        },
        {
          name: 'Github',
          icon: 'mdi-github',
          href: 'https://github.com/nhtuan1609'
        },
        {
          name: 'freeCodeCamp',
          icon: 'mdi-fire-circle',
          href: 'https://www.freecodecamp.org/nhtuan1609'
        }
      ]
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
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  & a {
    text-decoration: none;
  }
}
</style>
