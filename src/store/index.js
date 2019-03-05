import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import items from './items'
// import post from './post'
// import comments from './comments'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 在非发布环境下 启用严格模式
  strict: process.env.NODE_ENV !== 'production',
  //不管是哪一个模块的action和mutation getter 都是全局的
  modules: {
    items
    // post,
    // comments
  }
})

export default store
