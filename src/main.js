import Vue from 'vue';
import App from './App.vue';

require('bootstrap/dist/css/bootstrap-reboot.min.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('jquery/dist/jquery.min.js');
require('font-awesome/css/font-awesome.min.css');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
