import Vue from 'vue'
import App from './App.vue'
import UserForm from './UserForm.vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-basic-resource.firebaseio.com';

new Vue({
  el: '#app',
  render: h => h(App)
})
