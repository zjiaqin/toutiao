import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Main from '@/views/Main/Main.vue'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'
import Search from '@/views/Search/Search.vue'
import SearchResult from '@/views/SearchResult/SearchResult.vue'
import ArticleDetail from '@/views/ArticleDetail/ArticleDetail.vue'
import UserEdit from '@/views/UserEdit/UserEdit.vue'

Vue.use(VueRouter)

const routes = [
  // 登录的路由规则
  { path: '/login', component: Login, name: 'login' },
  // 主页的路由规则
  {
    path: '/',
    component: Main,
    // path为空字符串的子路由规则
    children: [
      { path: 'home', component: Home, name: 'home' },
      { path: 'user', component: User, name: 'user' }
    ]
  },
  // 搜索页的路由规则
  { path: '/search', component: Search, name: 'search' },
  // 搜索结果页的路由规则
  {
    path: '/search/:kw',
    component: SearchResult,
    name: 'search-result'
  },
  {
    path: '/article/:id',
    component: ArticleDetail,
    name: 'article-detail'
  },
  { path: '/user/edit', component: UserEdit, name: 'user-edit' }
]

const router = new VueRouter({
  routes
})

export default router
