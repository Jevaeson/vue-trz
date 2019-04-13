<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/platform">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>合作机构</span>
    </div>
    <img src="../img/about.jpg" alt class="about-img">
    <p>金杜崇尚团队合作的理念和文化。全所统筹的体制使得各部门和各分所的律师可以分享文档、案例、人力资源和经验，从而将金杜建成一个紧密合作、团结统一的律师事务所。数年来，金杜所取得的杰出成绩已经在国内外商界和同行中赢得了很高的声誉和评价。金杜笃志成为亚太地区领先的综合律师事务所。。</p>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {}
};
</script>

<style lang='scss'>
.vip .about-img {
  width: 80%;
  display: block;
  margin: 0 auto;
}
</style>