import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iconSvg from './components/common/svg.vue'

// reset css
import './assets/css/base.scss'

// icon 图标设置样式
import './assets/css/svg-icon.scss'

Vue.config.productionTip = false

Vue.component('icon-svg', iconSvg);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
