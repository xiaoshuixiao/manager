// router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import index from '../view/index.vue'
import login from '../view/login.vue'

// 规则
const routes = [
  { path: '/login',
   component: login },
  { path: '/index',
   component: index ,
  meta:{
    // 增加元信息
    xixi:'xixi',

  }}
]

// 创建路由
const router = new VueRouter({
  routes
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  
  // if (to.path.indexOf('/index') == 0) {
    if(to.meta.xixi=='xixi'){
    if (window.localStorage.getItem('token') != undefined) {
      // 不能这么判断
      next()
    } else {
      new Vue().$message.error('heheda')
      router.push('/login')
    }
  } else {
    next()
  }
})


export default router