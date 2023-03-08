// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import quasarLang from 'quasar/lang/pt-BR'
import router from './router/index.js'
import './style.css'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})

myApp.use(router)
myApp.use(createPinia())

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
