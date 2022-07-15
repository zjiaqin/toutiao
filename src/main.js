import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import 'amfe-flexible'

// 引入vant组件
import { NavBar, Form, Field, Button } from 'vant'

// 注册vant组件
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
