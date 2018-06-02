// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Common from './assets/js/common.js'
import Data from '../static/json/Data.json'
import images from '../static/json/image.json'

//注册为全局
Vue.prototype.$common = Common;
Vue.prototype.$myData = Data;
Vue.prototype.$images = images;

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  data:{
  	language: 'chinese'
  },
  router,
  components: { App },
  template: '<App/>'
})
