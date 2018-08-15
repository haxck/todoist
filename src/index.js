import Vue from 'vue'
import App from './App.vue'
import touch from './touch'


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})