import axios from 'axios'
import {Message,MessageBox} from 'element-ui'
import store from '../store'
import {getToken} from "./auth";

// 创建axios实例
const service = new axios.create({
  baseURL:process.env.BASE_API,
  timeout:15000 // 请求超时时间(毫秒)
})

//request 拦截器
service.interceptors.request.use(config => {
  if(store.getters.token){
    config.headers['Authorization'] = getToken()
  }
  return config
},error => {
  console.log(error)
  Promise.reject(error)
})

//respone 拦截器
service.interceptors.response.use(
  response =>{
    const res = response.data
    if(res.code !== 200){
      Message({
        message:res.message,
        type:'error',
        duration:3*1000
      })

      //401 未登录
      if (res.code === 401 || res.code === 403){
        MessageBox.confirm('你已经退出','退出',{
          confirmButtonText:'重新登录',
          cancelButtonText:'取消',
          type:'waring'
        }).then(()=>{
          store.dispatch('FedLogOut').then(()=>{
            location.reload()//为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject('error')
    }else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message:error.message,
      type:'error',
      duration:3*1000
    })
    return Promise.reject(error)
  }
)
export default service
