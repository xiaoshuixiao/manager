import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



// 饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 导入基础样式
import './assets/base.scss'
// 导入路由
import router from './router/router'

// axios
// import myaxios from './api/http'
// myaxios.get('fly').then(backData => {
//   console.log(backData)
// })
// import {autumnAxios,winterAxios} from './api/http'
// 这么导入也没有问题
// import {autumnAxios} from'./api/http'
// import {winterAxios} from'./api/http'

// autumnAxios.get('niupi').then(backData=>{
//   console.log(backData);
// })
// winterAxios.get('niupi').then(backData=>{
//   console.log(backData);
// })
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
