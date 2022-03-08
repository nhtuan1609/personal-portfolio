<template>
  <session-content>
    <div class="message">
      <div class="message-title">
        Hi, I am
        <br />
        <span>
          <strong>Tuan</strong>
        </span>
      </div>
      <div class="message-sub">
        <typewriter ref="typewriter" :replace="message" :type-interval="50" :replace-interval="1000" />
      </div>
    </div>
  </session-content>
</template>

<script>
import Typewriter from 'typewriter-vue'
import SessionContent from '~/components/commons/SessionContent.vue'

export default {
  name: 'HomeMessage',
  components: { SessionContent, Typewriter },
  data() {
    return {
      message: [
        { from: '', to: 'My portfolio will show you' },
        { from: 'My portfolio will show you', to: "all of that I've learned and accomplished" },
        { from: "all of that I've learned and accomplished", to: 'as a Frontend Developer' },
        { from: 'as a Frontend Developer', to: ' ' }
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      setInterval(() => {
        this.$refs.typewriter?.init()
      }, 15000)
    })
  }
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
}

.message-title {
  font-size: 5rem;
  text-align: center;
  color: var(--color-text);
}

.message-sub {
  height: 60px;
  font-size: 3rem;
  text-align: center;
  color: var(--color-text);
}
</style>
