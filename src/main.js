import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueAnalytics from 'vue-analytics';
import titleMixin from '@/mixins/titleMixin';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import layoutMixin from './mixins/layout';

Vue.use(BootstrapVue);
Vue.use(VueAnalytics, {
  id: 'UA-177900416-1',
  router,
});
Vue.config.productionTip = false;
Vue.mixin(layoutMixin);
Vue.mixin(titleMixin);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
