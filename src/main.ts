import { createApp } from 'vue'

// Create app
import App from './App.vue'
const app = createApp(App)

// Router
import { router } from './router'
app.use(router)

// Styles
import './styles/index.sass'
import 'swiper/css'

// Mount app
app.mount('#app')
