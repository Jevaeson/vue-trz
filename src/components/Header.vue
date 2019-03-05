<template>
  <header>{{title}}</header>
</template>

<script>
export default {
  props: ["txt"],
  data: () => ({}),
  computed: {
    title() {
      switch (this.txt) {
        case "/":
          return "首页";
        case "/item":
          return "项目";
        case "/platform":
          return "平台";
        case "/me":
          return "我的";
        default:
          break;
      }
    }
  }
};
</script>

<style lang='scss'>
header {
  width: 100%;
  height: 3.6em;
  line-height: 3.6em;
  background-color: #fff;
  color: #666675;
  text-align: center;
}
</style>