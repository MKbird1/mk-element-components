<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`${upIcon}`"
        :style="{ color: upIconColor }"
        v-if="type === 'up'"
      ></component>
      <component
        :is="`${downIcon}`"
        :style="{ color: downIconColor }"
        v-else
      ></component>
    </div>
  </div>
</template>

<script>
import { defineComponent, useSlots, computed } from 'vue'
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'up',
    },
    // 上升趋势显示的图标
    upIcon: {
      type: String,
      default: 'el-icon-arrowup',
    },
    // 下降趋势显示的图标
    downIcon: {
      type: String,
      default: 'el-icon-arrowdown',
    },
    // 趋势显示的文字
    // 1. 父组件传递过来的数据
    // 2. 插槽
    text: {
      type: String,
      default: '文字',
    },
    // 上升趋势图标颜色
    upIconColor: {
      type: String,
      default: '#f5222d',
    },
    // 下降趋势的图标颜色
    downIconColor: {
      type: String,
      default: '#52c41a',
    },
    // 上升趋势文字颜色
    upTextColor: {
      type: String,
      default: 'rgb(0,0,0)',
    },
    // 下降趋势的文字颜色
    downTextColor: {
      type: String,
      default: 'rgb(0,0,0)',
    },
  },
  setup(props) {
    let slots = useSlots()
    let textColor = computed(() => {
      return props.type === 'up' ? props.upTextColor : props.downTextColor
    })
    return {
      slots,
      textColor,
    }
  },
})
</script>

<style scoped>
.trend {
  display: flex;
  align-items: center;
}
.text {
  font-size: 12px;
  margin-right: 4px;
}
.icon svg {
  width: 0.8em;
  height: 0.8em;
}
</style>
