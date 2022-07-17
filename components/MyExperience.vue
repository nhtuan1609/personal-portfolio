<template>
  <session-content>
    <template #title>WORK EXPERIENCE</template>
    <div class="experience">
      <v-card v-for="(experience, index) in experienceList" :key="index" class="group">
        <v-card-title class="group__title">
          <h2>{{ experience.name }}</h2>
        </v-card-title>
        <v-divider />
        <v-card-text class="group__content">
          <p><strong>Duration: </strong>{{ experience.duration }}</p>
          <p><strong>Position: </strong>{{ experience.position }}</p>
          <p><strong>Projects: </strong></p>
          <v-expansion-panels :value="experience.projects.map((_, index) => index)" :hover="true" :multiple="true">
            <v-expansion-panel v-for="(project, projectIndex) in experience.projects" :key="projectIndex" class="panel">
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
    experienceList() {
      return [
        {
          name: 'YC Solutions Company Limited',
          position: 'Web Developer',
          duration: 'May 2021 - Present',
          projects: [
            {
              name: 'XYMax Aries',
              description:
                'This is ERP system using to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.',
              teamSize: 8,
              role: 'Member',
              responsibilities: [
                'Work with designer, QA, leader and other developers to business flow and requirements. Proposal solutions and communicate with them as a part of a team.',
                'Create basic design document based on Figma design to describe all data using for group of screens (registration, detail and list screen).',
                'Analyst the structure of data using for group of to define request and response of APIs which are used to perform GET, POST, PUT, PATCH and DELETE action.',
                'Create detail design document to divide screen into components and describe all APIs, functions and object types.',
                'Implement all APIs of group of screens in backend using Spring framework based on MVC architecture pattern.',
                'Combine Swagger UI and Advanced REST Client to produce test for APIs in backend.',
                'Layout the screens (registration, detail and list screen) based on Figma design, basic design and detail design using Next.js, Material UI and TypeScript.',
                'Use Axios to implement Rest APIs in frontend based on CRUD operations.',
                'Handle create, update and delete form data with React Hook Form.',
                'Handle sort, filter, pagination and select data in table with table of MUI.',
                'Review behavior and coding convention for relevant tickets.',
                'Integrate Amazon Simple Storage Service (Amazon S3) and create common process to manipulate with files.',
                'Create common functions, common components to drive reusability and performance.'
              ],
              technologyStack: {
                frontend: ['Next.js', 'TypeScript', 'Material UI', 'React Hook Form', 'Yup', 'Axios', 'Swagger UI'],
                backend: ['Spring', 'Java', 'PostgreSQL', 'jOOQ']
              }
            },
            {
              name: 'Claudio ERP Plus',
              description:
                'This is ERP system using to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations. Combine with OCR services that allows to convert scanned images, faxes, screenshots, PDF documents to text to help the user inputs the forms more efficiency and easier.',
              teamSize: 8,
              role: 'Member',
              responsibilities: [
                'Layout the screens (registration, detail and list screen) based on Figma design and business flow using Nuxt.js, Vuetify, JavaScript and SCSS.',
                'Manipulate data with google firebase based on CRUD operations and bind data to store to display in frontend.',
                'Improve common process to create histories and create common process to revert data when updating form.',
                'Improve common component using to filter list data based on specific fields and server side.',
                'Customize component of Vuetify such as v-data-table, v-textfield, v-tooltip to create common component using in frontend.'
              ],
              technologyStack: {
                frontend: ['Nuxt.js', 'JavaScript', 'Vuetify', 'SCSS'],
                backend: ['Firebase', 'JavaScript']
              }
            },
            {
              name: 'ERP Web App',
              description:
                'This is ERP system using in internal company. It is used to manage orders, services, estimates, invoices and reports.',
              teamSize: 4,
              role: 'Member',
              responsibilities: [
                'Create test cases and write unit test for frontend.',
                'Participate in creating and improving the design.',
                'Divide component and create common component for old screen based on current business flow.',
                'Refactor code and write JSDoc comments for frontend and backend.'
              ],
              technologyStack: {
                frontend: ['Next.js', 'TypeScript', 'React Bootstrap', 'Formik', 'Yup', 'Axios', 'Swagger UI'],
                backend: ['Express', 'TypeScript', 'PostgreSQL', 'Sequelize']
              }
            }
          ]
        },
        {
          name: 'Emage Development Co., Ltd',
          position: 'Application Developer',
          duration: 'March 2020 - May 2021',
          projects: [
            {
              name: 'Sherlock FCI',
              description:
                'It is an application using machine vision system and machine learning system to find the defects on the surface of semiconductor in the manufacturing processes.',
              teamSize: 4,
              role: 'Member',
              responsibilities: [
                'Work with leader and other developers to understand customer requirements, proposal solutions and communicate with them as a part of a team.',
                'Develop and enhance multiple UI features using MFC and C++.',
                'Provide the application maintenance and the guidelines to product engineer when in need.',
                'Research and implement new image processing algorithm to the application based on the customer requirements.',
                'Proposal the algorithm and common method to catch small defect on the surface for the repeat texture product.',
                'Update and enhance old image processing to meet the requirements.',
                'Integrate the interface method of deep learning system into the application using TCP to resolve multiple thread issue.',
                'Classify and describe the defect characteristic to fine tune the algorithm parameters and support deep learning team to recognize the defects.',
                'Write the manual documents for the new features or the improvements of the application.'
              ],
              technologyStack: {
                frontend: ['MFC', 'C++'],
                backend: ['C++', 'Halcon', 'Python']
              }
            },
            {
              name: 'Hawkeye',
              description:
                'It is an application using machine vision system and machine learning system to find the defects on the glass surface of mobile phone in the manufacturing processes.',
              teamSize: 2,
              role: 'Member',
              responsibilities: [
                'Enhance user interface using MFC and C++.',
                'Provide the application maintenance and the guidelines to product engineer when in need.',
                'Research and implement new image processing algorithm to the application based on the customer requirements.',
                'Update and enhance old image processing algorithm to meet the requirements.',
                'Classify and describe the defect characteristic to fine tune the algorithm parameters and support deep learning team to recognize the defects.',
                'Write the manual documents for the new features or the improvements of the application.'
              ],
              technologyStack: {
                frontend: ['MFC', 'C++'],
                backend: ['C++', 'Halcon']
              }
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
  box-shadow: 0 0 6px black;
  border-radius: 8px;
  & .v-card + .v-card,
  & .v-card + .group {
    margin-top: 24px;
  }
  & .group {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
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
      background-color: rgba(125, 125, 125, 0.3);
      backdrop-filter: blur(4px);
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
