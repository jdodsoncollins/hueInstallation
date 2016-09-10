<template>
  <div id="app">
    <switch color="blue"></switch>
    <switch color="red"></switch>
    <switch color="green"></switch>
    <footer>
      <img src="./assets/large.square.logo.black.png" alt="">
    </footer>
  </div>
</template>

<script>
import Switch from './components/Switch';

export default {

  data() {
    return {
      loggedData: {},
      url: 'http://10.14.1.146/api/vfcRmQVlEUHHsVzyFHkEGTI4DqZVwbzUQzoxYR3X/lights',
      lightResource: null,
      messages: [],
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

  events: {
    childMsg(msg) {
      // `this` in event callbacks are automatically bound
      // to the instance that registered it
      console.log('in parent', msg, this);
      this.messages.push(msg);
    },
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
