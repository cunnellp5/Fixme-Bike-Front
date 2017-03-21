import bicyclist from './components/bicyclist/bicyclist.vue';
import makeissue from './components/bicyclist/makeissue.vue';
import viewissue from './components/store/viewissue.vue';
import store from './components/store/store.vue';
import home from './components/home.vue';
import login from './components/login.vue';
import signup from './components/signup.vue';

export const routes = [
  { path: '/login', component: login, name: 'login'},
  { path: '/signup', component: signup, name: 'signup'},
  { path: '', component: home, name: 'home' },
  { path: '/bicyclist/:id', component: bicyclist, children: [
    { path: '/bicyclist/:id/issue', component: makeissue, name: 'issue' }
  ] },
  { path: '/store/:id', component: store, children: [
    { path: '/store/:id/view', component: viewissue, name: 'viewissue' }
  ] },
  { path: '*', redirect: '/'}
];
