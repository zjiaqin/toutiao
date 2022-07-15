import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Main from '@/views/Main/Main.vue'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

Vue.use(VueRouter)

const routes = [
  // 登录的路由规则
  { path: '/login', component: Login, name: 'Login' },
  // 主页的路由规则
  {
    path: '/',
    component: Main,
    // path为空字符串的子路由规则
    children: [
      { path: 'home', component: Home, name: 'home' },
      { path: 'user', component: User, name: 'user' }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
