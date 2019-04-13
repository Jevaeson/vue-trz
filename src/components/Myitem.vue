<template>
  <div class="vip">
    <div class="vip-up">
      <router-link to="/me">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <span>我的项目</span>
    </div>
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
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    items() {
      return this.$store.state.items.items;
    }
  }
};
</script>

<style lang='scss'>
</style>