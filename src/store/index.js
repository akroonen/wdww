import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    author: 'Arko Kroonen JS',
    treedata: [
      {
        naam: 'root',
        onderdelen: [{ naam: 'Child One' }, { naam: 'Child Two' }]
      }
    ]
  },
  mutations: {
    SETTREE(state, treedata) {
      this.state.treedata = treedata
    }
  },
  actions: {
    gettree(context) {
      axios
        .get('http://localhost:3000/gettree')
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
