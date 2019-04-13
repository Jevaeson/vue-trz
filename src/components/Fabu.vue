<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/me">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>发布项目</span>
    </div>
    <div class="fabu-up">
      <div>
        <div>
          <span>标题</span>
          <span>*</span>
        </div>
        <input type="text" placeholder="请输入标题">
      </div>
      <div>
        <div>
          <span>简介</span>
          <span>*</span>
        </div>
        <input type="text" placeholder="请输入简介">
      </div>
      <div>
        <div>
          <span>意向金额（可不填）</span>
        </div>
        <input type="text" placeholder="请输入意向金额">
      </div>
      <div>
        <div>
          <span>附件</span>
        </div>
        <div class="fujian">
          <span>委托代理协议.docx</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>+添加附件</span>
      </div>
    </div>
    <div class="fabu-up">
      <div>
        <div>
          <span>项目类型（可多选）</span>
          <span>*</span>
        </div>
        <div class="fujian itemtype">
          <span>请选择项目类型</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <div>
          <span>项目分类</span>
          <span>*</span>
        </div>
        <div class="fujian itemtype">
          <span>请选择项目分类</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <div>
          <span>所属行业</span>
          <span>*</span>
        </div>
        <div class="fujian itemtype">
          <span>请选择所属行业</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <div>
          <span>所属地区</span>
          <span>*</span>
        </div>
        <div class="fujian itemtype" :style="{border:'none'}">
          <span>请选择所属地区</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="fabu-up">
      <div>
        <div>
          <span>项目有效期</span>
          <span>*</span>
        </div>
        <div class="fujian itemtype">
          <span>请选择项目有效期</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <div>
          <span>推送范围（推送到微信企业号，可多选）</span>
        </div>
        <div class="fujian itemtype">
          <span>请选择推送范围</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <div>
          <span>申请置顶</span>
        </div>
        <div class="fujian itemtype">
          <span>不申请</span>
          <svg class="icon" aria-hidden="true" :style="{color:'#666',fontSize:'12px'}">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
      <div>
        <div>
          <span>申请首页轮播</span>
        </div>
        <div class="fujian itemtype" :style="{border:'none'}">
          <span>不申请</span>
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
        <input type="text" placeholder="张三">
      </div>
      <div>
        <div>
          <span>邮箱</span>
          <span>*</span>
        </div>
        <input type="text" placeholder="zhangsan@163.com">
      </div>
      <div>
        <div>
          <span>手机号</span>
        </div>
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div>
        <div>
          <span>座机</span>
        </div>
        <input type="text" placeholder="请输入座机号码" :style="{border:'none'}">
      </div>
    </div>
    <div class="fabu-bottom">
      <div>
        <input type="checkbox">
        <span>我确保以上信息真是准确</span>
      </div>
      <button>保存</button>
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
.fabu-up {
  border-bottom: 0.2em solid #f2f2f2;
  padding-bottom: 0.8em;
  input {
    outline: none;
    padding: 1em 0;
    border: none;
    border-bottom: 1px solid #f2f2f2;
    font-size: 13px;
    color: #333;
  }
  > div {
    padding: 0.6em 1.4em;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    > span {
      display: block;
      margin: 0 auto;
      color: #26a2ff;
      font-size: 13px;
    }

    > div {
      display: flex;
      span {
        color: #333;
      }
      span:nth-child(2) {
        color: #ff4081;
        margin-left: 0.6em;
      }
    }
    .fujian {
      align-items: center;
      margin-top: 0.6em;
      justify-content: space-between;
      span {
        font-size: 13px;
        color: #666;
      }
    }
    .itemtype {
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 0.6em;
    }
  }
}
.fabu-bottom {
  width: 100%;
  height: 9em;
  padding: 1em;
  background-color: #f2f2f2;
  > button {
    width: 100%;
    height: 3em;
    background-color: #007bff;
    color: #fff;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    display: block;
    margin-top: 3em;
  }
  > div {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>