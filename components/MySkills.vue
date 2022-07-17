<template>
  <session-content v-if="skillsData">
    <template #title>SKILLS</template>
    <v-container>
      <v-row>
        <v-col
          v-for="(skillGroup, skillGroupIndex) in skillGroups"
          :key="skillGroupIndex"
          cols="12"
          md="6"
          class="d-flex flex-column justify-center py-0"
        >
          <v-card v-for="(group, groupIndex) in skillGroup" :key="groupIndex" class="skill">
            <v-card-title class="justify-center text-h4 font-weight-bold" style="color: var(--color-text)">
              {{ group.name }}
            </v-card-title>
            <v-divider />
            <v-card-text>
              <a
                v-for="(skill, skillIndex) in group.skills"
                :key="skillIndex"
                :href="skill.href"
                target="_blank"
                class="skill__item"
              >
                <img width="50px" height="50px" :src="skill.logoSrc" alt="logo-image" />
                <h2>{{ skill.name }}</h2>
              </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </session-content>
</template>

<script>
import SessionContent from '~/components/commons/SessionContent.vue'

export default {
  name: 'MySkills',
  components: { SessionContent },
  computed: {
    skillsData() {
      return this.$store.getters['profile/getSkillsData']
    },
    leftGroups() {
      return [
        {
          name: 'Frontend',
          skills: this.skillsData.frontend
        },
        {
          name: 'Backend',
          skills: this.skillsData.backend
        }
      ]
    },
    rightGroups() {
      return [
        {
          name: 'Programing Languages',
          skills: this.skillsData.programingLanguage
        },
        {
          name: 'Version Control',
          skills: this.skillsData.versionControl
        }
      ]
    },
    skillGroups() {
      return [this.leftGroups, this.rightGroups]
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  margin: 12px 0;
  background-color: var(--color-background);
  backdrop-filter: blur(var(--blur-size));
  border-radius: 8px;

  &__item {
    display: flex;
    align-items: center;
    width: fit-content;
    text-decoration: none;
    color: var(--color-text);
    & img {
      background-color: white;
      margin-right: 16px;
    }
    & + .skill__item {
      margin-top: 16px;
    }
    &:hover {
      color: var(--color-text-hover);
    }
  }
}
</style>
