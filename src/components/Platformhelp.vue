<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/platform">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>使用帮助</span>
    </div>
    <div class="help">
      <div>
        <span>一、如何进行平台的注册及登陆？</span>
        <p>金杜员工无需注册，在内网以及企业微信上默认登录，但在微信小程序登录时需输入用户名和密码(待定)</p>
      </div>
    </div>
    <div class="help">
      <div>
        <span>二、如何获得平台的VIP账户?</span>
        <p>平台的“VIP用户系统”有待事务所管理层批准后方可推出。</p>
        <p>平台将对VIP账户的授予设定规则，VIP账户需要合伙人向平台提出申请，在获得平台批准后授予特定，客户VIP账号和密码，VIP用户 可以凭借该用户名和密码登陆微信小程序，但无法登陆金杜的内网。</p>
      </div>
    </div>
    <div class="help">
      <div>
        <span>三、如何在平台，上发布项目？</span>
        <p>1.首先，登入平台;</p>
        <p>2.其次，登入后，在主页面点击“发布项目”按钮进行操作(如图) ;</p>
        <p>3.根据界面提示进行信息填写。其中，标有红色“*”号的栏目属于必填(如图)</p>
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
.help {
  padding: 1em;
  padding-top: 0;
  > div {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 1em;
  }

  span {
    color: #333;
  }
  p {
    color: #999;
    font-size: 14px;
    margin: 0;
  }
}
</style>