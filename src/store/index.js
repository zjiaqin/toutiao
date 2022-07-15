import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 对库中的tokenInfo对象进行初始化赋值
let initState = { tokenInfo: {} }
// 获取本地存储中的token数据
const stateStr = localStorage.getItem('TOKEN')
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
    // 定义一个方法，用来将state的数据存入本地locaStorge中
    saveStateToStorage(state) {
      localStorage.setItem('TOKEN', JSON.stringify(state.tokenInfo))
    }
  },
  actions: {},
  modules: {}
})
