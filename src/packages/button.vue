<template>
  <button class="z-button" :class="btnClass" :disabled="loading" @click="$emit('click', $event)">
    <z-icon v-if="icon && !loading" :icon="icon" class="icon"></z-icon>
    <z-icon v-if="loading" icon="loading" class="icon"></z-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'z-button',
  props: {
    type: {
      type: String,
      default: () => '',
      validator (type) {
        if (type && !['warning', 'success', 'danger', 'info', 'primary'].includes(type)) {
          console.error('type类型必须为:' + ['warning', 'success', 'darger', 'info', 'primary'].join(','))
        }
        return true
      }
    },
    icon: {
      type: String,
      requird: true
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (type) {
        if (!['left', 'right'].includes(type)) {
          console.error('iconPosition属性必须为:' + 'left | right')
        }
        return true
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      const classes = []
      if (this.type) {
        classes.push(`z-button-${this.type}`)
      }
      if (this.iconPosition) {
        classes.push(`z-button-${this.iconPosition}`)
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_var.scss';
$hight: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8eeb;
.z-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $hight;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background: $background;
  }
  &:focus,&:active {
    color: $active-color;
    border: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type, $color in (primary: $primary, success: $success, info: $info, warning: $warning, danger: $danger) {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type, $color in (primary: $primary-hover, success: $success-hover, info: $info-hover, warning: $warning-hover, danger: $danger-hover) {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type, $color in (primary: $primary-active, success: $success-active, info: $info-active, warning: $warning-active, danger: $danger-active) {
    &-#{$type}:active, &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .icon {
    width: 16px!important;
    height: 16px!important;
  }
  .icon + span {
    margin-left: 4px;
  }
  &-left {
    svg {
      order:1
    }
    span {
      order:2
    }
  }
  &-right {
    svg {
      order:2
    }
    span {
      order:1;
    }
    .icon + span {
      margin-left: 0;
      margin-right: 4px;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
