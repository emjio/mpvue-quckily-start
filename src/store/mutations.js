import {
  LOGIN,
  LOGOUT
} from './mutation-types'

export default{
  [LOGIN] (state, v) {
    state.$globalData = v
    state.$globalData.$hasLogin = true
  },
  [LOGOUT] (state) {
    state.$hasLogin = false
  }
}
