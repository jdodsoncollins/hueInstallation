import 'foundation-sites/dist/foundation.min.css';

import Vue from 'vue';
import VueResource from 'vue-resource';
import 'normalize.css/normalize.css';

import App from './App';
import './clickThrottle.js';

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
