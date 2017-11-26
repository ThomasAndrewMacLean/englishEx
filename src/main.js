import * as firebase from 'firebase';
import Vue from 'vue';
import store from './store/store';
import router from './router';
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC4eDdX57pWZtptJfAy5K4iVEjcGXukjLU',
      authDomain: 'englishex-7beff.firebaseapp.com',
      databaseURL: 'https://englishex-7beff.firebaseio.com',
      projectId: 'englishex-7beff',
      storageBucket: 'englishex-7beff.appspot.com',
      messagingSenderId: '885619142553',
    });
  },
});
