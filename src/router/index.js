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
import Chat from '@/views/Chat/Chat.vue'
import store from '@/store/'

Vue.use(VueRouter)
// 1. 将 VueRouter 本身提供的 $router.push 方法转存到常量中
const originalPush = VueRouter.prototype.push
// 2. 自定义 $router.push 方法，在内部调用原生的 originalPush 方法进行路由跳转；并通过 .catch 捕获错误
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }

  // 通过 .catch 捕获错误
  return originalPush.call(this, location).catch((err) => err)
}

const routes = [
  // 登录的路由规则
  { path: '/login', component: Login, name: 'login' },
  // 主页的路由规则
  {
    path: '/',
    component: Main,
    // path为空字符串的子路由规则
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        meta: { isRecord: true, top: 0 }
      },
      { path: 'user', component: User, name: 'user' }
    ]
  },
  // 搜索页的路由规则
  { path: '/search', component: Search, name: 'search' },
  // 搜索结果页的路由规则
  {
    path: '/search/:kw',
    component: SearchResult,
    name: 'search-result',
    props: true,
    meta: { isRecord: true, top: 0 }
  },
  {
    path: '/article/:id',
    component: ArticleDetail,
    name: 'article-detail',
    props: true,
    meta: { isRecord: true, top: 0 }
  },
  { path: '/user/edit', component: UserEdit, name: 'user-edit' },
  { path: '/chat', component: Chat, name: 'chat' }
]

const router = new VueRouter({
  routes
})
const pagePathArr = ['/user', '/user/edit']
router.beforeEach((to, from, next) => {
  if (pagePathArr.indexOf(to.path) !== -1) {
    const tokenStr = store.state.tokenInfo.token
    if (tokenStr) {
      next()
    } else {
      next(`/login?pre=${to.fullPath}`)
    }
  } else {
    next()
  }
})
// 全局后置钩子
router.afterEach((to, from) => {
  if (to.meta.isRecord) {
    setTimeout(() => {
      window.scrollTo(0, to.meta.top)
    }, 0)
  }
})
export default router
