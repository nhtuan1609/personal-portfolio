<template>
  <div class="background">
    <div class="background-image"></div>
    <div class="background-overlay"></div>
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
  width: 100%;
  height: 100%;

  &-image {
    width: 100%;
    height: 100%;
    background-image: url('~assets/image/background.jpg');
    background-size: cover;
    background-position: center;
  }

  &-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0, 16, 32, 1), rgba(0, 16, 32, 0));
  }
}
</style>
