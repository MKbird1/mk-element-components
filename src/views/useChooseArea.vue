<template>
  <div>
    <mk-choose-area @change="changeArea"></mk-choose-area>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  setup(props) {
    let changeArea = (val) => {
      console.log(val)
    }
    return {
      changeArea,
    }
  },
})
</script>

<style></style>
