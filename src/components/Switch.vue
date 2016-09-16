<template>
  <div>
    <div class="switch" v-on:click="vote" v-if="!disabled">
      <div>
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

  },

  methods: {
    vote() {
      this.$dispatch('switchIndex', this.index);
      this.$dispatch('switchName', this.name);
    },
  },

};
</script>
