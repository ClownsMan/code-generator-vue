import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getter'

import user from './modules/user';
import app from './modules/app';
import permission from './modules/permission';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    app,
    permission
  },
  state: {
  },
  getters,
  mutations: {
  },
  actions: {
  }
})
