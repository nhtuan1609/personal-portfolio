<template>
  <session-content v-if="about">
    <template #title>ABOUT ME</template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-center">
          <div class="about__image-container">
            <v-img class="about__image" src="/image/profile/avatar.jpg" alt="about-image" @load="onLoaded" />
            <v-skeleton-loader v-if="isLoadingImage" class="about__image" type="image"></v-skeleton-loader>
          </div>
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
  data() {
    return {
      isLoadingImage: true
    }
  },
  computed: {
    about() {
      return this.$store.getters['profile/getAbout']
    },
    sentences() {
      return this.about.sentences
    }
  },
  /**
   * hide loading skeleton after loading image successfully
   * @return {void}
   */
  methods: {
    onLoaded() {
      this.isLoadingImage = false
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  &__image-container {
    position: relative;
    width: 80%;
    padding-top: 106%;
    border-radius: 4px;
    overflow: hidden;
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    :deep(.v-skeleton-loader__image) {
      height: 100%;
    }
  }
  &__information {
    text-align: justify;
    font-size: 1.5rem;
  }
}
</style>
