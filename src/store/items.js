import axios from 'axios'

const items = {
  state: {
    items: []
  },
  mutations: {
    // 模块内的mutation 函数内的第一个参数接收的是局部状态 也就是说该模块自己的state
    getItems(state, newItems) {
      state.items = newItems
    }
  },
  actions: {
    // 在action函数里面有时候可能会用到局部的state还有整体的state(也就是rootState) 其实这些值都存储在action函数的第一个参数 context 对象内
    // {state,commit,rootState}
    getItems({ state, commit, rootState }) {
      // console.log(state, rootState)
      axios.get('http://localhost:3008/items').then(res => {
        commit('getItems', res.data)
      })
    }
  }
}
export default items
