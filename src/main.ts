import { createApp } from 'vue'
import App from './App.vue'
// import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as Icons from '@element-plus/icons-vue'
// import { toLine } from './utils/cameltokebab'
// import MKBird from './components'
import MKBird from '../lib/index.mjs'
import '../lib/style.css'
// import MKBird from '../lib/menu/index.mjs'
// import '../lib/menu/style.css'

import router from './router'
import './mock'

const app = createApp(App)
// elementplus中每一个icon都是一个组件
// 我们要将其遍历然后重新注册成自己的组件
// for (let i in Icons) {
//   app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
// }

app.use(router)
app.use(ElementPlus)
app.use(MKBird)
app.mount('#app')
