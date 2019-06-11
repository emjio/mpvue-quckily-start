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
  const baseURL = 'https://shuiliao.tv/'
  wx.showLoading({
    title: '努力加载中...'
  })

  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      url: baseURL + config.url,
      data: config.params,
      success: res => {
        const statusCode = res.statusCode
        if (process.env.NODE_ENV === 'development') {
          switch (statusCode) {
            case 404:
              wx.showToast({
                title: `请求路径${baseURL + config.url}不存在`,
                icon: 'none',
                duration: 2000
              })
              break
            case 405:
              wx.showToast({
                title: '请求method不允许',
                icon: 'none',
                duration: 2000
              })
              break
            case 500:
              wx.showToast({
                title: '服务器500',
                icon: 'none',
                duration: 2000
              })
              break
          }
        } else { // 非开发模式下提供一般报错内容
          if (statusCode > 400 && statusCode < 500) {
            wx.showToast({
              title: '无法链接到服务器，请检查网络是否通常',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.showToast({
              title: '获取服务器资源出现错，请联系管理员',
              icon: 'none',
              duration: 2000
            })
          }
        }
        if (statusCode < 200 || statusCode > 400) {
          return reject(res.data || {})
        }
        return resolve(res.data || {})
      },
      flie: res => {
        if (process.env.NODE_ENV === 'development') {
          wx.showToast({
            title: res,
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '无法链接到服务器，请检查网络是否通常',
            icon: 'none',
            duration: 2000
          })
        }
        return reject(res.data || {})
      },
      complete: res => {
        wx.hideLoading()
        // TODO:
      }
    })
  })
}
