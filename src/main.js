import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/regisster-vant'
import 'amfe-flexible' // REM适配：动态设置 html 标签大小
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
