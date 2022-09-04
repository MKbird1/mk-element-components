<template>
  <div>
    <mk-table
      :data="tableData"
      isEditRow
      pagination
      paginationAlign="center"
      :total="total"
      :options="options"
      :currentPage="current"
      :pageSize="pageSize"
      elementLoadingText="加载中..."
      v-model:editRowIndex="editRowIndex"
      @conform="check"
      @cancel="close"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <template #date="{ scope }">
        <el-icon-timer class="timer"></el-icon-timer>
        {{ scope.row.date }}
      </template>
      <template #name="{ scope }">
        <el-popover effect="light" trigger="hover" placement="top">
          <template #default>
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <el-tag>{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-popover>
      </template>
      <template #action="{ scope }">
        <el-button type="primary" @click="edit(scope)">编辑</el-button>
        <el-button type="danger">删除</el-button>
      </template>
      <template #editRow="{ scope }">
        <el-button type="primary" @click="sure(scope.scope)">确认</el-button>
        <el-button type="danger">取消</el-button>
      </template>
      <!-- <template #editCell="{ scope }">
        <div style="display: flex">
          <el-button size="small" type="primary">确认</el-button>
          <el-button size="small" type="danger">取消</el-button>
        </div>
      </template> -->
    </mk-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
// import { TableOptions } from '../mycomponents/table/types'
import axios from 'axios'
interface TableData {
  date: string
  name: string
  address: string
}
export default defineComponent({
  components: {},
  setup(props) {
    let options: any[] = [
      {
        prop: 'date',
        label: '日期',
        // width: '180',
        align: 'center',
        slot: 'date',
        editable: true,
      },
      {
        prop: 'name',
        label: '姓名',
        // width: '180',
        align: 'center',
        slot: 'name',
      },
      {
        prop: 'address',
        label: '地址',
        align: 'center',
        editable: true,
      },
      {
        label: '操作',
        action: true,
        align: 'center',
      },
    ]

    let tableData = ref<TableData[]>([])
    // 模拟加载数据延时
    // setTimeout(() => {
    // tableData.value = [
    //   {
    //     date: '2016-05-03',
    //     name: 'Tom1',
    //     address: 'No. 189, Grove St, Los Angeles',
    //   },
    //   {
    //     date: '2016-05-02',
    //     name: 'Tom2',
    //     address: 'No. 189, Grove St, Los Angeles',
    //   },
    //   {
    //     date: '2016-05-04',
    //     name: 'Tom3',
    //     address: 'No. 189, Grove St, Los Angeles',
    //   },
    //   {
    //     date: '2016-05-01',
    //     name: 'Tom4',
    //     address: 'No. 189, Grove St, Los Angeles',
    //   },
    // ]
    // }, 3000)
    let editRowIndex = ref<string>('')

    let current = ref<number>(1)
    let pageSize = ref<number>(10)
    let total = ref<number>(0)

    let getData = () => {
      axios
        .post('/api/list', {
          current: current.value,
          pageSize: pageSize.value,
        })
        .then((res: any) => {
          // console.log(res.data)
          tableData.value = res.data.data.rows
          total.value = res.data.data.total
        })
    }
    let handleSizeChange = (val: number) => {
      pageSize.value = val
      getData()
    }
    let handleCurrentChange = (val: number) => {
      current.value = val
      getData()
    }
    onMounted(() => {
      getData()
    })

    // 在edit方法传入标识,代表用来操作整行的就是编辑button
    let edit = (scope: any) => {
      // 将标识改为编辑
      // 标识符名称可以是任意值,因为最后都会被存入组件中
      editRowIndex.value = 'abc'
      console.log(scope)
    }
    let sure = (scope: any) => {
      console.log(scope)
    }
    let check = (scope: any) => {
      console.log(scope)
    }
    let close = (scope: any) => {
      console.log(scope)
    }

    return {
      options,
      tableData,
      editRowIndex,
      edit,
      check,
      close,
      sure,
      current,
      pageSize,
      total,
      handleSizeChange,
      handleCurrentChange,
    }
  },
})
</script>

<style scoped>
.timer {
  height: 1em;
  width: 1em;
}
</style>
