<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.title"
      >
        <el-scrollbar max-height="300px">
          <div
            class="container"
            @click="clickItem(item1, index1)"
            v-for="(item1, index1) in item.content"
            :key="index1"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{
                  item1.tag
                }}</el-tag>
              </div>
              <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
              <div class="time" v-if="item1.time">{{ item1.time }}</div>
            </div>
          </div>
          <div class="actions">
            <div
              class="a-item"
              :class="{ border: i !== actions.length }"
              v-for="(action, i) in actions"
              :key="i"
              @click="clickAction(action, i)"
            >
              <div class="a-icon" v-if="action.icon">
                <component :is="`${action.icon}`"></component>
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ListOptions, ActionOptions, ListItem } from './types'

export default defineComponent({
  components: {},
  props: {
    // 列表内容
    list: {
      type: Array as PropType<ListOptions[]>,
      required: true,
    },
    // 操作内容
    actions: {
      type: Array as PropType<ActionOptions[]>,
      default: () => [],
    },
  },
  emits: ['clickItem', 'clickAction'],
  setup(props, context) {
    let clickItem = (item: ListItem, index: number) => {
      context.emit('clickItem', { item, index })
    }
    let clickAction = (item: ActionOptions, index: number) => {
      context.emit('clickAction', { item, index })
    }
    return {
      clickItem,
      clickAction,
    }
  },
})
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
}
.container:hover {
  background: #e6f6ff;
}
.container .avatar {
  flex: 1;
}
.container .content {
  flex: 3;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
.actions {
  margin: 20px 0 5px 0;
  height: 35px;
  display: flex;
  align-items: center;
}
.a-item {
  height: 35px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.a-icon {
  margin-right: 4px;
  position: relative;
  top: 2px;
}
.border {
  border-right: 1px solid #eee;
}
:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}
</style>
