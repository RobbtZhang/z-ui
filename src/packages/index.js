// 所有组件入口
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
}

// 组件可能通过script标签引入 <script src="zhu-ui">
if (typeof window.Vue !== 'undefined') {
  install(window.Vue) // 全局直接通过script引用方式会默认调用install方法
}

export default {
  install
}
