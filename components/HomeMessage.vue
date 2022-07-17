<template>
  <session-content v-if="homeData">
    <div class="message__title">
      {{ introduction.greeting }}
      <br />
      <div class="d-flex flex-wrap">
        <div class="message__title-name">{{ introduction.name }}</div>
        <div class="message__title-work">{{ introduction.position }}</div>
      </div>
    </div>
    <div class="message__sub-title">
      <vue-typer
        :text="introduction.message"
        :repeat="Infinity"
        initial-action="typing"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="70"
        erase-style="backspace"
      ></vue-typer>
    </div>
    <div class="contact">
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
  computed: {
    homeData() {
      return this.$store.getters['profile/getHomeData']
    },
    introduction() {
      return this.homeData.introduction
    },
    contacts() {
      return this.homeData.contacts
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;

  & a {
    margin: 0 24px;
    text-decoration: none;
  }
}
</style>
