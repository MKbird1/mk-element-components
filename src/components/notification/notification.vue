<template>
  <el-popover
    popper-class="notification-popper-class"
    placement="bottom"
    :width="300"
    trigger="click"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge
        style="cursor: pointer"
        :value="value"
        :max="max"
        :is-dot="isDot"
      >
        <component :is="`${icon}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    icon: {
      type: String,
      default: 'el-icon-bell',
    },
    // 通知数量
    value: {
      type: [String, Number],
      default: '',
    },
    // 最大值
    max: {
      type: Number,
    },
    // 是否显示小圆点
    isDot: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  setup(props) {},
})
</script>

<style scoped>
svg {
  width: 1.5em;
  height: 1.5em;
}
</style>
