import Vue from 'vue'
import App from './App.vue'


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}


function vueTouch(el, type, binding) {
  this.el = el;
  this.type = type;
  this.binding = binding;
  var hammertime = new Hammer(this.el);
  hammertime.on(this.type, this.binding.value);
};
Vue.directive("tap", {
  bind: function (el, binding) {
    new vueTouch(el, "tap", binding);
  }
});
Vue.directive("swipeleft", {
  bind: function (el, binding) {
    new vueTouch(el, "swipeleft", binding);
  }
});
Vue.directive("swiperight", {
  bind: function (el, binding) {
    new vueTouch(el, "swiperight", binding);
  }
});
Vue.directive("press", {
  bind: function (el, binding) {
    new vueTouch(el, "press", binding);
  }
})
Vue.directive("pan", {
  bind: function (el, binding) {
    new vueTouch(el, "pan", binding);
  }
})
Vue.directive("panend", {
  bind: function (el, binding) {
    new vueTouch(el, "panend", binding);
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})