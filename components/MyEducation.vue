<template>
  <session-content v-if="educationData">
    <template #title>EDUCATION</template>
    <div class="experience">
      <!-- universities -->
      <v-card v-for="(university, index) in universities" :key="index" class="group">
        <v-card-title class="group__title">
          <h2>{{ university.name }}</h2>
        </v-card-title>
        <v-divider />
        <v-card-text class="group__content">
          <p><strong>Duration: </strong>{{ university.duration }}</p>
          <p><strong>Status: </strong>{{ university.status }}</p>
          <p><strong>Major: </strong>{{ university.major }}</p>
          <p><strong>Type of degree: </strong>{{ university.typeOfDegree }}</p>
          <p><strong>Graduation classification: </strong>{{ university.graduationClassification }}</p>
        </v-card-text>
      </v-card>

      <!-- courses -->
      <v-card v-for="(course, index) in courses" :key="universities.length + index" class="group">
        <v-card-title class="group__title">
          <h2>{{ course.name }}</h2>
        </v-card-title>
        <v-divider />
        <v-card-text class="group__content">
          <p><strong>Duration: </strong>{{ course.duration }}</p>
          <p><strong>Status: </strong>{{ course.status }}</p>
          <p><strong>Technology: </strong>{{ course.technology }}</p>
          <p><strong>Description: </strong></p>
          <ul>
            <li v-for="(description, descriptionIndex) in course.description" :key="descriptionIndex">
              {{ description }}
            </li>
          </ul>
        </v-card-text>
      </v-card>

      <!-- certificates -->
      <v-card
        v-for="(certificate, index) in certificates"
        :key="universities.length + courses.length + index"
        class="group"
      >
        <v-card-title class="group__title">
          <h2>{{ certificate.name }}</h2>
        </v-card-title>
        <v-divider />
        <v-card-text class="group__content">
          <div
            v-for="(certification, certificationIndex) in certificate.certifications"
            :key="certificationIndex"
            class="group__content-tag"
          >
            <a :href="certification.href" target="_blank">
              {{ certification.name }}
            </a>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </session-content>
</template>

<script>
import SessionContent from '~/components/commons/SessionContent.vue'

export default {
  name: 'MyEducation',
  components: { SessionContent },
  computed: {
    educationData() {
      return this.$store.getters['profile/getEducationData']
    },
    universities() {
      return this.educationData.universities
    },
    courses() {
      return this.educationData.courses
    },
    certificates() {
      return this.educationData.certificates
    }
  }
}
</script>

<style lang="scss" scoped>
.experience {
  width: 100%;
  padding: 24px;
  box-shadow: 0 0 6px black;
  border-radius: 8px;
  & .v-card + .v-card,
  & .v-card + .group {
    margin-top: 24px;
  }
  & .group {
    background-color: var(--color-background);
    backdrop-filter: blur(var(--blur-size));
    border-radius: 8px;
    &__title {
      color: var(--color-text);
      word-break: break-word;
    }
    &__content {
      font-size: 1.2rem;
      color: var(--color-text);
      & p {
        padding: 0;
        margin: 0;
        line-height: 2.4rem;
      }
      & ul {
        line-height: 2rem;
      }
      &-tag {
        & + .group__content-tag {
          margin-top: 12px;
        }
        & a {
          max-width: 100%;
          display: inline-block;
          padding: 8px;
          text-decoration: none;
          color: var(--color-text);
          border: 2px solid var(--color-border);
          border-radius: 4px;
          transition: background-color 0.2s linear;
          &:hover {
            background-color: var(--color-button);
          }
        }
      }
    }
  }
}
</style>
