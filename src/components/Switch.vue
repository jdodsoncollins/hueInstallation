<template>
  <div class="switch">
    <div>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Toggle',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch div {
  border: 1px solid gray;
  padding: 5px;
  margin: 5px;
  max-width: 100px;
  display: inline-block;
}
</style>
