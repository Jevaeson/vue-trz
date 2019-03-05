<template>
  <div>
    <Header :txt="txt"/>
    <div class="inputBox">
      <input type="text" class="input" placeholder="请输入关键字搜索">
    </div>
    <mt-swipe :auto="4000" :show-indicators="false">
      <mt-swipe-item>
        <img src="../img/swiper.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/swiper.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/swiper.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>
    <div class="lists">
      <div class="list">项目收购</div>
      <div class="list">项目转让</div>
      <div class="list">项目合作</div>
      <div class="list">项目融资</div>
    </div>
    <mt-swipe :auto="0" class="mint-swipe-menu">
      <mt-swipe-item>
        <div class="menu">
          <div class="menu-up">
            <div>
              <img src="../img/1-1.jpg" alt>
              <span>不良资产</span>
            </div>
            <div>
              <img src="../img/1-2.jpg" alt>
              <span>房地产交易</span>
            </div>
            <div>
              <img src="../img/1-3.jpg" alt>
              <span>破产重组</span>
            </div>
            <div>
              <img src="../img/1-4.jpg" alt>
              <span>股权投资</span>
            </div>
            <div>
              <img src="../img/1-5.jpg" alt>
              <span>境外投资</span>
            </div>
          </div>
          <div class="menu-down">
            <div>
              <img src="../img/2-1.jpg" alt>
              <span>外商投资</span>
            </div>
            <div>
              <img src="../img/2-2.jpg" alt>
              <span>政府招商</span>
            </div>
            <div>
              <img src="../img/2-3.jpg" alt>
              <span>信托资管</span>
            </div>
            <div>
              <img src="../img/2-4.jpg" alt>
              <span>知识产权</span>
            </div>
            <div>
              <img src="../img/2-5.jpg" alt>
              <span>壳资源</span>
            </div>
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="menu">
          <div class="menu-up">
            <div>
              <img src="../img/1-1.jpg" alt>
              <span>不良资产</span>
            </div>
            <div>
              <img src="../img/1-2.jpg" alt>
              <span>房地产交易</span>
            </div>
            <div>
              <img src="../img/1-3.jpg" alt>
              <span>破产重组</span>
            </div>
            <div>
              <img src="../img/1-4.jpg" alt>
              <span>股权投资</span>
            </div>
            <div>
              <img src="../img/1-5.jpg" alt>
              <span>境外投资</span>
            </div>
          </div>
          <div class="menu-down">
            <div>
              <img src="../img/2-1.jpg" alt>
              <span>外商投资</span>
            </div>
            <div>
              <img src="../img/2-2.jpg" alt>
              <span>政府招商</span>
            </div>
            <div>
              <img src="../img/2-3.jpg" alt>
              <span>信托资管</span>
            </div>
            <div>
              <img src="../img/2-4.jpg" alt>
              <span>知识产权</span>
            </div>
            <div>
              <img src="../img/2-5.jpg" alt>
              <span>壳资源</span>
            </div>
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">最新项目</mt-tab-item>
      <mt-tab-item id="2">推荐项目</mt-tab-item>
      <mt-tab-item id="3">最热项目</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-if="items.length">
          <div v-for="item in items" :key="item.id" class="item">
            <span>{{item.type}}</span>
            <h4>{{item.title}}</h4>
          </div>
        </div>
        <div v-else>wait</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">测试测试</mt-tab-container-item>
      <mt-tab-container-item id="3">最热项目</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header
  },
  data: () => ({
    selected: "1"
  }),
  computed: {
    txt() {
      return this.$route.path;
    },
    items() {
      return this.$store.state.items.items;
    }
  },
  created() {
    this.$store.dispatch("getItems");
    console.log(this.$store.state);
  }
};
</script>

<style lang='scss'>
@import "../css/home.scss";
</style>