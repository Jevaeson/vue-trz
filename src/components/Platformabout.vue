<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/platform">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>关于平台</span>
    </div>
    <div class="vip-up-title">平台定位</div>
    <img src="../img/about.jpg" alt class="about-img">
    <p>金杜一贯追求卓越：卓越的法律服务、卓越的制度和卓越的人才。金杜绝大多数律师都毕业于国内外著名的法律院校，其中很多律师都曾有在国际知名律师事务所工作或执业的经历。金杜律师杰出的业务能力体现在全方位的法律服务上。无论是在我们传统优势领域，如银行融资、外商投资、公司事务、国际贸易、争议解决以及证券业务中，还是在新兴的业务领域，如知识产权保护、劳动法、破产、不良资产、金融衍生产品、资产证券化、风险投资和杠杆收购业务中，金杜律师一直处于法律服务的最前沿。</p>
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