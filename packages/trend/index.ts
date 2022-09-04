import { App } from 'vue'
import Trend from './trend.vue'
// 让这个组件可以用个use的形式使用
export default {
  install(app: App) {
    app.component('mk-trend', Trend)
  },
}
