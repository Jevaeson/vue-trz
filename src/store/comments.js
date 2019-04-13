import axios from 'axios'

const comments = {
  state: {
    comments: []
  },
  mutations: {
    // 模块内的mutation 函数内的第一个参数接收的是局部状态 也就是说该模块自己的state
    getComments(state, newComments) {
      state.comments = newComments
    },
    addComment(state, newComment) {
      state.comments = [...state.comments, newComment]
    },
    delComment(state, id) {
      state.comments = state.comments.filter(ele => ele.id !== id)
    }
  },
  actions: {
    // 在action函数里面有时候可能会用到局部的state还有整体的state 其实这些值都存储在action函数的第一个参数 context 对象内
    // {state,commit,rootState}
    getComments({ commit }, id) {
      setTimeout(() => {
        axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
          commit('getComments', res.data)
        })
      }, 1000)
    },
    addComment({ commit }, { newComment, clearInput }) {
      axios.post('http://localhost:3008/comments', newComment).then(res => {
        commit('addComment', res.data)
        clearInput()
      })
    },
    delComment({ commit }, id) {
      axios.delete(`http://localhost:3008/comments/${id}`).then(() => {
        commit('delComment', id)
      })
    }
  }
  // getters 和 computed 一个意思 全局都可以使用
  // getters: {
  //   // getter 函数第一个参数接收的是局部的状态 模块自己的状态
  //   commentsNum(state) {
  //     return state.comments.length
  //   }
  // }
}
export default comments
