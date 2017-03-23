import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App.vue'
import { routes } from './routes';
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)
Vue.use(axios);
Vue.use(VueResource);
Vue.use(VueRouter);

// Vue.$http.options.root = 'http://localhost:3000/user';

Vue.http.options = {
    method: 'post',
    params: {},
    data: '',
    xhr: true,
    jsonp: 'callback',
    beforeSend: null,
    crossOrigin: true,
    emulateHTTP: false,
    emulateJSON: false
  };

Vue.http.interceptors.push((request, next) => {
  console.log("adding auth header");
  request.headers.set('Authorization', 'Bearer ' + localStorage.token)
  request.headers.set('Accept', 'application/json')
  next()
})



// const API_URL = window.location.host.indexOf('localhost') > -1 ? 'http://localhost:3000/' : `https://git.heroku.com/fixmebike.git`;
Vue.http.headers.common ['Access-Control-Allow-Origin'] = 'https://fixmebike.herokuapp.com/';
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'



const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
