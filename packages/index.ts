import { App } from 'vue'
import Form from './Form'
import Menu from './menu'
import ChooseArea from './chooseArea'
import Trend from './trend'
import Notification from './notification'
import List from './list'
import Progress from './progress'
import ChooseTime from './chooseTime'
import ChooseDate from './chooseDate'
import ChooseCity from './chooseCity'
import ModalForm from './modalForm'
import Table from './table'
import Calendar from './calendar'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'

const components = [
  Form,
  Menu,
  ChooseArea,
  Trend,
  Notification,
  List,
  Progress,
  ChooseTime,
  ChooseDate,
  ChooseCity,
  ModalForm,
  Table,
  Calendar,
]
export default {
  install(app: App) {
    for (let i in Icons) {
      app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
    }
    components.map((item) => {
      app.use(item)
    })
  },
}
