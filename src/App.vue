<template>
  <div id="app">
    <z-button>默认按钮</z-button>
    <z-button type="primary">主要按钮</z-button>
    <z-button type="warning">警告按钮</z-button>
    <z-button type="danger">危险按钮</z-button>
    <z-button type="success">成功按钮</z-button>
    <z-button type="info">信息按钮</z-button>
    <z-icon icon="sousuo"></z-icon>
    <z-icon icon="bank-fill"></z-icon>
    <z-button type="success" icon="sousuo">成功按钮</z-button>
    <z-button type="danger" icon="sousuo"></z-button>
    <z-button type="warning" icon="bank-fill" icon-position="right">警告按钮</z-button>
    <z-button type="success" loading>加载中...</z-button>
    <z-button type="success" @click="fn">触发事件</z-button>
    <z-button-group>
      <z-button icon="left">上一页</z-button>
      <z-button icon="right"></z-button>
      <z-button icon="right" icon-position="right">下一页</z-button>
    </z-button-group>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    fn (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
</style>
