import axios from 'axios'
// axios.default.baseURL = 'https://autumnfish.cn'
// axios.defaults.baseURL = 'https://wintercat.cn'
// export default axios
// 创建多个axios副本
// export const autumnAxios = axios.create({
//     baseURL: 'https://autumnfish.cn' 
//   })
// export const  winterAxios = axios.create({
//     baseURL: 'https://wintercat.cn'
//   })

// 暴露接口 抽取
const http = axios.create({
  baseURL: 'http://localhost:8888/api/private/v1/'
})

export const login = ( {username,password})=>{
  return http.post('login',{
    username,
    password
  })
}