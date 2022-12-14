<template>
  <el-form
    v-if="model"
    ref="form"
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          v-bind="item.attrs"
          :placeholder="item.placeholder"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        ></component>
        <el-upload
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
          :on-exceed="onExceed"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
        <div id="editor" v-if="item.type === 'editor'"></div>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-bind="item.attrs"
          :placeholder="item.placeholder"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        >
          <component
            v-for="(child, index) in item.children"
            :key="index"
            :label="child.label"
            :value="child.value"
            :prop="child.prop"
            :is="`el-${child.type}`"
          ></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted, watch, nextTick } from 'vue'
import { FormOptions, FormInstance } from './types/types'
import cloneDeep from 'lodash/cloneDeep'
import E from 'wangeditor'
export default defineComponent({
  props: {
    // ??????????????????
    options: {
      type: Array as PropType<FormOptions[]>,
      required: true,
    },
    // ???????????????????????????
    httpRequest: {
      type: Function,
    },
  },
  emits: [
    'on-preview',
    'on-remove',
    'on-success',
    'on-error',
    'on-progress',
    'on-change',
    'before-upload',
    'before-remove',
    'on-exceed',
  ],
  setup(props, context) {
    let model = ref<any>(null)
    let rules = ref<any>(null)
    let form = ref<FormInstance | null>(null)
    let edit = ref()
    // ???????????????
    let initForm = () => {
      if (props.options && props.options.length) {
        // elementplus??????????????????
        // m {name:'',password:''}
        // r name:[{required: true,message: '?????????????????????'},{min: 2,message: '????????????2-6?????????'}]
        let m: any = {}
        let r: any = {}
        // ?????????????????????????????????elementplus???????????????
        props.options.map((item: FormOptions) => {
          // m[item.prop!]??????
          m[item.prop!] = item.value
          r[item.prop!] = item.rules
          if (item.type === 'editor') {
            // ??????????????????
            nextTick(() => {
              if (document.getElementById('editor')) {
                const editor = new E('#editor')
                editor.config.placeholder = ''
                editor.create()
                editor.txt.html(item.value)
                editor.config.onchange = (newHtml: string) => {
                  // console.log(newHtml)
                  model.value[item.prop!] = newHtml
                }
                edit.value = editor
              }
            })
          }
        })
        // console.log('???', m)
        // console.log('??????', r)
        // ????????????????????????????????????????????????????????????????????????????????????????????????lodash
        model.value = cloneDeep(m)
        rules.value = cloneDeep(r)
      }
    }
    // elementplus???resetFields???????????????????????????wangEditor
    // ????????????????????????
    let resetFields = () => {
      // ??????elementplus?????????
      form.value!.resetFields()
      // ?????????????????????????????????
      // ???????????????????????????
      if (props.options && props.options.length) {
        let editorItem = props.options.find((item) => item.type === 'editor')!
        edit.value.txt.html(editorItem.value)
      }
    }

    // ????????????validate????????????
    let validate = () => {
      return form.value!.validate
    }
    // ??????????????????
    let getFormData = () => {
      return model.value
    }

    // ???????????????????????????
    let onPreview = (file: File) => {
      context.emit('on-preview', file)
    }
    let onRemove = (file: File, fileList: FileList) => {
      context.emit('on-remove', { file, fileList })
    }
    let onSuccess = (response: any, file: File, fileList: FileList) => {
      // ?????????????????? ????????????????????????
      let uploadItem = props.options.find((item) => item.type === 'upload')!
      model.value[uploadItem.prop!] = { response, file, fileList }
      context.emit('on-success', { response, file, fileList })
    }
    let onError = (err: any, file: File, fileList: FileList) => {
      context.emit('on-error', { err, file, fileList })
    }
    let onProgress = (event: any, file: File, fileList: FileList) => {
      context.emit('on-progress', { event, file, fileList })
    }
    let onChange = (file: File, fileList: FileList) => {
      context.emit('on-change', { file, fileList })
    }
    let beforeUpload = (file: File) => {
      context.emit('before-upload', file)
    }
    let beforeRemove = (file: File, fileList: FileList) => {
      context.emit('before-remove', { file, fileList })
    }
    let onExceed = (files: File, fileList: FileList) => {
      context.emit('on-exceed', { files, fileList })
    }
    onMounted(() => {
      initForm()
    })
    // ??????options??????
    watch(
      () => props.options,
      () => {
        initForm()
      },
      { deep: true }
    )
    return {
      model,
      rules,
      form,
      onPreview,
      onRemove,
      onSuccess,
      onError,
      onProgress,
      onChange,
      beforeUpload,
      beforeRemove,
      onExceed,
      resetFields,
      validate,
      getFormData,
    }
  },
})
</script>
<style></style>
