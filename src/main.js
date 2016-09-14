import Vue from 'vue';
import VueResource from 'vue-resource';

import 'normalize.css/normalize.css';
import { Swipe, SwipeItem } from 'vue-swipe';

import App from './App';

Vue.use(VueResource);
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App,
  },
});
