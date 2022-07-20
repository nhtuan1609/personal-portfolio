<template>
  <session-content v-if="projects">
    <template #title>PROJECTS</template>
    <v-timeline :dense="!$vuetify.breakpoint.mdAndUp">
      <v-timeline-item v-for="(project, index) in projects" :key="index" small color="var(--color-text)" fill-dot>
        <template #opposite>
          <h2 class="font-weight-bold">{{ project.date }}</h2>
        </template>
        <v-card class="project">
          <v-card-title class="justify-center">
            <h2 v-if="$vuetify.breakpoint.mdAndUp" class="project__name">{{ project.name }}</h2>
            <h2 v-else class="project__name">{{ project.name }} ({{ project.date }})</h2>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <img class="project__image" :src="project.imgSrc" alt="project-image" />
            <v-btn class="mt-4" width="100%" color="var(--color-button)" @click="toggleDetails(index)">Details</v-btn>
            <div class="pb-4">
              <v-expand-transition>
                <v-card v-if="isShowDetails[index]" class="transition-fast-in-fast-out project__details">
                  <v-card-text>
                    <h3>Description:</h3>
                    {{ project.description }}
                  </v-card-text>
                  <v-divider class="mx-4" />
                  <v-card-text>
                    <h3>Features:</h3>
                    <ul>
                      <li v-for="(feature, featureIndex) in project.features" :key="featureIndex">
                        {{ feature }}
                      </li>
                    </ul>
                  </v-card-text>
                  <v-divider class="mx-4" />
                  <v-card-text>
                    <h3>Technologies:</h3>
                    <v-row class="mt-0">
                      <v-col
                        v-for="(technology, technologyIndex) in project.technologies"
                        :key="technologyIndex"
                        cols="12"
                        md="6"
                      >
                        <a :href="technology.href" target="_blank" class="project__details-technology">
                          <img width="40px" height="40px" :src="technology.logoSrc" alt="logo-image" />
                          <span class="pl-2">{{ technology.name }}</span>
                        </a>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-expand-transition>
            </div>
            <div class="project__buttons">
              <a :href="project.source" target="_blank" :class="{ 'full-width': !$vuetify.breakpoint.mdAndUp }">
                <v-btn width="100%" color="var(--color-button)">Source Code</v-btn>
              </a>
              <a :href="project.website" target="_blank" :class="{ 'full-width': !$vuetify.breakpoint.mdAndUp }">
                <v-btn width="100%" color="var(--color-button)">Website</v-btn>
              </a>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </session-content>
</template>

<script>
import SessionContent from '~/components/commons/SessionContent.vue'

export default {
  name: 'MyProjects',
  components: { SessionContent },
  data() {
    return {
      isShowDetails: {}
    }
  },
  computed: {
    projects() {
      return this.$store.getters['profile/getProjects']
    }
  },
  watch: {
    projects() {
      this.initialize()
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    /**
     * handle show details
     * @return {void}
     */
    toggleDetails(index) {
      this.isShowDetails[index] = !this.isShowDetails[index]
    },
    /**
     * initialize show details flag
     * @return {void}
     */
    initialize() {
      this.isShowDetails =
        this.projects?.reduce((object, _, index) => {
          return { ...object, [index]: false }
        }, {}) ?? []
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  background-color: var(--color-background);
  backdrop-filter: blur(var(--blur-size));
  border-radius: 8px;
  &.v-card.v-sheet::before {
    border-right-color: var(--color-background);
  }
  &.v-card.v-sheet::after {
    border-right: none;
  }
  &__name {
    font-weight: bold;
    color: var(--color-text);
  }
  &__image {
    display: block;
    width: 100%;
    border-radius: 4px;
  }
  &__details {
    background-color: transparent;
    & .v-card__text {
      font-size: 1rem;
      line-height: 1.6rem;
      color: var(--color-text);
    }
    &-technology {
      display: flex;
      text-decoration: none;
      color: var(--color-text);
      align-items: center;
      &:hover {
        color: var(--color-text-hover);
      }
      & img {
        border: 1px solid var(--color-border);
      }
    }
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    & a {
      text-decoration: none;
      &.full-width {
        width: 100%;
      }
    }
  }
}
</style>
