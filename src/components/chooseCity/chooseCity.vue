<template>
  <div class="result">
    <el-popover
      placement="bottom-start"
      v-model:visible="visible"
      :width="430"
      trigger="click"
    >
      <template #reference>
        <div>
          {{ result }}
          <el-icon-arrowdown :class="{ rotate: visible }"></el-icon-arrowdown>
        </div>
      </template>
      <div class="mainContent">
        <el-row>
          <el-col :span="8">
            <el-radio-group v-model="radioValue" size="small">
              <el-radio-button label="按城市"></el-radio-button>
              <el-radio-button label="按省份"></el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :offset="1" :span="15">
            <el-select
              size="small"
              v-model="selectValue"
              filterable
              placeholder="Select"
              :filter-method="filterMethod"
              @change="changeSelect"
            >
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-col>
        </el-row>

        <template v-if="radioValue === '按城市'">
          <div class="city">
            <!-- 遍历对象第一个参数是值，第二个参数的键 -->
            <div
              class="city-item"
              @click="clickChat(key)"
              v-for="(value, key) in cities"
              :key="key"
            >
              {{ key }}
            </div>
          </div>
          <el-scrollbar max-height="300px">
            <template v-for="(value, key) in cities" :key="key">
              <el-row style="margin-bottom: 10px" :id="key">
                <el-col :span="2">{{ key }}:</el-col>
                <el-col :span="22" class="city-name">
                  <div
                    class="city-name-item"
                    v-for="item in value"
                    :key="item.id"
                    @click="clickItem(item)"
                  >
                    <div>{{ item.name }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </el-scrollbar>
        </template>
        <template v-else>
          <div class="province">
            <div
              class="province-item"
              v-for="(item, index) in Object.keys(provinces)"
              :key="index"
              @click="clickChat(item)"
            >
              {{ item }}
            </div>
            <el-scrollbar max-height="300px">
              <template
                v-for="(item, index) in Object.values(provinces)"
                :key="index"
              >
                <template v-for="(item1, index1) in item" :key="index1">
                  <el-row style="margin-bottom: 10px" :id="item1.id">
                    <el-col :span="3">{{ item1.name }}:</el-col>
                    <el-col :span="21" class="province-name">
                      <div
                        class="province-name-item"
                        v-for="(item2, index2) in item1.data"
                        :key="index2"
                      >
                        <div @click="clickProvince(item2)">{{ item2 }}</div>
                      </div>
                    </el-col>
                  </el-row>
                </template>
              </template>
            </el-scrollbar>
          </div>
        </template>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import { City } from './types'
import city from './lib/city'
import province from './lib/province.json'
export default defineComponent({
  components: {},
  emits: ['changeCity', 'changeProvince'],
  setup(props, context) {
    // 最终显示的结果
    let result = ref<string>('请选择')
    // 控制弹出层的显示
    let visible = ref<boolean>(false)
    // 单选框的值 按城市还是按省份选择
    let radioValue = ref<string>('按城市')
    // 下拉框的值 搜索下拉框
    let selectValue = ref<string>('')
    // 下拉框显示城市的数据
    let options = ref<City[]>([])
    // 所有的城市数据
    let cities = ref(city.cities)
    // 所有省份的数据
    let provinces = ref(province)
    // 搜索输入框的值
    let searchValue = ref<string>('')
    // 所有的城市数据
    let allCity = ref<City[]>([])
    let clickItem = (item: City) => {
      result.value = item.name
      visible.value = false
      context.emit('changeCity', item)
    }
    let clickProvince = (item: string) => {
      // 给结果赋值
      result.value = item
      // 关闭弹出层
      visible.value = false
      context.emit('changeProvince', item)
    }
    // 点击字母
    let clickChat = (item: string) => {
      let el = document.getElementById(item)
      if (el) el.scrollIntoView()
    }
    // el默认只能搜索label的值，我们自定义搜索
    let filterMethod = (val: string) => {
      searchValue.value = val
      let values = Object.values(cities.value).flat(2)
      if (val == '') {
        options.value = values
      } else {
        if (radioValue.value === '按城市') {
          // 中英文一起过滤
          options.value = values.filter((item) => {
            return item.name.includes(val) || item.spell.includes(val)
          })
        } else {
          // 中文过滤
          options.value = values.filter((item) => {
            return item.name.includes(val)
          })
        }
      }
    }
    // 下拉框选择
    let changeSelect = (val: number) => {
      let city = allCity.value.find((item) => item.id === val)!
      result.value = city.name
      if (radioValue.value === '按城市') {
        context.emit('changeCity', city)
      } else {
        context.emit('changeProvince', city.name)
      }
    }
    onMounted(() => {
      // 获取下拉框的数据
      let values = Object.values(cities.value).flat(2)
      allCity.value = values
      options.value = values
    })
    return {
      result,
      visible,
      radioValue,
      selectValue,
      options,
      cities,
      provinces,
      searchValue,
      clickProvince,
      clickItem,
      clickChat,
      filterMethod,
      changeSelect,
    }
  },
})
</script>

<style scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.rotate {
  transform: rotate(180deg);
}
svg {
  width: 1em;
  height: 1em;
  transition: all 0.25s linear;
}
.mainContent {
  padding: 6px;
}
.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
}
.city-item,
.province-item {
  padding: 3px 6px;
  margin-right: 8px;
  border: 1px solid #eee;
  margin-bottom: 8px;
  cursor: pointer;
}
.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.city-name-item,
.province-name-item {
  margin-right: 6px;
  margin-bottom: 6px;
  cursor: pointer;
}
</style>
