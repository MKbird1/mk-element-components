<template>
  <el-progress :percentage="p" v-bind="$attrs"></el-progress>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  components: {},
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      required: true,
    },
    // 是否有动画效果
    isAnimate: {
      type: Boolean,
      default: false,
    },
    // 动画时长(毫秒)
    time: {
      type: Number,
      default: 3000,
    },
  },
  setup(props) {
    let p = ref(0)
    onMounted(() => {
      if (props.isAnimate) {
        // 规定时间内加载完成
        // t为进度条每次+1所需时间
        let t = Math.ceil(props.time / props.percentage)
        let timer = setInterval(() => {
          p.value += 1
          if (p.value >= props.percentage) {
            p.value = props.percentage
            clearInterval(timer)
          }
        }, t)
      }
    })
    return { p }
  },
})
</script>

<style></style>
