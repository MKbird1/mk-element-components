import { createApp } from 'vue'
import App from './App.vue'
// import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as Icons from '@element-plus/icons-vue'
// import MKBird from './components'
import MKBird from '../lib/index.mjs'
import '../lib/style.css'
// import MKBird from '../lib/menu/index.mjs'
// import '../lib/menu/style.css'

import router from './router'
import './mock'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(MKBird)
app.mount('#app')
