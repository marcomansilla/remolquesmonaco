import Vue from 'vue';
import App from './App.vue';

require('bulma/css/bulma.min.css');
require('font-awesome/css/font-awesome.min.css');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
