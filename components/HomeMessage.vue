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
      message: ["My portfolio will show you all of that I've learned and accomplished as a Web Developer."]
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
</style>
