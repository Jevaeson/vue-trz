<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/platform">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>投融资讯</span>
    </div>
    <div class="inputBox">
      <input type="text" class="input" placeholder="请输入关键字搜索">
    </div>
    <div class="vip-ifo">
      <img src="../img/rule.jpg" alt>
      <div>
        <span>金杜国际中心重大交易</span>
        <p>金杜助力兖煤澳洲香港联交所上市,实现资本市场华丽三级跳……</p>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          <span>2018-12-19</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kanguo"></use>
          </svg>
          <span>390</span>
        </div>
      </div>
    </div>
    <div class="vip-ifo">
      <img src="../img/rule.jpg" alt>
      <div>
        <span>金杜国际中心重大交易</span>
        <p>金杜助力兖煤澳洲香港联交所上市,实现资本市场华丽三级跳……</p>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          <span>2018-12-19</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kanguo"></use>
          </svg>
          <span>390</span>
        </div>
      </div>
    </div>
    <div class="vip-ifo">
      <img src="../img/rule.jpg" alt>
      <div>
        <span>金杜国际中心重大交易</span>
        <p>金杜助力兖煤澳洲香港联交所上市,实现资本市场华丽三级跳……</p>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          <span>2018-12-19</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kanguo"></use>
          </svg>
          <span>390</span>
        </div>
      </div>
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
.vip-ifo {
  display: flex;
  align-items: center;
  padding: 1em;
  border-bottom: 1px solid #f2f2f2;
  > img {
    width: 25%;
    margin-right: 0.5em;
  }
  > div {
    display: flex;
    flex-direction: column;
    > span {
      font-size: 14px;
      color: #333;
    }
    > p {
      font-size: 13px;
      color: #999;
      margin: 0.5em 0;
    }
    > div {
      display: flex;
      align-items: center;
      svg {
        font-size: 12px;
        color: #999;
      }
      span {
        font-size: 13px;
        color: #999;
        margin-left: 0.5em;
        margin-right: 0.5em;
      }
    }
  }
}
</style>