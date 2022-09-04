<template>
  <div>
    <mk-choose-date
      :disableToday="false"
      :startOptions="startOptions"
      @startChange="dateStartChange"
      @endChange="dateEndChange"
    ></mk-choose-date>
  </div>
</template>

<script lang="ts">
interface dateEndValue {
  startDate: Date
  endDate: Date
}
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup(props) {
    let dateStartChange = (val: Date) => {
      console.log(val)
    }
    let dateEndChange = (val: dateEndValue) => {
      console.log(val)
    }
    let startOptions = {
      // size: 'mini',
      // clearable: false
    }
    return { dateStartChange, dateEndChange, startOptions }
  },
})
</script>

<style></style>
