import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem.js'
import FooterNav from '@/components/FooterNav/InDex.vue'

import '@/assets/css/reset.css'

const app = createApp(App)
app.component('FooterNav', FooterNav)
app.use(store).use(router).mount('#app')
