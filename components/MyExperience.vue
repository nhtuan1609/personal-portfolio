<template>
  <session-content v-if="experience">
    <template #title>WORK EXPERIENCE</template>
    <div class="experience">
      <v-card v-for="(experienceItem, index) in experience" :key="index" class="group">
        <v-card-title class="group__title">
          <h2>{{ experienceItem.company }}</h2>
        </v-card-title>
        <v-divider />
        <v-card-text class="group__content">
          <p><strong>Duration: </strong>{{ experienceItem.duration }}</p>
          <p><strong>Position: </strong>{{ experienceItem.position }}</p>
          <p><strong>Projects: </strong></p>
          <v-expansion-panels :value="experienceItem.projects.map((_, index) => index)" :hover="true" :multiple="true">
            <v-expansion-panel
              v-for="(project, projectIndex) in experienceItem.projects"
              :key="projectIndex"
              class="panel"
            >
              <v-expansion-panel-header class="panel__header">
                <strong>{{ projectIndex + 1 }}. {{ project.name }}</strong>
                <template #actions>
                  <v-icon>$expand</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="panel__content">
                <p class="mt-4"><strong>Description: </strong>{{ project.description }}</p>
                <p><strong>Team size: </strong>{{ project.teamSize }}</p>
                <p><strong>Role: </strong>{{ project.role }}</p>
                <p><strong>Responsibilities: </strong></p>
                <ul style="list-style-type: disc">
                  <li
                    v-for="(responsibility, responsibilityIndex) in project.responsibilities"
                    :key="responsibilityIndex"
                  >
                    {{ responsibility }}
                  </li>
                </ul>
                <p><strong>Technology stack: </strong></p>
                <ul style="list-style-type: disc">
                  <li><strong>Frontend: </strong>{{ project.technologyStack.frontend.join(', ') }}</li>
                  <li><strong>Backend: </strong>{{ project.technologyStack.backend.join(', ') }}</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </div>
  </session-content>
</template>

<script>
import SessionContent from '~/components/commons/SessionContent.vue'

export default {
  name: 'MyExperience',
  components: { SessionContent },
  computed: {
    experience() {
      return this.$store.getters['profile/getExperience']
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
    }
  }

  .panel {
    background-color: transparent;
    &__header {
      background-color: var(--color-background-light);
      backdrop-filter: blur(var(--blur-size));
      color: var(--color-text);
      font-size: 1.2rem;
    }

    &__content {
      font-size: 1.2rem;
      color: var(--color-text);
    }
  }
}
</style>
