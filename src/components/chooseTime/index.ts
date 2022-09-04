import { App } from 'vue'
import chooseTime from './chooseTime.vue'
// 让这个组件可以以use的形式使用
export default {
  install(app: App) {
    app.component('mk-choose-time', chooseTime)
  },
}
