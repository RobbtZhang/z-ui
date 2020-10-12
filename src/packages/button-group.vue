<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-button-group',
  mounted () {
    const children = this.$el.children
    children.forEach(item => console.assert(item.tagName === 'BUTTON', '子元素必须是button'))
  }
}
</script>

<style lang="scss">
@import '../styles/_var.scss';
.z-button-group {
  display: inline-flex;
  vertical-align: middle;
  button {
    &:not(first-child) {
      margin-left: -1px;
    }
    &:hover {
      z-index: 1
    }
    &:focus {
      z-index: 2
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
