import { App } from 'vue'
import Progress from './progress.vue'
// 让这个组件可以用个use的形式使用
export default {
  install(app: App) {
    app.component('mk-progress', Progress)
  },
}
