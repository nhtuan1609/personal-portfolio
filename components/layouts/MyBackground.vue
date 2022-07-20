<template>
  <div class="background">
    <div class="background-image"></div>
    <div class="background-overlay"></div>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'MyBackground'
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;

  &-image {
    width: 100vw;
    height: 100vh;
    background-image: url('/image/background.jpg');
    background-size: cover;
    background-position: center;
  }

  &-overlay {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to right, rgba(0, 16, 32, 1), rgba(0, 16, 32, 0));
  }
}
</style>
