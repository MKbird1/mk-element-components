<template>
  <div :class="{ 'm-choose-icon-dialog-body-height': isScroll }">
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <mk-form
          label-width="100px"
          ref="form"
          :options="options"
          @on-change="onChange"
          @before-upload="beforeUpload"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @before-remove="beforeRemove"
          @on-success="onSuccess"
          @on-exceed="onExceed"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </mk-form>
      </template>

      <template #footer>
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import { FormOptions, FormInstance } from '../Form/types/types'
export default defineComponent({
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    // 表单的配置项
    options: {
      type: Array as PropType<FormOptions[]>,
      required: true,
    },
    // 滚动条
    isScroll: {
      type: Boolean,
      default: true,
    },
    // 处理上传事件
    onChange: {
      type: Function,
    },
    beforeUpload: {
      type: Function,
    },
    onPreview: {
      type: Function,
    },
    onRemove: {
      type: Function,
    },
    beforeRemove: {
      type: Function,
    },
    onSuccess: {
      type: Function,
    },
    onExceed: {
      type: Function,
    },
  },
  emits: ['update:visible'],
  setup(props, context) {
    let dialogVisible = ref<boolean>(props.visible)
    // 监听visible变化，修改对应dialogVisible
    watch(
      () => props.visible,
      (val) => {
        dialogVisible.value = val
      }
    )

    watch(
      () => dialogVisible.value,
      (val) => {
        context.emit('update:visible', val)
      }
    )
    // 表单实例
    let form = ref<FormInstance | null>()

    return { dialogVisible, form }
  },
})
</script>

<style scoped></style>
