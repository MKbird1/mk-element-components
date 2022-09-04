<template>
  <div>
    <el-table
      v-bind="$attrs"
      :data="tableData"
      v-loading="isLoading"
      :element-loading-text="elementLoadingText"
      :element-loading-spinner="elementLoadingSpinner"
      :element-loading-background="elementLoadingBackground"
      :element-loading-svg="elementLoadingSvg"
      :element-loading-svg-view-box="elementLoadingSvgViewBox"
      @row-click="rowClick"
    >
      <template v-for="(item, index) in tableOption" :key="index">
        <el-table-column
          :label="item.label"
          :prop="item.prop"
          :align="item.align"
          :width="item.width"
        >
          <template #default="scope">
            <template v-if="scope.row.rowEdit">
              <el-input
                size="small"
                v-if="item.prop"
                v-model="scope.row[item.prop]"
              ></el-input>
            </template>
            <template v-else>
              <template v-if="scope.$index + scope.column.id === currentEdit">
                <div style="display: flex">
                  <!-- 显示输入框 -->
                  <el-input
                    size="small"
                    v-if="item.prop"
                    v-model="scope.row[item.prop]"
                  ></el-input>
                  <div @click.stop="clickEditCell">
                    <!-- 通过$slots获取插槽名 -->
                    <slot
                      name="editCell"
                      :scope="scope"
                      v-if="$slots.editCell"
                    ></slot>
                    <div class="icons" v-else>
                      <el-icon-check
                        class="check"
                        @click="check(scope)"
                      ></el-icon-check>
                      <el-icon-close
                        class="close"
                        @click="close(scope)"
                      ></el-icon-close>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
                <span v-else-if="item.prop">{{ scope.row[item.prop] }}</span>
                <component
                  :is="editIcon"
                  class="edit"
                  @click.stop="clickEdit(scope)"
                  v-if="item.editable"
                ></component>
              </template>
            </template>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        v-if="actionOption"
        :label="actionOption.label"
        :width="actionOption.width"
        :align="actionOption.align"
      >
        <template #default="scope">
          <slot name="editRow" v-if="scope.row.rowEdit" :scope="scope"></slot>
          <slot name="action" :scope="scope" v-else></slot>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination" v-if="pagination" :style="{ justifyContent }">
      <el-pagination
        :currentPage="currentPage"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, onMounted, watch } from 'vue'
import { TableOptions } from './types'
import cloneDeep from 'lodash/cloneDeep'
export default defineComponent({
  components: {},
  props: {
    options: {
      type: Array as PropType<TableOptions[]>,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    // 加载文案
    elementLoadingText: {
      type: String,
    },
    // 加载图标名
    elementLoadingSpinner: {
      type: String,
    },
    // 加载背景颜色
    elementLoadingBackground: {
      type: String,
    },
    // 加载图标是svg
    elementLoadingSvg: {
      type: String,
    },
    // 加载团是svg的配置
    elementLoadingSvgViewBox: {
      type: String,
    },
    // 编辑显示的图标
    editIcon: {
      type: String,
      default: 'el-icon-edit',
    },
    // 是否可以编辑行
    isEditRow: {
      type: Boolean,
      default: false,
    },
    // 编辑行按钮的标识
    editRowIndex: {
      type: String,
      default: '',
    },

    // 是否显示分页
    pagination: {
      type: Boolean,
      default: false,
    },
    // 显示分页的对齐方式
    paginationAlign: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'left',
    },
    // 当前是第几页
    currentPage: {
      type: Number,
      default: 1,
    },
    // 当前一页多少条数据
    pageSize: {
      type: Number,
      default: 10,
    },
    // 显示分页数据多少条的选项
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40],
    },
    // 数据总条数
    total: {
      type: Number,
      default: 0,
    },
  },
  emits: [
    'conform',
    'cancel',
    'update:editRowIndex',
    'size-change',
    'current-change',
  ],
  setup(props, context) {
    // 过滤操作项之后的配置
    let tableOption = computed(() =>
      props.options.filter((item) => !item.action)
    )
    // 操作项
    let actionOption = computed(() => props.options.find((item) => item.action))
    // 是否在加载中
    let isLoading = computed(() => !props.data || !props.data.length)
    // 当前点击的单元格
    let currentEdit = ref<string>('')

    // 拷贝一份表格数据
    let tableData = ref<any[]>(cloneDeep(props.data))

    // 拷贝一份按钮标识,用于之后比对
    let cloneEditRowIndex = ref<string>(props.editRowIndex)
    onMounted(() => {
      tableData.value.map((item) => {
        // 代表当前是否是可编辑的状态
        // 为数据添加是否可以编辑行的属性
        item.rowEdit = false
      })
    })
    // 监听父组件传来的data(肯定不能只在onMounted周期改一次)
    watch(
      () => props.data,
      (val) => {
        tableData.value = cloneDeep(val)
        tableData.value.map((item) => {
          item.rowEdit = false
        })
      },
      { deep: true }
    )
    // 监听父组件editRowIndex标识的变化
    watch(
      () => props.editRowIndex,
      (val) => {
        if (val) cloneEditRowIndex.value = val
      }
    )
    // elementplus提供了row-click事件,返回点击当前行和列的数据
    let rowClick = (row: any, column: any) => {
      // 判断当前点击的是否是操作项
      if (column.label === actionOption.value!.label) {
        // 用户是否开启整行编辑,点击的是否是对应标识符
        if (
          props.isEditRow &&
          props.editRowIndex &&
          cloneEditRowIndex.value === props.editRowIndex
        ) {
          row.rowEdit = !row.rowEdit
          // 重置其他数据(每次只能编辑一行)
          tableData.value.map((item) => {
            if (item != row) item.rowEdit = false
          })
          // 重置按钮的标识
          if (!row.rowEdit) context.emit('update:editRowIndex', '')
        }
      }
      // console.log(row)
      // console.log(column)
    }

    // 点击编辑图标
    let clickEdit = (scope: any) => {
      // 输出scope查看数据格式
      // console.log(scope)
      // 发现$index+column.id永远不会完全相等，据此设置唯一单元格标识
      currentEdit.value = scope.$index + scope.column.id
    }
    // 点击√确认
    let check = (scope: any) => {
      context.emit('conform', scope)
    }
    // 点击x取消
    let close = (scope: any) => {
      context.emit('cancel', scope)
    }
    // 自定义图标触发事件clickEditCell
    let clickEditCell = () => {
      // 清空标识符，让字符串变回原始的样式
      currentEdit.value = ''
    }

    // 分页的每一页数据变化
    let handleSizeChange = (val: number) => {
      context.emit('size-change', val)
    }
    // 分页页数改变
    let handleCurrentChange = (val: number) => {
      context.emit('current-change', val)
    }

    // 表格分页的排列方式
    let justifyContent = computed(() => {
      if (props.paginationAlign === 'left') return 'flex-start'
      else if (props.paginationAlign === 'right') return 'flex-end'
      else return 'center'
    })

    return {
      tableOption,
      actionOption,
      isLoading,
      clickEdit,
      currentEdit,
      check,
      close,
      clickEditCell,
      tableData,
      rowClick,
      cloneEditRowIndex,
      handleSizeChange,
      handleCurrentChange,
      justifyContent,
    }
  },
})
</script>

<style scoped>
.edit {
  width: 1em;
  height: 1em;
  margin-left: 4px;
  cursor: pointer;
}
.icons {
  display: flex;
  position: relative;
  top: 5px;
  left: 5px;
}
svg {
  width: 1em;
  height: 1em;
  cursor: pointer;
}
.check {
  color: red;
}
.close {
  color: green;
  margin-left: 5px;
}
.pagination {
  margin-top: 16px;
  display: flex;
}
.el-table .cell {
  background-color: #ccc !important;
}
</style>
