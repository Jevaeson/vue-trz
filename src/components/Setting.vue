<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/me">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>账户设置</span>
    </div>
    <div class="set">
      <div>
        <span>头像</span>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551871026261&di=7a5a7215b65a43e17d1d6bc8a3674366&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1505558537%2C1158655358%26fm%3D214%26gp%3D0.jpg"
          alt
        >
      </div>
      <div>
        <span>用户名</span>
        <span>zhangsan</span>
      </div>
      <div>
        <span>姓名</span>
        <div>
          <span>张三</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>公司名称</span>
        <div>
          <span>金杜律师事务所</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>公司简称</span>
        <div>
          <span>金杜</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>职位</span>
        <div>
          <span>律师</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>手机号</span>
        <div>
          <span>18888888888</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>邮箱</span>
        <div>
          <span>zunyue1025@163.com</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>座机</span>
        <div>
          <span>010-5888888</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>我的投融资客户</span>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>修改密码</span>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
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
.vip .set {
  padding: 1em;
  padding-top: 0;
  padding-bottom: 0em;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    padding: 1em 0;
    > div {
      display: flex;
      align-items: center;
    }
    span {
      color: #333;
    }
    svg {
      font-size: 12px;
      color: #999;
    }
  }
  > div:nth-child(1) {
    padding-top: 0;
    img {
      width: 2em;
      height: 2em;
      border-radius: 50%;
    }
  }
  > div:last-child {
    border-bottom: 0;
  }
}
</style>