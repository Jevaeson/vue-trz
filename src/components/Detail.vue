<template>
  <div class="detail">
    <div class="detail-up">
      <router-link :to="oldUrl">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>项目详情</span>
    </div>
    <div v-if="item">
      <div class="item">
        <div class="item-up">
          <span class="type">【{{item.type}}】</span>
          <h4>{{item.title}}</h4>
          <svg
            class="icon kong"
            aria-hidden="true"
            :style="{display: item.isUp ? 'none' : 'block'}"
            @click="up(item.id,true,item.up)"
          >
            <use xlink:href="#icon-xingxingkongxin"></use>
          </svg>
          <svg
            class="icon shi"
            aria-hidden="true"
            :style="{display: item.isUp ? 'block' : 'none'}"
            @click="up(item.id,false,item.up)"
          >
            <use xlink:href="#icon-xingxingshixin"></use>
          </svg>
        </div>
        <div class="bottom">
          <div>
            <span>{{item.date}}</span>
          </div>
          <div>
            <span>{{item.time}}</span>
          </div>
          <div>
            <svg class="icon l-icon" aria-hidden="true">
              <use xlink:href="#icon-kanguo"></use>
            </svg>
            <span>{{item.watch}}</span>
          </div>
          <div>
            <svg class="icon l-icon" aria-hidden="true">
              <use xlink:href="#icon-xingxingkongxin"></use>
            </svg>
            <span>{{item.up}}</span>
          </div>
          <div>
            <svg class="icon fenxiang" aria-hidden="true">
              <use xlink:href="#icon-fenxiang"></use>
            </svg>
          </div>
          <!-- <button
            class="no-receive"
            :style="{display: item.item_state ? 'none' : 'block'}"
            @click="receive(item.id,true)"
          >未接洽</button>
          <button
            class="receive"
            :style="{display: item.item_state ? 'block' : 'none'}"
            @click="receive(item.id,false)"
          >已接洽</button>-->
        </div>
        <p class="content">{{item.body}}</p>
      </div>
      <div class="middle">
        <span>
          意向金额：
          <span class="money">¥{{item.item_money}}</span>
        </span>
        <span>项目编号：{{item.item_num}}</span>
        <span>项目类型：{{item.item_type}}</span>
        <div>
          <span>项目分类：{{item.item_class}}</span>
          <span>所属行业：{{item.item_work}}</span>
        </div>
        <div>
          <span>所属地区：{{item.item_location}}</span>
          <span :style="{display:'flex'}">
            <span>项目状态：</span>
            <button
              class="no-receive"
              :style="{display: item.item_state ? 'none' : 'block'}"
              @click="receive(item.id,true)"
            >未接洽</button>
            <button
              class="receive"
              :style="{display: item.item_state ? 'block' : 'none'}"
              @click="receive(item.id,false)"
            >已接洽</button>
          </span>
        </div>
        <span>项目有效期：{{item.item_long}}</span>
        <span>
          附件：
          <svg class="icon word" aria-hidden="true">
            <use xlink:href="#icon-word"></use>
          </svg>
          {{item.item_file}}
        </span>
      </div>
      <div class="contact">
        <span>联系方式</span>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551867272820&di=aab05a9c738bc7eb3d48739ac23df62c&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150728%2Fmp24663467_1438082773592_20.jpeg"
          alt
        >
        <span>{{item.user_name}}</span>
        <div>
          <span>{{item.user_location}}</span>
          <span>{{item.user_type}}</span>
        </div>
        <div>
          <span>邮箱：{{item.user_email}}</span>
          <span>座机：{{item.user_call}}</span>
          <span>手机：{{item.user_phone}}</span>
        </div>
      </div>
    </div>
    <div v-else class="else">
      <img
        class="gif"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551846476187&di=3f8296887bc9d8b194ac16fd85a68e43&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a9e157060d416ac7257948f7c1c8.gif"
        alt
      >
    </div>
    <div v-if="comments.length" class="comments">
      <span>评论</span>
      <div v-for="e in comments" :key="e.id" class="comment">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551871026261&di=7a5a7215b65a43e17d1d6bc8a3674366&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1505558537%2C1158655358%26fm%3D214%26gp%3D0.jpg"
          alt
        >
        <div>
          <div>
            <span>{{e.name}}</span>
            <span>{{e.time}}</span>
            <svg class="icon" aria-hidden="true" @click="delComment(e.id)">
              <use xlink:href="#icon-shanchu"></use>
            </svg>
          </div>
          <p>{{e.txt}}</p>
        </div>
      </div>
    </div>
    <div v-else></div>
    <div class="bottomInput" v-if="comments.length">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551871026261&di=7a5a7215b65a43e17d1d6bc8a3674366&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1505558537%2C1158655358%26fm%3D214%26gp%3D0.jpg"
        alt
      >
      <input type="text" v-model="txt">
      <button @click="addComment">发送</button>
    </div>
    <div v-else></div>
  </div>
</template>


<script>
export default {
  components: {},
  data: () => ({
    oldUrl: "",
    txt: ""
  }),
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("getItem", id);
    this.$store.dispatch("getComments", id);
  },
  computed: {
    item() {
      return this.$store.state.item.item;
    },
    comments() {
      return this.$store.state.comments.comments;
    }
  },
  methods: {
    up(id, bool, up) {
      const obj = new Object();
      obj.isUp = bool;
      if (bool) {
        obj.up = up + 1;
      } else {
        obj.up = up - 1;
      }
      this.$store.dispatch("upDetail", { id, obj });
    },
    receive(id, bool) {
      const obj1 = new Object();
      obj1.item_state = bool;
      this.$store.dispatch("receiveDetail", { id, obj1 });
    },
    clearInput() {
      this.txt = "";
    },
    addComment() {
      const id = Number(this.$route.params.id);
      if (this.txt.trim()) {
        const newComment = {
          txt: this.txt,
          postId: id,
          name: "大月",
          time: "2018-12-20 14:46"
        };
        const clearInput = this.clearInput;
        this.$store.dispatch("addComment", { newComment, clearInput });
      }
    },
    delComment(id) {
      this.$store.dispatch("delComment", id);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.oldUrl = from.path; // 上一页面的路由信息
    });
  }
};
</script>

<style lang='scss'>
@import "../css/detail.scss";
</style>