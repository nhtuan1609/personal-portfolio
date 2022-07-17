<template>
  <session-content>
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
      return [
        {
          name: 'Monotasking',
          imgSrc: '/image/projects/monotasking.jpg',
          date: '08-01-2022',
          source: 'https://github.com/nhtuan1609/monotasking',
          website: 'https://monotasking.vercel.app/',
          description: "Manage your team's work, projects and task online.",
          features: [
            'Manage your tasks based on workspace and project separately. Easily to track progress of task and project.',
            'List view: Organize and assign tasks. With lists, teams see immediately what they need to do, which tasks are a priority, and when work is due.',
            'Timeline: See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks—and create plans your team can count on.',
            "Boards: Make it easy for your team to focus on tasks currently at hand. Define each stage of work to see what's important and where things are getting stuck."
          ],
          technologies: [
            {
              name: 'NuxtJS',
              href: 'https://nuxtjs.org/',
              logoSrc: '/image/skills/nuxtjs.svg'
            },
            {
              name: 'Vuetify',
              href: 'https://vuetifyjs.com/',
              logoSrc: '/image/skills/vuetify.svg'
            },
            {
              name: 'Firebase',
              href: 'https://firebase.google.com/',
              logoSrc: '/image/skills/firebase.svg'
            }
          ]
        },
        {
          name: 'Movie Ticket',
          imgSrc: '/image/projects/movie-ticket.jpg',
          date: '12-05-2021',
          source: 'https://github.com/nhtuan1609/movie_ticket',
          website: 'https://movie-ticket-alpha.vercel.app/',
          description: 'This is a Movie Ticket app created by Reactjs and Redux.',
          features: [
            'Design frontend website by using function components.',
            'Consume RESTful API in React with Redux.',
            'Layout and Responsive web design with Material-UI.',
            'Template configuration with React Router.'
          ],
          technologies: [
            {
              name: 'React',
              href: 'https://reactjs.org/',
              logoSrc: '/image/skills/react.svg'
            },
            {
              name: 'Material UI',
              href: 'https://mui.com/',
              logoSrc: '/image/skills/material-ui.svg'
            },
            {
              name: 'Redux',
              href: 'https://redux.js.org/',
              logoSrc: '/image/skills/redux.svg'
            }
          ]
        },
        {
          name: 'Music Player',
          imgSrc: '/image/projects/music-player.jpg',
          date: '27-02-2021',
          source: 'https://github.com/nhtuan1609/music_player',
          website: 'https://music-player-sigma.vercel.app/',
          description: 'This is a Music Player app created with HTML, CSS and JavaScript.',
          features: ['Play your favorite musics.', 'Handle event with JavaScript.', 'Responsive web design.'],
          technologies: [
            {
              name: 'HTML',
              href: 'https://vi.wikipedia.org/wiki/HTML',
              logoSrc: '/image/skills/html.svg'
            },
            {
              name: 'CSS',
              href: 'https://vi.wikipedia.org/wiki/CSS',
              logoSrc: '/image/skills/css.svg'
            },
            {
              name: 'JavaScript',
              href: 'https://www.javascript.com/',
              logoSrc: '/image/skills/javascript.svg'
            }
          ]
        },
        {
          name: 'Todo List',
          imgSrc: '/image/projects/todo-list.jpg',
          date: '20-02-2021',
          source: 'https://github.com/nhtuan1609/todo_list',
          website: 'https://todo-list-two-pi.vercel.app/',
          description: 'This is a Todo App created with React and Material UI that keeps a track of your Todos.',
          features: ['Keeps track of your Todos.', 'Powered by React and Material UI.', 'Respoisive web design.'],
          technologies: [
            {
              name: 'React',
              href: 'https://reactjs.org/',
              logoSrc: '/image/skills/react.svg'
            },
            {
              name: 'Material UI',
              href: 'https://mui.com/',
              logoSrc: '/image/skills/material-ui.svg'
            }
          ]
        },
        {
          name: 'Shopee Homepage',
          imgSrc: '/image/projects/shopee-homepage.jpg',
          date: '10-02-2021',
          source: 'https://github.com/nhtuan1609/shopee_homepage',
          website: 'https://shopee-homepage.vercel.app/',
          description: 'This is homepage of Shopee which is created by using HTML and CSS.',
          features: ['Responsive web design.', 'Layout website using HTML and CSS.'],
          technologies: [
            {
              name: 'HTML',
              href: 'https://vi.wikipedia.org/wiki/HTML',
              logoSrc: '/image/skills/html.svg'
            },
            {
              name: 'CSS',
              href: 'https://vi.wikipedia.org/wiki/CSS',
              logoSrc: '/image/skills/css.svg'
            }
          ]
        },
        {
          name: 'W3 Band',
          imgSrc: '/image/projects/w3-band.jpg',
          date: '28-01-2021',
          source: 'https://github.com/nhtuan1609/w3_band',
          website: 'https://w3-band.vercel.app/',
          description: 'This is one page website W3 Band which is created by using HTML and CSS.',
          features: ['Responsive web design.', 'Layout website using HTML and CSS.'],
          technologies: [
            {
              name: 'HTML',
              href: 'https://vi.wikipedia.org/wiki/HTML',
              logoSrc: '/image/skills/html.svg'
            },
            {
              name: 'CSS',
              href: 'https://vi.wikipedia.org/wiki/CSS',
              logoSrc: '/image/skills/css.svg'
            }
          ]
        }
      ]
    }
  },
  created() {
    this.isShowDetails = this.projects.reduce((object, _, index) => {
      return { ...object, [index]: false }
    }, {})
  },
  methods: {
    toggleDetails(index) {
      this.isShowDetails[index] = !this.isShowDetails[index]
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
