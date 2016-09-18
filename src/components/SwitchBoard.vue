<template>
  <div class="owl-carousel owl-theme">
      <heart :icon="icons.heartIcon" @click="submitVote(0)"></heart>
      <heart :icon="icons.peachIcon" @click="submitVote(1)"></heart>
      <heart :icon="icons.sunIcon" @click="submitVote(2)"></heart>
      <heart :icon="icons.smileIcon" @click="submitVote(3)"></heart>
      <heart :icon="icons.voltIcon" @click="submitVote(4)"></heart>
      <heart :icon="icons.waterIcon" @click="submitVote(5)"></heart>
      <heart :icon="icons.musicIcon" @click="submitVote(6)"></heart>
      <heart :icon="icons.flowerIcon" @click="submitVote(7)"></heart>
  </div>
</template>

<style>
  .vote-icon {
    z-index: 999;
  }
</style>

<script>

import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'imports?jQuery=jquery!owl.carousel';

import Switch from './Switch';
import Firebase from 'firebase';
import Heart from './Heart';

import heartIcon from '../assets/images/icons/heart.png';
import peachIcon from '../assets/images/icons/peach.png';
import sunIcon from '../assets/images/icons/sun.png';
import smileIcon from '../assets/images/icons/smile.png';
import voltIcon from '../assets/images/icons/volt.png';
import waterIcon from '../assets/images/icons/water.png';
import musicIcon from '../assets/images/icons/music.png';
import flowerIcon from '../assets/images/icons/flower.png';

export default {
  name: 'SwitchBoard',

  components: {
    Switch, Heart
  },

  data() {
    return {
      loggedData: {},
      url: 'http://10.14.1.146/api/vfcRmQVlEUHHsVzyFHkEGTI4DqZVwbzUQzoxYR3X/lights',
      lightResource: null,
      selectedIndex: 0,
      selectedName: '',
      icons: {
        heartIcon: heartIcon,
        peachIcon: peachIcon,
        sunIcon: sunIcon,
        smileIcon: smileIcon,
        voltIcon: voltIcon,
        waterIcon: waterIcon,
        musicIcon: musicIcon,
        flowerIcon: flowerIcon,
      }
    };
  },

  ready() {
    $('.owl-carousel').owlCarousel({
      loop: true,
//      margin: 30,
      slideBy: 100,
      dots: false
    });
  },

  methods: {
    submitVote(id) {
      console.log(id);
    }
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
        console.log('stuff', stuff);
      }).catch(function (error) {
        console.log('error', error);
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
