<template>
  <div>
    <Header :txt="txt"/>
    <div class="me">
      <div>
        <span>王尊月</span>
        <div>
          <span>金杜律师事务所</span>
          <span>合伙人</span>
        </div>
      </div>
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551871026261&di=7a5a7215b65a43e17d1d6bc8a3674366&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1505558537%2C1158655358%26fm%3D214%26gp%3D0.jpg"
        alt
      >
    </div>
    <div class="plat">
      <div>
        <router-link to="/me/fabu">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
          <span>发布项目</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/me/myitem">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-icon-test"></use>
          </svg>
          <span>我的项目</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/me/collect">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>我的收藏</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div class="share">
        <router-link to="/me/share">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
          <span :style="{marginLeft:'-10.8em'}">我的分享</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/me/myvip">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-tongxunlu"></use>
          </svg>
          <span :style="{marginLeft:'-11.4em'}">我的VIP</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/me/myfriend">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-hezuo"></use>
          </svg>
          <span :style="{marginLeft:'-8.0em'}">我的联系合伙人</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/me/apply">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-shenqing"></use>
          </svg>
          <span :style="{marginLeft:'-9.5em'}">申请VIP账号</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/me/setting">
          <svg class="icon icontu" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
          <span>账户设置</span>
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
.share {
  .icontu {
    font-size: 12px;
  }
}
.me {
  display: flex;
  padding: 1em;
  justify-content: space-between;
  padding-top: 0;
  > img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
  > div {
    > span {
      color: #333;
      font-size: 20px;
    }
  }
  > div > div {
    display: flex;
    margin-top: 0.4em;
    span {
      color: #333;
      font-size: 14px;
    }
    span:nth-child(2) {
      margin-left: 1em;
    }
  }
}
</style>