<template>
  <div class="app">
    <div class="content">

    </div>

    <div class="owl-carousel owl-theme">
      <div class="vote-icon" id="0">
        <img src="/images/icons/Heart.png" />
      </div>
      <div class="vote-icon" id="1">
        <img src="/images/icons/Peach.png" />
      </div>
      <div class="vote-icon" id="2">
        <img src="/images/icons/Sun.png" />
      </div>
      <div class="vote-icon" id="3">
        <img src="/images/icons/Smile.png" />
      </div>
      <div class="vote-icon" id="4">
        <img src="/images/icons/Volt.png" />
      </div>
      <div class="vote-icon" id="5">
        <img src="/images/icons/Water.png" />
      </div>
      <div class="vote-icon" id="6">
        <img src="/images/icons/Music.png" />
      </div>
      <div class="vote-icon" id="7">
        <img src="/images/icons/Flower.png" />
      </div>
    </div>
  </div>
</template>

<script>

import 'owl.carousel/dist/assets/owl.carousel.css';
import owlCarousel from 'imports?$=jquery,jQuery=jquery!owl.carousel';

import Switch from './Switch';
import Firebase from 'firebase';

export default {
  name: 'SwitchBoard',

  components: {
    Switch,
  },

  data() {
    return {
      loggedData: {},
      url: 'http://10.14.1.146/api/vfcRmQVlEUHHsVzyFHkEGTI4DqZVwbzUQzoxYR3X/lights',
      lightResource: null,
      selectedIndex: 0,
      selectedName: '',
    };
  },

  ready() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      slideBy: 100,
      dots: false
    });
  },

  events: {
    switchIndex(msg) {

      // this is a property sent up from the child
      this.selectedIndex = msg;
      const colorOption = Firebase.database().ref("Lights/option" + this.selectedIndex);

      colorOption.transaction(function(post) {
        if (post == null) {
          return 0;
        }

        return ++post;
      }).then(function (stuff) {
        console.log(stuff);
      }).catch(function (error) {
        console.log(error);
      });
    },
    switchName(msg) {
      // this is a property sent up from the child
      this.selectedName = msg;
      // console.log(msg);
    },
  },

};

</script>

<style>

</style>
