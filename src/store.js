import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes: notes,
    message: message
  }
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
})
