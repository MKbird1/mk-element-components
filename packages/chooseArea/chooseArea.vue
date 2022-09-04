<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      placeholder="请选择城市"
      v-model="city"
      style="margin: 0 10px"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province || !city"
      placeholder="请选择区域"
      v-model="district"
    >
      <el-option
        v-for="item in selectDistrict"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import allAreas from './lib/pca-code.json'
export interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}
export interface Data {
  name: string
  code: string
}
export default defineComponent({
  components: {},
  emits: ['change'],
  setup(props, context) {
    let province = ref<string>('')
    let city = ref<string>('')
    let district = ref<string>('')
    let areas = ref(allAreas)
    let selectCity = ref<AreaItem[]>([])
    let selectDistrict = ref<AreaItem[]>([])
    watch(
      () => province.value,
      (val) => {
        if (val) {
          let cities = areas.value.find(
            (item) => item.code == province.value
          )!.children
          selectCity.value = cities
        }

        city.value = ''
        district.value = ''
      }
    )
    watch(
      () => city.value,
      (val) => {
        if (val) {
          let districts = selectCity.value.find(
            (item: any) => item.code == city.value
          )!.children!
          selectDistrict.value = districts
        }

        district.value = ''
      }
    )
    // 监听选择区域，向外抛出函数
    watch(
      () => district.value,
      (val) => {
        if (val) {
          let provinceData: Data = {
            code: province.value,
            name: allAreas.find((item) => item.code == province.value)!.name,
          }
          let cityData: Data = {
            code: city.value,
            name: selectCity.value.find((item) => item.code == city.value)!
              .name,
          }
          let districtData: Data = {
            code: district.value,
            name: selectDistrict.value.find(
              (item) => item.code == district.value
            )!.name,
          }
          context.emit('change', {
            province: provinceData,
            city: cityData,
            district: districtData,
          })
        }
      }
    )
    return {
      province,
      city,
      district,
      areas,
      selectCity,
      selectDistrict,
    }
  },
})
</script>

<style></style>
