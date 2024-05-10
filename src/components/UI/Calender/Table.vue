<script setup lang="ts">
import { h } from 'vue'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons-vue'

import dayjs from 'dayjs'
import { getTableDateTdArr } from '@/utils/calender'
import type { DayItem } from '@/model'

const DaysTableHead = ['一', '二', '三', '四', '五', '六', '日'].map(s => `星期${s}`)

const date = ref(dayjs().format('YYYY-MM'))

const tableDateArr = computed(() => {
  return getTableDateTdArr(date.value)
})

const selectedDay = ref<DayItem>()

// Mock data
const availableWorkingDaysByUserSetting = [1, 2, 3, 4, 5]// 周一到周五

function judgeWorkingDayIsInUserSetting(workingDay?: number) {
  if (workingDay !== undefined && workingDay !== null) {
    return availableWorkingDaysByUserSetting.includes(workingDay)
  }
  return false
}

const mockedTableDateArr = computed(() => {
  return tableDateArr.value.map((week) => {
    return week.map((item) => {
      return {
        day: item.day,
        selected: selectedDay.value?.day === item.day,
        available: judgeWorkingDayIsInUserSetting(item.workingDay),
        isToday: item.isToday,
      }
    })
  })
},
)

function handleDaySelectedChange(day: DayItem) {
  selectedDay.value = day
}
function handleMonChange(type: 'left' | 'right') {
  if (type === 'left') {
    date.value = dayjs(date.value).subtract(1, 'M').format('YYYY-MM')
  }
  if (type === 'right') {
    date.value = dayjs(date.value).add(1, 'M').format('YYYY-MM')
  }
}
</script>

<template>
  <div class="calender-ctn">
    <div>
      <a-button type="primary" shape="circle" :icon="h(CaretLeftOutlined)" @click="() => handleMonChange('left')" />
      {{ date }}
      <a-button type="primary" shape="circle" :icon="h(CaretRightOutlined)" @click="() => handleMonChange('right')" />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(s, i) in DaysTableHead" :key="i" class="table-head">
            {{ s }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, i) in mockedTableDateArr" :key="i">
          <td v-for="(day, j) in week" :key="j">
            <UICalenderDayButton :data="day" @change="handleDaySelectedChange" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="css">
.table {
  border-spacing: 0 8px;
}
.table-head {
  font-size: 12px;
  color: var(--text-color);
}
</style>
