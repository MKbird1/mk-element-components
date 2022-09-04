import { App } from 'vue'
import calendar from './calendar.vue'
// 让这个组件可以以use的形式使用
export default {
  install(app: App) {
    app.component('mk-calendar', calendar)
  },
}
