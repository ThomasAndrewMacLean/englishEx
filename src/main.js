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
      apiKey: 'AIzaSyDKAgk1WulEHSSaGgkqfsz1pQvwB7sxab4',
      authDomain: 'englishexwebsite-3cb08.firebaseapp.com',
      databaseURL: 'https://englishexwebsite-3cb08.firebaseio.com',
      projectId: 'englishexwebsite-3cb08',
      storageBucket: 'englishexwebsite-3cb08.appspot.com',
      messagingSenderId: '56163657944',
    });
  },
});
