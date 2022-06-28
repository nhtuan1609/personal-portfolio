<template>
  <session-content>
    <div class="message__title">
      Hi, I am
      <br />
      <span>
        <strong>Tuan</strong>
      </span>
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
      message: ['My portfolio will show you', "all of that I've learned and accomplished", 'as a Frontend Developer']
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  &__title {
    font-size: 5rem;
    text-align: center;
    color: var(--color-text);
  }

  &__sub-title ::v-deep .vue-typer {
    height: 60px;
    font-size: 3rem;
    text-align: center;

    .custom.char.typed {
      color: var(--color-text);
    }

    .caret.custom {
      background-color: var(--color-text);
    }
  }
}
</style>
