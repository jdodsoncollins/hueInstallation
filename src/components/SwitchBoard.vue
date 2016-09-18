<template>
  <section class="owl-carousel owl-theme">
    <switch :icon="icons.heartIcon" @click="submitVote(0)"></switch>
    <switch :icon="icons.peachIcon" @click="submitVote(1)"></switch>
    <switch :icon="icons.sunIcon" @click="submitVote(2)"></switch>
    <switch :icon="icons.smileIcon" @click="submitVote(3)"></switch>
    <switch :icon="icons.voltIcon" @click="submitVote(4)"></switch>
    <switch :icon="icons.waterIcon" @click="submitVote(5)"></switch>
    <switch :icon="icons.musicIcon" @click="submitVote(6)"></switch>
    <switch :icon="icons.flowerIcon" @click="submitVote(7)"></switch>
  </section>
</template>

<script>

  import heartIcon from '../assets/images/icons/heart.png';
  import peachIcon from '../assets/images/icons/peach.png';
  import sunIcon from '../assets/images/icons/sun.png';
  import smileIcon from '../assets/images/icons/smile.png';
  import voltIcon from '../assets/images/icons/volt.png';
  import waterIcon from '../assets/images/icons/water.png';
  import musicIcon from '../assets/images/icons/music.png';
  import flowerIcon from '../assets/images/icons/flower.png';

  import 'owl.carousel/dist/assets/owl.carousel.css';
  import $ from 'jquery';
  import 'imports?jQuery=jquery!owl.carousel';

  import Switch from './Switch';

  export default {
    name: 'SwitchBoard',
    components: {
      Switch: Switch
    },
    data() {
      return {
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
//        margin: 30,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
//        stagePadding: 10,
      });
    },
    methods: {
      submitVote(id) {
        console.log('cast vote for: ' + id);
      }
    },
  };
</script>
