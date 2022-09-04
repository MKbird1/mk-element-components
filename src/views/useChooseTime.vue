<template>
  <div>
    <mk-choose-time
      :startOptions="startOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></mk-choose-time>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface endValue {
  startTime: string
  endTime: string
}

export default defineComponent({
  components: {},
  setup(props) {
    let startChange = (val: string) => {
      console.log('startChange', val)
    }
    let endChange = (val: endValue) => {
      console.log('endChange', val)
    }
    let startOptions = {
      // size: 'mini',
      // clearable: false,
    }
    return { startChange, endChange, startOptions }
  },
})
</script>

<style></style>
