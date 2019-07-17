// router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use (VueRouter)

//导入组件
import index from '../view/index.vue' 
import login from '../view/login.vue'

// 规则
const routes = [
  {path:'/login',component:login},
  {path:'/index',component:index}
]

// 创建路由
const router = new VueRouter({
  routes
})

export default router