import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    author: 'Arko Kroonen JS',
    tree: [
      {
        text: 'root',
        children: [{ text: 'Child One' }, { text: 'Child Two' }]
      }
    ]
  },
  mutations: {
    SETTREE(state, tree) {
      this.state.tree = tree
    }
  },
  actions: {
    gettree(context) {
      axios
        .get('http://study:3000/gettree')
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
