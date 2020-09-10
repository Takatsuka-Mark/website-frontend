import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import layoutMixin from './mixins/layout';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.mixin(layoutMixin);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
