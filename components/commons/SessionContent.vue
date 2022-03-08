<template>
  <div class="session">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SessionContent'
}
</script>

<style lang="scss" scoped>
.session {
  height: calc(100vh - var(--height-application-header) - var(--height-application-footer));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
