<script setup lang="ts">
import { getTableDateTdArr } from '@/utils/calender'
import type { DayItem } from '@/model'

const DaysTableHead = ['一', '二', '三', '四', '五', '六', '日'].map(s => `星期${s}`)

const date = '2024-05'

const tableDateArr = getTableDateTdArr(date)

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
  return tableDateArr.map((week) => {
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
</script>

<template>
  <div>
    Canlender
    <div>
      {{ date }}
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(s, i) in DaysTableHead" :key=" i">
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

<style scoped></style>
