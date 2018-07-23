// Rgister Servive Worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register("sw.js");
}

window.onload = function() {
  document.body.append('PWA!')
}