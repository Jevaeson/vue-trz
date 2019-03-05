<template>
  <div>
    <Header :txt="txt"/>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header
  },
  data: () => ({}),
  computed: {
    txt() {
      return this.$route.path;
    }
  }
};
</script>

<style lang='scss'>
/* @import '../css/footer.scss'; */
</style>