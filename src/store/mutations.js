import {
  LOGIN,
  LOGOUT
} from './mutation-types'

export default{
  [LOGIN] (state, v) {
    state.$globalData = v
    state.$globalData.$haslogin = true
  },
  [LOGOUT] (state) {
    state.$haslogin = false
  }
}
