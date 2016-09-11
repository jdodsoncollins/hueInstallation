import Vue from 'vue';
import VueResource from 'vue-resource';
import SwitchBoard from './SwitchBoard';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { SwitchBoard },
});
