<template>
  <div class="eleMain">
    <el-container>
      <el-aside width="auto">
        <el-menu
          :default-active="`${defaultActive}`"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          :router="router"
          :style="`min-height: ${minHeight}px`"
          v-bind="$attrs"
        >
          <div class="fold" @click="clickButton" v-if="useCollapse">
            <el-icon-fold v-if="!isCollapse"></el-icon-fold>
            <el-icon-expand v-else></el-icon-expand>
          </div>
          <template v-for="(item, i) in menuList" :key="i">
            <el-menu-item
              v-if="!item[children] || !item[children].length"
              :index="`${item[index]}`"
            >
              <component :is="item[icon]"></component>
              <span class="name">{{ item[name] }}</span>
            </el-menu-item>
            <el-sub-menu
              v-if="item[children] && item[children].length"
              :index="`${item[index]}`"
            >
              <template #title>
                <component :is="item[icon]"></component>
                <span class="name">{{ item[name] }}</span>
              </template>
              <!-- 此处功能不受影响 -->
              <el-menu-item
                v-for="(item1, i1) in item[children]"
                :key="i1"
                :index="`${item1[index]}`"
              >
                <component :is="item1[icon]"></component>
                <span class="name">{{ item1[name] }}</span>
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {},
  props: {
    minHeight: {
      type: Number,
    },

    menuList: {
      type: Array as PropType<any[]>,
      required: true,
    },
    useCollapse: {
      type: Boolean,
      default: true,
    },
    defaultActive: {
      type: String,
    },
    router: {
      type: Boolean,
      default: true,
    },
    // 键名
    name: {
      type: String,
      default: 'name',
    },
    icon: {
      type: String,
      default: 'icon',
    },
    index: {
      type: String,
      default: 'index',
    },
    children: {
      type: String,
      default: 'children',
    },
  },
  setup(props, context) {
    const isCollapse = ref(false)
    const clickButton = () => {
      isCollapse.value = !isCollapse.value
    }
    const route = useRoute()
    const routers = computed(() => {
      return route.matched[0].path
    })

    return { isCollapse, clickButton, routers }
  },
})
</script>

<style scoped>
.fold {
  text-align: center;
  background-color: #0c5eda;
  color: #fff;
}
.name {
  margin-left: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
