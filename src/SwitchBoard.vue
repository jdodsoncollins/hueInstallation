<template>
  <header>
    <img src="./assets/flipBrand.png" alt="" >
  </header>
  <p>Vote made for {{selectedName}}</p>
  <main id="switch-board">
    <div v-for="switch in switchOptions">
      <switch class="switch" v-bind:color="switch.color" v-bind:icon="switch.icon" v-bind:index="switch.index" v-bind:name="switch.name"></switch>
    </div>
  </main>
</template>
<script>
import Switch from './components/Switch';

export default {

  data() {
    return {
      loggedData: {},
      url: 'http://10.14.1.146/api/vfcRmQVlEUHHsVzyFHkEGTI4DqZVwbzUQzoxYR3X/lights',
      lightResource: null,
      selectedIndex: 0,
      selectedName: '',
      switchOptions: [ // example data object, server may provide this
        {
          color: 'blue',
          icon: '',
          name: 'a',
          index: 1,
        },
        {
          color: 'red',
          icon: '',
          name: 'b',
          index: 2,
        },
        {
          color: 'green',
          icon: '',
          name: 'c',
          index: 3,
        },
        {
          color: 'blue',
          icon: '',
          name: 'd',
          index: 4,
        },
        {
          color: 'red',
          icon: '',
          name: 'e',
          index: 5,
        },
        {
          color: 'green',
          icon: '',
          name: 'f',
          index: 6,
        },
        {
          color: 'blue',
          icon: '',
          name: 'g',
          index: 7,
        },
        {
          color: 'red',
          icon: '',
          name: 'h',
          index: 8,
        },
        {
          color: 'green',
          icon: '',
          name: 'i',
          index: 9,
        },
        {
          color: 'blue',
          icon: '',
          name: 'j',
          index: 10,
        },
        {
          color: 'red',
          icon: '',
          name: 'k',
          index: 11,
        },
        {
          color: 'green',
          icon: '',
          name: 'm',
          index: 12,
        },
        {
          color: 'blue',
          icon: '',
          name: 'n',
          index: 13,
        },
      ],
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
    switchIndex(msg) {
      // this is a property sent up from the child
      this.selectedIndex = msg;
      console.log(msg);
    },
    switchName(msg) {
      // this is a property sent up from the child
      this.selectedName = msg;
      console.log(msg);
    },
  },

};

</script>

<style>
html, body {
  height: 100%;
}
img {
  max-width: 500px;
  height: auto;
}
#switch-board {
  display: flex;
  flex-direction: row;
  align-content: flex-end;
}
#switch-board .switch {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
</style>
