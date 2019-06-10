/* eslint-disable no-return-await */
import axios from '../../node_modules/axios/dist/axios'

export default {
  /**
       * POST 请求
       */
  POST: async function (url, requestData) {
    return await axios({
      url: url,
      params: requestData,
      method: 'post',
      config: {
        headers: {'Content-Type': 'multipart/form-data'}
      }
    })
  },
  /**
       * GET 请求
       */
  GET: async function (url, requestData) {
    return await axios({
      url: url,
      params: requestData,
      method: 'get'
    })
  }
}

axios.defaults.adapter = function (config) {
  let baseURL = 'https://www.test.com'
  //   if (process.env.METHOD === 'proxy1') {
  //     baseURL = 'http://localhost:3001/getMovie' // 本地代理1(100次/小时)
  //   } else if (process.env.METHOD === 'proxy2') {
  //     baseURL = 'http://localhost:3002' // 本地代理2(100次/小时)
  //   } else if (process.env.METHOD === 'nginx') {
  //     baseURL = 'https://www.daxierhao.com/v2/movie' // nginx 代理(100次/小时)
  //   }
  console.log('baseURL', baseURL)
  // 发交易之前显示加载中
  wx.showLoading({ title: '拼命加载中...' })
  // 发交易调用(开发放开注释)
  return new Promise((resolve, reject) => {
    console.log(config)
    wx.request({
      ...config,
      url: baseURL + config.url,
      data: config.params,
      success: res => {
        console.log(res)
        if (res.statusCode < 200 || res.statusCode > 300) {
          return reject(res.data || {})
        }
        return resolve(res.data || {})
      },
      complete: res => {
        wx.hideLoading()
        // TODO:
      }
    })
  })
}
