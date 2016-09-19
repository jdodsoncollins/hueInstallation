<template>
  <section class="switch-container clearfix">
    <switch-board></switch-board>
  </section>
</template>

<style>
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: 100% 100%;
    background: black url('./assets/images/gifblur.gif') no-repeat;
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
    background: url('./assets/images/gradientbg.png') no-repeat;
    background-size: 100% 100%;
  }
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
</style>

<script>
  import 'normalize.css/normalize.css';
  import SwitchBoard from './components/SwitchBoard';

  export default {
    components: {
      SwitchBoard,
    },
  };
</script>

