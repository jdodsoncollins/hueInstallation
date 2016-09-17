<template>
  <div class="owl-carousel owl-theme">
    <div class="vote-icon" @click="submitVote(0)">
      <img src="../assets/images/icons/heart.png" />
    </div>
    <div class="vote-icon" @click="submitVote(1)">
      <img src="../assets/images/icons/peach.png" />
    </div>
    <div class="vote-icon" @click="submitVote(2)">
      <img src="../assets/images/icons/sun.png" />
    </div>
    <div class="vote-icon" @click="submitVote(3)">
      <img src="../assets/images/icons/smile.png" />
    </div>
    <div class="vote-icon" @click="submitVote(4)">
      <img src="../assets/images/icons/volt.png" />
    </div>
    <div class="vote-icon" @click="submitVote(5)">
      <img src="../assets/images/icons/water.png" />
    </div>
    <div class="vote-icon" @click="submitVote(6)">
      <img src="../assets/images/icons/music.png" />
    </div>
    <div class="vote-icon" @click="submitVote(7)">
      <img src="../assets/images/icons/flower.png" />
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
