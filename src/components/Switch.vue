<template>
  <li>
    <img :src="../assets/images/icons/{{ icon }}"  />
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
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
