<template>
  <session-content>
    <template #title>EXPERIENCE</template>
    <div class="experience">
      <h1 class="group">EDUCATION AND WORK</h1>
      <v-card v-for="(experience, index) in experienceList" :key="index">
        <v-card-title>
          <h2 class="group__title">{{ experience.name }}</h2>
        </v-card-title>
        <v-divider />
        <v-card-text class="group__content">
          <p v-if="experience.duration"><strong>Duration: </strong>{{ experience.duration }}</p>
          <p v-if="experience.position"><strong>Position: </strong>{{ experience.position }}</p>
          <p v-if="experience.status"><strong>Status: </strong>{{ experience.status }}</p>
          <p v-if="experience.major"><strong>Major: </strong>{{ experience.major }}</p>
          <p v-if="experience.typeOfdegree"><strong>Type of degree: </strong>{{ experience.typeOfdegree }}</p>
          <p v-if="experience.graduationClassification">
            <strong>Graduation classification: </strong>{{ experience.graduationClassification }}
          </p>
          <p v-if="experience.teachnology"><strong>Teachnology: </strong>{{ experience.teachnology }}</p>
          <p v-if="experience.description"><strong>Description: </strong></p>
          <ul>
            <li v-for="(description, descriptionIndex) in experience.description" :key="descriptionIndex">
              {{ description }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </div>

    <div class="experience">
      <h1 class="group">CERTIFICATIONS</h1>
      <v-card v-for="(group, groupIndex) in certificationGroups" :key="groupIndex">
        <v-card-title>
          <h2 class="group__title">{{ group.name }}</h2>
        </v-card-title>
        <v-divider />
        <v-card-text class="group__content">
          <div v-for="(certification, index) in group.certifications" :key="index" class="group__content-tag">
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
  name: 'MyExperience',
  components: { SessionContent },
  computed: {
    experienceList() {
      return [
        {
          name: 'Bach Khoa University',
          major: 'Control Engineering & Automation',
          typeOfdegree: 'Bachelor of Engineering - Honors Program',
          status: 'Graduated',
          graduationClassification: '8.65/10.00 - Very good',
          duration: 'August 2016 - November 2020'
        },
        {
          name: 'Emage Development Co., Ltd',
          position: 'Application Developer',
          teachnology: 'MFC and C++',
          duration: 'March 2020 - June 2021',
          description: [
            'Develop and enhance multiple UI features using MFC and C++.',
            'Provided application maintenance while working as Production Support.',
            'Research and implement new image processing algorithom to the application.',
            'Integrate deep learning method into the application using CMD or TCP.'
          ]
        },
        {
          name: 'Front-End Web Development Course',
          status: 'Completed',
          teachnology: 'HTML, CSS, JavaScript and React.js',
          duration: 'October 2020 - April 2021',
          description: [
            'Build a front-end website and responsive web design using HTML and CSS.',
            'Implement a functional front-end website using React.',
            'Consume API RESTful in React.',
            'Design the architecture for the website using React and Redux.'
          ]
        },
        {
          name: 'YC Solutions Company Limited',
          position: 'Web Developer',
          teachnology: 'JavaScript, NuxtJS, Vuetify and Firebase',
          duration: 'July 2021 - Present',
          description: [
            'Develop user interface components of the ERP web application using NuxtJS and Vuetify based on Figma design.',
            'Write high-performance, reusable code for UI components.',
            'Handle process data in backend with Firebase.'
          ]
        }
      ]
    },
    certificationGroups() {
      return [
        {
          name: 'freeCodeCamp',
          certifications: [
            {
              name: 'View Responsive Web Design Certification',
              href: 'https://www.freecodecamp.org/certification/nhtuan1609/responsive-web-design'
            },
            {
              name: 'View JavaScript Algorithms and Data Structures Certification',
              href: 'https://www.freecodecamp.org/certification/nhtuan1609/javascript-algorithms-and-data-structures'
            },
            {
              name: 'View Front End Development Libraries Certification',
              href: 'https://www.freecodecamp.org/certification/nhtuan1609/front-end-development-libraries'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.experience {
  width: 100%;
  padding: 24px;
  background-color: var(--color-background-secondary);
  & + .experience {
    margin-top: 48px;
  }
  & .v-card + .v-card,
  & .v-card + .group {
    margin-top: 24px;
  }
  & .group {
    background-color: var(--color-background);
    text-align: center;
    padding: 12px 0;
    margin-bottom: 24px;
    border-radius: 4px;
    &__title {
      color: var(--color-text);
      word-break: break-word;
    }
    &__content {
      font-size: 1.2rem;
      & ul {
        line-height: 2rem;
      }
      &-tag {
        & + .group__content-tag {
          margin-top: 12px;
        }
        & a {
          display: inline-block;
          padding: 8px;
          text-decoration: none;
          color: var(--color-text);
          font-weight: bold;
          border: 2px solid var(--color-border);
          &:hover {
            color: var(--color-background);
            background-color: var(--color-text);
          }
        }
      }
    }
  }
}
</style>
