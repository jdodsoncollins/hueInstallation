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

