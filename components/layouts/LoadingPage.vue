<template>
  <transition v-if="loading" name="loading">
    <my-background style="z-index: 1000">
      <div class="animation">
        <span class="animation__bicycle"></span>
        <span class="animation__progress"></span>
      </div>
    </my-background>
  </transition>
</template>

<script>
import MyBackground from '~/components/layouts/MyBackground.vue'

export default {
  name: 'LoadingPage',
  components: { MyBackground },
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.start()
      setTimeout(() => this.finish(), 3000)
    })
  },
  methods: {
    /**
     * handle start loading
     * @return {void}
     */
    start() {
      this.loading = true
    },
    /**
     * handle stop loading
     * @return {void}
     */
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
// animation object
.animation {
  position: relative;
  left: calc(-100vw + 200px);
  bottom: 0;
  width: 100vw;
  animation: go-over 3s ease-in forwards;
}
@keyframes go-over {
  0% {
    left: calc(-100vw - 200px);
  }
  100% {
    left: 100vw;
  }
}

// bicycle
.animation__bicycle {
  position: absolute;
  bottom: -16px;
  right: -116px;
  width: 106px;
  height: 56px;
  display: inline-block;
  margin: 30px auto;
  box-sizing: border-box;
  transform: translateY(-50%) rotate(-45deg);
  background-image: linear-gradient(var(--color-bicycle) 50px, transparent 0),
    linear-gradient(var(--color-bicycle) 50px, transparent 0), linear-gradient(var(--color-bicycle) 50px, transparent 0),
    linear-gradient(var(--color-bicycle) 50px, transparent 0),
    radial-gradient(circle 14px, var(--color-bicycle) 100%, transparent 0);
  background-size: 48px 15px, 15px 35px, 15px 35px, 25px 15px, 28px 28px;
  background-position: 25px 5px, 58px 20px, 25px 17px, 2px 37px, 76px 0px;
  background-repeat: no-repeat;
}
.animation__bicycle::after,
.animation__bicycle::before {
  content: '';
  position: absolute;
  left: -45px;
  top: -10px;
  width: 56px;
  height: 56px;
  border: 6px solid var(--color-bicycle);
  border-radius: 50%;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-image: linear-gradient(var(--color-bicycle) 64px, transparent 0),
    linear-gradient(var(--color-bicycle) 66px, transparent 0),
    radial-gradient(circle 4px, var(--color-bicycle) 100%, transparent 0);
  background-size: 40px 1px, 1px 40px, 8px 8px;
  background-position: center center;
  animation: rotation 0.6s linear infinite;
}
.animation__bicycle::before {
  left: 25px;
  top: 60px;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// progress bar
.animation__progress {
  position: absolute;
  bottom: 0;
  left: -100vw;
  width: 200vw;
  height: 6px;
  display: inline-block;
  background: var(--color-bicycle);
}
.animation__progress::after,
.animation__progress::before {
  content: '';
  position: absolute;
  top: -12px;
  right: 18px;
  width: 18px;
  height: 1px;
  opacity: 0;
  box-sizing: border-box;
  background: var(--color-bicycle);
  animation: coli1 0.3s linear infinite;
}
.animation__progress::before {
  animation: coli2 0.3s linear infinite;
}
@keyframes coli1 {
  0% {
    transform: rotate(30deg) translateX(0px);
    opacity: 0.7;
  }
  100% {
    transform: rotate(30deg) translateX(-45px);
    opacity: 0;
  }
}
@keyframes coli2 {
  0% {
    transform: rotate(45deg) translateX(0px);
    opacity: 1;
  }
  100% {
    transform: rotate(45deg) translateX(-45px);
    opacity: 0.7;
  }
}
</style>
