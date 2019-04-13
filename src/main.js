import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Tabbar,
  TabItem,
  Swipe,
  SwipeItem,
  Search,
  Navbar,
  TabContainer,
  TabContainerItem,
  Picker,
  Popup
} from 'mint-ui'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Search.name, Search)
Vue.component(Navbar.name, Navbar)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)

// ReactDOM.render(<App />,dom节点)
// 将虚拟的 vue dom 节点，渲染到真实的 dom 节点上
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
