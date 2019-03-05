<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangmuxiaoxi"></use>
        </svg>
        <span>项目</span>
      </mt-tab-item>
      <mt-tab-item id="platform">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pingtaiguanli"></use>
        </svg>
        <span>平台</span>
      </mt-tab-item>
      <mt-tab-item id="me">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wode"></use>
        </svg>
        <span>我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import "../css/iconfont";
export default {
  data: () => ({
    selected: "home"
  }),
  created() {
    // 刷新后回到首页
    this.$router.push("/");
  },
  watch: {
    selected() {
      this.$router.push(this.selected === "home" ? "/" : `/${this.selected}`);
    }
  }
};
</script>

<style lang='scss'>
@import "../css/footer.scss";
</style>