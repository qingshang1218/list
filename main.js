import Vue from 'vue'
import App from './App'
import av from './static/js/av.js'
Vue.config.productionTip = false
Vue.prototype.$av = av

// uni可以框架级别区分环境
Vue.prototype.$is_dev = process.env.NODE_ENV === 'development'
// 常用函数挂载
Vue.prototype.$showToast = function(title = '错误', icon = 'none') {
  uni.showToast({
    title,
    icon,
  })
}
// 同上
Vue.prototype.$showLoading = function(title = '进行中...') {
  uni.showLoading({
    title,
  })
  setTimeout(() => {
    uni.hideLoading()
  }, 30000)
}


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
