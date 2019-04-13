<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/platform">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>所有VIP</span>
    </div>
    <div class="inputBox">
      <input type="text" class="input" placeholder="请输入关键字搜索">
    </div>
    <div class="vipList">
      <router-link to="/platform/viprule">
        <span>VIP规则</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </router-link>
    </div>
    <div class="vipList vipList2">
      <router-link to="/platform/vip">
        <span>申请VIP账号</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </router-link>
    </div>
    <div class="vipList vipItem">
      <router-link to="/platform/vipitem">
        <span>北京XX科技有限公司</span>
        <div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconset0169"></use>
            </svg>
            <span>法律</span>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconfontzhizuobiaozhun16"></use>
            </svg>
            <span>北京市</span>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wode"></use>
            </svg>
            <span>大月</span>
          </div>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          <span>房地产交易、不良资产、破产重组</span>
        </div>
      </router-link>
    </div>
    <div class="vipList vipItem">
      <router-link to="/platform/vipitem">
        <span>北京XX科技有限公司</span>
        <div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconset0169"></use>
            </svg>
            <span>法律</span>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconfontzhizuobiaozhun16"></use>
            </svg>
            <span>北京市</span>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wode"></use>
            </svg>
            <span>大月</span>
          </div>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          <span>房地产交易、不良资产、破产重组</span>
        </div>
      </router-link>
    </div>
    <div class="vipList vipItem">
      <router-link to="/platform/vipitem">
        <span>北京XX科技有限公司</span>
        <div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconset0169"></use>
            </svg>
            <span>法律</span>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconfontzhizuobiaozhun16"></use>
            </svg>
            <span>北京市</span>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wode"></use>
            </svg>
            <span>大月</span>
          </div>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          <span>房地产交易、不良资产、破产重组</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {}
};
</script>

<style lang='scss'>
.vip > .vip-up {
  display: flex;
  align-items: center;
  padding: 1em;
}
.vip > .vip-up > a {
  display: block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.vip > .vip-up > a > svg {
  width: 1em;
  height: 1em;
  color: #333;
}
.vip > .vip-up > span {
  margin-left: 0.4em;
  color: #333;
}
.vip > .vipList {
  padding: 1em;
  padding-bottom: 0em;
}
.vip > .vipList2 {
  border-bottom: 0.2em solid #f2f2f2;
}
.vip > .vipList > a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8em;
  border-bottom: 1px solid #f2f2f2;
  span {
    font-size: 16px;
    color: #333;
  }
  svg {
    font-size: 14px;
    color: #ccc;
  }
}
.vip > .vipList2 > a {
  border-bottom: none;
}
.vip > .vipItem > a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  svg {
    font-size: 12px;
  }
  > div:nth-child(2) {
    display: flex;
    margin-top: 0.5em;
    > div {
      display: flex;
      align-items: center;
      margin-left: 3em;
    }
    > div:first-child {
      margin-left: 0;
    }
    span {
      color: #979797;
      font-size: 14px;
    }
  }
  > div:nth-child(3) {
    display: flex;
    align-items: center;
    margin-top: 0.5em;
    span {
      color: #979797;
      font-size: 14px;
    }
  }
}
</style>