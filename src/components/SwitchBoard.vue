<template>
  <div class="owl-carousel owl-theme">
    <div class="vote-icon" @click="submitVote(0)" data-light-number="0">
      <heart></heart>
      <switch icon="heart.png"></switch>
    </div>
    <div class="vote-icon" @click="submitVote(1)" data-light-number="1">

      <switch icon="peach.png"></switch>
    </div>
    <div class="vote-icon" @click="submitVote(2)" data-light-number="2">
      <switch icon="sun.png"></switch>
    </div>
    <div class="vote-icon" @click="submitVote(3)" data-light-number="3">
      <switch icon="smile.png"></switch>
    </div>
    <div class="vote-icon" @click="submitVote(4)" data-light-number="4">
      <switch icon="volt.png"></switch>
    </div>
    <div class="vote-icon" @click="submitVote(5)" data-light-number="5">
      <switch icon="water.png"></switch>
    </div>
    <div class="vote-icon" @click="submitVote(6)" data-light-number="6">
      <switch icon="music.png"></switch>
    </div>
    <div class="vote-icon" @click="submitVote(7)" data-light-number="7">
      <switch icon="flower.png"></switch>
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
      $('.vote-icon').find("[data-light-number='" + id + "']").append('<heart></heart>');
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
