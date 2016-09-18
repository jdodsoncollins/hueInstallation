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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: url('./assets/images/gifblur.gif') no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -999;
  }

  .main-container {
    margin-bottom: 100px;
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

