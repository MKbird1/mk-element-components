<template>
  <div>
    <mk-progress :percentage="60" isAnimate :time="4000"></mk-progress>
    <br />
    <mk-progress
      isAnimate
      :time="4000"
      status="success"
      :stroke-width="20"
      :percentage="60"
    ></mk-progress>
    <br />
    <mk-progress
      :time="4000"
      type="circle"
      isAnimate
      :percentage="60"
    ></mk-progress>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  setup(props) {},
})
</script>

<style></style>
