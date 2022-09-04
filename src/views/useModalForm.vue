<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <mk-modal-form
      v-model:visible="visible"
      title="编辑用户"
      width="50%"
      :options="options"
      :on-change="handleChange"
      :on-success="handleSuccess"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px">
          jpg/png files with a size less than 500kb
        </div>
      </template>
      <template #footer="{ form }">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm(form)">确认</el-button>
      </template>
    </mk-modal-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { FormOptions, FormInstance } from '../mycomponents/Form/types/types'
import { ElMessage } from 'element-plus'
export default defineComponent({
  components: {},
  setup(props) {
    let visible = ref<boolean>(false)
    let open = () => {
      visible.value = true
    }

    // 点击取消
    let cancel = (form: any) => {}
    // 点击确认
    let confirm = (form: any) => {
      let validate = form.validate()
      let model = form.getFormData()
      // 表单验证
      validate((valid: any) => {
        if (valid) {
          ElMessage.success('成功')
          console.log(model)
        } else {
          ElMessage.error('失败')
        }
      })
    }
    let handleSuccess = (val: any) => {
      console.log('success')
      console.log(val)
    }
    let handleChange = (val: any) => {
      console.log('change')
      console.log(val)
    }

    let options: any[] = [
      {
        type: 'input',
        value: '',
        label: '用户名',
        prop: 'username',
        placeholder: '请输入用户名',
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
        placeholder: '请输入密码',
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
        value: '',
        placeholder: '请选择职位',
        prop: 'role',
        label: '职位',
        attrs: {
          style: {
            width: '100%',
          },
        },
        rules: [
          {
            required: true,
            message: '职位不能为空',
            trigger: 'change',
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
        prop: 'pic',
        uploadAttrs: {
          action: 'https://jsonplaceholder.typicode.com/posts/',
          multiple: true,
          limit: 3,
        },
      },
      {
        type: 'editor',
        value: '',
        prop: 'desc',
        label: '描述',
        placeholder: '请输入描述',
        rules: [
          {
            required: true,
            message: '描述不能为空',
            trigger: 'blur',
          },
        ],
      },
    ]
    return {
      visible,
      open,
      options,
      cancel,
      confirm,
      handleSuccess,
      handleChange,
    }
  },
})
</script>

<style></style>
