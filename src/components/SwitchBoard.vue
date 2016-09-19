<template>
  <div>
    <carosuel-container class="flipp-carousel" :show-indicators="false" :auto="10000">
      <carousel-item>
        <switch :icon="icons.heartIcon" @click="submitVote(0)"></switch>
      </carousel-item>
      <carousel-item>
        <switch :icon="icons.peachIcon" @click="submitVote(1)"></switch>
      </carousel-item>
      <carousel-item>
        <switch :icon="icons.sunIcon" @click="submitVote(2)"></switch>
      </carousel-item>
      <carousel-item>
        <switch :icon="icons.smileIcon" @click="submitVote(3)"></switch>
      </carousel-item>
      <carousel-item>
        <switch :icon="icons.voltIcon" @click="submitVote(4)"></switch>
      </carousel-item>
      <carousel-item>
        <switch :icon="icons.waterIcon" @click="submitVote(5)"></switch>
      </carousel-item>
      <carousel-item>
        <switch :icon="icons.musicIcon" @click="submitVote(6)"></switch>
      </carousel-item>
      <carousel-item>
        <switch :icon="icons.flowerIcon" @click="submitVote(7)"></switch>
      </carousel-item>
    </carosuel-container>
  </div>
</template>

<style>
  .flipp-carousel {
    height: 200px;
    text-align: center;
  }
</style>

<script>

  import heartIcon from '../assets/images/icons/heart.png';
  import peachIcon from '../assets/images/icons/peach.png';
  import sunIcon from '../assets/images/icons/sun.png';
  import smileIcon from '../assets/images/icons/smile.png';
  import voltIcon from '../assets/images/icons/volt.png';
  import waterIcon from '../assets/images/icons/water.png';
  import musicIcon from '../assets/images/icons/music.png';
  import flowerIcon from '../assets/images/icons/flower.png';

  import 'vue-swipe/dist/vue-swipe.css';
  import { Swipe, SwipeItem } from 'vue-swipe';

  import Switch from './Switch';

  export default {
    name: 'SwitchBoard',
    components: {
      Switch: Switch,
      'carosuel-container': Swipe,
      'carousel-item': SwipeItem,
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
    methods: {
      submitVote(id) {
        console.log('cast vote for: ' + id);
      }
    },
  };
</script>
