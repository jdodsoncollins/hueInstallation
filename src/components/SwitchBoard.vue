<template>
  <div>
    <p>Vote made for {{selectedName}}</p>
    <main>
      <swipe class="switch-swiper">
          <swipe-item v-for="switch in switchOptions">
            Page
            <switch v-bind:color="switch.color"
                    v-bind:icon="switch.icon"
                    v-bind:index="switch.index"
                    v-bind:name="switch.name"
                    v-bind:disabled="switch.disabled"></switch>
        </swipe-item>
      </swipe>
    </main>
  </div>
</template>

<script>
import Switch from './Switch';

export default {
  name: 'SwitchBoard',

  components: {
    Switch,
  },

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
          disabled: false,
        },
        {
          color: 'red',
          icon: '',
          name: 'b',
          index: 2,
          disabled: false,
        },
        {
          color: 'green',
          icon: '',
          name: 'c',
          index: 3,
          disabled: false,
        },
        {
          color: 'blue',
          icon: '',
          name: 'd',
          index: 4,
          disabled: false,
        },
        {
          color: 'red',
          icon: '',
          name: 'e',
          index: 5,
          disabled: false,
        },
        {
          color: 'green',
          icon: '',
          name: 'f',
          index: 6,
          disabled: false,
        },
        {
          color: 'blue',
          icon: '',
          name: 'g',
          index: 7,
          disabled: false,
        },
        {
          color: 'red',
          icon: '',
          name: 'h',
          index: 8,
          disabled: false,
        },
        {
          color: 'green',
          icon: '',
          name: 'i',
          index: 9,
          disabled: false,
        },
        {
          color: 'blue',
          icon: '',
          name: 'j',
          index: 10,
          disabled: false,
        },
        {
          color: 'red',
          icon: '',
          name: 'k',
          index: 11,
          disabled: false,
        },
        {
          color: 'green',
          icon: '',
          name: 'm',
          index: 12,
          disabled: false,
        },
        {
          color: 'blue',
          icon: '',
          name: 'n',
          index: 13,
          disabled: true,
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

  events: {
    switchIndex(msg) {
      // this is a property sent up from the child
      this.selectedIndex = msg;
      // console.log(msg);
    },
    switchName(msg) {
      // this is a property sent up from the child
      this.selectedName = msg;
      // console.log(msg);
    },
  },

};

</script>

<style>
.switch-swiper {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
  height: 200px;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
  height: 200px;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
  height: 200px;
}
</style>
