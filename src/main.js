import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/regisster-vant'
import 'amfe-flexible' // REM适配：动态设置 html 标签大小
import './styles/base.less'
import './utils/validation' // 表单验证
Vue.config.productionTip = false
// 注：所有初始化的配置起码都应该在 new Vue 之前
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
