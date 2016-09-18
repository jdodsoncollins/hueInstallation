<template>
  <div class="owl-carousel owl-theme">
    <div class="vote-icon" @click="submitVote(0)" data-light-number="0">
      <heart :icon="icons.heartIcon"></heart>
      <img :src="icons.heartIcon">
    </div>
    <div class="vote-icon" @click="submitVote(1)" data-light-number="1">
      <heart :icon="icons.peachIcon"></heart>
      <img :src="icons.peachIcon">
    </div>
    <div class="vote-icon" @click="submitVote(2)" data-light-number="2">
      <heart :icon="icons.sunIcon"></heart>
      <img :src="icons.sunIcon">
    </div>
    <div class="vote-icon" @click="submitVote(3)" data-light-number="3">
      <heart :icon="icons.smileIcon"></heart>
      <img :src="icons.smileIcon">
    </div>
    <div class="vote-icon" @click="submitVote(4)" data-light-number="4">
      <heart :icon="icons.voltIcon"></heart>
      <img :src="icons.voltIcon">
    </div>
    <div class="vote-icon" @click="submitVote(5)" data-light-number="5">
      <heart :icon="icons.waterIcon"></heart>
      <img :src="icons.waterIcon">
    </div>
    <div class="vote-icon" @click="submitVote(6)" data-light-number="6">
      <heart :icon="icons.musicIcon"></heart>
      <img :src="icons.musicIcon">
    </div>
    <div class="vote-icon" @click="submitVote(7)" data-light-number="7">
      <heart :icon="icons.flowerIcon"></heart>
      <img :src="icons.flowerIcon">
    </div>
  </div>
</template>

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
      margin: 30,
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
