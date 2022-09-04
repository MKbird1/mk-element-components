<template>
  <div class="name">
    此文档用于调试+发布二次封装的elementplus组件
    <div class="item">样式尽量嵌入组件中，保证现在的样式就是之后引入的样式</div>
  </div>

  <router-view></router-view>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {},
  setup(props) {},
})
</script>

<style scoped>
.name {
  font-size: 20px;
  text-align: center;
}
.item {
  font-size: 16px;
}
</style>
