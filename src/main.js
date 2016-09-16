import Vue from 'vue';
import VueResource from 'vue-resource';
import Firebase from 'firebase';
import 'normalize.css/normalize.css';

import App from './App';

Vue.use(VueResource);

$(function() {
  /* eslint-disable no-new */
  new Vue({
    el: 'body',
    components: {
      App,
    },
  });
});

Firebase.initializeApp({
  apiKey: 'AIzaSyAEZ6cdb0fIZ8mTpaZAcj0xthkdUOVfztA',
  authDomain: 'flipp-a77fe.firebaseapp.com',
  databaseURL: 'https://flipp-a77fe.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '636127035750',
});

Firebase.auth().signInAnonymously().catch(() => {
  // No op
});
