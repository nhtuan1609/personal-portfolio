<template>
  <session-content>
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
          <v-card v-for="(group, groupIndex) in skillGroup" :key="groupIndex" class="my-3">
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
                class="skill"
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
    leftGroups() {
      return [
        {
          name: 'Frontend',
          skills: [
            {
              name: 'Vue.js',
              href: 'https://vuejs.org/',
              logoSrc: require('~/assets/image/skills/vue.svg')
            },
            {
              name: 'React',
              href: 'https://reactjs.org/',
              logoSrc: require('~/assets/image/skills/react.svg')
            },
            {
              name: 'Vuetify',
              href: 'https://vuetifyjs.com/',
              logoSrc: require('~/assets/image/skills/vuetify.svg')
            },

            {
              name: 'Material UI',
              href: 'https://mui.com/',
              logoSrc: require('~/assets/image/skills/material-ui.svg')
            }
          ]
        },
        {
          name: 'Backend',
          skills: [
            {
              name: 'Firebase',
              href: 'https://firebase.google.com/',
              logoSrc: require('~/assets/image/skills/firebase.svg')
            },
            {
              name: 'Spring',
              href: 'https://spring.io/',
              logoSrc: require('~/assets/image/skills/spring.svg')
            }
          ]
        }
      ]
    },
    rightGroups() {
      return [
        {
          name: 'Programing Languages',
          skills: [
            {
              name: 'JavaScript',
              href: 'https://www.javascript.com/',
              logoSrc: require('~/assets/image/skills/javascript.svg')
            },
            {
              name: 'Java',
              href: 'https://www.javascript.com/',
              logoSrc: require('~/assets/image/skills/java.svg')
            }
          ]
        },
        {
          name: 'Version Control',
          skills: [
            {
              name: 'Git',
              href: 'https://git-scm.com/',
              logoSrc: require('~/assets/image/skills/git.svg')
            }
          ]
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
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: var(--color-text);
  & img {
    background-color: white;
    margin-right: 16px;
  }
  & + .skill {
    margin-top: 16px;
  }
  &:hover {
    color: var(--color-text-hover);
  }
}
</style>
