<template>
  <section class="main-container">
    <switch-board></switch-board>
  </section>
</template>

<style>
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    background: url('./assets/images/gifblur.gif') no-repeat;
    background-size: 100% 100%;
    z-index: -999;
  }
  .main-container {
  }
  .app {
    background: url('./assets/images/gradientbg.png') no-repeat;
    background-size: 100% 100%;
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

