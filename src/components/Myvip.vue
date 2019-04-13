<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/me">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>我的VIP</span>
    </div>
    <div class="vip-mid">
      <span>VIP全称：北京XX科技有限公司</span>
      <span>VIP简称: XX科技</span>
      <span>行业:法律</span>
      <span>地区:北京</span>
      <span>投融资领域:房地产交易、不良资产、破产重组</span>
    </div>
    <div class="vip-bottom">
      <span>联系人:刘海涛</span>
      <span>职位:律师</span>
      <span>手机: 18888888888</span>
      <span>邮箱: panyujia@kwm.com</span>
      <span>座机: 010-88888888</span>
    </div>
    <div class="vip-bottom">
      <span>VIP账号：北京XX科技有限公司</span>
      <span>VIP有效期：截止到2019-12-25</span>
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
.vip-mid {
  display: flex;
  flex-direction: column;
  padding: 1em;
  padding-top: 0;
  span {
    color: #333;
    margin-top: 0.4em;
  }
}
.vip-bottom {
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-top: 0.2em solid #f2f2f2;
  span {
    color: #777;
    margin-top: 0.4em;
  }
}
</style>