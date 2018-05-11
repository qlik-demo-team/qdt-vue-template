// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import App from './App';
import router from './Router';

Vue.config.productionTip = false;
Vue.use(VueHighlightJS);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
