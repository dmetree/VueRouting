import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter ({
  routes: routes,
  mode: 'history'
  // server needs to be configured in a particular way to use the History mode
  // default more is 'hash'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
