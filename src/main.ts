import { createApp } from 'vue'
import App from './app.vue'
import router from './router'

import './modules/core/styles/global.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
