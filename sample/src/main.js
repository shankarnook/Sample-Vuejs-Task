import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(store).use(bootstrap).mount('#app')


const store = createStore({
    state () {
      return {
        count: 0
      }
    },

  })
