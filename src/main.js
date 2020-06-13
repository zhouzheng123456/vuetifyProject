import Vue from 'vue'
import App from './App.vue'

import '@/components'
import '@/directives'
import '@/plugins'

import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.prototype.console = window.console;

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
