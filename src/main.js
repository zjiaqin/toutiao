import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import 'amfe-flexible'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import zh from 'dayjs/locale/zh-cn'

// 引入vant组件
import {
  NavBar,
  Form,
  Field,
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Tab,
  Tabs,
  Cell,
  CellGroup,
  List,
  PullRefresh,
  Lazyload,
  ActionSheet,
  Popup,
  Col,
  Row,
  Notify,
  Badge,
  Search,
  Divider,
  Tag,
  Dialog,
  Image as VanImage,
  DatetimePicker
} from 'vant'

// 注册vant组件
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Lazyload)
Vue.use(ActionSheet)
Vue.use(Popup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Notify)
Vue.use(Badge)
Vue.use(Search)
Vue.use(Divider)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(VanImage)
Vue.use(DatetimePicker)

Vue.config.productionTip = false

// 配置‘计算相对时间’的插件
dayjs.extend(relativeTime)
// 配置中文语言包
dayjs.locale(zh)
// dt 参数是文章的发表时间
Vue.filter('dateFormat', (dt) => {
  // 调用 dayjs() 得到的是当前的时间
  // .to() 方法的返回值，是计算出来的“相对时间”
  return dayjs().to(dt)
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
