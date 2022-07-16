<template>
  <session-content>
    <div class="message__title">
      Hi, I am
      <br />
      <div class="d-flex flex-wrap">
        <div class="message__title-name">TUAN</div>
        <div class="message__title-work">Web Developer</div>
      </div>
    </div>
    <div class="message__sub-title">
      <vue-typer
        :text="message"
        :repeat="Infinity"
        initial-action="typing"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="70"
        erase-style="backspace"
      ></vue-typer>
    </div>
    <div :class="['contact', { 'top-248': !$vuetify.breakpoint.mdAndUp }]">
      <v-tooltip v-for="(contact, index) in contacts" :key="index" top color="transparent">
        <template #activator="{ on, attrs }">
          <a :href="contact.href" target="_blank" v-bind="attrs" v-on="on">
            <v-btn icon>
              <v-icon>{{ contact.icon }}</v-icon>
            </v-btn>
          </a>
        </template>
        <span>{{ contact.name }}</span>
      </v-tooltip>
    </div>
  </session-content>
</template>

<script>
import { VueTyper } from 'vue-typer'
import SessionContent from '~/components/commons/SessionContent.vue'

export default {
  name: 'HomeMessage',
  components: { SessionContent, VueTyper },
  data() {
    return {
      message: ["My portfolio will show you all of that I've learned and accomplished as a Web Developer."],
      contacts: [
        {
          name: 'Email',
          icon: 'mdi-email',
          href: 'mailto:nhtuan1609@gmail.com'
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          href: 'https://www.facebook.com/nhtuan1609'
        },
        {
          name: 'Github',
          icon: 'mdi-github',
          href: 'https://github.com/nhtuan1609'
        },
        {
          name: 'freeCodeCamp',
          icon: 'mdi-fire-circle',
          href: 'https://www.freecodecamp.org/nhtuan1609'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  &__title {
    width: 100%;
    font-size: 5rem;
    color: var(--color-text);

    &-name {
      font-size: 10rem;
      font-weight: bold;
      line-height: 148px;
    }

    &-work {
      font-size: 3rem;
    }
  }

  &__sub-title {
    margin-top: 24px;
    width: 100%;
    font-size: 1.2rem;
    border-left: 2px solid var(--color-text);
    padding: 0 12px;

    &::v-deep .vue-typer {
      .custom.char.typed {
        color: var(--color-text);
      }
    }

    &::v-deep .caret.custom {
      background-color: var(--color-text);
    }
  }
}

.contact {
  position: relative;
  top: 288px;
  left: 0;
  width: 100%;
  text-align: center;
  &.top-248 {
    top: 248px;
  }

  & a {
    margin: 0 24px;
    text-decoration: none;
  }
}
</style>
