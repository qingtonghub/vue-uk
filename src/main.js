// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Loading from './components/Loading'
import components from '@/components';
Vue.use(Loading)
Vue.config.productionTip = false

/**批量注册全局组件 */
Object.keys(components).forEach(id => {
  Vue.component(id,components[id])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
