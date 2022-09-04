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
    // 表单的配置项
    options: {
      type: Array as PropType<FormOptions[]>,
      required: true,
    },
    // 用户自定义上传方法
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
    // 初始化表单
    let initForm = () => {
      if (props.options && props.options.length) {
        // elementplus要的数据类型
        // m {name:'',password:''}
        // r name:[{required: true,message: '用户名不能为空'},{min: 2,message: '用户名在2-6位之间'}]
        let m: any = {}
        let r: any = {}
        // 将传入的数据类型值转为elementplus需要的类型
        props.options.map((item: FormOptions) => {
          // m[item.prop!]为键
          m[item.prop!] = item.value
          r[item.prop!] = item.rules
          if (item.type === 'editor') {
            // 初始化富文本
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
        // console.log('值', m)
        // console.log('规则', r)
        // 因为这里拿到的都是引用类型，为了避免数据被修改，采用深拷贝，安装lodash
        model.value = cloneDeep(m)
        rules.value = cloneDeep(r)
      }
    }
    // elementplus的resetFields重置无法重置引入的wangEditor
    // 我们自己封装一个
    let resetFields = () => {
      // 重置elementplus的表单
      form.value!.resetFields()
      // 重置富文本编辑器的内容
      // 获取富文本的配置项
      if (props.options && props.options.length) {
        let editorItem = props.options.find((item) => item.type === 'editor')!
        edit.value.txt.html(editorItem.value)
      }
    }

    // 抛出一个validate验证函数
    let validate = () => {
      return form.value!.validate
    }
    // 抛出表单数据
    let getFormData = () => {
      return model.value
    }

    // 上传组件的所有方法
    let onPreview = (file: File) => {
      context.emit('on-preview', file)
    }
    let onRemove = (file: File, fileList: FileList) => {
      context.emit('on-remove', { file, fileList })
    }
    let onSuccess = (response: any, file: File, fileList: FileList) => {
      // 上传图片成功 给表单上传项赋值
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
    // 监听options变化
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
