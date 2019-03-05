import axios from 'axios'

const post = {
  state: {
    post: null
  },
  mutations: {
    getPost(state, newPost) {
      state.post = newPost
    }
  },
  actions: {
    getPost({ commit }, id) {
      axios.get(`http://localhost:3008/posts/${id}`).then(res => {
        commit('getPost', res.data)
      })
    }
  }
}
export default post
