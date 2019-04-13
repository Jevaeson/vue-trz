<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/me">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>申请VIP账号</span>
    </div>
    <div class="fabu-up">
      <div>
        <div>
          <span>VIP全称</span>
          <span>*</span>
        </div>
        <input type="text" placeholder="请输入VIP全称">
      </div>
      <div>
        <div>
          <span>VIP简称</span>
          <!-- <span>*</span> -->
        </div>
        <input type="text" placeholder="请输入VIP简称">
      </div>
      <div>
        <div>
          <span>行业</span>
        </div>
        <input type="text" placeholder="请输入行业">
      </div>
      <div>
        <div>
          <span>地区</span>
        </div>
        <input type="text" placeholder="请输入地区">
      </div>
      <div>
        <div>
          <span>投融资领域（可多选）</span>
          <span>*</span>
        </div>
        <div class="fujian">
          <span>请选择</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="fabu-up">
      <div>
        <div>
          <span>联系人姓名</span>
          <span>*</span>
        </div>
        <input type="text" placeholder="请输入联系人姓名">
      </div>
      <div>
        <div>
          <span>职位</span>
          <!-- <span>*</span> -->
        </div>
        <input type="text" placeholder="请输入联系人的职位">
      </div>
      <div>
        <div>
          <span>邮箱</span>
          <span>*</span>
        </div>
        <input type="text" placeholder="请输入联系人的职位">
      </div>
      <div>
        <div>
          <span>手机号</span>
          <span>*</span>
        </div>
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div>
        <div>
          <span>座机</span>
          <!-- <span>*</span> -->
        </div>
        <input type="text" placeholder="请输入座机号码" :style="{borderBottom:'0'}">
      </div>
    </div>
    <div class="fabu-bottom" :style="{height:'6em'}">
      <button :style="{marginTop:'1em'}">申请</button>
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
</style>