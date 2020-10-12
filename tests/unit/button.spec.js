import { shallowMount } from '@vue/test-utils' // vue提供的快速测试的方法
import { expect } from 'chai'

import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

describe('button.vue', () => {
  it('1.测试button能否正常显示slot里的内容', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'z-ui'
      }
    })
    expect(wrapper.text()).to.eq('z-ui')
  })
  it('2.测试icon传入是否正常显示', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'z-icon': Icon
      },
      propsData: {
        icon: 'left'
      }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-left')
  })
  it('3.测试loading时 按钮是否为禁用状态', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'z-icon': Icon
      },
      propsData: {
        loading: true
      }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading')
    expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
  })
  it('4.测试按钮能否正常点击', () => {
    const wrapper = shallowMount(Button, {
      stubs: ['z-icon'] // 不渲染icon 只是一个假标签
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click').length).to.eq(1)
  })
  it('5.按钮传入position是否正常显示', () => {
    const wrapper = shallowMount(Button, {
      attachToDocument: true, // 将组件挂载到浏览器上
      stubs: {
        'z-icon': Icon
      },
      slots: {
        default: 'z-ui'
      },
      propsData: {
        iconPosition: 'left',
        icon: 'left'
      }
    })
    const ele = wrapper.vm.$el.querySelector('span')
    expect(getComputedStyle(ele).order).to.eq('2')
    wrapper.setProps({ iconPosition: 'right' })
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(ele).order).to.eq('1')
    })
  })
})
