<template>
  <div class="switch">
    <div v-bind:style="styleObject">
      <h4> Emitted color: {{ color }}</h2>
      <h4> Computed color: {{ colorComputed }}</h2>
      <button v-on:click="vote"> {{ msg }}</button>
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
  },

  data() {
    return {
      msg: 'Vote',
      messages: [],
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
      console.log(this);
      this.$dispatch('child-msg', 'this.msg');
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
</style>
