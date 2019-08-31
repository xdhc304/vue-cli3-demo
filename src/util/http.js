import axios from 'axios'
axios.defaults.withCredentials =true

// 拦截器的添加
// 请求拦截器
axios.interceptors.request.use(config => {
  // 发起请求前做些什么
  return config
}, () => {
  // 请求错误
  this.$message.warning('请求错误，请求稍后重试');
})

// 响应拦截器
axios.interceptors.response.use(res => {
  // 请求成功
  return res.data
}, () => {
  this.$message.warning('请求错误，请求稍后重试');
})

export default axios;