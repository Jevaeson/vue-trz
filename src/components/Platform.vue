<template>
  <div>
    <Header :txt="txt"/>
    <div class="plat">
      <div>
        <router-link to="/platform/vip">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-vip"></use>
          </svg>
          <span>所有VIP</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/platform/ifo">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-gupiaoqiquan"></use>
          </svg>
          <span>投融资讯</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/platform/about">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-pingtaiguanli"></use>
          </svg>
          <span>关于平台</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/platform/tog">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-hezuo"></use>
          </svg>
          <span>合作机构</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/platform/help">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-luopancompass83"></use>
          </svg>
          <span>使用帮助</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
    </div>
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
@import "../css/platform.scss";
</style>