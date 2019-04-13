import axios from 'axios'

const item = {
  state: {
    item: null
  },
  mutations: {
    getItem(state, newItem) {
      state.item = newItem
    }
  },
  actions: {
    getItem({ commit }, id) {
      setTimeout(() => {
        axios.get(`http://localhost:3008/items/${id}`).then(res => {
          commit('getItem', res.data)
        })
      }, 1000)
    },
    upDetail({ commit }, { id, obj }) {
      axios.patch(`http://localhost:3008/items/${id}`, obj).then(res => {
        commit('getItem', res.data)
      })
    },
    receiveDetail({ commit }, { id, obj1 }) {
      axios.patch(`http://localhost:3008/items/${id}`, obj1).then(res => {
        commit('getItem', res.data)
      })
    }
  }
}
export default item
