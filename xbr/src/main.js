// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/js/base'
import 'common/css/reset.css'
Vue.config.productionTip = false


import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
