import requestURL from './requestURL'
import request from './prevAxios'
/**
 * 请求API
 */
export default {
  /**
     *
     * @param {*} 获取数据可以不入参
     */
  inputinfo: async function (prams) {
    let response = await request.POST(requestURL.getinfo, prams)
    return response
  },
  /**
     * 列表请求
     */
  getinfo: async function (prams) {
    let response = await request.POST(requestURL.inputinfor, prams)
    return response
  }

}
