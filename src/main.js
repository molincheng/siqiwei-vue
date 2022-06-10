import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/css/index.css'

import dirAnimate from '@/assets/js/mydir/dirAnimate'


createApp(App)
    .use(router)
    .use(ElementPlus)
    .directive('animate', dirAnimate)
    .mount('#app')