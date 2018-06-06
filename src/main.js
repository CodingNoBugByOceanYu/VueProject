// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
//vue-tabs
import VueTaber from 'vue-tabs'
import '../static/css/vue-tabs.css'
import tabs from './utils/tabs.js'
Vue.use(VueTaber)
//museUI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
//验证
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
import ieaseValite from './components/customValidate.js'

//sweetAlert
import VueSwal from 'vue-swal'
Vue.use(VueSwal)

//fontawesome
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

//分页
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

//拖拽
// import vueDragDrag from 'vue-dragdrag'
// Vue.use(vueDragDrag)

const vueTaber = new VueTaber({
  tabs
})

//国际化配置
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./assets/i18n/cn.js'),
    'en': require('./assets/i18n/en.js') 
  }
})

//时间插件
// import Datetime from 'vue-datetime'
// import 'vue-datetime/dist/vue-datetime.css'
// Vue.use(Datetime)

//iview组件库
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

import jsplumb from 'jsplumb'

var _ = require('lodash');

var vm = new Vue({
  el: '#app',
  i18n,
  Icon,
  taber: vueTaber,
  components: { App },
  template: '<App/>'
})

vm.$taber.beforeCreateEach(function (tab, next) {
  vm.loading = true;
  next();
})

vm.$taber.beforeCloseEach(function (tab, next) {
  setTimeout(() => {
    vm.loading = false;
  }, 800);
  next();
  if (tab.name === 'Jsplumb') {
    console.log(jsplumb);
    jsplumb.jsPlumb.deleteEveryEndpoint();
  }
})