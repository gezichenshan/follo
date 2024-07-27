import axios from 'axios'

const requestInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'OriginType': 'web',
  },
  timeout: 10000,
})

// 响应请求的拦截器
requestInstance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data)
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default requestInstance
