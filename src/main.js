import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App.vue'
import { routes } from './routes';

Vue.use(axios);
Vue.use(VueResource);
Vue.use(VueRouter);

// Vue.$http.options.root = 'http://localhost:3000/user';
Vue.http.options.xhr = {withCredentials: true};

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
