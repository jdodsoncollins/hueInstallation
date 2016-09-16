<template>
  <div>
    <switch-board></switch-board>
  </div>
</template>

<script>

import SwitchBoard from './components/SwitchBoard';

export default {
  components: {
    SwitchBoard,
  },
};
</script>

<style>
  html, body, div.app {
  height:100%;
  width:100%;
  margin:0;
  }

  body {
  background-image: url('./assets/images/gifblur.gif');
  background-repeat: no-repeat;
  background-size:100% 100%;
  }

  div.content {
  height:75%;
  }

  .owl-carousel div {
  color:#ffffff;
  height:25%;
  width:100%;
  }

  div.app {
  background-image: url('./assets/images/gradientbg.png');
  background-repeat:no-repeat;
  background-size:100% 100%;
  }
</style>
