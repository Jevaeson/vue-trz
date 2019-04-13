<template>
  <div class="vip">
    <div class="vip-up share-up">
      <router-link to="/me">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>我的分享</span>
    </div>
    <div class="myshare">
      <div>
        <span>【境外投资】</span>
        <span>客户欲收购香港上市壳公司</span>
      </div>
      <div>
        <span>分享时间：</span>
        <span>2018-12-19 18:04</span>
      </div>
      <div>
        <span>分享地址：</span>
        <span>https://pan.baidu.com</span>
      </div>
      <div>
        <span>密码：</span>
        <span>3909</span>
        <button>中止分享</button>
      </div>
    </div>
    <div class="myshare">
      <div>
        <span>【境外投资】</span>
        <span>客户欲收购香港上市壳公司</span>
      </div>
      <div>
        <span>分享时间：</span>
        <span>2018-12-19 18:04</span>
      </div>
      <div>
        <span>分享地址：</span>
        <span>https://pan.baidu.com</span>
      </div>
      <div>
        <span>密码：</span>
        <span>3909</span>
        <button>中止分享</button>
      </div>
    </div>
    <div class="myshare">
      <div>
        <span>【境外投资】</span>
        <span>客户欲收购香港上市壳公司</span>
      </div>
      <div>
        <span>分享时间：</span>
        <span>2018-12-19 18:04</span>
      </div>
      <div>
        <span>分享地址：</span>
        <span>https://pan.baidu.com</span>
      </div>
      <div>
        <span>密码：</span>
        <span>3909</span>
        <button>中止分享</button>
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
.share-up {
  border-bottom: 0.2em solid #f2f2f2;
}
.myshare {
  display: flex;
  padding: 1em;
  flex-direction: column;
  > div:nth-child(1) {
    span:nth-child(1) {
      color: #007bff;
      font-size: 14px;
    }
    span:nth-child(2) {
      color: #333;
      font-size: 14px;
    }
  }
  > div:nth-child(2) {
    margin-top: 0.4em;
    span:nth-child(1) {
      color: #333;
      font-size: 14px;
    }
    span:nth-child(2) {
      color: #999;
      font-size: 14px;
    }
  }
  > div:nth-child(3) {
    margin-top: 0.4em;
    span:nth-child(1) {
      color: #333;
      font-size: 14px;
    }
    span:nth-child(2) {
      color: #999;
      font-size: 14px;
    }
  }
  > div:nth-child(4) {
    margin-top: 0.4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 1em;
    span:nth-child(1) {
      color: #333;
      font-size: 14px;
      margin-left: 2em;
    }
    span:nth-child(2) {
      color: #999;
      font-size: 14px;
      margin-left: -11em;
    }
    button {
      background-color: #007bff;
      color: #fff;
      outline: none;
      font-size: 14px;
      border-radius: 5px;
      border: none;
      display: block;
      padding: 0.2em 1em;
    }
  }
}
</style>