<template>
  <div class="demo">
    <mk-calendar
      :events="events"
      :eventContent="eventContent"
      @date-click="dateClick"
      @event-click="eventClick"
    ></mk-calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { EventItem } from '../mycomponents/calendar/types'
import { DateClickArg } from '@fullcalendar/interaction'
import { EventClickArg } from '@fullcalendar/common'
import { EventContentArg } from '@fullcalendar/core'
export default defineComponent({
  components: {},
  setup(props) {
    let events = ref<EventItem[]>([
      {
        title: '购物',
        start: '2022-08-28 10:00:00',
        end: '2022-08-30 12:00:00',
        editable: true,
      },
      {
        title: '学习',
        start: '2022-09-09 08:00:00',
        end: '2022-09-09 16:00:00',
      },
    ])
    let dateClick = (info: DateClickArg) => {
      events.value.push({
        title: '吃饭',
        start: info.dateStr + ' 10:00:00',
        end: info.dateStr + ' 18:00:00',
        editable: true,
      })
      // console.log(info)
    }
    let eventClick = (info: EventClickArg) => {
      // console.log(info)
    }
    let eventContent = (arg: EventContentArg) => {
      let el = document.createElement('div')
      let timeTextArr = arg.timeText.split(' - ')
      let start = timeTextArr[0]
        .replace('上午', '')
        .replace('下午', '')
        .replace('时', '')
      let end = timeTextArr[1]
        .replace('上午', '')
        .replace('下午', '')
        .replace('时', '')
      el.innerHTML = `
         <div>开始时间: ${start}</div>
         <div>结束时间: ${end}</div>
         <div>标题: ${arg.event._def.title}</div>
        `
      return {
        domNodes: [el],
      }
    }
    return { events, dateClick, eventClick, eventContent }
  },
})
</script>

<style scoped>
.demo {
  width: 1000px;
  height: 1000px;
  margin: 0 auto;
}
</style>
