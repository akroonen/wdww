import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    author: 'Arko Kroonen',
    tree: {}
  },
  mutations: {
    SETTREE(state, tree) {
      this.state.tree = tree
    }
  },
  actions: {
    gettree(context) {
      axios
        .get('http://localhost:3000/events')
        .then(response => {
          console.log(response.data) // <--- set the events when returned
          context.commit('SETTREE', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  modules: {}
})
