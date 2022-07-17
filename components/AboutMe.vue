<template>
  <session-content v-if="aboutData">
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
            <p v-for="(sentence, index) in sentences" :key="index">
              {{ sentence }}
            </p>
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
  components: { SessionContent },
  computed: {
    aboutData() {
      return this.$store.getters['profile/getAboutData']
    },
    sentences() {
      return this.aboutData.sentences
    }
  }
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
