<template>
  <div class="session">
    <div class="session__title">
      <slot name="title"></slot>
    </div>
    <div class="session__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionContent'
}
</script>

<style lang="scss" scoped>
.session {
  min-height: calc(100vh - var(--height-application-header));
  display: flex;
  flex-direction: column;
  &__title {
    text-align: center;
    font-size: 3rem;
    line-height: 120px;
    font-weight: bold;
  }
  &__content {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
