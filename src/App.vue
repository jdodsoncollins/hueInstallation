<template>
  <section class="switch-container">
    <img :src="flippLogo" alt="" class="text-center">
    <switch-board></switch-board>
  </section>
</template>

<style>
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    background-size: 100% 100%;
    background: black url('./assets/background.jpg') no-repeat;
    z-index: -999;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .switch-container {
  }
  .app {
    /*background: url('./assets/images/gradientbg.png') no-repeat;*/
    /*background-size: 100% 100%;*/
  }
</style>

<script>
  import 'normalize.css/normalize.css';
  import SwitchBoard from './components/SwitchBoard';
  import flippLogo from './assets/flipp.svg';

  export default {
    components: {
      SwitchBoard,
    },
    data() {
      return {
        flippLogo: flippLogo,
      }
    }
  };
</script>

