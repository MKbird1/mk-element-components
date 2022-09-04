<template>
  <mk-menu :menuList="eleList" defaultActive="home"></mk-menu>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {},
  setup(props) {
    const eleList = ref([
      {
        icon: 'el-icon-homefilled',
        name: '首页',
        index: 'home',
      },
      {
        icon: 'el-icon-location',
        name: '省市区选择',
        index: 'chooseArea',
      },
      {
        icon: 'el-icon-sort',
        name: '趋势标记',
        index: 'trend',
      },
      {
        icon: 'el-icon-timer',
        name: '时间选择',
        index: 'chooseTime',
      },
      {
        icon: 'el-icon-timer',
        name: '日期选择',
        index: 'chooseDate',
      },
      {
        icon: 'el-icon-bell',
        name: '通知菜单',
        index: 'notification',
      },
      {
        icon: 'el-icon-menu',
        name: '导航菜单',
        index: 'menu',
      },
      {
        icon: 'el-icon-turnoff',
        name: '城市选择',
        index: 'chooseCity',
      },
      {
        icon: 'el-icon-darrowright',
        name: '进度条',
        index: 'progress',
      },
      {
        icon: 'el-icon-scaletooriginal',
        name: '日历',
        index: 'calendar',
      },
      {
        icon: 'el-icon-setting',
        name: '表单',
        index: 'form',
      },
      {
        icon: 'el-icon-setting',
        name: '弹出框表单',
        index: 'modalForm',
      },
      {
        icon: 'el-icon-shoppingbag',
        name: '表格',
        index: 'table',
      },
    ])
    return { eleList }
  },
})
</script>

<style></style>
