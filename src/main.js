import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/global.css'
import '@/assets/icon/iconfont.css'
import axios from "axios";

Vue.prototype.$http=axios;
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
