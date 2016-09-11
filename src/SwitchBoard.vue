<template>
  <div id="app">
    <switch color={{switchOptions.one.color}}></switch>
    <switch color={{switchOptions.two.color}}></switch>
    <switch color={{switchOptions.three.color}}></switch>
    <switch color={{switchOptions.four.color}}></switch>
    <switch color={{switchOptions.five.color}}></switch>
    <switch color={{switchOptions.six.color}}></switch>
    <switch color={{switchOptions.seven.color}}></switch>
    <switch color={{switchOptions.eight.color}}></switch>
    <switch color={{switchOptions.nine.color}}></switch>
    <switch color={{switchOptions.ten.color}}></switch>
    <switch color={{switchOptions.eleven.color}}></switch>
    <switch color={{switchOptions.twelve.color}}></switch>

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
      switchOptions: {
        one: {
          color: 'blue',
          icon: '',
          index: 1,
        },
        two: {
          color: 'red',
          icon: '',
          index: 2,
        },
        three: {
          color: 'green',
          icon: '',
          index: 3,
        },
        four: {
          color: 'blue',
          icon: '',
          index: 4,
        },
        five: {
          color: 'red',
          icon: '',
          index: 5,
        },
        six: {
          color: 'green',
          icon: '',
          index: 6,
        },
        seven: {
          color: 'blue',
          icon: '',
          index: 7,
        },
        eight: {
          color: 'red',
          icon: '',
          index: 8,
        },
        nine: {
          color: 'green',
          icon: '',
          index: 9,
        },
        ten: {
          color: 'blue',
          icon: '',
          index: 10,
        },
        eleven: {
          color: 'red',
          icon: '',
          index: 11,
        },
        twelve: {
          color: 'green',
          icon: '',
          index: 12,
        },
      },
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
      this.messages.push(msg);
      console.log(this.messages);
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
