<template>
  <div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  components: {
    Footer
  }
};
</script>

<style lang='scss'>
@import "./css/app.scss";
</style>