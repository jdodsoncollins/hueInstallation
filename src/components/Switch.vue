<template>
  <div class="switch" v-on:click="vote" v-if="!disabled">
    <div v-bind:style="styleObject">
      <h4> {{name}} </h4>
    </div>
  </div>
  <div class="switch disabled" v-else>
    <div>
      <span>disabled</span>
      <br>
      <span> {{name}} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      msg: 'Vote',
    };
  },

  computed: {
    colorComputed() {
      if (this.color) {
        const computed = 'rgba(0,0,0,0)';
        // compute
        return computed;
      }
      return 'rgba(0,0,0,0)';
    },
    styleObject() {
      return {
        backgroundColor: this.colorComputed,
      };
    },
  },

  methods: {
    vote() {
      this.$dispatch('switchIndex', this.index);
      this.$dispatch('switchName', this.name);
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch {
  border: 1px solid gray;
  font-family: helvetica, arial, sans-serif;
  font-size: 1em;
  word-wrap: break-word;
  padding: 5px;
  margin: 5px;
  max-width: 100px;
  display: inline-block;
}
.switch:not(.disabled) {
  cursor: pointer;
}
</style>
