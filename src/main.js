import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



// 饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// router
import VueRouter from 'vue-router'
Vue.use (VueRouter)
// 导入基础样式
import './assets/base.scss'

//导入组件
import login from './components/login.vue'
import index from './components/index.vue'

// 规则
const routes = [
  {path:'/login',component:login},
  {path:'/index',component:index}
]

// 创建路由
const router = new VueRouter({
  routes
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
