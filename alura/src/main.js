import Vue from 'vue'
import App from './App.vue'

import VueResorce from 'vue-resource';

Vue.use(VueResorce);

new Vue({
  el: '#app',
  render: h => h(App)
})
