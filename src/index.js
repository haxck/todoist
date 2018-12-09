import Vue from 'vue'
import App from './App.vue'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
