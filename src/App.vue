<template>
  <div id="app">
    <switch></switch>
    <switch></switch>
    <switch></switch>
    <img class="logo" src="./assets/logo.png">
  </div>
  <footer>
    <img src="./assets/large.square.logo.black.png" alt="">
  </footer>
</template>

<script>
import Switch from './components/Switch';

export default {

  data() {
    return {
      loggedData: {},
      url: 'http://10.14.1.146/api/vfcRmQVlEUHHsVzyFHkEGTI4DqZVwbzUQzoxYR3X/lights',
      lightResource: null,
    };
  },

  ready() {
    this.lightResource = this.$resource(this.url);
    this.lightResource.get().then(res => {
      this.loggedData = res.data;
    });
  },

  components: {
    Switch,
  },

};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
