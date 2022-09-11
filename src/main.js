import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import titleMixin from '@/mixins/titleMixin';
import App from './App.vue';
import router from './router';
import store from './store';
import layoutMixin from './mixins/layout';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.mixin(layoutMixin);
Vue.mixin(titleMixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
