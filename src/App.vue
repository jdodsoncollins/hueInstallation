<template>
  <section class="flipp-container">
    <header>
      <img :src="flippLogo" alt="" class="text-center">
    </header>
    <article>
      <switch-board></switch-board>
    </article>
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
  }
  .flipp-container header {
    padding: 75px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

