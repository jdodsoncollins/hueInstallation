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
    background-image: url('./assets/images/gifblur.gif');
    background-repeat: no-repeat;
    background-size:100% 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .main-container {
    margin-bottom: 25px;
  }

  .app {
    background-image: url('./assets/images/gradientbg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>

<script>
import SwitchBoard from './components/SwitchBoard';

export default {
  components: {
    SwitchBoard,
  },
};
</script>

