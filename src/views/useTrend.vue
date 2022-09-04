<template>
  <div>
    <div>默认样式</div>
    <div class="flex">
      <div>
        <mk-trend text="营业额"></mk-trend>
      </div>
      <div>
        <mk-trend text="销售额" type="down"></mk-trend>
      </div>
    </div>
    <div>自定义图标颜色</div>
    <div class="flex">
      <div>
        <mk-trend text="营业额" upIconColor="blue"></mk-trend>
      </div>
      <div>
        <mk-trend text="销售额" type="down" downIconColor="#123456"></mk-trend>
      </div>
    </div>
    <div>自定义文字颜色</div>
    <div class="flex">
      <div><mk-trend text="营业额" upTextColor="blue"></mk-trend></div>
      <div>
        <mk-trend text="销售额" type="down" downTextColor="yellow"></mk-trend>
      </div>
    </div>
    <br />
    <div>自定义图标</div>
    <div class="flex">
      <div><mk-trend upIcon="el-icon-carettop">营业额</mk-trend></div>
      <div>
        <mk-trend type="down" downIcon="el-icon-caretbottom">销售额</mk-trend>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup(props) {},
})
</script>

<style></style>
