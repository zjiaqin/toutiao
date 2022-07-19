import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfoAPI, getUserProfileAPI } from '@/api/index.js'

Vue.use(Vuex)
// 对库中的tokenInfo对象进行初始化赋值
// 初始的 state 对象
let initState = {
  // token 的信息对象
  tokenInfo: {},
  // 用户的基本信息
  userInfo: {},
  // 用户的简介信息
  userProfile: {}
}
// 获取本地存储中的token数据
const stateStr = localStorage.getItem('state')
// 如若有本地有数据,那么将这个数据附给刚刚初始化的值
if (stateStr) {
  initState = JSON.parse(stateStr)
}
export default new Vuex.Store({
  state: initState,
  // 在库中添加一个对象，用于存储token信息

  mutations: {
    // 定义一个方法，专门用来更新tokenInfo的值
    // state是库，payload是提交上来的参数
    updateTokenInfo(state, payload) {
      state.tokenInfo = payload

      // 如果希望在 Mutation A 中调用 Mutation B，需要通过 this.commit() 方法来实现=>本次是在tokenInfo信息更新时，调用方法将新的数据存入localStorage中
      this.commit('saveStateToStorage')
    },
    // 更新 userInfo 的方法
    updateUserInfo(state, payload) {
      // 1. 把用户信息转存到 state 中
      state.userInfo = payload
      // 2. 将最新的 state 对象持久化存储到本地
      this.commit('saveStateToStorage')
    },
    // 更新userProfile的方法
    updataUserProfile(state, payload) {
      state.userProfile = payload
      this.commit('saveStateToStorage')
    },
    cleanState(state) {
      // 1. 清空 vuex 中的数据
      state.tokenInfo = {}
      state.userInfo = {}
      state.userProfile = {}

      // 2. 将清空后的 state 存储到本地
      this.commit('saveStateToStorage')
    },
    // 定义一个方法，用来将state的数据存入本地locaStorge中
    saveStateToStorage(state) {
      localStorage.setItem('state', JSON.stringify(state))
    }
  },
  actions: {
    // 初始化用户的基本信息
    async initUserInfo(ctx) {
      // 调用 API 接口
      const { data: res } = await getUserInfoAPI()
      if (res.message === 'OK') {
        // TODO：把数据转交给 Mutation 方法   ctx.commit('Mutation方法名')
        ctx.commit('updateUserInfo', res.data)
      }
    },
    async initUserProfile(ctx) {
      const { data: res } = await getUserProfileAPI()
      if (res.message === 'OK') {
        ctx.commit('updataUserProfile', res.data)
      }
    }
  },
  modules: {},
  getters: {
    userAvatar(state) {
      let imgSrc = 'https://img.yzcdn.cn/vant/cat.jpeg'
      if (state.userInfo.photo) {
        imgSrc = state.userInfo.photo
      }
      return imgSrc
    }
  }
})
