<template>
  <div>
    <Header :txt="txt"/>
    <div class="inputBox">
      <input type="text" class="input" placeholder="请输入关键字搜索">
    </div>
    <mt-swipe :auto="4000" :show-indicators="false">
      <mt-swipe-item>
        <img src="../img/swiper.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/swiper.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/swiper.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>
    <div class="lists">
      <div class="list">项目收购</div>
      <div class="list">项目转让</div>
      <div class="list">项目合作</div>
      <div class="list">项目融资</div>
    </div>
    <mt-swipe :auto="0" class="mint-swipe-menu">
      <mt-swipe-item>
        <div class="menu">
          <div class="menu-up">
            <div>
              <img src="../img/1-1.jpg" alt>
              <span>不良资产</span>
            </div>
            <div>
              <img src="../img/1-2.jpg" alt>
              <span>房地产交易</span>
            </div>
            <div>
              <img src="../img/1-3.jpg" alt>
              <span>破产重组</span>
            </div>
            <div>
              <img src="../img/1-4.jpg" alt>
              <span>股权投资</span>
            </div>
            <div>
              <img src="../img/1-5.jpg" alt>
              <span>境外投资</span>
            </div>
          </div>
          <div class="menu-down">
            <div>
              <img src="../img/2-1.jpg" alt>
              <span>外商投资</span>
            </div>
            <div>
              <img src="../img/2-2.jpg" alt>
              <span>政府招商</span>
            </div>
            <div>
              <img src="../img/2-3.jpg" alt>
              <span>信托资管</span>
            </div>
            <div>
              <img src="../img/2-4.jpg" alt>
              <span>知识产权</span>
            </div>
            <div>
              <img src="../img/2-5.jpg" alt>
              <span>壳资源</span>
            </div>
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="menu">
          <div class="menu-up">
            <div>
              <img src="../img/1-1.jpg" alt>
              <span>不良资产</span>
            </div>
            <div>
              <img src="../img/1-2.jpg" alt>
              <span>房地产交易</span>
            </div>
            <div>
              <img src="../img/1-3.jpg" alt>
              <span>破产重组</span>
            </div>
            <div>
              <img src="../img/1-4.jpg" alt>
              <span>股权投资</span>
            </div>
            <div>
              <img src="../img/1-5.jpg" alt>
              <span>境外投资</span>
            </div>
          </div>
          <div class="menu-down">
            <div>
              <img src="../img/2-1.jpg" alt>
              <span>外商投资</span>
            </div>
            <div>
              <img src="../img/2-2.jpg" alt>
              <span>政府招商</span>
            </div>
            <div>
              <img src="../img/2-3.jpg" alt>
              <span>信托资管</span>
            </div>
            <div>
              <img src="../img/2-4.jpg" alt>
              <span>知识产权</span>
            </div>
            <div>
              <img src="../img/2-5.jpg" alt>
              <span>壳资源</span>
            </div>
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">最新项目</mt-tab-item>
      <mt-tab-item id="2">推荐项目</mt-tab-item>
      <mt-tab-item id="3">最热项目</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-if="items.length">
          <div v-for="item in items" :key="item.id" class="item">
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
            <router-link :to="`/item/${item.id}`">
              <p class="content">{{item.body}}</p>
            </router-link>
            <div class="bottom">
              <div>
                <svg class="icon l-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianhuaben"></use>
                </svg>
                <span>{{item.user_name}}</span>
              </div>
              <div>
                <svg class="icon l-icon" aria-hidden="true">
                  <use xlink:href="#icon-rili"></use>
                </svg>
                <span>{{item.date}}</span>
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
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div v-if="items.length">
          <div v-for="item in items" :key="item.id" class="item">
            <div class="item-up">
              <span class="type">【推荐项目】</span>
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
            <router-link :to="`/item/${item.id}`">
              <p class="content">{{item.body}}</p>
            </router-link>
            <div class="bottom">
              <div>
                <svg class="icon l-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianhuaben"></use>
                </svg>
                <span>{{item.user_name}}</span>
              </div>
              <div>
                <svg class="icon l-icon" aria-hidden="true">
                  <use xlink:href="#icon-rili"></use>
                </svg>
                <span>{{item.date}}</span>
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
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div v-if="items.length">
          <div v-for="item in items" :key="item.id" class="item">
            <div class="item-up">
              <span class="type">【最热项目】</span>
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
            <router-link :to="`/item/${item.id}`">
              <p class="content">{{item.body}}</p>
            </router-link>
            <div class="bottom">
              <div>
                <svg class="icon l-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianhuaben"></use>
                </svg>
                <span>{{item.user_name}}</span>
              </div>
              <div>
                <svg class="icon l-icon" aria-hidden="true">
                  <use xlink:href="#icon-rili"></use>
                </svg>
                <span>{{item.date}}</span>
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
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header
  },
  data: () => ({
    selected: "1"
  }),
  computed: {
    txt() {
      return this.$route.path;
    },
    items() {
      return this.$store.state.items.items;
    }
  },
  created() {
    this.$store.dispatch("getItems");
    // console.log(this.$store.state);
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
      this.$store.dispatch("up", { id, obj });
    },
    receive(id, bool) {
      const obj1 = new Object();
      obj1.item_state = bool;
      this.$store.dispatch("receive", { id, obj1 });
    }
  }
};
</script>

<style lang='scss'>
@import "../css/home.scss";
</style>