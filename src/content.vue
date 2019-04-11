<template>
  <div class="rainbow-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'RainbowContent'
  }
</script>

<style lang="scss" scoped>
.rainbow-content {
  flex-grow: 1;
}
</style> 