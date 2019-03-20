import Vue from 'vue'
import Vuex from 'vuex'
import todo from './module/todo'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo
  },
  getters,
  actions
})
