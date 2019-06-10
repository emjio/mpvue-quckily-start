import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState({
    storage: {
      getItem: key => wx.getStorageSync(key),
      setItem: (key, value) => wx.setStorageSync(key, value),
      removeItem: key => () => { console.log(1) }
    }
  })]
})

export default store
