import { Toast } from 'vant'
import axios from 'axios'
import store from '@/store/'
const instance = axios.create({ baseURL: 'http://www.liulongbin.top:8000' })
// 请求拦截器
// 注意：在我们的项目中，是基于 instance 实例来发起 ajax 请求的，因此一定要为 instance 实例绑定请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 展示 loading 效果
    Toast.loading({
      message: '加载中...', // 文本内容
      duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
    })
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// token
instance.interceptors.request.use(
  (config) => {
    // 1. 获取 token 值
    const tokenStr = store.state.tokenInfo.token
    // 2. 判断 tokenStr 的值是否为空
    if (tokenStr) {
      // 3. 添加身份认证字段
      config.headers.Authorization = `Bearer ${tokenStr}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 响应拦截器（注意：响应拦截器也应该绑定给 instance 实例）
instance.interceptors.response.use(
  (response) => {
    // 隐藏 loading 效果
    Toast.clear()
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default instance
