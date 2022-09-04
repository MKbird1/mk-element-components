<template>
  <div>
    <mk-form
      ref="form"
      :options="options"
      label-width="100px"
      @on-change="handleChange"
      @before-upload="handleBeforeUpload"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
      @on-exceed="handleExceed"
    >
      <!-- 显示上传按钮插槽 -->
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <!-- 显示上传提示的插槽 -->
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px">
          jpg/png files with a size less than 500kb
        </div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </template>
    </mk-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { FormOptions, FormInstance } from '../mycomponents/Form/types/types'
import { ElMessage, ElMessageBox } from 'element-plus'
interface Scope {
  form: any
  model: any
}
export default defineComponent({
  components: {},
  setup(props) {
    let options: any[] = [
      {
        type: 'input',
        value: '',
        label: '用户名',
        prop: 'username',
        rules: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
          },
          {
            min: 2,
            max: 6,
            message: '用户名在2-6位之间',
            trigger: 'blur',
          },
        ],
        attrs: {
          clearable: true,
        },
      },
      {
        type: 'input',
        value: '',
        label: '密码',
        prop: 'password',
        rules: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          },
          {
            min: 6,
            max: 15,
            message: '密码在6-15位之间',
            trigger: 'blur',
          },
        ],
        attrs: {
          showPassword: true,
          clearable: true,
        },
      },
      {
        type: 'select',
        value: '1',
        placeholder: '请选择职位',
        label: '职位',
        prop: 'role',
        attrs: {
          style: {
            width: '100%',
          },
        },
        rules: [
          {
            required: true,
            message: '职位不能为空',
            trigger: 'blur',
          },
        ],
        children: [
          {
            type: 'option',
            label: '经理',
            value: '1',
          },
          {
            type: 'option',
            label: '主管',
            value: '2',
          },
          {
            type: 'option',
            label: '员工',
            value: '3',
          },
        ],
      },
      {
        type: 'checkbox-group',
        value: [],
        prop: 'like',
        label: '爱好',
        rules: [
          {
            required: true,
            message: '爱好不能为空',
            trigger: 'change',
          },
        ],
        children: [
          {
            type: 'checkbox',
            label: '足球',
            value: '1',
          },
          {
            type: 'checkbox',
            label: '篮球',
            value: '2',
          },
          {
            type: 'checkbox',
            label: '排球',
            value: '3',
          },
        ],
      },
      {
        type: 'radio-group',
        value: '',
        prop: 'gender',
        label: '性别',
        rules: [
          {
            required: true,
            message: '性别不能为空',
            trigger: 'change',
          },
        ],
        children: [
          {
            type: 'radio',
            label: '男',
            value: 'male',
          },
          {
            type: 'radio',
            label: '女',
            value: 'female',
          },
          {
            type: 'radio',
            label: '保密',
            value: 'not',
          },
        ],
      },
      {
        type: 'upload',
        label: '上传',
        prop: 'picture',
        uploadAttrs: {
          action:
            'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
          multiple: true,
          limit: 3,
        },
      },
      {
        type: 'editor',
        value: '123',
        prop: 'desc',
        label: '描述',
        rules: [
          {
            required: true,
            message: '描述不能为空',
            trigger: 'blur',
          },
        ],
      },
    ]
    let form = ref()
    // 提交表单
    let submitForm = (scope: Scope) => {
      scope.form.validate((valid: any) => {
        if (valid) {
          console.log(scope.model)
          ElMessage.success('提交成功')
        }
      })
      console.log(scope)
    }
    let resetForm = () => {
      form.value.resetFields()
    }

    // 文件状态改变钩子
    let handleChange = (val: any) => {
      console.log('change')
      console.log(val)
    }
    // 上传文件之前的钩子
    let handleBeforeUpload = (val: any) => {
      console.log('handleBeforeUpload')
      console.log(val)
    }
    // 上传成功的钩子
    let handleSuccess = (val: any) => {
      console.log('success')
      console.log(val)
    }
    // 删除前的钩子
    let beforeRemove = (val: any) => {
      console.log('beforeRemove')
      return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)
    }
    // 删除的钩子
    let handleRemove = (file: any, fileList: any) => {
      console.log('handleRemove')
      console.log(file, fileList)
    }
    // 点击文件列表中已上传文件的钩子
    let handlePreview = (file: any) => {
      console.log('handlePreview')
      console.log(file)
    }
    // 超出限制的钩子
    let handleExceed = (val: any) => {
      console.log('handleExceed', val)
      ElMessage.warning(
        `The limit is 3, you selected ${
          val.files.length
        } files this time, add up to ${
          val.files.length + val.fileList.length
        } totally`
      )
    }

    return {
      options,
      form,
      handleRemove,
      handlePreview,
      beforeRemove,
      handleExceed,
      handleSuccess,
      handleChange,
      handleBeforeUpload,
      submitForm,
      resetForm,
    }
  },
})
</script>

<style></style>
