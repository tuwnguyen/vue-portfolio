import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)

app.use(AOS.init())
app.use(FloatingVue)
app.mount('#app')
