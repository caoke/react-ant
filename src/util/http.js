import axios from './axios'

/**
 * loading方法
 */
function makeLoading () {
  return this.$loading({
    lock: true,
    text: '拼命加载中',
    spinner: 'el-icon-loading',
    fullscreen: false,
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

/**
 * get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get (url, params = {}, loading = false) {
  // let loader = loading ? makeLoading.apply(this, null) : null
  return new Promise((resolve, reject) => {
    axios.get(url, { params })
      .then(response => {
        if (loader) loader.close()
        resolve(response)
      })
      .catch(err => {
        if (loader) loader.close()
        this.$message({
          showClose: true,
          message: err.message,
          type: 'error'
        })
        reject(err)
      })
  })
}

/**
 * post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, params = {}, loading = false) {
  // let loader = loading ? makeLoading.apply(this, null) : null
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        if (loader) loader.close()
        resolve(response)
      })
      .catch(err => {
        if (loader) loader.close()
        this.$message({
          showClose: true,
          message: err.message,
          type: 'error'
        })
        reject(err)
      })
  })
}
