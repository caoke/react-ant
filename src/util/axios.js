import axios from 'axios'

let input = null

// 设置浏览器cookie
function setCookie (name, value) {
  const Days = 30
  const exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()}`
}

axios.defaults.timeout = 30000

axios.interceptors.request.use(config => {
  config.headers.common['X-requested-with'] = 'XMLHttpRequest'
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  const { status, data } = response
  if (status === 200) {
    return data
  }
  return Promise.reject(data)
}, error => {
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    error.message = '网络请求超时'
    return Promise.reject(error)
  }
  if (input) return
  const { host } = window.location
  const { status } = error.response
  if (status === 403) {
    if (host.indexOf('localhost') > -1) {
      input = window.prompt('未登录，请输入cookie') || ''
      if (input) {
        setCookie('JSESSIONID', input)
        window.location.reload()
      }
    } else {
      window.location.href = '/login-cas'
    }
    return
  }
  return Promise.reject(error)
})

export default axios
