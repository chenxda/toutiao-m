import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件库与样式
import Vant from 'vant'
import 'vant/lib/index.css'

// 全局css样式
import './styles/index.less'

Vue.config.productionTip = false
// 注册使用vant
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
