<template>
  <session-content>
    <template #title>ABOUT ME</template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-img
            class="about__image"
            max-width="80%"
            contain
            :src="require('~/assets/image/profile/avatar.jpg')"
            alt="avatar-image"
          />
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center">
          <div class="about__information">
            Hi there! <strong>Nguyen Hoang Tuan</strong> is my full name. I was born and brought up in Can Tho city. And
            now I am working as an Web Developer.
            <br />
            <br />I love learning about new technologies, facing problems and solving them, and how I can use them to
            create better and scalable products. I am looking for an environment where I can show all my technical
            skills.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </session-content>
</template>

<script>
import SessionContent from '~/components/commons/SessionContent.vue'

export default {
  name: 'AboutMe',
  components: { SessionContent }
}
</script>

<style lang="scss" scoped>
.about {
  &__image {
    border-radius: 4px;
  }
  &__information {
    text-align: justify;
    font-size: 1.5rem;
  }
}
</style>
