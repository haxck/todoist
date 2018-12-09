/* eslint-disable no-new */
import Vue from 'vue'
import Hammer from 'hammerjs'

/**
 * 注册 touch 事件
 */
class VueTouch {
  constructor (el, type, binding) {
    this.el = el
    this.type = type
    this.binding = binding
    var hammertime = new Hammer(this.el)
    hammertime.on(this.type, this.binding.value)
  }
}

Vue.directive('tap', {
  bind: function (el, binding) {
    new VueTouch(el, 'tap', binding)
  }
})

Vue.directive('swipeleft', {
  bind: function (el, binding) {
    new VueTouch(el, 'swipeleft', binding)
  }
})
Vue.directive('swiperight', {
  bind: function (el, binding) {
    new VueTouch(el, 'swiperight', binding)
  }
})
Vue.directive('press', {
  bind: function (el, binding) {
    new VueTouch(el, 'press', binding)
  }
})
Vue.directive('pan', {
  bind: function (el, binding) {
    new VueTouch(el, 'pan', binding)
  }
})
Vue.directive('panend', {
  bind: function (el, binding) {
    new VueTouch(el, 'panend', binding)
  }
})
